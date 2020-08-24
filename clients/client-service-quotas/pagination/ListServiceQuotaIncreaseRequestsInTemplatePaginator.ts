import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "../commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceQuotasClient,
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ...args: any
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceQuotaIncreaseRequestsInTemplateCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceQuotas,
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ...args: any
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
  // @ts-ignore
  return await client.listServiceQuotaIncreaseRequestsInTemplate(input, ...args);
};
export async function* listServiceQuotaIncreaseRequestsInTemplatePaginate(
  config: ServiceQuotasPaginationConfiguration,
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput;
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
