// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListInferenceSchedulersCommand,
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "../commands/ListInferenceSchedulersCommand";
import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListInferenceSchedulersCommandInput,
  ...args: any
): Promise<ListInferenceSchedulersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInferenceSchedulersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListInferenceSchedulersCommandInput,
  ...args: any
): Promise<ListInferenceSchedulersCommandOutput> => {
  // @ts-ignore
  return await client.listInferenceSchedulers(input, ...args);
};
export async function* paginateListInferenceSchedulers(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListInferenceSchedulersCommandInput,
  ...additionalArguments: any
): Paginator<ListInferenceSchedulersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInferenceSchedulersCommandOutput;
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
