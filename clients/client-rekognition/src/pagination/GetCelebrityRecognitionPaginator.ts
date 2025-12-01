// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCelebrityRecognitionCommand,
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
} from "../commands/GetCelebrityRecognitionCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCelebrityRecognition: (
  config: RekognitionPaginationConfiguration,
  input: GetCelebrityRecognitionCommandInput,
  ...rest: any[]
) => Paginator<GetCelebrityRecognitionCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput
>(RekognitionClient, GetCelebrityRecognitionCommand, "NextToken", "NextToken", "MaxResults");
