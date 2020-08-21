import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListFindingsCommandInput,
  ...args: any
): Promise<ListFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListFindingsCommandInput,
  ...args: any
): Promise<ListFindingsCommandOutput> => {
  // @ts-ignore
  return await client.listFindings(input, ...args);
};
export async function* listFindingsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListFindingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListFindingsCommandOutput;
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
