import { CloudTrail } from "../CloudTrail";
import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "../commands/ListPublicKeysCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListPublicKeysCommandInput,
  ...args: any
): Promise<ListPublicKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPublicKeysCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudTrail,
  input: ListPublicKeysCommandInput,
  ...args: any
): Promise<ListPublicKeysCommandOutput> => {
  // @ts-ignore
  return await client.listPublicKeys(input, ...args);
};
export async function* paginateListPublicKeys(
  config: CloudTrailPaginationConfiguration,
  input: ListPublicKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListPublicKeysCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPublicKeysCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudTrail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
