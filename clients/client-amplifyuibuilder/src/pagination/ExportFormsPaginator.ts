// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AmplifyUIBuilder } from "../AmplifyUIBuilder";
import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ExportFormsCommand, ExportFormsCommandInput, ExportFormsCommandOutput } from "../commands/ExportFormsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ExportFormsCommandInput,
  ...args: any
): Promise<ExportFormsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ExportFormsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AmplifyUIBuilder,
  input: ExportFormsCommandInput,
  ...args: any
): Promise<ExportFormsCommandOutput> => {
  // @ts-ignore
  return await client.exportForms(input, ...args);
};
export async function* paginateExportForms(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportFormsCommandInput,
  ...additionalArguments: any
): Paginator<ExportFormsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ExportFormsCommandOutput;
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
