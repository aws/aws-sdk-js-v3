// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDefaultVocabulariesCommand,
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "../commands/ListDefaultVocabulariesCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListDefaultVocabulariesCommandInput,
  ...args: any
): Promise<ListDefaultVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDefaultVocabulariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListDefaultVocabulariesCommandInput,
  ...args: any
): Promise<ListDefaultVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.listDefaultVocabularies(input, ...args);
};
export async function* paginateListDefaultVocabularies(
  config: ConnectPaginationConfiguration,
  input: ListDefaultVocabulariesCommandInput,
  ...additionalArguments: any
): Paginator<ListDefaultVocabulariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDefaultVocabulariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
