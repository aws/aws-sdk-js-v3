// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput,
} from "../commands/GetInstanceTypesFromInstanceRequirementsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInstanceTypesFromInstanceRequirements: (
  config: EC2PaginationConfiguration,
  input: GetInstanceTypesFromInstanceRequirementsCommandInput,
  ...rest: any[]
) => Paginator<GetInstanceTypesFromInstanceRequirementsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput
>(EC2Client, GetInstanceTypesFromInstanceRequirementsCommand, "NextToken", "NextToken", "MaxResults");
