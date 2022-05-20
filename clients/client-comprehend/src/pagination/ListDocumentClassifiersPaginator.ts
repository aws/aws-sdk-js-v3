// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDocumentClassifiersCommand,
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "../commands/ListDocumentClassifiersCommand";
import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListDocumentClassifiersCommandInput,
  ...args: any
): Promise<ListDocumentClassifiersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDocumentClassifiersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Comprehend,
  input: ListDocumentClassifiersCommandInput,
  ...args: any
): Promise<ListDocumentClassifiersCommandOutput> => {
  // @ts-ignore
  return await client.listDocumentClassifiers(input, ...args);
};
export async function* paginateListDocumentClassifiers(
  config: ComprehendPaginationConfiguration,
  input: ListDocumentClassifiersCommandInput,
  ...additionalArguments: any
): Paginator<ListDocumentClassifiersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDocumentClassifiersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
