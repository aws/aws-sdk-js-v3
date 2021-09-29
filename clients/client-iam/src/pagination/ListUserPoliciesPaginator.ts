import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListUserPoliciesCommand,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "../commands/ListUserPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListUserPoliciesCommandInput,
  ...args: any
): Promise<ListUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListUserPoliciesCommandInput,
  ...args: any
): Promise<ListUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listUserPolicies(input, ...args);
};
export async function* paginateListUserPolicies(
  config: IAMPaginationConfiguration,
  input: ListUserPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListUserPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUserPoliciesCommandOutput;
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
