// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTFleetHubServiceException as __BaseException } from "./IoTFleetHubServiceException";

/**
 * @public
 * @enum
 */
export const ApplicationState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ApplicationState = (typeof ApplicationState)[keyof typeof ApplicationState];

/**
 * <p>A summary of information about a Fleet Hub for IoT Device Management web application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The unique Id of the web application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the web application.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>An optional description of the web application.</p>
   * @public
   */
  applicationDescription?: string | undefined;

  /**
   * <p>The URL of the web application.</p>
   * @public
   */
  applicationUrl: string | undefined;

  /**
   * <p>The date (in Unix epoch time) when the web application was created.</p>
   * @public
   */
  applicationCreationDate?: number | undefined;

  /**
   * <p>The date (in Unix epoch time) when the web application was last updated.</p>
   * @public
   */
  applicationLastUpdateDate?: number | undefined;

  /**
   * <p>The current state of the web application.</p>
   * @public
   */
  applicationState?: ApplicationState | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the web application.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>An optional description of the web application.</p>
   * @public
   */
  applicationDescription?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN of the role that the web application assumes when it interacts with Amazon Web Services IoT Core.</p>
   *          <note>
   *             <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i>
   *                </code>.</p>
   *          </note>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A set of key/value pairs that you can use to manage the web application resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The unique Id of the web application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ARN of the web application.</p>
   * @public
   */
  applicationArn: string | undefined;
}

/**
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request is not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>A limit has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The unique Id of the web application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * <p>The unique Id of the web application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * <p>The unique Id of the web application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ARN of the web application.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>The name of the web application.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>An optional description of the web application.</p>
   * @public
   */
  applicationDescription?: string | undefined;

  /**
   * <p>The URL of the web application.</p>
   * @public
   */
  applicationUrl: string | undefined;

  /**
   * <p>The current state of the web application.</p>
   * @public
   */
  applicationState: ApplicationState | undefined;

  /**
   * <p>The date (in Unix epoch time) when the application was created.</p>
   * @public
   */
  applicationCreationDate: number | undefined;

  /**
   * <p>The date (in Unix epoch time) when the application was last updated.</p>
   * @public
   */
  applicationLastUpdateDate: number | undefined;

  /**
   * <p>The ARN of the role that the web application assumes when it interacts with Amazon Web Services IoT Core.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Id of the single sign-on client that you use to authenticate and authorize users on the web application.</p>
   * @public
   */
  ssoClientId?: string | undefined;

  /**
   * <p>A message that explains any failures included in the <code>applicationState</code> response field. This message
   *     explains failures in the <code>CreateApplication</code> and <code>DeleteApplication</code> actions.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>A set of key/value pairs that you can use to manage the web application resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>A token used to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the web applications in the list.</p>
   * @public
   */
  applicationSummaries?: ApplicationSummary[] | undefined;

  /**
   * <p>A token used to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>The request conflicts with the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The unique Id of the web application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the web application.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>An optional description of the web application.</p>
   * @public
   */
  applicationDescription?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}
