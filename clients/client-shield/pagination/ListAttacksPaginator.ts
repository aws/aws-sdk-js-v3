import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";
import { ListAttacksCommand, ListAttacksCommandInput, ListAttacksCommandOutput } from "../commands/ListAttacksCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListAttacksCommandInput,
  ...args: any
): Promise<ListAttacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttacksCommand(input, ...args));
};
const makePagedRequest = async (
  client: Shield,
  input: ListAttacksCommandInput,
  ...args: any
): Promise<ListAttacksCommandOutput> => {
  // @ts-ignore
  return await client.listAttacks(input, ...args);
};
export async function* listAttacksPaginate(
  config: ShieldPaginationConfiguration,
  input: ListAttacksCommandInput,
  ...additionalArguments: any
): Paginator<ListAttacksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAttacksCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Shield) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ShieldClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Shield | ShieldClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
