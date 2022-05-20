// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListLensesCommand, ListLensesCommandInput, ListLensesCommandOutput } from "../commands/ListLensesCommand";
import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListLensesCommandInput,
  ...args: any
): Promise<ListLensesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLensesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WellArchitected,
  input: ListLensesCommandInput,
  ...args: any
): Promise<ListLensesCommandOutput> => {
  // @ts-ignore
  return await client.listLenses(input, ...args);
};
export async function* paginateListLenses(
  config: WellArchitectedPaginationConfiguration,
  input: ListLensesCommandInput,
  ...additionalArguments: any
): Paginator<ListLensesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLensesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitected) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WellArchitectedClient) {
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
