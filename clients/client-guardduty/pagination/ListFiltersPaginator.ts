import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListFiltersCommandInput,
  ...args: any
): Promise<ListFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFiltersCommand(input), ...args);
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListFiltersCommandInput,
  ...args: any
): Promise<ListFiltersCommandOutput> => {
  // @ts-ignore
  return await client.listFilters(input, ...args);
};
export async function* listFiltersPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListFiltersCommandInput,
  ...additionalArguments: any
): Paginator<ListFiltersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFiltersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
