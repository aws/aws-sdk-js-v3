// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPrincipalPoliciesCommand,
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "../commands/ListPrincipalPoliciesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListPrincipalPoliciesCommandInput,
  ...args: any
): Promise<ListPrincipalPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPrincipalPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPrincipalPolicies(
  config: IoTPaginationConfiguration,
  input: ListPrincipalPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListPrincipalPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPrincipalPoliciesCommandOutput;
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
