// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListDedicatedIpPoolsCommandInput,
  ...args: any
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDedicatedIpPoolsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListDedicatedIpPoolsCommandInput,
  ...args: any
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  // @ts-ignore
  return await client.listDedicatedIpPools(input, ...args);
};
export async function* paginateListDedicatedIpPools(
  config: PinpointEmailPaginationConfiguration,
  input: ListDedicatedIpPoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListDedicatedIpPoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDedicatedIpPoolsCommandOutput;
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
