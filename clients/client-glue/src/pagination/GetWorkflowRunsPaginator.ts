// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetWorkflowRunsCommand,
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput,
} from "../commands/GetWorkflowRunsCommand";
import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetWorkflowRunsCommandInput,
  ...args: any
): Promise<GetWorkflowRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetWorkflowRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetWorkflowRunsCommandInput,
  ...args: any
): Promise<GetWorkflowRunsCommandOutput> => {
  // @ts-ignore
  return await client.getWorkflowRuns(input, ...args);
};
export async function* paginateGetWorkflowRuns(
  config: GluePaginationConfiguration,
  input: GetWorkflowRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetWorkflowRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetWorkflowRunsCommandOutput;
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
