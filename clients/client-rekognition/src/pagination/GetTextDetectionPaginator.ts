// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTextDetectionCommand,
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput,
} from "../commands/GetTextDetectionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTextDetection: (
  config: RekognitionPaginationConfiguration,
  input: GetTextDetectionCommandInput,
  ...rest: any[]
) => Paginator<GetTextDetectionCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput
>(RekognitionClient, GetTextDetectionCommand, "NextToken", "NextToken", "MaxResults");
