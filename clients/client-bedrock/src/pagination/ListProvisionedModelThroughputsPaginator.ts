// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListProvisionedModelThroughputsCommand,
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "../commands/ListProvisionedModelThroughputsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockClient,
  input: ListProvisionedModelThroughputsCommandInput,
  ...args: any
): Promise<ListProvisionedModelThroughputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisionedModelThroughputsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProvisionedModelThroughputs(
  config: BedrockPaginationConfiguration,
  input: ListProvisionedModelThroughputsCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisionedModelThroughputsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisionedModelThroughputsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof BedrockClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Bedrock | BedrockClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
