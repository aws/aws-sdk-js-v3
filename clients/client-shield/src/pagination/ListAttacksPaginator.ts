import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";
import { ListAttacksCommand, ListAttacksCommandInput, ListAttacksCommandOutput } from "../commands/ListAttacksCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListAttacksCommandInput,
  ...args: any
): Promise<ListAttacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttacksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Shield,
  input: ListAttacksCommandInput,
  ...args: any
): Promise<ListAttacksCommandOutput> => {
  // @ts-ignore
  return await client.listAttacks(input, ...args);
};
export async function* paginateListAttacks(
  config: ShieldPaginationConfiguration,
  input: ListAttacksCommandInput,
  ...additionalArguments: any
): Paginator<ListAttacksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttacksCommandOutput;
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
