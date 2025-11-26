// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRepositoryCreationTemplatesCommand,
  DescribeRepositoryCreationTemplatesCommandInput,
  DescribeRepositoryCreationTemplatesCommandOutput,
} from "../commands/DescribeRepositoryCreationTemplatesCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRepositoryCreationTemplates: (
  config: ECRPaginationConfiguration,
  input: DescribeRepositoryCreationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRepositoryCreationTemplatesCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  DescribeRepositoryCreationTemplatesCommandInput,
  DescribeRepositoryCreationTemplatesCommandOutput
>(ECRClient, DescribeRepositoryCreationTemplatesCommand, "nextToken", "nextToken", "maxResults");
