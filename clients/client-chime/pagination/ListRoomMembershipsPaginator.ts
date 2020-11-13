import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListRoomMembershipsCommand,
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "../commands/ListRoomMembershipsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListRoomMembershipsCommandInput,
  ...args: any
): Promise<ListRoomMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoomMembershipsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Chime,
  input: ListRoomMembershipsCommandInput,
  ...args: any
): Promise<ListRoomMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.listRoomMemberships(input, ...args);
};
export async function* listRoomMembershipsPaginate(
  config: ChimePaginationConfiguration,
  input: ListRoomMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListRoomMembershipsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoomMembershipsCommandOutput;
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
