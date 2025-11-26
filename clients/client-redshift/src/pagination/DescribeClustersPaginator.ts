// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "../commands/DescribeClustersCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusters: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeClustersCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
>(RedshiftClient, DescribeClustersCommand, "Marker", "Marker", "MaxRecords");
