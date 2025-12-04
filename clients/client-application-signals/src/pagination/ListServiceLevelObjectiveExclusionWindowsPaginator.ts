// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListServiceLevelObjectiveExclusionWindowsCommand,
  ListServiceLevelObjectiveExclusionWindowsCommandInput,
  ListServiceLevelObjectiveExclusionWindowsCommandOutput,
} from "../commands/ListServiceLevelObjectiveExclusionWindowsCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceLevelObjectiveExclusionWindows: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListServiceLevelObjectiveExclusionWindowsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceLevelObjectiveExclusionWindowsCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListServiceLevelObjectiveExclusionWindowsCommandInput,
  ListServiceLevelObjectiveExclusionWindowsCommandOutput
>(ApplicationSignalsClient, ListServiceLevelObjectiveExclusionWindowsCommand, "NextToken", "NextToken", "MaxResults");
