// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAWSServiceAccessForOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "../commands/ListAWSServiceAccessForOrganizationCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListAWSServiceAccessForOrganizationCommandInput,
  ...args: any
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAWSServiceAccessForOrganizationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAWSServiceAccessForOrganization(
  config: OrganizationsPaginationConfiguration,
  input: ListAWSServiceAccessForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<ListAWSServiceAccessForOrganizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAWSServiceAccessForOrganizationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OrganizationsClient) {
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
