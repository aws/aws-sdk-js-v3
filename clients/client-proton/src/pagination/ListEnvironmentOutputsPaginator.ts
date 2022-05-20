// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnvironmentOutputsCommand,
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "../commands/ListEnvironmentOutputsCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListEnvironmentOutputsCommandInput,
  ...args: any
): Promise<ListEnvironmentOutputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnvironmentOutputsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListEnvironmentOutputsCommandInput,
  ...args: any
): Promise<ListEnvironmentOutputsCommandOutput> => {
  // @ts-ignore
  return await client.listEnvironmentOutputs(input, ...args);
};
export async function* paginateListEnvironmentOutputs(
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentOutputsCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentOutputsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentOutputsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Proton) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
