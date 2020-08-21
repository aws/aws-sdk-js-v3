import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  DescribeOutboundCrossClusterSearchConnectionsCommand,
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  ...args: any
): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOutboundCrossClusterSearchConnectionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  ...args: any
): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeOutboundCrossClusterSearchConnections(input, ...args);
};
export async function* describeOutboundCrossClusterSearchConnectionsPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeOutboundCrossClusterSearchConnectionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
