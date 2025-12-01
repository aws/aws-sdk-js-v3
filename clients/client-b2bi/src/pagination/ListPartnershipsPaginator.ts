// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { B2biClient } from "../B2biClient";
import {
  ListPartnershipsCommand,
  ListPartnershipsCommandInput,
  ListPartnershipsCommandOutput,
} from "../commands/ListPartnershipsCommand";
import { B2biPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPartnerships: (
  config: B2biPaginationConfiguration,
  input: ListPartnershipsCommandInput,
  ...rest: any[]
) => Paginator<ListPartnershipsCommandOutput> = createPaginator<
  B2biPaginationConfiguration,
  ListPartnershipsCommandInput,
  ListPartnershipsCommandOutput
>(B2biClient, ListPartnershipsCommand, "nextToken", "nextToken", "maxResults");
