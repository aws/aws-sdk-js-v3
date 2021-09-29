import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribePatchBaselinesCommand,
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "../commands/DescribePatchBaselinesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribePatchBaselinesCommandInput,
  ...args: any
): Promise<DescribePatchBaselinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePatchBaselinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribePatchBaselinesCommandInput,
  ...args: any
): Promise<DescribePatchBaselinesCommandOutput> => {
  // @ts-ignore
  return await client.describePatchBaselines(input, ...args);
};
export async function* paginateDescribePatchBaselines(
  config: SSMPaginationConfiguration,
  input: DescribePatchBaselinesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePatchBaselinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePatchBaselinesCommandOutput;
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
