// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCidrLocationsCommand,
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
} from "../commands/ListCidrLocationsCommand";
import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListCidrLocationsCommandInput,
  ...args: any
): Promise<ListCidrLocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCidrLocationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53,
  input: ListCidrLocationsCommandInput,
  ...args: any
): Promise<ListCidrLocationsCommandOutput> => {
  // @ts-ignore
  return await client.listCidrLocations(input, ...args);
};
export async function* paginateListCidrLocations(
  config: Route53PaginationConfiguration,
  input: ListCidrLocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCidrLocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCidrLocationsCommandOutput;
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
