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

interface SendMessageResult {
  MD5OfMessageBody?: string;
}

export const sendMessageMiddleware =
  (options: PreviouslyResolved): InitializeMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
    const resp = await next({ ...args });
    const output = resp.output as SendMessageResult;
    const hash = new options.md5();
    hash.update(args.input.MessageBody || "");
    if (output.MD5OfMessageBody !== toHex(await hash.digest())) {
      throw new Error("InvalidChecksumError");
    }
    return resp;
  };

export const sendMessageMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BODY_MD5"],
  name: "sendMessageMiddleware",
  override: true,
};

export const getSendMessagePlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(sendMessageMiddleware(config), sendMessageMiddlewareOptions);
  },
});
