// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOpsMetadataCommand,
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput,
} from "../commands/ListOpsMetadataCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListOpsMetadataCommandInput,
  ...args: any
): Promise<ListOpsMetadataCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOpsMetadataCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListOpsMetadataCommandInput,
  ...args: any
): Promise<ListOpsMetadataCommandOutput> => {
  // @ts-ignore
  return await client.listOpsMetadata(input, ...args);
};
export async function* paginateListOpsMetadata(
  config: SSMPaginationConfiguration,
  input: ListOpsMetadataCommandInput,
  ...additionalArguments: any
): Paginator<ListOpsMetadataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOpsMetadataCommandOutput;
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
