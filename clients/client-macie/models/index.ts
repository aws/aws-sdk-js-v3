import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
  /**
   * Resource type that caused the exception
   */
  resourceType?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

export interface AssociateMemberAccountRequest {
  __type?: "AssociateMemberAccountRequest";
  /**
   * <p>The ID of the AWS account that you want to associate with Amazon Macie as a member
   *       account.</p>
   */
  memberAccountId: string | undefined;
}

export namespace AssociateMemberAccountRequest {
  export function isa(o: any): o is AssociateMemberAccountRequest {
    return __isa(o, "AssociateMemberAccountRequest");
  }
}

export interface AssociateS3ResourcesRequest {
  __type?: "AssociateS3ResourcesRequest";
  /**
   * <p>The ID of the Amazon Macie member account whose resources you want to associate with
   *       Macie. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources that you want to associate with Amazon Macie for monitoring and data
   *       classification. </p>
   */
  s3Resources: Array<S3ResourceClassification> | undefined;
}

export namespace AssociateS3ResourcesRequest {
  export function isa(o: any): o is AssociateS3ResourcesRequest {
    return __isa(o, "AssociateS3ResourcesRequest");
  }
}

export interface AssociateS3ResourcesResult {
  __type?: "AssociateS3ResourcesResult";
  /**
   * <p>S3 resources that couldn't be associated with Amazon Macie. An error code and an error
   *       message are provided for each failed item. </p>
   */
  failedS3Resources?: Array<FailedS3Resource>;
}

export namespace AssociateS3ResourcesResult {
  export function isa(o: any): o is AssociateS3ResourcesResult {
    return __isa(o, "AssociateS3ResourcesResult");
  }
}

/**
 * <p>The classification type that Amazon Macie applies to the associated S3 resources.
 *     </p>
 */
export interface ClassificationType {
  __type?: "ClassificationType";
  /**
   * <p>A continuous classification of the objects that are added to a specified S3 bucket.
   *       Amazon Macie begins performing continuous classification after a bucket is successfully
   *       associated with Amazon Macie. </p>
   */
  continuous: S3ContinuousClassificationType | string | undefined;

  /**
   * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
   *     </p>
   */
  oneTime: S3OneTimeClassificationType | string | undefined;
}

export namespace ClassificationType {
  export function isa(o: any): o is ClassificationType {
    return __isa(o, "ClassificationType");
  }
}

/**
 * <p>The classification type that Amazon Macie applies to the associated S3 resources. At
 *       least one of the classification types (oneTime or continuous) must be specified. </p>
 */
export interface ClassificationTypeUpdate {
  __type?: "ClassificationTypeUpdate";
  /**
   * <p>A continuous classification of the objects that are added to a specified S3 bucket.
   *       Amazon Macie begins performing continuous classification after a bucket is successfully
   *       associated with Amazon Macie. </p>
   */
  continuous?: S3ContinuousClassificationType | string;

  /**
   * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
   *     </p>
   */
  oneTime?: S3OneTimeClassificationType | string;
}

export namespace ClassificationTypeUpdate {
  export function isa(o: any): o is ClassificationTypeUpdate {
    return __isa(o, "ClassificationTypeUpdate");
  }
}

export interface DisassociateMemberAccountRequest {
  __type?: "DisassociateMemberAccountRequest";
  /**
   * <p>The ID of the member account that you want to remove from Amazon Macie.</p>
   */
  memberAccountId: string | undefined;
}

export namespace DisassociateMemberAccountRequest {
  export function isa(o: any): o is DisassociateMemberAccountRequest {
    return __isa(o, "DisassociateMemberAccountRequest");
  }
}

export interface DisassociateS3ResourcesRequest {
  __type?: "DisassociateS3ResourcesRequest";
  /**
   * <p>The S3 resources (buckets or prefixes) that you want to remove from being monitored and
   *       classified by Amazon Macie. </p>
   */
  associatedS3Resources: Array<S3Resource> | undefined;

  /**
   * <p>The ID of the Amazon Macie member account whose resources you want to remove from being
   *       monitored by Amazon Macie. </p>
   */
  memberAccountId?: string;
}

