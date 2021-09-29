import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import {
  GetServiceGraphCommand,
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
} from "../commands/GetServiceGraphCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetServiceGraphCommandInput,
  ...args: any
): Promise<GetServiceGraphCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetServiceGraphCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: XRay,
  input: GetServiceGraphCommandInput,
  ...args: any
): Promise<GetServiceGraphCommandOutput> => {
  // @ts-ignore
  return await client.getServiceGraph(input, ...args);
};
export async function* paginateGetServiceGraph(
  config: XRayPaginationConfiguration,
  input: GetServiceGraphCommandInput,
  ...additionalArguments: any
): Paginator<GetServiceGraphCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetServiceGraphCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
