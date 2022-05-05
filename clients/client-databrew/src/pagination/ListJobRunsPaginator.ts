// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListJobRunsCommandInput,
  ...args: any
): Promise<ListJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataBrew,
  input: ListJobRunsCommandInput,
  ...args: any
): Promise<ListJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.listJobRuns(input, ...args);
};
export async function* paginateListJobRuns(
  config: DataBrewPaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListJobRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataBrew) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataBrewClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataBrew | DataBrewClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
