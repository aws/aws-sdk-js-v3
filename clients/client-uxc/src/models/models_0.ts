// smithy-typescript generated code
import { AccountColor } from "./enums";

/**
 * @public
 */
export interface GetAccountCustomizationsInput {}

/**
 * @public
 */
export interface GetAccountCustomizationsOutput {
  /**
   * <p>The account color preference. A value of <code>none</code> indicates that you have not set a color.</p>
   * @public
   */
  accountColor?: AccountColor | undefined;

  /**
   * <p>The list of Amazon Web Services service identifiers that are visible to the account in the Amazon Web Services Management Console. A value of <code>null</code> indicates that you have not configured this feature and all services are visible. For valid service identifiers, call <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/API_ListServices.html">ListServices</a>.</p>
   * @public
   */
  visibleServices?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Region codes that are visible to the account in the Amazon Web Services Management Console. A value of <code>null</code> indicates that you have not configured this feature and all Regions are visible. For a list of valid Region codes, see <a href="https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html">Amazon Web Services Regions</a>.</p>
   * @public
   */
  visibleRegions?: string[] | undefined;
}

/**
 * <p>Describes a validation exception for a specific field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name with the validation exception.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A message describing the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * <p>The token for retrieving the next page of results. Use the <code>nextToken</code> value from a previous response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * <p>The token for retrieving the next page of results. This value is <code>null</code> when no more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of available Amazon Web Services service identifiers.</p>
   * @public
   */
  services?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationsInput {
  /**
   * <p>The account color preference to set. Set to <code>none</code> to reset to the default (no color).</p>
   * @public
   */
  accountColor?: AccountColor | undefined;

  /**
   * <p>The list of Amazon Web Services service identifiers to make visible in the Amazon Web Services Management Console. Set to <code>null</code> to reset to the default, which makes all services visible. For valid service identifiers, call <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/API_ListServices.html">ListServices</a>.</p>
   * @public
   */
  visibleServices?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Region codes to make visible in the Amazon Web Services Management Console. Set to <code>null</code> to reset to the default, which makes all Regions visible. For a list of valid Region codes, see <a href="https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html">Amazon Web Services Regions</a>.</p>
   * @public
   */
  visibleRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationsOutput {
  /**
   * <p>The current account color preference after the update.</p>
   * @public
   */
  accountColor?: AccountColor | undefined;

  /**
   * <p>The current list of visible service identifiers after the update.</p>
   * @public
   */
  visibleServices?: string[] | undefined;

  /**
   * <p>The current list of visible Region codes after the update.</p>
   * @public
   */
  visibleRegions?: string[] | undefined;
}
