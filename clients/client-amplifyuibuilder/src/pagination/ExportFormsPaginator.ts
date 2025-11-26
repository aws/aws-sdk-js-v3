// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ExportFormsCommand, ExportFormsCommandInput, ExportFormsCommandOutput } from "../commands/ExportFormsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateExportForms: (
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportFormsCommandInput,
  ...rest: any[]
) => Paginator<ExportFormsCommandOutput> = createPaginator<
  AmplifyUIBuilderPaginationConfiguration,
  ExportFormsCommandInput,
  ExportFormsCommandOutput
>(AmplifyUIBuilderClient, ExportFormsCommand, "nextToken", "nextToken", "");
