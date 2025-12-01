// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamProcessorsCommand,
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "../commands/ListStreamProcessorsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamProcessors: (
  config: RekognitionPaginationConfiguration,
  input: ListStreamProcessorsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamProcessorsCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput
>(RekognitionClient, ListStreamProcessorsCommand, "NextToken", "NextToken", "MaxResults");
