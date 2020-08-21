import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { FMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FMSClient,
  input: ListPoliciesCommandInput,
  ...args: any
): Promise<ListPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: FMS,
  input: ListPoliciesCommandInput,
  ...args: any
): Promise<ListPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listPolicies(input, ...args);
};
export async function* listPoliciesPaginate(
  config: FMSPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPoliciesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
