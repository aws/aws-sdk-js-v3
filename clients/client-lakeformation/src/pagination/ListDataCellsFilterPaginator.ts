// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDataCellsFilterCommand,
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "../commands/ListDataCellsFilterCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: ListDataCellsFilterCommandInput,
  ...args: any
): Promise<ListDataCellsFilterCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataCellsFilterCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataCellsFilter(
  config: LakeFormationPaginationConfiguration,
  input: ListDataCellsFilterCommandInput,
  ...additionalArguments: any
): Paginator<ListDataCellsFilterCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataCellsFilterCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
