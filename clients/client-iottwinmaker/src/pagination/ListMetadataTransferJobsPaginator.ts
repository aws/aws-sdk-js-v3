// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMetadataTransferJobsCommand,
  ListMetadataTransferJobsCommandInput,
  ListMetadataTransferJobsCommandOutput,
} from "../commands/ListMetadataTransferJobsCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetadataTransferJobs: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListMetadataTransferJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMetadataTransferJobsCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListMetadataTransferJobsCommandInput,
  ListMetadataTransferJobsCommandOutput
>(IoTTwinMakerClient, ListMetadataTransferJobsCommand, "nextToken", "nextToken", "maxResults");
