import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListUserHierarchyGroupsCommand,
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "../commands/ListUserHierarchyGroupsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListUserHierarchyGroupsCommandInput,
  ...args: any
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserHierarchyGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Connect,
  input: ListUserHierarchyGroupsCommandInput,
  ...args: any
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listUserHierarchyGroups(input, ...args);
};
export async function* listUserHierarchyGroupsPaginate(
  config: ConnectPaginationConfiguration,
  input: ListUserHierarchyGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListUserHierarchyGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUserHierarchyGroupsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
