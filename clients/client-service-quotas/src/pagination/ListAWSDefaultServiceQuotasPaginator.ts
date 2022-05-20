// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "../commands/ListAWSDefaultServiceQuotasCommand";
import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...args: any
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAWSDefaultServiceQuotasCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...args: any
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  // @ts-ignore
  return await client.listAWSDefaultServiceQuotas(input, ...args);
};
export async function* paginateListAWSDefaultServiceQuotas(
  config: ServiceQuotasPaginationConfiguration,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...additionalArguments: any
): Paginator<ListAWSDefaultServiceQuotasCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAWSDefaultServiceQuotasCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ServiceQuotas) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceQuotasClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceQuotas | ServiceQuotasClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
