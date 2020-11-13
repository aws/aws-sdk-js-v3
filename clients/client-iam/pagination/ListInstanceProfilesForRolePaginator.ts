import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "../commands/ListInstanceProfilesForRoleCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListInstanceProfilesForRoleCommandInput,
  ...args: any
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceProfilesForRoleCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListInstanceProfilesForRoleCommandInput,
  ...args: any
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceProfilesForRole(input, ...args);
};
export async function* listInstanceProfilesForRolePaginate(
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesForRoleCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceProfilesForRoleCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
