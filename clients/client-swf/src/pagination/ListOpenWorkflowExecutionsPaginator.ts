import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  ListOpenWorkflowExecutionsCommand,
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "../commands/ListOpenWorkflowExecutionsCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SWFClient,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOpenWorkflowExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SWF,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listOpenWorkflowExecutions(input, ...args);
};
export async function* paginateListOpenWorkflowExecutions(
  config: SWFPaginationConfiguration,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListOpenWorkflowExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextPageToken
  let token: typeof input.nextPageToken | undefined = config.startingToken || undefined;
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
