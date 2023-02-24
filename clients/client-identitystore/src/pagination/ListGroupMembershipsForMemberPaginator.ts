// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGroupMembershipsForMemberCommand,
  ListGroupMembershipsForMemberCommandInput,
  ListGroupMembershipsForMemberCommandOutput,
} from "../commands/ListGroupMembershipsForMemberCommand";
import { Identitystore } from "../Identitystore";
import { IdentitystoreClient } from "../IdentitystoreClient";
import { IdentitystorePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IdentitystoreClient,
  input: ListGroupMembershipsForMemberCommandInput,
  ...args: any
): Promise<ListGroupMembershipsForMemberCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupMembershipsForMemberCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Identitystore,
  input: ListGroupMembershipsForMemberCommandInput,
  ...args: any
): Promise<ListGroupMembershipsForMemberCommandOutput> => {
  // @ts-ignore
  return await client.listGroupMembershipsForMember(input, ...args);
};
export async function* paginateListGroupMembershipsForMember(
  config: IdentitystorePaginationConfiguration,
  input: ListGroupMembershipsForMemberCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupMembershipsForMemberCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupMembershipsForMemberCommandOutput;
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
