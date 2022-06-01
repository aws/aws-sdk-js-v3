// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCidrCollectionsCommand,
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "../commands/ListCidrCollectionsCommand";
import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListCidrCollectionsCommandInput,
  ...args: any
): Promise<ListCidrCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCidrCollectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53,
  input: ListCidrCollectionsCommandInput,
  ...args: any
): Promise<ListCidrCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.listCidrCollections(input, ...args);
};
export async function* paginateListCidrCollections(
  config: Route53PaginationConfiguration,
  input: ListCidrCollectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCidrCollectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCidrCollectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53 | Route53Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
