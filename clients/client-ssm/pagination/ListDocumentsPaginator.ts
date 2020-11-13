import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListDocumentsCommand,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "../commands/ListDocumentsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListDocumentsCommandInput,
  ...args: any
): Promise<ListDocumentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDocumentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: ListDocumentsCommandInput,
  ...args: any
): Promise<ListDocumentsCommandOutput> => {
  // @ts-ignore
  return await client.listDocuments(input, ...args);
};
export async function* listDocumentsPaginate(
  config: SSMPaginationConfiguration,
  input: ListDocumentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDocumentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDocumentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
