import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import {
  ListKeyPoliciesCommand,
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput,
} from "../commands/ListKeyPoliciesCommand";
import { KMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KMSClient,
  input: ListKeyPoliciesCommandInput,
  ...args: any
): Promise<ListKeyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyPoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: KMS,
  input: ListKeyPoliciesCommandInput,
  ...args: any
): Promise<ListKeyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listKeyPolicies(input, ...args);
};
export async function* listKeyPoliciesPaginate(
  config: KMSPaginationConfiguration,
  input: ListKeyPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListKeyPoliciesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
