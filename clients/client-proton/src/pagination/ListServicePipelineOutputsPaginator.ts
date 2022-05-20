// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServicePipelineOutputsCommand,
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "../commands/ListServicePipelineOutputsCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListServicePipelineOutputsCommandInput,
  ...args: any
): Promise<ListServicePipelineOutputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicePipelineOutputsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListServicePipelineOutputsCommandInput,
  ...args: any
): Promise<ListServicePipelineOutputsCommandOutput> => {
  // @ts-ignore
  return await client.listServicePipelineOutputs(input, ...args);
};
export async function* paginateListServicePipelineOutputs(
  config: ProtonPaginationConfiguration,
  input: ListServicePipelineOutputsCommandInput,
  ...additionalArguments: any
): Paginator<ListServicePipelineOutputsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicePipelineOutputsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Proton) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
