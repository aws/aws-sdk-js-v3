// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import {
  ExportThemesCommand,
  ExportThemesCommandInput,
  ExportThemesCommandOutput,
} from "../commands/ExportThemesCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateExportThemes: (
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportThemesCommandInput,
  ...rest: any[]
) => Paginator<ExportThemesCommandOutput> = createPaginator<
  AmplifyUIBuilderPaginationConfiguration,
  ExportThemesCommandInput,
  ExportThemesCommandOutput
>(AmplifyUIBuilderClient, ExportThemesCommand, "nextToken", "nextToken", "");
