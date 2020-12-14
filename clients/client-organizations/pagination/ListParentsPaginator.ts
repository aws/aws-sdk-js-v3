import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import { ListParentsCommand, ListParentsCommandInput, ListParentsCommandOutput } from "../commands/ListParentsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListParentsCommandInput,
  ...args: any
): Promise<ListParentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListParentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Organizations,
  input: ListParentsCommandInput,
  ...args: any
): Promise<ListParentsCommandOutput> => {
  // @ts-ignore
  return await client.listParents(input, ...args);
};
export async function* paginateListParents(
  config: OrganizationsPaginationConfiguration,
  input: ListParentsCommandInput,
  ...additionalArguments: any
): Paginator<ListParentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListParentsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
