// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ArtifactClient } from "../ArtifactClient";
import {
  ListComplianceInquiriesCommand,
  ListComplianceInquiriesCommandInput,
  ListComplianceInquiriesCommandOutput,
} from "../commands/ListComplianceInquiriesCommand";
import type { ArtifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComplianceInquiries: (
  config: ArtifactPaginationConfiguration,
  input: ListComplianceInquiriesCommandInput,
  ...rest: any[]
) => Paginator<ListComplianceInquiriesCommandOutput> = createPaginator<
  ArtifactPaginationConfiguration,
  ListComplianceInquiriesCommandInput,
  ListComplianceInquiriesCommandOutput
>(ArtifactClient, ListComplianceInquiriesCommand, "nextToken", "nextToken", "maxResults");
