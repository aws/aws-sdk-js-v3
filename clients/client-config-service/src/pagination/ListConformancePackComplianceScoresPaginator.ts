// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListConformancePackComplianceScoresCommand,
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
} from "../commands/ListConformancePackComplianceScoresCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: ListConformancePackComplianceScoresCommandInput,
  ...args: any
): Promise<ListConformancePackComplianceScoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConformancePackComplianceScoresCommand(input), ...args);
};
export async function* paginateListConformancePackComplianceScores(
  config: ConfigServicePaginationConfiguration,
  input: ListConformancePackComplianceScoresCommandInput,
  ...additionalArguments: any
): Paginator<ListConformancePackComplianceScoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConformancePackComplianceScoresCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
