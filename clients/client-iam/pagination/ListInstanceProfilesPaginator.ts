import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListInstanceProfilesCommandInput,
  ...args: any
): Promise<ListInstanceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceProfilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListInstanceProfilesCommandInput,
  ...args: any
): Promise<ListInstanceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceProfiles(input, ...args);
};
export async function* paginateListInstanceProfiles(
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceProfilesCommandOutput;
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
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
