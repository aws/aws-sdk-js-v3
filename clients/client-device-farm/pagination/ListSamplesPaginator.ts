import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { ListSamplesCommand, ListSamplesCommandInput, ListSamplesCommandOutput } from "../commands/ListSamplesCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListSamplesCommandInput,
  ...args: any
): Promise<ListSamplesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSamplesCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListSamplesCommandInput,
  ...args: any
): Promise<ListSamplesCommandOutput> => {
  // @ts-ignore
  return await client.listSamples(input, ...args);
};
export async function* listSamplesPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListSamplesCommandInput,
  ...additionalArguments: any
): Paginator<ListSamplesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSamplesCommandOutput;
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
