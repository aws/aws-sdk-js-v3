// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListSystemTableStatusesCommand,
  ListSystemTableStatusesCommandInput,
  ListSystemTableStatusesCommandOutput,
} from "../commands/ListSystemTableStatusesCommand";
import type { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSystemTableStatuses: (
  config: AthenaPaginationConfiguration,
  input: ListSystemTableStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListSystemTableStatusesCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListSystemTableStatusesCommandInput,
  ListSystemTableStatusesCommandOutput
>(AthenaClient, ListSystemTableStatusesCommand, "NextToken", "NextToken", "MaxResults");
