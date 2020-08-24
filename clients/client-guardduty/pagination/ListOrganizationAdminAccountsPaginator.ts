import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationAdminAccountsCommand(input, ...args));
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizationAdminAccounts(input, ...args);
};
export async function* listOrganizationAdminAccountsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationAdminAccountsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListOrganizationAdminAccountsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
