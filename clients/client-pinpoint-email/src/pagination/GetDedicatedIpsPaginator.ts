// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "../commands/GetDedicatedIpsCommand";
import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: GetDedicatedIpsCommandInput,
  ...args: any
): Promise<GetDedicatedIpsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDedicatedIpsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointEmail,
  input: GetDedicatedIpsCommandInput,
  ...args: any
): Promise<GetDedicatedIpsCommandOutput> => {
  // @ts-ignore
  return await client.getDedicatedIps(input, ...args);
};
export async function* paginateGetDedicatedIps(
  config: PinpointEmailPaginationConfiguration,
  input: GetDedicatedIpsCommandInput,
  ...additionalArguments: any
): Paginator<GetDedicatedIpsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDedicatedIpsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
