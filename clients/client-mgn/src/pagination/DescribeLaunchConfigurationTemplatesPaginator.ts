// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "../commands/DescribeLaunchConfigurationTemplatesCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: DescribeLaunchConfigurationTemplatesCommandInput,
  ...args: any
): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLaunchConfigurationTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeLaunchConfigurationTemplates(
  config: MgnPaginationConfiguration,
  input: DescribeLaunchConfigurationTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLaunchConfigurationTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLaunchConfigurationTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
