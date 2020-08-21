import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListGroupsForUserCommand,
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "../commands/ListGroupsForUserCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListGroupsForUserCommandInput,
  ...args: any
): Promise<ListGroupsForUserCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupsForUserCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListGroupsForUserCommandInput,
  ...args: any
): Promise<ListGroupsForUserCommandOutput> => {
  // @ts-ignore
  return await client.listGroupsForUser(input, ...args);
};
export async function* listGroupsForUserPaginate(
  config: IAMPaginationConfiguration,
  input: ListGroupsForUserCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupsForUserCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListGroupsForUserCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
