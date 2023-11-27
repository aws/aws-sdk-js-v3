// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccessGrantsInstancesCommand,
  ListAccessGrantsInstancesCommandInput,
  ListAccessGrantsInstancesCommandOutput,
} from "../commands/ListAccessGrantsInstancesCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListAccessGrantsInstancesCommandInput,
  ...args: any
): Promise<ListAccessGrantsInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessGrantsInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccessGrantsInstances(
  config: S3ControlPaginationConfiguration,
  input: ListAccessGrantsInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessGrantsInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessGrantsInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof S3ControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Control | S3ControlClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
