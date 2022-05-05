// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BackupGateway } from "../BackupGateway";
import { BackupGatewayClient } from "../BackupGatewayClient";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { BackupGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupGatewayClient,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewaysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: BackupGateway,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listGateways(input, ...args);
};
export async function* paginateListGateways(
  config: BackupGatewayPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewaysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewaysCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BackupGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected BackupGateway | BackupGatewayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
