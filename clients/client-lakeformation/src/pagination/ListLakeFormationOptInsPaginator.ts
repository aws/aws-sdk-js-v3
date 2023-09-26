// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLakeFormationOptInsCommand,
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput,
} from "../commands/ListLakeFormationOptInsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: ListLakeFormationOptInsCommandInput,
  ...args: any
): Promise<ListLakeFormationOptInsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLakeFormationOptInsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLakeFormationOptIns(
  config: LakeFormationPaginationConfiguration,
  input: ListLakeFormationOptInsCommandInput,
  ...additionalArguments: any
): Paginator<ListLakeFormationOptInsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLakeFormationOptInsCommandOutput;
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
