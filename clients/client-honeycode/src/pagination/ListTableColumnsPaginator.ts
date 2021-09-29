import { Honeycode } from "../Honeycode";
import { HoneycodeClient } from "../HoneycodeClient";
import {
  ListTableColumnsCommand,
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput,
} from "../commands/ListTableColumnsCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HoneycodeClient,
  input: ListTableColumnsCommandInput,
  ...args: any
): Promise<ListTableColumnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableColumnsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Honeycode,
  input: ListTableColumnsCommandInput,
  ...args: any
): Promise<ListTableColumnsCommandOutput> => {
  // @ts-ignore
  return await client.listTableColumns(input, ...args);
};
export async function* paginateListTableColumns(
  config: HoneycodePaginationConfiguration,
  input: ListTableColumnsCommandInput,
  ...additionalArguments: any
): Paginator<ListTableColumnsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableColumnsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Honeycode) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HoneycodeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Honeycode | HoneycodeClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
