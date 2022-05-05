// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AmplifyUIBuilder } from "../AmplifyUIBuilder";
import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import {
  ExportThemesCommand,
  ExportThemesCommandInput,
  ExportThemesCommandOutput,
} from "../commands/ExportThemesCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ExportThemesCommandInput,
  ...args: any
): Promise<ExportThemesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ExportThemesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AmplifyUIBuilder,
  input: ExportThemesCommandInput,
  ...args: any
): Promise<ExportThemesCommandOutput> => {
  // @ts-ignore
  return await client.exportThemes(input, ...args);
};
export async function* paginateExportThemes(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportThemesCommandInput,
  ...additionalArguments: any
): Paginator<ExportThemesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ExportThemesCommandOutput;
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
