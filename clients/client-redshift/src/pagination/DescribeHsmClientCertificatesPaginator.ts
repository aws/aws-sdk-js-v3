// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeHsmClientCertificatesCommand,
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "../commands/DescribeHsmClientCertificatesCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeHsmClientCertificates: (
  config: RedshiftPaginationConfiguration,
  input: DescribeHsmClientCertificatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeHsmClientCertificatesCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput
>(RedshiftClient, DescribeHsmClientCertificatesCommand, "Marker", "Marker", "MaxRecords");
