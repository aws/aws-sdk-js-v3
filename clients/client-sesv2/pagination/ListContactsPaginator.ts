import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "../commands/ListContactsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListContactsCommandInput,
  ...args: any
): Promise<ListContactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SESv2,
  input: ListContactsCommandInput,
  ...args: any
): Promise<ListContactsCommandOutput> => {
  // @ts-ignore
  return await client.listContacts(input, ...args);
};
export async function* listContactsPaginate(
  config: SESv2PaginationConfiguration,
  input: ListContactsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactsCommandOutput;
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
