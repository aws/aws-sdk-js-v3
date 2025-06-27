// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListObjectTypeAttributesCommand,
  ListObjectTypeAttributesCommandInput,
  ListObjectTypeAttributesCommandOutput,
} from "../commands/ListObjectTypeAttributesCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectTypeAttributes: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListObjectTypeAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListObjectTypeAttributesCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListObjectTypeAttributesCommandInput,
  ListObjectTypeAttributesCommandOutput
>(CustomerProfilesClient, ListObjectTypeAttributesCommand, "NextToken", "NextToken", "MaxResults");
