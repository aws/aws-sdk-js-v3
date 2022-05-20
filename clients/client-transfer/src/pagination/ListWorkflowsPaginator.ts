// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListWorkflowsCommandInput,
  ...args: any
): Promise<ListWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListWorkflowsCommandInput,
  ...args: any
): Promise<ListWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkflows(input, ...args);
};
export async function* paginateListWorkflows(
  config: TransferPaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transfer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TransferClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transfer | TransferClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
