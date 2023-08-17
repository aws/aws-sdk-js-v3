// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetInventoryCommand,
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
} from "../commands/GetInventoryCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: GetInventoryCommandInput,
  ...args: any
): Promise<GetInventoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInventoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetInventory(
  config: SSMPaginationConfiguration,
  input: GetInventoryCommandInput,
  ...additionalArguments: any
): Paginator<GetInventoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInventoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
