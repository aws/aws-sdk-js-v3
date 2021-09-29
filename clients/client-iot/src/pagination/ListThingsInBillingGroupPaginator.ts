import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingsInBillingGroupCommand,
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
} from "../commands/ListThingsInBillingGroupCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingsInBillingGroupCommandInput,
  ...args: any
): Promise<ListThingsInBillingGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingsInBillingGroupCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListThingsInBillingGroupCommandInput,
  ...args: any
): Promise<ListThingsInBillingGroupCommandOutput> => {
  // @ts-ignore
  return await client.listThingsInBillingGroup(input, ...args);
};
export async function* paginateListThingsInBillingGroup(
  config: IoTPaginationConfiguration,
  input: ListThingsInBillingGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListThingsInBillingGroupCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingsInBillingGroupCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
