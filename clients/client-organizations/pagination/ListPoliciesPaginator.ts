import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListPoliciesCommandInput,
  ...args: any
): Promise<ListPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListPoliciesCommandInput,
  ...args: any
): Promise<ListPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listPolicies(input, ...args);
};
export async function* listPoliciesPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPoliciesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
