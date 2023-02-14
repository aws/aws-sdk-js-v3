// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { SsmSap } from "../SsmSap";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SsmSapClient,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOperationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SsmSap,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.listOperations(input, ...args);
};
export async function* paginateListOperations(
  config: SsmSapPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListOperationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOperationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SsmSap) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SsmSapClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SsmSap | SsmSapClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
