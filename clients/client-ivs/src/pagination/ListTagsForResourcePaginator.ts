import { Ivs } from "../Ivs";
import { IvsClient } from "../IvsClient";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { IvsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsForResourceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Ivs,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.listTagsForResource(input, ...args);
};
export async function* paginateListTagsForResource(
  config: IvsPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsForResourceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagsForResourceCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Ivs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IvsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivs | IvsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
