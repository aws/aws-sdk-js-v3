// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListInferenceExecutionsCommand,
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "../commands/ListInferenceExecutionsCommand";
import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListInferenceExecutionsCommandInput,
  ...args: any
): Promise<ListInferenceExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInferenceExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListInferenceExecutionsCommandInput,
  ...args: any
): Promise<ListInferenceExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listInferenceExecutions(input, ...args);
};
export async function* paginateListInferenceExecutions(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListInferenceExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListInferenceExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInferenceExecutionsCommandOutput;
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
