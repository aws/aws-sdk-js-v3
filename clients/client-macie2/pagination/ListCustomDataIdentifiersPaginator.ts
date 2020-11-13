import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import {
  ListCustomDataIdentifiersCommand,
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "../commands/ListCustomDataIdentifiersCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListCustomDataIdentifiersCommandInput,
  ...args: any
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomDataIdentifiersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Macie2,
  input: ListCustomDataIdentifiersCommandInput,
  ...args: any
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  // @ts-ignore
  return await client.listCustomDataIdentifiers(input, ...args);
};
export async function* listCustomDataIdentifiersPaginate(
  config: Macie2PaginationConfiguration,
  input: ListCustomDataIdentifiersCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomDataIdentifiersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomDataIdentifiersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
