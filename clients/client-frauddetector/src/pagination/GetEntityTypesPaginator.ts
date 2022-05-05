// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetEntityTypesCommand,
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput,
} from "../commands/GetEntityTypesCommand";
import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetEntityTypesCommandInput,
  ...args: any
): Promise<GetEntityTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEntityTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FraudDetector,
  input: GetEntityTypesCommandInput,
  ...args: any
): Promise<GetEntityTypesCommandOutput> => {
  // @ts-ignore
  return await client.getEntityTypes(input, ...args);
};
export async function* paginateGetEntityTypes(
  config: FraudDetectorPaginationConfiguration,
  input: GetEntityTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetEntityTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEntityTypesCommandOutput;
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
