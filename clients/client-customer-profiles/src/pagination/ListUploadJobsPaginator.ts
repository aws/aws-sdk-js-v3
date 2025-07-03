// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListUploadJobsCommand,
  ListUploadJobsCommandInput,
  ListUploadJobsCommandOutput,
} from "../commands/ListUploadJobsCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUploadJobs: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListUploadJobsCommandInput,
  ...rest: any[]
) => Paginator<ListUploadJobsCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListUploadJobsCommandInput,
  ListUploadJobsCommandOutput
>(CustomerProfilesClient, ListUploadJobsCommand, "NextToken", "NextToken", "MaxResults");
