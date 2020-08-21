import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListChildrenCommand,
  ListChildrenCommandInput,
  ListChildrenCommandOutput,
} from "../commands/ListChildrenCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListChildrenCommandInput,
  ...args: any
): Promise<ListChildrenCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChildrenCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListChildrenCommandInput,
  ...args: any
): Promise<ListChildrenCommandOutput> => {
  // @ts-ignore
  return await client.listChildren(input, ...args);
};
export async function* listChildrenPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListChildrenCommandInput,
  ...additionalArguments: any
): Paginator<ListChildrenCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListChildrenCommandOutput;
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
