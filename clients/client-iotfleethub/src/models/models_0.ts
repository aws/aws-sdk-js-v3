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
 * @public
 * <p>A summary of information about a AWS IoT Device Management web application.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 */
export interface ApplicationSummary {
  /**
   * @public
   * <p>The unique Id of the web application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The name of the web application.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>An optional description of the web application.</p>
   */
  applicationDescription?: string;

  /**
   * @public
   * <p>The URL of the web application.</p>
   */
  applicationUrl: string | undefined;

  /**
   * @public
   * <p>The date (in Unix epoch time) when the web application was created.</p>
   */
  applicationCreationDate?: number;

  /**
   * @public
   * <p>The date (in Unix epoch time) when the web application was last updated.</p>
   */
  applicationLastUpdateDate?: number;

  /**
   * @public
   * <p>The current state of the web application.</p>
   */
  applicationState?: ApplicationState;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The name of the web application.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>An optional description of the web application.</p>
   */
  applicationDescription?: string;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p>
   *          <note>
   *             <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i>
   *                </code>.</p>
   *          </note>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A set of key/value pairs that you can use to manage the web application resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>The unique Id of the web application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The ARN of the web application.</p>
   */
  applicationArn: string | undefined;
}

/**
 * @public
 * <p>An unexpected error has occurred.</p>
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
 * @public
 * <p>The request is not valid.</p>
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
 * @public
 * <p>A limit has been exceeded.</p>
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
 * @public
 * <p>The rate exceeds the limit.</p>
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
   * @public
   * <p>The unique Id of the web application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 * <p>The specified resource does not exist.</p>
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
   * @public
   * <p>The unique Id of the web application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * @public
   * <p>The unique Id of the web application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The ARN of the web application.</p>
   */
  applicationArn: string | undefined;

  /**
   * @public
   * <p>The name of the web application.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>An optional description of the web application.</p>
   */
  applicationDescription?: string;

  /**
   * @public
   * <p>The URL of the web application.</p>
   */
  applicationUrl: string | undefined;

  /**
   * @public
   * <p>The current state of the web application.</p>
   */
  applicationState: ApplicationState | undefined;

  /**
   * @public
   * <p>The date (in Unix epoch time) when the application was created.</p>
   */
  applicationCreationDate: number | undefined;

  /**
   * @public
   * <p>The date (in Unix epoch time) when the application was last updated.</p>
   */
  applicationLastUpdateDate: number | undefined;

  /**
   * @public
   * <p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The Id of the single sign-on client that you use to authenticate and authorize users on the web application.</p>
   */
  ssoClientId?: string;

  /**
   * @public
   * <p>A message indicating why the <code>DescribeApplication</code> API failed.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>A set of key/value pairs that you can use to manage the web application resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>An array of objects that provide summaries of information about the web applications in the list.</p>
   */
  applicationSummaries?: ApplicationSummary[];

  /**
   * @public
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The new or modified tags for the resource.</p>
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
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>The request conflicts with the current state of the resource.</p>
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
   * @public
   * <p>The unique Id of the web application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The name of the web application.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>An optional description of the web application.</p>
   */
  applicationDescription?: string;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}
