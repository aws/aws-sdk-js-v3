import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";
import {
  ListProtectionGroupsCommand,
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "../commands/ListProtectionGroupsCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListProtectionGroupsCommandInput,
  ...args: any
): Promise<ListProtectionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectionGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Shield,
  input: ListProtectionGroupsCommandInput,
  ...args: any
): Promise<ListProtectionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listProtectionGroups(input, ...args);
};
export async function* paginateListProtectionGroups(
  config: ShieldPaginationConfiguration,
  input: ListProtectionGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectionGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectionGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Shield) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ShieldClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Shield | ShieldClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
