// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourceSnapshotsCommand,
  ListResourceSnapshotsCommandInput,
  ListResourceSnapshotsCommandOutput,
} from "../commands/ListResourceSnapshotsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceSnapshots: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListResourceSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceSnapshotsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListResourceSnapshotsCommandInput,
  ListResourceSnapshotsCommandOutput
>(PartnerCentralSellingClient, ListResourceSnapshotsCommand, "NextToken", "NextToken", "MaxResults");
