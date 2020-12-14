import { Ivs } from "../Ivs";
import { IvsClient } from "../IvsClient";
import {
  ListStreamKeysCommand,
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput,
} from "../commands/ListStreamKeysCommand";
import { IvsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListStreamKeysCommandInput,
  ...args: any
): Promise<ListStreamKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Ivs,
  input: ListStreamKeysCommandInput,
  ...args: any
): Promise<ListStreamKeysCommandOutput> => {
  // @ts-ignore
  return await client.listStreamKeys(input, ...args);
};
export async function* paginateListStreamKeys(
  config: IvsPaginationConfiguration,
  input: ListStreamKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamKeysCommandOutput;
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
