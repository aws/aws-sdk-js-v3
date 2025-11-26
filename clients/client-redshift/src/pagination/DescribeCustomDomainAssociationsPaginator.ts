// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCustomDomainAssociationsCommand,
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
} from "../commands/DescribeCustomDomainAssociationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCustomDomainAssociations: (
  config: RedshiftPaginationConfiguration,
  input: DescribeCustomDomainAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCustomDomainAssociationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput
>(RedshiftClient, DescribeCustomDomainAssociationsCommand, "Marker", "Marker", "MaxRecords");
