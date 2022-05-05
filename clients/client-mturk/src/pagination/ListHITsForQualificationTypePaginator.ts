// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListHITsForQualificationTypeCommand,
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "../commands/ListHITsForQualificationTypeCommand";
import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListHITsForQualificationTypeCommandInput,
  ...args: any
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHITsForQualificationTypeCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListHITsForQualificationTypeCommandInput,
  ...args: any
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.listHITsForQualificationType(input, ...args);
};
export async function* paginateListHITsForQualificationType(
  config: MTurkPaginationConfiguration,
  input: ListHITsForQualificationTypeCommandInput,
  ...additionalArguments: any
): Paginator<ListHITsForQualificationTypeCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHITsForQualificationTypeCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
