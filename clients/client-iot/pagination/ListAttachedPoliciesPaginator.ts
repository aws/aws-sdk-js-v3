import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListAttachedPoliciesCommand,
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "../commands/ListAttachedPoliciesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListAttachedPoliciesCommandInput,
  ...args: any
): Promise<ListAttachedPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listAttachedPolicies(input, ...args);
};
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
