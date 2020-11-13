import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribePatchPropertiesCommand,
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "../commands/DescribePatchPropertiesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribePatchPropertiesCommandInput,
  ...args: any
): Promise<DescribePatchPropertiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePatchPropertiesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribePatchPropertiesCommandInput,
  ...args: any
): Promise<DescribePatchPropertiesCommandOutput> => {
  // @ts-ignore
  return await client.describePatchProperties(input, ...args);
};
export async function* describePatchPropertiesPaginate(
  config: SSMPaginationConfiguration,
  input: DescribePatchPropertiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePatchPropertiesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePatchPropertiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
