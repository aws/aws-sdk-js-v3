// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProtectionsCommand,
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput,
} from "../commands/ListProtectionsCommand";
import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";
import { ShieldPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListProtectionsCommandInput,
  ...args: any
): Promise<ListProtectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Shield,
  input: ListProtectionsCommandInput,
  ...args: any
): Promise<ListProtectionsCommandOutput> => {
  // @ts-ignore
  return await client.listProtections(input, ...args);
};
export async function* paginateListProtections(
  config: ShieldPaginationConfiguration,
  input: ListProtectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Shield) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ShieldClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Shield | ShieldClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
