// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListByoipCidrsCommand,
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput,
} from "../commands/ListByoipCidrsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof GlobalAcceleratorClient) {
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
