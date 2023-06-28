// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeProjectVersionsCommand,
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "../commands/DescribeProjectVersionsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: DescribeProjectVersionsCommandInput,
  ...args: any
): Promise<DescribeProjectVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeProjectVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeProjectVersions(
  config: RekognitionPaginationConfiguration,
  input: DescribeProjectVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeProjectVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeProjectVersionsCommandOutput;
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
