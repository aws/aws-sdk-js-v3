import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "../commands/ListAWSDefaultServiceQuotasCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...args: any
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAWSDefaultServiceQuotasCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...args: any
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  // @ts-ignore
  return await client.listAWSDefaultServiceQuotas(input, ...args);
};
export async function* listAWSDefaultServiceQuotasPaginate(
  config: ServiceQuotasPaginationConfiguration,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...additionalArguments: any
): Paginator<ListAWSDefaultServiceQuotasCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAWSDefaultServiceQuotasCommandOutput;
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
