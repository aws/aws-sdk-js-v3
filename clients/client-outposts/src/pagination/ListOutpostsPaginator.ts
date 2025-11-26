// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOutpostsCommand,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
} from "../commands/ListOutpostsCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOutposts: (
  config: OutpostsPaginationConfiguration,
  input: ListOutpostsCommandInput,
  ...rest: any[]
) => Paginator<ListOutpostsCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput
>(OutpostsClient, ListOutpostsCommand, "NextToken", "NextToken", "MaxResults");
