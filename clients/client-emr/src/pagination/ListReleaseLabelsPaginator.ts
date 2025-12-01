// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReleaseLabelsCommand,
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
} from "../commands/ListReleaseLabelsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReleaseLabels: (
  config: EMRPaginationConfiguration,
  input: ListReleaseLabelsCommandInput,
  ...rest: any[]
) => Paginator<ListReleaseLabelsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput
>(EMRClient, ListReleaseLabelsCommand, "NextToken", "NextToken", "MaxResults");
