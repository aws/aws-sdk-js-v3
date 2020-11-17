import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListInstancesCommandInput,
  ...args: any
): Promise<ListInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListInstancesCommandInput,
  ...args: any
): Promise<ListInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listInstances(input, ...args);
};
export async function* paginateListInstances(
  config: SSOAdminPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSOAdmin) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
