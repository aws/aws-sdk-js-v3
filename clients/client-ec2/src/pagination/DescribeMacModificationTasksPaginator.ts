// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeMacModificationTasksCommand,
  DescribeMacModificationTasksCommandInput,
  DescribeMacModificationTasksCommandOutput,
} from "../commands/DescribeMacModificationTasksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMacModificationTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeMacModificationTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeMacModificationTasksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeMacModificationTasksCommandInput,
  DescribeMacModificationTasksCommandOutput
>(EC2Client, DescribeMacModificationTasksCommand, "NextToken", "NextToken", "MaxResults");
