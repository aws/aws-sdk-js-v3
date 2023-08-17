// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListImportErrorsCommand,
  ListImportErrorsCommandInput,
  ListImportErrorsCommandOutput,
} from "../commands/ListImportErrorsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: ListImportErrorsCommandInput,
  ...args: any
): Promise<ListImportErrorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImportErrorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListImportErrors(
  config: MgnPaginationConfiguration,
  input: ListImportErrorsCommandInput,
  ...additionalArguments: any
): Paginator<ListImportErrorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImportErrorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
