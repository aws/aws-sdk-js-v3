import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  SimulatePrincipalPolicyCommand,
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "../commands/SimulatePrincipalPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: SimulatePrincipalPolicyCommandInput,
  ...args: any
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new SimulatePrincipalPolicyCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: SimulatePrincipalPolicyCommandInput,
  ...args: any
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  // @ts-ignore
  return await client.simulatePrincipalPolicy(input, ...args);
};
export async function* paginateSimulatePrincipalPolicy(
  config: IAMPaginationConfiguration,
  input: SimulatePrincipalPolicyCommandInput,
  ...additionalArguments: any
): Paginator<SimulatePrincipalPolicyCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SimulatePrincipalPolicyCommandOutput;
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
