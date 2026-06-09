// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrderableInstanceTypesCommand,
  ListOrderableInstanceTypesCommandInput,
  ListOrderableInstanceTypesCommandOutput,
} from "../commands/ListOrderableInstanceTypesCommand";
import { OutpostsClient } from "../OutpostsClient";
import type { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrderableInstanceTypes: (
  config: OutpostsPaginationConfiguration,
  input: ListOrderableInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListOrderableInstanceTypesCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListOrderableInstanceTypesCommandInput,
  ListOrderableInstanceTypesCommandOutput
>(OutpostsClient, ListOrderableInstanceTypesCommand, "NextToken", "NextToken", "MaxResults");
