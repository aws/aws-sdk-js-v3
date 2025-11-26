// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContainersCommand,
  ListContainersCommandInput,
  ListContainersCommandOutput,
} from "../commands/ListContainersCommand";
import { MediaStoreClient } from "../MediaStoreClient";
import { MediaStorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainers: (
  config: MediaStorePaginationConfiguration,
  input: ListContainersCommandInput,
  ...rest: any[]
) => Paginator<ListContainersCommandOutput> = createPaginator<
  MediaStorePaginationConfiguration,
  ListContainersCommandInput,
  ListContainersCommandOutput
>(MediaStoreClient, ListContainersCommand, "NextToken", "NextToken", "MaxResults");
