// smithy-typescript generated code
import type { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Paginator } from "@smithy/types";

import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export { Paginator };
/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DynamoDBDocumentClient,
  input: ScanCommandInput,
  ...args: any
): Promise<ScanCommandOutput> => {
  return await client.send(new ScanCommand(input), ...args);
};
/**
 * @public
 *
 * @param ScanCommandInput - {@link ScanCommandInput}
 * @returns {@link ScanCommandOutput}
 *
 */
export async function* paginateScan(
  config: DynamoDBDocumentPaginationConfiguration,
  input: ScanCommandInput,
  ...additionalArguments: any
): Paginator<ScanCommandOutput> {
  let token: Record<string, NativeAttributeValue> | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ScanCommandOutput;
  while (hasNext) {
    input.ExclusiveStartKey = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DynamoDBDocumentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDBDocument | DynamoDBDocumentClient");
    }
    yield page;
    token = page.LastEvaluatedKey;
    hasNext = !!token;
  }
  return undefined;
}
