import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import {
  ListServiceQuotasCommand,
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
} from "../commands/ListServiceQuotasCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListServiceQuotasCommandInput,
  ...args: any
): Promise<ListServiceQuotasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceQuotasCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListServiceQuotasCommandInput,
  ...args: any
): Promise<ListServiceQuotasCommandOutput> => {
  // @ts-ignore
  return await client.listServiceQuotas(input, ...args);
};
export async function* listServiceQuotasPaginate(
  config: ServiceQuotasPaginationConfiguration,
  input: ListServiceQuotasCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceQuotasCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceQuotasCommandOutput;
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
