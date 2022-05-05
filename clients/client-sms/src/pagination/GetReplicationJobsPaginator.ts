// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetReplicationJobsCommand,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
} from "../commands/GetReplicationJobsCommand";
import { SMS } from "../SMS";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SMSClient,
  input: GetReplicationJobsCommandInput,
  ...args: any
): Promise<GetReplicationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReplicationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SMS,
  input: GetReplicationJobsCommandInput,
  ...args: any
): Promise<GetReplicationJobsCommandOutput> => {
  // @ts-ignore
  return await client.getReplicationJobs(input, ...args);
};
export async function* paginateGetReplicationJobs(
  config: SMSPaginationConfiguration,
  input: GetReplicationJobsCommandInput,
  ...additionalArguments: any
): Paginator<GetReplicationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReplicationJobsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
