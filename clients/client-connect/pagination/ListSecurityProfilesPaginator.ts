import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListSecurityProfilesCommandInput,
  ...args: any
): Promise<ListSecurityProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityProfilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Connect,
  input: ListSecurityProfilesCommandInput,
  ...args: any
): Promise<ListSecurityProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityProfiles(input, ...args);
};
export async function* listSecurityProfilesPaginate(
  config: ConnectPaginationConfiguration,
  input: ListSecurityProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
