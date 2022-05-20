// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetLabelsCommand, GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand";
import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetLabelsCommandInput,
  ...args: any
): Promise<GetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLabelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FraudDetector,
  input: GetLabelsCommandInput,
  ...args: any
): Promise<GetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.getLabels(input, ...args);
};
export async function* paginateGetLabels(
  config: FraudDetectorPaginationConfiguration,
  input: GetLabelsCommandInput,
  ...additionalArguments: any
): Paginator<GetLabelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLabelsCommandOutput;
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
