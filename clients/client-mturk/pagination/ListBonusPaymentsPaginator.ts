import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import {
  ListBonusPaymentsCommand,
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
} from "../commands/ListBonusPaymentsCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListBonusPaymentsCommandInput,
  ...args: any
): Promise<ListBonusPaymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBonusPaymentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MTurk,
  input: ListBonusPaymentsCommandInput,
  ...args: any
): Promise<ListBonusPaymentsCommandOutput> => {
  // @ts-ignore
  return await client.listBonusPayments(input, ...args);
};
export async function* listBonusPaymentsPaginate(
  config: MTurkPaginationConfiguration,
  input: ListBonusPaymentsCommandInput,
  ...additionalArguments: any
): Paginator<ListBonusPaymentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBonusPaymentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
