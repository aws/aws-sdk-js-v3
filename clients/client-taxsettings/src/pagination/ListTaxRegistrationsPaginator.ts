// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaxRegistrationsCommand,
  ListTaxRegistrationsCommandInput,
  ListTaxRegistrationsCommandOutput,
} from "../commands/ListTaxRegistrationsCommand";
import { TaxSettingsClient } from "../TaxSettingsClient";
import { TaxSettingsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaxRegistrations: (
  config: TaxSettingsPaginationConfiguration,
  input: ListTaxRegistrationsCommandInput,
  ...rest: any[]
) => Paginator<ListTaxRegistrationsCommandOutput> = createPaginator<
  TaxSettingsPaginationConfiguration,
  ListTaxRegistrationsCommandInput,
  ListTaxRegistrationsCommandOutput
>(TaxSettingsClient, ListTaxRegistrationsCommand, "nextToken", "nextToken", "maxResults");
