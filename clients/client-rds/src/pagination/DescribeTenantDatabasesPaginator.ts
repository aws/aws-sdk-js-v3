// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTenantDatabasesCommand,
  DescribeTenantDatabasesCommandInput,
  DescribeTenantDatabasesCommandOutput,
} from "../commands/DescribeTenantDatabasesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTenantDatabases: (
  config: RDSPaginationConfiguration,
  input: DescribeTenantDatabasesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTenantDatabasesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeTenantDatabasesCommandInput,
  DescribeTenantDatabasesCommandOutput
>(RDSClient, DescribeTenantDatabasesCommand, "Marker", "Marker", "MaxRecords");
