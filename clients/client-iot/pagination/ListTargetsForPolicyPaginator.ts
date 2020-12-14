import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListTargetsForPolicyCommandInput,
  ...args: any
): Promise<ListTargetsForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetsForPolicyCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListTargetsForPolicyCommandInput,
  ...args: any
): Promise<ListTargetsForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.listTargetsForPolicy(input, ...args);
};
export async function* paginateListTargetsForPolicy(
  config: IoTPaginationConfiguration,
  input: ListTargetsForPolicyCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetsForPolicyCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetsForPolicyCommandOutput;
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
