// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMicrovmImagesCommand,
  ListMicrovmImagesCommandInput,
  ListMicrovmImagesCommandOutput,
} from "../commands/ListMicrovmImagesCommand";
import { LambdaMicrovmsClient } from "../LambdaMicrovmsClient";
import type { LambdaMicrovmsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrovmImages: (
  config: LambdaMicrovmsPaginationConfiguration,
  input: ListMicrovmImagesCommandInput,
  ...rest: any[]
) => Paginator<ListMicrovmImagesCommandOutput> = createPaginator<
  LambdaMicrovmsPaginationConfiguration,
  ListMicrovmImagesCommandInput,
  ListMicrovmImagesCommandOutput
>(LambdaMicrovmsClient, ListMicrovmImagesCommand, "nextToken", "nextToken", "maxResults");