export namespace DisassociateS3ResourcesRequest {
  export function isa(o: any): o is DisassociateS3ResourcesRequest {
    return __isa(o, "DisassociateS3ResourcesRequest");
  }
}

export interface DisassociateS3ResourcesResult {
  __type?: "DisassociateS3ResourcesResult";
  /**
   * <p>S3 resources that couldn't be removed from being monitored and classified by Amazon
   *       Macie. An error code and an error message are provided for each failed item. </p>
   */
  failedS3Resources?: Array<FailedS3Resource>;
}

export namespace DisassociateS3ResourcesResult {
  export function isa(o: any): o is DisassociateS3ResourcesResult {
    return __isa(o, "DisassociateS3ResourcesResult");
  }
}

/**
 * <p>Includes details about the failed S3 resources.</p>
 */
export interface FailedS3Resource {
  __type?: "FailedS3Resource";
  /**
   * <p>The status code of a failed item.</p>
   */
  errorCode?: string;

  /**
   * <p>The error message of a failed item.</p>
   */
  errorMessage?: string;

  /**
   * <p>The failed S3 resources.</p>
   */
  failedItem?: S3Resource;
}

export namespace FailedS3Resource {
  export function isa(o: any): o is FailedS3Resource {
    return __isa(o, "FailedS3Resource");
  }
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  message?: string;
}

export namespace InternalException {
  export function isa(o: any): o is InternalException {
    return __isa(o, "InternalException");
  }
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter. </p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * Field that has invalid input
   */
  fieldName?: string;

  message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return __isa(o, "InvalidInputException");
  }
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limits. The error code describes the limit exceeded. </p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  message?: string;
  /**
   * Resource type that caused the exception
   */
  resourceType?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListMemberAccountsRequest {
  __type?: "ListMemberAccountsRequest";
  /**
   * <p>Use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 250. </p>
   */
  maxResults?: number;

  /**
   * <p>Use this parameter when paginating results. Set the value of this parameter to null on
   *       your first call to the ListMemberAccounts action. Subsequent calls to the action fill
   *       nextToken in the request with the value of nextToken from the previous response to continue
   *       listing data. </p>
   */
  nextToken?: string;
}

export namespace ListMemberAccountsRequest {
  export function isa(o: any): o is ListMemberAccountsRequest {
    return __isa(o, "ListMemberAccountsRequest");
  }
}

export interface ListMemberAccountsResult {
  __type?: "ListMemberAccountsResult";
  /**
   * <p>A list of the Amazon Macie member accounts returned by the action. The current master
   *       account is also included in this list. </p>
   */
  memberAccounts?: Array<MemberAccount>;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameter is
   *       present in the response and contains the value to use for the nextToken parameter in a
   *       subsequent pagination request. If there is no more data to be listed, this parameter is set to
   *       null. </p>
   */
  nextToken?: string;
}

export namespace ListMemberAccountsResult {
  export function isa(o: any): o is ListMemberAccountsResult {
    return __isa(o, "ListMemberAccountsResult");
  }
}

export interface ListS3ResourcesRequest {
  __type?: "ListS3ResourcesRequest";
  /**
   * <p>Use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 250. </p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Macie member account ID whose associated S3 resources you want to list.
   *     </p>
   */
  memberAccountId?: string;

  /**
   * <p>Use this parameter when paginating results. Set its value to null on your first call to
   *       the ListS3Resources action. Subsequent calls to the action fill nextToken in the request with
   *       the value of nextToken from the previous response to continue listing data. </p>
   */
  nextToken?: string;
}

export namespace ListS3ResourcesRequest {
  export function isa(o: any): o is ListS3ResourcesRequest {
    return __isa(o, "ListS3ResourcesRequest");
  }
}

export interface ListS3ResourcesResult {
  __type?: "ListS3ResourcesResult";
  /**
   * <p>When a response is generated, if there is more data to be listed, this parameter is
   *       present in the response and contains the value to use for the nextToken parameter in a
   *       subsequent pagination request. If there is no more data to be listed, this parameter is set to
   *       null. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of the associated S3 resources returned by the action.</p>
   */
  s3Resources?: Array<S3ResourceClassification>;
}

