import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListAccountsForParentCommand,
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "../commands/ListAccountsForParentCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListAccountsForParentCommandInput,
  ...args: any
): Promise<ListAccountsForParentCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountsForParentCommand(input), ...args);
};
const makePagedRequest = async (
  client: Organizations,
  input: ListAccountsForParentCommandInput,
  ...args: any
): Promise<ListAccountsForParentCommandOutput> => {
  // @ts-ignore
  return await client.listAccountsForParent(input, ...args);
};
export async function* listAccountsForParentPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListAccountsForParentCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountsForParentCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
