import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import { GetGroupsCommand, GetGroupsCommandInput, GetGroupsCommandOutput } from "../commands/GetGroupsCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: XRayClient,
  input: GetGroupsCommandInput,
  ...args: any
): Promise<GetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: XRay,
  input: GetGroupsCommandInput,
  ...args: any
): Promise<GetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.getGroups(input, ...args);
};
export async function* getGroupsPaginate(
  config: XRayPaginationConfiguration,
  input: GetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<GetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
