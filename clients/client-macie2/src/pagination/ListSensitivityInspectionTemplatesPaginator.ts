// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSensitivityInspectionTemplatesCommand,
  ListSensitivityInspectionTemplatesCommandInput,
  ListSensitivityInspectionTemplatesCommandOutput,
} from "../commands/ListSensitivityInspectionTemplatesCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSensitivityInspectionTemplates: (
  config: Macie2PaginationConfiguration,
  input: ListSensitivityInspectionTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListSensitivityInspectionTemplatesCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListSensitivityInspectionTemplatesCommandInput,
  ListSensitivityInspectionTemplatesCommandOutput
>(Macie2Client, ListSensitivityInspectionTemplatesCommand, "nextToken", "nextToken", "maxResults");
