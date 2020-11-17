import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";
import {
  ListComplianceStatusCommand,
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "../commands/ListComplianceStatusCommand";
import { FMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FMSClient,
  input: ListComplianceStatusCommandInput,
  ...args: any
): Promise<ListComplianceStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComplianceStatusCommand(input), ...args);
};
const makePagedRequest = async (
  client: FMS,
  input: ListComplianceStatusCommandInput,
  ...args: any
): Promise<ListComplianceStatusCommandOutput> => {
  // @ts-ignore
  return await client.listComplianceStatus(input, ...args);
};
export async function* paginateListComplianceStatus(
  config: FMSPaginationConfiguration,
  input: ListComplianceStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListComplianceStatusCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComplianceStatusCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
