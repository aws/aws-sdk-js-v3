// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListManagedDataIdentifiersCommand,
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput,
} from "../commands/ListManagedDataIdentifiersCommand";
import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListManagedDataIdentifiersCommandInput,
  ...args: any
): Promise<ListManagedDataIdentifiersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedDataIdentifiersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Macie2,
  input: ListManagedDataIdentifiersCommandInput,
  ...args: any
): Promise<ListManagedDataIdentifiersCommandOutput> => {
  // @ts-ignore
  return await client.listManagedDataIdentifiers(input, ...args);
};
export async function* paginateListManagedDataIdentifiers(
  config: Macie2PaginationConfiguration,
  input: ListManagedDataIdentifiersCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedDataIdentifiersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedDataIdentifiersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
