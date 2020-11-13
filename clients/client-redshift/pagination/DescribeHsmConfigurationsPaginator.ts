import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeHsmConfigurationsCommand,
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "../commands/DescribeHsmConfigurationsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeHsmConfigurationsCommandInput,
  ...args: any
): Promise<DescribeHsmConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeHsmConfigurationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeHsmConfigurationsCommandInput,
  ...args: any
): Promise<DescribeHsmConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.describeHsmConfigurations(input, ...args);
};
export async function* describeHsmConfigurationsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeHsmConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeHsmConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeHsmConfigurationsCommandOutput;
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
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
