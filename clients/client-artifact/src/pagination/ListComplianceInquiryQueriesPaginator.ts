// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ArtifactClient } from "../ArtifactClient";
import {
  ListComplianceInquiryQueriesCommand,
  ListComplianceInquiryQueriesCommandInput,
  ListComplianceInquiryQueriesCommandOutput,
} from "../commands/ListComplianceInquiryQueriesCommand";
import type { ArtifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComplianceInquiryQueries: (
  config: ArtifactPaginationConfiguration,
  input: ListComplianceInquiryQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListComplianceInquiryQueriesCommandOutput> = createPaginator<
  ArtifactPaginationConfiguration,
  ListComplianceInquiryQueriesCommandInput,
  ListComplianceInquiryQueriesCommandOutput
>(ArtifactClient, ListComplianceInquiryQueriesCommand, "nextToken", "nextToken", "maxResults");
