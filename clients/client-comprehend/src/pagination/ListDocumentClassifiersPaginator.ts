import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import {
  ListDocumentClassifiersCommand,
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "../commands/ListDocumentClassifiersCommand";
import { ComprehendPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListDocumentClassifiersCommandInput,
  ...args: any
): Promise<ListDocumentClassifiersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDocumentClassifiersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListDocumentClassifiersCommandInput,
  ...args: any
): Promise<ListDocumentClassifiersCommandOutput> => {
  // @ts-ignore
  return await client.listDocumentClassifiers(input, ...args);
};
export async function* listDocumentClassifiersPaginate(
  config: ComprehendPaginationConfiguration,
  input: ListDocumentClassifiersCommandInput,
  ...additionalArguments: any
): Paginator<ListDocumentClassifiersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
