// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  CreateHubContentPresignedUrlsCommand,
  CreateHubContentPresignedUrlsCommandInput,
  CreateHubContentPresignedUrlsCommandOutput,
} from "../commands/CreateHubContentPresignedUrlsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateCreateHubContentPresignedUrls: (
  config: SageMakerPaginationConfiguration,
  input: CreateHubContentPresignedUrlsCommandInput,
  ...rest: any[]
) => Paginator<CreateHubContentPresignedUrlsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  CreateHubContentPresignedUrlsCommandInput,
  CreateHubContentPresignedUrlsCommandOutput
>(SageMakerClient, CreateHubContentPresignedUrlsCommand, "NextToken", "NextToken", "MaxResults");
