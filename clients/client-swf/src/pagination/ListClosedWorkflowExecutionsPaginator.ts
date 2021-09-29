import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  ListClosedWorkflowExecutionsCommand,
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "../commands/ListClosedWorkflowExecutionsCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SWFClient,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClosedWorkflowExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SWF,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listClosedWorkflowExecutions(input, ...args);
};
export async function* paginateListClosedWorkflowExecutions(
  config: SWFPaginationConfiguration,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListClosedWorkflowExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextPageToken
  let token: typeof input.nextPageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClosedWorkflowExecutionsCommandOutput;
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
