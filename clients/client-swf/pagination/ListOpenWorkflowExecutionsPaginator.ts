import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  ListOpenWorkflowExecutionsCommand,
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "../commands/ListOpenWorkflowExecutionsCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SWFClient,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOpenWorkflowExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SWF,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listOpenWorkflowExecutions(input, ...args);
};
export async function* listOpenWorkflowExecutionsPaginate(
  config: SWFPaginationConfiguration,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListOpenWorkflowExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOpenWorkflowExecutionsCommandOutput;
  while (hasNext) {
    input.nextPageToken = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page.nextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
