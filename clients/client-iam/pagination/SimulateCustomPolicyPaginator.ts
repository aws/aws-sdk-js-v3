import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  SimulateCustomPolicyCommand,
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "../commands/SimulateCustomPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: SimulateCustomPolicyCommandInput,
  ...args: any
): Promise<SimulateCustomPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new SimulateCustomPolicyCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: SimulateCustomPolicyCommandInput,
  ...args: any
): Promise<SimulateCustomPolicyCommandOutput> => {
  // @ts-ignore
  return await client.simulateCustomPolicy(input, ...args);
};
export async function* paginateSimulateCustomPolicy(
  config: IAMPaginationConfiguration,
  input: SimulateCustomPolicyCommandInput,
  ...additionalArguments: any
): Paginator<SimulateCustomPolicyCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SimulateCustomPolicyCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
