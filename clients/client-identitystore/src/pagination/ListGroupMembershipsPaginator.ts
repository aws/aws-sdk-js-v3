// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "../commands/ListGroupMembershipsCommand";
import { Identitystore } from "../Identitystore";
import { IdentitystoreClient } from "../IdentitystoreClient";
import { IdentitystorePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IdentitystoreClient,
  input: ListGroupMembershipsCommandInput,
  ...args: any
): Promise<ListGroupMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupMembershipsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Identitystore,
  input: ListGroupMembershipsCommandInput,
  ...args: any
): Promise<ListGroupMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.listGroupMemberships(input, ...args);
};
export async function* paginateListGroupMemberships(
  config: IdentitystorePaginationConfiguration,
  input: ListGroupMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupMembershipsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Identitystore) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IdentitystoreClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Identitystore | IdentitystoreClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
