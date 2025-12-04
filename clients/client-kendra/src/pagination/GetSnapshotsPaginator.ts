// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSnapshotsCommand,
  GetSnapshotsCommandInput,
  GetSnapshotsCommandOutput,
} from "../commands/GetSnapshotsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSnapshots: (
  config: KendraPaginationConfiguration,
  input: GetSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<GetSnapshotsCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  GetSnapshotsCommandInput,
  GetSnapshotsCommandOutput
>(KendraClient, GetSnapshotsCommand, "NextToken", "NextToken", "MaxResults");
