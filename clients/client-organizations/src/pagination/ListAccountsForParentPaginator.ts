// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccountsForParentCommand,
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "../commands/ListAccountsForParentCommand";
import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListAccountsForParentCommandInput,
  ...args: any
): Promise<ListAccountsForParentCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountsForParentCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Organizations,
  input: ListAccountsForParentCommandInput,
  ...args: any
): Promise<ListAccountsForParentCommandOutput> => {
  // @ts-ignore
  return await client.listAccountsForParent(input, ...args);
};
export async function* paginateListAccountsForParent(
  config: OrganizationsPaginationConfiguration,
  input: ListAccountsForParentCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountsForParentCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountsForParentCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
