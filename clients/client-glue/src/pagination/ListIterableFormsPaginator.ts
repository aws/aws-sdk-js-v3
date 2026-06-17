// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIterableFormsCommand,
  ListIterableFormsCommandInput,
  ListIterableFormsCommandOutput,
} from "../commands/ListIterableFormsCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIterableForms: (
  config: GluePaginationConfiguration,
  input: ListIterableFormsCommandInput,
  ...rest: any[]
) => Paginator<ListIterableFormsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListIterableFormsCommandInput,
  ListIterableFormsCommandOutput
>(GlueClient, ListIterableFormsCommand, "NextToken", "NextToken", "MaxResults");
