// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetJobsCommand, GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand";
import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetJobsCommandInput,
  ...args: any
): Promise<GetJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetJobsCommandInput,
  ...args: any
): Promise<GetJobsCommandOutput> => {
  // @ts-ignore
  return await client.getJobs(input, ...args);
};
export async function* paginateGetJobs(
  config: GluePaginationConfiguration,
  input: GetJobsCommandInput,
  ...additionalArguments: any
): Paginator<GetJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
