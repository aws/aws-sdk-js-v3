import { WorkLink } from "../WorkLink";
import { WorkLinkClient } from "../WorkLinkClient";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkLinkClient,
  input: ListDevicesCommandInput,
  ...args: any
): Promise<ListDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: WorkLink,
  input: ListDevicesCommandInput,
  ...args: any
): Promise<ListDevicesCommandOutput> => {
  // @ts-ignore
  return await client.listDevices(input, ...args);
};
export async function* listDevicesPaginate(
  config: WorkLinkPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkLink) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkLinkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
