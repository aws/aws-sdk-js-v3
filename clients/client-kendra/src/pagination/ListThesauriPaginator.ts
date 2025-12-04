// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThesauriCommand,
  ListThesauriCommandInput,
  ListThesauriCommandOutput,
} from "../commands/ListThesauriCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThesauri: (
  config: KendraPaginationConfiguration,
  input: ListThesauriCommandInput,
  ...rest: any[]
) => Paginator<ListThesauriCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListThesauriCommandInput,
  ListThesauriCommandOutput
>(KendraClient, ListThesauriCommand, "NextToken", "NextToken", "MaxResults");
