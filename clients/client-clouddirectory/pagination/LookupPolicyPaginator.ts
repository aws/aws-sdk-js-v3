import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  LookupPolicyCommand,
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput,
} from "../commands/LookupPolicyCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: LookupPolicyCommandInput,
  ...args: any
): Promise<LookupPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new LookupPolicyCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: LookupPolicyCommandInput,
  ...args: any
): Promise<LookupPolicyCommandOutput> => {
  // @ts-ignore
  return await client.lookupPolicy(input, ...args);
};
export async function* paginateLookupPolicy(
  config: CloudDirectoryPaginationConfiguration,
  input: LookupPolicyCommandInput,
  ...additionalArguments: any
): Paginator<LookupPolicyCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: LookupPolicyCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
