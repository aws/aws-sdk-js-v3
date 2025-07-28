// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListComputationModelResolveToResourcesCommand,
  ListComputationModelResolveToResourcesCommandInput,
  ListComputationModelResolveToResourcesCommandOutput,
} from "../commands/ListComputationModelResolveToResourcesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComputationModelResolveToResources: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListComputationModelResolveToResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListComputationModelResolveToResourcesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListComputationModelResolveToResourcesCommandInput,
  ListComputationModelResolveToResourcesCommandOutput
>(IoTSiteWiseClient, ListComputationModelResolveToResourcesCommand, "nextToken", "nextToken", "maxResults");
