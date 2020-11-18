import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import {
  ListLanguageModelsCommand,
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
} from "../commands/ListLanguageModelsCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListLanguageModelsCommandInput,
  ...args: any
): Promise<ListLanguageModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLanguageModelsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Transcribe,
  input: ListLanguageModelsCommandInput,
  ...args: any
): Promise<ListLanguageModelsCommandOutput> => {
  // @ts-ignore
  return await client.listLanguageModels(input, ...args);
};
export async function* paginateListLanguageModels(
  config: TranscribePaginationConfiguration,
  input: ListLanguageModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListLanguageModelsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLanguageModelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transcribe) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
