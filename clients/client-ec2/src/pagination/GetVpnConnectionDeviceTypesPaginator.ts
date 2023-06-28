// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetVpnConnectionDeviceTypesCommand,
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
} from "../commands/GetVpnConnectionDeviceTypesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: GetVpnConnectionDeviceTypesCommandInput,
  ...args: any
): Promise<GetVpnConnectionDeviceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetVpnConnectionDeviceTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetVpnConnectionDeviceTypes(
  config: EC2PaginationConfiguration,
  input: GetVpnConnectionDeviceTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetVpnConnectionDeviceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetVpnConnectionDeviceTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
