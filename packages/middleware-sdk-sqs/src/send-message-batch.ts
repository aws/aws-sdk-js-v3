import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";
import { toHex } from "@aws-sdk/util-hex-encoding";

import { PreviouslyResolved } from "./configurations";

interface SendMessageBatchResult {
  Successful: Array<SendMessageBatchResultEntry> | undefined;
}

interface SendMessageBatchResultEntry {
  Id: string | undefined;
  MD5OfMessageBody: string | undefined;
  MessageId: string | undefined;
}

export const sendMessageBatchMiddleware =
  (options: PreviouslyResolved): InitializeMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
    const resp = await next({ ...args });
    const output = resp.output as unknown as SendMessageBatchResult;
    const messageIds = [];
    const entries: { [index: string]: SendMessageBatchResultEntry } = {};
    if (output.Successful !== undefined) {
      for (const entry of output.Successful) {
        if (entry.Id !== undefined) {
          entries[entry.Id] = entry;
        }
      }
    }
    for (const entry of args.input.Entries) {
      if (entries[entry.Id]) {
        const md5 = entries[entry.Id].MD5OfMessageBody;
        const hash = new options.md5();
        hash.update(entry.MessageBody || "");
        if (md5 !== toHex(await hash.digest())) {
          messageIds.push(entries[entry.Id].MessageId);
        }
      }
    }
    if (messageIds.length > 0) {
      throw new Error("Invalid MD5 checksum on messages: " + messageIds.join(", "));
    }

    return resp;
  };

export const sendMessageBatchMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BODY_MD5"],
  name: "sendMessageBatchMiddleware",
  override: true,
};

export const getSendMessageBatchPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(sendMessageBatchMiddleware(config), sendMessageBatchMiddlewareOptions);
  },
});
