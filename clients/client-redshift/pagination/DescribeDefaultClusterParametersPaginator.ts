import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeDefaultClusterParametersCommand,
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "../commands/DescribeDefaultClusterParametersCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeDefaultClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDefaultClusterParametersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeDefaultClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeDefaultClusterParameters(input, ...args);
};
export async function* describeDefaultClusterParametersPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeDefaultClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDefaultClusterParametersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDefaultClusterParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.DefaultClusterParameters!.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
