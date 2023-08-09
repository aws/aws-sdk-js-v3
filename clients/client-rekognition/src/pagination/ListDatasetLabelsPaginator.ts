// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDatasetLabelsCommand,
  ListDatasetLabelsCommandInput,
  ListDatasetLabelsCommandOutput,
} from "../commands/ListDatasetLabelsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListDatasetLabelsCommandInput,
  ...args: any
): Promise<ListDatasetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetLabelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatasetLabels(
  config: RekognitionPaginationConfiguration,
  input: ListDatasetLabelsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetLabelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetLabelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
