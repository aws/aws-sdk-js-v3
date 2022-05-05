// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDatasetEntriesCommand,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "../commands/ListDatasetEntriesCommand";
import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListDatasetEntriesCommandInput,
  ...args: any
): Promise<ListDatasetEntriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetEntriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Rekognition,
  input: ListDatasetEntriesCommandInput,
  ...args: any
): Promise<ListDatasetEntriesCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetEntries(input, ...args);
};
export async function* paginateListDatasetEntries(
  config: RekognitionPaginationConfiguration,
  input: ListDatasetEntriesCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetEntriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetEntriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Rekognition) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RekognitionClient) {
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
