// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListTableMetadataCommand,
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
} from "../commands/ListTableMetadataCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableMetadata: (
  config: AthenaPaginationConfiguration,
  input: ListTableMetadataCommandInput,
  ...rest: any[]
) => Paginator<ListTableMetadataCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput
>(AthenaClient, ListTableMetadataCommand, "NextToken", "NextToken", "MaxResults");
