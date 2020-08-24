import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestsCommandInput,
  ...args: any
): Promise<ListTestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestsCommandInput,
  ...args: any
): Promise<ListTestsCommandOutput> => {
  // @ts-ignore
  return await client.listTests(input, ...args);
};
export async function* listTestsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTestsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
