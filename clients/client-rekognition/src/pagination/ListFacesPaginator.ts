// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFacesCommand, ListFacesCommandInput, ListFacesCommandOutput } from "../commands/ListFacesCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFaces: (
  config: RekognitionPaginationConfiguration,
  input: ListFacesCommandInput,
  ...rest: any[]
) => Paginator<ListFacesCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListFacesCommandInput,
  ListFacesCommandOutput
>(RekognitionClient, ListFacesCommand, "NextToken", "NextToken", "MaxResults");
