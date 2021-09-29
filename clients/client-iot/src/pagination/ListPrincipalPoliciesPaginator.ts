import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListPrincipalPoliciesCommand,
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "../commands/ListPrincipalPoliciesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListPrincipalPoliciesCommandInput,
  ...args: any
): Promise<ListPrincipalPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listPrincipalPolicies(input, ...args);
};
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
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
