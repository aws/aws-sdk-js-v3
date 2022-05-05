// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPhoneNumbersV2Command,
  ListPhoneNumbersV2CommandInput,
  ListPhoneNumbersV2CommandOutput,
} from "../commands/ListPhoneNumbersV2Command";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListPhoneNumbersV2CommandInput,
  ...args: any
): Promise<ListPhoneNumbersV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumbersV2Command(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListPhoneNumbersV2CommandInput,
  ...args: any
): Promise<ListPhoneNumbersV2CommandOutput> => {
  // @ts-ignore
  return await client.listPhoneNumbersV2(input, ...args);
};
export async function* paginateListPhoneNumbersV2(
  config: ConnectPaginationConfiguration,
  input: ListPhoneNumbersV2CommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumbersV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPhoneNumbersV2CommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
