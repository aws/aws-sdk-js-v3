import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import {
  ListEntityRecognizerSummariesCommand,
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
} from "../commands/ListEntityRecognizerSummariesCommand";
import { ComprehendPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListEntityRecognizerSummariesCommandInput,
  ...args: any
): Promise<ListEntityRecognizerSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntityRecognizerSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Comprehend,
  input: ListEntityRecognizerSummariesCommandInput,
  ...args: any
): Promise<ListEntityRecognizerSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listEntityRecognizerSummaries(input, ...args);
};
export async function* paginateListEntityRecognizerSummaries(
  config: ComprehendPaginationConfiguration,
  input: ListEntityRecognizerSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListEntityRecognizerSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntityRecognizerSummariesCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
