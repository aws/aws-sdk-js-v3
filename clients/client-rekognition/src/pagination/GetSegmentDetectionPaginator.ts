// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSegmentDetectionCommand,
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
} from "../commands/GetSegmentDetectionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSegmentDetection: (
  config: RekognitionPaginationConfiguration,
  input: GetSegmentDetectionCommandInput,
  ...rest: any[]
) => Paginator<GetSegmentDetectionCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput
>(RekognitionClient, GetSegmentDetectionCommand, "NextToken", "NextToken", "MaxResults");
