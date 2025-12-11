// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAttributeValuesCommand,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
} from "../commands/GetAttributeValuesCommand";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAttributeValues: (
  config: PricingPaginationConfiguration,
  input: GetAttributeValuesCommandInput,
  ...rest: any[]
) => Paginator<GetAttributeValuesCommandOutput> = createPaginator<
  PricingPaginationConfiguration,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput
>(PricingClient, GetAttributeValuesCommand, "NextToken", "NextToken", "MaxResults");
