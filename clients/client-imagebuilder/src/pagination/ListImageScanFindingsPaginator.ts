// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImageScanFindingsCommand,
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput,
} from "../commands/ListImageScanFindingsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImageScanFindings: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImageScanFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListImageScanFindingsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput
>(ImagebuilderClient, ListImageScanFindingsCommand, "nextToken", "nextToken", "maxResults");
