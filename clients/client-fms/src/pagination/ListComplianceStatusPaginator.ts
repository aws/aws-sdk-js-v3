// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComplianceStatusCommand,
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "../commands/ListComplianceStatusCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComplianceStatus: (
  config: FMSPaginationConfiguration,
  input: ListComplianceStatusCommandInput,
  ...rest: any[]
) => Paginator<ListComplianceStatusCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput
>(FMSClient, ListComplianceStatusCommand, "NextToken", "NextToken", "MaxResults");
