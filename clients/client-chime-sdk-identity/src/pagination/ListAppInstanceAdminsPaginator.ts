import { ChimeSDKIdentity } from "../ChimeSDKIdentity";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKIdentityClient,
  input: ListAppInstanceAdminsCommandInput,
  ...args: any
): Promise<ListAppInstanceAdminsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstanceAdminsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKIdentity,
  input: ListAppInstanceAdminsCommandInput,
  ...args: any
): Promise<ListAppInstanceAdminsCommandOutput> => {
  // @ts-ignore
  return await client.listAppInstanceAdmins(input, ...args);
};
export async function* paginateListAppInstanceAdmins(
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceAdminsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstanceAdminsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstanceAdminsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKIdentity) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKIdentityClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKIdentity | ChimeSDKIdentityClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
