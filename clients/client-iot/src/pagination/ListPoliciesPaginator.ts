// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListPoliciesCommandInput,
  ...args: any
): Promise<ListPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListPoliciesCommandInput,
  ...args: any
): Promise<ListPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listPolicies(input, ...args);
};
export async function* paginateListPolicies(
  config: IoTPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPoliciesCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