export namespace ListS3ResourcesResult {
  export function isa(o: any): o is ListS3ResourcesResult {
    return __isa(o, "ListS3ResourcesResult");
  }
}

/**
 * <p>Contains information about the Amazon Macie member account.</p>
 */
export interface MemberAccount {
  __type?: "MemberAccount";
  /**
   * <p>The AWS account ID of the Amazon Macie member account.</p>
   */
  accountId?: string;
}

export namespace MemberAccount {
  export function isa(o: any): o is MemberAccount {
    return __isa(o, "MemberAccount");
  }
}

export enum S3ContinuousClassificationType {
  FULL = "FULL"
}

export enum S3OneTimeClassificationType {
  FULL = "FULL",
  NONE = "NONE"
}

/**
 * <p>Contains information about the S3 resource. This data type is used as a request
 *       parameter in the DisassociateS3Resources action and can be used as a response parameter in the
 *       AssociateS3Resources and UpdateS3Resources actions. </p>
 */
export interface S3Resource {
  __type?: "S3Resource";
  /**
   * <p>The name of the S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the S3 bucket. </p>
   */
  prefix?: string;
}

export namespace S3Resource {
  export function isa(o: any): o is S3Resource {
    return __isa(o, "S3Resource");
  }
}

/**
 * <p>The S3 resources that you want to associate with Amazon Macie for monitoring and data
 *       classification. This data type is used as a request parameter in the AssociateS3Resources
 *       action and a response parameter in the ListS3Resources action. </p>
 */
export interface S3ResourceClassification {
  __type?: "S3ResourceClassification";
  /**
   * <p>The name of the S3 bucket that you want to associate with Amazon Macie.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The classification type that you want to specify for the resource associated with
   *       Amazon Macie. </p>
   */
  classificationType: ClassificationType | undefined;

  /**
   * <p>The prefix of the S3 bucket that you want to associate with Amazon Macie.</p>
   */
  prefix?: string;
}

export namespace S3ResourceClassification {
  export function isa(o: any): o is S3ResourceClassification {
    return __isa(o, "S3ResourceClassification");
  }
}

/**
 * <p>The S3 resources whose classification types you want to update. This data type is used
 *       as a request parameter in the UpdateS3Resources action. </p>
 */
export interface S3ResourceClassificationUpdate {
  __type?: "S3ResourceClassificationUpdate";
  /**
   * <p>The name of the S3 bucket whose classification types you want to update.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The classification type that you want to update for the resource associated with Amazon
   *       Macie. </p>
   */
  classificationTypeUpdate: ClassificationTypeUpdate | undefined;

  /**
   * <p>The prefix of the S3 bucket whose classification types you want to update.</p>
   */
  prefix?: string;
}

export namespace S3ResourceClassificationUpdate {
  export function isa(o: any): o is S3ResourceClassificationUpdate {
    return __isa(o, "S3ResourceClassificationUpdate");
  }
}

export interface UpdateS3ResourcesRequest {
  __type?: "UpdateS3ResourcesRequest";
  /**
   * <p>The AWS ID of the Amazon Macie member account whose S3 resources' classification types
   *       you want to update. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources whose classification types you want to update.</p>
   */
  s3ResourcesUpdate: Array<S3ResourceClassificationUpdate> | undefined;
}

export namespace UpdateS3ResourcesRequest {
  export function isa(o: any): o is UpdateS3ResourcesRequest {
    return __isa(o, "UpdateS3ResourcesRequest");
  }
}

export interface UpdateS3ResourcesResult {
  __type?: "UpdateS3ResourcesResult";
  /**
   * <p>The S3 resources whose classification types can't be updated. An error code and an
   *       error message are provided for each failed item. </p>
   */
  failedS3Resources?: Array<FailedS3Resource>;
}

export namespace UpdateS3ResourcesResult {
  export function isa(o: any): o is UpdateS3ResourcesResult {
    return __isa(o, "UpdateS3ResourcesResult");
  }
}
