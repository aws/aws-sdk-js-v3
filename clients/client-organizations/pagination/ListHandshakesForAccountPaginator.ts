import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListHandshakesForAccountCommand,
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "../commands/ListHandshakesForAccountCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListHandshakesForAccountCommandInput,
  ...args: any
): Promise<ListHandshakesForAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHandshakesForAccountCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListHandshakesForAccountCommandInput,
  ...args: any
): Promise<ListHandshakesForAccountCommandOutput> => {
  // @ts-ignore
  return await client.listHandshakesForAccount(input, ...args);
};
export async function* listHandshakesForAccountPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListHandshakesForAccountCommandInput,
  ...additionalArguments: any
): Paginator<ListHandshakesForAccountCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListHandshakesForAccountCommandOutput;
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
