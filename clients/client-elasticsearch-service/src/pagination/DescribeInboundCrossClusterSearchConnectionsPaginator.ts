// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...args: any
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInboundCrossClusterSearchConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...args: any
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeInboundCrossClusterSearchConnections(input, ...args);
};
export async function* paginateDescribeInboundCrossClusterSearchConnections(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInboundCrossClusterSearchConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInboundCrossClusterSearchConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
