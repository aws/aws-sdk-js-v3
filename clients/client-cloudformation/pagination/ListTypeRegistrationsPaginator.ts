import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListTypeRegistrationsCommand,
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "../commands/ListTypeRegistrationsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListTypeRegistrationsCommandInput,
  ...args: any
): Promise<ListTypeRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTypeRegistrationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListTypeRegistrationsCommandInput,
  ...args: any
): Promise<ListTypeRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.listTypeRegistrations(input, ...args);
};
export async function* paginateListTypeRegistrations(
  config: CloudFormationPaginationConfiguration,
  input: ListTypeRegistrationsCommandInput,
  ...additionalArguments: any
): Paginator<ListTypeRegistrationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTypeRegistrationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
