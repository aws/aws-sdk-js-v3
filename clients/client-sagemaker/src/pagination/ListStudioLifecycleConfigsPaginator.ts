// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStudioLifecycleConfigsCommand,
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "../commands/ListStudioLifecycleConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListStudioLifecycleConfigsCommandInput,
  ...args: any
): Promise<ListStudioLifecycleConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudioLifecycleConfigsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStudioLifecycleConfigs(
  config: SageMakerPaginationConfiguration,
  input: ListStudioLifecycleConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListStudioLifecycleConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudioLifecycleConfigsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
