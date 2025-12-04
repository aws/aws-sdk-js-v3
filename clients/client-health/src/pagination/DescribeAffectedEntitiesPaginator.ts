// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "../commands/DescribeAffectedEntitiesCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAffectedEntities: (
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeAffectedEntitiesCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput
>(HealthClient, DescribeAffectedEntitiesCommand, "nextToken", "nextToken", "maxResults");
