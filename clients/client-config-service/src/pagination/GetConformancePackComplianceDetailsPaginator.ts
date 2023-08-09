// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "../commands/GetConformancePackComplianceDetailsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetConformancePackComplianceDetailsCommandInput,
  ...args: any
): Promise<GetConformancePackComplianceDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConformancePackComplianceDetailsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetConformancePackComplianceDetails(
  config: ConfigServicePaginationConfiguration,
  input: GetConformancePackComplianceDetailsCommandInput,
  ...additionalArguments: any
): Paginator<GetConformancePackComplianceDetailsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConformancePackComplianceDetailsCommandOutput;
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
