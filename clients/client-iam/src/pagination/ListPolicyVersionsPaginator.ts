// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "../commands/ListPolicyVersionsCommand";
import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListPolicyVersionsCommandInput,
  ...args: any
): Promise<ListPolicyVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListPolicyVersionsCommandInput,
  ...args: any
): Promise<ListPolicyVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listPolicyVersions(input, ...args);
};
export async function* paginateListPolicyVersions(
  config: IAMPaginationConfiguration,
  input: ListPolicyVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyVersionsCommandOutput;
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
