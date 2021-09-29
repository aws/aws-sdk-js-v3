import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { SnowballPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowballClient,
  input: ListJobsCommandInput,
  ...args: any
): Promise<ListJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Snowball,
  input: ListJobsCommandInput,
  ...args: any
): Promise<ListJobsCommandOutput> => {
  // @ts-ignore
  return await client.listJobs(input, ...args);
};
export async function* paginateListJobs(
  config: SnowballPaginationConfiguration,
  input: ListJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Snowball) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowballClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Snowball | SnowballClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
