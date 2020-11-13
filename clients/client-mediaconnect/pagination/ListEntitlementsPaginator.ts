import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";
import {
  ListEntitlementsCommand,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput,
} from "../commands/ListEntitlementsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListEntitlementsCommandInput,
  ...args: any
): Promise<ListEntitlementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitlementsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConnect,
  input: ListEntitlementsCommandInput,
  ...args: any
): Promise<ListEntitlementsCommandOutput> => {
  // @ts-ignore
  return await client.listEntitlements(input, ...args);
};
export async function* listEntitlementsPaginate(
  config: MediaConnectPaginationConfiguration,
  input: ListEntitlementsCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitlementsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitlementsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
