// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTemplateSharesCommand,
  ListTemplateSharesCommandInput,
  ListTemplateSharesCommandOutput,
} from "../commands/ListTemplateSharesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListTemplateSharesCommandInput,
  ...args: any
): Promise<ListTemplateSharesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateSharesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTemplateShares(
  config: WellArchitectedPaginationConfiguration,
  input: ListTemplateSharesCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateSharesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplateSharesCommandOutput;
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
