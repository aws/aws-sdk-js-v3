import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListGroupPoliciesCommand,
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "../commands/ListGroupPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListGroupPoliciesCommandInput,
  ...args: any
): Promise<ListGroupPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListGroupPoliciesCommandInput,
  ...args: any
): Promise<ListGroupPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listGroupPolicies(input, ...args);
};
export async function* paginateListGroupPolicies(
  config: IAMPaginationConfiguration,
  input: ListGroupPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupPoliciesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
