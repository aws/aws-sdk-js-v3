// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaxExemptionsCommand,
  ListTaxExemptionsCommandInput,
  ListTaxExemptionsCommandOutput,
} from "../commands/ListTaxExemptionsCommand";
import { TaxSettingsClient } from "../TaxSettingsClient";
import { TaxSettingsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaxExemptions: (
  config: TaxSettingsPaginationConfiguration,
  input: ListTaxExemptionsCommandInput,
  ...rest: any[]
) => Paginator<ListTaxExemptionsCommandOutput> = createPaginator<
  TaxSettingsPaginationConfiguration,
  ListTaxExemptionsCommandInput,
  ListTaxExemptionsCommandOutput
>(TaxSettingsClient, ListTaxExemptionsCommand, "nextToken", "nextToken", "maxResults");
