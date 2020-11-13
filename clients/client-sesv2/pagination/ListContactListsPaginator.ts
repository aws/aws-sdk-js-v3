import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import {
  ListContactListsCommand,
  ListContactListsCommandInput,
  ListContactListsCommandOutput,
} from "../commands/ListContactListsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListContactListsCommandInput,
  ...args: any
): Promise<ListContactListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactListsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SESv2,
  input: ListContactListsCommandInput,
  ...args: any
): Promise<ListContactListsCommandOutput> => {
  // @ts-ignore
  return await client.listContactLists(input, ...args);
};
export async function* listContactListsPaginate(
  config: SESv2PaginationConfiguration,
  input: ListContactListsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactListsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactListsCommandOutput;
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
