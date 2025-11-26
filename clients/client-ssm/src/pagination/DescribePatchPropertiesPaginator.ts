// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePatchPropertiesCommand,
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "../commands/DescribePatchPropertiesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePatchProperties: (
  config: SSMPaginationConfiguration,
  input: DescribePatchPropertiesCommandInput,
  ...rest: any[]
) => Paginator<DescribePatchPropertiesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput
>(SSMClient, DescribePatchPropertiesCommand, "NextToken", "NextToken", "MaxResults");
