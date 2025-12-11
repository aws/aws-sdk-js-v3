// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import {
  ExportComponentsCommand,
  ExportComponentsCommandInput,
  ExportComponentsCommandOutput,
} from "../commands/ExportComponentsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateExportComponents: (
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportComponentsCommandInput,
  ...rest: any[]
) => Paginator<ExportComponentsCommandOutput> = createPaginator<
  AmplifyUIBuilderPaginationConfiguration,
  ExportComponentsCommandInput,
  ExportComponentsCommandOutput
>(AmplifyUIBuilderClient, ExportComponentsCommand, "nextToken", "nextToken", "");
