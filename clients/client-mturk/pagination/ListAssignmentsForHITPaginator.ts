import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import {
  ListAssignmentsForHITCommand,
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "../commands/ListAssignmentsForHITCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListAssignmentsForHITCommandInput,
  ...args: any
): Promise<ListAssignmentsForHITCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssignmentsForHITCommand(input, ...args));
};
const makePagedRequest = async (
  client: MTurk,
  input: ListAssignmentsForHITCommandInput,
  ...args: any
): Promise<ListAssignmentsForHITCommandOutput> => {
  // @ts-ignore
  return await client.listAssignmentsForHIT(input, ...args);
};
export async function* listAssignmentsForHITPaginate(
  config: MTurkPaginationConfiguration,
  input: ListAssignmentsForHITCommandInput,
  ...additionalArguments: any
): Paginator<ListAssignmentsForHITCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAssignmentsForHITCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
