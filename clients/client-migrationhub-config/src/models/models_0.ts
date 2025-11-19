// smithy-typescript generated code
import { TargetType } from "./enums";

/**
 * <p>The target parameter specifies the identifier to which the home region is applied, which
 *       is always an <code>ACCOUNT</code>. It applies the home region to the current
 *         <code>ACCOUNT</code>.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The target type is always an <code>ACCOUNT</code>.</p>
   * @public
   */
  Type: TargetType | undefined;

  /**
   * <p>The <code>TargetID</code> is a 12-character identifier of the <code>ACCOUNT</code> for
   *       which the control was created. (This must be the current account.) </p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface CreateHomeRegionControlRequest {
  /**
   * <p>The name of the home region of the calling account.</p>
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * <p>The account for which this command sets up a home region control. The <code>Target</code>
   *       is always of type <code>ACCOUNT</code>.</p>
   * @public
   */
  Target: Target | undefined;

  /**
   * <p>Optional Boolean flag to indicate whether any effect should take place. It tests whether
   *       the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>A home region control is an object that specifies the home region for an account, with
 *       some additional information. It contains a target (always of type <code>ACCOUNT</code>), an
 *       ID, and a time at which the home region was set.</p>
 * @public
 */
export interface HomeRegionControl {
  /**
   * <p>A unique identifier that's generated for each home region control. It's always a string
   *       that begins with "hrc-" followed by 12 lowercase letters and numbers.</p>
   * @public
   */
  ControlId?: string | undefined;

  /**
   * <p>The AWS Region that's been set as home region. For example, "us-west-2" or "eu-central-1"
   *       are valid home regions.</p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p>The target parameter specifies the identifier to which the home region is applied, which
   *       is always an <code>ACCOUNT</code>. It applies the home region to the current
   *         <code>ACCOUNT</code>.</p>
   * @public
   */
  Target?: Target | undefined;

  /**
   * <p>A timestamp representing the time when the customer called
   *         <code>CreateHomeregionControl</code> and set the home region for the account.</p>
   * @public
   */
  RequestedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateHomeRegionControlResult {
  /**
   * <p>This object is the <code>HomeRegionControl</code> object that's returned by a successful
   *       call to <code>CreateHomeRegionControl</code>.</p>
   * @public
   */
  HomeRegionControl?: HomeRegionControl | undefined;
}

/**
 * @public
 */
export interface DeleteHomeRegionControlRequest {
  /**
   * <p>A unique identifier that's generated for each home region control. It's always a string
   *       that begins with "hrc-" followed by 12 lowercase letters and numbers.</p>
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
   * <p>The <code>ControlID</code> is a unique identifier string of your
   *         <code>HomeRegionControl</code> object.</p>
   * @public
   */
  ControlId?: string | undefined;

  /**
   * <p>The name of the home region you'd like to view.</p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p>The target parameter specifies the identifier to which the home region is applied, which
   *       is always of type <code>ACCOUNT</code>. It applies the home region to the current
   *         <code>ACCOUNT</code>.</p>
   * @public
   */
  Target?: Target | undefined;

  /**
   * <p>The maximum number of filtering results to display per page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, more results are available.
   *       To retrieve the next page of results, make the call again using the returned token in
   *         <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHomeRegionControlsResult {
  /**
   * <p>An array that contains your <code>HomeRegionControl</code> objects.</p>
   * @public
   */
  HomeRegionControls?: HomeRegionControl[] | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, more results are available.
   *       To retrieve the next page of results, make the call again using the returned token in
   *         <code>NextToken</code>.</p>
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
   * <p>The name of the home region of the calling account.</p>
   * @public
   */
  HomeRegion?: string | undefined;
}
