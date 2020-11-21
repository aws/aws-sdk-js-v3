import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListAppInstanceUsersCommandInput,
  ...args: any
): Promise<ListAppInstanceUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstanceUsersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Chime,
  input: ListAppInstanceUsersCommandInput,
  ...args: any
): Promise<ListAppInstanceUsersCommandOutput> => {
  // @ts-ignore
  return await client.listAppInstanceUsers(input, ...args);
};
export async function* paginateListAppInstanceUsers(
  config: ChimePaginationConfiguration,
  input: ListAppInstanceUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstanceUsersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstanceUsersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
