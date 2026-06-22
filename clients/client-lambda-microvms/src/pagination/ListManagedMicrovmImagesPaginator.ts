// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedMicrovmImagesCommand,
  ListManagedMicrovmImagesCommandInput,
  ListManagedMicrovmImagesCommandOutput,
} from "../commands/ListManagedMicrovmImagesCommand";
import { LambdaMicrovmsClient } from "../LambdaMicrovmsClient";
import type { LambdaMicrovmsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedMicrovmImages: (
  config: LambdaMicrovmsPaginationConfiguration,
  input: ListManagedMicrovmImagesCommandInput,
  ...rest: any[]
) => Paginator<ListManagedMicrovmImagesCommandOutput> = createPaginator<
  LambdaMicrovmsPaginationConfiguration,
  ListManagedMicrovmImagesCommandInput,
  ListManagedMicrovmImagesCommandOutput
>(LambdaMicrovmsClient, ListManagedMicrovmImagesCommand, "nextToken", "nextToken", "maxResults");
