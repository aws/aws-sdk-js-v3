import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...args: any
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInboundCrossClusterSearchConnectionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...args: any
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeInboundCrossClusterSearchConnections(input, ...args);
};
export async function* describeInboundCrossClusterSearchConnectionsPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInboundCrossClusterSearchConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
