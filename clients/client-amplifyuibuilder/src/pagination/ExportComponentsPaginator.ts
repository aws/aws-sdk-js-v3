// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AmplifyUIBuilder } from "../AmplifyUIBuilder";
import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import {
  ExportComponentsCommand,
  ExportComponentsCommandInput,
  ExportComponentsCommandOutput,
} from "../commands/ExportComponentsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ExportComponentsCommandInput,
  ...args: any
): Promise<ExportComponentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ExportComponentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AmplifyUIBuilder,
  input: ExportComponentsCommandInput,
  ...args: any
): Promise<ExportComponentsCommandOutput> => {
  // @ts-ignore
  return await client.exportComponents(input, ...args);
};
export async function* paginateExportComponents(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportComponentsCommandInput,
  ...additionalArguments: any
): Paginator<ExportComponentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ExportComponentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof AmplifyUIBuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AmplifyUIBuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AmplifyUIBuilder | AmplifyUIBuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
