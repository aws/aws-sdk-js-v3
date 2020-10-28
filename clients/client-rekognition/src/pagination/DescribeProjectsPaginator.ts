import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";
import {
  DescribeProjectsCommand,
  DescribeProjectsCommandInput,
  DescribeProjectsCommandOutput,
} from "../commands/DescribeProjectsCommand";
import { RekognitionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: DescribeProjectsCommandInput,
  ...args: any
): Promise<DescribeProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeProjectsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: DescribeProjectsCommandInput,
  ...args: any
): Promise<DescribeProjectsCommandOutput> => {
  // @ts-ignore
  return await client.describeProjects(input, ...args);
};
export async function* describeProjectsPaginate(
  config: RekognitionPaginationConfiguration,
  input: DescribeProjectsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeProjectsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeProjectsCommandOutput;
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
