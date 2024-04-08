// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ControlCatalogServiceException as __BaseException } from "./ControlCatalogServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A summary of the domain that a common control or an objective belongs to.</p>
 * @public
 */
export interface AssociatedDomainSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the related domain.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the related domain.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>A summary of the objective that a common control supports.</p>
 * @public
 */
export interface AssociatedObjectiveSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the related objective.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the related objective.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>The objective resource that's being used as a filter.</p>
 * @public
 */
export interface ObjectiveResourceFilter {
  /**
   * <p>The Amazon Resource Name (ARN) of the objective.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>An optional filter that narrows the results to a specific objective.</p>
 * @public
 */
export interface CommonControlFilter {
  /**
   * <p>The objective that's used as filter criteria.</p>
   *          <p>You can use this parameter to specify one objective ARN at a time. Passing multiple ARNs
   *       in the <code>CommonControlFilter</code> isn’t currently supported.</p>
   * @public
   */
  Objectives?: ObjectiveResourceFilter[];
}

/**
 * <p>An internal service error occurred during the processing of your request. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListCommonControlsRequest {
  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>An optional filter that narrows the results to a specific objective.</p>
   *          <p>This filter allows you to specify one objective ARN at a time. Passing multiple ARNs in
   *       the <code>CommonControlFilter</code> isn’t currently supported.</p>
   * @public
   */
  CommonControlFilter?: CommonControlFilter;
}

/**
 * <p>A summary of metadata for a common control.</p>
 * @public
 */
export interface CommonControlSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the common control.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the common control.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the common control.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The domain that the common control belongs to.</p>
   * @public
   */
  Domain: AssociatedDomainSummary | undefined;

  /**
   * <p>The objective that the common control belongs to.</p>
   * @public
   */
  Objective: AssociatedObjectiveSummary | undefined;

  /**
   * <p>The time when the common control was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The time when the common control was most recently updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCommonControlsResponse {
  /**
   * <p>The list of common controls that the <code>ListCommonControls</code> API returns.</p>
   * @public
   */
  CommonControls: CommonControlSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request has invalid or missing parameters.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A summary of metadata for a domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the domain.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the domain.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the domain.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The time when the domain was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The time when the domain was most recently updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>The list of domains that the <code>ListDomains</code> API returns.</p>
   * @public
   */
  Domains: DomainSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The domain resource that's being used as a filter.</p>
 * @public
 */
export interface DomainResourceFilter {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>An optional filter that narrows the list of objectives to a specific domain.</p>
 * @public
 */
export interface ObjectiveFilter {
  /**
   * <p>The domain that's used as filter criteria.</p>
   *          <p>You can use this parameter to specify one domain ARN at a time. Passing multiple ARNs in
   *       the <code>ObjectiveFilter</code> isn’t currently supported.</p>
   * @public
   */
  Domains?: DomainResourceFilter[];
}

/**
 * @public
 */
export interface ListObjectivesRequest {
  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>An optional filter that narrows the results to a specific domain.</p>
   *          <p>This filter allows you to specify one domain ARN at a time.
   *       Passing multiple ARNs in the <code>ObjectiveFilter</code> isn’t currently supported.</p>
   * @public
   */
  ObjectiveFilter?: ObjectiveFilter;
}

/**
 * <p>A summary of metadata for an objective.</p>
 * @public
 */
export interface ObjectiveSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the objective.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the objective.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the objective.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The domain that the objective belongs to.</p>
   * @public
   */
  Domain: AssociatedDomainSummary | undefined;

  /**
   * <p>The time when the objective was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The time when the objective was most recently updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListObjectivesResponse {
  /**
   * <p>The list of objectives that the <code>ListObjectives</code> API returns.</p>
   * @public
   */
  Objectives: ObjectiveSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string;
}
