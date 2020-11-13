import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListDelegatedAdministratorsCommand,
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "../commands/ListDelegatedAdministratorsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListDelegatedAdministratorsCommandInput,
  ...args: any
): Promise<ListDelegatedAdministratorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDelegatedAdministratorsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Organizations,
  input: ListDelegatedAdministratorsCommandInput,
  ...args: any
): Promise<ListDelegatedAdministratorsCommandOutput> => {
  // @ts-ignore
  return await client.listDelegatedAdministrators(input, ...args);
};
export async function* listDelegatedAdministratorsPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListDelegatedAdministratorsCommandInput,
  ...additionalArguments: any
): Paginator<ListDelegatedAdministratorsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDelegatedAdministratorsCommandOutput;
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
