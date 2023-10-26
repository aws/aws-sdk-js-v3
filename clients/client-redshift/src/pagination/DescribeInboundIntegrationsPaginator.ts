// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeInboundIntegrationsCommand,
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "../commands/DescribeInboundIntegrationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeInboundIntegrationsCommandInput,
  ...args: any
): Promise<DescribeInboundIntegrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInboundIntegrationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeInboundIntegrations(
  config: RedshiftPaginationConfiguration,
  input: DescribeInboundIntegrationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInboundIntegrationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInboundIntegrationsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
