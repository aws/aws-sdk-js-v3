import { SMS } from "../SMS";
import { SMSClient } from "../SMSClient";
import {
  GetReplicationRunsCommand,
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput,
} from "../commands/GetReplicationRunsCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SMSClient,
  input: GetReplicationRunsCommandInput,
  ...args: any
): Promise<GetReplicationRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReplicationRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SMS,
  input: GetReplicationRunsCommandInput,
  ...args: any
): Promise<GetReplicationRunsCommandOutput> => {
  // @ts-ignore
  return await client.getReplicationRuns(input, ...args);
};
export async function* paginateGetReplicationRuns(
  config: SMSPaginationConfiguration,
  input: GetReplicationRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetReplicationRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReplicationRunsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SMS | SMSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
