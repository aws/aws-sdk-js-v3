import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListModelsCommandInput,
  ...args: any
): Promise<ListModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListModelsCommandInput,
  ...args: any
): Promise<ListModelsCommandOutput> => {
  // @ts-ignore
  return await client.listModels(input, ...args);
};
export async function* paginateListModels(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
