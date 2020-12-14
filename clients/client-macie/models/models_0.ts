import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
  /**
   * Resource type that caused the exception
   */
  resourceType?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AssociateMemberAccountRequest {
  /**
   * <p>The ID of the AWS account that you want to associate with Amazon Macie Classic as a
   *       member account.</p>
   */
  memberAccountId: string | undefined;
}

export namespace AssociateMemberAccountRequest {
  export const filterSensitiveLog = (obj: AssociateMemberAccountRequest): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter. </p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * Error code for the exception
   */
  errorCode?: string;

  message?: string;
  /**
   * Field that has invalid input
   */
  fieldName?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limits. The error code describes the limit exceeded. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
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
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export enum S3ContinuousClassificationType {
  FULL = "FULL",
}

export enum S3OneTimeClassificationType {
  FULL = "FULL",
  NONE = "NONE",
}

/**
 * <p>The classification type that Amazon Macie Classic applies to the associated S3
 *       resources. </p>
 */
export interface ClassificationType {
  /**
   * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
   *     </p>
   */
  oneTime: S3OneTimeClassificationType | string | undefined;

  /**
   * <p>A continuous classification of the objects that are added to a specified S3 bucket.
   *       Amazon Macie Classic begins performing continuous classification after a bucket is
   *       successfully associated with Amazon Macie Classic. </p>
   */
  continuous: S3ContinuousClassificationType | string | undefined;
}

export namespace ClassificationType {
  export const filterSensitiveLog = (obj: ClassificationType): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 resources that you want to associate with Amazon Macie Classic for monitoring
 *       and data classification. This data type is used as a request parameter in the
 *       AssociateS3Resources action and a response parameter in the ListS3Resources action. </p>
 */
export interface S3ResourceClassification {
  /**
   * <p>The name of the S3 bucket that you want to associate with Amazon Macie
   *       Classic.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the S3 bucket that you want to associate with Amazon Macie
   *       Classic.</p>
   */
  prefix?: string;

