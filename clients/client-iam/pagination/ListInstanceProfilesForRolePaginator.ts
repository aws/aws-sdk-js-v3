import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "../commands/ListInstanceProfilesForRoleCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListInstanceProfilesForRoleCommandInput,
  ...args: any
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceProfilesForRoleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListInstanceProfilesForRoleCommandInput,
  ...args: any
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceProfilesForRole(input, ...args);
};
export async function* paginateListInstanceProfilesForRole(
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesForRoleCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceProfilesForRoleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceProfilesForRoleCommandOutput;
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
