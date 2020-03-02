import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

export interface CreateHomeRegionControlRequest {
  __type?: "CreateHomeRegionControlRequest";
  /**
   * <p>Optional Boolean flag to indicate whether any effect should take place. It tests whether
   *       the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the home region of the calling account.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>The account for which this command sets up a home region control. The <code>Target</code> is always of type <code>ACCOUNT</code>.</p>
   */
  Target: Target | undefined;
}

export namespace CreateHomeRegionControlRequest {
  export function isa(o: any): o is CreateHomeRegionControlRequest {
    return __isa(o, "CreateHomeRegionControlRequest");
  }
}

export interface CreateHomeRegionControlResult {
  __type?: "CreateHomeRegionControlResult";
  /**
   * <p>This object is the <code>HomeRegionControl</code> object that's returned by a successful call to
   *         <code>CreateHomeRegionControl</code>.</p>
   */
  HomeRegionControl?: HomeRegionControl;
}

export namespace CreateHomeRegionControlResult {
  export function isa(o: any): o is CreateHomeRegionControlResult {
    return __isa(o, "CreateHomeRegionControlResult");
  }
}

export interface DescribeHomeRegionControlsRequest {
  __type?: "DescribeHomeRegionControlsRequest";
  /**
   * <p>The <code>ControlID</code> is a unique identifier string of your <code>HomeRegionControl</code>
   *       object.</p>
   */
  ControlId?: string;

  /**
   * <p>The name of the home region you'd like to view.</p>
   */
  HomeRegion?: string;

  /**
   * <p>The maximum number of filtering results to display per page. </p>
   */
  MaxResults?: number;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, more results are available. To retrieve
   *       the next page of results, make the call again using the returned token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The target parameter specifies the identifier to which the home region is applied, which
   *       is always of type <code>ACCOUNT</code>. It applies the home region to the current
   *         <code>ACCOUNT</code>.</p>
   */
  Target?: Target;
}

export namespace DescribeHomeRegionControlsRequest {
  export function isa(o: any): o is DescribeHomeRegionControlsRequest {
    return __isa(o, "DescribeHomeRegionControlsRequest");
  }
}

export interface DescribeHomeRegionControlsResult {
  __type?: "DescribeHomeRegionControlsResult";
  /**
   * <p>An array that contains your <code>HomeRegionControl</code> objects.</p>
   */
  HomeRegionControls?: Array<HomeRegionControl>;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, more results are available.
   *       To retrieve the next page of results, make the call again using the returned token in
   *         <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeHomeRegionControlsResult {
  export function isa(o: any): o is DescribeHomeRegionControlsResult {
    return __isa(o, "DescribeHomeRegionControlsResult");
  }
}

/**
 * <p>Exception raised to indicate that authorization of an action was successful, when the
 *         <code>DryRun</code> flag is set to true.</p>
 */
export interface DryRunOperation extends __SmithyException, $MetadataBearer {
  name: "DryRunOperation";
  $fault: "client";
  Message?: string;
}

export namespace DryRunOperation {
  export function isa(o: any): o is DryRunOperation {
    return __isa(o, "DryRunOperation");
  }
}

export interface GetHomeRegionRequest {
  __type?: "GetHomeRegionRequest";
}

export namespace GetHomeRegionRequest {
  export function isa(o: any): o is GetHomeRegionRequest {
    return __isa(o, "GetHomeRegionRequest");
  }
}

export interface GetHomeRegionResult {
  __type?: "GetHomeRegionResult";
  /**
   * <p>The name of the home region of the calling account.</p>
   */
  HomeRegion?: string;
}

export namespace GetHomeRegionResult {
  export function isa(o: any): o is GetHomeRegionResult {
    return __isa(o, "GetHomeRegionResult");
  }
}

/**
 * <p>A home region control is an object that specifies the home region for an account, with
 *       some additional information. It contains a target (always of type <code>ACCOUNT</code>), an
 *       ID, and a time at which the home region was set.</p>
 */
export interface HomeRegionControl {
  __type?: "HomeRegionControl";
  /**
   * <p>A unique identifier that's generated for each home region control. It's always a string
   *       that begins with "hrc-" followed by 12 lowercase letters and numbers.</p>
   */
  ControlId?: string;

  /**
   * <p>The AWS Region that's been set as home region. For example, "us-west-2" or "eu-central-1"
   *       are valid home regions.</p>
   */
  HomeRegion?: string;

  /**
   * <p>A timestamp representing the time when the customer called
   *         <code>CreateHomeregionControl</code> and set the home region for the account.</p>
   */
  RequestedTime?: Date;

  /**
   * <p>The target parameter specifies the identifier to which the home region is applied, which
   *       is always an <code>ACCOUNT</code>. It applies the home region to the current
   *         <code>ACCOUNT</code>.</p>
   */
  Target?: Target;
}

export namespace HomeRegionControl {
  export function isa(o: any): o is HomeRegionControl {
    return __isa(o, "HomeRegionControl");
  }
}

/**
 * <p>Exception raised when an internal, configuration, or dependency error is
 *       encountered.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return __isa(o, "InternalServerError");
  }
}

/**
 * <p>Exception raised when the provided input violates a policy constraint or is entered in the
 *       wrong format or data type.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return __isa(o, "InvalidInputException");
  }
}

/**
 * <p>Exception raised when a request fails due to temporary unavailability of the service.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>The target parameter specifies the identifier to which the home region is applied, which
 *       is always an <code>ACCOUNT</code>. It applies the home region to the current
 *         <code>ACCOUNT</code>.</p>
 */
export interface Target {
  __type?: "Target";
  /**
   * <p>The <code>TargetID</code> is a 12-character identifier of the <code>ACCOUNT</code> for which the control was created. (This must be the current account.) </p>
   */
  Id?: string;

  /**
   * <p>The target type is always an <code>ACCOUNT</code>.</p>
   */
  Type: TargetType | string | undefined;
}

export namespace Target {
  export function isa(o: any): o is Target {
    return __isa(o, "Target");
  }
}

export enum TargetType {
  ACCOUNT = "ACCOUNT"
}
