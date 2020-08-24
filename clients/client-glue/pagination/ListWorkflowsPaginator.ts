import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: ListWorkflowsCommandInput,
  ...args: any
): Promise<ListWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: ListWorkflowsCommandInput,
  ...args: any
): Promise<ListWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkflows(input, ...args);
};
export async function* listWorkflowsPaginate(
  config: GluePaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListWorkflowsCommandOutput;
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
