// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "../commands/ListAWSDefaultServiceQuotasCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ServiceQuotasClient) {
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
