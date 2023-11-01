// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCrossAccountResourcesCommand,
  ListCrossAccountResourcesCommandInput,
  ListCrossAccountResourcesCommandOutput,
} from "../commands/ListCrossAccountResourcesCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCrossAccountResourcesCommandInput,
  ...args: any
): Promise<ListCrossAccountResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCrossAccountResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCrossAccountResources(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCrossAccountResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListCrossAccountResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCrossAccountResourcesCommandOutput;
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
