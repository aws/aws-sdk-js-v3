// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SelectResourceConfigCommand,
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "../commands/SelectResourceConfigCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: SelectResourceConfigCommandInput,
  ...args: any
): Promise<SelectResourceConfigCommandOutput> => {
  // @ts-ignore
  return await client.send(new SelectResourceConfigCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSelectResourceConfig(
  config: ConfigServicePaginationConfiguration,
  input: SelectResourceConfigCommandInput,
  ...additionalArguments: any
): Paginator<SelectResourceConfigCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SelectResourceConfigCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
