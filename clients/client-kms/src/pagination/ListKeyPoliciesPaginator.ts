import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import {
  ListKeyPoliciesCommand,
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput,
} from "../commands/ListKeyPoliciesCommand";
import { KMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: ListKeyPoliciesCommandInput,
  ...args: any
): Promise<ListKeyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KMS,
  input: ListKeyPoliciesCommandInput,
  ...args: any
): Promise<ListKeyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listKeyPolicies(input, ...args);
};
export async function* paginateListKeyPolicies(
  config: KMSPaginationConfiguration,
  input: ListKeyPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeyPoliciesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
