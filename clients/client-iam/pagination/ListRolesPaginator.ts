import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { ListRolesCommand, ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListRolesCommandInput,
  ...args: any
): Promise<ListRolesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRolesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListRolesCommandInput,
  ...args: any
): Promise<ListRolesCommandOutput> => {
  // @ts-ignore
  return await client.listRoles(input, ...args);
};
export async function* listRolesPaginate(
  config: IAMPaginationConfiguration,
  input: ListRolesCommandInput,
  ...additionalArguments: any
): Paginator<ListRolesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRolesCommandOutput;
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
