// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetVariablesCommand,
  GetVariablesCommandInput,
  GetVariablesCommandOutput,
} from "../commands/GetVariablesCommand";
import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetVariablesCommandInput,
  ...args: any
): Promise<GetVariablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetVariablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FraudDetector,
  input: GetVariablesCommandInput,
  ...args: any
): Promise<GetVariablesCommandOutput> => {
  // @ts-ignore
  return await client.getVariables(input, ...args);
};
export async function* paginateGetVariables(
  config: FraudDetectorPaginationConfiguration,
  input: GetVariablesCommandInput,
  ...additionalArguments: any
): Paginator<GetVariablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetVariablesCommandOutput;
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
