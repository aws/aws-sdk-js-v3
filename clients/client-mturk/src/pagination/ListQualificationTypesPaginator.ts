// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListQualificationTypesCommand,
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "../commands/ListQualificationTypesCommand";
import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListQualificationTypesCommandInput,
  ...args: any
): Promise<ListQualificationTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQualificationTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListQualificationTypesCommandInput,
  ...args: any
): Promise<ListQualificationTypesCommandOutput> => {
  // @ts-ignore
  return await client.listQualificationTypes(input, ...args);
};
export async function* paginateListQualificationTypes(
  config: MTurkPaginationConfiguration,
  input: ListQualificationTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListQualificationTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQualificationTypesCommandOutput;
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
