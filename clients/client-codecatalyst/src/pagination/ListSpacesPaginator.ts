// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCatalyst } from "../CodeCatalyst";
import { CodeCatalystClient } from "../CodeCatalystClient";
import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListSpacesCommandInput,
  ...args: any
): Promise<ListSpacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSpacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCatalyst,
  input: ListSpacesCommandInput,
  ...args: any
): Promise<ListSpacesCommandOutput> => {
  // @ts-ignore
  return await client.listSpaces(input, ...args);
};
export async function* paginateListSpaces(
  config: CodeCatalystPaginationConfiguration,
  input: ListSpacesCommandInput,
  ...additionalArguments: any
): Paginator<ListSpacesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSpacesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeCatalyst) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCatalystClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCatalyst | CodeCatalystClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
