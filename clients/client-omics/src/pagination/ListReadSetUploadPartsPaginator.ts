// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReadSetUploadPartsCommand,
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "../commands/ListReadSetUploadPartsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReadSetUploadParts: (
  config: OmicsPaginationConfiguration,
  input: ListReadSetUploadPartsCommandInput,
  ...rest: any[]
) => Paginator<ListReadSetUploadPartsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput
>(OmicsClient, ListReadSetUploadPartsCommand, "nextToken", "nextToken", "maxResults");
