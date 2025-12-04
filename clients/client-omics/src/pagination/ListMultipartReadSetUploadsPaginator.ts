// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMultipartReadSetUploadsCommand,
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "../commands/ListMultipartReadSetUploadsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultipartReadSetUploads: (
  config: OmicsPaginationConfiguration,
  input: ListMultipartReadSetUploadsCommandInput,
  ...rest: any[]
) => Paginator<ListMultipartReadSetUploadsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput
>(OmicsClient, ListMultipartReadSetUploadsCommand, "nextToken", "nextToken", "maxResults");
