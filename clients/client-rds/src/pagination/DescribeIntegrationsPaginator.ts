// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeIntegrationsCommand,
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "../commands/DescribeIntegrationsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeIntegrationsCommandInput,
  ...args: any
): Promise<DescribeIntegrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeIntegrationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeIntegrations(
  config: RDSPaginationConfiguration,
  input: DescribeIntegrationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeIntegrationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeIntegrationsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
