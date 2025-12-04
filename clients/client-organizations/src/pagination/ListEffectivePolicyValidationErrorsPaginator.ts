// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEffectivePolicyValidationErrorsCommand,
  ListEffectivePolicyValidationErrorsCommandInput,
  ListEffectivePolicyValidationErrorsCommandOutput,
} from "../commands/ListEffectivePolicyValidationErrorsCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEffectivePolicyValidationErrors: (
  config: OrganizationsPaginationConfiguration,
  input: ListEffectivePolicyValidationErrorsCommandInput,
  ...rest: any[]
) => Paginator<ListEffectivePolicyValidationErrorsCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListEffectivePolicyValidationErrorsCommandInput,
  ListEffectivePolicyValidationErrorsCommandOutput
>(OrganizationsClient, ListEffectivePolicyValidationErrorsCommand, "NextToken", "NextToken", "MaxResults");
