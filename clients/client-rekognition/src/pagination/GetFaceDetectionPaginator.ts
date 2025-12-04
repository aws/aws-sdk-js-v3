// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetFaceDetectionCommand,
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput,
} from "../commands/GetFaceDetectionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFaceDetection: (
  config: RekognitionPaginationConfiguration,
  input: GetFaceDetectionCommandInput,
  ...rest: any[]
) => Paginator<GetFaceDetectionCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput
>(RekognitionClient, GetFaceDetectionCommand, "NextToken", "NextToken", "MaxResults");
