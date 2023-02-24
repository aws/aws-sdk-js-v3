// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVehiclesCommand,
  ListVehiclesCommandInput,
  ListVehiclesCommandOutput,
} from "../commands/ListVehiclesCommand";
import { IoTFleetWise } from "../IoTFleetWise";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTFleetWiseClient,
  input: ListVehiclesCommandInput,
  ...args: any
): Promise<ListVehiclesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVehiclesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTFleetWise,
  input: ListVehiclesCommandInput,
  ...args: any
): Promise<ListVehiclesCommandOutput> => {
  // @ts-ignore
  return await client.listVehicles(input, ...args);
};
export async function* paginateListVehicles(
  config: IoTFleetWisePaginationConfiguration,
  input: ListVehiclesCommandInput,
  ...additionalArguments: any
): Paginator<ListVehiclesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVehiclesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTFleetWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTFleetWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTFleetWise | IoTFleetWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
