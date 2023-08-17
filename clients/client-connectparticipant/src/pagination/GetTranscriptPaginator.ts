// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetTranscriptCommand,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "../commands/GetTranscriptCommand";
import { ConnectParticipantClient } from "../ConnectParticipantClient";
import { ConnectParticipantPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectParticipantClient,
  input: GetTranscriptCommandInput,
  ...args: any
): Promise<GetTranscriptCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTranscriptCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTranscript(
  config: ConnectParticipantPaginationConfiguration,
  input: GetTranscriptCommandInput,
  ...additionalArguments: any
): Paginator<GetTranscriptCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTranscriptCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectParticipantClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectParticipant | ConnectParticipantClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
