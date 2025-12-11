// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOutpostsWithS3Command,
  ListOutpostsWithS3CommandInput,
  ListOutpostsWithS3CommandOutput,
} from "../commands/ListOutpostsWithS3Command";
import { S3OutpostsClient } from "../S3OutpostsClient";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOutpostsWithS3: (
  config: S3OutpostsPaginationConfiguration,
  input: ListOutpostsWithS3CommandInput,
  ...rest: any[]
) => Paginator<ListOutpostsWithS3CommandOutput> = createPaginator<
  S3OutpostsPaginationConfiguration,
  ListOutpostsWithS3CommandInput,
  ListOutpostsWithS3CommandOutput
>(S3OutpostsClient, ListOutpostsWithS3Command, "NextToken", "NextToken", "MaxResults");
