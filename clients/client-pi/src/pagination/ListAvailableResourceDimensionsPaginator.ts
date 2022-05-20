// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAvailableResourceDimensionsCommand,
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
} from "../commands/ListAvailableResourceDimensionsCommand";
import { PI } from "../PI";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PIClient,
  input: ListAvailableResourceDimensionsCommandInput,
  ...args: any
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAvailableResourceDimensionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PI,
  input: ListAvailableResourceDimensionsCommandInput,
  ...args: any
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  // @ts-ignore
  return await client.listAvailableResourceDimensions(input, ...args);
};
export async function* paginateListAvailableResourceDimensions(
  config: PIPaginationConfiguration,
  input: ListAvailableResourceDimensionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAvailableResourceDimensionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAvailableResourceDimensionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PI | PIClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
