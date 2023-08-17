// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListModelVersionsCommand,
  ListModelVersionsCommandInput,
  ListModelVersionsCommandOutput,
} from "../commands/ListModelVersionsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListModelVersionsCommandInput,
  ...args: any
): Promise<ListModelVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListModelVersions(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListModelVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutEquipmentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutEquipment | LookoutEquipmentClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
