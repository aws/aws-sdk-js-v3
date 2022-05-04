// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeCasesCommand,
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput,
} from "../commands/DescribeCasesCommand";
import { Support } from "../Support";
import { SupportClient } from "../SupportClient";
import { SupportPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SupportClient,
  input: DescribeCasesCommandInput,
  ...args: any
): Promise<DescribeCasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Support,
  input: DescribeCasesCommandInput,
  ...args: any
): Promise<DescribeCasesCommandOutput> => {
  // @ts-ignore
  return await client.describeCases(input, ...args);
};
export async function* paginateDescribeCases(
  config: SupportPaginationConfiguration,
  input: DescribeCasesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCasesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Support) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SupportClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Support | SupportClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
