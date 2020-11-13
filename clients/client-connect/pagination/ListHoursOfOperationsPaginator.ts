import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListHoursOfOperationsCommand,
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "../commands/ListHoursOfOperationsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListHoursOfOperationsCommandInput,
  ...args: any
): Promise<ListHoursOfOperationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHoursOfOperationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Connect,
  input: ListHoursOfOperationsCommandInput,
  ...args: any
): Promise<ListHoursOfOperationsCommandOutput> => {
  // @ts-ignore
  return await client.listHoursOfOperations(input, ...args);
};
export async function* listHoursOfOperationsPaginate(
  config: ConnectPaginationConfiguration,
  input: ListHoursOfOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListHoursOfOperationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHoursOfOperationsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
