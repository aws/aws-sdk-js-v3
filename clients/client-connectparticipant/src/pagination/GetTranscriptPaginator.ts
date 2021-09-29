import { ConnectParticipant } from "../ConnectParticipant";
import { ConnectParticipantClient } from "../ConnectParticipantClient";
import {
  GetTranscriptCommand,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "../commands/GetTranscriptCommand";
import { ConnectParticipantPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: ConnectParticipant,
  input: GetTranscriptCommandInput,
  ...args: any
): Promise<GetTranscriptCommandOutput> => {
  // @ts-ignore
  return await client.getTranscript(input, ...args);
};
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
    if (config.client instanceof ConnectParticipant) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectParticipantClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectParticipant | ConnectParticipantClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
