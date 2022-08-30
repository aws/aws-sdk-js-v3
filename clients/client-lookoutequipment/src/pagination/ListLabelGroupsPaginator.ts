// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLabelGroupsCommand,
  ListLabelGroupsCommandInput,
  ListLabelGroupsCommandOutput,
} from "../commands/ListLabelGroupsCommand";
import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListLabelGroupsCommandInput,
  ...args: any
): Promise<ListLabelGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLabelGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListLabelGroupsCommandInput,
  ...args: any
): Promise<ListLabelGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listLabelGroups(input, ...args);
};
export async function* paginateListLabelGroups(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListLabelGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListLabelGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLabelGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutEquipment) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LookoutEquipmentClient) {
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
