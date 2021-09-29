import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetMLTaskRunsCommand,
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput,
} from "../commands/GetMLTaskRunsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetMLTaskRunsCommandInput,
  ...args: any
): Promise<GetMLTaskRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMLTaskRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetMLTaskRunsCommandInput,
  ...args: any
): Promise<GetMLTaskRunsCommandOutput> => {
  // @ts-ignore
  return await client.getMLTaskRuns(input, ...args);
};
export async function* paginateGetMLTaskRuns(
  config: GluePaginationConfiguration,
  input: GetMLTaskRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetMLTaskRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMLTaskRunsCommandOutput;
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
