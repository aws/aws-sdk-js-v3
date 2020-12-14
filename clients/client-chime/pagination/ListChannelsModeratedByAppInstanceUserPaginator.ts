import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelsModeratedByAppInstanceUserCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.listChannelsModeratedByAppInstanceUser(input, ...args);
};
export async function* paginateListChannelsModeratedByAppInstanceUser(
  config: ChimePaginationConfiguration,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelsModeratedByAppInstanceUserCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelsModeratedByAppInstanceUserCommandOutput;
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
