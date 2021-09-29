import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "../commands/ListAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListAssociationsCommandInput,
  ...args: any
): Promise<ListAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListAssociationsCommandInput,
  ...args: any
): Promise<ListAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listAssociations(input, ...args);
};
export async function* paginateListAssociations(
  config: SSMPaginationConfiguration,
  input: ListAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
