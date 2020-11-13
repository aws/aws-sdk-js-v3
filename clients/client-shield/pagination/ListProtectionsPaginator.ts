import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";
import {
  ListProtectionsCommand,
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput,
} from "../commands/ListProtectionsCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListProtectionsCommandInput,
  ...args: any
): Promise<ListProtectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Shield,
  input: ListProtectionsCommandInput,
  ...args: any
): Promise<ListProtectionsCommandOutput> => {
  // @ts-ignore
  return await client.listProtections(input, ...args);
};
export async function* listProtectionsPaginate(
  config: ShieldPaginationConfiguration,
  input: ListProtectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectionsCommandOutput;
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
