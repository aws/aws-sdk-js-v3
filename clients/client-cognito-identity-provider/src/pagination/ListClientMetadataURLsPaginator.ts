// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListClientMetadataURLsCommand,
  ListClientMetadataURLsCommandInput,
  ListClientMetadataURLsCommandOutput,
} from "../commands/ListClientMetadataURLsCommand";
import type { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClientMetadataURLs: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListClientMetadataURLsCommandInput,
  ...rest: any[]
) => Paginator<ListClientMetadataURLsCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListClientMetadataURLsCommandInput,
  ListClientMetadataURLsCommandOutput
>(CognitoIdentityProviderClient, ListClientMetadataURLsCommand, "NextToken", "NextToken", "MaxResults");
