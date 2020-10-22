import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";
import {
  GetFaceDetectionCommand,
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput,
} from "../commands/GetFaceDetectionCommand";
import { RekognitionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetFaceDetectionCommandInput,
  ...args: any
): Promise<GetFaceDetectionCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFaceDetectionCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: GetFaceDetectionCommandInput,
  ...args: any
): Promise<GetFaceDetectionCommandOutput> => {
  // @ts-ignore
  return await client.getFaceDetection(input, ...args);
};
export async function* getFaceDetectionPaginate(
  config: RekognitionPaginationConfiguration,
  input: GetFaceDetectionCommandInput,
  ...additionalArguments: any
): Paginator<GetFaceDetectionCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFaceDetectionCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
