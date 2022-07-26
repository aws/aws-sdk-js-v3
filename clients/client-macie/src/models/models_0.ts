// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MacieServiceException as __BaseException } from "./MacieServiceException";

/**
 * <p>(Discontinued) You do not have required permissions to access the requested resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * Resource type that caused the exception
   */
  resourceType?: string;

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
    this.resourceType = opts.resourceType;
  }
}

export interface AssociateMemberAccountRequest {
  /**
   * <p>(Discontinued) The ID of the Amazon Web Services account that you want to associate with Amazon Macie
   *       Classic as a member account.</p>
   */
  memberAccountId: string | undefined;
}

/**
 * <p>(Discontinued) Internal server error.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>(Discontinued) The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * Field that has invalid input
   */
  fieldName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.errorCode = opts.errorCode;
    this.fieldName = opts.fieldName;
  }
}

/**
 * <p>(Discontinued) The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account quotas. The error code describes the quota exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * Resource type that caused the exception
   */
  resourceType?: string;

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
    this.errorCode = opts.errorCode;
    this.resourceType = opts.resourceType;
  }
}

export enum S3ContinuousClassificationType {
  FULL = "FULL",
}

export enum S3OneTimeClassificationType {
  FULL = "FULL",
  NONE = "NONE",
}

/**
 * <p>(Discontinued) The classification type that Amazon Macie Classic applies to the
 *       associated S3 resources.</p>
 */
export interface ClassificationType {
  /**
   * <p>(Discontinued) A one-time classification of all of the existing objects in a specified
   *       S3 bucket. </p>
   */
  oneTime: S3OneTimeClassificationType | string | undefined;

  /**
   * <p>(Discontinued) A continuous classification of the objects that are added to a specified
   *       S3 bucket. Amazon Macie Classic begins performing continuous classification after a bucket is
   *       successfully associated with Macie Classic.</p>
   */
  continuous: S3ContinuousClassificationType | string | undefined;
}

/**
 * <p>(Discontinued) The S3 resources that you want to associate with Amazon Macie Classic
 *       for monitoring and data classification. This data type is used as a request parameter in the
 *       <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action. </p>
 */
export interface S3ResourceClassification {
  /**
   * <p>(Discontinued) The name of the S3 bucket that you want to associate with Amazon Macie
   *       Classic.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>(Discontinued) The prefix of the S3 bucket that you want to associate with Amazon Macie
   *       Classic.</p>
   */
  prefix?: string;

  /**
   * <p>(Discontinued) The classification type that you want to specify for the resource
   *       associated with Amazon Macie Classic. </p>
   */
  classificationType: ClassificationType | undefined;
}

export interface AssociateS3ResourcesRequest {
  /**
   * <p>(Discontinued) The ID of the Amazon Macie Classic member account whose resources you
   *       want to associate with Macie Classic.</p>
   */
  memberAccountId?: string;

  /**
   * <p>(Discontinued) The S3 resources that you want to associate with Amazon Macie Classic
   *       for monitoring and data classification.</p>
   */
  s3Resources: S3ResourceClassification[] | undefined;
}

/**
 * <p>(Discontinued) Contains information about the S3 resource. This data type is used as a
 *       request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response
 *       parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions. </p>
 */
export interface S3Resource {
  /**
   * <p>(Discontinued) The name of the S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>(Discontinued) The prefix of the S3 bucket.</p>
   */
  prefix?: string;
}

/**
 * <p>(Discontinued) Includes details about the failed S3 resources.</p>
 */
export interface FailedS3Resource {
  /**
   * <p>(Discontinued) The failed S3 resources.</p>
   */
  failedItem?: S3Resource;

  /**
   * <p>(Discontinued) The status code of a failed item.</p>
   */
  errorCode?: string;

  /**
   * <p>(Discontinued) The error message of a failed item.</p>
   */
  errorMessage?: string;
}

export interface AssociateS3ResourcesResult {
  /**
   * <p>(Discontinued) S3 resources that couldn't be associated with Amazon Macie Classic. An
   *       error code and an error message are provided for each failed item.</p>
   */
  failedS3Resources?: FailedS3Resource[];
}

/**
 * <p>(Discontinued) The classification type that Amazon Macie Classic applies to the
 *       associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must
 *       be specified. </p>
 */
export interface ClassificationTypeUpdate {
  /**
   * <p>(Discontinued) A one-time classification of all of the existing objects in a specified
   *       S3 bucket. </p>
   */
  oneTime?: S3OneTimeClassificationType | string;

  /**
   * <p>(Discontinued) A continuous classification of the objects that are added to a specified
   *       S3 bucket. Amazon Macie Classic begins performing continuous classification after a bucket is
   *       successfully associated with Macie Classic. </p>
   */
  continuous?: S3ContinuousClassificationType | string;
}

export interface DisassociateMemberAccountRequest {
  /**
   * <p>(Discontinued) The ID of the member account that you want to remove from Amazon Macie
   *       Classic.</p>
   */
  memberAccountId: string | undefined;
}

export interface DisassociateS3ResourcesRequest {
  /**
   * <p>(Discontinued) The ID of the Amazon Macie Classic member account whose resources you
   *       want to remove from being monitored by Macie Classic.</p>
   */
  memberAccountId?: string;

  /**
   * <p>(Discontinued) The S3 resources (buckets or prefixes) that you want to remove from
   *       being monitored and classified by Amazon Macie Classic.</p>
   */
  associatedS3Resources: S3Resource[] | undefined;
}

export interface DisassociateS3ResourcesResult {
  /**
   * <p>(Discontinued) S3 resources that couldn't be removed from being monitored and
   *       classified by Amazon Macie Classic. An error code and an error message are provided for each
   *       failed item. </p>
   */
  failedS3Resources?: FailedS3Resource[];
}

