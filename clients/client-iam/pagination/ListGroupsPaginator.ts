import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGroups(input, ...args);
};
export async function* listGroupsPaginate(
  config: IAMPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupsCommandOutput;
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
