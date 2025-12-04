// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ListFormsCommand, ListFormsCommandInput, ListFormsCommandOutput } from "../commands/ListFormsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListForms: (
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ListFormsCommandInput,
  ...rest: any[]
) => Paginator<ListFormsCommandOutput> = createPaginator<
  AmplifyUIBuilderPaginationConfiguration,
  ListFormsCommandInput,
  ListFormsCommandOutput
>(AmplifyUIBuilderClient, ListFormsCommand, "nextToken", "nextToken", "maxResults");
