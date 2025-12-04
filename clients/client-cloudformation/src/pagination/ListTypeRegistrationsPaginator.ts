// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListTypeRegistrationsCommand,
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "../commands/ListTypeRegistrationsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypeRegistrations: (
  config: CloudFormationPaginationConfiguration,
  input: ListTypeRegistrationsCommandInput,
  ...rest: any[]
) => Paginator<ListTypeRegistrationsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput
>(CloudFormationClient, ListTypeRegistrationsCommand, "NextToken", "NextToken", "MaxResults");
