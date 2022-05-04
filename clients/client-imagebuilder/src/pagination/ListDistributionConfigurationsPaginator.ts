// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDistributionConfigurationsCommand,
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "../commands/ListDistributionConfigurationsCommand";
import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListDistributionConfigurationsCommandInput,
  ...args: any
): Promise<ListDistributionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDistributionConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListDistributionConfigurationsCommandInput,
  ...args: any
): Promise<ListDistributionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listDistributionConfigurations(input, ...args);
};
export async function* paginateListDistributionConfigurations(
  config: ImagebuilderPaginationConfiguration,
  input: ListDistributionConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDistributionConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDistributionConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
