import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import {
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "../commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  ...args: any
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRequestedServiceQuotaChangeHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  ...args: any
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.listRequestedServiceQuotaChangeHistory(input, ...args);
};
export async function* listRequestedServiceQuotaChangeHistoryPaginate(
  config: ServiceQuotasPaginationConfiguration,
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  ...additionalArguments: any
): Paginator<ListRequestedServiceQuotaChangeHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRequestedServiceQuotaChangeHistoryCommandOutput;
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
