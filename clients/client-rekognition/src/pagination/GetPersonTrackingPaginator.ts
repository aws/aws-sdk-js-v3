// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPersonTrackingCommand,
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
} from "../commands/GetPersonTrackingCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPersonTracking: (
  config: RekognitionPaginationConfiguration,
  input: GetPersonTrackingCommandInput,
  ...rest: any[]
) => Paginator<GetPersonTrackingCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput
>(RekognitionClient, GetPersonTrackingCommand, "NextToken", "NextToken", "MaxResults");
