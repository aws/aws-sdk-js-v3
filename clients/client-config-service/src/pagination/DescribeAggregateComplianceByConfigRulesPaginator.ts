// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "../commands/DescribeAggregateComplianceByConfigRulesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  ...args: any
): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAggregateComplianceByConfigRulesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAggregateComplianceByConfigRules(
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAggregateComplianceByConfigRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAggregateComplianceByConfigRulesCommandOutput;
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
