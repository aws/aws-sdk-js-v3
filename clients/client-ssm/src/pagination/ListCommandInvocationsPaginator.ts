// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCommandInvocationsCommand,
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "../commands/ListCommandInvocationsCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListCommandInvocationsCommandInput,
  ...args: any
): Promise<ListCommandInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCommandInvocationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListCommandInvocationsCommandInput,
  ...args: any
): Promise<ListCommandInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.listCommandInvocations(input, ...args);
};
export async function* paginateListCommandInvocations(
  config: SSMPaginationConfiguration,
  input: ListCommandInvocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCommandInvocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCommandInvocationsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
