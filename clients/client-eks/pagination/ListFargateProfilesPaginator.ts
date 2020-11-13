import { EKS } from "../EKS";
import { EKSClient } from "../EKSClient";
import {
  ListFargateProfilesCommand,
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "../commands/ListFargateProfilesCommand";
import { EKSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EKSClient,
  input: ListFargateProfilesCommandInput,
  ...args: any
): Promise<ListFargateProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFargateProfilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: EKS,
  input: ListFargateProfilesCommandInput,
  ...args: any
): Promise<ListFargateProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listFargateProfiles(input, ...args);
};
export async function* listFargateProfilesPaginate(
  config: EKSPaginationConfiguration,
  input: ListFargateProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListFargateProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
