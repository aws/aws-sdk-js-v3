// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListIdentitySourcesCommand,
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "../commands/ListIdentitySourcesCommand";
import { MPAClient } from "../MPAClient";
import { MPAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentitySources: (
  config: MPAPaginationConfiguration,
  input: ListIdentitySourcesCommandInput,
  ...rest: any[]
) => Paginator<ListIdentitySourcesCommandOutput> = createPaginator<
  MPAPaginationConfiguration,
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput
>(MPAClient, ListIdentitySourcesCommand, "NextToken", "NextToken", "MaxResults");
