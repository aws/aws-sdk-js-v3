// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "../commands/GetUnfilteredPartitionsMetadataCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUnfilteredPartitionsMetadata: (
  config: GluePaginationConfiguration,
  input: GetUnfilteredPartitionsMetadataCommandInput,
  ...rest: any[]
) => Paginator<GetUnfilteredPartitionsMetadataCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput
>(GlueClient, GetUnfilteredPartitionsMetadataCommand, "NextToken", "NextToken", "MaxResults");
