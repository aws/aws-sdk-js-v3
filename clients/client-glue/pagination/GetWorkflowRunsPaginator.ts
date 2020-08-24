import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetWorkflowRunsCommand,
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput,
} from "../commands/GetWorkflowRunsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetWorkflowRunsCommandInput,
  ...args: any
): Promise<GetWorkflowRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetWorkflowRunsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetWorkflowRunsCommandInput,
  ...args: any
): Promise<GetWorkflowRunsCommandOutput> => {
  // @ts-ignore
  return await client.getWorkflowRuns(input, ...args);
};
export async function* getWorkflowRunsPaginate(
  config: GluePaginationConfiguration,
  input: GetWorkflowRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetWorkflowRunsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetWorkflowRunsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
