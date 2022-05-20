// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...args: any
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisionedConcurrencyConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...args: any
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listProvisionedConcurrencyConfigs(input, ...args);
};
export async function* paginateListProvisionedConcurrencyConfigs(
  config: LambdaPaginationConfiguration,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisionedConcurrencyConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisionedConcurrencyConfigsCommandOutput;
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
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
