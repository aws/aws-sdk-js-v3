// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAdapterVersionsCommand,
  ListAdapterVersionsCommandInput,
  ListAdapterVersionsCommandOutput,
} from "../commands/ListAdapterVersionsCommand";
import { TextractClient } from "../TextractClient";
import { TextractPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TextractClient,
  input: ListAdapterVersionsCommandInput,
  ...args: any
): Promise<ListAdapterVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAdapterVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAdapterVersions(
  config: TextractPaginationConfiguration,
  input: ListAdapterVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAdapterVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAdapterVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TextractClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Textract | TextractClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
