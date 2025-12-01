// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssets: (
  config: OutpostsPaginationConfiguration,
  input: ListAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetsCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListAssetsCommandInput,
  ListAssetsCommandOutput
>(OutpostsClient, ListAssetsCommand, "NextToken", "NextToken", "MaxResults");
