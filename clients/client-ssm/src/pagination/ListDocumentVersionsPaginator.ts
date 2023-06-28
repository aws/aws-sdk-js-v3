// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDocumentVersionsCommand,
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "../commands/ListDocumentVersionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListDocumentVersionsCommandInput,
  ...args: any
): Promise<ListDocumentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDocumentVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDocumentVersions(
  config: SSMPaginationConfiguration,
  input: ListDocumentVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDocumentVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDocumentVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
