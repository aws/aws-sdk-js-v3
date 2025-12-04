// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSupplementalTaxRegistrationsCommand,
  ListSupplementalTaxRegistrationsCommandInput,
  ListSupplementalTaxRegistrationsCommandOutput,
} from "../commands/ListSupplementalTaxRegistrationsCommand";
import { TaxSettingsClient } from "../TaxSettingsClient";
import { TaxSettingsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSupplementalTaxRegistrations: (
  config: TaxSettingsPaginationConfiguration,
  input: ListSupplementalTaxRegistrationsCommandInput,
  ...rest: any[]
) => Paginator<ListSupplementalTaxRegistrationsCommandOutput> = createPaginator<
  TaxSettingsPaginationConfiguration,
  ListSupplementalTaxRegistrationsCommandInput,
  ListSupplementalTaxRegistrationsCommandOutput
>(TaxSettingsClient, ListSupplementalTaxRegistrationsCommand, "nextToken", "nextToken", "maxResults");
