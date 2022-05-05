// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFargateProfilesCommand,
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "../commands/ListFargateProfilesCommand";
import { EKS } from "../EKS";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListFargateProfilesCommandInput,
  ...args: any
): Promise<ListFargateProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFargateProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EKS,
  input: ListFargateProfilesCommandInput,
  ...args: any
): Promise<ListFargateProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listFargateProfiles(input, ...args);
};
export async function* paginateListFargateProfiles(
  config: EKSPaginationConfiguration,
  input: ListFargateProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListFargateProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFargateProfilesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
