// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterExtensionsCommand,
  ListClusterExtensionsCommandInput,
  ListClusterExtensionsCommandOutput,
} from "../commands/ListClusterExtensionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterExtensions: (
  config: SageMakerPaginationConfiguration,
  input: ListClusterExtensionsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterExtensionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListClusterExtensionsCommandInput,
  ListClusterExtensionsCommandOutput
>(SageMakerClient, ListClusterExtensionsCommand, "NextToken", "NextToken", "MaxResults");
