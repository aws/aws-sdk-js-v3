import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import {
  ListCodeSigningConfigsCommand,
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "../commands/ListCodeSigningConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListCodeSigningConfigsCommandInput,
  ...args: any
): Promise<ListCodeSigningConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCodeSigningConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListCodeSigningConfigsCommandInput,
  ...args: any
): Promise<ListCodeSigningConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listCodeSigningConfigs(input, ...args);
};
export async function* paginateListCodeSigningConfigs(
  config: LambdaPaginationConfiguration,
  input: ListCodeSigningConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListCodeSigningConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCodeSigningConfigsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
