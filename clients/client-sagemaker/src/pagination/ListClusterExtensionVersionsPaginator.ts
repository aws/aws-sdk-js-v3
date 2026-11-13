// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterExtensionVersionsCommand,
  ListClusterExtensionVersionsCommandInput,
  ListClusterExtensionVersionsCommandOutput,
} from "../commands/ListClusterExtensionVersionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterExtensionVersions: (
  config: SageMakerPaginationConfiguration,
  input: ListClusterExtensionVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterExtensionVersionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListClusterExtensionVersionsCommandInput,
  ListClusterExtensionVersionsCommandOutput
>(SageMakerClient, ListClusterExtensionVersionsCommand, "NextToken", "NextToken", "MaxResults");
