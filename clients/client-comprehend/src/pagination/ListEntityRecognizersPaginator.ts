import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import {
  ListEntityRecognizersCommand,
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "../commands/ListEntityRecognizersCommand";
import { ComprehendPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListEntityRecognizersCommandInput,
  ...args: any
): Promise<ListEntityRecognizersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntityRecognizersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListEntityRecognizersCommandInput,
  ...args: any
): Promise<ListEntityRecognizersCommandOutput> => {
  // @ts-ignore
  return await client.listEntityRecognizers(input, ...args);
};
export async function* listEntityRecognizersPaginate(
  config: ComprehendPaginationConfiguration,
  input: ListEntityRecognizersCommandInput,
  ...additionalArguments: any
): Paginator<ListEntityRecognizersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntityRecognizersCommandOutput;
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
