// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListCellsCommand, ListCellsCommandInput, ListCellsCommandOutput } from "../commands/ListCellsCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: ListCellsCommandInput,
  ...args: any
): Promise<ListCellsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCellsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCells(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListCellsCommandInput,
  ...additionalArguments: any
): Paginator<ListCellsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCellsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryReadinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryReadiness | Route53RecoveryReadinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
