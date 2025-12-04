// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCasesCommand,
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput,
} from "../commands/DescribeCasesCommand";
import { SupportClient } from "../SupportClient";
import { SupportPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCases: (
  config: SupportPaginationConfiguration,
  input: DescribeCasesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCasesCommandOutput> = createPaginator<
  SupportPaginationConfiguration,
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput
>(SupportClient, DescribeCasesCommand, "nextToken", "nextToken", "maxResults");
