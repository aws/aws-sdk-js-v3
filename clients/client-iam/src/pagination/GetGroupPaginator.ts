import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: GetGroupCommandInput,
  ...args: any
): Promise<GetGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetGroupCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: GetGroupCommandInput,
  ...args: any
): Promise<GetGroupCommandOutput> => {
  // @ts-ignore
  return await client.getGroup(input, ...args);
};
export async function* paginateGetGroup(
  config: IAMPaginationConfiguration,
  input: GetGroupCommandInput,
  ...additionalArguments: any
): Paginator<GetGroupCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetGroupCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
