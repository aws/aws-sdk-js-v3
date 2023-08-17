// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetVehicleStatusCommand,
  GetVehicleStatusCommandInput,
  GetVehicleStatusCommandOutput,
} from "../commands/GetVehicleStatusCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTFleetWiseClient,
  input: GetVehicleStatusCommandInput,
  ...args: any
): Promise<GetVehicleStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetVehicleStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetVehicleStatus(
  config: IoTFleetWisePaginationConfiguration,
  input: GetVehicleStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetVehicleStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetVehicleStatusCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTFleetWiseClient) {
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
