// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeMappedResourceConfigurationCommand,
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput,
} from "../commands/DescribeMappedResourceConfigurationCommand";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KinesisVideoClient,
  input: DescribeMappedResourceConfigurationCommandInput,
  ...args: any
): Promise<DescribeMappedResourceConfigurationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMappedResourceConfigurationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeMappedResourceConfiguration(
  config: KinesisVideoPaginationConfiguration,
  input: DescribeMappedResourceConfigurationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMappedResourceConfigurationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMappedResourceConfigurationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KinesisVideoClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KinesisVideo | KinesisVideoClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
