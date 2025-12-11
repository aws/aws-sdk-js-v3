// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "../commands/ListAssociationsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociations: (
  config: SageMakerPaginationConfiguration,
  input: ListAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociationsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput
>(SageMakerClient, ListAssociationsCommand, "NextToken", "NextToken", "MaxResults");
