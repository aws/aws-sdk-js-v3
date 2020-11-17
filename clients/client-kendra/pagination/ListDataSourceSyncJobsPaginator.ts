import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { KendraPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KendraClient,
  input: ListDataSourceSyncJobsCommandInput,
  ...args: any
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourceSyncJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Kendra,
  input: ListDataSourceSyncJobsCommandInput,
  ...args: any
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDataSourceSyncJobs(input, ...args);
};
export async function* paginateListDataSourceSyncJobs(
  config: KendraPaginationConfiguration,
  input: ListDataSourceSyncJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourceSyncJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourceSyncJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
