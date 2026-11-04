// smithy-typescript generated code
import type { AccountColor } from "./enums";

/**
 * @public
 */
export interface GetAccountCustomizationsInput {}

/**
 * @public
 */
export interface GetAccountCustomizationsOutput {
  /**
   * The account color preference. A value of `none` indicates that you have not set a color.
   *
   * @public
   */
  accountColor?: AccountColor | undefined;

  /**
   * The list of Amazon Web Services service identifiers that are visible to the account in the Amazon Web Services Management Console. A value of `null` indicates that you have not configured this feature and all services are visible. For valid service identifiers, call [ListServices](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/API_ListServices.html).
   *
   * @public
   */
  visibleServices?: string[] | undefined;

  /**
   * The list of Amazon Web Services Region codes that are visible to the account in the Amazon Web Services Management Console. A value of `null` indicates that you have not configured this feature and all Regions are visible. For a list of valid Region codes, see [Amazon Web Services Regions](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html).
   *
   * @public
   */
  visibleRegions?: string[] | undefined;
}

/**
 * Describes a validation exception for a specific field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name with the validation exception.
   *
   * @public
   */
  path: string | undefined;

  /**
   * A message describing the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * The token for retrieving the next page of results. Use the `nextToken` value from a previous response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * The token for retrieving the next page of results. This value is `null` when no more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of available Amazon Web Services service identifiers.
   *
   * @public
   */
  services?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationsInput {
  /**
   * The account color preference to set. Set to `none` to reset to the default (no color).
   *
   * @public
   */
  accountColor?: AccountColor | undefined;

  /**
   * The list of Amazon Web Services service identifiers to make visible in the Amazon Web Services Management Console. Set to `null` to reset to the default, which makes all services visible. For valid service identifiers, call [ListServices](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/API_ListServices.html).
   *
   * @public
   */
  visibleServices?: string[] | undefined;

  /**
   * The list of Amazon Web Services Region codes to make visible in the Amazon Web Services Management Console. Set to `null` to reset to the default, which makes all Regions visible. For a list of valid Region codes, see [Amazon Web Services Regions](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html).
   *
   * @public
   */
  visibleRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationsOutput {
  /**
   * The current account color preference after the update.
   *
   * @public
   */
  accountColor?: AccountColor | undefined;

  /**
   * The current list of visible service identifiers after the update.
   *
   * @public
   */
  visibleServices?: string[] | undefined;

  /**
   * The current list of visible Region codes after the update.
   *
   * @public
   */
  visibleRegions?: string[] | undefined;
}