export interface ListMemberAccountsRequest {
  /**
   * <p>(Discontinued) Use this parameter when paginating results. Set the value of this
   *       parameter to null on your first call to the <code>ListMemberAccounts</code> action. Subsequent calls to the
   *       action fill <code>nextToken</code> in the request with the value of <code>nextToken</code> from the previous response to
   *       continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>(Discontinued) Use this parameter to indicate the maximum number of items that you want
   *       in the response. The default value is 250.</p>
   */
  maxResults?: number;
}

/**
 * <p>(Discontinued) Contains information about the Amazon Macie Classic member
 *       account.</p>
 */
export interface MemberAccount {
  /**
   * <p>(Discontinued) The Amazon Web Services account ID of the Amazon Macie Classic member account.</p>
   */
  accountId?: string;
}

export interface ListMemberAccountsResult {
  /**
   * <p>(Discontinued) A list of the Amazon Macie Classic member accounts returned by the
   *       action. The current Macie Classic administrator account is also included in this
   *       list.</p>
   */
  memberAccounts?: MemberAccount[];

  /**
   * <p>(Discontinued) When a response is generated, if there is more data to be listed, this
   *       parameter is present in the response and contains the value to use for the <code>nextToken</code> parameter
   *       in a subsequent pagination request. If there is no more data to be listed, this parameter is
   *       set to null. </p>
   */
  nextToken?: string;
}

export interface ListS3ResourcesRequest {
  /**
   * <p>(Discontinued) The Amazon Macie Classic member account ID whose associated S3 resources
   *       you want to list. </p>
   */
  memberAccountId?: string;

  /**
   * <p>(Discontinued) Use this parameter when paginating results. Set its value to null on
   *       your first call to the <code>ListS3Resources</code> action. Subsequent calls to the action fill <code>nextToken</code>
   *       in the request with the value of <code>nextToken</code> from the previous response to continue listing
   *       data. </p>
   */
  nextToken?: string;

  /**
   * <p>(Discontinued) Use this parameter to indicate the maximum number of items that you want
   *       in the response. The default value is 250. </p>
   */
  maxResults?: number;
}

export interface ListS3ResourcesResult {
  /**
   * <p>(Discontinued) A list of the associated S3 resources returned by the action.</p>
   */
  s3Resources?: S3ResourceClassification[];

  /**
   * <p>(Discontinued) When a response is generated, if there is more data to be listed, this
   *       parameter is present in the response and contains the value to use for the <code>nextToken</code> parameter
   *       in a subsequent pagination request. If there is no more data to be listed, this parameter is
   *       set to null. </p>
   */
  nextToken?: string;
}

/**
 * <p>(Discontinued) The S3 resources whose classification types you want to update. This
 *       data type is used as a request parameter in the <code>UpdateS3Resources</code> action. </p>
 */
export interface S3ResourceClassificationUpdate {
  /**
   * <p>(Discontinued) The name of the S3 bucket whose classification types you want to
   *       update.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>(Discontinued) The prefix of the S3 bucket whose classification types you want to
   *       update.</p>
   */
  prefix?: string;

  /**
   * <p>(Discontinued) The classification type that you want to update for the resource
   *       associated with Amazon Macie Classic. </p>
   */
  classificationTypeUpdate: ClassificationTypeUpdate | undefined;
}

export interface UpdateS3ResourcesRequest {
  /**
   * <p>(Discontinued) The Amazon Web Services account ID of the Amazon Macie Classic member account whose S3
   *       resources' classification types you want to update.</p>
   */
  memberAccountId?: string;

  /**
   * <p>(Discontinued) The S3 resources whose classification types you want to
   *       update.</p>
   */
  s3ResourcesUpdate: S3ResourceClassificationUpdate[] | undefined;
}

export interface UpdateS3ResourcesResult {
  /**
   * <p>(Discontinued) The S3 resources whose classification types can't be updated. An error
   *       code and an error message are provided for each failed item.</p>
   */
  failedS3Resources?: FailedS3Resource[];
}

/**
 * @internal
 */
export const AssociateMemberAccountRequestFilterSensitiveLog = (obj: AssociateMemberAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationTypeFilterSensitiveLog = (obj: ClassificationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ResourceClassificationFilterSensitiveLog = (obj: S3ResourceClassification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateS3ResourcesRequestFilterSensitiveLog = (obj: AssociateS3ResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ResourceFilterSensitiveLog = (obj: S3Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedS3ResourceFilterSensitiveLog = (obj: FailedS3Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateS3ResourcesResultFilterSensitiveLog = (obj: AssociateS3ResourcesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationTypeUpdateFilterSensitiveLog = (obj: ClassificationTypeUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMemberAccountRequestFilterSensitiveLog = (obj: DisassociateMemberAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateS3ResourcesRequestFilterSensitiveLog = (obj: DisassociateS3ResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateS3ResourcesResultFilterSensitiveLog = (obj: DisassociateS3ResourcesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMemberAccountsRequestFilterSensitiveLog = (obj: ListMemberAccountsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberAccountFilterSensitiveLog = (obj: MemberAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMemberAccountsResultFilterSensitiveLog = (obj: ListMemberAccountsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListS3ResourcesRequestFilterSensitiveLog = (obj: ListS3ResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListS3ResourcesResultFilterSensitiveLog = (obj: ListS3ResourcesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ResourceClassificationUpdateFilterSensitiveLog = (obj: S3ResourceClassificationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateS3ResourcesRequestFilterSensitiveLog = (obj: UpdateS3ResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateS3ResourcesResultFilterSensitiveLog = (obj: UpdateS3ResourcesResult): any => ({
  ...obj,
});
