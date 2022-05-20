// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTableStorageOptimizersCommand,
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "../commands/ListTableStorageOptimizersCommand";
import { LakeFormation } from "../LakeFormation";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: ListTableStorageOptimizersCommandInput,
  ...args: any
): Promise<ListTableStorageOptimizersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableStorageOptimizersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LakeFormation,
  input: ListTableStorageOptimizersCommandInput,
  ...args: any
): Promise<ListTableStorageOptimizersCommandOutput> => {
  // @ts-ignore
  return await client.listTableStorageOptimizers(input, ...args);
};
export async function* paginateListTableStorageOptimizers(
  config: LakeFormationPaginationConfiguration,
  input: ListTableStorageOptimizersCommandInput,
  ...additionalArguments: any
): Paginator<ListTableStorageOptimizersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableStorageOptimizersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LakeFormationClient) {
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
