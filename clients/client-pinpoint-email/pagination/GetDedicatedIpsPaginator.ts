import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "../commands/GetDedicatedIpsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: GetDedicatedIpsCommandInput,
  ...args: any
): Promise<GetDedicatedIpsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDedicatedIpsCommand(input), ...args);
};
const makePagedRequest = async (
  client: PinpointEmail,
  input: GetDedicatedIpsCommandInput,
  ...args: any
): Promise<GetDedicatedIpsCommandOutput> => {
  // @ts-ignore
  return await client.getDedicatedIps(input, ...args);
};
export async function* getDedicatedIpsPaginate(
  config: PinpointEmailPaginationConfiguration,
  input: GetDedicatedIpsCommandInput,
  ...additionalArguments: any
): Paginator<GetDedicatedIpsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
