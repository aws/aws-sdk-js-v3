// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "../commands/ListChangeSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChangeSets: (
  config: CloudFormationPaginationConfiguration,
  input: ListChangeSetsCommandInput,
  ...rest: any[]
) => Paginator<ListChangeSetsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput
>(CloudFormationClient, ListChangeSetsCommand, "NextToken", "NextToken", "");
