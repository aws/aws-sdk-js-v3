// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCheckDetailsCommand,
  ListCheckDetailsCommandInput,
  ListCheckDetailsCommandOutput,
} from "../commands/ListCheckDetailsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListCheckDetailsCommandInput,
  ...args: any
): Promise<ListCheckDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCheckDetailsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCheckDetails(
  config: WellArchitectedPaginationConfiguration,
  input: ListCheckDetailsCommandInput,
  ...additionalArguments: any
): Paginator<ListCheckDetailsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCheckDetailsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
