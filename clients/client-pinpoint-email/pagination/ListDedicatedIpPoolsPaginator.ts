import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListDedicatedIpPoolsCommandInput,
  ...args: any
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDedicatedIpPoolsCommand(input, ...args));
};
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListDedicatedIpPoolsCommandInput,
  ...args: any
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  // @ts-ignore
  return await client.listDedicatedIpPools(input, ...args);
};
export async function* listDedicatedIpPoolsPaginate(
  config: PinpointEmailPaginationConfiguration,
  input: ListDedicatedIpPoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListDedicatedIpPoolsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDedicatedIpPoolsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
