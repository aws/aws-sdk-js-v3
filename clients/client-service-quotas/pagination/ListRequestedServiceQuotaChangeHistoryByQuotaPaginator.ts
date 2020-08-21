import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "../commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ...args: any
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ...args: any
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
  // @ts-ignore
  return await client.listRequestedServiceQuotaChangeHistoryByQuota(input, ...args);
};
export async function* listRequestedServiceQuotaChangeHistoryByQuotaPaginate(
  config: ServiceQuotasPaginationConfiguration,
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ...additionalArguments: any
): Paginator<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ServiceQuotas) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceQuotasClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceQuotas | ServiceQuotasClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
