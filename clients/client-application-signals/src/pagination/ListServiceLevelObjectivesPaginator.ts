// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListServiceLevelObjectivesCommand,
  ListServiceLevelObjectivesCommandInput,
  ListServiceLevelObjectivesCommandOutput,
} from "../commands/ListServiceLevelObjectivesCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceLevelObjectives: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListServiceLevelObjectivesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceLevelObjectivesCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListServiceLevelObjectivesCommandInput,
  ListServiceLevelObjectivesCommandOutput
>(ApplicationSignalsClient, ListServiceLevelObjectivesCommand, "NextToken", "NextToken", "MaxResults");
