import { Ivs } from "../Ivs";
import { IvsClient } from "../IvsClient";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { IvsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Ivs,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.listStreams(input, ...args);
};
export async function* paginateListStreams(
  config: IvsPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamsCommandOutput;
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
