// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetListsMetadataCommand,
  GetListsMetadataCommandInput,
  GetListsMetadataCommandOutput,
} from "../commands/GetListsMetadataCommand";
import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetListsMetadataCommandInput,
  ...args: any
): Promise<GetListsMetadataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetListsMetadataCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FraudDetector,
  input: GetListsMetadataCommandInput,
  ...args: any
): Promise<GetListsMetadataCommandOutput> => {
  // @ts-ignore
  return await client.getListsMetadata(input, ...args);
};
export async function* paginateGetListsMetadata(
  config: FraudDetectorPaginationConfiguration,
  input: GetListsMetadataCommandInput,
  ...additionalArguments: any
): Paginator<GetListsMetadataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetListsMetadataCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
