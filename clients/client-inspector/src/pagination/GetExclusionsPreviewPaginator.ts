// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetExclusionsPreviewCommand,
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "../commands/GetExclusionsPreviewCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetExclusionsPreview: (
  config: InspectorPaginationConfiguration,
  input: GetExclusionsPreviewCommandInput,
  ...rest: any[]
) => Paginator<GetExclusionsPreviewCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput
>(InspectorClient, GetExclusionsPreviewCommand, "nextToken", "nextToken", "maxResults");
