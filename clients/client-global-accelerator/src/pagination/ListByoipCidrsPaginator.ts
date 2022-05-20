// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListByoipCidrsCommand,
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput,
} from "../commands/ListByoipCidrsCommand";
import { GlobalAccelerator } from "../GlobalAccelerator";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListByoipCidrsCommandInput,
  ...args: any
): Promise<ListByoipCidrsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListByoipCidrsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GlobalAccelerator,
  input: ListByoipCidrsCommandInput,
  ...args: any
): Promise<ListByoipCidrsCommandOutput> => {
  // @ts-ignore
  return await client.listByoipCidrs(input, ...args);
};
export async function* paginateListByoipCidrs(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListByoipCidrsCommandInput,
  ...additionalArguments: any
): Paginator<ListByoipCidrsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListByoipCidrsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAccelerator) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
