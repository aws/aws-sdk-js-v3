// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDimensionKeysCommand,
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
} from "../commands/DescribeDimensionKeysCommand";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDimensionKeys: (
  config: PIPaginationConfiguration,
  input: DescribeDimensionKeysCommandInput,
  ...rest: any[]
) => Paginator<DescribeDimensionKeysCommandOutput> = createPaginator<
  PIPaginationConfiguration,
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput
>(PIClient, DescribeDimensionKeysCommand, "NextToken", "NextToken", "MaxResults");
