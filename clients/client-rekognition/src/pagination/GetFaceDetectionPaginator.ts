// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetFaceDetectionCommand,
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput,
} from "../commands/GetFaceDetectionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetFaceDetectionCommandInput,
  ...args: any
): Promise<GetFaceDetectionCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFaceDetectionCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetFaceDetection(
  config: RekognitionPaginationConfiguration,
  input: GetFaceDetectionCommandInput,
  ...additionalArguments: any
): Paginator<GetFaceDetectionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFaceDetectionCommandOutput;
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
