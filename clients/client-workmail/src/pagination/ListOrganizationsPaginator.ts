// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOrganizationsCommand,
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "../commands/ListOrganizationsCommand";
import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListOrganizationsCommandInput,
  ...args: any
): Promise<ListOrganizationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkMail,
  input: ListOrganizationsCommandInput,
  ...args: any
): Promise<ListOrganizationsCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizations(input, ...args);
};
export async function* paginateListOrganizations(
  config: WorkMailPaginationConfiguration,
  input: ListOrganizationsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
