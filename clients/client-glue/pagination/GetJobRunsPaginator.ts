import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GetJobRunsCommand, GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetJobRunsCommandInput,
  ...args: any
): Promise<GetJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.getJobRuns(input, ...args);
};
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
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
