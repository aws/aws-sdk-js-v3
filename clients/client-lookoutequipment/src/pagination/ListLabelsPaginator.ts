// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListLabelsCommand, ListLabelsCommandInput, ListLabelsCommandOutput } from "../commands/ListLabelsCommand";
import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListLabelsCommandInput,
  ...args: any
): Promise<ListLabelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLabelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListLabelsCommandInput,
  ...args: any
): Promise<ListLabelsCommandOutput> => {
  // @ts-ignore
  return await client.listLabels(input, ...args);
};
export async function* paginateListLabels(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListLabelsCommandInput,
  ...additionalArguments: any
): Paginator<ListLabelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLabelsCommandOutput;
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
