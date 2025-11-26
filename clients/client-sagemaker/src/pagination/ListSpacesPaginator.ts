// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpaces: (
  config: SageMakerPaginationConfiguration,
  input: ListSpacesCommandInput,
  ...rest: any[]
) => Paginator<ListSpacesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListSpacesCommandInput,
  ListSpacesCommandOutput
>(SageMakerClient, ListSpacesCommand, "NextToken", "NextToken", "MaxResults");
