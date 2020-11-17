import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListFlowsCommandInput,
  ...args: any
): Promise<ListFlowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlowsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConnect,
  input: ListFlowsCommandInput,
  ...args: any
): Promise<ListFlowsCommandOutput> => {
  // @ts-ignore
  return await client.listFlows(input, ...args);
};
export async function* paginateListFlows(
  config: MediaConnectPaginationConfiguration,
  input: ListFlowsCommandInput,
  ...additionalArguments: any
): Paginator<ListFlowsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
