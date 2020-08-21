import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * Resource type that caused the exception
   */
  resourceType?: string;

  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export interface AssociateMemberAccountRequest {
  __type?: "AssociateMemberAccountRequest";
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
  export const isa = (o: any): o is AssociateMemberAccountRequest => __isa(o, "AssociateMemberAccountRequest");
}

export interface AssociateS3ResourcesRequest {
  __type?: "AssociateS3ResourcesRequest";
  /**
   * <p>The S3 resources that you want to associate with Amazon Macie Classic for monitoring
   *       and data classification. </p>
   */
  s3Resources: S3ResourceClassification[] | undefined;

  /**
   * <p>The ID of the Amazon Macie Classic member account whose resources you want to associate
   *       with Macie Classic. </p>
   */
  memberAccountId?: string;
}

export namespace AssociateS3ResourcesRequest {
  export const filterSensitiveLog = (obj: AssociateS3ResourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateS3ResourcesRequest => __isa(o, "AssociateS3ResourcesRequest");
}

export interface AssociateS3ResourcesResult {
  __type?: "AssociateS3ResourcesResult";
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
  export const isa = (o: any): o is AssociateS3ResourcesResult => __isa(o, "AssociateS3ResourcesResult");
}

/**
 * <p>The classification type that Amazon Macie Classic applies to the associated S3
 *       resources. </p>
 */
export interface ClassificationType {
  __type?: "ClassificationType";
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
  export const isa = (o: any): o is ClassificationType => __isa(o, "ClassificationType");
}

/**
 * <p>The classification type that Amazon Macie Classic applies to the associated S3
 *       resources. At least one of the classification types (oneTime or continuous) must be specified.
 *     </p>
 */
export interface ClassificationTypeUpdate {
  __type?: "ClassificationTypeUpdate";
  /**
   * <p>A continuous classification of the objects that are added to a specified S3 bucket.
   *       Amazon Macie Classic begins performing continuous classification after a bucket is
   *       successfully associated with Amazon Macie Classic. </p>
   */
  continuous?: S3ContinuousClassificationType | string;

  /**
   * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
   *     </p>
   */
  oneTime?: S3OneTimeClassificationType | string;
}

export namespace ClassificationTypeUpdate {
  export const filterSensitiveLog = (obj: ClassificationTypeUpdate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClassificationTypeUpdate => __isa(o, "ClassificationTypeUpdate");
}

export interface DisassociateMemberAccountRequest {
  __type?: "DisassociateMemberAccountRequest";
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
  export const isa = (o: any): o is DisassociateMemberAccountRequest => __isa(o, "DisassociateMemberAccountRequest");
}

export interface DisassociateS3ResourcesRequest {
  __type?: "DisassociateS3ResourcesRequest";
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
  export const isa = (o: any): o is DisassociateS3ResourcesRequest => __isa(o, "DisassociateS3ResourcesRequest");
}

export interface DisassociateS3ResourcesResult {
  __type?: "DisassociateS3ResourcesResult";
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
  export const isa = (o: any): o is DisassociateS3ResourcesResult => __isa(o, "DisassociateS3ResourcesResult");
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
   * <p>The failed S3 resources.</p>
   */
  failedItem?: S3Resource;

