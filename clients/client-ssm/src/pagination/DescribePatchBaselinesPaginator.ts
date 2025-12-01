// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePatchBaselinesCommand,
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "../commands/DescribePatchBaselinesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePatchBaselines: (
  config: SSMPaginationConfiguration,
  input: DescribePatchBaselinesCommandInput,
  ...rest: any[]
) => Paginator<DescribePatchBaselinesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput
>(SSMClient, DescribePatchBaselinesCommand, "NextToken", "NextToken", "MaxResults");
