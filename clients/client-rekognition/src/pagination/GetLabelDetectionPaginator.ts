// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetLabelDetectionCommand,
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
} from "../commands/GetLabelDetectionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLabelDetection: (
  config: RekognitionPaginationConfiguration,
  input: GetLabelDetectionCommandInput,
  ...rest: any[]
) => Paginator<GetLabelDetectionCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput
>(RekognitionClient, GetLabelDetectionCommand, "NextToken", "NextToken", "MaxResults");
