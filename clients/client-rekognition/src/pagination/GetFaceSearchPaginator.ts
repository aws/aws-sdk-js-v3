// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetFaceSearchCommand,
  GetFaceSearchCommandInput,
  GetFaceSearchCommandOutput,
} from "../commands/GetFaceSearchCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFaceSearch: (
  config: RekognitionPaginationConfiguration,
  input: GetFaceSearchCommandInput,
  ...rest: any[]
) => Paginator<GetFaceSearchCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetFaceSearchCommandInput,
  GetFaceSearchCommandOutput
>(RekognitionClient, GetFaceSearchCommand, "NextToken", "NextToken", "MaxResults");
