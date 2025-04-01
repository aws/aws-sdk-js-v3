// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAssetInstancesCommand,
  ListAssetInstancesCommandInput,
  ListAssetInstancesCommandOutput,
} from "../commands/ListAssetInstancesCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetInstances: (
  config: OutpostsPaginationConfiguration,
  input: ListAssetInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListAssetInstancesCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListAssetInstancesCommandInput,
  ListAssetInstancesCommandOutput
>(OutpostsClient, ListAssetInstancesCommand, "NextToken", "NextToken", "MaxResults");
