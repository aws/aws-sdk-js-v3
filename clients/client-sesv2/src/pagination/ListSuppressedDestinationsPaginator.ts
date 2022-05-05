// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSuppressedDestinationsCommand,
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
} from "../commands/ListSuppressedDestinationsCommand";
import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListSuppressedDestinationsCommandInput,
  ...args: any
): Promise<ListSuppressedDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSuppressedDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SESv2,
  input: ListSuppressedDestinationsCommandInput,
  ...args: any
): Promise<ListSuppressedDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listSuppressedDestinations(input, ...args);
};
export async function* paginateListSuppressedDestinations(
  config: SESv2PaginationConfiguration,
  input: ListSuppressedDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSuppressedDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSuppressedDestinationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