  /**
   * <p>The error message of a failed item.</p>
   */
  errorMessage?: string;
}

export namespace FailedS3Resource {
  export const filterSensitiveLog = (obj: FailedS3Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FailedS3Resource => __isa(o, "FailedS3Resource");
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  message?: string;
  /**
   * Error code for the exception
   */
  errorCode?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalException => __isa(o, "InternalException");
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter. </p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * Field that has invalid input
   */
  fieldName?: string;

  message?: string;
  /**
   * Error code for the exception
   */
  errorCode?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidInputException => __isa(o, "InvalidInputException");
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limits. The error code describes the limit exceeded. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * Resource type that caused the exception
   */
  resourceType?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
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
  export const filterSensitiveLog = (obj: ListMemberAccountsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMemberAccountsRequest => __isa(o, "ListMemberAccountsRequest");
}

export interface ListMemberAccountsResult {
  __type?: "ListMemberAccountsResult";
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
  export const isa = (o: any): o is ListMemberAccountsResult => __isa(o, "ListMemberAccountsResult");
}

export interface ListS3ResourcesRequest {
  __type?: "ListS3ResourcesRequest";
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
  export const isa = (o: any): o is ListS3ResourcesRequest => __isa(o, "ListS3ResourcesRequest");
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
  s3Resources?: S3ResourceClassification[];
}

export namespace ListS3ResourcesResult {
  export const filterSensitiveLog = (obj: ListS3ResourcesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListS3ResourcesResult => __isa(o, "ListS3ResourcesResult");
}

/**
 * <p>Contains information about the Amazon Macie Classic member account.</p>
 */
export interface MemberAccount {
  __type?: "MemberAccount";
  /**
   * <p>The AWS account ID of the Amazon Macie Classic member account.</p>
   */
  accountId?: string;
}

export namespace MemberAccount {
  export const filterSensitiveLog = (obj: MemberAccount): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MemberAccount => __isa(o, "MemberAccount");
}

export enum S3ContinuousClassificationType {
  FULL = "FULL",
}

export enum S3OneTimeClassificationType {
  FULL = "FULL",
  NONE = "NONE",
}

/**
 * <p>Contains information about the S3 resource. This data type is used as a request
 *       parameter in the DisassociateS3Resources action and can be used as a response parameter in the
 *       AssociateS3Resources and UpdateS3Resources actions. </p>
 */
export interface S3Resource {
  __type?: "S3Resource";
  /**
   * <p>The prefix of the S3 bucket. </p>
   */
  prefix?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  bucketName: string | undefined;
}

export namespace S3Resource {
  export const filterSensitiveLog = (obj: S3Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Resource => __isa(o, "S3Resource");
}

/**
 * <p>The S3 resources that you want to associate with Amazon Macie Classic for monitoring
 *       and data classification. This data type is used as a request parameter in the
 *       AssociateS3Resources action and a response parameter in the ListS3Resources action. </p>
 */
export interface S3ResourceClassification {
  __type?: "S3ResourceClassification";
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

  /**
   * <p>The name of the S3 bucket that you want to associate with Amazon Macie
   *       Classic.</p>
   */
  bucketName: string | undefined;
}

export namespace S3ResourceClassification {
  export const filterSensitiveLog = (obj: S3ResourceClassification): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3ResourceClassification => __isa(o, "S3ResourceClassification");
}

/**
 * <p>The S3 resources whose classification types you want to update. This data type is used
 *       as a request parameter in the UpdateS3Resources action. </p>
 */
export interface S3ResourceClassificationUpdate {
  __type?: "S3ResourceClassificationUpdate";
  /**
   * <p>The classification type that you want to update for the resource associated with Amazon
   *       Macie Classic. </p>
   */
  classificationTypeUpdate: ClassificationTypeUpdate | undefined;

  /**
   * <p>The name of the S3 bucket whose classification types you want to update.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the S3 bucket whose classification types you want to update.</p>
   */
  prefix?: string;
}

export namespace S3ResourceClassificationUpdate {
  export const filterSensitiveLog = (obj: S3ResourceClassificationUpdate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3ResourceClassificationUpdate => __isa(o, "S3ResourceClassificationUpdate");
}

export interface UpdateS3ResourcesRequest {
  __type?: "UpdateS3ResourcesRequest";
  /**
   * <p>The S3 resources whose classification types you want to update.</p>
   */
  s3ResourcesUpdate: S3ResourceClassificationUpdate[] | undefined;

  /**
   * <p>The AWS ID of the Amazon Macie Classic member account whose S3 resources'
   *       classification types you want to update. </p>
   */
  memberAccountId?: string;
}

export namespace UpdateS3ResourcesRequest {
  export const filterSensitiveLog = (obj: UpdateS3ResourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateS3ResourcesRequest => __isa(o, "UpdateS3ResourcesRequest");
}

export interface UpdateS3ResourcesResult {
  __type?: "UpdateS3ResourcesResult";
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
  export const isa = (o: any): o is UpdateS3ResourcesResult => __isa(o, "UpdateS3ResourcesResult");
}
