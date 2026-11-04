// smithy-typescript generated code
import type { TargetType } from "./enums";

/**
 * The target parameter specifies the identifier to which the home region is applied, which is always an `ACCOUNT`. It applies the home region to the current `ACCOUNT`.
 *
 * @public
 */
export interface Target {
  /**
   * The target type is always an `ACCOUNT`.
   *
   * @public
   */
  Type: TargetType | undefined;

  /**
   * The `TargetID` is a 12-character identifier of the `ACCOUNT` for which the control was created. (This must be the current account.)
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface CreateHomeRegionControlRequest {
  /**
   * The name of the home region of the calling account.
   *
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * The account for which this command sets up a home region control. The `Target` is always of type `ACCOUNT`.
   *
   * @public
   */
  Target: Target | undefined;

  /**
   * Optional Boolean flag to indicate whether any effect should take place. It tests whether the caller has permission to make the call.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type `ACCOUNT`), an ID, and a time at which the home region was set.
 *
 * @public
 */
export interface HomeRegionControl {
  /**
   * A unique identifier that's generated for each home region control. It's always a string that begins with "hrc-" followed by 12 lowercase letters and numbers.
   *
   * @public
   */
  ControlId?: string | undefined;

  /**
   * The AWS Region that's been set as home region. For example, "us-west-2" or "eu-central-1" are valid home regions.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * The target parameter specifies the identifier to which the home region is applied, which is always an `ACCOUNT`. It applies the home region to the current `ACCOUNT`.
   *
   * @public
   */
  Target?: Target | undefined;

  /**
   * A timestamp representing the time when the customer called `CreateHomeregionControl` and set the home region for the account.
   *
   * @public
   */
  RequestedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateHomeRegionControlResult {
  /**
   * This object is the `HomeRegionControl` object that's returned by a successful call to `CreateHomeRegionControl`.
   *
   * @public
   */
  HomeRegionControl?: HomeRegionControl | undefined;
}

/**
 * @public
 */
export interface DeleteHomeRegionControlRequest {
  /**
   * A unique identifier that's generated for each home region control. It's always a string that begins with "hrc-" followed by 12 lowercase letters and numbers.
   *
   * @public
   */
  ControlId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHomeRegionControlResult {}

/**
 * @public
 */
export interface DescribeHomeRegionControlsRequest {
  /**
   * The `ControlID` is a unique identifier string of your `HomeRegionControl` object.
   *
   * @public
   */
  ControlId?: string | undefined;

  /**
   * The name of the home region you'd like to view.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * The target parameter specifies the identifier to which the home region is applied, which is always of type `ACCOUNT`. It applies the home region to the current `ACCOUNT`.
   *
   * @public
   */
  Target?: Target | undefined;

  /**
   * The maximum number of filtering results to display per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If a `NextToken` was returned by a previous call, more results are available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHomeRegionControlsResult {
  /**
   * An array that contains your `HomeRegionControl` objects.
   *
   * @public
   */
  HomeRegionControls?: HomeRegionControl[] | undefined;

  /**
   * If a `NextToken` was returned by a previous call, more results are available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetHomeRegionRequest {}

/**
 * @public
 */
export interface GetHomeRegionResult {
  /**
   * The name of the home region of the calling account.
   *
   * @public
   */
  HomeRegion?: string | undefined;
}
