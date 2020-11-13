import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { SearchRoomsCommand, SearchRoomsCommandInput, SearchRoomsCommandOutput } from "../commands/SearchRoomsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchRoomsCommandInput,
  ...args: any
): Promise<SearchRoomsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchRoomsCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchRoomsCommandInput,
  ...args: any
): Promise<SearchRoomsCommandOutput> => {
  // @ts-ignore
  return await client.searchRooms(input, ...args);
};
export async function* searchRoomsPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchRoomsCommandInput,
  ...additionalArguments: any
): Paginator<SearchRoomsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchRoomsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
