// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetReplicationJobsCommand,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
} from "../commands/GetReplicationJobsCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof SMSClient) {
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
