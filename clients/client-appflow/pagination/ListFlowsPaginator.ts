import { Appflow } from "../Appflow";
import { AppflowClient } from "../AppflowClient";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppflowClient,
  input: ListFlowsCommandInput,
  ...args: any
): Promise<ListFlowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlowsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Appflow,
  input: ListFlowsCommandInput,
  ...args: any
): Promise<ListFlowsCommandOutput> => {
  // @ts-ignore
  return await client.listFlows(input, ...args);
};
export async function* listFlowsPaginate(
  config: AppflowPaginationConfiguration,
  input: ListFlowsCommandInput,
  ...additionalArguments: any
): Paginator<ListFlowsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlowsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Appflow) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
