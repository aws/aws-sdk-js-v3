import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import {
  ListHITsForQualificationTypeCommand,
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "../commands/ListHITsForQualificationTypeCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListHITsForQualificationTypeCommandInput,
  ...args: any
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHITsForQualificationTypeCommand(input, ...args));
};
const makePagedRequest = async (
  client: MTurk,
  input: ListHITsForQualificationTypeCommandInput,
  ...args: any
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.listHITsForQualificationType(input, ...args);
};
export async function* listHITsForQualificationTypePaginate(
  config: MTurkPaginationConfiguration,
  input: ListHITsForQualificationTypeCommandInput,
  ...additionalArguments: any
): Paginator<ListHITsForQualificationTypeCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListHITsForQualificationTypeCommandOutput;
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
