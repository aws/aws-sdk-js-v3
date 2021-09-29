import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "../commands/GetConformancePackComplianceDetailsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetConformancePackComplianceDetailsCommandInput,
  ...args: any
): Promise<GetConformancePackComplianceDetailsCommandOutput> => {
  // @ts-ignore
  return await client.getConformancePackComplianceDetails(input, ...args);
};
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
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
