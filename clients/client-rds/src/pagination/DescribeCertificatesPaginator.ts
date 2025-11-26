// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCertificates: (
  config: RDSPaginationConfiguration,
  input: DescribeCertificatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCertificatesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput
>(RDSClient, DescribeCertificatesCommand, "Marker", "Marker", "MaxRecords");
