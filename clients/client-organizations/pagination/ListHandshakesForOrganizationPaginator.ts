import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListHandshakesForOrganizationCommand,
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "../commands/ListHandshakesForOrganizationCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListHandshakesForOrganizationCommandInput,
  ...args: any
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHandshakesForOrganizationCommand(input), ...args);
};
const makePagedRequest = async (
  client: Organizations,
  input: ListHandshakesForOrganizationCommandInput,
  ...args: any
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.listHandshakesForOrganization(input, ...args);
};
export async function* listHandshakesForOrganizationPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListHandshakesForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<ListHandshakesForOrganizationCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHandshakesForOrganizationCommandOutput;
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
