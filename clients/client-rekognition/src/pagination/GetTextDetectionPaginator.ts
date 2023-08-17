// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetTextDetectionCommand,
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput,
} from "../commands/GetTextDetectionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetTextDetectionCommandInput,
  ...args: any
): Promise<GetTextDetectionCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTextDetectionCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTextDetection(
  config: RekognitionPaginationConfiguration,
  input: GetTextDetectionCommandInput,
  ...additionalArguments: any
): Paginator<GetTextDetectionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTextDetectionCommandOutput;
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
