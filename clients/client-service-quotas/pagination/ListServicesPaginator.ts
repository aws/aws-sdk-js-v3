import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.listServices(input, ...args);
};
export async function* paginateListServices(
  config: ServiceQuotasPaginationConfiguration,
  input: ListServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicesCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
