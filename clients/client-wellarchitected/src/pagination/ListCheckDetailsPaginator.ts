// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCheckDetailsCommand,
  ListCheckDetailsCommandInput,
  ListCheckDetailsCommandOutput,
} from "../commands/ListCheckDetailsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCheckDetails: (
  config: WellArchitectedPaginationConfiguration,
  input: ListCheckDetailsCommandInput,
  ...rest: any[]
) => Paginator<ListCheckDetailsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListCheckDetailsCommandInput,
  ListCheckDetailsCommandOutput
>(WellArchitectedClient, ListCheckDetailsCommand, "NextToken", "NextToken", "MaxResults");
