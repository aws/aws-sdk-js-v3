// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BackupGateway } from "../BackupGateway";
import { BackupGatewayClient } from "../BackupGatewayClient";
import {
  ListVirtualMachinesCommand,
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
} from "../commands/ListVirtualMachinesCommand";
import { BackupGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupGatewayClient,
  input: ListVirtualMachinesCommandInput,
  ...args: any
): Promise<ListVirtualMachinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualMachinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: BackupGateway,
  input: ListVirtualMachinesCommandInput,
  ...args: any
): Promise<ListVirtualMachinesCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualMachines(input, ...args);
};
export async function* paginateListVirtualMachines(
  config: BackupGatewayPaginationConfiguration,
  input: ListVirtualMachinesCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualMachinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVirtualMachinesCommandOutput;
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
