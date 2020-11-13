import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import {
  ListSuppressedDestinationsCommand,
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
} from "../commands/ListSuppressedDestinationsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListSuppressedDestinationsCommandInput,
  ...args: any
): Promise<ListSuppressedDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSuppressedDestinationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SESv2,
  input: ListSuppressedDestinationsCommandInput,
  ...args: any
): Promise<ListSuppressedDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listSuppressedDestinations(input, ...args);
};
export async function* listSuppressedDestinationsPaginate(
  config: SESv2PaginationConfiguration,
  input: ListSuppressedDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSuppressedDestinationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSuppressedDestinationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
