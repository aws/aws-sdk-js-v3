// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDefaultVocabulariesCommand,
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "../commands/ListDefaultVocabulariesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDefaultVocabularies: (
  config: ConnectPaginationConfiguration,
  input: ListDefaultVocabulariesCommandInput,
  ...rest: any[]
) => Paginator<ListDefaultVocabulariesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput
>(ConnectClient, ListDefaultVocabulariesCommand, "NextToken", "NextToken", "MaxResults");
