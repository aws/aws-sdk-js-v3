// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { GetJobRunsCommand, GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetJobRunsCommandInput,
  ...args: any
): Promise<GetJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetJobRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetJobRuns(
  config: GluePaginationConfiguration,
  input: GetJobRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetJobRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetJobRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
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
