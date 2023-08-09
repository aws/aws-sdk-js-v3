// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  QueryLineageCommand,
  QueryLineageCommandInput,
  QueryLineageCommandOutput,
} from "../commands/QueryLineageCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: QueryLineageCommandInput,
  ...args: any
): Promise<QueryLineageCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryLineageCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateQueryLineage(
  config: SageMakerPaginationConfiguration,
  input: QueryLineageCommandInput,
  ...additionalArguments: any
): Paginator<QueryLineageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryLineageCommandOutput;
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
