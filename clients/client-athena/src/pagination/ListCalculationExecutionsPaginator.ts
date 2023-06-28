// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListCalculationExecutionsCommand,
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
} from "../commands/ListCalculationExecutionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListCalculationExecutionsCommandInput,
  ...args: any
): Promise<ListCalculationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCalculationExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCalculationExecutions(
  config: AthenaPaginationConfiguration,
  input: ListCalculationExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCalculationExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCalculationExecutionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
