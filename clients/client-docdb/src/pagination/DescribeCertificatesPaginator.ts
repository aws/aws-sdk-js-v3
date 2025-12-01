// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCertificates: (
  config: DocDBPaginationConfiguration,
  input: DescribeCertificatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCertificatesCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput
>(DocDBClient, DescribeCertificatesCommand, "Marker", "Marker", "MaxRecords");