  /**
   * <p>The classification type that you want to specify for the resource associated with
   *       Amazon Macie Classic. </p>
   */
  classificationType: ClassificationType | undefined;
}

export namespace S3ResourceClassification {
  export const filterSensitiveLog = (obj: S3ResourceClassification): any => ({
    ...obj,
  });
}

export interface AssociateS3ResourcesRequest {
  /**
   * <p>The ID of the Amazon Macie Classic member account whose resources you want to associate
   *       with Macie Classic. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources that you want to associate with Amazon Macie Classic for monitoring
   *       and data classification. </p>
   */
  s3Resources: S3ResourceClassification[] | undefined;
}

export namespace AssociateS3ResourcesRequest {
  export const filterSensitiveLog = (obj: AssociateS3ResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the S3 resource. This data type is used as a request
 *       parameter in the DisassociateS3Resources action and can be used as a response parameter in the
 *       AssociateS3Resources and UpdateS3Resources actions. </p>
 */
export interface S3Resource {
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
  export const filterSensitiveLog = (obj: S3Resource): any => ({
    ...obj,
  });
}

/**
 * <p>Includes details about the failed S3 resources.</p>
 */
export interface FailedS3Resource {
  /**
   * <p>The failed S3 resources.</p>
   */
  failedItem?: S3Resource;

  /**
   * <p>The status code of a failed item.</p>
   */
  errorCode?: string;

  /**
   * <p>The error message of a failed item.</p>
   */
  errorMessage?: string;
}

export namespace FailedS3Resource {
  export const filterSensitiveLog = (obj: FailedS3Resource): any => ({
    ...obj,
  });
}

export interface AssociateS3ResourcesResult {
  /**
   * <p>S3 resources that couldn't be associated with Amazon Macie Classic. An error code and
   *       an error message are provided for each failed item. </p>
   */
  failedS3Resources?: FailedS3Resource[];
}

export namespace AssociateS3ResourcesResult {
  export const filterSensitiveLog = (obj: AssociateS3ResourcesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The classification type that Amazon Macie Classic applies to the associated S3
 *       resources. At least one of the classification types (oneTime or continuous) must be specified.
 *     </p>
 */
export interface ClassificationTypeUpdate {
  /**
   * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
   *     </p>
   */
  oneTime?: S3OneTimeClassificationType | string;

  /**
   * <p>A continuous classification of the objects that are added to a specified S3 bucket.
   *       Amazon Macie Classic begins performing continuous classification after a bucket is
   *       successfully associated with Amazon Macie Classic. </p>
   */
  continuous?: S3ContinuousClassificationType | string;
}

export namespace ClassificationTypeUpdate {
  export const filterSensitiveLog = (obj: ClassificationTypeUpdate): any => ({
    ...obj,
  });
}

export interface DisassociateMemberAccountRequest {
  /**
   * <p>The ID of the member account that you want to remove from Amazon Macie
   *       Classic.</p>
   */
  memberAccountId: string | undefined;
}

export namespace DisassociateMemberAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateMemberAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateS3ResourcesRequest {
  /**
   * <p>The ID of the Amazon Macie Classic member account whose resources you want to remove
   *       from being monitored by Amazon Macie Classic. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources (buckets or prefixes) that you want to remove from being monitored and
   *       classified by Amazon Macie Classic. </p>
   */
  associatedS3Resources: S3Resource[] | undefined;
}

export namespace DisassociateS3ResourcesRequest {
  export const filterSensitiveLog = (obj: DisassociateS3ResourcesRequest): any => ({
    ...obj,
  });
}

export interface DisassociateS3ResourcesResult {
  /**
   * <p>S3 resources that couldn't be removed from being monitored and classified by Amazon
   *       Macie Classic. An error code and an error message are provided for each failed item.
   *     </p>
   */
  failedS3Resources?: FailedS3Resource[];
}

export namespace DisassociateS3ResourcesResult {
  export const filterSensitiveLog = (obj: DisassociateS3ResourcesResult): any => ({
    ...obj,
  });
}

export interface ListMemberAccountsRequest {
  /**
   * <p>Use this parameter when paginating results. Set the value of this parameter to null on
   *       your first call to the ListMemberAccounts action. Subsequent calls to the action fill
   *       nextToken in the request with the value of nextToken from the previous response to continue
   *       listing data. </p>
   */
  nextToken?: string;

  /**
   * <p>Use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 250. </p>
   */
  maxResults?: number;
}

export namespace ListMemberAccountsRequest {
  export const filterSensitiveLog = (obj: ListMemberAccountsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the Amazon Macie Classic member account.</p>
 */
export interface MemberAccount {
  /**
   * <p>The AWS account ID of the Amazon Macie Classic member account.</p>
   */
  accountId?: string;
}

export namespace MemberAccount {
  export const filterSensitiveLog = (obj: MemberAccount): any => ({
    ...obj,
  });
}

export interface ListMemberAccountsResult {
  /**
   * <p>A list of the Amazon Macie Classic member accounts returned by the action. The current
   *       master account is also included in this list. </p>
   */
  memberAccounts?: MemberAccount[];

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameter is
   *       present in the response and contains the value to use for the nextToken parameter in a
   *       subsequent pagination request. If there is no more data to be listed, this parameter is set to
   *       null. </p>
   */
  nextToken?: string;
}

export namespace ListMemberAccountsResult {
  export const filterSensitiveLog = (obj: ListMemberAccountsResult): any => ({
    ...obj,
  });
}

export interface ListS3ResourcesRequest {
  /**
   * <p>The Amazon Macie Classic member account ID whose associated S3 resources you want to
   *       list. </p>
   */
  memberAccountId?: string;

  /**
   * <p>Use this parameter when paginating results. Set its value to null on your first call to
   *       the ListS3Resources action. Subsequent calls to the action fill nextToken in the request with
   *       the value of nextToken from the previous response to continue listing data. </p>
   */
  nextToken?: string;

  /**
   * <p>Use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 250. </p>
   */
  maxResults?: number;
}

export namespace ListS3ResourcesRequest {
  export const filterSensitiveLog = (obj: ListS3ResourcesRequest): any => ({
    ...obj,
  });
}

export interface ListS3ResourcesResult {
  /**
   * <p>A list of the associated S3 resources returned by the action.</p>
   */
  s3Resources?: S3ResourceClassification[];

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameter is
   *       present in the response and contains the value to use for the nextToken parameter in a
   *       subsequent pagination request. If there is no more data to be listed, this parameter is set to
   *       null. </p>
   */
  nextToken?: string;
}

export namespace ListS3ResourcesResult {
  export const filterSensitiveLog = (obj: ListS3ResourcesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 resources whose classification types you want to update. This data type is used
 *       as a request parameter in the UpdateS3Resources action. </p>
 */
export interface S3ResourceClassificationUpdate {
  /**
   * <p>The name of the S3 bucket whose classification types you want to update.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the S3 bucket whose classification types you want to update.</p>
   */
  prefix?: string;

  /**
   * <p>The classification type that you want to update for the resource associated with Amazon
   *       Macie Classic. </p>
   */
  classificationTypeUpdate: ClassificationTypeUpdate | undefined;
}

export namespace S3ResourceClassificationUpdate {
  export const filterSensitiveLog = (obj: S3ResourceClassificationUpdate): any => ({
    ...obj,
  });
}

export interface UpdateS3ResourcesRequest {
  /**
   * <p>The AWS ID of the Amazon Macie Classic member account whose S3 resources'
   *       classification types you want to update. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources whose classification types you want to update.</p>
   */
  s3ResourcesUpdate: S3ResourceClassificationUpdate[] | undefined;
}

export namespace UpdateS3ResourcesRequest {
  export const filterSensitiveLog = (obj: UpdateS3ResourcesRequest): any => ({
    ...obj,
  });
}

export interface UpdateS3ResourcesResult {
  /**
   * <p>The S3 resources whose classification types can't be updated. An error code and an
   *       error message are provided for each failed item. </p>
   */
  failedS3Resources?: FailedS3Resource[];
}

export namespace UpdateS3ResourcesResult {
  export const filterSensitiveLog = (obj: UpdateS3ResourcesResult): any => ({
    ...obj,
  });
}
