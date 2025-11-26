// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCertificates: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeCertificatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCertificatesCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput
>(DatabaseMigrationServiceClient, DescribeCertificatesCommand, "Marker", "Marker", "MaxRecords");
