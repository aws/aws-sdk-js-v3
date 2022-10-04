// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetCaseCommand, GetCaseCommandInput, GetCaseCommandOutput } from "../commands/GetCaseCommand";
import { ConnectCases } from "../ConnectCases";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: GetCaseCommandInput,
  ...args: any
): Promise<GetCaseCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCaseCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectCases,
  input: GetCaseCommandInput,
  ...args: any
): Promise<GetCaseCommandOutput> => {
  // @ts-ignore
  return await client.getCase(input, ...args);
};
export async function* paginateGetCase(
  config: ConnectCasesPaginationConfiguration,
  input: GetCaseCommandInput,
  ...additionalArguments: any
): Paginator<GetCaseCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCaseCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof ConnectCases) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectCasesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectCases | ConnectCasesClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
