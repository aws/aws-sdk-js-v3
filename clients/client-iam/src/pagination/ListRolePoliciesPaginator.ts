import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListRolePoliciesCommand,
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "../commands/ListRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListRolePoliciesCommandInput,
  ...args: any
): Promise<ListRolePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRolePoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListRolePoliciesCommandInput,
  ...args: any
): Promise<ListRolePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listRolePolicies(input, ...args);
};
export async function* paginateListRolePolicies(
  config: IAMPaginationConfiguration,
  input: ListRolePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListRolePoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRolePoliciesCommandOutput;
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
