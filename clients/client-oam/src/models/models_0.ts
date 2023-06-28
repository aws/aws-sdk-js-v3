// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OAMServiceException as __BaseException } from "./OAMServiceException";

/**
 * @public
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The name of the exception.</p>
   */
  amznErrorType?: string;
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
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_CLOUDWATCH_METRIC: "AWS::CloudWatch::Metric",
  AWS_LOGS_LOGGROUP: "AWS::Logs::LogGroup",
  AWS_XRAY_TRACE: "AWS::XRay::Trace",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface CreateLinkInput {
  /**
   * <p>Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring
   *             account.</p>
   *         <p>You can use a custom label or use the following variables:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>$AccountName</code> is the name of the account</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>$AccountEmail</code> is the globally unique email address of the account</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>$AccountEmailNoDomain</code> is the email address of the account without the domain name</p>
   *             </li>
   *          </ul>
   */
  LabelTemplate: string | undefined;

  /**
   * <p>An array of strings that define which types of data that the source account shares with the monitoring
   *             account.</p>
   */
  ResourceTypes: (ResourceType | string)[] | undefined;

  /**
   * <p>The ARN of the sink to use to create this link. You can use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a> to find the ARNs of sinks.</p>
   *         <p>For more information about sinks, see
   *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a>.</p>
   */
  SinkIdentifier: string | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the link. </p>
   *         <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *             permissions by granting a user
   *             permission to access or change only resources with certain tag values.</p>
   *         <p>For more information about using tags to control access, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateLinkOutput {
  /**
   * <p>The ARN of the link that is newly created.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the link ARN.</p>
   */
  Id?: string;

  /**
   * <p>The label that you assigned to this link. If the <code>labelTemplate</code> includes variables,
   *             this field displays the variables resolved to their actual values.</p>
   */
  Label?: string;

  /**
   * <p>The exact label template that you specified, with the variables not resolved.</p>
   */
  LabelTemplate?: string;

  /**
   * <p>The resource types supported by this link.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The ARN of the sink that is used for this link.</p>
   */
  SinkArn?: string;

  /**
   * <p>The tags assigned to the link.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Unexpected error while processing the request. Retry the request.</p>
 */
export class InternalServiceFault extends __BaseException {
  readonly name: "InternalServiceFault" = "InternalServiceFault";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * <p>The name of the exception.</p>
   */
  amznErrorType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceFault, __BaseException>) {
    super({
      name: "InternalServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceFault.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 * <p>A parameter is specified incorrectly.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the exception.</p>
   */
  amznErrorType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 * <p>A required parameter is missing from the request.</p>
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name: "MissingRequiredParameterException" = "MissingRequiredParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the exception.</p>
   */
  amznErrorType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The name of the exception.</p>
   */
  amznErrorType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 */
export interface CreateSinkInput {
  /**
   * <p>A name for the sink.</p>
   */
  Name: string | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the link. </p>
   *         <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *             permissions by granting a user
   *             permission to access or change only resources with certain tag values.</p>
   *         <p>For more information about using tags to control access, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSinkOutput {
  /**
   * <p>The ARN of the sink that is newly created.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the sink ARN.</p>
   */
  Id?: string;

  /**
   * <p>The name of the sink.</p>
   */
  Name?: string;

  /**
   * <p>The tags assigned to the sink.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteLinkInput {
  /**
   * <p>The ARN of the link to delete.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkOutput {}

/**
 * @public
 * <p>The request references a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The name of the exception.</p>
   */
  amznErrorType?: string;
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
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 */
export interface DeleteSinkInput {
  /**
   * <p>The ARN of the sink to delete.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSinkOutput {}

/**
 * @public
 */
export interface GetLinkInput {
  /**
   * <p>The ARN of the link to retrieve information for.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetLinkOutput {
  /**
   * <p>The ARN of the link.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the link ARN.</p>
   */
  Id?: string;

  /**
   * <p>The label that you assigned to this link, with the variables resolved to their actual values.</p>
   */
  Label?: string;

  /**
   * <p>The exact label template that was specified when the link was created, with the template variables not resolved.</p>
   */
  LabelTemplate?: string;

  /**
   * <p>The resource types supported by this link.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The ARN of the sink that is used for this link.</p>
   */
  SinkArn?: string;

  /**
   * <p>The tags assigned to the link.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSinkInput {
  /**
   * <p>The ARN of the sink to retrieve information for.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSinkOutput {
  /**
   * <p>The ARN of the sink.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the sink ARN.</p>
   */
  Id?: string;

  /**
   * <p>The name of the sink.</p>
   */
  Name?: string;

  /**
   * <p>The tags assigned to the sink.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSinkPolicyInput {
  /**
   * <p>The ARN of the sink to retrieve the policy of.</p>
   */
  SinkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSinkPolicyOutput {
  /**
   * <p>The ARN of the sink.</p>
   */
  SinkArn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the sink ARN.</p>
   */
  SinkId?: string;

  /**
   * <p>The policy that you specified, in JSON format.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface ListAttachedLinksInput {
  /**
   * <p>Limits the number of returned links to the specified number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. You received this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the sink that you want to retrieve links for.</p>
   */
  SinkIdentifier: string | undefined;
}

/**
 * @public
 * <p>A structure that contains information about one link attached to this monitoring
 *             account sink.</p>
 */
export interface ListAttachedLinksItem {
  /**
   * <p>The label that was assigned to this link at creation, with the variables resolved to their actual values.</p>
   */
  Label?: string;

  /**
   * <p>The ARN of the link.</p>
   */
  LinkArn?: string;

  /**
   * <p>The resource types supported by this link.</p>
   */
  ResourceTypes?: string[];
}

/**
 * @public
 */
export interface ListAttachedLinksOutput {
  /**
   * <p>An array of structures that contain the information about the attached links.</p>
   */
  Items: ListAttachedLinksItem[] | undefined;

  /**
   * <p>The token to use when requesting the next set of links.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLinksInput {
  /**
   * <p>Limits the number of returned links to the specified number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. You received this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that contains information about one of this source account's links to a monitoring account.</p>
 */
export interface ListLinksItem {
  /**
   * <p>The ARN of the link.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the link ARN.</p>
   */
  Id?: string;

  /**
   * <p>The label that was assigned to this link at creation, with the variables resolved to their actual values.</p>
   */
  Label?: string;

  /**
   * <p>The resource types supported by this link.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The ARN of the sink that this link is attached to.</p>
   */
  SinkArn?: string;
}

/**
 * @public
 */
export interface ListLinksOutput {
  /**
   * <p>An array of structures that contain the information about the returned links.</p>
   */
  Items: ListLinksItem[] | undefined;

  /**
   * <p>The token to use when requesting the next set of links.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSinksInput {
  /**
   * <p>Limits the number of returned links to the specified number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. You received this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that contains information about one of this monitoring account's sinks.</p>
 */
export interface ListSinksItem {
  /**
   * <p>The ARN of the sink.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the sink ARN.</p>
   */
  Id?: string;

  /**
   * <p>The name of the sink.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListSinksOutput {
  /**
   * <p>An array of structures that contain the information about the returned sinks.</p>
   */
  Items: ListSinksItem[] | undefined;

  /**
   * <p>The token to use when requesting the next set of sinks.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the  resource that you want to view tags for.</p>
   *         <p>The ARN format of a sink is
   *             <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:sink/<i>sink-id</i>
   *             </code>
   *          </p>
   *         <p>The ARN format of a link is
   *             <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:link/<i>link-id</i>
   *             </code>
   *          </p>
   *         <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *             resources and operations</a>.</p>
   *         <important>
   *             <p>Unlike tagging permissions in other Amazon Web Services services, to retrieve the list of tags
   *             for links or sinks you must have the <code>oam:RequestTag</code> permission. The
   *             <code>aws:ReguestTag</code> permission does not allow you to tag and untag links and
   *             sinks.</p>
   *          </important>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with the requested resource.&gt;</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The value of a parameter in the request caused an error.</p>
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
export interface PutSinkPolicyInput {
  /**
   * <p>The ARN of the sink to attach this policy to.</p>
   */
  SinkIdentifier: string | undefined;

  /**
   * <p>The JSON policy to use. If you are updating an existing policy, the entire existing policy is
   *             replaced by what you specify here.</p>
   *         <p>The policy must be in JSON string format with quotation marks escaped and no newlines.</p>
   *         <p>For examples of different types of policies, see the <b>Examples</b> section on this page.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutSinkPolicyOutput {
  /**
   * <p>The ARN of the sink.</p>
   */
  SinkArn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the sink ARN.</p>
   */
  SinkId?: string;

  /**
   * <p>The policy that you specified.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the  resource that you're adding tags to.</p>
   *         <p>The ARN format of a sink is
   *             <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:sink/<i>sink-id</i>
   *             </code>
   *          </p>
   *         <p>The ARN format of a link is
   *             <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:link/<i>link-id</i>
   *             </code>
   *          </p>
   *         <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *             resources and operations</a>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 * <p>A resource can have no more than 50 tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource that you're removing tags from.</p>
   *         <p>The ARN format of a sink is
   *             <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:sink/<i>sink-id</i>
   *             </code>
   *          </p>
   *         <p>The ARN format of a link is
   *             <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:link/<i>link-id</i>
   *             </code>
   *          </p>
   *         <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *             resources and operations</a>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateLinkInput {
  /**
   * <p>The ARN of the link that you want to update.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>An array of strings that define which types of data that the source account will send to the monitoring
   *             account.</p>
   *         <p>Your input here replaces the current set of data types that are shared.</p>
   */
  ResourceTypes: (ResourceType | string)[] | undefined;
}

/**
 * @public
 */
export interface UpdateLinkOutput {
  /**
   * <p>The ARN of the link that you have updated.</p>
   */
  Arn?: string;

  /**
   * <p>The random ID string that Amazon Web Services generated as part of the sink ARN.</p>
   */
  Id?: string;

  /**
   * <p>The label assigned to this link, with the variables resolved to their actual values.</p>
   */
  Label?: string;

  /**
   * <p>The exact label template that was specified when the link was created, with the template variables not resolved.</p>
   */
  LabelTemplate?: string;

  /**
   * <p>The resource types now supported by this link.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The ARN of the sink that is used for this link.</p>
   */
  SinkArn?: string;

  /**
   * <p>The tags assigned to the link.</p>
   */
  Tags?: Record<string, string>;
}
