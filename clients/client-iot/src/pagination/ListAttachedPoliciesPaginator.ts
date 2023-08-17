// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAttachedPoliciesCommand,
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "../commands/ListAttachedPoliciesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAttachedPoliciesCommandInput,
  ...args: any
): Promise<ListAttachedPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAttachedPolicies(
  config: IoTPaginationConfiguration,
  input: ListAttachedPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttachedPoliciesCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoTClient) {
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
