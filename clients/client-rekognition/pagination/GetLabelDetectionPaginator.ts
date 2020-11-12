import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";
import {
  GetLabelDetectionCommand,
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
} from "../commands/GetLabelDetectionCommand";
import { RekognitionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetLabelDetectionCommandInput,
  ...args: any
): Promise<GetLabelDetectionCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLabelDetectionCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: GetLabelDetectionCommandInput,
  ...args: any
): Promise<GetLabelDetectionCommandOutput> => {
  // @ts-ignore
  return await client.getLabelDetection(input, ...args);
};
export async function* getLabelDetectionPaginate(
  config: RekognitionPaginationConfiguration,
  input: GetLabelDetectionCommandInput,
  ...additionalArguments: any
): Paginator<GetLabelDetectionCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLabelDetectionCommandOutput;
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
