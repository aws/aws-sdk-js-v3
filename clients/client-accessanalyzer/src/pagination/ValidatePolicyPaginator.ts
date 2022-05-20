// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AccessAnalyzer } from "../AccessAnalyzer";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ValidatePolicyCommand,
  ValidatePolicyCommandInput,
  ValidatePolicyCommandOutput,
} from "../commands/ValidatePolicyCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ValidatePolicyCommandInput,
  ...args: any
): Promise<ValidatePolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new ValidatePolicyCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ValidatePolicyCommandInput,
  ...args: any
): Promise<ValidatePolicyCommandOutput> => {
  // @ts-ignore
  return await client.validatePolicy(input, ...args);
};
export async function* paginateValidatePolicy(
  config: AccessAnalyzerPaginationConfiguration,
  input: ValidatePolicyCommandInput,
  ...additionalArguments: any
): Paginator<ValidatePolicyCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ValidatePolicyCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
