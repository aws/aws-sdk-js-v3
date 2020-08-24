import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import {
  ListWorkersWithQualificationTypeCommand,
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "../commands/ListWorkersWithQualificationTypeCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...args: any
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkersWithQualificationTypeCommand(input, ...args));
};
const makePagedRequest = async (
  client: MTurk,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...args: any
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.listWorkersWithQualificationType(input, ...args);
};
export async function* listWorkersWithQualificationTypePaginate(
  config: MTurkPaginationConfiguration,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkersWithQualificationTypeCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListWorkersWithQualificationTypeCommandOutput;
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
