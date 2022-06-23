// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListInferenceEventsCommand,
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput,
} from "../commands/ListInferenceEventsCommand";
import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListInferenceEventsCommandInput,
  ...args: any
): Promise<ListInferenceEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInferenceEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListInferenceEventsCommandInput,
  ...args: any
): Promise<ListInferenceEventsCommandOutput> => {
  // @ts-ignore
  return await client.listInferenceEvents(input, ...args);
};
export async function* paginateListInferenceEvents(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListInferenceEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListInferenceEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInferenceEventsCommandOutput;
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
