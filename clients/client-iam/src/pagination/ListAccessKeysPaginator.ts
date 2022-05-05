// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccessKeysCommand,
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "../commands/ListAccessKeysCommand";
import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListAccessKeysCommandInput,
  ...args: any
): Promise<ListAccessKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListAccessKeysCommandInput,
  ...args: any
): Promise<ListAccessKeysCommandOutput> => {
  // @ts-ignore
  return await client.listAccessKeys(input, ...args);
};
export async function* paginateListAccessKeys(
  config: IAMPaginationConfiguration,
  input: ListAccessKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessKeysCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
