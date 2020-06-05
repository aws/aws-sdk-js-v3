import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information includes the AWS account ID where the current document is shared and the version
 *    shared with that account.</p>
 */
export interface AccountSharingInfo {
  __type?: "AccountSharingInfo";
  /**
   * <p>The AWS account ID where the current document is shared.</p>
   */
  AccountId?: string;

  /**
   * <p>The version of the current document shared with the account.</p>
   */
  SharedDocumentVersion?: string;
}

export namespace AccountSharingInfo {
  export const filterSensitiveLog = (obj: AccountSharingInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountSharingInfo =>
    __isa(o, "AccountSharingInfo");
}

/**
 * <p>An activation registers one or more on-premises servers or virtual machines (VMs) with AWS
 *    so that you can configure those servers or VMs using Run Command. A server or VM that has been
 *    registered with AWS is called a managed instance.</p>
 */
export interface Activation {
  __type?: "Activation";
  /**
   * <p>The ID created by Systems Manager when you submitted the activation.</p>
   */
  ActivationId?: string;

  /**
   * <p>The date the activation was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A name for the managed instance when it is created.</p>
   */
  DefaultInstanceName?: string;

  /**
   * <p>A user defined description of the activation.</p>
   */
  Description?: string;

  /**
   * <p>The date when this activation can no longer be used to register managed instances.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>Whether or not the activation is expired.</p>
   */
  Expired?: boolean;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role to assign to the managed
   *    instance.</p>
   */
  IamRole?: string;

  /**
   * <p>The maximum number of managed instances that can be registered using this activation.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The number of managed instances already registered with this activation.</p>
   */
  RegistrationsCount?: number;

  /**
   * <p>Tags assigned to the activation.</p>
   */
  Tags?: Tag[];
}

export namespace Activation {
  export const filterSensitiveLog = (obj: Activation): any => ({
    ...obj
  });
  export const isa = (o: any): o is Activation => __isa(o, "Activation");
}

export interface AddTagsToResourceRequest {
  __type?: "AddTagsToResourceRequest";
  /**
   * <p>The resource ID you want to tag.</p>
   *          <p>Use the ID of the resource. Here are some examples:</p>
   *          <p>ManagedInstance: mi-012345abcde</p>
   *          <p>MaintenanceWindow: mw-012345abcde</p>
   *          <p>PatchBaseline: pb-012345abcde</p>
   *          <p>For the Document and Parameter values, use the name of the resource.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API action is only for on-premises managed instances. You
   *     must specify the name of the managed instance in the following format: mi-ID_number. For
   *     example, mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceId: string | undefined;

  /**
   * <p>Specifies the type of resource you are tagging.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API action is for on-premises managed instances. You must
   *     specify the name of the managed instance in the following format: mi-ID_number. For example,
   *     mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;

  /**
   * <p> One or more tags. The value parameter is required, but if you don't want the tag to have a
   *    value, specify the parameter with no value, and we set the value to an empty string. </p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceRequest {
  export const filterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceRequest =>
    __isa(o, "AddTagsToResourceRequest");
}

export interface AddTagsToResourceResult {
  __type?: "AddTagsToResourceResult";
}

export namespace AddTagsToResourceResult {
  export const filterSensitiveLog = (obj: AddTagsToResourceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceResult =>
    __isa(o, "AddTagsToResourceResult");
}

/**
 * <p>Error returned if an attempt is made to register a patch group with a patch baseline that is
 *    already registered with a different patch baseline.</p>
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyExistsException =>
    __isa(o, "AlreadyExistsException");
}

/**
 * <p>You must disassociate a document from all instances before you can delete it.</p>
 */
export interface AssociatedInstances
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociatedInstances";
  $fault: "client";
}

export namespace AssociatedInstances {
  export const filterSensitiveLog = (obj: AssociatedInstances): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociatedInstances =>
    __isa(o, "AssociatedInstances");
}

/**
 * <p>Describes an association of a Systems Manager document and an instance.</p>
 */
export interface Association {
  __type?: "Association";
  /**
   * <p>The ID created by the system when you create an association. An association is a binding
   *    between a document and a set of targets with a schedule.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association name.</p>
   */
  AssociationName?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The version of the document used in the association.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The date on which the association was last run.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>Information about the association.</p>
   */
  Overview?: AssociationOverview;

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The instances targeted by the request to create an association. </p>
   */
  Targets?: Target[];
}

export namespace Association {
  export const filterSensitiveLog = (obj: Association): any => ({
    ...obj
  });
  export const isa = (o: any): o is Association => __isa(o, "Association");
}

/**
 * <p>The specified association already exists.</p>
 */
export interface AssociationAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociationAlreadyExists";
  $fault: "client";
}

export namespace AssociationAlreadyExists {
  export const filterSensitiveLog = (obj: AssociationAlreadyExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationAlreadyExists =>
    __isa(o, "AssociationAlreadyExists");
}

export enum AssociationComplianceSeverity {
  Critical = "CRITICAL",
  High = "HIGH",
  Low = "LOW",
  Medium = "MEDIUM",
  Unspecified = "UNSPECIFIED"
}

/**
 * <p>Describes the parameters for a document.</p>
 */
export interface AssociationDescription {
  __type?: "AssociationDescription";
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association name.</p>
   */
  AssociationName?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation document and target resources by using rate controls.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The severity level that is assigned to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The date when the association was made.</p>
   */
  Date?: Date;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The date on which the association was last run.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>The last date on which the association was successfully run.</p>
   */
  LastSuccessfulExecutionDate?: Date;

  /**
   * <p>The date when the association was last updated.</p>
   */
  LastUpdateAssociationDate?: Date;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>An Amazon S3 bucket where you want to store the output details of the request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>Information about the association.</p>
   */
  Overview?: AssociationOverview;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The association status.</p>
   */
  Status?: AssociationStatus;

  /**
   * <p>The instances targeted by the request. </p>
   */
  Targets?: Target[];
}

export namespace AssociationDescription {
  export const filterSensitiveLog = (obj: AssociationDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationDescription =>
    __isa(o, "AssociationDescription");
}

/**
 * <p>The specified association does not exist.</p>
 */
export interface AssociationDoesNotExist
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociationDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace AssociationDoesNotExist {
  export const filterSensitiveLog = (obj: AssociationDoesNotExist): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationDoesNotExist =>
    __isa(o, "AssociationDoesNotExist");
}

/**
 * <p>Includes information about the specified association.</p>
 */
export interface AssociationExecution {
  __type?: "AssociationExecution";
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The time the execution started.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Detailed status information about the execution.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The execution ID for the association.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>An aggregate status of the resources in the execution based on the status type.</p>
   */
  ResourceCountByStatus?: string;

  /**
   * <p>The status of the association execution.</p>
   */
  Status?: string;
}

export namespace AssociationExecution {
  export const filterSensitiveLog = (obj: AssociationExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationExecution =>
    __isa(o, "AssociationExecution");
}

/**
 * <p>The specified execution ID does not exist. Verify the ID number and try again.</p>
 */
export interface AssociationExecutionDoesNotExist
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociationExecutionDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace AssociationExecutionDoesNotExist {
  export const filterSensitiveLog = (
    obj: AssociationExecutionDoesNotExist
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationExecutionDoesNotExist =>
    __isa(o, "AssociationExecutionDoesNotExist");
}

/**
 * <p>Filters used in the request.</p>
 */
export interface AssociationExecutionFilter {
  __type?: "AssociationExecutionFilter";
  /**
   * <p>The key value used in the request.</p>
   */
  Key: AssociationExecutionFilterKey | string | undefined;

  /**
   * <p>The filter type specified in the request.</p>
   */
  Type: AssociationFilterOperatorType | string | undefined;

  /**
   * <p>The value specified for the key.</p>
   */
  Value: string | undefined;
}

export namespace AssociationExecutionFilter {
  export const filterSensitiveLog = (obj: AssociationExecutionFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationExecutionFilter =>
    __isa(o, "AssociationExecutionFilter");
}

export enum AssociationExecutionFilterKey {
  CreatedTime = "CreatedTime",
  ExecutionId = "ExecutionId",
  Status = "Status"
}

/**
 * <p>Includes information about the specified association execution.</p>
 */
export interface AssociationExecutionTarget {
  __type?: "AssociationExecutionTarget";
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>Detailed information about the execution status.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The execution ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>The location where the association details are saved.</p>
   */
  OutputSource?: OutputSource;

  /**
   * <p>The resource ID, for example, the instance ID where the association ran.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type, for example, instance.</p>
   */
  ResourceType?: string;

  /**
   * <p>The association execution status.</p>
   */
  Status?: string;
}

export namespace AssociationExecutionTarget {
  export const filterSensitiveLog = (obj: AssociationExecutionTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationExecutionTarget =>
    __isa(o, "AssociationExecutionTarget");
}

/**
 * <p>Filters for the association execution.</p>
 */
export interface AssociationExecutionTargetsFilter {
  __type?: "AssociationExecutionTargetsFilter";
  /**
   * <p>The key value used in the request.</p>
   */
  Key: AssociationExecutionTargetsFilterKey | string | undefined;

  /**
   * <p>The value specified for the key.</p>
   */
  Value: string | undefined;
}

export namespace AssociationExecutionTargetsFilter {
  export const filterSensitiveLog = (
    obj: AssociationExecutionTargetsFilter
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationExecutionTargetsFilter =>
    __isa(o, "AssociationExecutionTargetsFilter");
}

export enum AssociationExecutionTargetsFilterKey {
  ResourceId = "ResourceId",
  ResourceType = "ResourceType",
  Status = "Status"
}

/**
 * <p>Describes a filter.</p>
 */
export interface AssociationFilter {
  __type?: "AssociationFilter";
  /**
   * <p>The name of the filter.</p>
   */
  key: AssociationFilterKey | string | undefined;

  /**
   * <p>The filter value.</p>
   */
  value: string | undefined;
}

export namespace AssociationFilter {
  export const filterSensitiveLog = (obj: AssociationFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationFilter =>
    __isa(o, "AssociationFilter");
}

export enum AssociationFilterKey {
  AssociationId = "AssociationId",
  AssociationName = "AssociationName",
  InstanceId = "InstanceId",
  LastExecutedAfter = "LastExecutedAfter",
  LastExecutedBefore = "LastExecutedBefore",
  Name = "Name",
  Status = "AssociationStatusName"
}

export enum AssociationFilterOperatorType {
  Equal = "EQUAL",
  GreaterThan = "GREATER_THAN",
  LessThan = "LESS_THAN"
}

/**
 * <p>You can have at most 2,000 active associations.</p>
 */
export interface AssociationLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociationLimitExceeded";
  $fault: "client";
}

export namespace AssociationLimitExceeded {
  export const filterSensitiveLog = (obj: AssociationLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationLimitExceeded =>
    __isa(o, "AssociationLimitExceeded");
}

/**
 * <p>Information about the association.</p>
 */
export interface AssociationOverview {
  __type?: "AssociationOverview";
  /**
   * <p>Returns the number of targets for the association status. For example, if you created an
   *    association with two instances, and one of them was successful, this would return the count of
   *    instances by status.</p>
   */
  AssociationStatusAggregatedCount?: { [key: string]: number };

  /**
   * <p>A detailed status of the association.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The status of the association. Status can be: Pending, Success, or Failed.</p>
   */
  Status?: string;
}

export namespace AssociationOverview {
  export const filterSensitiveLog = (obj: AssociationOverview): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationOverview =>
    __isa(o, "AssociationOverview");
}

/**
 * <p>Describes an association status.</p>
 */
export interface AssociationStatus {
  __type?: "AssociationStatus";
  /**
   * <p>A user-defined string.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>The date when the status changed.</p>
   */
  Date: Date | undefined;

  /**
   * <p>The reason for the status.</p>
   */
  Message: string | undefined;

  /**
   * <p>The status.</p>
   */
  Name: AssociationStatusName | string | undefined;
}

export namespace AssociationStatus {
  export const filterSensitiveLog = (obj: AssociationStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationStatus =>
    __isa(o, "AssociationStatus");
}

export enum AssociationStatusName {
  Failed = "Failed",
  Pending = "Pending",
  Success = "Success"
}

/**
 * <p>Information about the association version.</p>
 */
export interface AssociationVersionInfo {
  __type?: "AssociationVersionInfo";
  /**
   * <p>The ID created by the system when the association was created.</p>
   */
  AssociationId?: string;

  /**
   * <p>The name specified for the association version when the association version was
   *    created.</p>
   */
  AssociationName?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The severity level that is assigned to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The date the association version was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The version of a Systems Manager document used when the association version was created.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The name specified when the association was created.</p>
   */
  Name?: string;

  /**
   * <p>The location in Amazon S3 specified for the association when the association version was
   *    created.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>Parameters specified when the association version was created.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The cron or rate schedule specified for the association when the association version was
   *    created.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The targets specified for the association when the association version was created. </p>
   */
  Targets?: Target[];
}

export namespace AssociationVersionInfo {
  export const filterSensitiveLog = (obj: AssociationVersionInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationVersionInfo =>
    __isa(o, "AssociationVersionInfo");
}

/**
 * <p>You have reached the maximum number versions allowed for an association. Each association
 *    has a limit of 1,000 versions. </p>
 */
export interface AssociationVersionLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociationVersionLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace AssociationVersionLimitExceeded {
  export const filterSensitiveLog = (
    obj: AssociationVersionLimitExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociationVersionLimitExceeded =>
    __isa(o, "AssociationVersionLimitExceeded");
}

/**
 * <p>A structure that includes attributes that describe a document attachment.</p>
 */
export interface AttachmentContent {
  __type?: "AttachmentContent";
  /**
   * <p>The cryptographic hash value of the document content.</p>
   */
  Hash?: string;

  /**
   * <p>The hash algorithm used to calculate the hash value.</p>
   */
  HashType?: AttachmentHashType | string;

  /**
   * <p>The name of an attachment.</p>
   */
  Name?: string;

  /**
   * <p>The size of an attachment in bytes.</p>
   */
  Size?: number;

  /**
   * <p>The URL location of the attachment content.</p>
   */
  Url?: string;
}

export namespace AttachmentContent {
  export const filterSensitiveLog = (obj: AttachmentContent): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentContent =>
    __isa(o, "AttachmentContent");
}

export enum AttachmentHashType {
  SHA256 = "Sha256"
}

/**
 * <p>An attribute of an attachment, such as the attachment name.</p>
 */
export interface AttachmentInformation {
  __type?: "AttachmentInformation";
  /**
   * <p>The name of the attachment.</p>
   */
  Name?: string;
}

export namespace AttachmentInformation {
  export const filterSensitiveLog = (obj: AttachmentInformation): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentInformation =>
    __isa(o, "AttachmentInformation");
}

/**
 * <p>Identifying information about a document attachment, including the file name and a key-value
 *    pair that identifies the location of an attachment to a document.</p>
 */
export interface AttachmentsSource {
  __type?: "AttachmentsSource";
  /**
   * <p>The key of a key-value pair that identifies the location of an attachment to a
   *    document.</p>
   */
  Key?: AttachmentsSourceKey | string;

  /**
   * <p>The name of the document attachment file.</p>
   */
  Name?: string;

  /**
   * <p>The value of a key-value pair that identifies the location of an attachment to a document.
   *    The format for <b>Value</b> depends on the type of key you
   *    specify.</p>
   *          <ul>
   *             <li>
   *                <p>For the key <i>SourceUrl</i>, the value is an S3 bucket location. For
   *      example:</p>
   *                <p>
   *                   <code>"Values": [ "s3://my-bucket/my-folder" ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the key <i>S3FileUrl</i>, the value is a file in an S3 bucket. For
   *      example:</p>
   *                <p>
   *                   <code>"Values": [ "s3://my-bucket/my-folder/my-file.py" ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the key <i>AttachmentReference</i>, the value is constructed from the
   *      name of another SSM document in your account, a version number of that document, and a file
   *      attached to that document version that you want to reuse. For example:</p>
   *                <p>
   *                   <code>"Values": [ "MyOtherDocument/3/my-other-file.py" ]</code>
   *                </p>
   *                <p>However, if the SSM document is shared with you from another account, the full SSM
   *      document ARN must be specified instead of the document name only. For example:</p>
   *                <p>
   *                   <code>"Values": [
   *       "arn:aws:ssm:us-east-2:111122223333:document/OtherAccountDocument/3/their-file.py"
   *       ]</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Values?: string[];
}

export namespace AttachmentsSource {
  export const filterSensitiveLog = (obj: AttachmentsSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentsSource =>
    __isa(o, "AttachmentsSource");
}

export enum AttachmentsSourceKey {
  AttachmentReference = "AttachmentReference",
  S3FileUrl = "S3FileUrl",
  SourceUrl = "SourceUrl"
}

/**
 * <p>An Automation document with the specified name could not be found.</p>
 */
export interface AutomationDefinitionNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AutomationDefinitionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationDefinitionNotFoundException {
  export const filterSensitiveLog = (
    obj: AutomationDefinitionNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationDefinitionNotFoundException =>
    __isa(o, "AutomationDefinitionNotFoundException");
}

/**
 * <p>An Automation document with the specified name and version could not be found.</p>
 */
export interface AutomationDefinitionVersionNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AutomationDefinitionVersionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationDefinitionVersionNotFoundException {
  export const filterSensitiveLog = (
    obj: AutomationDefinitionVersionNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AutomationDefinitionVersionNotFoundException =>
    __isa(o, "AutomationDefinitionVersionNotFoundException");
}

/**
 * <p>Detailed information about the current state of an individual Automation execution.</p>
 */
export interface AutomationExecution {
  __type?: "AutomationExecution";
  /**
   * <p>The execution ID.</p>
   */
  AutomationExecutionId?: string;

  /**
   * <p>The execution status of the Automation.</p>
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | string;

  /**
   * <p>The action of the step that is currently running.</p>
   */
  CurrentAction?: string;

  /**
   * <p>The name of the step that is currently running.</p>
   */
  CurrentStepName?: string;

  /**
   * <p>The name of the Automation document used during the execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The version of the document to use during execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who ran the automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>The time the execution finished.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The time the execution started.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>A message describing why an execution has failed, if the status is set to Failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The MaxConcurrency value specified by the user when the execution started.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The MaxErrors value specified by the user when the execution started.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The automation execution mode.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>The list of execution outputs as defined in the automation document.</p>
   */
  Outputs?: { [key: string]: string[] };

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling
   *    StartAutomationExecution.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The AutomationExecutionId of the parent automation.</p>
   */
  ParentAutomationExecutionId?: string;

  /**
   * <p>An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and
   *    multi-account Automation execution.</p>
   */
  ProgressCounters?: ProgressCounters;

  /**
   * <p>A list of resolved targets in the rate control execution.</p>
   */
  ResolvedTargets?: ResolvedTargets;

  /**
   * <p>A list of details about the current state of all steps that comprise an execution. An
   *    Automation document contains a list of steps that are run in order.</p>
   */
  StepExecutions?: StepExecution[];

  /**
   * <p>A boolean value that indicates if the response contains the full list of the Automation step
   *    executions. If true, use the DescribeAutomationStepExecutions API action to get the full list of
   *    step executions.</p>
   */
  StepExecutionsTruncated?: boolean;

  /**
   * <p>The target of the execution.</p>
   */
  Target?: string;

  /**
   * <p>The combination of AWS Regions and/or AWS accounts where you want to run the
   *    Automation.</p>
   */
  TargetLocations?: TargetLocation[];

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?: { [key: string]: string[] }[];

  /**
   * <p>The parameter name.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The specified targets.</p>
   */
  Targets?: Target[];
}

export namespace AutomationExecution {
  export const filterSensitiveLog = (obj: AutomationExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationExecution =>
    __isa(o, "AutomationExecution");
}

/**
 * <p>A filter used to match specific automation executions. This is used to limit the scope of
 *    Automation execution information returned.</p>
 */
export interface AutomationExecutionFilter {
  __type?: "AutomationExecutionFilter";
  /**
   * <p>One or more keys to limit the results. Valid filter keys include the following:
   *    DocumentNamePrefix, ExecutionStatus, ExecutionId, ParentExecutionId, CurrentAction,
   *    StartTimeBefore, StartTimeAfter.</p>
   */
  Key: AutomationExecutionFilterKey | string | undefined;

  /**
   * <p>The values used to limit the execution information associated with the filter's key.</p>
   */
  Values: string[] | undefined;
}

export namespace AutomationExecutionFilter {
  export const filterSensitiveLog = (obj: AutomationExecutionFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationExecutionFilter =>
    __isa(o, "AutomationExecutionFilter");
}

export enum AutomationExecutionFilterKey {
  AUTOMATION_TYPE = "AutomationType",
  CURRENT_ACTION = "CurrentAction",
  DOCUMENT_NAME_PREFIX = "DocumentNamePrefix",
  EXECUTION_ID = "ExecutionId",
  EXECUTION_STATUS = "ExecutionStatus",
  PARENT_EXECUTION_ID = "ParentExecutionId",
  START_TIME_AFTER = "StartTimeAfter",
  START_TIME_BEFORE = "StartTimeBefore",
  TAG_KEY = "TagKey"
}

/**
 * <p>The number of simultaneously running Automation executions exceeded the allowable
 *    limit.</p>
 */
export interface AutomationExecutionLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "AutomationExecutionLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationExecutionLimitExceededException {
  export const filterSensitiveLog = (
    obj: AutomationExecutionLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationExecutionLimitExceededException =>
    __isa(o, "AutomationExecutionLimitExceededException");
}

/**
 * <p>Details about a specific Automation execution.</p>
 */
export interface AutomationExecutionMetadata {
  __type?: "AutomationExecutionMetadata";
  /**
   * <p>The execution ID.</p>
   */
  AutomationExecutionId?: string;

  /**
   * <p>The status of the execution.</p>
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | string;

  /**
   * <p>Use this filter with <a>DescribeAutomationExecutions</a>. Specify either Local or
   *    CrossAccount. CrossAccount is an Automation that runs in multiple AWS Regions and accounts. For
   *    more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Executing
   *     Automations in Multiple AWS Regions and Accounts</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  AutomationType?: AutomationType | string;

  /**
   * <p>The action of the step that is currently running.</p>
   */
  CurrentAction?: string;

  /**
   * <p>The name of the step that is currently running.</p>
   */
  CurrentStepName?: string;

  /**
   * <p>The name of the Automation document used during execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The document version used during the execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The IAM role ARN of the user who ran the Automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>The time the execution finished. This is not populated if the execution is still in
   *    progress.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The time the execution started.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  FailureMessage?: string;

  /**
   * <p>An Amazon S3 bucket where execution information is stored.</p>
   */
  LogFile?: string;

  /**
   * <p>The MaxConcurrency value specified by the user when starting the Automation.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The MaxErrors value specified by the user when starting the Automation.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The Automation execution mode.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Outputs?: { [key: string]: string[] };

  /**
   * <p>The ExecutionId of the parent Automation.</p>
   */
  ParentAutomationExecutionId?: string;

  /**
   * <p>A list of targets that resolved during the execution.</p>
   */
  ResolvedTargets?: ResolvedTargets;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Target?: string;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?: { [key: string]: string[] }[];

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The targets defined by the user when starting the Automation.</p>
   */
  Targets?: Target[];
}

export namespace AutomationExecutionMetadata {
  export const filterSensitiveLog = (
    obj: AutomationExecutionMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationExecutionMetadata =>
    __isa(o, "AutomationExecutionMetadata");
}

/**
 * <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 */
export interface AutomationExecutionNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AutomationExecutionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationExecutionNotFoundException {
  export const filterSensitiveLog = (
    obj: AutomationExecutionNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationExecutionNotFoundException =>
    __isa(o, "AutomationExecutionNotFoundException");
}

export enum AutomationExecutionStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  FAILED = "Failed",
  INPROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMEDOUT = "TimedOut",
  WAITING = "Waiting"
}

/**
 * <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 */
export interface AutomationStepNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AutomationStepNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationStepNotFoundException {
  export const filterSensitiveLog = (
    obj: AutomationStepNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutomationStepNotFoundException =>
    __isa(o, "AutomationStepNotFoundException");
}

export enum AutomationType {
  CrossAccount = "CrossAccount",
  Local = "Local"
}

export enum CalendarState {
  CLOSED = "CLOSED",
  OPEN = "OPEN"
}

/**
 * <p></p>
 */
export interface CancelCommandRequest {
  __type?: "CancelCommandRequest";
  /**
   * <p>The ID of the command you want to cancel.</p>
   */
  CommandId: string | undefined;

  /**
   * <p>(Optional) A list of instance IDs on which you want to cancel the command. If not provided,
   *    the command is canceled on every instance on which it was requested.</p>
   */
  InstanceIds?: string[];
}

export namespace CancelCommandRequest {
  export const filterSensitiveLog = (obj: CancelCommandRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelCommandRequest =>
    __isa(o, "CancelCommandRequest");
}

/**
 * <p>Whether or not the command was successfully canceled. There is no guarantee that a request
 *    can be canceled.</p>
 */
export interface CancelCommandResult {
  __type?: "CancelCommandResult";
}

export namespace CancelCommandResult {
  export const filterSensitiveLog = (obj: CancelCommandResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelCommandResult =>
    __isa(o, "CancelCommandResult");
}

export interface CancelMaintenanceWindowExecutionRequest {
  __type?: "CancelMaintenanceWindowExecutionRequest";
  /**
   * <p>The ID of the maintenance window execution to stop.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace CancelMaintenanceWindowExecutionRequest {
  export const filterSensitiveLog = (
    obj: CancelMaintenanceWindowExecutionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelMaintenanceWindowExecutionRequest =>
    __isa(o, "CancelMaintenanceWindowExecutionRequest");
}

export interface CancelMaintenanceWindowExecutionResult {
  __type?: "CancelMaintenanceWindowExecutionResult";
  /**
   * <p>The ID of the maintenance window execution that has been stopped.</p>
   */
  WindowExecutionId?: string;
}

export namespace CancelMaintenanceWindowExecutionResult {
  export const filterSensitiveLog = (
    obj: CancelMaintenanceWindowExecutionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelMaintenanceWindowExecutionResult =>
    __isa(o, "CancelMaintenanceWindowExecutionResult");
}

/**
 * <p>Configuration options for sending command output to CloudWatch Logs.</p>
 */
export interface CloudWatchOutputConfig {
  __type?: "CloudWatchOutputConfig";
  /**
   * <p>The name of the CloudWatch log group where you want to send command output. If you don't
   *    specify a group name, Systems Manager automatically creates a log group for you. The log group uses the
   *    following naming format: aws/ssm/<i>SystemsManagerDocumentName</i>.</p>
   */
  CloudWatchLogGroupName?: string;

  /**
   * <p>Enables Systems Manager to send command output to CloudWatch Logs.</p>
   */
  CloudWatchOutputEnabled?: boolean;
}

export namespace CloudWatchOutputConfig {
  export const filterSensitiveLog = (obj: CloudWatchOutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudWatchOutputConfig =>
    __isa(o, "CloudWatchOutputConfig");
}

/**
 * <p>Describes a command request.</p>
 */
export interface Command {
  __type?: "Command";
  /**
   * <p>CloudWatch Logs information where you want Systems Manager to send the command output.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>A unique identifier for this command.</p>
   */
  CommandId?: string;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   */
  Comment?: string;

  /**
   * <p>The number of targets for which the command invocation reached a terminal state. Terminal
   *    states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out, Canceled,
   *    Terminated, or Undeliverable.</p>
   */
  CompletedCount?: number;

  /**
   * <p>The number of targets for which the status is Delivery Timed Out.</p>
   */
  DeliveryTimedOutCount?: number;

  /**
   * <p>The name of the document requested for execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The SSM document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The number of targets for which the status is Failed or Execution Timed Out.</p>
   */
  ErrorCount?: number;

  /**
   * <p>If this time is reached and the command has not already started running, it will not run.
   *    Calculated based on the ExpiresAfter user input provided as part of the SendCommand API.</p>
   */
  ExpiresAfter?: Date;

  /**
   * <p>The instance IDs against which this command was requested.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of instances that are allowed to run the command at the same time. You
   *    can specify a number of instances, such as 10, or a percentage of instances, such as 10%. The
   *    default value is 50. For more information about how to use MaxConcurrency, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html">Running Commands Using Systems Manager Run Command</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the system stops sending the command to
   *    additional targets. You can specify a number of errors, such as 10, or a percentage or errors,
   *    such as 10%. The default value is 0. For more information about how to use MaxErrors, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html">Running Commands Using Systems Manager Run Command</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  MaxErrors?: string;

  /**
   * <p>Configurations for sending notifications about command status changes. </p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was
   *    requested when issuing the command.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should
   *    be stored. This was requested when issuing the command.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon S3 bucket region.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The parameter values to be inserted in the document when running the command.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The date and time the command was requested.</p>
   */
  RequestedDateTime?: Date;

  /**
   * <p>The IAM service role that Run Command uses to act on your behalf when sending notifications
   *    about command status changes. </p>
   */
  ServiceRole?: string;

  /**
   * <p>The status of the command.</p>
   */
  Status?: CommandStatus | string;

  /**
   * <p>A detailed status of the command execution. StatusDetails includes more information than
   *    Status because it includes states resulting from error and concurrency control parameters.
   *    StatusDetails can show different results than Status. For more information about these statuses,
   *    see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command Statuses</a> in
   *    the <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the following
   *    values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command has not been sent to any instances.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to at least one instance but has not reached a
   *      final state on all instances.</p>
   *             </li>
   *             <li>
   *                <p>Success: The command successfully ran on all invocations. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The value of MaxErrors or more command invocations shows a status of
   *      Delivery Timed Out. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: The value of MaxErrors or more command invocations shows a status of
   *      Execution Timed Out. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The value of MaxErrors or more command invocations shows a status of Failed. This
   *      is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Incomplete: The command was attempted on all instances and one or more invocations does
   *      not have a value of Success but not enough invocations failed for the status to be Failed. This
   *      is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Rate Exceeded: The number of instances targeted by the command exceeded the account limit
   *      for pending invocations. The system has canceled the command before running it on any instance.
   *      This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;

  /**
   * <p>The number of targets for the command.</p>
   */
  TargetCount?: number;

  /**
   * <p>An array of search criteria that targets instances using a Key,Value combination that you
   *    specify. Targets is required if you don't provide one or more instance IDs in the call.</p>
   */
  Targets?: Target[];
}

export namespace Command {
  export const filterSensitiveLog = (obj: Command): any => ({
    ...obj
  });
  export const isa = (o: any): o is Command => __isa(o, "Command");
}

/**
 * <p>Describes a command filter.</p>
 */
export interface CommandFilter {
  __type?: "CommandFilter";
  /**
   * <p>The name of the filter.</p>
   */
  key: CommandFilterKey | string | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>InvokedAfter</b>: Specify a timestamp to limit your results.
   *      For example, specify <code>2018-07-07T00:00:00Z</code> to see a list of command executions
   *      occurring July 7, 2018, and later.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>InvokedBefore</b>: Specify a timestamp to limit your results.
   *      For example, specify <code>2018-07-07T00:00:00Z</code> to see a list of command executions from
   *      before July 7, 2018.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Status</b>: Specify a valid command status to see a list of
   *      all command executions with that status. Status values you can specify include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Pending</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>InProgress</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Success</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Cancelled</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TimedOut</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Cancelling</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DocumentName</b>: Specify name of the SSM document for which
   *      you want to see command execution results. For example, specify
   *       <code>AWS-RunPatchBaseline</code> to see command executions that used this SSM document to
   *      perform security patching operations on instances. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExecutionStage</b>: Specify one of the following
   *      values:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Executing</code>: Returns a list of command executions that are currently still
   *        running.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Complete</code>: Returns a list of command executions that have already completed.
   *       </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  value: string | undefined;
}

export namespace CommandFilter {
  export const filterSensitiveLog = (obj: CommandFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommandFilter => __isa(o, "CommandFilter");
}

export enum CommandFilterKey {
  DOCUMENT_NAME = "DocumentName",
  EXECUTION_STAGE = "ExecutionStage",
  INVOKED_AFTER = "InvokedAfter",
  INVOKED_BEFORE = "InvokedBefore",
  STATUS = "Status"
}

/**
 * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
 *    or more instances. A command invocation applies to one instance. For example, if a user runs
 *    SendCommand against three instances, then a command invocation is created for each requested
 *    instance ID. A command invocation returns status and detail information about a command you ran.
 *   </p>
 */
export interface CommandInvocation {
  __type?: "CommandInvocation";
  /**
   * <p>CloudWatch Logs information where you want Systems Manager to send the command output.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>The command against which this invocation was requested.</p>
   */
  CommandId?: string;

  CommandPlugins?: CommandPlugin[];
  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   */
  Comment?: string;

  /**
   * <p>The document name that was requested for execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The SSM document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The instance ID in which this invocation was requested.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the invocation target. For Amazon EC2 instances this is the value for the aws:Name
   *    tag. For on-premises instances, this is the name of the instance.</p>
   */
  InstanceName?: string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per instance
   *    basis.</p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>The time and date the request was sent to this instance.</p>
   */
  RequestedDateTime?: Date;

  /**
   * <p>The IAM service role that Run Command uses to act on your behalf when sending notifications
   *    about command status changes on a per instance basis.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The URL to the plugin's StdErr file in Amazon S3, if the Amazon S3 bucket was defined for the parent
   *    command. For an invocation, StandardErrorUrl is populated if there is just one plugin defined for
   *    the command, and the Amazon S3 bucket was defined for the command.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>The URL to the plugin's StdOut file in Amazon S3, if the Amazon S3 bucket was defined for the parent
   *    command. For an invocation, StandardOutputUrl is populated if there is just one plugin defined
   *    for the command, and the Amazon S3 bucket was defined for the command.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>Whether or not the invocation succeeded, failed, or is pending.</p>
   */
  Status?: CommandInvocationStatus | string;

  /**
   * <p>A detailed status of the command execution for each invocation (each instance targeted by
   *    the command). StatusDetails includes more information than Status because it includes states
   *    resulting from error and concurrency control parameters. StatusDetails can show different results
   *    than Status. For more information about these statuses, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command Statuses</a> in the
   *     <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command has not been sent to the instance.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the instance but has not reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Success: The execution of the command or plugin was successfully completed. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command was not delivered to the instance before the delivery
   *      timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit,
   *      but they do contribute to whether the parent command status is Success or Incomplete. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: Command execution started on the instance, but the execution was not
   *      complete before the execution timeout expired. Execution timeouts count against the MaxErrors
   *      limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command was not successful on the instance. For a plugin, this indicates that
   *      the result code was not zero. For a command invocation, this indicates that the result code for
   *      one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the
   *      parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the instance. The instance might not
   *      exist or might not be responding. Undeliverable invocations don't count against the parent
   *      command's MaxErrors limit and don't contribute to whether the parent command status is Success
   *      or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command
   *      invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;

  /**
   * <p> Gets the trace output sent by the agent. </p>
   */
  TraceOutput?: string;
}

export namespace CommandInvocation {
  export const filterSensitiveLog = (obj: CommandInvocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommandInvocation =>
    __isa(o, "CommandInvocation");
}

export enum CommandInvocationStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  DELAYED = "Delayed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut"
}

/**
 * <p>Describes plugin details.</p>
 */
export interface CommandPlugin {
  __type?: "CommandPlugin";
  /**
   * <p>The name of the plugin. Must be one of the following: aws:updateAgent, aws:domainjoin,
   *    aws:applications, aws:runPowerShellScript, aws:psmodule, aws:cloudWatch, aws:runShellScript, or
   *    aws:updateSSMAgent. </p>
   */
  Name?: string;

  /**
   * <p>Output of the plugin execution.</p>
   */
  Output?: string;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was
   *    requested when issuing the command. For example, in the following response:</p>
   *          <p> test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript </p>
   *          <p>test_folder is the name of the Amazon S3 bucket;</p>
   *          <p> ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;</p>
   *          <p>i-1234567876543 is the instance ID;</p>
   *          <p>awsrunShellScript is the name of the plugin.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should
   *    be stored. This was requested when issuing the command. For example, in the following
   *    response:</p>
   *          <p> test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript </p>
   *          <p>test_folder is the name of the Amazon S3 bucket;</p>
   *          <p> ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;</p>
   *          <p>i-1234567876543 is the instance ID;</p>
   *          <p>awsrunShellScript is the name of the plugin.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon S3 bucket region.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>A numeric response code generated after running the plugin. </p>
   */
  ResponseCode?: number;

  /**
   * <p>The time the plugin stopped running. Could stop prematurely if, for example, a cancel
   *    command was sent. </p>
   */
  ResponseFinishDateTime?: Date;

  /**
   * <p>The time the plugin started running. </p>
   */
  ResponseStartDateTime?: Date;

  /**
   * <p>The URL for the complete text written by the plugin to stderr. If execution is not yet
   *    complete, then this string is empty.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stdout in Amazon S3. If the Amazon S3 bucket
   *    for the command was not specified, then this string is empty.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The status of this plugin. You can run a document with multiple plugins.</p>
   */
  Status?: CommandPluginStatus | string;

  /**
   * <p>A detailed status of the plugin execution. StatusDetails includes more information than
   *    Status because it includes states resulting from error and concurrency control parameters.
   *    StatusDetails can show different results than Status. For more information about these statuses,
   *    see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command Statuses</a> in
   *    the <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the following
   *    values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command has not been sent to the instance.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the instance but has not reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Success: The execution of the command or plugin was successfully completed. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command was not delivered to the instance before the delivery
   *      timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit,
   *      but they do contribute to whether the parent command status is Success or Incomplete. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: Command execution started on the instance, but the execution was not
   *      complete before the execution timeout expired. Execution timeouts count against the MaxErrors
   *      limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command was not successful on the instance. For a plugin, this indicates that
   *      the result code was not zero. For a command invocation, this indicates that the result code for
   *      one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the
   *      parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the instance. The instance might not
   *      exist, or it might not be responding. Undeliverable invocations don't count against the parent
   *      command's MaxErrors limit, and they don't contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command
   *      invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;
}

export namespace CommandPlugin {
  export const filterSensitiveLog = (obj: CommandPlugin): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommandPlugin => __isa(o, "CommandPlugin");
}

export enum CommandPluginStatus {
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut"
}

export enum CommandStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut"
}

/**
 * <p>A summary of the call execution that includes an execution ID, the type of execution (for
 *    example, <code>Command</code>), and the date/time of the execution using a datetime object that
 *    is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
 */
export interface ComplianceExecutionSummary {
  __type?: "ComplianceExecutionSummary";
  /**
   * <p>An ID created by the system when <code>PutComplianceItems</code> was called. For example,
   *     <code>CommandID</code> is a valid execution ID. You can use this ID in subsequent calls.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The time the execution ran as a datetime object that is saved in the following format:
   *    yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionTime: Date | undefined;

  /**
   * <p>The type of execution. For example, <code>Command</code> is a valid execution type.</p>
   */
  ExecutionType?: string;
}

export namespace ComplianceExecutionSummary {
  export const filterSensitiveLog = (obj: ComplianceExecutionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplianceExecutionSummary =>
    __isa(o, "ComplianceExecutionSummary");
}

/**
 * <p>Information about the compliance as defined by the resource type. For example, for a patch
 *    resource type, <code>Items</code> includes information about the PatchSeverity, Classification,
 *    etc.</p>
 */
export interface ComplianceItem {
  __type?: "ComplianceItem";
  /**
   * <p>The compliance type. For example, Association (for a State Manager association), Patch, or
   *     Custom:<code>string</code> are all valid compliance types.</p>
   */
  ComplianceType?: string;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: { [key: string]: string };

  /**
   * <p>A summary for the compliance item. The summary includes an execution ID, the execution type
   *    (for example, command), and the execution time.</p>
   */
  ExecutionSummary?: ComplianceExecutionSummary;

  /**
   * <p>An ID for the compliance item. For example, if the compliance item is a Windows patch, the
   *    ID could be the number of the KB article; for example: KB4010320.</p>
   */
  Id?: string;

  /**
   * <p>An ID for the resource. For a managed instance, this is the instance ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. <code>ManagedInstance</code> is currently the only supported resource
   *    type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High,
   *    Medium, Low, Informational, Unspecified.</p>
   */
  Severity?: ComplianceSeverity | string;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.</p>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>A title for the compliance item. For example, if the compliance item is a Windows patch, the
   *    title could be the title of the KB article for the patch; for example: Security Update for Active
   *    Directory Federation Services.</p>
   */
  Title?: string;
}

export namespace ComplianceItem {
  export const filterSensitiveLog = (obj: ComplianceItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplianceItem =>
    __isa(o, "ComplianceItem");
}

/**
 * <p>Information about a compliance item.</p>
 */
export interface ComplianceItemEntry {
  __type?: "ComplianceItemEntry";
  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: { [key: string]: string };

  /**
   * <p>The compliance item ID. For example, if the compliance item is a Windows patch, the ID could
   *    be the number of the KB article.</p>
   */
  Id?: string;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High,
   *    Medium, Low, Informational, Unspecified.</p>
   */
  Severity: ComplianceSeverity | string | undefined;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.</p>
   */
  Status: ComplianceStatus | string | undefined;

  /**
   * <p>The title of the compliance item. For example, if the compliance item is a Windows patch,
   *    the title could be the title of the KB article for the patch; for example: Security Update for
   *    Active Directory Federation Services. </p>
   */
  Title?: string;
}

export namespace ComplianceItemEntry {
  export const filterSensitiveLog = (obj: ComplianceItemEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplianceItemEntry =>
    __isa(o, "ComplianceItemEntry");
}

export enum ComplianceQueryOperatorType {
  BeginWith = "BEGIN_WITH",
  Equal = "EQUAL",
  GreaterThan = "GREATER_THAN",
  LessThan = "LESS_THAN",
  NotEqual = "NOT_EQUAL"
}

export enum ComplianceSeverity {
  Critical = "CRITICAL",
  High = "HIGH",
  Informational = "INFORMATIONAL",
  Low = "LOW",
  Medium = "MEDIUM",
  Unspecified = "UNSPECIFIED"
}

export enum ComplianceStatus {
  Compliant = "COMPLIANT",
  NonCompliant = "NON_COMPLIANT"
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface ComplianceStringFilter {
  __type?: "ComplianceStringFilter";
  /**
   * <p>The name of the filter.</p>
   */
  Key?: string;

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith,
   *    LessThan, or GreaterThan.</p>
   */
  Type?: ComplianceQueryOperatorType | string;

  /**
   * <p>The value for which to search.</p>
   */
  Values?: string[];
}

export namespace ComplianceStringFilter {
  export const filterSensitiveLog = (obj: ComplianceStringFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplianceStringFilter =>
    __isa(o, "ComplianceStringFilter");
}

/**
 * <p>A summary of compliance information by compliance type.</p>
 */
export interface ComplianceSummaryItem {
  __type?: "ComplianceSummaryItem";
  /**
   * <p>The type of compliance item. For example, the compliance type can be Association, Patch, or
   *    Custom:string.</p>
   */
  ComplianceType?: string;

  /**
   * <p>A list of COMPLIANT items for the specified compliance type.</p>
   */
  CompliantSummary?: CompliantSummary;

  /**
   * <p>A list of NON_COMPLIANT items for the specified compliance type.</p>
   */
  NonCompliantSummary?: NonCompliantSummary;
}

export namespace ComplianceSummaryItem {
  export const filterSensitiveLog = (obj: ComplianceSummaryItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplianceSummaryItem =>
    __isa(o, "ComplianceSummaryItem");
}

/**
 * <p>You specified too many custom compliance types. You can specify a maximum of 10 different
 *    types. </p>
 */
export interface ComplianceTypeCountLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ComplianceTypeCountLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ComplianceTypeCountLimitExceededException {
  export const filterSensitiveLog = (
    obj: ComplianceTypeCountLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplianceTypeCountLimitExceededException =>
    __isa(o, "ComplianceTypeCountLimitExceededException");
}

/**
 * <p>A summary of resources that are compliant. The summary is organized according to the
 *    resource count for each compliance type.</p>
 */
export interface CompliantSummary {
  __type?: "CompliantSummary";
  /**
   * <p>The total number of resources that are compliant.</p>
   */
  CompliantCount?: number;

  /**
   * <p>A summary of the compliance severity by compliance type.</p>
   */
  SeveritySummary?: SeveritySummary;
}

export namespace CompliantSummary {
  export const filterSensitiveLog = (obj: CompliantSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompliantSummary =>
    __isa(o, "CompliantSummary");
}

export enum ConnectionStatus {
  CONNECTED = "Connected",
  NOT_CONNECTED = "NotConnected"
}

export interface CreateActivationRequest {
  __type?: "CreateActivationRequest";
  /**
   * <p>The name of the registered, managed instance as it will appear in the Systems Manager console or when
   *    you use the AWS command line tools to list Systems Manager resources.</p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  DefaultInstanceName?: string;

  /**
   * <p>A user-defined description of the resource that you want to register with Systems Manager. </p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  Description?: string;

  /**
   * <p>The date by which this activation request should expire. The default value is 24
   *    hours.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role that you want to assign to the managed
   *    instance. This IAM role must provide AssumeRole permissions for the Systems Manager service principal
   *     <code>ssm.amazonaws.com</code>. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-service-role.html">Create an IAM Service Role for a Hybrid
   *     Environment</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  IamRole: string | undefined;

  /**
   * <p>Specify the maximum number of managed instances you want to register. The default value is 1
   *    instance.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    activation to identify which servers or virtual machines (VMs) in your on-premises environment
   *    you intend to activate. In this case, you could specify the following key name/value
   *    pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>When you install SSM Agent on your on-premises servers and VMs, you specify an activation
   *     ID and code. When you specify the activation ID and code, tags assigned to the activation are
   *     automatically applied to the on-premises servers or VMs.</p>
   *          </important>
   *
   *          <p>You can't add tags to or delete tags from an existing activation. You can tag your
   *    on-premises servers and VMs after they connect to Systems Manager for the first time and are assigned a
   *    managed instance ID. This means they are listed in the AWS Systems Manager console with an ID that is
   *    prefixed with "mi-". For information about how to add tags to your managed instances, see <a>AddTagsToResource</a>. For information about how to remove tags from your managed
   *    instances, see <a>RemoveTagsFromResource</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateActivationRequest {
  export const filterSensitiveLog = (obj: CreateActivationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateActivationRequest =>
    __isa(o, "CreateActivationRequest");
}

export interface CreateActivationResult {
  __type?: "CreateActivationResult";
  /**
   * <p>The code the system generates when it processes the activation. The activation code
   *    functions like a password to validate the activation ID. </p>
   */
  ActivationCode?: string;

  /**
   * <p>The ID number generated by the system when it processed the activation. The activation ID
   *    functions like a user name.</p>
   */
  ActivationId?: string;
}

export namespace CreateActivationResult {
  export const filterSensitiveLog = (obj: CreateActivationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateActivationResult =>
    __isa(o, "CreateActivationResult");
}

export interface CreateAssociationBatchRequest {
  __type?: "CreateAssociationBatchRequest";
  /**
   * <p>One or more associations.</p>
   */
  Entries: CreateAssociationBatchRequestEntry[] | undefined;
}

export namespace CreateAssociationBatchRequest {
  export const filterSensitiveLog = (
    obj: CreateAssociationBatchRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAssociationBatchRequest =>
    __isa(o, "CreateAssociationBatchRequest");
}

/**
 * <p>Describes the association of a Systems Manager SSM document and an instance.</p>
 */
export interface CreateAssociationBatchRequestEntry {
  __type?: "CreateAssociationBatchRequestEntry";
  /**
   * <p>Specify a descriptive name for the association.</p>
   */
  AssociationName?: string;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation document and target resources by using rate controls.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The ID of the instance. </p>
   */
  InstanceId?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The name of the SSM document that contains the configuration information for the instance.
   *    You can specify Command or Automation documents.</p>
   *          <p>You can specify AWS-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other AWS accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For AWS-predefined documents and SSM documents you created in your account, you only need to
   *    specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The instances targeted by the request.</p>
   */
  Targets?: Target[];
}

export namespace CreateAssociationBatchRequestEntry {
  export const filterSensitiveLog = (
    obj: CreateAssociationBatchRequestEntry
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAssociationBatchRequestEntry =>
    __isa(o, "CreateAssociationBatchRequestEntry");
}

export interface CreateAssociationBatchResult {
  __type?: "CreateAssociationBatchResult";
  /**
   * <p>Information about the associations that failed.</p>
   */
  Failed?: FailedCreateAssociation[];

  /**
   * <p>Information about the associations that succeeded.</p>
   */
  Successful?: AssociationDescription[];
}

export namespace CreateAssociationBatchResult {
  export const filterSensitiveLog = (
    obj: CreateAssociationBatchResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAssociationBatchResult =>
    __isa(o, "CreateAssociationBatchResult");
}

export interface CreateAssociationRequest {
  __type?: "CreateAssociationRequest";
  /**
   * <p>Specify a descriptive name for the association.</p>
   */
  AssociationName?: string;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation document and target resources by using rate controls.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The document version you want to associate with the target(s). Can be a specific version or
   *    the default version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The instance ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify an instance ID for an association,
   *     use the <code>Targets</code> parameter. Requests that include the
   *     parameter <code>InstanceID</code> with SSM documents that use schema version 2.0 or later will
   *     fail. In addition, if you use the parameter <code>InstanceId</code>, you
   *     cannot use the parameters <code>AssociationName</code>, <code>DocumentVersion</code>,
   *      <code>MaxErrors</code>, <code>MaxConcurrency</code>, <code>OutputLocation</code>, or
   *      <code>ScheduleExpression</code>. To use these parameters, you must use the <code>Targets</code>
   *     parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The name of the SSM document that contains the configuration information for the instance.
   *    You can specify Command or Automation documents.</p>
   *          <p>You can specify AWS-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other AWS accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:<i>partition</i>:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For AWS-predefined documents and SSM documents you created in your account, you only need to
   *    specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>An Amazon S3 bucket where you want to store the output details of the request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>The parameters for the runtime configuration of the document.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>A cron expression when the association will be applied to the target(s).</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The targets (either instances or tags) for the association. You must specify a value for
   *     <code>Targets</code> if you don't specify a value for <code>InstanceId</code>.</p>
   */
  Targets?: Target[];
}

export namespace CreateAssociationRequest {
  export const filterSensitiveLog = (obj: CreateAssociationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAssociationRequest =>
    __isa(o, "CreateAssociationRequest");
}

export interface CreateAssociationResult {
  __type?: "CreateAssociationResult";
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace CreateAssociationResult {
  export const filterSensitiveLog = (obj: CreateAssociationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAssociationResult =>
    __isa(o, "CreateAssociationResult");
}

export interface CreateDocumentRequest {
  __type?: "CreateDocumentRequest";
  /**
   * <p>A list of key and value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: AttachmentsSource[];

  /**
   * <p>A valid JSON or YAML string.</p>
   */
  Content: string | undefined;

  /**
   * <p>Specify the document format for the request. The document format can be JSON, YAML, or TEXT.
   *    JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The type of document to create.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>A name for the Systems Manager document.</p>
   *          <important>
   *             <p>Do not use the following to begin the names of documents you create. They are reserved by
   *     AWS for use as document prefixes:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>aws</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>amazon</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>amzn</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </important>
   */
  Name: string | undefined;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    SSM document to identify the types of targets or the environment where it will run. In this case,
   *    you could specify the following key name/value pairs:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing SSM document, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>Specify a target type to define the kinds of resources the document can run on. For example,
   *    to run a document on EC2 instances, specify the following value: /AWS::EC2::Instance. If you
   *    specify a value of '/' the document can run on all types of resources. If you don't specify a
   *    value, the document can't run on any resources. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a> in
   *    the <i>AWS CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>An optional field specifying the version of the artifact you are creating with the document.
   *    For example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace CreateDocumentRequest {
  export const filterSensitiveLog = (obj: CreateDocumentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDocumentRequest =>
    __isa(o, "CreateDocumentRequest");
}

export interface CreateDocumentResult {
  __type?: "CreateDocumentResult";
  /**
   * <p>Information about the Systems Manager document.</p>
   */
  DocumentDescription?: DocumentDescription;
}

export namespace CreateDocumentResult {
  export const filterSensitiveLog = (obj: CreateDocumentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDocumentResult =>
    __isa(o, "CreateDocumentResult");
}

export interface CreateMaintenanceWindowRequest {
  __type?: "CreateMaintenanceWindowRequest";
  /**
   * <p>Enables a maintenance window task to run on managed instances, even if you have not
   *    registered those instances as targets. If enabled, then you must specify the unregistered
   *    instances (by instance ID) when you register a task with the maintenance window.</p>
   *          <p>If you don't enable this option, then you must specify previously-registered targets when
   *    you register a task with the maintenance window.</p>
   */
  AllowUnassociatedTargets: boolean | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
   */
  Cutoff: number | undefined;

  /**
   * <p>An optional description for the maintenance window. We recommend specifying a description to
   *    help you organize your maintenance windows. </p>
   */
  Description?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration: number | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. EndDate allows you to set a date and time in the future when the maintenance
   *    window will no longer run.</p>
   */
  EndDate?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become active. StartDate allows you to delay activation of the maintenance window until the
   *    specified future date.</p>
   */
  StartDate?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    maintenance window to identify the type of tasks it will run, the types of targets, and the
   *    environment it will run in. In this case, you could specify the following key name/value
   *    pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=TaskType,Value=AgentUpdate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing maintenance window, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: CreateMaintenanceWindowRequest
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateMaintenanceWindowRequest =>
    __isa(o, "CreateMaintenanceWindowRequest");
}

export interface CreateMaintenanceWindowResult {
  __type?: "CreateMaintenanceWindowResult";
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;
}

export namespace CreateMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: CreateMaintenanceWindowResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMaintenanceWindowResult =>
    __isa(o, "CreateMaintenanceWindowResult");
}

export interface CreateOpsItemRequest {
  __type?: "CreateOpsItemRequest";
  /**
   * <p>Specify a category to assign to an OpsItem. </p>
   */
  Category?: string;

  /**
   * <p>Information about the OpsItem. </p>
   */
  Description: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Notifications?: OpsItemNotification[];

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following: amazon, aws,
   *     amzn, ssm, /amazon, /aws, /amzn, /ssm.</p>
   *          </important>
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API action) can view and search on the
   *    specified data. Operational data that is not searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API action).</p>
   *
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view AWS CLI example commands that use these keys, see
   *     <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems Manually</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  OperationalData?: { [key: string]: OpsItemDataValue };

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: RelatedOpsItem[];

  /**
   * <p>Specify a severity to assign to an OpsItem.</p>
   */
  Severity?: string;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or AWS Systems Manager.</p>
   */
  Source: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can restrict access to OpsItems by
   *    using an inline IAM policy that specifies tags. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html#OpsCenter-getting-started-user-permissions">Getting Started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>Tags use a key-value pair. For example:</p>
   *
   *          <p>
   *             <code>Key=Department,Value=Finance</code>
   *          </p>
   *
   *          <note>
   *             <p>To add tags to an existing OpsItem, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title: string | undefined;
}

export namespace CreateOpsItemRequest {
  export const filterSensitiveLog = (obj: CreateOpsItemRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOpsItemRequest =>
    __isa(o, "CreateOpsItemRequest");
}

export interface CreateOpsItemResponse {
  __type?: "CreateOpsItemResponse";
  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;
}

export namespace CreateOpsItemResponse {
  export const filterSensitiveLog = (obj: CreateOpsItemResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOpsItemResponse =>
    __isa(o, "CreateOpsItemResponse");
}

export interface CreatePatchBaselineRequest {
  __type?: "CreatePatchBaselineRequest";
  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package Name Formats
   *                         for Approved and Rejected Patch Lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>Defines the compliance level for approved patches. This means that if an approved patch is
   *    reported as missing, this is the severity of the compliance violation. The default value is
   *    UNSPECIFIED.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the instances. The default value is 'false'. Applies to Linux instances only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>A set of global filters used to include patches in the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name: string | undefined;

  /**
   * <p>Defines the operating system the patch baseline applies to. The Default value is
   *    WINDOWS.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package Name Formats
   *                         for Approved and Rejected Patch Lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action for Patch Manager to take on patches included in the RejectedPackages
   *    list.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ALLOW_AS_DEPENDENCY</b>: A package in the Rejected patches
   *      list is installed only if it is a dependency of another package. It is considered compliant
   *      with the patch baseline, and its status is reported as <i>InstalledOther</i>.
   *      This is the default action if no option is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>BLOCK</b>: Packages in the RejectedPatches list, and packages
   *      that include them as dependencies, are not installed under any circumstances. If a package was
   *      installed before it was added to the Rejected patches list, it is considered non-compliant with
   *      the patch baseline, and its status is reported as
   *      <i>InstalledRejected</i>.</p>
   *             </li>
   *          </ul>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
   */
  Sources?: PatchSource[];

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    patch baseline to identify the severity level of patches it specifies and the operating system
   *    family it applies to. In this case, you could specify the following key name/value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=PatchSeverity,Value=Critical</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing patch baseline, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreatePatchBaselineRequest {
  export const filterSensitiveLog = (obj: CreatePatchBaselineRequest): any => ({
    ...obj,
    ...(obj.Sources && {
      Sources: obj.Sources.map(item => PatchSource.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is CreatePatchBaselineRequest =>
    __isa(o, "CreatePatchBaselineRequest");
}

export interface CreatePatchBaselineResult {
  __type?: "CreatePatchBaselineResult";
  /**
   * <p>The ID of the created patch baseline.</p>
   */
  BaselineId?: string;
}

export namespace CreatePatchBaselineResult {
  export const filterSensitiveLog = (obj: CreatePatchBaselineResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePatchBaselineResult =>
    __isa(o, "CreatePatchBaselineResult");
}

export interface CreateResourceDataSyncRequest {
  __type?: "CreateResourceDataSyncRequest";
  /**
   * <p>Amazon S3 configuration details for the sync.</p>
   */
  S3Destination?: ResourceDataSyncS3Destination;

  /**
   * <p>A name for the configuration.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>Specify information about the data sources to synchronize.</p>
   */
  SyncSource?: ResourceDataSyncSource;

  /**
   * <p>Specify <code>SyncToDestination</code> to create a resource data sync that synchronizes data
   *    from multiple AWS Regions to an Amazon S3 bucket. Specify <code>SyncFromSource</code> to
   *    synchronize data from multiple AWS accounts and Regions, as listed in AWS Organizations.</p>
   */
  SyncType?: string;
}

export namespace CreateResourceDataSyncRequest {
  export const filterSensitiveLog = (
    obj: CreateResourceDataSyncRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateResourceDataSyncRequest =>
    __isa(o, "CreateResourceDataSyncRequest");
}

export interface CreateResourceDataSyncResult {
  __type?: "CreateResourceDataSyncResult";
}

export namespace CreateResourceDataSyncResult {
  export const filterSensitiveLog = (
    obj: CreateResourceDataSyncResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateResourceDataSyncResult =>
    __isa(o, "CreateResourceDataSyncResult");
}

/**
 * <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try
 *    again.</p>
 */
export interface CustomSchemaCountLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomSchemaCountLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace CustomSchemaCountLimitExceededException {
  export const filterSensitiveLog = (
    obj: CustomSchemaCountLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomSchemaCountLimitExceededException =>
    __isa(o, "CustomSchemaCountLimitExceededException");
}

export interface DeleteActivationRequest {
  __type?: "DeleteActivationRequest";
  /**
   * <p>The ID of the activation that you want to delete.</p>
   */
  ActivationId: string | undefined;
}

export namespace DeleteActivationRequest {
  export const filterSensitiveLog = (obj: DeleteActivationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteActivationRequest =>
    __isa(o, "DeleteActivationRequest");
}

export interface DeleteActivationResult {
  __type?: "DeleteActivationResult";
}

export namespace DeleteActivationResult {
  export const filterSensitiveLog = (obj: DeleteActivationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteActivationResult =>
    __isa(o, "DeleteActivationResult");
}

export interface DeleteAssociationRequest {
  __type?: "DeleteAssociationRequest";
  /**
   * <p>The association ID that you want to delete.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;
}

export namespace DeleteAssociationRequest {
  export const filterSensitiveLog = (obj: DeleteAssociationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAssociationRequest =>
    __isa(o, "DeleteAssociationRequest");
}

export interface DeleteAssociationResult {
  __type?: "DeleteAssociationResult";
}

export namespace DeleteAssociationResult {
  export const filterSensitiveLog = (obj: DeleteAssociationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAssociationResult =>
    __isa(o, "DeleteAssociationResult");
}

export interface DeleteDocumentRequest {
  __type?: "DeleteDocumentRequest";
  /**
   * <p>The version of the document that you want to delete. If not provided, all versions of the
   *    document are deleted.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Some SSM document types require that you specify a <code>Force</code> flag before you can
   *    delete the document. For example, you must specify a <code>Force</code> flag to delete a document
   *    of type <code>ApplicationConfigurationSchema</code>. You can restrict access to the
   *     <code>Force</code> flag in an AWS Identity and Access Management (IAM) policy.</p>
   */
  Force?: boolean;

  /**
   * <p>The name of the document.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version name of the document that you want to delete. If not provided, all versions of
   *    the document are deleted.</p>
   */
  VersionName?: string;
}

export namespace DeleteDocumentRequest {
  export const filterSensitiveLog = (obj: DeleteDocumentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDocumentRequest =>
    __isa(o, "DeleteDocumentRequest");
}

export interface DeleteDocumentResult {
  __type?: "DeleteDocumentResult";
}

export namespace DeleteDocumentResult {
  export const filterSensitiveLog = (obj: DeleteDocumentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDocumentResult =>
    __isa(o, "DeleteDocumentResult");
}

export interface DeleteInventoryRequest {
  __type?: "DeleteInventoryRequest";
  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>Use this option to view a summary of the deletion request without deleting any data or the
   *    data type. This option is useful when you only want to understand what will be deleted. Once you
   *    validate that the data to be deleted is what you intend to delete, you can run the same command
   *    without specifying the <code>DryRun</code> option.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Use the <code>SchemaDeleteOption</code> to delete a custom inventory type (schema). If you
   *    don't choose this option, the system only deletes existing inventory data associated with the
   *    custom inventory type. Choose one of the following options:</p>
   *          <p>DisableSchema: If you choose this option, the system ignores all inventory data for the
   *    specified version, and any earlier versions. To enable this schema again, you must call the
   *     <code>PutInventory</code> action for a version greater than the disabled version.</p>
   *          <p>DeleteSchema: This option deletes the specified custom type from the Inventory service. You
   *    can recreate the schema later, if you want.</p>
   */
  SchemaDeleteOption?: InventorySchemaDeleteOption | string;

  /**
   * <p>The name of the custom inventory type for which you want to delete either all previously
   *    collected data, or the inventory type itself. </p>
   */
  TypeName: string | undefined;
}

export namespace DeleteInventoryRequest {
  export const filterSensitiveLog = (obj: DeleteInventoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInventoryRequest =>
    __isa(o, "DeleteInventoryRequest");
}

export interface DeleteInventoryResult {
  __type?: "DeleteInventoryResult";
  /**
   * <p>Every <code>DeleteInventory</code> action is assigned a unique ID. This option returns a
   *    unique ID. You can use this ID to query the status of a delete operation. This option is useful
   *    for ensuring that a delete operation has completed before you begin other actions. </p>
   */
  DeletionId?: string;

  /**
   * <p>A summary of the delete operation. For more information about this summary, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-delete.html#sysman-inventory-delete-summary">Understanding
   *     the Delete Inventory Summary</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: InventoryDeletionSummary;

  /**
   * <p>The name of the inventory data type specified in the request.</p>
   */
  TypeName?: string;
}

export namespace DeleteInventoryResult {
  export const filterSensitiveLog = (obj: DeleteInventoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInventoryResult =>
    __isa(o, "DeleteInventoryResult");
}

export interface DeleteMaintenanceWindowRequest {
  __type?: "DeleteMaintenanceWindowRequest";
  /**
   * <p>The ID of the maintenance window to delete.</p>
   */
  WindowId: string | undefined;
}

export namespace DeleteMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: DeleteMaintenanceWindowRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMaintenanceWindowRequest =>
    __isa(o, "DeleteMaintenanceWindowRequest");
}

export interface DeleteMaintenanceWindowResult {
  __type?: "DeleteMaintenanceWindowResult";
  /**
   * <p>The ID of the deleted maintenance window.</p>
   */
  WindowId?: string;
}

export namespace DeleteMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: DeleteMaintenanceWindowResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMaintenanceWindowResult =>
    __isa(o, "DeleteMaintenanceWindowResult");
}

export interface DeleteParameterRequest {
  __type?: "DeleteParameterRequest";
  /**
   * <p>The name of the parameter to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteParameterRequest {
  export const filterSensitiveLog = (obj: DeleteParameterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteParameterRequest =>
    __isa(o, "DeleteParameterRequest");
}

export interface DeleteParameterResult {
  __type?: "DeleteParameterResult";
}

export namespace DeleteParameterResult {
  export const filterSensitiveLog = (obj: DeleteParameterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteParameterResult =>
    __isa(o, "DeleteParameterResult");
}

export interface DeleteParametersRequest {
  __type?: "DeleteParametersRequest";
  /**
   * <p>The names of the parameters to delete.</p>
   */
  Names: string[] | undefined;
}

export namespace DeleteParametersRequest {
  export const filterSensitiveLog = (obj: DeleteParametersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteParametersRequest =>
    __isa(o, "DeleteParametersRequest");
}

export interface DeleteParametersResult {
  __type?: "DeleteParametersResult";
  /**
   * <p>The names of the deleted parameters.</p>
   */
  DeletedParameters?: string[];

  /**
   * <p>The names of parameters that weren't deleted because the parameters are not valid.</p>
   */
  InvalidParameters?: string[];
}

export namespace DeleteParametersResult {
  export const filterSensitiveLog = (obj: DeleteParametersResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteParametersResult =>
    __isa(o, "DeleteParametersResult");
}

export interface DeletePatchBaselineRequest {
  __type?: "DeletePatchBaselineRequest";
  /**
   * <p>The ID of the patch baseline to delete.</p>
   */
  BaselineId: string | undefined;
}

export namespace DeletePatchBaselineRequest {
  export const filterSensitiveLog = (obj: DeletePatchBaselineRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePatchBaselineRequest =>
    __isa(o, "DeletePatchBaselineRequest");
}

export interface DeletePatchBaselineResult {
  __type?: "DeletePatchBaselineResult";
  /**
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;
}

export namespace DeletePatchBaselineResult {
  export const filterSensitiveLog = (obj: DeletePatchBaselineResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePatchBaselineResult =>
    __isa(o, "DeletePatchBaselineResult");
}

export interface DeleteResourceDataSyncRequest {
  __type?: "DeleteResourceDataSyncRequest";
  /**
   * <p>The name of the configuration to delete.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>Specify the type of resource data sync to delete.</p>
   */
  SyncType?: string;
}

export namespace DeleteResourceDataSyncRequest {
  export const filterSensitiveLog = (
    obj: DeleteResourceDataSyncRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourceDataSyncRequest =>
    __isa(o, "DeleteResourceDataSyncRequest");
}

export interface DeleteResourceDataSyncResult {
  __type?: "DeleteResourceDataSyncResult";
}

export namespace DeleteResourceDataSyncResult {
  export const filterSensitiveLog = (
    obj: DeleteResourceDataSyncResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourceDataSyncResult =>
    __isa(o, "DeleteResourceDataSyncResult");
}

export interface DeregisterManagedInstanceRequest {
  __type?: "DeregisterManagedInstanceRequest";
  /**
   * <p>The ID assigned to the managed instance when you registered it using the activation process.
   *   </p>
   */
  InstanceId: string | undefined;
}

export namespace DeregisterManagedInstanceRequest {
  export const filterSensitiveLog = (
    obj: DeregisterManagedInstanceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterManagedInstanceRequest =>
    __isa(o, "DeregisterManagedInstanceRequest");
}

export interface DeregisterManagedInstanceResult {
  __type?: "DeregisterManagedInstanceResult";
}

export namespace DeregisterManagedInstanceResult {
  export const filterSensitiveLog = (
    obj: DeregisterManagedInstanceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterManagedInstanceResult =>
    __isa(o, "DeregisterManagedInstanceResult");
}

export interface DeregisterPatchBaselineForPatchGroupRequest {
  __type?: "DeregisterPatchBaselineForPatchGroupRequest";
  /**
   * <p>The ID of the patch baseline to deregister the patch group from.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch group that should be deregistered from the patch baseline.</p>
   */
  PatchGroup: string | undefined;
}

export namespace DeregisterPatchBaselineForPatchGroupRequest {
  export const filterSensitiveLog = (
    obj: DeregisterPatchBaselineForPatchGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeregisterPatchBaselineForPatchGroupRequest =>
    __isa(o, "DeregisterPatchBaselineForPatchGroupRequest");
}

export interface DeregisterPatchBaselineForPatchGroupResult {
  __type?: "DeregisterPatchBaselineForPatchGroupResult";
  /**
   * <p>The ID of the patch baseline the patch group was deregistered from.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group deregistered from the patch baseline.</p>
   */
  PatchGroup?: string;
}

export namespace DeregisterPatchBaselineForPatchGroupResult {
  export const filterSensitiveLog = (
    obj: DeregisterPatchBaselineForPatchGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeregisterPatchBaselineForPatchGroupResult =>
    __isa(o, "DeregisterPatchBaselineForPatchGroupResult");
}

export interface DeregisterTargetFromMaintenanceWindowRequest {
  __type?: "DeregisterTargetFromMaintenanceWindowRequest";
  /**
   * <p>The system checks if the target is being referenced by a task. If the target is being
   *    referenced, the system returns an error and does not deregister the target from the maintenance
   *    window.</p>
   */
  Safe?: boolean;

  /**
   * <p>The ID of the maintenance window the target should be removed from.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The ID of the target definition to remove.</p>
   */
  WindowTargetId: string | undefined;
}

export namespace DeregisterTargetFromMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: DeregisterTargetFromMaintenanceWindowRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeregisterTargetFromMaintenanceWindowRequest =>
    __isa(o, "DeregisterTargetFromMaintenanceWindowRequest");
}

export interface DeregisterTargetFromMaintenanceWindowResult {
  __type?: "DeregisterTargetFromMaintenanceWindowResult";
  /**
   * <p>The ID of the maintenance window the target was removed from.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the removed target definition.</p>
   */
  WindowTargetId?: string;
}

export namespace DeregisterTargetFromMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: DeregisterTargetFromMaintenanceWindowResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeregisterTargetFromMaintenanceWindowResult =>
    __isa(o, "DeregisterTargetFromMaintenanceWindowResult");
}

export interface DeregisterTaskFromMaintenanceWindowRequest {
  __type?: "DeregisterTaskFromMaintenanceWindowRequest";
  /**
   * <p>The ID of the maintenance window the task should be removed from.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The ID of the task to remove from the maintenance window.</p>
   */
  WindowTaskId: string | undefined;
}

export namespace DeregisterTaskFromMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: DeregisterTaskFromMaintenanceWindowRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeregisterTaskFromMaintenanceWindowRequest =>
    __isa(o, "DeregisterTaskFromMaintenanceWindowRequest");
}

export interface DeregisterTaskFromMaintenanceWindowResult {
  __type?: "DeregisterTaskFromMaintenanceWindowResult";
  /**
   * <p>The ID of the maintenance window the task was removed from.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the task removed from the maintenance window.</p>
   */
  WindowTaskId?: string;
}

export namespace DeregisterTaskFromMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: DeregisterTaskFromMaintenanceWindowResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterTaskFromMaintenanceWindowResult =>
    __isa(o, "DeregisterTaskFromMaintenanceWindowResult");
}

/**
 * <p>Filter for the DescribeActivation API.</p>
 */
export interface DescribeActivationsFilter {
  __type?: "DescribeActivationsFilter";
  /**
   * <p>The name of the filter.</p>
   */
  FilterKey?: DescribeActivationsFilterKeys | string;

  /**
   * <p>The filter values.</p>
   */
  FilterValues?: string[];
}

export namespace DescribeActivationsFilter {
  export const filterSensitiveLog = (obj: DescribeActivationsFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeActivationsFilter =>
    __isa(o, "DescribeActivationsFilter");
}

export enum DescribeActivationsFilterKeys {
  ACTIVATION_IDS = "ActivationIds",
  DEFAULT_INSTANCE_NAME = "DefaultInstanceName",
  IAM_ROLE = "IamRole"
}

export interface DescribeActivationsRequest {
  __type?: "DescribeActivationsRequest";
  /**
   * <p>A filter to view information about your activations.</p>
   */
  Filters?: DescribeActivationsFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace DescribeActivationsRequest {
  export const filterSensitiveLog = (obj: DescribeActivationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeActivationsRequest =>
    __isa(o, "DescribeActivationsRequest");
}

export interface DescribeActivationsResult {
  __type?: "DescribeActivationsResult";
  /**
   * <p>A list of activations for your AWS account.</p>
   */
  ActivationList?: Activation[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results. </p>
   */
  NextToken?: string;
}

export namespace DescribeActivationsResult {
  export const filterSensitiveLog = (obj: DescribeActivationsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeActivationsResult =>
    __isa(o, "DescribeActivationsResult");
}

export interface DescribeAssociationExecutionsRequest {
  __type?: "DescribeAssociationExecutionsRequest";
  /**
   * <p>The association ID for which you want to view execution history details.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p>
   *          <p>ExecutionId (EQUAL)</p>
   *          <p>Status (EQUAL)</p>
   *          <p>CreatedTime (EQUAL, GREATER_THAN, LESS_THAN)</p>
   */
  Filters?: AssociationExecutionFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace DescribeAssociationExecutionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeAssociationExecutionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAssociationExecutionsRequest =>
    __isa(o, "DescribeAssociationExecutionsRequest");
}

export interface DescribeAssociationExecutionsResult {
  __type?: "DescribeAssociationExecutionsResult";
  /**
   * <p>A list of the executions for the specified association ID.</p>
   */
  AssociationExecutions?: AssociationExecution[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAssociationExecutionsResult {
  export const filterSensitiveLog = (
    obj: DescribeAssociationExecutionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAssociationExecutionsResult =>
    __isa(o, "DescribeAssociationExecutionsResult");
}

export interface DescribeAssociationExecutionTargetsRequest {
  __type?: "DescribeAssociationExecutionTargetsRequest";
  /**
   * <p>The association ID that includes the execution for which you want to view details.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>The execution ID for which you want to view details.</p>
   */
  ExecutionId: string | undefined;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p>
   *          <p>Status (EQUAL)</p>
   *          <p>ResourceId (EQUAL)</p>
   *          <p>ResourceType (EQUAL)</p>
   */
  Filters?: AssociationExecutionTargetsFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace DescribeAssociationExecutionTargetsRequest {
  export const filterSensitiveLog = (
    obj: DescribeAssociationExecutionTargetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeAssociationExecutionTargetsRequest =>
    __isa(o, "DescribeAssociationExecutionTargetsRequest");
}

export interface DescribeAssociationExecutionTargetsResult {
  __type?: "DescribeAssociationExecutionTargetsResult";
  /**
   * <p>Information about the execution.</p>
   */
  AssociationExecutionTargets?: AssociationExecutionTarget[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAssociationExecutionTargetsResult {
  export const filterSensitiveLog = (
    obj: DescribeAssociationExecutionTargetsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAssociationExecutionTargetsResult =>
    __isa(o, "DescribeAssociationExecutionTargetsResult");
}

export interface DescribeAssociationRequest {
  __type?: "DescribeAssociationRequest";
  /**
   * <p>The association ID for which you want information.</p>
   */
  AssociationId?: string;

  /**
   * <p>Specify the association version to retrieve. To view the latest version, either specify
   *     <code>$LATEST</code> for this parameter, or omit this parameter. To view a list of all
   *    associations for an instance, use <a>ListAssociations</a>. To get a list of versions
   *    for a specific association, use <a>ListAssociationVersions</a>. </p>
   */
  AssociationVersion?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;
}

export namespace DescribeAssociationRequest {
  export const filterSensitiveLog = (obj: DescribeAssociationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAssociationRequest =>
    __isa(o, "DescribeAssociationRequest");
}

export interface DescribeAssociationResult {
  __type?: "DescribeAssociationResult";
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace DescribeAssociationResult {
  export const filterSensitiveLog = (obj: DescribeAssociationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAssociationResult =>
    __isa(o, "DescribeAssociationResult");
}

export interface DescribeAutomationExecutionsRequest {
  __type?: "DescribeAutomationExecutionsRequest";
  /**
   * <p>Filters used to limit the scope of executions that are requested.</p>
   */
  Filters?: AutomationExecutionFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeAutomationExecutionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeAutomationExecutionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutomationExecutionsRequest =>
    __isa(o, "DescribeAutomationExecutionsRequest");
}

export interface DescribeAutomationExecutionsResult {
  __type?: "DescribeAutomationExecutionsResult";
  /**
   * <p>The list of details about each automation execution which has occurred which matches the
   *    filter specification, if any.</p>
   */
  AutomationExecutionMetadataList?: AutomationExecutionMetadata[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeAutomationExecutionsResult {
  export const filterSensitiveLog = (
    obj: DescribeAutomationExecutionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutomationExecutionsResult =>
    __isa(o, "DescribeAutomationExecutionsResult");
}

export interface DescribeAutomationStepExecutionsRequest {
  __type?: "DescribeAutomationStepExecutionsRequest";
  /**
   * <p>The Automation execution ID for which you want step execution descriptions.</p>
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>One or more filters to limit the number of step executions returned by the request.</p>
   */
  Filters?: StepExecutionFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>A boolean that indicates whether to list step executions in reverse order by start time. The
   *    default value is false.</p>
   */
  ReverseOrder?: boolean;
}

export namespace DescribeAutomationStepExecutionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeAutomationStepExecutionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutomationStepExecutionsRequest =>
    __isa(o, "DescribeAutomationStepExecutionsRequest");
}

export interface DescribeAutomationStepExecutionsResult {
  __type?: "DescribeAutomationStepExecutionsResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of details about the current state of all steps that make up an execution.</p>
   */
  StepExecutions?: StepExecution[];
}

export namespace DescribeAutomationStepExecutionsResult {
  export const filterSensitiveLog = (
    obj: DescribeAutomationStepExecutionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutomationStepExecutionsResult =>
    __isa(o, "DescribeAutomationStepExecutionsResult");
}

export interface DescribeAvailablePatchesRequest {
  __type?: "DescribeAvailablePatchesRequest";
  /**
   * <p>Filters used to scope down the returned patches.</p>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeAvailablePatchesRequest {
  export const filterSensitiveLog = (
    obj: DescribeAvailablePatchesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAvailablePatchesRequest =>
    __isa(o, "DescribeAvailablePatchesRequest");
}

export interface DescribeAvailablePatchesResult {
  __type?: "DescribeAvailablePatchesResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of patches. Each entry in the array is a patch structure.</p>
   */
  Patches?: Patch[];
}

export namespace DescribeAvailablePatchesResult {
  export const filterSensitiveLog = (
    obj: DescribeAvailablePatchesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAvailablePatchesResult =>
    __isa(o, "DescribeAvailablePatchesResult");
}

export interface DescribeDocumentPermissionRequest {
  __type?: "DescribeDocumentPermissionRequest";
  /**
   * <p>The name of the document for which you are the owner.</p>
   */
  Name: string | undefined;

  /**
   * <p>The permission type for the document. The permission type can be
   *    <i>Share</i>.</p>
   */
  PermissionType: DocumentPermissionType | string | undefined;
}

export namespace DescribeDocumentPermissionRequest {
  export const filterSensitiveLog = (
    obj: DescribeDocumentPermissionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDocumentPermissionRequest =>
    __isa(o, "DescribeDocumentPermissionRequest");
}

export interface DescribeDocumentPermissionResponse {
  __type?: "DescribeDocumentPermissionResponse";
  /**
   * <p>The account IDs that have permission to use this document. The ID can be either an AWS
   *    account or <i>All</i>.</p>
   */
  AccountIds?: string[];

  /**
   * <p>A list of of AWS accounts where the current document is shared and the version shared with
   *    each account.</p>
   */
  AccountSharingInfoList?: AccountSharingInfo[];
}

export namespace DescribeDocumentPermissionResponse {
  export const filterSensitiveLog = (
    obj: DescribeDocumentPermissionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDocumentPermissionResponse =>
    __isa(o, "DescribeDocumentPermissionResponse");
}

export interface DescribeDocumentRequest {
  __type?: "DescribeDocumentRequest";
  /**
   * <p>The document version for which you want information. Can be a specific version or the
   *    default version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace DescribeDocumentRequest {
  export const filterSensitiveLog = (obj: DescribeDocumentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDocumentRequest =>
    __isa(o, "DescribeDocumentRequest");
}

export interface DescribeDocumentResult {
  __type?: "DescribeDocumentResult";
  /**
   * <p>Information about the Systems Manager document.</p>
   */
  Document?: DocumentDescription;
}

export namespace DescribeDocumentResult {
  export const filterSensitiveLog = (obj: DescribeDocumentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDocumentResult =>
    __isa(o, "DescribeDocumentResult");
}

export interface DescribeEffectiveInstanceAssociationsRequest {
  __type?: "DescribeEffectiveInstanceAssociationsRequest";
  /**
   * <p>The instance ID for which you want to view all associations.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeEffectiveInstanceAssociationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeEffectiveInstanceAssociationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEffectiveInstanceAssociationsRequest =>
    __isa(o, "DescribeEffectiveInstanceAssociationsRequest");
}

export interface DescribeEffectiveInstanceAssociationsResult {
  __type?: "DescribeEffectiveInstanceAssociationsResult";
  /**
   * <p>The associations for the requested instance.</p>
   */
  Associations?: InstanceAssociation[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeEffectiveInstanceAssociationsResult {
  export const filterSensitiveLog = (
    obj: DescribeEffectiveInstanceAssociationsResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEffectiveInstanceAssociationsResult =>
    __isa(o, "DescribeEffectiveInstanceAssociationsResult");
}

export interface DescribeEffectivePatchesForPatchBaselineRequest {
  __type?: "DescribeEffectivePatchesForPatchBaselineRequest";
  /**
   * <p>The ID of the patch baseline to retrieve the effective patches for.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeEffectivePatchesForPatchBaselineRequest {
  export const filterSensitiveLog = (
    obj: DescribeEffectivePatchesForPatchBaselineRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEffectivePatchesForPatchBaselineRequest =>
    __isa(o, "DescribeEffectivePatchesForPatchBaselineRequest");
}

export interface DescribeEffectivePatchesForPatchBaselineResult {
  __type?: "DescribeEffectivePatchesForPatchBaselineResult";
  /**
   * <p>An array of patches and patch status.</p>
   */
  EffectivePatches?: EffectivePatch[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeEffectivePatchesForPatchBaselineResult {
  export const filterSensitiveLog = (
    obj: DescribeEffectivePatchesForPatchBaselineResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEffectivePatchesForPatchBaselineResult =>
    __isa(o, "DescribeEffectivePatchesForPatchBaselineResult");
}

export interface DescribeInstanceAssociationsStatusRequest {
  __type?: "DescribeInstanceAssociationsStatusRequest";
  /**
   * <p>The instance IDs for which you want association status information.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceAssociationsStatusRequest {
  export const filterSensitiveLog = (
    obj: DescribeInstanceAssociationsStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstanceAssociationsStatusRequest =>
    __isa(o, "DescribeInstanceAssociationsStatusRequest");
}

export interface DescribeInstanceAssociationsStatusResult {
  __type?: "DescribeInstanceAssociationsStatusResult";
  /**
   * <p>Status information about the association.</p>
   */
  InstanceAssociationStatusInfos?: InstanceAssociationStatusInfo[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceAssociationsStatusResult {
  export const filterSensitiveLog = (
    obj: DescribeInstanceAssociationsStatusResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstanceAssociationsStatusResult =>
    __isa(o, "DescribeInstanceAssociationsStatusResult");
}

export interface DescribeInstanceInformationRequest {
  __type?: "DescribeInstanceInformationRequest";
  /**
   * <p>One or more filters. Use a filter to return a more specific list of instances. You can
   *    filter on Amazon EC2 tag. Specify tags by using a key-value mapping.</p>
   */
  Filters?: InstanceInformationStringFilter[];

  /**
   * <p>This is a legacy method. We recommend that you don't use this method. Instead, use the <a>InstanceInformationFilter</a> action. The <code>InstanceInformationFilter</code> action
   *    enables you to return instance information by using tags that are specified as a key-value
   *    mapping. </p>
   *          <p>If you do use this method, then you can't use the <code>InstanceInformationFilter</code>
   *    action. Using this method and the <code>InstanceInformationFilter</code> action causes an
   *    exception error. </p>
   */
  InstanceInformationFilterList?: InstanceInformationFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceInformationRequest {
  export const filterSensitiveLog = (
    obj: DescribeInstanceInformationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstanceInformationRequest =>
    __isa(o, "DescribeInstanceInformationRequest");
}

export interface DescribeInstanceInformationResult {
  __type?: "DescribeInstanceInformationResult";
  /**
   * <p>The instance information list.</p>
   */
  InstanceInformationList?: InstanceInformation[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty. </p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceInformationResult {
  export const filterSensitiveLog = (
    obj: DescribeInstanceInformationResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstanceInformationResult =>
    __isa(o, "DescribeInstanceInformationResult");
}

export interface DescribeInstancePatchesRequest {
  __type?: "DescribeInstancePatchesRequest";
  /**
   * <p>An array of structures. Each entry in the array is a structure containing a Key, Value
   *    combination. Valid values for Key are <code>Classification</code> | <code>KBId</code> |
   *     <code>Severity</code> | <code>State</code>.</p>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The ID of the instance whose patch state information should be retrieved.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancePatchesRequest {
  export const filterSensitiveLog = (
    obj: DescribeInstancePatchesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstancePatchesRequest =>
    __isa(o, "DescribeInstancePatchesRequest");
}

export interface DescribeInstancePatchesResult {
  __type?: "DescribeInstancePatchesResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <p>Title (string)</p>
   *          <p>KBId (string)</p>
   *          <p>Classification (string)</p>
   *          <p>Severity (string)</p>
   *          <p>State (string, such as "INSTALLED" or "FAILED")</p>
   *          <p>InstalledTime (DateTime)</p>
   *          <p>InstalledBy (string)</p>
   */
  Patches?: PatchComplianceData[];
}

export namespace DescribeInstancePatchesResult {
  export const filterSensitiveLog = (
    obj: DescribeInstancePatchesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstancePatchesResult =>
    __isa(o, "DescribeInstancePatchesResult");
}

export interface DescribeInstancePatchStatesForPatchGroupRequest {
  __type?: "DescribeInstancePatchStatesForPatchGroupRequest";
  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <p>Key (string between 1 and 200 characters)</p>
   *          <p> Values (array containing a single string)</p>
   *          <p> Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")</p>
   */
  Filters?: InstancePatchStateFilter[];

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the patch group for which the patch state information should be
   *    retrieved.</p>
   */
  PatchGroup: string | undefined;
}

export namespace DescribeInstancePatchStatesForPatchGroupRequest {
  export const filterSensitiveLog = (
    obj: DescribeInstancePatchStatesForPatchGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeInstancePatchStatesForPatchGroupRequest =>
    __isa(o, "DescribeInstancePatchStatesForPatchGroupRequest");
}

export interface DescribeInstancePatchStatesForPatchGroupResult {
  __type?: "DescribeInstancePatchStatesForPatchGroupResult";
  /**
   * <p>The high-level patch state for the requested instances. </p>
   */
  InstancePatchStates?: InstancePatchState[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancePatchStatesForPatchGroupResult {
  export const filterSensitiveLog = (
    obj: DescribeInstancePatchStatesForPatchGroupResult
  ): any => ({
    ...obj,
    ...(obj.InstancePatchStates && {
      InstancePatchStates: obj.InstancePatchStates.map(item =>
        InstancePatchState.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (
    o: any
  ): o is DescribeInstancePatchStatesForPatchGroupResult =>
    __isa(o, "DescribeInstancePatchStatesForPatchGroupResult");
}

export interface DescribeInstancePatchStatesRequest {
  __type?: "DescribeInstancePatchStatesRequest";
  /**
   * <p>The ID of the instance whose patch state information should be retrieved.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>The maximum number of instances to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancePatchStatesRequest {
  export const filterSensitiveLog = (
    obj: DescribeInstancePatchStatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstancePatchStatesRequest =>
    __isa(o, "DescribeInstancePatchStatesRequest");
}

export interface DescribeInstancePatchStatesResult {
  __type?: "DescribeInstancePatchStatesResult";
  /**
   * <p>The high-level patch state for the requested instances.</p>
   */
  InstancePatchStates?: InstancePatchState[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancePatchStatesResult {
  export const filterSensitiveLog = (
    obj: DescribeInstancePatchStatesResult
  ): any => ({
    ...obj,
    ...(obj.InstancePatchStates && {
      InstancePatchStates: obj.InstancePatchStates.map(item =>
        InstancePatchState.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeInstancePatchStatesResult =>
    __isa(o, "DescribeInstancePatchStatesResult");
}

export interface DescribeInventoryDeletionsRequest {
  __type?: "DescribeInventoryDeletionsRequest";
  /**
   * <p>Specify the delete inventory ID for which you want information. This ID was returned by the
   *     <code>DeleteInventory</code> action.</p>
   */
  DeletionId?: string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace DescribeInventoryDeletionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeInventoryDeletionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInventoryDeletionsRequest =>
    __isa(o, "DescribeInventoryDeletionsRequest");
}

export interface DescribeInventoryDeletionsResult {
  __type?: "DescribeInventoryDeletionsResult";
  /**
   * <p>A list of status items for deleted inventory.</p>
   */
  InventoryDeletions?: InventoryDeletionStatusItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInventoryDeletionsResult {
  export const filterSensitiveLog = (
    obj: DescribeInventoryDeletionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInventoryDeletionsResult =>
    __isa(o, "DescribeInventoryDeletionsResult");
}

export interface DescribeMaintenanceWindowExecutionsRequest {
  __type?: "DescribeMaintenanceWindowExecutionsRequest";
  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <p>Key (string, between 1 and 128 characters)</p>
   *          <p>Values (array of strings, each string is between 1 and 256 characters)</p>
   *          <p>The supported Keys are ExecutedBefore and ExecutedAfter with the value being a date/time
   *    string such as 2016-11-04T05:00:00Z.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the maintenance window whose executions should be retrieved.</p>
   */
  WindowId: string | undefined;
}

export namespace DescribeMaintenanceWindowExecutionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowExecutionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeMaintenanceWindowExecutionsRequest =>
    __isa(o, "DescribeMaintenanceWindowExecutionsRequest");
}

export interface DescribeMaintenanceWindowExecutionsResult {
  __type?: "DescribeMaintenanceWindowExecutionsResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the maintenance window executions.</p>
   */
  WindowExecutions?: MaintenanceWindowExecution[];
}

export namespace DescribeMaintenanceWindowExecutionsResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowExecutionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowExecutionsResult =>
    __isa(o, "DescribeMaintenanceWindowExecutionsResult");
}

export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  __type?: "DescribeMaintenanceWindowExecutionTaskInvocationsRequest";
  /**
   * <p>Optional filters used to scope down the returned task invocations. The supported filter key
   *    is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT,
   *    CANCELLING, and CANCELLED.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved.</p>
   */
  TaskId: string | undefined;

  /**
   * <p>The ID of the maintenance window execution the task is part of.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowExecutionTaskInvocationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeMaintenanceWindowExecutionTaskInvocationsRequest =>
    __isa(o, "DescribeMaintenanceWindowExecutionTaskInvocationsRequest");
}

export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  __type?: "DescribeMaintenanceWindowExecutionTaskInvocationsResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the task invocation results per invocation.</p>
   */
  WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[];
}

export namespace DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowExecutionTaskInvocationsResult
  ): any => ({
    ...obj,
    ...(obj.WindowExecutionTaskInvocationIdentities && {
      WindowExecutionTaskInvocationIdentities: obj.WindowExecutionTaskInvocationIdentities.map(
        item =>
          MaintenanceWindowExecutionTaskInvocationIdentity.filterSensitiveLog(
            item
          )
      )
    })
  });
  export const isa = (
    o: any
  ): o is DescribeMaintenanceWindowExecutionTaskInvocationsResult =>
    __isa(o, "DescribeMaintenanceWindowExecutionTaskInvocationsResult");
}

export interface DescribeMaintenanceWindowExecutionTasksRequest {
  __type?: "DescribeMaintenanceWindowExecutionTasksRequest";
  /**
   * <p>Optional filters used to scope down the returned tasks. The supported filter key is STATUS
   *    with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, and
   *    CANCELLED. </p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the maintenance window execution whose task executions should be retrieved.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace DescribeMaintenanceWindowExecutionTasksRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowExecutionTasksRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeMaintenanceWindowExecutionTasksRequest =>
    __isa(o, "DescribeMaintenanceWindowExecutionTasksRequest");
}

export interface DescribeMaintenanceWindowExecutionTasksResult {
  __type?: "DescribeMaintenanceWindowExecutionTasksResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the task executions.</p>
   */
  WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];
}

export namespace DescribeMaintenanceWindowExecutionTasksResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowExecutionTasksResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeMaintenanceWindowExecutionTasksResult =>
    __isa(o, "DescribeMaintenanceWindowExecutionTasksResult");
}

export interface DescribeMaintenanceWindowScheduleRequest {
  __type?: "DescribeMaintenanceWindowScheduleRequest";
  /**
   * <p>Filters used to limit the range of results. For example, you can limit maintenance window
   *    executions to only those scheduled before or after a certain date and time.</p>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The type of resource you want to retrieve information about. For example, "INSTANCE".</p>
   */
  ResourceType?: MaintenanceWindowResourceType | string;

  /**
   * <p>The instance ID or key/value pair to retrieve information about.</p>
   */
  Targets?: Target[];

  /**
   * <p>The ID of the maintenance window to retrieve information about.</p>
   */
  WindowId?: string;
}

export namespace DescribeMaintenanceWindowScheduleRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowScheduleRequest =>
    __isa(o, "DescribeMaintenanceWindowScheduleRequest");
}

export interface DescribeMaintenanceWindowScheduleResult {
  __type?: "DescribeMaintenanceWindowScheduleResult";
  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;

  /**
   * <p>Information about maintenance window executions scheduled for the specified time
   *    range.</p>
   */
  ScheduledWindowExecutions?: ScheduledWindowExecution[];
}

export namespace DescribeMaintenanceWindowScheduleResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowScheduleResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowScheduleResult =>
    __isa(o, "DescribeMaintenanceWindowScheduleResult");
}

export interface DescribeMaintenanceWindowsForTargetRequest {
  __type?: "DescribeMaintenanceWindowsForTargetRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The type of resource you want to retrieve information about. For example, "INSTANCE".</p>
   */
  ResourceType: MaintenanceWindowResourceType | string | undefined;

  /**
   * <p>The instance ID or key/value pair to retrieve information about.</p>
   */
  Targets: Target[] | undefined;
}

export namespace DescribeMaintenanceWindowsForTargetRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowsForTargetRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeMaintenanceWindowsForTargetRequest =>
    __isa(o, "DescribeMaintenanceWindowsForTargetRequest");
}

export interface DescribeMaintenanceWindowsForTargetResult {
  __type?: "DescribeMaintenanceWindowsForTargetResult";
  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the maintenance window targets and tasks an instance is associated
   *    with.</p>
   */
  WindowIdentities?: MaintenanceWindowIdentityForTarget[];
}

export namespace DescribeMaintenanceWindowsForTargetResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowsForTargetResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowsForTargetResult =>
    __isa(o, "DescribeMaintenanceWindowsForTargetResult");
}

export interface DescribeMaintenanceWindowsRequest {
  __type?: "DescribeMaintenanceWindowsRequest";
  /**
   * <p>Optional filters used to narrow down the scope of the returned maintenance windows.
   *    Supported filter keys are <b>Name</b> and <b>Enabled</b>.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeMaintenanceWindowsRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowsRequest =>
    __isa(o, "DescribeMaintenanceWindowsRequest");
}

export interface DescribeMaintenanceWindowsResult {
  __type?: "DescribeMaintenanceWindowsResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the maintenance windows.</p>
   */
  WindowIdentities?: MaintenanceWindowIdentity[];
}

export namespace DescribeMaintenanceWindowsResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowsResult
  ): any => ({
    ...obj,
    ...(obj.WindowIdentities && {
      WindowIdentities: obj.WindowIdentities.map(item =>
        MaintenanceWindowIdentity.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowsResult =>
    __isa(o, "DescribeMaintenanceWindowsResult");
}

export interface DescribeMaintenanceWindowTargetsRequest {
  __type?: "DescribeMaintenanceWindowTargetsRequest";
  /**
   * <p>Optional filters that can be used to narrow down the scope of the returned window targets.
   *    The supported filter keys are Type, WindowTargetId and OwnerInformation.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the maintenance window whose targets should be retrieved.</p>
   */
  WindowId: string | undefined;
}

export namespace DescribeMaintenanceWindowTargetsRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowTargetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowTargetsRequest =>
    __isa(o, "DescribeMaintenanceWindowTargetsRequest");
}

export interface DescribeMaintenanceWindowTargetsResult {
  __type?: "DescribeMaintenanceWindowTargetsResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the targets in the maintenance window.</p>
   */
  Targets?: MaintenanceWindowTarget[];
}

export namespace DescribeMaintenanceWindowTargetsResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowTargetsResult
  ): any => ({
    ...obj,
    ...(obj.Targets && {
      Targets: obj.Targets.map(item =>
        MaintenanceWindowTarget.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowTargetsResult =>
    __isa(o, "DescribeMaintenanceWindowTargetsResult");
}

export interface DescribeMaintenanceWindowTasksRequest {
  __type?: "DescribeMaintenanceWindowTasksRequest";
  /**
   * <p>Optional filters used to narrow down the scope of the returned tasks. The supported filter
   *    keys are WindowTaskId, TaskArn, Priority, and TaskType.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the maintenance window whose tasks should be retrieved.</p>
   */
  WindowId: string | undefined;
}

export namespace DescribeMaintenanceWindowTasksRequest {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowTasksRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowTasksRequest =>
    __isa(o, "DescribeMaintenanceWindowTasksRequest");
}

export interface DescribeMaintenanceWindowTasksResult {
  __type?: "DescribeMaintenanceWindowTasksResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the tasks in the maintenance window.</p>
   */
  Tasks?: MaintenanceWindowTask[];
}

export namespace DescribeMaintenanceWindowTasksResult {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceWindowTasksResult
  ): any => ({
    ...obj,
    ...(obj.Tasks && {
      Tasks: obj.Tasks.map(item =>
        MaintenanceWindowTask.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeMaintenanceWindowTasksResult =>
    __isa(o, "DescribeMaintenanceWindowTasksResult");
}

export interface DescribeOpsItemsRequest {
  __type?: "DescribeOpsItemsRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters to limit the reponse.</p>
   *          <ul>
   *             <li>
   *                <p>Key: CreatedTime</p>
   *                <p>Operations: GreaterThan, LessThan</p>
   *             </li>
   *             <li>
   *                <p>Key: LastModifiedBy</p>
   *                <p>Operations: Contains, Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: LastModifiedTime</p>
   *                <p>Operations: GreaterThan, LessThan</p>
   *             </li>
   *             <li>
   *                <p>Key: Priority</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: Source</p>
   *                <p>Operations: Contains, Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: Status</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: Title</p>
   *                <p>Operations: Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalData*</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalDataKey</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalDataValue</p>
   *                <p>Operations: Equals, Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: OpsItemId</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: ResourceId</p>
   *                <p>Operations: Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: AutomationId</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *          </ul>
   *          <p>*If you filter the response by using the OperationalData operator, specify a key-value pair
   *    by using the following JSON format: {"key":"key_name","value":"a_value"}</p>
   */
  OpsItemFilters?: OpsItemFilter[];
}

export namespace DescribeOpsItemsRequest {
  export const filterSensitiveLog = (obj: DescribeOpsItemsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOpsItemsRequest =>
    __isa(o, "DescribeOpsItemsRequest");
}

export interface DescribeOpsItemsResponse {
  __type?: "DescribeOpsItemsResponse";
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of OpsItems.</p>
   */
  OpsItemSummaries?: OpsItemSummary[];
}

export namespace DescribeOpsItemsResponse {
  export const filterSensitiveLog = (obj: DescribeOpsItemsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOpsItemsResponse =>
    __isa(o, "DescribeOpsItemsResponse");
}

export interface DescribeParametersRequest {
  __type?: "DescribeParametersRequest";
  /**
   * <p>This data type is deprecated. Instead, use <code>ParameterFilters</code>.</p>
   */
  Filters?: ParametersFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>Filters to limit the request results.</p>
   */
  ParameterFilters?: ParameterStringFilter[];
}

export namespace DescribeParametersRequest {
  export const filterSensitiveLog = (obj: DescribeParametersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeParametersRequest =>
    __isa(o, "DescribeParametersRequest");
}

export interface DescribeParametersResult {
  __type?: "DescribeParametersResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Parameters returned by the request.</p>
   */
  Parameters?: ParameterMetadata[];
}

export namespace DescribeParametersResult {
  export const filterSensitiveLog = (obj: DescribeParametersResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeParametersResult =>
    __isa(o, "DescribeParametersResult");
}

export interface DescribePatchBaselinesRequest {
  __type?: "DescribePatchBaselinesRequest";
  /**
   * <p>Each element in the array is a structure containing: </p>
   *          <p>Key: (string, "NAME_PREFIX" or "OWNER")</p>
   *          <p>Value: (array of strings, exactly 1 entry, between 1 and 255 characters)</p>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of patch baselines to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribePatchBaselinesRequest {
  export const filterSensitiveLog = (
    obj: DescribePatchBaselinesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchBaselinesRequest =>
    __isa(o, "DescribePatchBaselinesRequest");
}

export interface DescribePatchBaselinesResult {
  __type?: "DescribePatchBaselinesResult";
  /**
   * <p>An array of PatchBaselineIdentity elements.</p>
   */
  BaselineIdentities?: PatchBaselineIdentity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribePatchBaselinesResult {
  export const filterSensitiveLog = (
    obj: DescribePatchBaselinesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchBaselinesResult =>
    __isa(o, "DescribePatchBaselinesResult");
}

export interface DescribePatchGroupsRequest {
  __type?: "DescribePatchGroupsRequest";
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of patch groups to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribePatchGroupsRequest {
  export const filterSensitiveLog = (obj: DescribePatchGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchGroupsRequest =>
    __isa(o, "DescribePatchGroupsRequest");
}

export interface DescribePatchGroupsResult {
  __type?: "DescribePatchGroupsResult";
  /**
   * <p>Each entry in the array contains:</p>
   *          <p>PatchGroup: string (between 1 and 256 characters, Regex:
   *    ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$)</p>
   *          <p>PatchBaselineIdentity: A PatchBaselineIdentity element. </p>
   */
  Mappings?: PatchGroupPatchBaselineMapping[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribePatchGroupsResult {
  export const filterSensitiveLog = (obj: DescribePatchGroupsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchGroupsResult =>
    __isa(o, "DescribePatchGroupsResult");
}

export interface DescribePatchGroupStateRequest {
  __type?: "DescribePatchGroupStateRequest";
  /**
   * <p>The name of the patch group whose patch snapshot should be retrieved.</p>
   */
  PatchGroup: string | undefined;
}

export namespace DescribePatchGroupStateRequest {
  export const filterSensitiveLog = (
    obj: DescribePatchGroupStateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchGroupStateRequest =>
    __isa(o, "DescribePatchGroupStateRequest");
}

export interface DescribePatchGroupStateResult {
  __type?: "DescribePatchGroupStateResult";
  /**
   * <p>The number of instances in the patch group.</p>
   */
  Instances?: number;

  /**
   * <p>The number of instances with patches from the patch baseline that failed to install.</p>
   */
  InstancesWithFailedPatches?: number;

  /**
   * <p>The number of instances with patches installed that aren't defined in the patch
   *    baseline.</p>
   */
  InstancesWithInstalledOtherPatches?: number;

  /**
   * <p>The number of instances with installed patches.</p>
   */
  InstancesWithInstalledPatches?: number;

  /**
   * <p>The number of instances with patches installed by Patch Manager that have not been rebooted
   *    after the patch installation. The status of these instances is NON_COMPLIANT.</p>
   */
  InstancesWithInstalledPendingRebootPatches?: number;

  /**
   * <p>The number of instances with patches installed that are specified in a RejectedPatches list.
   *    Patches with a status of <i>INSTALLED_REJECTED</i> were typically installed before
   *    they were added to a RejectedPatches list.</p>
   *          <note>
   *             <p>If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of
   *     InstancesWithInstalledRejectedPatches will always be 0 (zero).</p>
   *          </note>
   */
  InstancesWithInstalledRejectedPatches?: number;

  /**
   * <p>The number of instances with missing patches from the patch baseline.</p>
   */
  InstancesWithMissingPatches?: number;

  /**
   * <p>The number of instances with patches that aren't applicable.</p>
   */
  InstancesWithNotApplicablePatches?: number;

  /**
   * <p>The number of instances with <code>NotApplicable</code> patches beyond the supported limit,
   *    which are not reported by name to Systems Manager Inventory.</p>
   */
  InstancesWithUnreportedNotApplicablePatches?: number;
}

export namespace DescribePatchGroupStateResult {
  export const filterSensitiveLog = (
    obj: DescribePatchGroupStateResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchGroupStateResult =>
    __isa(o, "DescribePatchGroupStateResult");
}

export interface DescribePatchPropertiesRequest {
  __type?: "DescribePatchPropertiesRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The operating system type for which to list patches.</p>
   */
  OperatingSystem: OperatingSystem | string | undefined;

  /**
   * <p>Indicates whether to list patches for the Windows operating system or for Microsoft
   *    applications. Not applicable for Linux operating systems.</p>
   */
  PatchSet?: PatchSet | string;

  /**
   * <p>The patch property for which you want to view patch details. </p>
   */
  Property: PatchProperty | string | undefined;
}

export namespace DescribePatchPropertiesRequest {
  export const filterSensitiveLog = (
    obj: DescribePatchPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchPropertiesRequest =>
    __isa(o, "DescribePatchPropertiesRequest");
}

export interface DescribePatchPropertiesResult {
  __type?: "DescribePatchPropertiesResult";
  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the properties for patches matching the filter request parameters.</p>
   */
  Properties?: { [key: string]: string }[];
}

export namespace DescribePatchPropertiesResult {
  export const filterSensitiveLog = (
    obj: DescribePatchPropertiesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePatchPropertiesResult =>
    __isa(o, "DescribePatchPropertiesResult");
}

export interface DescribeSessionsRequest {
  __type?: "DescribeSessionsRequest";
  /**
   * <p>One or more filters to limit the type of sessions returned by the request.</p>
   */
  Filters?: SessionFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The session status to retrieve a list of sessions for. For example, "Active".</p>
   */
  State: SessionState | string | undefined;
}

export namespace DescribeSessionsRequest {
  export const filterSensitiveLog = (obj: DescribeSessionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSessionsRequest =>
    __isa(o, "DescribeSessionsRequest");
}

export interface DescribeSessionsResponse {
  __type?: "DescribeSessionsResponse";
  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>A list of sessions meeting the request parameters.</p>
   */
  Sessions?: Session[];
}

export namespace DescribeSessionsResponse {
  export const filterSensitiveLog = (obj: DescribeSessionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSessionsResponse =>
    __isa(o, "DescribeSessionsResponse");
}

/**
 * <p>The specified document already exists.</p>
 */
export interface DocumentAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "DocumentAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace DocumentAlreadyExists {
  export const filterSensitiveLog = (obj: DocumentAlreadyExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentAlreadyExists =>
    __isa(o, "DocumentAlreadyExists");
}

/**
 * <p>A default version of a document.</p>
 */
export interface DocumentDefaultVersionDescription {
  __type?: "DocumentDefaultVersionDescription";
  /**
   * <p>The default version of the document.</p>
   */
  DefaultVersion?: string;

  /**
   * <p>The default version of the artifact associated with the document.</p>
   */
  DefaultVersionName?: string;

  /**
   * <p>The name of the document.</p>
   */
  Name?: string;
}

export namespace DocumentDefaultVersionDescription {
  export const filterSensitiveLog = (
    obj: DocumentDefaultVersionDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentDefaultVersionDescription =>
    __isa(o, "DocumentDefaultVersionDescription");
}

/**
 * <p>Describes a Systems Manager document. </p>
 */
export interface DocumentDescription {
  __type?: "DocumentDescription";
  /**
   * <p>Details about the document attachments, including names, locations, sizes, etc.</p>
   */
  AttachmentsInformation?: AttachmentInformation[];

  /**
   * <p>The date when the document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The default version.</p>
   */
  DefaultVersion?: string;

  /**
   * <p>A description of the document. </p>
   */
  Description?: string;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The type of document.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  Hash?: string;

  /**
   * <p>The hash type of the document. Valid values include <code>Sha256</code> or
   *    <code>Sha1</code>.</p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  HashType?: DocumentHashType | string;

  /**
   * <p>The latest version of the document.</p>
   */
  LatestVersion?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The AWS user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>A description of the parameters for a document.</p>
   */
  Parameters?: DocumentParameter[];

  /**
   * <p>The list of OS platforms compatible with this Systems Manager document. </p>
   */
  PlatformTypes?: (PlatformType | string)[];

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>The schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The SHA1 hash of the document, which you can use for verification.</p>
   */
  Sha1?: string;

  /**
   * <p>The status of the Systems Manager document.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The target type which defines the kinds of resources the document can run on. For example,
   *    /AWS::EC2::Instance. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a> in
   *    the <i>AWS CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>The version of the artifact associated with the document.</p>
   */
  VersionName?: string;
}

export namespace DocumentDescription {
  export const filterSensitiveLog = (obj: DocumentDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentDescription =>
    __isa(o, "DocumentDescription");
}

/**
 * <p>Describes a filter.</p>
 */
export interface DocumentFilter {
  __type?: "DocumentFilter";
  /**
   * <p>The name of the filter.</p>
   */
  key: DocumentFilterKey | string | undefined;

  /**
   * <p>The value of the filter.</p>
   */
  value: string | undefined;
}

export namespace DocumentFilter {
  export const filterSensitiveLog = (obj: DocumentFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentFilter =>
    __isa(o, "DocumentFilter");
}

export enum DocumentFilterKey {
  DocumentType = "DocumentType",
  Name = "Name",
  Owner = "Owner",
  PlatformTypes = "PlatformTypes"
}

export enum DocumentFormat {
  JSON = "JSON",
  TEXT = "TEXT",
  YAML = "YAML"
}

export enum DocumentHashType {
  SHA1 = "Sha1",
  SHA256 = "Sha256"
}

/**
 * <p>Describes the name of a Systems Manager document.</p>
 */
export interface DocumentIdentifier {
  __type?: "DocumentIdentifier";
  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The document type.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The AWS user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>The operating system platform. </p>
   */
  PlatformTypes?: (PlatformType | string)[];

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>The schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The target type which defines the kinds of resources the document can run on. For example,
   *    /AWS::EC2::Instance. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a> in
   *    the <i>AWS CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace DocumentIdentifier {
  export const filterSensitiveLog = (obj: DocumentIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentIdentifier =>
    __isa(o, "DocumentIdentifier");
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of documents.</p>
 *          <p>For keys, you can specify one or more tags that have been applied to a document. </p>
 *          <p>Other valid values include Owner, Name, PlatformTypes, and DocumentType.</p>
 *          <p>Note that only one Owner can be specified in a request. For example:
 *     <code>Key=Owner,Values=Self</code>.</p>
 *          <p>If you use Name as a key, you can use a name prefix to return a list of documents. For
 *    example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run
 *    the following command:</p>
 *          <p>
 *             <code>aws ssm list-documents --filters Key=Name,Values=Te</code>
 *          </p>
 *          <p>If you specify more than two keys, only documents that are identified by all the tags are
 *    returned in the results. If you specify more than two values for a key, documents that are
 *    identified by any of the values are returned in the results.</p>
 *          <p>To specify a custom key and value pair, use the format
 *     <code>Key=tag:[tagName],Values=[valueName]</code>.</p>
 *          <p>For example, if you created a Key called region and are using the AWS CLI to call the
 *     <code>list-documents</code> command: </p>
 *          <p>
 *             <code>aws ssm list-documents --filters Key=tag:region,Values=east,west
 *     Key=Owner,Values=Self</code>
 *          </p>
 */
export interface DocumentKeyValuesFilter {
  __type?: "DocumentKeyValuesFilter";
  /**
   * <p>The name of the filter key.</p>
   */
  Key?: string;

  /**
   * <p>The value for the filter key.</p>
   */
  Values?: string[];
}

export namespace DocumentKeyValuesFilter {
  export const filterSensitiveLog = (obj: DocumentKeyValuesFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentKeyValuesFilter =>
    __isa(o, "DocumentKeyValuesFilter");
}

/**
 * <p>You can have at most 500 active Systems Manager documents.</p>
 */
export interface DocumentLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "DocumentLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace DocumentLimitExceeded {
  export const filterSensitiveLog = (obj: DocumentLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentLimitExceeded =>
    __isa(o, "DocumentLimitExceeded");
}

/**
 * <p>Parameters specified in a System Manager document that run on the server when the command is
 *    run. </p>
 */
export interface DocumentParameter {
  __type?: "DocumentParameter";
  /**
   * <p>If specified, the default values for the parameters. Parameters without a default value are
   *    required. Parameters with a default value are optional.</p>
   */
  DefaultValue?: string;

  /**
   * <p>A description of what the parameter does, how to use it, the default value, and whether or
   *    not the parameter is optional.</p>
   */
  Description?: string;

  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. The type can be either String or StringList.</p>
   */
  Type?: DocumentParameterType | string;
}

export namespace DocumentParameter {
  export const filterSensitiveLog = (obj: DocumentParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentParameter =>
    __isa(o, "DocumentParameter");
}

export type DocumentParameterType = "String" | "StringList";

/**
 * <p>The document cannot be shared with more AWS user accounts. You can share a document with a
 *    maximum of 20 accounts. You can publicly share up to five documents. If you need to increase this
 *    limit, contact AWS Support.</p>
 */
export interface DocumentPermissionLimit
  extends __SmithyException,
    $MetadataBearer {
  name: "DocumentPermissionLimit";
  $fault: "client";
  Message?: string;
}

export namespace DocumentPermissionLimit {
  export const filterSensitiveLog = (obj: DocumentPermissionLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentPermissionLimit =>
    __isa(o, "DocumentPermissionLimit");
}

export enum DocumentPermissionType {
  SHARE = "Share"
}

/**
 * <p>An SSM document required by the current document.</p>
 */
export interface DocumentRequires {
  __type?: "DocumentRequires";
  /**
   * <p>The name of the required SSM document. The name can be an Amazon Resource Name (ARN).</p>
   */
  Name: string | undefined;

  /**
   * <p>The document version required by the current document.</p>
   */
  Version?: string;
}

export namespace DocumentRequires {
  export const filterSensitiveLog = (obj: DocumentRequires): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentRequires =>
    __isa(o, "DocumentRequires");
}

export enum DocumentStatus {
  Active = "Active",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
  Updating = "Updating"
}

export enum DocumentType {
  ApplicationConfiguration = "ApplicationConfiguration",
  ApplicationConfigurationSchema = "ApplicationConfigurationSchema",
  Automation = "Automation",
  ChangeCalendar = "ChangeCalendar",
  Command = "Command",
  DeploymentStrategy = "DeploymentStrategy",
  Package = "Package",
  Policy = "Policy",
  Session = "Session"
}

/**
 * <p>Version information about the document.</p>
 */
export interface DocumentVersionInfo {
  __type?: "DocumentVersionInfo";
  /**
   * <p>The date the document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>An identifier for the default version of the document.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The document name.</p>
   */
  Name?: string;

  /**
   * <p>The status of the Systems Manager document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Failed</code>, and <code>Deleting</code>.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The version of the artifact associated with the document. For example, "Release 12, Update
   *    6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace DocumentVersionInfo {
  export const filterSensitiveLog = (obj: DocumentVersionInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentVersionInfo =>
    __isa(o, "DocumentVersionInfo");
}

/**
 * <p>The document has too many versions. Delete one or more document versions and try
 *    again.</p>
 */
export interface DocumentVersionLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "DocumentVersionLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace DocumentVersionLimitExceeded {
  export const filterSensitiveLog = (
    obj: DocumentVersionLimitExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentVersionLimitExceeded =>
    __isa(o, "DocumentVersionLimitExceeded");
}

/**
 * <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager Service Quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
 */
export interface DoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "DoesNotExistException";
  $fault: "client";
  Message?: string;
}

export namespace DoesNotExistException {
  export const filterSensitiveLog = (obj: DoesNotExistException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DoesNotExistException =>
    __isa(o, "DoesNotExistException");
}

/**
 * <p>The content of the association document matches another document. Change the content of the
 *    document and try again.</p>
 */
export interface DuplicateDocumentContent
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateDocumentContent";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateDocumentContent {
  export const filterSensitiveLog = (obj: DuplicateDocumentContent): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateDocumentContent =>
    __isa(o, "DuplicateDocumentContent");
}

/**
 * <p>The version name has already been used in this document. Specify a different version name,
 *    and then try again.</p>
 */
export interface DuplicateDocumentVersionName
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateDocumentVersionName";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateDocumentVersionName {
  export const filterSensitiveLog = (
    obj: DuplicateDocumentVersionName
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateDocumentVersionName =>
    __isa(o, "DuplicateDocumentVersionName");
}

/**
 * <p>You cannot specify an instance ID in more than one association.</p>
 */
export interface DuplicateInstanceId
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateInstanceId";
  $fault: "client";
}

export namespace DuplicateInstanceId {
  export const filterSensitiveLog = (obj: DuplicateInstanceId): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateInstanceId =>
    __isa(o, "DuplicateInstanceId");
}

/**
 * <p>The EffectivePatch structure defines metadata about a patch along with the approval state of
 *    the patch in a particular patch baseline. The approval state includes information about whether
 *    the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly
 *    rejected and the date the patch was or will be approved.</p>
 */
export interface EffectivePatch {
  __type?: "EffectivePatch";
  /**
   * <p>Provides metadata for a patch, including information such as the KB ID, severity,
   *    classification and a URL for where more information can be obtained about the patch.</p>
   */
  Patch?: Patch;

  /**
   * <p>The status of the patch in a patch baseline. This includes information about whether the
   *    patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly
   *    rejected and the date the patch was or will be approved.</p>
   */
  PatchStatus?: PatchStatus;
}

export namespace EffectivePatch {
  export const filterSensitiveLog = (obj: EffectivePatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is EffectivePatch =>
    __isa(o, "EffectivePatch");
}

export enum ExecutionMode {
  Auto = "Auto",
  Interactive = "Interactive"
}

/**
 * <p>Describes a failed association.</p>
 */
export interface FailedCreateAssociation {
  __type?: "FailedCreateAssociation";
  /**
   * <p>The association.</p>
   */
  Entry?: CreateAssociationBatchRequestEntry;

  /**
   * <p>The source of the failure.</p>
   */
  Fault?: Fault | string;

  /**
   * <p>A description of the failure.</p>
   */
  Message?: string;
}

export namespace FailedCreateAssociation {
  export const filterSensitiveLog = (obj: FailedCreateAssociation): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailedCreateAssociation =>
    __isa(o, "FailedCreateAssociation");
}

/**
 * <p>Information about an Automation failure.</p>
 */
export interface FailureDetails {
  __type?: "FailureDetails";
  /**
   * <p>Detailed information about the Automation step failure.</p>
   */
  Details?: { [key: string]: string[] };

  /**
   * <p>The stage of the Automation execution when the failure occurred. The stages include the
   *    following: InputValidation, PreVerification, Invocation, PostVerification.</p>
   */
  FailureStage?: string;

  /**
   * <p>The type of Automation failure. Failure types include the following: Action, Permission,
   *    Throttling, Verification, Internal.</p>
   */
  FailureType?: string;
}

export namespace FailureDetails {
  export const filterSensitiveLog = (obj: FailureDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailureDetails =>
    __isa(o, "FailureDetails");
}

export type Fault = "Client" | "Server" | "Unknown";

/**
 * <p>You attempted to register a LAMBDA or STEP_FUNCTIONS task in a region where the
 *    corresponding service is not available. </p>
 */
export interface FeatureNotAvailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "FeatureNotAvailableException";
  $fault: "client";
  Message?: string;
}

export namespace FeatureNotAvailableException {
  export const filterSensitiveLog = (
    obj: FeatureNotAvailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FeatureNotAvailableException =>
    __isa(o, "FeatureNotAvailableException");
}

export interface GetAutomationExecutionRequest {
  __type?: "GetAutomationExecutionRequest";
  /**
   * <p>The unique identifier for an existing automation execution to examine. The execution ID is
   *    returned by StartAutomationExecution when the execution of an Automation document is
   *    initiated.</p>
   */
  AutomationExecutionId: string | undefined;
}

export namespace GetAutomationExecutionRequest {
  export const filterSensitiveLog = (
    obj: GetAutomationExecutionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAutomationExecutionRequest =>
    __isa(o, "GetAutomationExecutionRequest");
}

export interface GetAutomationExecutionResult {
  __type?: "GetAutomationExecutionResult";
  /**
   * <p>Detailed information about the current state of an automation execution.</p>
   */
  AutomationExecution?: AutomationExecution;
}

export namespace GetAutomationExecutionResult {
  export const filterSensitiveLog = (
    obj: GetAutomationExecutionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAutomationExecutionResult =>
    __isa(o, "GetAutomationExecutionResult");
}

export interface GetCalendarStateRequest {
  __type?: "GetCalendarStateRequest";
  /**
   * <p>(Optional) The specific time for which you want to get calendar state information, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> format. If you do not add
   *     <code>AtTime</code>, the current time is assumed.</p>
   */
  AtTime?: string;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Systems Manager documents that represent the calendar
   *    entries for which you want to get the state.</p>
   */
  CalendarNames: string[] | undefined;
}

export namespace GetCalendarStateRequest {
  export const filterSensitiveLog = (obj: GetCalendarStateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCalendarStateRequest =>
    __isa(o, "GetCalendarStateRequest");
}

export interface GetCalendarStateResponse {
  __type?: "GetCalendarStateResponse";
  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that you specified in your command. If you did not specify a time, <code>GetCalendarState</code>
   *    uses the current time.</p>
   */
  AtTime?: string;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that the calendar state will change. If the current calendar state is <code>OPEN</code>,
   *     <code>NextTransitionTime</code> indicates when the calendar state changes to
   *    <code>CLOSED</code>, and vice-versa.</p>
   */
  NextTransitionTime?: string;

  /**
   * <p>The state of the calendar. An <code>OPEN</code> calendar indicates that actions are allowed
   *    to proceed, and a <code>CLOSED</code> calendar indicates that actions are not allowed to
   *    proceed.</p>
   */
  State?: CalendarState | string;
}

export namespace GetCalendarStateResponse {
  export const filterSensitiveLog = (obj: GetCalendarStateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCalendarStateResponse =>
    __isa(o, "GetCalendarStateResponse");
}

export interface GetCommandInvocationRequest {
  __type?: "GetCommandInvocationRequest";
  /**
   * <p>(Required) The parent command ID of the invocation plugin.</p>
   */
  CommandId: string | undefined;

  /**
   * <p>(Required) The ID of the managed instance targeted by the command. A managed instance can be
   *    an Amazon EC2 instance or an instance in your hybrid environment that is configured for Systems
   *    Manager.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>(Optional) The name of the plugin for which you want detailed results. If the document
   *    contains only one plugin, the name can be omitted and the details will be returned.</p>
   */
  PluginName?: string;
}

export namespace GetCommandInvocationRequest {
  export const filterSensitiveLog = (
    obj: GetCommandInvocationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommandInvocationRequest =>
    __isa(o, "GetCommandInvocationRequest");
}

export interface GetCommandInvocationResult {
  __type?: "GetCommandInvocationResult";
  /**
   * <p>CloudWatch Logs information where Systems Manager sent the command output.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>The parent command ID of the invocation plugin.</p>
   */
  CommandId?: string;

  /**
   * <p>The comment text for the command.</p>
   */
  Comment?: string;

  /**
   * <p>The name of the document that was run. For example, AWS-RunShellScript.</p>
   */
  DocumentName?: string;

  /**
   * <p>The SSM document version used in the request.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Duration since ExecutionStartDateTime.</p>
   */
  ExecutionElapsedTime?: string;

  /**
   * <p>The date and time the plugin was finished running. Date and time are written in ISO 8601
   *    format. For example, June 7, 2017 is represented as 2017-06-7. The following sample AWS CLI
   *    command uses the <code>InvokedAfter</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin has not started to run, the string is empty.</p>
   */
  ExecutionEndDateTime?: string;

  /**
   * <p>The date and time the plugin started running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample AWS CLI command uses
   *    the <code>InvokedBefore</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin has not started to run, the string is empty.</p>
   */
  ExecutionStartDateTime?: string;

  /**
   * <p>The ID of the managed instance targeted by the command. A managed instance can be an Amazon EC2
   *    instance or an instance in your hybrid environment that is configured for Systems Manager.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the plugin for which you want detailed results. For example, aws:RunShellScript
   *    is a plugin.</p>
   */
  PluginName?: string;

  /**
   * <p>The error level response code for the plugin script. If the response code is -1, then the
   *    command has not started running on the instance, or it was not received by the instance.</p>
   */
  ResponseCode?: number;

  /**
   * <p>The first 8,000 characters written by the plugin to stderr. If the command has not finished
   *    running, then this string is empty.</p>
   */
  StandardErrorContent?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stderr. If the command has not
   *    finished running, then this string is empty.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>The first 24,000 characters written by the plugin to stdout. If the command has not finished
   *    running, if ExecutionStatus is neither Succeeded nor Failed, then this string is empty.</p>
   */
  StandardOutputContent?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stdout in Amazon S3. If an Amazon S3 bucket was
   *    not specified, then this string is empty.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The status of this invocation plugin. This status can be different than
   *    StatusDetails.</p>
   */
  Status?: CommandInvocationStatus | string;

  /**
   * <p>A detailed status of the command execution for an invocation. StatusDetails includes more
   *    information than Status because it includes states resulting from error and concurrency control
   *    parameters. StatusDetails can show different results than Status. For more information about
   *    these statuses, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command
   *     Statuses</a> in the <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the
   *    following values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Pending: The command has not been sent to the instance.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the instance but has not reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Delayed: The system attempted to send the command to the target, but the target was not
   *      available. The instance might not be available because of network issues, the instance was
   *      stopped, etc. The system will try to deliver the command again.</p>
   *             </li>
   *             <li>
   *                <p>Success: The command or plugin was run successfully. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command was not delivered to the instance before the delivery
   *      timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit,
   *      but they do contribute to whether the parent command status is Success or Incomplete. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: The command started to run on the instance, but the execution was not
   *      complete before the timeout expired. Execution timeouts count against the MaxErrors limit of
   *      the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't run successfully on the instance. For a plugin, this indicates
   *      that the result code was not zero. For a command invocation, this indicates that the result
   *      code for one or more plugins was not zero. Invocation failures count against the MaxErrors
   *      limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the instance. The instance might not
   *      exist or might not be responding. Undeliverable invocations don't count against the parent
   *      command's MaxErrors limit and don't contribute to whether the parent command status is Success
   *      or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command
   *      invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;
}

export namespace GetCommandInvocationResult {
  export const filterSensitiveLog = (obj: GetCommandInvocationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommandInvocationResult =>
    __isa(o, "GetCommandInvocationResult");
}

export interface GetConnectionStatusRequest {
  __type?: "GetConnectionStatusRequest";
  /**
   * <p>The ID of the instance.</p>
   */
  Target: string | undefined;
}

export namespace GetConnectionStatusRequest {
  export const filterSensitiveLog = (obj: GetConnectionStatusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionStatusRequest =>
    __isa(o, "GetConnectionStatusRequest");
}

export interface GetConnectionStatusResponse {
  __type?: "GetConnectionStatusResponse";
  /**
   * <p>The status of the connection to the instance. For example, 'Connected' or 'Not
   *    Connected'.</p>
   */
  Status?: ConnectionStatus | string;

  /**
   * <p>The ID of the instance to check connection status. </p>
   */
  Target?: string;
}

export namespace GetConnectionStatusResponse {
  export const filterSensitiveLog = (
    obj: GetConnectionStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionStatusResponse =>
    __isa(o, "GetConnectionStatusResponse");
}

export interface GetDefaultPatchBaselineRequest {
  __type?: "GetDefaultPatchBaselineRequest";
  /**
   * <p>Returns the default patch baseline for the specified operating system.</p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace GetDefaultPatchBaselineRequest {
  export const filterSensitiveLog = (
    obj: GetDefaultPatchBaselineRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDefaultPatchBaselineRequest =>
    __isa(o, "GetDefaultPatchBaselineRequest");
}

export interface GetDefaultPatchBaselineResult {
  __type?: "GetDefaultPatchBaselineResult";
  /**
   * <p>The ID of the default patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The operating system for the returned patch baseline. </p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace GetDefaultPatchBaselineResult {
  export const filterSensitiveLog = (
    obj: GetDefaultPatchBaselineResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDefaultPatchBaselineResult =>
    __isa(o, "GetDefaultPatchBaselineResult");
}

export interface GetDeployablePatchSnapshotForInstanceRequest {
  __type?: "GetDeployablePatchSnapshotForInstanceRequest";
  /**
   * <p>The ID of the instance for which the appropriate patch snapshot should be retrieved.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The user-defined snapshot ID.</p>
   */
  SnapshotId: string | undefined;
}

export namespace GetDeployablePatchSnapshotForInstanceRequest {
  export const filterSensitiveLog = (
    obj: GetDeployablePatchSnapshotForInstanceRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetDeployablePatchSnapshotForInstanceRequest =>
    __isa(o, "GetDeployablePatchSnapshotForInstanceRequest");
}

export interface GetDeployablePatchSnapshotForInstanceResult {
  __type?: "GetDeployablePatchSnapshotForInstanceResult";
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Returns the specific operating system (for example Windows Server 2012 or Amazon Linux
   *    2015.09) on the instance for the specified patch snapshot.</p>
   */
  Product?: string;

  /**
   * <p>A pre-signed Amazon S3 URL that can be used to download the patch snapshot.</p>
   */
  SnapshotDownloadUrl?: string;

  /**
   * <p>The user-defined snapshot ID.</p>
   */
  SnapshotId?: string;
}

export namespace GetDeployablePatchSnapshotForInstanceResult {
  export const filterSensitiveLog = (
    obj: GetDeployablePatchSnapshotForInstanceResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetDeployablePatchSnapshotForInstanceResult =>
    __isa(o, "GetDeployablePatchSnapshotForInstanceResult");
}

export interface GetDocumentRequest {
  __type?: "GetDocumentRequest";
  /**
   * <p>Returns the document in the specified format. The document format can be either JSON or
   *    YAML. JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The document version for which you want information.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace GetDocumentRequest {
  export const filterSensitiveLog = (obj: GetDocumentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDocumentRequest =>
    __isa(o, "GetDocumentRequest");
}

export interface GetDocumentResult {
  __type?: "GetDocumentResult";
  /**
   * <p>A description of the document attachments, including names, locations, sizes, etc.</p>
   */
  AttachmentsContent?: AttachmentContent[];

  /**
   * <p>The contents of the Systems Manager document.</p>
   */
  Content?: string;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The document type.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>The status of the Systems Manager document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Updating</code>, <code>Failed</code>, and <code>Deleting</code>.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The version of the artifact associated with the document. For example, "Release 12, Update
   *    6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace GetDocumentResult {
  export const filterSensitiveLog = (obj: GetDocumentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDocumentResult =>
    __isa(o, "GetDocumentResult");
}

export interface GetInventoryRequest {
  __type?: "GetInventoryRequest";
  /**
   * <p>Returns counts of inventory types based on one or more expressions. For example, if you
   *    aggregate by using an expression that uses the <code>AWS:InstanceInformation.PlatformType</code>
   *    type, you can see a count of how many Windows and Linux instances exist in your inventoried
   *    fleet.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The list of inventory item types to return.</p>
   */
  ResultAttributes?: ResultAttribute[];
}

export namespace GetInventoryRequest {
  export const filterSensitiveLog = (obj: GetInventoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInventoryRequest =>
    __isa(o, "GetInventoryRequest");
}

export interface GetInventoryResult {
  __type?: "GetInventoryResult";
  /**
   * <p>Collection of inventory entities such as a collection of instance inventory. </p>
   */
  Entities?: InventoryResultEntity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace GetInventoryResult {
  export const filterSensitiveLog = (obj: GetInventoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInventoryResult =>
    __isa(o, "GetInventoryResult");
}

export interface GetInventorySchemaRequest {
  __type?: "GetInventorySchemaRequest";
  /**
   * <p>Returns inventory schemas that support aggregation. For example, this call returns the
   *     <code>AWS:InstanceInformation</code> type, because it supports aggregation based on the
   *     <code>PlatformName</code>, <code>PlatformType</code>, and <code>PlatformVersion</code>
   *    attributes.</p>
   */
  Aggregator?: boolean;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the sub-type schema for a specified inventory type.</p>
   */
  SubType?: boolean;

  /**
   * <p>The type of inventory item to return.</p>
   */
  TypeName?: string;
}

export namespace GetInventorySchemaRequest {
  export const filterSensitiveLog = (obj: GetInventorySchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInventorySchemaRequest =>
    __isa(o, "GetInventorySchemaRequest");
}

export interface GetInventorySchemaResult {
  __type?: "GetInventorySchemaResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Inventory schemas returned by the request.</p>
   */
  Schemas?: InventoryItemSchema[];
}

export namespace GetInventorySchemaResult {
  export const filterSensitiveLog = (obj: GetInventorySchemaResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInventorySchemaResult =>
    __isa(o, "GetInventorySchemaResult");
}

export interface GetMaintenanceWindowExecutionRequest {
  __type?: "GetMaintenanceWindowExecutionRequest";
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace GetMaintenanceWindowExecutionRequest {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowExecutionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMaintenanceWindowExecutionRequest =>
    __isa(o, "GetMaintenanceWindowExecutionRequest");
}

export interface GetMaintenanceWindowExecutionResult {
  __type?: "GetMaintenanceWindowExecutionResult";
  /**
   * <p>The time the maintenance window finished running.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time the maintenance window started running.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the maintenance window execution.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the Status. Only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The ID of the task executions from the maintenance window execution.</p>
   */
  TaskIds?: string[];

  /**
   * <p>The ID of the maintenance window execution.</p>
   */
  WindowExecutionId?: string;
}

export namespace GetMaintenanceWindowExecutionResult {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowExecutionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMaintenanceWindowExecutionResult =>
    __isa(o, "GetMaintenanceWindowExecutionResult");
}

export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  __type?: "GetMaintenanceWindowExecutionTaskInvocationRequest";
  /**
   * <p>The invocation ID to retrieve.</p>
   */
  InvocationId: string | undefined;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved. </p>
   */
  TaskId: string | undefined;

  /**
   * <p>The ID of the maintenance window execution for which the task is a part.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace GetMaintenanceWindowExecutionTaskInvocationRequest {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowExecutionTaskInvocationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetMaintenanceWindowExecutionTaskInvocationRequest =>
    __isa(o, "GetMaintenanceWindowExecutionTaskInvocationRequest");
}

export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  __type?: "GetMaintenanceWindowExecutionTaskInvocationResult";
  /**
   * <p>The time that the task finished running on the target.</p>
   */
  EndTime?: Date;

  /**
   * <p>The execution ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The invocation ID.</p>
   */
  InvocationId?: string;

  /**
   * <p>User-provided value to be included in any CloudWatch events raised while running tasks for
   *    these targets in this maintenance window. </p>
   */
  OwnerInformation?: string;

  /**
   * <p>The parameters used at the time that the task ran.</p>
   */
  Parameters?: string;

  /**
   * <p>The time that the task started running on the target.</p>
   */
  StartTime?: Date;

  /**
   * <p>The task status for an invocation.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status. Details are only available for certain status
   *    values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The task execution ID.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>Retrieves the task type for a maintenance window. Task types include the following: LAMBDA,
   *    STEP_FUNCTIONS, AUTOMATION, RUN_COMMAND.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The maintenance window execution ID.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The maintenance window target ID.</p>
   */
  WindowTargetId?: string;
}

export namespace GetMaintenanceWindowExecutionTaskInvocationResult {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowExecutionTaskInvocationResult
  ): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING })
  });
  export const isa = (
    o: any
  ): o is GetMaintenanceWindowExecutionTaskInvocationResult =>
    __isa(o, "GetMaintenanceWindowExecutionTaskInvocationResult");
}

export interface GetMaintenanceWindowExecutionTaskRequest {
  __type?: "GetMaintenanceWindowExecutionTaskRequest";
  /**
   * <p>The ID of the specific task execution in the maintenance window task that should be
   *    retrieved.</p>
   */
  TaskId: string | undefined;

  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace GetMaintenanceWindowExecutionTaskRequest {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowExecutionTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMaintenanceWindowExecutionTaskRequest =>
    __isa(o, "GetMaintenanceWindowExecutionTaskRequest");
}

export interface GetMaintenanceWindowExecutionTaskResult {
  __type?: "GetMaintenanceWindowExecutionTaskResult";
  /**
   * <p>The time the task execution completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The defined maximum number of task executions that could be run in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The defined maximum number of task execution errors allowed before scheduling of the task
   *    execution would have been stopped.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The priority of the task.</p>
   */
  Priority?: number;

  /**
   * <p>The role that was assumed when running the task.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the task.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the Status. Only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The ARN of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that was
   *    retrieved.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The parameters passed to the task when it was run.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   *          <p>The map has the following format:</p>
   *          <p>Key: string, between 1 and 255 characters</p>
   *          <p>Value: an array of strings, each string is between 1 and 255 characters</p>
   */
  TaskParameters?: {
    [key: string]: MaintenanceWindowTaskParameterValueExpression;
  }[];

  /**
   * <p>The type of task that was run.</p>
   */
  Type?: MaintenanceWindowTaskType | string;

  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId?: string;
}

export namespace GetMaintenanceWindowExecutionTaskResult {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowExecutionTaskResult
  ): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetMaintenanceWindowExecutionTaskResult =>
    __isa(o, "GetMaintenanceWindowExecutionTaskResult");
}

export interface GetMaintenanceWindowRequest {
  __type?: "GetMaintenanceWindowRequest";
  /**
   * <p>The ID of the maintenance window for which you want to retrieve information.</p>
   */
  WindowId: string | undefined;
}

export namespace GetMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMaintenanceWindowRequest =>
    __isa(o, "GetMaintenanceWindowRequest");
}

export interface GetMaintenanceWindowResult {
  __type?: "GetMaintenanceWindowResult";
  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>The date the maintenance window was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>The description of the maintenance window.</p>
   */
  Description?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window will not run after this specified time.</p>
   */
  EndDate?: string;

  /**
   * <p>The date the maintenance window was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   */
  NextExecutionTime?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window will not run before this specified time.</p>
   */
  StartDate?: string;

  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;
}

export namespace GetMaintenanceWindowResult {
  export const filterSensitiveLog = (obj: GetMaintenanceWindowResult): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetMaintenanceWindowResult =>
    __isa(o, "GetMaintenanceWindowResult");
}

export interface GetMaintenanceWindowTaskRequest {
  __type?: "GetMaintenanceWindowTaskRequest";
  /**
   * <p>The maintenance window ID that includes the task to retrieve.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The maintenance window task ID to retrieve.</p>
   */
  WindowTaskId: string | undefined;
}

export namespace GetMaintenanceWindowTaskRequest {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMaintenanceWindowTaskRequest =>
    __isa(o, "GetMaintenanceWindowTaskRequest");
}

export interface GetMaintenanceWindowTaskResult {
  __type?: "GetMaintenanceWindowTaskResult";
  /**
   * <p>The retrieved task description.</p>
   */
  Description?: string;

  /**
   * <p>The location in Amazon S3 where the task results are logged.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the task stops being scheduled.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The retrieved task name.</p>
   */
  Name?: string;

  /**
   * <p>The priority of the task when it runs. The lower the number, the higher the priority. Tasks
   *    that have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for
   *    maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The targets where the task should run.</p>
   */
  Targets?: Target[];

  /**
   * <p>The resource that the task used during execution. For RUN_COMMAND and AUTOMATION task types,
   *    the TaskArn is the Systems Manager Document name/ARN. For LAMBDA tasks, the value is the function name/ARN.
   *    For STEP_FUNCTIONS tasks, the value is the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The parameters to pass to the task when it runs.</p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The parameters to pass to the task when it runs.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  TaskParameters?: {
    [key: string]: MaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The type of task to run.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The retrieved maintenance window ID.</p>
   */
  WindowId?: string;

  /**
   * <p>The retrieved maintenance window task ID.</p>
   */
  WindowTaskId?: string;
}

export namespace GetMaintenanceWindowTaskResult {
  export const filterSensitiveLog = (
    obj: GetMaintenanceWindowTaskResult
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      )
    }),
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetMaintenanceWindowTaskResult =>
    __isa(o, "GetMaintenanceWindowTaskResult");
}

export interface GetOpsItemRequest {
  __type?: "GetOpsItemRequest";
  /**
   * <p>The ID of the OpsItem that you want to get.</p>
   */
  OpsItemId: string | undefined;
}

export namespace GetOpsItemRequest {
  export const filterSensitiveLog = (obj: GetOpsItemRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOpsItemRequest =>
    __isa(o, "GetOpsItemRequest");
}

export interface GetOpsItemResponse {
  __type?: "GetOpsItemResponse";
  /**
   * <p>The OpsItem.</p>
   */
  OpsItem?: OpsItem;
}

export namespace GetOpsItemResponse {
  export const filterSensitiveLog = (obj: GetOpsItemResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOpsItemResponse =>
    __isa(o, "GetOpsItemResponse");
}

export interface GetOpsSummaryRequest {
  __type?: "GetOpsSummaryRequest";
  /**
   * <p>Optional aggregators that return counts of OpsItems based on one or more expressions.</p>
   */
  Aggregators?: OpsAggregator[];

  /**
   * <p>Optional filters used to scope down the returned OpsItems. </p>
   */
  Filters?: OpsFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The OpsItem data type to return.</p>
   */
  ResultAttributes?: OpsResultAttribute[];

  /**
   * <p>Specify the name of a resource data sync to get.</p>
   */
  SyncName?: string;
}

export namespace GetOpsSummaryRequest {
  export const filterSensitiveLog = (obj: GetOpsSummaryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOpsSummaryRequest =>
    __isa(o, "GetOpsSummaryRequest");
}

export interface GetOpsSummaryResult {
  __type?: "GetOpsSummaryResult";
  /**
   * <p>The list of aggregated and filtered OpsItems.</p>
   */
  Entities?: OpsEntity[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace GetOpsSummaryResult {
  export const filterSensitiveLog = (obj: GetOpsSummaryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOpsSummaryResult =>
    __isa(o, "GetOpsSummaryResult");
}

export interface GetParameterHistoryRequest {
  __type?: "GetParameterHistoryRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of a parameter you want to query.</p>
   */
  Name: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for String and
   *    StringList parameter types.</p>
   */
  WithDecryption?: boolean;
}

export namespace GetParameterHistoryRequest {
  export const filterSensitiveLog = (obj: GetParameterHistoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParameterHistoryRequest =>
    __isa(o, "GetParameterHistoryRequest");
}

export interface GetParameterHistoryResult {
  __type?: "GetParameterHistoryResult";
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameters returned by the request.</p>
   */
  Parameters?: ParameterHistory[];
}

export namespace GetParameterHistoryResult {
  export const filterSensitiveLog = (obj: GetParameterHistoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParameterHistoryResult =>
    __isa(o, "GetParameterHistoryResult");
}

export interface GetParameterRequest {
  __type?: "GetParameterRequest";
  /**
   * <p>The name of the parameter you want to query.</p>
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for String and
   *    StringList parameter types.</p>
   */
  WithDecryption?: boolean;
}

export namespace GetParameterRequest {
  export const filterSensitiveLog = (obj: GetParameterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParameterRequest =>
    __isa(o, "GetParameterRequest");
}

export interface GetParameterResult {
  __type?: "GetParameterResult";
  /**
   * <p>Information about a parameter.</p>
   */
  Parameter?: Parameter;
}

export namespace GetParameterResult {
  export const filterSensitiveLog = (obj: GetParameterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParameterResult =>
    __isa(o, "GetParameterResult");
}

export interface GetParametersByPathRequest {
  __type?: "GetParametersByPathRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>Filters to limit the request results.</p>
   */
  ParameterFilters?: ParameterStringFilter[];

  /**
   * <p>The hierarchy for the parameter. Hierarchies start with a forward slash (/) and end with the
   *    parameter name. A parameter name hierarchy can have a maximum of 15 levels. Here is an example of
   *    a hierarchy: <code>/Finance/Prod/IAD/WinServ2016/license33</code>
   *          </p>
   */
  Path: string | undefined;

  /**
   * <p>Retrieve all parameters within a hierarchy.</p>
   *          <important>
   *             <p>If a user has access to a path, then the user can access all levels of that path. For
   *     example, if a user has permission to access path <code>/a</code>, then the user can also access
   *      <code>/a/b</code>. Even if a user has explicitly been denied access in IAM for parameter
   *      <code>/a/b</code>, they can still call the GetParametersByPath API action recursively for
   *      <code>/a</code> and view <code>/a/b</code>.</p>
   *          </important>
   */
  Recursive?: boolean;

  /**
   * <p>Retrieve all parameters in a hierarchy with their value decrypted.</p>
   */
  WithDecryption?: boolean;
}

export namespace GetParametersByPathRequest {
  export const filterSensitiveLog = (obj: GetParametersByPathRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParametersByPathRequest =>
    __isa(o, "GetParametersByPathRequest");
}

export interface GetParametersByPathResult {
  __type?: "GetParametersByPathResult";
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameters found in the specified hierarchy.</p>
   */
  Parameters?: Parameter[];
}

export namespace GetParametersByPathResult {
  export const filterSensitiveLog = (obj: GetParametersByPathResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParametersByPathResult =>
    __isa(o, "GetParametersByPathResult");
}

export interface GetParametersRequest {
  __type?: "GetParametersRequest";
  /**
   * <p>Names of the parameters for which you want to query information.</p>
   */
  Names: string[] | undefined;

  /**
   * <p>Return decrypted secure string value. Return decrypted values for secure string parameters.
   *    This flag is ignored for String and StringList parameter types.</p>
   */
  WithDecryption?: boolean;
}

export namespace GetParametersRequest {
  export const filterSensitiveLog = (obj: GetParametersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParametersRequest =>
    __isa(o, "GetParametersRequest");
}

export interface GetParametersResult {
  __type?: "GetParametersResult";
  /**
   * <p>A list of parameters that are not formatted correctly or do not run during an
   *    execution.</p>
   */
  InvalidParameters?: string[];

  /**
   * <p>A list of details for a parameter.</p>
   */
  Parameters?: Parameter[];
}

export namespace GetParametersResult {
  export const filterSensitiveLog = (obj: GetParametersResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetParametersResult =>
    __isa(o, "GetParametersResult");
}

export interface GetPatchBaselineForPatchGroupRequest {
  __type?: "GetPatchBaselineForPatchGroupRequest";
  /**
   * <p>Returns he operating system rule specified for patch groups using the patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>The name of the patch group whose patch baseline should be retrieved.</p>
   */
  PatchGroup: string | undefined;
}

export namespace GetPatchBaselineForPatchGroupRequest {
  export const filterSensitiveLog = (
    obj: GetPatchBaselineForPatchGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPatchBaselineForPatchGroupRequest =>
    __isa(o, "GetPatchBaselineForPatchGroupRequest");
}

export interface GetPatchBaselineForPatchGroupResult {
  __type?: "GetPatchBaselineForPatchGroupResult";
  /**
   * <p>The ID of the patch baseline that should be used for the patch group.</p>
   */
  BaselineId?: string;

  /**
   * <p>The operating system rule specified for patch groups using the patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>The name of the patch group.</p>
   */
  PatchGroup?: string;
}

export namespace GetPatchBaselineForPatchGroupResult {
  export const filterSensitiveLog = (
    obj: GetPatchBaselineForPatchGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPatchBaselineForPatchGroupResult =>
    __isa(o, "GetPatchBaselineForPatchGroupResult");
}

export interface GetPatchBaselineRequest {
  __type?: "GetPatchBaselineRequest";
  /**
   * <p>The ID of the patch baseline to retrieve.</p>
   */
  BaselineId: string | undefined;
}

export namespace GetPatchBaselineRequest {
  export const filterSensitiveLog = (obj: GetPatchBaselineRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPatchBaselineRequest =>
    __isa(o, "GetPatchBaselineRequest");
}

export interface GetPatchBaselineResult {
  __type?: "GetPatchBaselineResult";
  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>Returns the specified compliance severity level for approved patches in the patch
   *    baseline.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the instances. The default value is 'false'. Applies to Linux instances only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>The ID of the retrieved patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The date the patch baseline was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>The date the patch baseline was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>Returns the operating system specified for the patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>Patch groups included in the patch baseline.</p>
   */
  PatchGroups?: string[];

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action specified to take on patches included in the RejectedPatches list. A patch can be
   *    allowed only if it is a dependency of another package, or blocked entirely along with packages
   *    that include it as a dependency.</p>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
   */
  Sources?: PatchSource[];
}

export namespace GetPatchBaselineResult {
  export const filterSensitiveLog = (obj: GetPatchBaselineResult): any => ({
    ...obj,
    ...(obj.Sources && {
      Sources: obj.Sources.map(item => PatchSource.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is GetPatchBaselineResult =>
    __isa(o, "GetPatchBaselineResult");
}

/**
 * <p>The request body of the GetServiceSetting API action.</p>
 */
export interface GetServiceSettingRequest {
  __type?: "GetServiceSettingRequest";
  /**
   * <p>The ID of the service setting to get.</p>
   */
  SettingId: string | undefined;
}

export namespace GetServiceSettingRequest {
  export const filterSensitiveLog = (obj: GetServiceSettingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceSettingRequest =>
    __isa(o, "GetServiceSettingRequest");
}

/**
 * <p>The query result body of the GetServiceSetting API action.</p>
 */
export interface GetServiceSettingResult {
  __type?: "GetServiceSettingResult";
  /**
   * <p>The query result of the current service setting.</p>
   */
  ServiceSetting?: ServiceSetting;
}

export namespace GetServiceSettingResult {
  export const filterSensitiveLog = (obj: GetServiceSettingResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceSettingResult =>
    __isa(o, "GetServiceSettingResult");
}

/**
 * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for
 *     Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>. </p>
 */
export interface HierarchyLevelLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "HierarchyLevelLimitExceededException";
  $fault: "client";
  /**
   * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for
   *     Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   */
  message?: string;
}

export namespace HierarchyLevelLimitExceededException {
  export const filterSensitiveLog = (
    obj: HierarchyLevelLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyLevelLimitExceededException =>
    __isa(o, "HierarchyLevelLimitExceededException");
}

/**
 * <p>Parameter Store does not support changing a parameter type in a hierarchy. For example, you
 *    can't change a parameter from a String type to a SecureString type. You must create a new, unique
 *    parameter.</p>
 */
export interface HierarchyTypeMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "HierarchyTypeMismatchException";
  $fault: "client";
  /**
   * <p>Parameter Store does not support changing a parameter type in a hierarchy. For example, you
   *    can't change a parameter from a String type to a SecureString type. You must create a new, unique
   *    parameter.</p>
   */
  message?: string;
}

export namespace HierarchyTypeMismatchException {
  export const filterSensitiveLog = (
    obj: HierarchyTypeMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyTypeMismatchException =>
    __isa(o, "HierarchyTypeMismatchException");
}

/**
 * <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 */
export interface IdempotentParameterMismatch
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatch";
  $fault: "client";
  Message?: string;
}

export namespace IdempotentParameterMismatch {
  export const filterSensitiveLog = (
    obj: IdempotentParameterMismatch
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdempotentParameterMismatch =>
    __isa(o, "IdempotentParameterMismatch");
}

/**
 * <p>There is a conflict in the policies specified for this parameter. You can't, for example,
 *    specify two Expiration policies for a parameter. Review your policies, and try again.</p>
 */
export interface IncompatiblePolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "IncompatiblePolicyException";
  $fault: "client";
  message?: string;
}

export namespace IncompatiblePolicyException {
  export const filterSensitiveLog = (
    obj: IncompatiblePolicyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IncompatiblePolicyException =>
    __isa(o, "IncompatiblePolicyException");
}

/**
 * <p>Status information about the aggregated associations.</p>
 */
export interface InstanceAggregatedAssociationOverview {
  __type?: "InstanceAggregatedAssociationOverview";
  /**
   * <p>Detailed status information about the aggregated associations.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The number of associations for the instance(s).</p>
   */
  InstanceAssociationStatusAggregatedCount?: { [key: string]: number };
}

export namespace InstanceAggregatedAssociationOverview {
  export const filterSensitiveLog = (
    obj: InstanceAggregatedAssociationOverview
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceAggregatedAssociationOverview =>
    __isa(o, "InstanceAggregatedAssociationOverview");
}

/**
 * <p>One or more association documents on the instance. </p>
 */
export interface InstanceAssociation {
  __type?: "InstanceAssociation";
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>Version information for the association on the instance.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The content of the association document for the instance(s).</p>
   */
  Content?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

export namespace InstanceAssociation {
  export const filterSensitiveLog = (obj: InstanceAssociation): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceAssociation =>
    __isa(o, "InstanceAssociation");
}

/**
 * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface InstanceAssociationOutputLocation {
  __type?: "InstanceAssociationOutputLocation";
  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  S3Location?: S3OutputLocation;
}

export namespace InstanceAssociationOutputLocation {
  export const filterSensitiveLog = (
    obj: InstanceAssociationOutputLocation
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceAssociationOutputLocation =>
    __isa(o, "InstanceAssociationOutputLocation");
}

/**
 * <p>The URL of Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface InstanceAssociationOutputUrl {
  __type?: "InstanceAssociationOutputUrl";
  /**
   * <p>The URL of Amazon S3 bucket where you want to store the results of this request.</p>
   */
  S3OutputUrl?: S3OutputUrl;
}

export namespace InstanceAssociationOutputUrl {
  export const filterSensitiveLog = (
    obj: InstanceAssociationOutputUrl
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceAssociationOutputUrl =>
    __isa(o, "InstanceAssociationOutputUrl");
}

/**
 * <p>Status information about the instance association.</p>
 */
export interface InstanceAssociationStatusInfo {
  __type?: "InstanceAssociationStatusInfo";
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The name of the association applied to the instance.</p>
   */
  AssociationName?: string;

  /**
   * <p>The version of the association applied to the instance.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>Detailed status information about the instance association.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The association document versions.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>An error code returned by the request to create the association.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The date the instance association ran. </p>
   */
  ExecutionDate?: Date;

  /**
   * <p>Summary information about association execution.</p>
   */
  ExecutionSummary?: string;

  /**
   * <p>The instance ID where the association was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the association.</p>
   */
  Name?: string;

  /**
   * <p>A URL for an Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: InstanceAssociationOutputUrl;

  /**
   * <p>Status information about the instance association.</p>
   */
  Status?: string;
}

export namespace InstanceAssociationStatusInfo {
  export const filterSensitiveLog = (
    obj: InstanceAssociationStatusInfo
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceAssociationStatusInfo =>
    __isa(o, "InstanceAssociationStatusInfo");
}

/**
 * <p>Describes a filter for a specific list of instances. </p>
 */
export interface InstanceInformation {
  __type?: "InstanceInformation";
  /**
   * <p>The activation ID created by Systems Manager when the server or VM was registered.</p>
   */
  ActivationId?: string;

  /**
   * <p>The version of SSM Agent running on your Linux instance. </p>
   */
  AgentVersion?: string;

  /**
   * <p>Information about the association.</p>
   */
  AssociationOverview?: InstanceAggregatedAssociationOverview;

  /**
   * <p>The status of the association.</p>
   */
  AssociationStatus?: string;

  /**
   * <p>The fully qualified host name of the managed instance.</p>
   */
  ComputerName?: string;

  /**
   * <p>The IP address of the managed instance.</p>
   */
  IPAddress?: string;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role assigned to the on-premises Systems Manager
   *    managed instances. This call does not return the IAM role for Amazon EC2 instances. </p>
   */
  IamRole?: string;

  /**
   * <p>The instance ID. </p>
   */
  InstanceId?: string;

  /**
   * <p>Indicates whether the latest version of SSM Agent is running on your Linux Managed Instance.
   *    This field does not indicate whether or not the latest version is installed on Windows managed
   *    instances, because some older versions of Windows Server use the EC2Config service to process SSM
   *    requests.</p>
   */
  IsLatestVersion?: boolean;

  /**
   * <p>The date the association was last run.</p>
   */
  LastAssociationExecutionDate?: Date;

  /**
   * <p>The date and time when agent last pinged Systems Manager service. </p>
   */
  LastPingDateTime?: Date;

  /**
   * <p>The last date the association was successfully run.</p>
   */
  LastSuccessfulAssociationExecutionDate?: Date;

  /**
   * <p>The name of the managed instance.</p>
   */
  Name?: string;

  /**
   * <p>Connection status of SSM Agent. </p>
   */
  PingStatus?: PingStatus | string;

  /**
   * <p>The name of the operating system platform running on your instance. </p>
   */
  PlatformName?: string;

  /**
   * <p>The operating system platform type. </p>
   */
  PlatformType?: PlatformType | string;

  /**
   * <p>The version of the OS platform running on your instance. </p>
   */
  PlatformVersion?: string;

  /**
   * <p>The date the server or VM was registered with AWS as a managed instance.</p>
   */
  RegistrationDate?: Date;

  /**
   * <p>The type of instance. Instances are either EC2 instances or managed instances. </p>
   */
  ResourceType?: ResourceType | string;
}

export namespace InstanceInformation {
  export const filterSensitiveLog = (obj: InstanceInformation): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceInformation =>
    __isa(o, "InstanceInformation");
}

/**
 * <p>Describes a filter for a specific list of instances. You can filter instances information by
 *    using tags. You specify tags by using a key-value mapping.</p>
 *          <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The
 *     <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags.
 *   </p>
 */
export interface InstanceInformationFilter {
  __type?: "InstanceInformationFilter";
  /**
   * <p>The name of the filter. </p>
   */
  key: InstanceInformationFilterKey | string | undefined;

  /**
   * <p>The filter values.</p>
   */
  valueSet: string[] | undefined;
}

export namespace InstanceInformationFilter {
  export const filterSensitiveLog = (obj: InstanceInformationFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceInformationFilter =>
    __isa(o, "InstanceInformationFilter");
}

export enum InstanceInformationFilterKey {
  ACTIVATION_IDS = "ActivationIds",
  AGENT_VERSION = "AgentVersion",
  ASSOCIATION_STATUS = "AssociationStatus",
  IAM_ROLE = "IamRole",
  INSTANCE_IDS = "InstanceIds",
  PING_STATUS = "PingStatus",
  PLATFORM_TYPES = "PlatformTypes",
  RESOURCE_TYPE = "ResourceType"
}

/**
 * <p>The filters to describe or get information about your managed instances.</p>
 */
export interface InstanceInformationStringFilter {
  __type?: "InstanceInformationStringFilter";
  /**
   * <p>The filter key name to describe your instances. For example:</p>
   *          <p>"InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|"AssociationStatus"|"Tag
   *    Key"</p>
   */
  Key: string | undefined;

  /**
   * <p>The filter values.</p>
   */
  Values: string[] | undefined;
}

export namespace InstanceInformationStringFilter {
  export const filterSensitiveLog = (
    obj: InstanceInformationStringFilter
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceInformationStringFilter =>
    __isa(o, "InstanceInformationStringFilter");
}

/**
 * <p>Defines the high-level patch compliance state for a managed instance, providing information
 *    about the number of installed, missing, not applicable, and failed patches along with metadata
 *    about the operation when this information was gathered for the instance.</p>
 */
export interface InstancePatchState {
  __type?: "InstancePatchState";
  /**
   * <p>The ID of the patch baseline used to patch the instance.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The number of patches from the patch baseline that were attempted to be installed during the
   *    last patching operation, but failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>An https URL or an Amazon S3 path-style URL to a list of patches to be installed. This patch
   *    installation list, which you maintain in an Amazon S3 bucket in YAML format and specify in the SSM
   *    document <code>AWS-RunPatchBaseline</code>, overrides the patches specified by the default patch
   *    baseline.</p>
   *          <p>For more information about the <code>InstallOverrideList</code> parameter, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html">About the SSM Document
   *     AWS-RunPatchBaseline</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  InstallOverrideList?: string;

  /**
   * <p>The number of patches from the patch baseline that are installed on the instance.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches not specified in the patch baseline that are installed on the
   *    instance.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches installed by Patch Manager since the last time the instance was
   *    rebooted.</p>
   */
  InstalledPendingRebootCount?: number;

  /**
   * <p>The number of instances with patches installed that are specified in a RejectedPatches list.
   *    Patches with a status of <i>InstalledRejected</i> were typically installed before
   *    they were added to a RejectedPatches list.</p>
   *          <note>
   *             <p>If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of
   *     InstalledRejectedCount will always be 0 (zero).</p>
   *          </note>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The ID of the managed instance the high-level patch compliance information was collected
   *    for.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The time of the last attempt to patch the instance with <code>NoReboot</code> specified as
   *    the reboot option.</p>
   */
  LastNoRebootInstallOperationTime?: Date;

  /**
   * <p>The number of patches from the patch baseline that are applicable for the instance but
   *    aren't currently installed.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the patch baseline that aren't applicable for the instance and
   *    therefore aren't installed on the instance. This number may be truncated if the list of patch
   *    names is very large. The number of patches beyond this limit are reported in
   *     <code>UnreportedNotApplicableCount</code>.</p>
   */
  NotApplicableCount?: number;

  /**
   * <p>The type of patching operation that was performed: SCAN (assess patch compliance state) or
   *    INSTALL (install missing patches).</p>
   */
  Operation: PatchOperationType | string | undefined;

  /**
   * <p>The time the most recent patching operation completed on the instance.</p>
   */
  OperationEndTime: Date | undefined;

  /**
   * <p>The time the most recent patching operation was started on the instance.</p>
   */
  OperationStartTime: Date | undefined;

  /**
   * <p>Placeholder information. This field will always be empty in the current release of the
   *    service.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The name of the patch group the managed instance belongs to.</p>
   */
  PatchGroup: string | undefined;

  /**
   * <p>Indicates the reboot option specified in the patch baseline.</p>
   *          <note>
   *             <p>Reboot options apply to <code>Install</code> operations only. Reboots are not attempted for
   *     Patch Manager <code>Scan</code> operations.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RebootIfNeeded</b>: Patch Manager tries to reboot the
   *      instance if it installed any patches, or if any patches are detected with a status of
   *       <code>InstalledPendingReboot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NoReboot</b>: Patch Manager attempts to install missing
   *      packages without trying to reboot the system. Patches installed with this option are assigned a
   *      status of <code>InstalledPendingReboot</code>. These patches might not be in effect until a
   *      reboot is performed.</p>
   *             </li>
   *          </ul>
   */
  RebootOption?: RebootOption | string;

  /**
   * <p>The ID of the patch baseline snapshot used during the patching operation when this
   *    compliance data was collected.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The number of patches beyond the supported limit of <code>NotApplicableCount</code> that are
   *    not reported by name to Systems Manager Inventory.</p>
   */
  UnreportedNotApplicableCount?: number;
}

export namespace InstancePatchState {
  export const filterSensitiveLog = (obj: InstancePatchState): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is InstancePatchState =>
    __isa(o, "InstancePatchState");
}

/**
 * <p>Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the
 *    information returned by the API.</p>
 */
export interface InstancePatchStateFilter {
  __type?: "InstancePatchStateFilter";
  /**
   * <p>The key for the filter. Supported values are FailedCount, InstalledCount,
   *    InstalledOtherCount, MissingCount and NotApplicableCount.</p>
   */
  Key: string | undefined;

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, LessThan or
   *    GreaterThan.</p>
   */
  Type: InstancePatchStateOperatorType | string | undefined;

  /**
   * <p>The value for the filter, must be an integer greater than or equal to 0.</p>
   */
  Values: string[] | undefined;
}

export namespace InstancePatchStateFilter {
  export const filterSensitiveLog = (obj: InstancePatchStateFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstancePatchStateFilter =>
    __isa(o, "InstancePatchStateFilter");
}

export enum InstancePatchStateOperatorType {
  EQUAL = "Equal",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
  NOT_EQUAL = "NotEqual"
}

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerError =>
    __isa(o, "InternalServerError");
}

/**
 * <p>The activation is not valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode do not match.</p>
 */
export interface InvalidActivation extends __SmithyException, $MetadataBearer {
  name: "InvalidActivation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidActivation {
  export const filterSensitiveLog = (obj: InvalidActivation): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidActivation =>
    __isa(o, "InvalidActivation");
}

/**
 * <p>The activation ID is not valid. Verify the you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 */
export interface InvalidActivationId
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidActivationId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidActivationId {
  export const filterSensitiveLog = (obj: InvalidActivationId): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidActivationId =>
    __isa(o, "InvalidActivationId");
}

/**
 * <p>The specified aggregator is not valid for inventory groups. Verify that the aggregator uses
 *    a valid inventory type such as <code>AWS:Application</code> or
 *     <code>AWS:InstanceInformation</code>.</p>
 */
export interface InvalidAggregatorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAggregatorException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAggregatorException {
  export const filterSensitiveLog = (obj: InvalidAggregatorException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAggregatorException =>
    __isa(o, "InvalidAggregatorException");
}

/**
 * <p>The request does not meet the regular expression requirement.</p>
 */
export interface InvalidAllowedPatternException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAllowedPatternException";
  $fault: "client";
  /**
   * <p>The request does not meet the regular expression requirement.</p>
   */
  message?: string;
}

export namespace InvalidAllowedPatternException {
  export const filterSensitiveLog = (
    obj: InvalidAllowedPatternException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAllowedPatternException =>
    __isa(o, "InvalidAllowedPatternException");
}

/**
 * <p>The association is not valid or does not exist. </p>
 */
export interface InvalidAssociation extends __SmithyException, $MetadataBearer {
  name: "InvalidAssociation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAssociation {
  export const filterSensitiveLog = (obj: InvalidAssociation): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAssociation =>
    __isa(o, "InvalidAssociation");
}

/**
 * <p>The version you specified is not valid. Use ListAssociationVersions to view all versions of
 *    an association according to the association ID. Or, use the <code>$LATEST</code> parameter to
 *    view the latest version of the association.</p>
 */
export interface InvalidAssociationVersion
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAssociationVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAssociationVersion {
  export const filterSensitiveLog = (obj: InvalidAssociationVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAssociationVersion =>
    __isa(o, "InvalidAssociationVersion");
}

/**
 * <p>The supplied parameters for invoking the specified Automation document are incorrect. For
 *    example, they may not match the set of parameters permitted for the specified Automation
 *    document.</p>
 */
export interface InvalidAutomationExecutionParametersException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAutomationExecutionParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAutomationExecutionParametersException {
  export const filterSensitiveLog = (
    obj: InvalidAutomationExecutionParametersException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidAutomationExecutionParametersException =>
    __isa(o, "InvalidAutomationExecutionParametersException");
}

/**
 * <p>The signal is not valid for the current Automation execution.</p>
 */
export interface InvalidAutomationSignalException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAutomationSignalException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAutomationSignalException {
  export const filterSensitiveLog = (
    obj: InvalidAutomationSignalException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAutomationSignalException =>
    __isa(o, "InvalidAutomationSignalException");
}

/**
 * <p>The specified update status operation is not valid.</p>
 */
export interface InvalidAutomationStatusUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAutomationStatusUpdateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAutomationStatusUpdateException {
  export const filterSensitiveLog = (
    obj: InvalidAutomationStatusUpdateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAutomationStatusUpdateException =>
    __isa(o, "InvalidAutomationStatusUpdateException");
}

export interface InvalidCommandId extends __SmithyException, $MetadataBearer {
  name: "InvalidCommandId";
  $fault: "client";
}

export namespace InvalidCommandId {
  export const filterSensitiveLog = (obj: InvalidCommandId): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCommandId =>
    __isa(o, "InvalidCommandId");
}

/**
 * <p>One or more of the parameters specified for the delete operation is not valid. Verify all
 *    parameters and try again.</p>
 */
export interface InvalidDeleteInventoryParametersException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDeleteInventoryParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeleteInventoryParametersException {
  export const filterSensitiveLog = (
    obj: InvalidDeleteInventoryParametersException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDeleteInventoryParametersException =>
    __isa(o, "InvalidDeleteInventoryParametersException");
}

/**
 * <p>The ID specified for the delete operation does not exist or is not valid. Verify the ID and
 *    try again.</p>
 */
export interface InvalidDeletionIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDeletionIdException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeletionIdException {
  export const filterSensitiveLog = (obj: InvalidDeletionIdException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDeletionIdException =>
    __isa(o, "InvalidDeletionIdException");
}

/**
 * <p>The specified document does not exist.</p>
 */
export interface InvalidDocument extends __SmithyException, $MetadataBearer {
  name: "InvalidDocument";
  $fault: "client";
  /**
   * <p>The document does not exist or the document is not available to the user. This exception can
   *    be issued by CreateAssociation, CreateAssociationBatch, DeleteAssociation, DeleteDocument,
   *    DescribeAssociation, DescribeDocument, GetDocument, SendCommand, or UpdateAssociationStatus.
   *   </p>
   */
  Message?: string;
}

export namespace InvalidDocument {
  export const filterSensitiveLog = (obj: InvalidDocument): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDocument =>
    __isa(o, "InvalidDocument");
}

/**
 * <p>The content for the document is not valid.</p>
 */
export interface InvalidDocumentContent
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDocumentContent";
  $fault: "client";
  /**
   * <p>A description of the validation error.</p>
   */
  Message?: string;
}

export namespace InvalidDocumentContent {
  export const filterSensitiveLog = (obj: InvalidDocumentContent): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDocumentContent =>
    __isa(o, "InvalidDocumentContent");
}

/**
 * <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 */
export interface InvalidDocumentOperation
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDocumentOperation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentOperation {
  export const filterSensitiveLog = (obj: InvalidDocumentOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDocumentOperation =>
    __isa(o, "InvalidDocumentOperation");
}

/**
 * <p>The version of the document schema is not supported.</p>
 */
export interface InvalidDocumentSchemaVersion
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDocumentSchemaVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentSchemaVersion {
  export const filterSensitiveLog = (
    obj: InvalidDocumentSchemaVersion
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDocumentSchemaVersion =>
    __isa(o, "InvalidDocumentSchemaVersion");
}

/**
 * <p>The document type is not valid. Valid document types are described in the
 *     <code>DocumentType</code> property.</p>
 */
export interface InvalidDocumentType
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDocumentType";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentType {
  export const filterSensitiveLog = (obj: InvalidDocumentType): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDocumentType =>
    __isa(o, "InvalidDocumentType");
}

/**
 * <p>The document version is not valid or does not exist.</p>
 */
export interface InvalidDocumentVersion
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDocumentVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentVersion {
  export const filterSensitiveLog = (obj: InvalidDocumentVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDocumentVersion =>
    __isa(o, "InvalidDocumentVersion");
}

/**
 * <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
 */
export interface InvalidFilter extends __SmithyException, $MetadataBearer {
  name: "InvalidFilter";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilter {
  export const filterSensitiveLog = (obj: InvalidFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFilter => __isa(o, "InvalidFilter");
}

/**
 * <p>The specified key is not valid.</p>
 */
export interface InvalidFilterKey extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterKey";
  $fault: "client";
}

export namespace InvalidFilterKey {
  export const filterSensitiveLog = (obj: InvalidFilterKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFilterKey =>
    __isa(o, "InvalidFilterKey");
}

/**
 * <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 */
export interface InvalidFilterOption
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidFilterOption";
  $fault: "client";
  /**
   * <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path
   *    filter, valid options are Recursive and OneLevel.</p>
   */
  message?: string;
}

export namespace InvalidFilterOption {
  export const filterSensitiveLog = (obj: InvalidFilterOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFilterOption =>
    __isa(o, "InvalidFilterOption");
}

/**
 * <p>The filter value is not valid. Verify the value and try again.</p>
 */
export interface InvalidFilterValue extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterValue";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilterValue {
  export const filterSensitiveLog = (obj: InvalidFilterValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFilterValue =>
    __isa(o, "InvalidFilterValue");
}

/**
 * <p>The following problems can cause this exception:</p>
 *          <p>You do not have permission to access the instance.</p>
 *          <p>SSM Agent is not running. Verify that SSM Agent is running.</p>
 *          <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *          <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping.
 *    Invalid states are: Shutting-down and Terminated.</p>
 */
export interface InvalidInstanceId extends __SmithyException, $MetadataBearer {
  name: "InvalidInstanceId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInstanceId {
  export const filterSensitiveLog = (obj: InvalidInstanceId): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInstanceId =>
    __isa(o, "InvalidInstanceId");
}

/**
 * <p>The specified filter value is not valid.</p>
 */
export interface InvalidInstanceInformationFilterValue
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInstanceInformationFilterValue";
  $fault: "client";
  message?: string;
}

export namespace InvalidInstanceInformationFilterValue {
  export const filterSensitiveLog = (
    obj: InvalidInstanceInformationFilterValue
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInstanceInformationFilterValue =>
    __isa(o, "InvalidInstanceInformationFilterValue");
}

/**
 * <p>The specified inventory group is not valid.</p>
 */
export interface InvalidInventoryGroupException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInventoryGroupException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryGroupException {
  export const filterSensitiveLog = (
    obj: InvalidInventoryGroupException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInventoryGroupException =>
    __isa(o, "InvalidInventoryGroupException");
}

/**
 * <p>You specified invalid keys or values in the <code>Context</code> attribute for
 *     <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
 */
export interface InvalidInventoryItemContextException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInventoryItemContextException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryItemContextException {
  export const filterSensitiveLog = (
    obj: InvalidInventoryItemContextException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInventoryItemContextException =>
    __isa(o, "InvalidInventoryItemContextException");
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidInventoryRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInventoryRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryRequestException {
  export const filterSensitiveLog = (
    obj: InvalidInventoryRequestException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInventoryRequestException =>
    __isa(o, "InvalidInventoryRequestException");
}

/**
 * <p>One or more content items is not valid.</p>
 */
export interface InvalidItemContentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidItemContentException";
  $fault: "client";
  Message?: string;
  TypeName?: string;
}

export namespace InvalidItemContentException {
  export const filterSensitiveLog = (
    obj: InvalidItemContentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidItemContentException =>
    __isa(o, "InvalidItemContentException");
}

/**
 * <p>The query key ID is not valid.</p>
 */
export interface InvalidKeyId extends __SmithyException, $MetadataBearer {
  name: "InvalidKeyId";
  $fault: "client";
  message?: string;
}

export namespace InvalidKeyId {
  export const filterSensitiveLog = (obj: InvalidKeyId): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidKeyId => __isa(o, "InvalidKeyId");
}

/**
 * <p>The specified token is not valid.</p>
 */
export interface InvalidNextToken extends __SmithyException, $MetadataBearer {
  name: "InvalidNextToken";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextToken {
  export const filterSensitiveLog = (obj: InvalidNextToken): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextToken =>
    __isa(o, "InvalidNextToken");
}

/**
 * <p>One or more configuration items is not valid. Verify that a valid Amazon Resource Name (ARN)
 *    was provided for an Amazon SNS topic.</p>
 */
export interface InvalidNotificationConfig
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNotificationConfig";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNotificationConfig {
  export const filterSensitiveLog = (obj: InvalidNotificationConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNotificationConfig =>
    __isa(o, "InvalidNotificationConfig");
}

/**
 * <p>The delete inventory option specified is not valid. Verify the option and try again.</p>
 */
export interface InvalidOptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOptionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOptionException {
  export const filterSensitiveLog = (obj: InvalidOptionException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOptionException =>
    __isa(o, "InvalidOptionException");
}

/**
 * <p>The S3 bucket does not exist.</p>
 */
export interface InvalidOutputFolder
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOutputFolder";
  $fault: "client";
}

export namespace InvalidOutputFolder {
  export const filterSensitiveLog = (obj: InvalidOutputFolder): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOutputFolder =>
    __isa(o, "InvalidOutputFolder");
}

/**
 * <p>The output location is not valid or does not exist.</p>
 */
export interface InvalidOutputLocation
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOutputLocation";
  $fault: "client";
}

export namespace InvalidOutputLocation {
  export const filterSensitiveLog = (obj: InvalidOutputLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOutputLocation =>
    __isa(o, "InvalidOutputLocation");
}

/**
 * <p>You must specify values for all required parameters in the Systems Manager document. You can only
 *    supply values to parameters defined in the Systems Manager document.</p>
 */
export interface InvalidParameters extends __SmithyException, $MetadataBearer {
  name: "InvalidParameters";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameters {
  export const filterSensitiveLog = (obj: InvalidParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameters =>
    __isa(o, "InvalidParameters");
}

/**
 * <p>The permission type is not supported. <i>Share</i> is the only supported
 *    permission type.</p>
 */
export interface InvalidPermissionType
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPermissionType";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPermissionType {
  export const filterSensitiveLog = (obj: InvalidPermissionType): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPermissionType =>
    __isa(o, "InvalidPermissionType");
}

/**
 * <p>The plugin name is not valid.</p>
 */
export interface InvalidPluginName extends __SmithyException, $MetadataBearer {
  name: "InvalidPluginName";
  $fault: "client";
}

export namespace InvalidPluginName {
  export const filterSensitiveLog = (obj: InvalidPluginName): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPluginName =>
    __isa(o, "InvalidPluginName");
}

/**
 * <p>A policy attribute or its value is invalid. </p>
 */
export interface InvalidPolicyAttributeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPolicyAttributeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyAttributeException {
  export const filterSensitiveLog = (
    obj: InvalidPolicyAttributeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPolicyAttributeException =>
    __isa(o, "InvalidPolicyAttributeException");
}

/**
 * <p>The policy type is not supported. Parameter Store supports the following policy types:
 *    Expiration, ExpirationNotification, and NoChangeNotification.</p>
 */
export interface InvalidPolicyTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPolicyTypeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyTypeException {
  export const filterSensitiveLog = (obj: InvalidPolicyTypeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPolicyTypeException =>
    __isa(o, "InvalidPolicyTypeException");
}

/**
 * <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
 */
export interface InvalidResourceId extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceId";
  $fault: "client";
}

export namespace InvalidResourceId {
  export const filterSensitiveLog = (obj: InvalidResourceId): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceId =>
    __isa(o, "InvalidResourceId");
}

/**
 * <p>The resource type is not valid. For example, if you are attempting to tag an instance, the
 *    instance must be a registered, managed instance.</p>
 */
export interface InvalidResourceType
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceType";
  $fault: "client";
}

export namespace InvalidResourceType {
  export const filterSensitiveLog = (obj: InvalidResourceType): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceType =>
    __isa(o, "InvalidResourceType");
}

/**
 * <p>The specified inventory item result attribute is not valid.</p>
 */
export interface InvalidResultAttributeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResultAttributeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResultAttributeException {
  export const filterSensitiveLog = (
    obj: InvalidResultAttributeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResultAttributeException =>
    __isa(o, "InvalidResultAttributeException");
}

/**
 * <p>The role name can't contain invalid characters. Also verify that you specified an IAM role
 *    for notifications that includes the required trust policy. For information about configuring the
 *    IAM role for Run Command notifications, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/rc-sns-notifications.html">Configuring Amazon SNS Notifications for Run Command</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface InvalidRole extends __SmithyException, $MetadataBearer {
  name: "InvalidRole";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRole {
  export const filterSensitiveLog = (obj: InvalidRole): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRole => __isa(o, "InvalidRole");
}

/**
 * <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
 */
export interface InvalidSchedule extends __SmithyException, $MetadataBearer {
  name: "InvalidSchedule";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSchedule {
  export const filterSensitiveLog = (obj: InvalidSchedule): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSchedule =>
    __isa(o, "InvalidSchedule");
}

/**
 * <p>The target is not valid or does not exist. It might not be configured for EC2 Systems
 *    Manager or you might not have permission to perform the operation.</p>
 */
export interface InvalidTarget extends __SmithyException, $MetadataBearer {
  name: "InvalidTarget";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTarget {
  export const filterSensitiveLog = (obj: InvalidTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTarget => __isa(o, "InvalidTarget");
}

/**
 * <p>The parameter type name is not valid.</p>
 */
export interface InvalidTypeNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTypeNameException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTypeNameException {
  export const filterSensitiveLog = (obj: InvalidTypeNameException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTypeNameException =>
    __isa(o, "InvalidTypeNameException");
}

/**
 * <p>The update is not valid.</p>
 */
export interface InvalidUpdate extends __SmithyException, $MetadataBearer {
  name: "InvalidUpdate";
  $fault: "client";
  Message?: string;
}

export namespace InvalidUpdate {
  export const filterSensitiveLog = (obj: InvalidUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidUpdate => __isa(o, "InvalidUpdate");
}

/**
 * <p>Specifies the inventory type and attribute for the aggregation execution.</p>
 */
export interface InventoryAggregator {
  __type?: "InventoryAggregator";
  /**
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * <p>The inventory type and attribute name for aggregation.</p>
   */
  Expression?: string;

  /**
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
   *    return a count of resources that match and don't match the specified criteria.</p>
   */
  Groups?: InventoryGroup[];
}

export namespace InventoryAggregator {
  export const filterSensitiveLog = (obj: InventoryAggregator): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryAggregator =>
    __isa(o, "InventoryAggregator");
}

export enum InventoryAttributeDataType {
  NUMBER = "number",
  STRING = "string"
}

export enum InventoryDeletionStatus {
  COMPLETE = "Complete",
  IN_PROGRESS = "InProgress"
}

/**
 * <p>Status information returned by the <code>DeleteInventory</code> action.</p>
 */
export interface InventoryDeletionStatusItem {
  __type?: "InventoryDeletionStatusItem";
  /**
   * <p>The deletion ID returned by the <code>DeleteInventory</code> action.</p>
   */
  DeletionId?: string;

  /**
   * <p>The UTC timestamp when the delete operation started.</p>
   */
  DeletionStartTime?: Date;

  /**
   * <p>Information about the delete operation. For more information about this summary, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-custom.html#sysman-inventory-delete">Understanding the
   *     Delete Inventory Summary</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: InventoryDeletionSummary;

  /**
   * <p>The status of the operation. Possible values are InProgress and Complete.</p>
   */
  LastStatus?: InventoryDeletionStatus | string;

  /**
   * <p>Information about the status.</p>
   */
  LastStatusMessage?: string;

  /**
   * <p>The UTC timestamp of when the last status report.</p>
   */
  LastStatusUpdateTime?: Date;

  /**
   * <p>The name of the inventory data type.</p>
   */
  TypeName?: string;
}

export namespace InventoryDeletionStatusItem {
  export const filterSensitiveLog = (
    obj: InventoryDeletionStatusItem
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryDeletionStatusItem =>
    __isa(o, "InventoryDeletionStatusItem");
}

/**
 * <p>Information about the delete operation.</p>
 */
export interface InventoryDeletionSummary {
  __type?: "InventoryDeletionSummary";
  /**
   * <p>Remaining number of items to delete.</p>
   */
  RemainingCount?: number;

  /**
   * <p>A list of counts and versions for deleted items.</p>
   */
  SummaryItems?: InventoryDeletionSummaryItem[];

  /**
   * <p>The total number of items to delete. This count does not change during the delete
   *    operation.</p>
   */
  TotalCount?: number;
}

export namespace InventoryDeletionSummary {
  export const filterSensitiveLog = (obj: InventoryDeletionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryDeletionSummary =>
    __isa(o, "InventoryDeletionSummary");
}

/**
 * <p>Either a count, remaining count, or a version number in a delete inventory summary.</p>
 */
export interface InventoryDeletionSummaryItem {
  __type?: "InventoryDeletionSummaryItem";
  /**
   * <p>A count of the number of deleted items.</p>
   */
  Count?: number;

  /**
   * <p>The remaining number of items to delete.</p>
   */
  RemainingCount?: number;

  /**
   * <p>The inventory type version.</p>
   */
  Version?: string;
}

export namespace InventoryDeletionSummaryItem {
  export const filterSensitiveLog = (
    obj: InventoryDeletionSummaryItem
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryDeletionSummaryItem =>
    __isa(o, "InventoryDeletionSummaryItem");
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface InventoryFilter {
  __type?: "InventoryFilter";
  /**
   * <p>The name of the filter key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The type of filter.</p>
   */
  Type?: InventoryQueryOperatorType | string;

  /**
   * <p>Inventory filter values. Example: inventory filter where instance IDs are specified as
   *    values Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g, i-1a2b3c4d5e6,Type=Equal
   *   </p>
   */
  Values: string[] | undefined;
}

export namespace InventoryFilter {
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryFilter =>
    __isa(o, "InventoryFilter");
}

/**
 * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
 *    return a count of resources that match and don't match the specified criteria.</p>
 */
export interface InventoryGroup {
  __type?: "InventoryGroup";
  /**
   * <p>Filters define the criteria for the group. The <code>matchingCount</code> field displays the
   *    number of resources that match the criteria. The <code>notMatchingCount</code> field displays the
   *    number of resources that don't match the criteria. </p>
   */
  Filters: InventoryFilter[] | undefined;

  /**
   * <p>The name of the group.</p>
   */
  Name: string | undefined;
}

export namespace InventoryGroup {
  export const filterSensitiveLog = (obj: InventoryGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryGroup =>
    __isa(o, "InventoryGroup");
}

/**
 * <p>Information collected from managed instances based on your inventory policy document</p>
 */
export interface InventoryItem {
  __type?: "InventoryItem";
  /**
   * <p>The time the inventory information was collected.</p>
   */
  CaptureTime: string | undefined;

  /**
   * <p>The inventory data of the inventory type.</p>
   */
  Content?: { [key: string]: string }[];

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API does not update the inventory item type
   *    contents if the MD5 hash has not changed since last update. </p>
   */
  ContentHash?: string;

  /**
   * <p>A map of associated properties for a specified inventory type. For example, with this
   *    attribute, you can specify the <code>ExecutionId</code>, <code>ExecutionType</code>,
   *     <code>ComplianceType</code> properties of the <code>AWS:ComplianceItem</code> type.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>The schema version for the inventory item.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The name of the inventory type. Default inventory item type names start with AWS. Custom
   *    inventory type names will start with Custom. Default inventory item types include the following:
   *    AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and
   *    AWS:WindowsUpdate.</p>
   */
  TypeName: string | undefined;
}

export namespace InventoryItem {
  export const filterSensitiveLog = (obj: InventoryItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryItem => __isa(o, "InventoryItem");
}

/**
 * <p>Attributes are the entries within the inventory item content. It contains name and
 *    value.</p>
 */
export interface InventoryItemAttribute {
  __type?: "InventoryItemAttribute";
  /**
   * <p>The data type of the inventory item attribute. </p>
   */
  DataType: InventoryAttributeDataType | string | undefined;

  /**
   * <p>Name of the inventory item attribute.</p>
   */
  Name: string | undefined;
}

export namespace InventoryItemAttribute {
  export const filterSensitiveLog = (obj: InventoryItemAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryItemAttribute =>
    __isa(o, "InventoryItemAttribute");
}

/**
 * <p>The inventory item schema definition. Users can use this to compose inventory query
 *    filters.</p>
 */
export interface InventoryItemSchema {
  __type?: "InventoryItemSchema";
  /**
   * <p>The schema attributes for inventory. This contains data type and attribute name.</p>
   */
  Attributes: InventoryItemAttribute[] | undefined;

  /**
   * <p>The alias name of the inventory type. The alias name is used for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the inventory type. Default inventory item type names start with AWS. Custom
   *    inventory type names will start with Custom. Default inventory item types include the following:
   *    AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and
   *    AWS:WindowsUpdate.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory item.</p>
   */
  Version?: string;
}

export namespace InventoryItemSchema {
  export const filterSensitiveLog = (obj: InventoryItemSchema): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryItemSchema =>
    __isa(o, "InventoryItemSchema");
}

export enum InventoryQueryOperatorType {
  BEGIN_WITH = "BeginWith",
  EQUAL = "Equal",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
  NOT_EQUAL = "NotEqual"
}

/**
 * <p>Inventory query results.</p>
 */
export interface InventoryResultEntity {
  __type?: "InventoryResultEntity";
  /**
   * <p>The data section in the inventory result entity JSON.</p>
   */
  Data?: { [key: string]: InventoryResultItem };

  /**
   * <p>ID of the inventory result entity. For example, for managed instance inventory the result
   *    will be the managed instance ID. For EC2 instance inventory, the result will be the instance ID.
   *   </p>
   */
  Id?: string;
}

export namespace InventoryResultEntity {
  export const filterSensitiveLog = (obj: InventoryResultEntity): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryResultEntity =>
    __isa(o, "InventoryResultEntity");
}

/**
 * <p>The inventory result item.</p>
 */
export interface InventoryResultItem {
  __type?: "InventoryResultItem";
  /**
   * <p>The time inventory item data was captured.</p>
   */
  CaptureTime?: string;

  /**
   * <p>Contains all the inventory data of the item type. Results include attribute names and
   *    values. </p>
   */
  Content: { [key: string]: string }[] | undefined;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API does not update the inventory item type
   *    contents if the MD5 hash has not changed since last update. </p>
   */
  ContentHash?: string;

  /**
   * <p>The schema version for the inventory result item/</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The name of the inventory result item type.</p>
   */
  TypeName: string | undefined;
}

export namespace InventoryResultItem {
  export const filterSensitiveLog = (obj: InventoryResultItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is InventoryResultItem =>
    __isa(o, "InventoryResultItem");
}

export enum InventorySchemaDeleteOption {
  DELETE_SCHEMA = "DeleteSchema",
  DISABLE_SCHEMA = "DisableSchema"
}

/**
 * <p>The command ID and instance ID you specified did not match any invocations. Verify the
 *    command ID and the instance ID and try again. </p>
 */
export interface InvocationDoesNotExist
  extends __SmithyException,
    $MetadataBearer {
  name: "InvocationDoesNotExist";
  $fault: "client";
}

export namespace InvocationDoesNotExist {
  export const filterSensitiveLog = (obj: InvocationDoesNotExist): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvocationDoesNotExist =>
    __isa(o, "InvocationDoesNotExist");
}

/**
 * <p>The inventory item has invalid content. </p>
 */
export interface ItemContentMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "ItemContentMismatchException";
  $fault: "client";
  Message?: string;
  TypeName?: string;
}

export namespace ItemContentMismatchException {
  export const filterSensitiveLog = (
    obj: ItemContentMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ItemContentMismatchException =>
    __isa(o, "ItemContentMismatchException");
}

/**
 * <p>The inventory item size has exceeded the size limit.</p>
 */
export interface ItemSizeLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ItemSizeLimitExceededException";
  $fault: "client";
  Message?: string;
  TypeName?: string;
}

export namespace ItemSizeLimitExceededException {
  export const filterSensitiveLog = (
    obj: ItemSizeLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ItemSizeLimitExceededException =>
    __isa(o, "ItemSizeLimitExceededException");
}

export interface LabelParameterVersionRequest {
  __type?: "LabelParameterVersionRequest";
  /**
   * <p>One or more labels to attach to the specified parameter version.</p>
   */
  Labels: string[] | undefined;

  /**
   * <p>The parameter name on which you want to attach one or more labels.</p>
   */
  Name: string | undefined;

  /**
   * <p>The specific version of the parameter on which you want to attach one or more labels. If no
   *    version is specified, the system attaches the label to the latest version.</p>
   */
  ParameterVersion?: number;
}

export namespace LabelParameterVersionRequest {
  export const filterSensitiveLog = (
    obj: LabelParameterVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelParameterVersionRequest =>
    __isa(o, "LabelParameterVersionRequest");
}

export interface LabelParameterVersionResult {
  __type?: "LabelParameterVersionResult";
  /**
   * <p>The label does not meet the requirements. For information about parameter label
   *    requirements, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html">Labeling
   *     Parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  InvalidLabels?: string[];

  /**
   * <p>The version of the parameter that has been labeled.</p>
   */
  ParameterVersion?: number;
}

export namespace LabelParameterVersionResult {
  export const filterSensitiveLog = (
    obj: LabelParameterVersionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelParameterVersionResult =>
    __isa(o, "LabelParameterVersionResult");
}

export enum LastResourceDataSyncStatus {
  FAILED = "Failed",
  INPROGRESS = "InProgress",
  SUCCESSFUL = "Successful"
}

export interface ListAssociationsRequest {
  __type?: "ListAssociationsRequest";
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  AssociationFilterList?: AssociationFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace ListAssociationsRequest {
  export const filterSensitiveLog = (obj: ListAssociationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAssociationsRequest =>
    __isa(o, "ListAssociationsRequest");
}

export interface ListAssociationsResult {
  __type?: "ListAssociationsResult";
  /**
   * <p>The associations.</p>
   */
  Associations?: Association[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationsResult {
  export const filterSensitiveLog = (obj: ListAssociationsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAssociationsResult =>
    __isa(o, "ListAssociationsResult");
}

export interface ListAssociationVersionsRequest {
  __type?: "ListAssociationVersionsRequest";
  /**
   * <p>The association ID for which you want to view all versions.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListAssociationVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListAssociationVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAssociationVersionsRequest =>
    __isa(o, "ListAssociationVersionsRequest");
}

export interface ListAssociationVersionsResult {
  __type?: "ListAssociationVersionsResult";
  /**
   * <p>Information about all versions of the association for the specified association ID.</p>
   */
  AssociationVersions?: AssociationVersionInfo[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationVersionsResult {
  export const filterSensitiveLog = (
    obj: ListAssociationVersionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAssociationVersionsResult =>
    __isa(o, "ListAssociationVersionsResult");
}

export interface ListCommandInvocationsRequest {
  __type?: "ListCommandInvocationsRequest";
  /**
   * <p>(Optional) The invocations for a specific command ID.</p>
   */
  CommandId?: string;

  /**
   * <p>(Optional) If set this returns the response of the command executions and any command
   *    output. By default this is set to False. </p>
   */
  Details?: boolean;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of results. Note
   *    that the <code>DocumentName</code> filter is not supported for ListCommandInvocations.</p>
   */
  Filters?: CommandFilter[];

  /**
   * <p>(Optional) The command execution details for a specific instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a
   *    token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;
}

export namespace ListCommandInvocationsRequest {
  export const filterSensitiveLog = (
    obj: ListCommandInvocationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCommandInvocationsRequest =>
    __isa(o, "ListCommandInvocationsRequest");
}

export interface ListCommandInvocationsResult {
  __type?: "ListCommandInvocationsResult";
  /**
   * <p>(Optional) A list of all invocations. </p>
   */
  CommandInvocations?: CommandInvocation[];

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;
}

export namespace ListCommandInvocationsResult {
  export const filterSensitiveLog = (
    obj: ListCommandInvocationsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCommandInvocationsResult =>
    __isa(o, "ListCommandInvocationsResult");
}

export interface ListCommandsRequest {
  __type?: "ListCommandsRequest";
  /**
   * <p>(Optional) If provided, lists only the specified command.</p>
   */
  CommandId?: string;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of results.
   *   </p>
   */
  Filters?: CommandFilter[];

  /**
   * <p>(Optional) Lists commands issued against this instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a
   *    token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;
}

export namespace ListCommandsRequest {
  export const filterSensitiveLog = (obj: ListCommandsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCommandsRequest =>
    __isa(o, "ListCommandsRequest");
}

export interface ListCommandsResult {
  __type?: "ListCommandsResult";
  /**
   * <p>(Optional) The list of commands requested by the user. </p>
   */
  Commands?: Command[];

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;
}

export namespace ListCommandsResult {
  export const filterSensitiveLog = (obj: ListCommandsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCommandsResult =>
    __isa(o, "ListCommandsResult");
}

export interface ListComplianceItemsRequest {
  __type?: "ListComplianceItemsRequest";
  /**
   * <p>One or more compliance filters. Use a filter to return a more specific list of
   *    results.</p>
   */
  Filters?: ComplianceStringFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The ID for the resources from which to get compliance information. Currently, you can only
   *    specify one resource ID.</p>
   */
  ResourceIds?: string[];

  /**
   * <p>The type of resource from which to get compliance information. Currently, the only supported
   *    resource type is <code>ManagedInstance</code>.</p>
   */
  ResourceTypes?: string[];
}

export namespace ListComplianceItemsRequest {
  export const filterSensitiveLog = (obj: ListComplianceItemsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListComplianceItemsRequest =>
    __isa(o, "ListComplianceItemsRequest");
}

export interface ListComplianceItemsResult {
  __type?: "ListComplianceItemsResult";
  /**
   * <p>A list of compliance information for the specified resource ID. </p>
   */
  ComplianceItems?: ComplianceItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListComplianceItemsResult {
  export const filterSensitiveLog = (obj: ListComplianceItemsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListComplianceItemsResult =>
    __isa(o, "ListComplianceItemsResult");
}

export interface ListComplianceSummariesRequest {
  __type?: "ListComplianceSummariesRequest";
  /**
   * <p>One or more compliance or inventory filters. Use a filter to return a more specific list of
   *    results.</p>
   */
  Filters?: ComplianceStringFilter[];

  /**
   * <p>The maximum number of items to return for this call. Currently, you can specify null or 50.
   *    The call also returns a token that you can specify in a subsequent call to get the next set of
   *    results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListComplianceSummariesRequest {
  export const filterSensitiveLog = (
    obj: ListComplianceSummariesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListComplianceSummariesRequest =>
    __isa(o, "ListComplianceSummariesRequest");
}

export interface ListComplianceSummariesResult {
  __type?: "ListComplianceSummariesResult";
  /**
   * <p>A list of compliant and non-compliant summary counts based on compliance types. For example,
   *    this call returns State Manager associations, patches, or custom compliance types according to
   *    the filter criteria that you specified.</p>
   */
  ComplianceSummaryItems?: ComplianceSummaryItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListComplianceSummariesResult {
  export const filterSensitiveLog = (
    obj: ListComplianceSummariesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListComplianceSummariesResult =>
    __isa(o, "ListComplianceSummariesResult");
}

export interface ListDocumentsRequest {
  __type?: "ListDocumentsRequest";
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  DocumentFilterList?: DocumentFilter[];

  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: DocumentKeyValuesFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace ListDocumentsRequest {
  export const filterSensitiveLog = (obj: ListDocumentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDocumentsRequest =>
    __isa(o, "ListDocumentsRequest");
}

export interface ListDocumentsResult {
  __type?: "ListDocumentsResult";
  /**
   * <p>The names of the Systems Manager documents.</p>
   */
  DocumentIdentifiers?: DocumentIdentifier[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentsResult {
  export const filterSensitiveLog = (obj: ListDocumentsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDocumentsResult =>
    __isa(o, "ListDocumentsResult");
}

export interface ListDocumentVersionsRequest {
  __type?: "ListDocumentVersionsRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the document. You can specify an Amazon Resource Name (ARN).</p>
   */
  Name: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace ListDocumentVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListDocumentVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDocumentVersionsRequest =>
    __isa(o, "ListDocumentVersionsRequest");
}

export interface ListDocumentVersionsResult {
  __type?: "ListDocumentVersionsResult";
  /**
   * <p>The document versions.</p>
   */
  DocumentVersions?: DocumentVersionInfo[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentVersionsResult {
  export const filterSensitiveLog = (obj: ListDocumentVersionsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDocumentVersionsResult =>
    __isa(o, "ListDocumentVersionsResult");
}

export interface ListInventoryEntriesRequest {
  __type?: "ListInventoryEntriesRequest";
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

  /**
   * <p>The instance ID for which you want inventory information.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The type of inventory item for which you want information.</p>
   */
  TypeName: string | undefined;
}

export namespace ListInventoryEntriesRequest {
  export const filterSensitiveLog = (
    obj: ListInventoryEntriesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInventoryEntriesRequest =>
    __isa(o, "ListInventoryEntriesRequest");
}

export interface ListInventoryEntriesResult {
  __type?: "ListInventoryEntriesResult";
  /**
   * <p>The time that inventory information was collected for the instance(s).</p>
   */
  CaptureTime?: string;

  /**
   * <p>A list of inventory items on the instance(s).</p>
   */
  Entries?: { [key: string]: string }[];

  /**
   * <p>The instance ID targeted by the request to query inventory information.</p>
   */
  InstanceId?: string;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The inventory schema version used by the instance(s).</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The type of inventory item returned by the request.</p>
   */
  TypeName?: string;
}

export namespace ListInventoryEntriesResult {
  export const filterSensitiveLog = (obj: ListInventoryEntriesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInventoryEntriesResult =>
    __isa(o, "ListInventoryEntriesResult");
}

export interface ListResourceComplianceSummariesRequest {
  __type?: "ListResourceComplianceSummariesRequest";
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: ComplianceStringFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListResourceComplianceSummariesRequest {
  export const filterSensitiveLog = (
    obj: ListResourceComplianceSummariesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourceComplianceSummariesRequest =>
    __isa(o, "ListResourceComplianceSummariesRequest");
}

export interface ListResourceComplianceSummariesResult {
  __type?: "ListResourceComplianceSummariesResult";
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;

  /**
   * <p>A summary count for specified or targeted managed instances. Summary count includes
   *    information about compliant and non-compliant State Manager associations, patch status, or custom
   *    items according to the filter criteria that you specify. </p>
   */
  ResourceComplianceSummaryItems?: ResourceComplianceSummaryItem[];
}

export namespace ListResourceComplianceSummariesResult {
  export const filterSensitiveLog = (
    obj: ListResourceComplianceSummariesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourceComplianceSummariesResult =>
    __isa(o, "ListResourceComplianceSummariesResult");
}

export interface ListResourceDataSyncRequest {
  __type?: "ListResourceDataSyncRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>View a list of resource data syncs according to the sync type. Specify
   *     <code>SyncToDestination</code> to view resource data syncs that synchronize data to an Amazon S3
   *    buckets. Specify <code>SyncFromSource</code> to view resource data syncs from AWS Organizations
   *    or from multiple AWS Regions. </p>
   */
  SyncType?: string;
}

export namespace ListResourceDataSyncRequest {
  export const filterSensitiveLog = (
    obj: ListResourceDataSyncRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourceDataSyncRequest =>
    __isa(o, "ListResourceDataSyncRequest");
}

export interface ListResourceDataSyncResult {
  __type?: "ListResourceDataSyncResult";
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of your current Resource Data Sync configurations and their statuses.</p>
   */
  ResourceDataSyncItems?: ResourceDataSyncItem[];
}

export namespace ListResourceDataSyncResult {
  export const filterSensitiveLog = (obj: ListResourceDataSyncResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourceDataSyncResult =>
    __isa(o, "ListResourceDataSyncResult");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The resource ID for which you want to see a list of tags.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Returns a list of tags for a specific resource type.</p>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResult {
  __type?: "ListTagsForResourceResult";
  /**
   * <p>A list of tags.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResult {
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResult =>
    __isa(o, "ListTagsForResourceResult");
}

/**
 * <p>Information about an Amazon S3 bucket to write instance-level logs to.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *          </note>
 */
export interface LoggingInfo {
  __type?: "LoggingInfo";
  /**
   * <p>The name of an Amazon S3 bucket where execution logs are stored .</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>(Optional) The Amazon S3 bucket subfolder. </p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The region where the Amazon S3 bucket is located.</p>
   */
  S3Region: string | undefined;
}

export namespace LoggingInfo {
  export const filterSensitiveLog = (obj: LoggingInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoggingInfo => __isa(o, "LoggingInfo");
}

/**
 * <p>The parameters for an AUTOMATION task type.</p>
 */
export interface MaintenanceWindowAutomationParameters {
  __type?: "MaintenanceWindowAutomationParameters";
  /**
   * <p>The version of an Automation document to use during task execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The parameters for the AUTOMATION task.</p>
   *
   *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>For AUTOMATION task types,
   *     Systems Manager ignores any values specified for these parameters.</p>
   *          </note>
   */
  Parameters?: { [key: string]: string[] };
}

export namespace MaintenanceWindowAutomationParameters {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowAutomationParameters
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceWindowAutomationParameters =>
    __isa(o, "MaintenanceWindowAutomationParameters");
}

/**
 * <p>Describes the information about an execution of a maintenance window. </p>
 */
export interface MaintenanceWindowExecution {
  __type?: "MaintenanceWindowExecution";
  /**
   * <p>The time the execution finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time the execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the execution.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the Status. Only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The ID of the maintenance window execution.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;
}

export namespace MaintenanceWindowExecution {
  export const filterSensitiveLog = (obj: MaintenanceWindowExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceWindowExecution =>
    __isa(o, "MaintenanceWindowExecution");
}

export enum MaintenanceWindowExecutionStatus {
  Cancelled = "CANCELLED",
  Cancelling = "CANCELLING",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
  SkippedOverlapping = "SKIPPED_OVERLAPPING",
  Success = "SUCCESS",
  TimedOut = "TIMED_OUT"
}

/**
 * <p>Information about a task execution performed as part of a maintenance window
 *    execution.</p>
 */
export interface MaintenanceWindowExecutionTaskIdentity {
  __type?: "MaintenanceWindowExecutionTaskIdentity";
  /**
   * <p>The time the task execution finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the task execution.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status of the task execution. Only available for certain status
   *    values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The ARN of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The type of task that ran.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   */
  WindowExecutionId?: string;
}

export namespace MaintenanceWindowExecutionTaskIdentity {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowExecutionTaskIdentity
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceWindowExecutionTaskIdentity =>
    __isa(o, "MaintenanceWindowExecutionTaskIdentity");
}

/**
 * <p>Describes the information about a task invocation for a particular target as part of a task
 *    execution performed as part of a maintenance window execution.</p>
 */
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  __type?: "MaintenanceWindowExecutionTaskInvocationIdentity";
  /**
   * <p>The time the invocation finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>The ID of the action performed in the service that actually handled the task invocation. If
   *    the task type is RUN_COMMAND, this value is the command ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The ID of the task invocation.</p>
   */
  InvocationId?: string;

  /**
   * <p>User-provided value that was specified when the target was registered with the maintenance
   *    window. This was also included in any CloudWatch events raised during the task invocation.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The parameters that were provided for the invocation when it was run.</p>
   */
  Parameters?: string;

  /**
   * <p>The time the invocation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the task invocation.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status of the task invocation. Only available for certain Status
   *    values. </p>
   */
  StatusDetails?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The task type.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the target definition in this maintenance window the invocation was performed
   *    for.</p>
   */
  WindowTargetId?: string;
}

export namespace MaintenanceWindowExecutionTaskInvocationIdentity {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowExecutionTaskInvocationIdentity
  ): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING })
  });
  export const isa = (
    o: any
  ): o is MaintenanceWindowExecutionTaskInvocationIdentity =>
    __isa(o, "MaintenanceWindowExecutionTaskInvocationIdentity");
}

/**
 * <p>Filter used in the request. Supported filter keys are Name and Enabled.</p>
 */
export interface MaintenanceWindowFilter {
  __type?: "MaintenanceWindowFilter";
  /**
   * <p>The name of the filter.</p>
   */
  Key?: string;

  /**
   * <p>The filter values.</p>
   */
  Values?: string[];
}

export namespace MaintenanceWindowFilter {
  export const filterSensitiveLog = (obj: MaintenanceWindowFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceWindowFilter =>
    __isa(o, "MaintenanceWindowFilter");
}

/**
 * <p>Information about the maintenance window.</p>
 */
export interface MaintenanceWindowIdentity {
  __type?: "MaintenanceWindowIdentity";
  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>A description of the maintenance window.</p>
   */
  Description?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive.</p>
   */
  EndDate?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   */
  NextExecutionTime?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active.</p>
   */
  StartDate?: string;

  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;
}

export namespace MaintenanceWindowIdentity {
  export const filterSensitiveLog = (obj: MaintenanceWindowIdentity): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is MaintenanceWindowIdentity =>
    __isa(o, "MaintenanceWindowIdentity");
}

/**
 * <p>The maintenance window to which the specified target belongs.</p>
 */
export interface MaintenanceWindowIdentityForTarget {
  __type?: "MaintenanceWindowIdentityForTarget";
  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;
}

export namespace MaintenanceWindowIdentityForTarget {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowIdentityForTarget
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceWindowIdentityForTarget =>
    __isa(o, "MaintenanceWindowIdentityForTarget");
}

/**
 * <p>The parameters for a LAMBDA task type.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Lambda tasks, Systems Manager
 *     ignores any values specified for TaskParameters and LoggingInfo.</p>
 *          </note>
 */
export interface MaintenanceWindowLambdaParameters {
  __type?: "MaintenanceWindowLambdaParameters";
  /**
   * <p>Pass client-specific information to the Lambda function that you are invoking. You can then
   *    process the client information in your Lambda function as you choose through the context
   *    variable.</p>
   */
  ClientContext?: string;

  /**
   * <p>JSON to provide to your Lambda function as input.</p>
   */
  Payload?: Uint8Array;

  /**
   * <p>(Optional) Specify a Lambda function version or alias name. If you specify a function
   *    version, the action uses the qualified function ARN to invoke a specific Lambda function. If you
   *    specify an alias name, the action uses the alias ARN to invoke the Lambda function version to
   *    which the alias points.</p>
   */
  Qualifier?: string;
}

export namespace MaintenanceWindowLambdaParameters {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowLambdaParameters
  ): any => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is MaintenanceWindowLambdaParameters =>
    __isa(o, "MaintenanceWindowLambdaParameters");
}

export enum MaintenanceWindowResourceType {
  Instance = "INSTANCE",
  ResourceGroup = "RESOURCE_GROUP"
}

/**
 * <p>The parameters for a RUN_COMMAND task type.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Run Command tasks, Systems Manager
 *     uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no
 *     values are specified for <code>TaskInvocationParameters</code>. </p>
 *          </note>
 */
export interface MaintenanceWindowRunCommandParameters {
  __type?: "MaintenanceWindowRunCommandParameters";
  /**
   * <p>Configuration options for sending command output to CloudWatch Logs.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>Information about the commands to run.</p>
   */
  Comment?: string;

  /**
   * <p>The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes
   *    have been deprecated.</p>
   */
  DocumentHash?: string;

  /**
   * <p>SHA-256 or SHA-1. SHA-1 hashes have been deprecated.</p>
   */
  DocumentHashType?: DocumentHashType | string;

  /**
   * <p>The SSM document version to use in the request. You can specify $DEFAULT, $LATEST, or a
   *    specific version number. If you run commands by using the AWS CLI, then you must escape the first
   *    two options by using a backslash. If you specify a version number, then you don't need to use the
   *    backslash. For example:</p>
   *          <p>--document-version "\$DEFAULT"</p>
   *          <p>--document-version "\$LATEST"</p>
   *          <p>--document-version "3"</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per-instance
   *    basis.</p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The Amazon S3 bucket subfolder.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>The parameters for the RUN_COMMAND task execution.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for
   *    maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>If this time is reached and the command has not already started running, it doesn't
   *    run.</p>
   */
  TimeoutSeconds?: number;
}

export namespace MaintenanceWindowRunCommandParameters {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowRunCommandParameters
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceWindowRunCommandParameters =>
    __isa(o, "MaintenanceWindowRunCommandParameters");
}

/**
 * <p>The parameters for a STEP_FUNCTIONS task.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Step Functions tasks,
 *     Systems Manager ignores any values specified for <code>TaskParameters</code> and
 *     <code>LoggingInfo</code>.</p>
 *          </note>
 */
export interface MaintenanceWindowStepFunctionsParameters {
  __type?: "MaintenanceWindowStepFunctionsParameters";
  /**
   * <p>The inputs for the STEP_FUNCTIONS task.</p>
   */
  Input?: string;

  /**
   * <p>The name of the STEP_FUNCTIONS task.</p>
   */
  Name?: string;
}

export namespace MaintenanceWindowStepFunctionsParameters {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowStepFunctionsParameters
  ): any => ({
    ...obj,
    ...(obj.Input && { Input: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is MaintenanceWindowStepFunctionsParameters =>
    __isa(o, "MaintenanceWindowStepFunctionsParameters");
}

/**
 * <p>The target registered with the maintenance window.</p>
 */
export interface MaintenanceWindowTarget {
  __type?: "MaintenanceWindowTarget";
  /**
   * <p>A description for the target.</p>
   */
  Description?: string;

  /**
   * <p>The name for the maintenance window target.</p>
   */
  Name?: string;

  /**
   * <p>A user-provided value that will be included in any CloudWatch events that are raised while
   *    running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The type of target that is being registered with the maintenance window.</p>
   */
  ResourceType?: MaintenanceWindowResourceType | string;

  /**
   * <p>The targets, either instances or tags.</p>
   *          <p>Specify instances using the following format:</p>
   *          <p>
   *             <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>
   *          </p>
   *          <p>Tags are specified using the following format:</p>
   *          <p>
   *             <code>Key=<tag name>,Values=<tag value></code>.</p>
   */
  Targets?: Target[];

  /**
   * <p>The ID of the maintenance window to register the target with.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the target.</p>
   */
  WindowTargetId?: string;
}

export namespace MaintenanceWindowTarget {
  export const filterSensitiveLog = (obj: MaintenanceWindowTarget): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is MaintenanceWindowTarget =>
    __isa(o, "MaintenanceWindowTarget");
}

/**
 * <p>Information about a task defined for a maintenance window.</p>
 */
export interface MaintenanceWindowTask {
  __type?: "MaintenanceWindowTask";
  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>Information about an Amazon S3 bucket to write task-level logs to.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The maximum number of targets this task can be run for, in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The task name.</p>
   */
  Name?: string;

  /**
   * <p>The priority of the task in the maintenance window. The lower the number, the higher the
   *    priority. Tasks that have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for
   *    maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The targets (either instances or tags). Instances are specified using
   *    Key=instanceids,Values=<instanceid1>,<instanceid2>. Tags are specified using
   *    Key=<tag name>,Values=<tag value>.</p>
   */
  Targets?: Target[];

  /**
   * <p>The resource that the task uses during execution. For RUN_COMMAND and AUTOMATION task types,
   *     <code>TaskArn</code> is the Systems Manager document name or ARN. For LAMBDA tasks, it's the function name
   *    or ARN. For STEP_FUNCTIONS tasks, it's the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  TaskParameters?: {
    [key: string]: MaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The type of task. The type can be one of the following: RUN_COMMAND, AUTOMATION, LAMBDA, or
   *    STEP_FUNCTIONS.</p>
   */
  Type?: MaintenanceWindowTaskType | string;

  /**
   * <p>The ID of the maintenance window where the task is registered.</p>
   */
  WindowId?: string;

  /**
   * <p>The task ID.</p>
   */
  WindowTaskId?: string;
}

export namespace MaintenanceWindowTask {
  export const filterSensitiveLog = (obj: MaintenanceWindowTask): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is MaintenanceWindowTask =>
    __isa(o, "MaintenanceWindowTask");
}

/**
 * <p>The parameters for task execution.</p>
 */
export interface MaintenanceWindowTaskInvocationParameters {
  __type?: "MaintenanceWindowTaskInvocationParameters";
  /**
   * <p>The parameters for an AUTOMATION task type.</p>
   */
  Automation?: MaintenanceWindowAutomationParameters;

  /**
   * <p>The parameters for a LAMBDA task type.</p>
   */
  Lambda?: MaintenanceWindowLambdaParameters;

  /**
   * <p>The parameters for a RUN_COMMAND task type.</p>
   */
  RunCommand?: MaintenanceWindowRunCommandParameters;

  /**
   * <p>The parameters for a STEP_FUNCTIONS task type.</p>
   */
  StepFunctions?: MaintenanceWindowStepFunctionsParameters;
}

export namespace MaintenanceWindowTaskInvocationParameters {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowTaskInvocationParameters
  ): any => ({
    ...obj,
    ...(obj.Lambda && {
      Lambda: MaintenanceWindowLambdaParameters.filterSensitiveLog(obj.Lambda)
    }),
    ...(obj.StepFunctions && {
      StepFunctions: MaintenanceWindowStepFunctionsParameters.filterSensitiveLog(
        obj.StepFunctions
      )
    })
  });
  export const isa = (o: any): o is MaintenanceWindowTaskInvocationParameters =>
    __isa(o, "MaintenanceWindowTaskInvocationParameters");
}

/**
 * <p>Defines the values for a task parameter.</p>
 */
export interface MaintenanceWindowTaskParameterValueExpression {
  __type?: "MaintenanceWindowTaskParameterValueExpression";
  /**
   * <p>This field contains an array of 0 or more strings, each 1 to 255 characters in
   *    length.</p>
   */
  Values?: string[];
}

export namespace MaintenanceWindowTaskParameterValueExpression {
  export const filterSensitiveLog = (
    obj: MaintenanceWindowTaskParameterValueExpression
  ): any => ({
    ...obj,
    ...(obj.Values && { Values: SENSITIVE_STRING })
  });
  export const isa = (
    o: any
  ): o is MaintenanceWindowTaskParameterValueExpression =>
    __isa(o, "MaintenanceWindowTaskParameterValueExpression");
}

export enum MaintenanceWindowTaskType {
  Automation = "AUTOMATION",
  Lambda = "LAMBDA",
  RunCommand = "RUN_COMMAND",
  StepFunctions = "STEP_FUNCTIONS"
}

/**
 * <p>The size limit of a document is 64 KB.</p>
 */
export interface MaxDocumentSizeExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxDocumentSizeExceeded";
  $fault: "client";
  Message?: string;
}

export namespace MaxDocumentSizeExceeded {
  export const filterSensitiveLog = (obj: MaxDocumentSizeExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaxDocumentSizeExceeded =>
    __isa(o, "MaxDocumentSizeExceeded");
}

export interface ModifyDocumentPermissionRequest {
  __type?: "ModifyDocumentPermissionRequest";
  /**
   * <p>The AWS user accounts that should have access to the document. The account IDs can either be
   *    a group of account IDs or <i>All</i>.</p>
   */
  AccountIdsToAdd?: string[];

  /**
   * <p>The AWS user accounts that should no longer have access to the document. The AWS user
   *    account can either be a group of account IDs or <i>All</i>. This action has a
   *    higher priority than <i>AccountIdsToAdd</i>. If you specify an account ID to add
   *    and the same ID to remove, the system removes access to the document.</p>
   */
  AccountIdsToRemove?: string[];

  /**
   * <p>The name of the document that you want to share.</p>
   */
  Name: string | undefined;

  /**
   * <p>The permission type for the document. The permission type can be
   *    <i>Share</i>.</p>
   */
  PermissionType: DocumentPermissionType | string | undefined;

  /**
   * <p>(Optional) The version of the document to share. If it's not specified, the system choose
   *    the <code>Default</code> version to share.</p>
   */
  SharedDocumentVersion?: string;
}

export namespace ModifyDocumentPermissionRequest {
  export const filterSensitiveLog = (
    obj: ModifyDocumentPermissionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDocumentPermissionRequest =>
    __isa(o, "ModifyDocumentPermissionRequest");
}

export interface ModifyDocumentPermissionResponse {
  __type?: "ModifyDocumentPermissionResponse";
}

export namespace ModifyDocumentPermissionResponse {
  export const filterSensitiveLog = (
    obj: ModifyDocumentPermissionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDocumentPermissionResponse =>
    __isa(o, "ModifyDocumentPermissionResponse");
}

/**
 * <p>A summary of resources that are not compliant. The summary is organized according to
 *    resource type.</p>
 */
export interface NonCompliantSummary {
  __type?: "NonCompliantSummary";
  /**
   * <p>The total number of compliance items that are not compliant.</p>
   */
  NonCompliantCount?: number;

  /**
   * <p>A summary of the non-compliance severity by compliance type</p>
   */
  SeveritySummary?: SeveritySummary;
}

export namespace NonCompliantSummary {
  export const filterSensitiveLog = (obj: NonCompliantSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is NonCompliantSummary =>
    __isa(o, "NonCompliantSummary");
}

/**
 * <p>Configurations for sending notifications.</p>
 */
export interface NotificationConfig {
  __type?: "NotificationConfig";
  /**
   * <p>An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run Command pushes
   *    notifications about command status changes to this topic.</p>
   */
  NotificationArn?: string;

  /**
   * <p>The different events for which you can receive notifications. These events include the
   *    following: All (events), InProgress, Success, TimedOut, Cancelled, Failed. To learn more about
   *    these events, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Configuring Amazon
   *     SNS Notifications for AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  NotificationEvents?: (NotificationEvent | string)[];

  /**
   * <p>Command: Receive notification when the status of a command changes. Invocation: For commands
   *    sent to multiple instances, receive notification on a per-instance basis when the status of a
   *    command changes. </p>
   */
  NotificationType?: NotificationType | string;
}

export namespace NotificationConfig {
  export const filterSensitiveLog = (obj: NotificationConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotificationConfig =>
    __isa(o, "NotificationConfig");
}

export enum NotificationEvent {
  ALL = "All",
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut"
}

export enum NotificationType {
  Command = "Command",
  Invocation = "Invocation"
}

export enum OperatingSystem {
  AmazonLinux = "AMAZON_LINUX",
  AmazonLinux2 = "AMAZON_LINUX_2",
  CentOS = "CENTOS",
  RedhatEnterpriseLinux = "REDHAT_ENTERPRISE_LINUX",
  Suse = "SUSE",
  Ubuntu = "UBUNTU",
  Windows = "WINDOWS"
}

/**
 * <p>One or more aggregators for viewing counts of OpsItems using different dimensions such as
 *     <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a
 *    few.</p>
 */
export interface OpsAggregator {
  __type?: "OpsAggregator";
  /**
   * <p>Either a Range or Count aggregator for limiting an OpsItem summary.</p>
   */
  AggregatorType?: string;

  /**
   * <p>A nested aggregator for viewing counts of OpsItems.</p>
   */
  Aggregators?: OpsAggregator[];

  /**
   * <p>The name of an OpsItem attribute on which to limit the count of OpsItems.</p>
   */
  AttributeName?: string;

  /**
   * <p>The aggregator filters.</p>
   */
  Filters?: OpsFilter[];

  /**
   * <p>The data type name to use for viewing counts of OpsItems.</p>
   */
  TypeName?: string;

  /**
   * <p>The aggregator value.</p>
   */
  Values?: { [key: string]: string };
}

export namespace OpsAggregator {
  export const filterSensitiveLog = (obj: OpsAggregator): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsAggregator => __isa(o, "OpsAggregator");
}

/**
 * <p>The result of the query.</p>
 */
export interface OpsEntity {
  __type?: "OpsEntity";
  /**
   * <p>The data returned by the query.</p>
   */
  Data?: { [key: string]: OpsEntityItem };

  /**
   * <p>The query ID.</p>
   */
  Id?: string;
}

export namespace OpsEntity {
  export const filterSensitiveLog = (obj: OpsEntity): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsEntity => __isa(o, "OpsEntity");
}

/**
 * <p>The OpsItem summaries result item.</p>
 */
export interface OpsEntityItem {
  __type?: "OpsEntityItem";
  /**
   * <p>The time OpsItem data was captured.</p>
   */
  CaptureTime?: string;

  /**
   * <p>The detailed data content for an OpsItem summaries result item.</p>
   */
  Content?: { [key: string]: string }[];
}

export namespace OpsEntityItem {
  export const filterSensitiveLog = (obj: OpsEntityItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsEntityItem => __isa(o, "OpsEntityItem");
}

/**
 * <p>A filter for viewing OpsItem summaries.</p>
 */
export interface OpsFilter {
  __type?: "OpsFilter";
  /**
   * <p>The name of the filter.</p>
   */
  Key: string | undefined;

  /**
   * <p>The type of filter.</p>
   */
  Type?: OpsFilterOperatorType | string;

  /**
   * <p>The filter value.</p>
   */
  Values: string[] | undefined;
}

export namespace OpsFilter {
  export const filterSensitiveLog = (obj: OpsFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsFilter => __isa(o, "OpsFilter");
}

export enum OpsFilterOperatorType {
  BEGIN_WITH = "BeginWith",
  EQUAL = "Equal",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
  NOT_EQUAL = "NotEqual"
}

/**
 * <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 */
export interface OpsItem {
  __type?: "OpsItem";
  /**
   * <p>An OpsItem category. Category options include: Availability, Cost, Performance, Recovery,
   *    Security.</p>
   */
  Category?: string;

  /**
   * <p>The ARN of the AWS account that created the OpsItem.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The OpsItem description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the AWS account that last updated the OpsItem.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Notifications?: OpsItemNotification[];

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following: amazon, aws,
   *     amzn, ssm, /amazon, /aws, /amzn, /ssm.</p>
   *          </important>
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API action) can view and search on the
   *    specified data. Operational data that is not searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API action).</p>
   *
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view AWS CLI example commands that use these keys, see
   *     <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems Manually</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  OperationalData?: { [key: string]: OpsItemDataValue };

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItem. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: RelatedOpsItem[];

  /**
   * <p>The severity of the OpsItem. Severity options range from 1 to 4.</p>
   */
  Severity?: string;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or AWS Systems Manager. The impacted resource
   *    is a subset of source.</p>
   */
  Source?: string;

  /**
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html">Editing OpsItem
   *     Details</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Status?: OpsItemStatus | string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;

  /**
   * <p>The version of this OpsItem. Each time the OpsItem is edited the version number increments
   *    by one.</p>
   */
  Version?: string;
}

export namespace OpsItem {
  export const filterSensitiveLog = (obj: OpsItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItem => __isa(o, "OpsItem");
}

/**
 * <p>The OpsItem already exists.</p>
 */
export interface OpsItemAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "OpsItemAlreadyExistsException";
  $fault: "client";
  Message?: string;
  OpsItemId?: string;
}

export namespace OpsItemAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: OpsItemAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemAlreadyExistsException =>
    __isa(o, "OpsItemAlreadyExistsException");
}

export enum OpsItemDataType {
  SEARCHABLE_STRING = "SearchableString",
  STRING = "String"
}

/**
 * <p>An object that defines the value of the key and its type in the OperationalData map.</p>
 */
export interface OpsItemDataValue {
  __type?: "OpsItemDataValue";
  /**
   * <p>The type of key-value pair. Valid types include <code>SearchableString</code> and
   *     <code>String</code>.</p>
   */
  Type?: OpsItemDataType | string;

  /**
   * <p>The value of the OperationalData key.</p>
   */
  Value?: string;
}

export namespace OpsItemDataValue {
  export const filterSensitiveLog = (obj: OpsItemDataValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemDataValue =>
    __isa(o, "OpsItemDataValue");
}

/**
 * <p>Describes an OpsItem filter.</p>
 */
export interface OpsItemFilter {
  __type?: "OpsItemFilter";
  /**
   * <p>The name of the filter.</p>
   */
  Key: OpsItemFilterKey | string | undefined;

  /**
   * <p>The operator used by the filter call.</p>
   */
  Operator: OpsItemFilterOperator | string | undefined;

  /**
   * <p>The filter value.</p>
   */
  Values: string[] | undefined;
}

export namespace OpsItemFilter {
  export const filterSensitiveLog = (obj: OpsItemFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemFilter => __isa(o, "OpsItemFilter");
}

export enum OpsItemFilterKey {
  AUTOMATION_ID = "AutomationId",
  CATEGORY = "Category",
  CREATED_BY = "CreatedBy",
  CREATED_TIME = "CreatedTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  OPERATIONAL_DATA = "OperationalData",
  OPERATIONAL_DATA_KEY = "OperationalDataKey",
  OPERATIONAL_DATA_VALUE = "OperationalDataValue",
  OPSITEM_ID = "OpsItemId",
  PRIORITY = "Priority",
  RESOURCE_ID = "ResourceId",
  SEVERITY = "Severity",
  SOURCE = "Source",
  STATUS = "Status",
  TITLE = "Title"
}

export enum OpsItemFilterOperator {
  CONTAINS = "Contains",
  EQUAL = "Equal",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan"
}

/**
 * <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 */
export interface OpsItemInvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "OpsItemInvalidParameterException";
  $fault: "client";
  Message?: string;
  ParameterNames?: string[];
}

export namespace OpsItemInvalidParameterException {
  export const filterSensitiveLog = (
    obj: OpsItemInvalidParameterException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemInvalidParameterException =>
    __isa(o, "OpsItemInvalidParameterException");
}

/**
 * <p>The request caused OpsItems to exceed one or more quotas. For information about OpsItem
 *    quotas, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What
 *     are the resource limits for OpsCenter?</a>.</p>
 */
export interface OpsItemLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "OpsItemLimitExceededException";
  $fault: "client";
  Limit?: number;
  LimitType?: string;
  Message?: string;
  ResourceTypes?: string[];
}

export namespace OpsItemLimitExceededException {
  export const filterSensitiveLog = (
    obj: OpsItemLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemLimitExceededException =>
    __isa(o, "OpsItemLimitExceededException");
}

/**
 * <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 */
export interface OpsItemNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "OpsItemNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OpsItemNotFoundException {
  export const filterSensitiveLog = (obj: OpsItemNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemNotFoundException =>
    __isa(o, "OpsItemNotFoundException");
}

/**
 * <p>A notification about the OpsItem.</p>
 */
export interface OpsItemNotification {
  __type?: "OpsItemNotification";
  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Arn?: string;
}

export namespace OpsItemNotification {
  export const filterSensitiveLog = (obj: OpsItemNotification): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemNotification =>
    __isa(o, "OpsItemNotification");
}

export enum OpsItemStatus {
  IN_PROGRESS = "InProgress",
  OPEN = "Open",
  RESOLVED = "Resolved"
}

/**
 * <p>A count of OpsItems.</p>
 */
export interface OpsItemSummary {
  __type?: "OpsItemSummary";
  /**
   * <p>A list of OpsItems by category.</p>
   */
  Category?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *   </p>
   */
  OperationalData?: { [key: string]: OpsItemDataValue };

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>A list of OpsItems by severity.</p>
   */
  Severity?: string;

  /**
   * <p>The impacted AWS resource.</p>
   */
  Source?: string;

  /**
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>.</p>
   */
  Status?: OpsItemStatus | string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;
}

export namespace OpsItemSummary {
  export const filterSensitiveLog = (obj: OpsItemSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsItemSummary =>
    __isa(o, "OpsItemSummary");
}

/**
 * <p>The OpsItem data type to return.</p>
 */
export interface OpsResultAttribute {
  __type?: "OpsResultAttribute";
  /**
   * <p>Name of the data type. Valid value: AWS:OpsItem, AWS:EC2InstanceInformation,
   *    AWS:OpsItemTrendline, or AWS:ComplianceSummary.</p>
   */
  TypeName: string | undefined;
}

export namespace OpsResultAttribute {
  export const filterSensitiveLog = (obj: OpsResultAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpsResultAttribute =>
    __isa(o, "OpsResultAttribute");
}

/**
 * <p>Information about the source where the association execution details are stored.</p>
 */
export interface OutputSource {
  __type?: "OutputSource";
  /**
   * <p>The ID of the output source, for example the URL of an Amazon S3 bucket.</p>
   */
  OutputSourceId?: string;

  /**
   * <p>The type of source where the association execution details are stored, for example,
   *    Amazon S3.</p>
   */
  OutputSourceType?: string;
}

export namespace OutputSource {
  export const filterSensitiveLog = (obj: OutputSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputSource => __isa(o, "OutputSource");
}

/**
 * <p>An Amazon EC2 Systems Manager parameter in Parameter Store.</p>
 */
export interface Parameter {
  __type?: "Parameter";
  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   */
  ARN?: string;

  /**
   * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>Either the version number or the label used to retrieve the parameter value. Specify
   *    selectors by using one of the following formats:</p>
   *          <p>parameter_name:version</p>
   *          <p>parameter_name:label</p>
   */
  Selector?: string;

  /**
   * <p>Applies to parameters that reference information in other AWS services. SourceResult is the
   *    raw result or response from the source.</p>
   */
  SourceResult?: string;

  /**
   * <p>The type of parameter. Valid values include the following: String, String list, Secure
   *    string.</p>
   */
  Type?: ParameterType | string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parameter => __isa(o, "Parameter");
}

/**
 * <p>The parameter already exists. You can't create duplicate parameters.</p>
 */
export interface ParameterAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "ParameterAlreadyExists";
  $fault: "client";
  message?: string;
}

export namespace ParameterAlreadyExists {
  export const filterSensitiveLog = (obj: ParameterAlreadyExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterAlreadyExists =>
    __isa(o, "ParameterAlreadyExists");
}

/**
 * <p>Information about parameter usage.</p>
 */
export interface ParameterHistory {
  __type?: "ParameterHistory";
  /**
   * <p>Parameter names can include the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   */
  AllowedPattern?: string;

  /**
   * <p>Information about the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the query key used for this parameter.</p>
   */
  KeyId?: string;

  /**
   * <p>Labels assigned to the parameter version.</p>
   */
  Labels?: string[];

  /**
   * <p>Date the parameter was last changed or updated.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of the AWS user who last changed the parameter.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>Information about the policies assigned to a parameter.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Working with Parameter
   *     Policies</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Policies?: ParameterInlinePolicy[];

  /**
   * <p>The parameter tier.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>The type of parameter used.</p>
   */
  Type?: ParameterType | string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;
}

export namespace ParameterHistory {
  export const filterSensitiveLog = (obj: ParameterHistory): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterHistory =>
    __isa(o, "ParameterHistory");
}

/**
 * <p>One or more policies assigned to a parameter.</p>
 */
export interface ParameterInlinePolicy {
  __type?: "ParameterInlinePolicy";
  /**
   * <p>The status of the policy. Policies report the following statuses: Pending (the policy has
   *    not been enforced or applied yet), Finished (the policy was applied), Failed (the policy was not
   *    applied), or InProgress (the policy is being applied now). </p>
   */
  PolicyStatus?: string;

  /**
   * <p>The JSON text of the policy.</p>
   */
  PolicyText?: string;

  /**
   * <p>The type of policy. Parameter Store supports the following policy types: Expiration,
   *    ExpirationNotification, and NoChangeNotification. </p>
   */
  PolicyType?: string;
}

export namespace ParameterInlinePolicy {
  export const filterSensitiveLog = (obj: ParameterInlinePolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterInlinePolicy =>
    __isa(o, "ParameterInlinePolicy");
}

/**
 * <p>You have exceeded the number of parameters for this AWS account. Delete one or more
 *    parameters and try again.</p>
 */
export interface ParameterLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "ParameterLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace ParameterLimitExceeded {
  export const filterSensitiveLog = (obj: ParameterLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterLimitExceeded =>
    __isa(o, "ParameterLimitExceeded");
}

/**
 * <p>The parameter exceeded the maximum number of allowed versions.</p>
 */
export interface ParameterMaxVersionLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "ParameterMaxVersionLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace ParameterMaxVersionLimitExceeded {
  export const filterSensitiveLog = (
    obj: ParameterMaxVersionLimitExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterMaxVersionLimitExceeded =>
    __isa(o, "ParameterMaxVersionLimitExceeded");
}

/**
 * <p>Metadata includes information like the ARN of the last user and the date/time the parameter
 *    was last used.</p>
 */
export interface ParameterMetadata {
  __type?: "ParameterMetadata";
  /**
   * <p>A parameter name can include only the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   */
  AllowedPattern?: string;

  /**
   * <p>Description of the parameter actions.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the query key used for this parameter.</p>
   */
  KeyId?: string;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of the AWS user who last changed the parameter.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>The parameter name.</p>
   */
  Name?: string;

  /**
   * <p>A list of policies associated with a parameter.</p>
   */
  Policies?: ParameterInlinePolicy[];

  /**
   * <p>The parameter tier.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>The type of parameter. Valid parameter types include the following: String, String list,
   *    Secure string.</p>
   */
  Type?: ParameterType | string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;
}

export namespace ParameterMetadata {
  export const filterSensitiveLog = (obj: ParameterMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterMetadata =>
    __isa(o, "ParameterMetadata");
}

/**
 * <p>The parameter could not be found. Verify the name and try again.</p>
 */
export interface ParameterNotFound extends __SmithyException, $MetadataBearer {
  name: "ParameterNotFound";
  $fault: "client";
  message?: string;
}

export namespace ParameterNotFound {
  export const filterSensitiveLog = (obj: ParameterNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterNotFound =>
    __isa(o, "ParameterNotFound");
}

/**
 * <p>The parameter name is not valid.</p>
 */
export interface ParameterPatternMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "ParameterPatternMismatchException";
  $fault: "client";
  /**
   * <p>The parameter name is not valid.</p>
   */
  message?: string;
}

export namespace ParameterPatternMismatchException {
  export const filterSensitiveLog = (
    obj: ParameterPatternMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterPatternMismatchException =>
    __isa(o, "ParameterPatternMismatchException");
}

/**
 * <p>This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.</p>
 */
export interface ParametersFilter {
  __type?: "ParametersFilter";
  /**
   * <p>The name of the filter.</p>
   */
  Key: ParametersFilterKey | string | undefined;

  /**
   * <p>The filter values.</p>
   */
  Values: string[] | undefined;
}

export namespace ParametersFilter {
  export const filterSensitiveLog = (obj: ParametersFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParametersFilter =>
    __isa(o, "ParametersFilter");
}

export enum ParametersFilterKey {
  KEY_ID = "KeyId",
  NAME = "Name",
  TYPE = "Type"
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 *          <important>
 *             <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API actions. However,
 *     not all of the pattern values listed for <code>Key</code> can be used with both actions.</p>
 *             <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception
 *     of <code>Label</code>.</p>
 *             <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code>
 *     are not valid: <code>Name</code>, <code>Path</code>, and <code>Tier</code>.</p>
 *             <p>For examples of CLI commands demonstrating valid parameter filter constructions, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager Parameters</a> in the
 *      <i>AWS Systems Manager User Guide</i>.</p>
 *          </important>
 */
export interface ParameterStringFilter {
  __type?: "ParameterStringFilter";
  /**
   * <p>The name of the filter.</p>
   */
  Key: string | undefined;

  /**
   * <p>For all filters used with <a>DescribeParameters</a>, valid options include
   *     <code>Equals</code> and <code>BeginsWith</code>. The <code>Name</code> filter additionally
   *    supports the <code>Contains</code> option. (Exception: For filters using the key
   *     <code>Path</code>, valid options include <code>Recursive</code> and
   *    <code>OneLevel</code>.)</p>
   *          <p>For filters used with <a>GetParametersByPath</a>, valid options include
   *     <code>Equals</code> and <code>BeginsWith</code>. (Exception: For filters using the key
   *     <code>Label</code>, the only valid option is <code>Equals</code>.)</p>
   */
  Option?: string;

  /**
   * <p>The value you want to search for.</p>
   */
  Values?: string[];
}

export namespace ParameterStringFilter {
  export const filterSensitiveLog = (obj: ParameterStringFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterStringFilter =>
    __isa(o, "ParameterStringFilter");
}

export enum ParameterTier {
  ADVANCED = "Advanced",
  INTELLIGENT_TIERING = "Intelligent-Tiering",
  STANDARD = "Standard"
}

export enum ParameterType {
  SECURE_STRING = "SecureString",
  STRING = "String",
  STRING_LIST = "StringList"
}

/**
 * <p>A parameter version can have a maximum of ten labels.</p>
 */
export interface ParameterVersionLabelLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "ParameterVersionLabelLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace ParameterVersionLabelLimitExceeded {
  export const filterSensitiveLog = (
    obj: ParameterVersionLabelLimitExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterVersionLabelLimitExceeded =>
    __isa(o, "ParameterVersionLabelLimitExceeded");
}

/**
 * <p>The specified parameter version was not found. Verify the parameter name and version, and
 *    try again.</p>
 */
export interface ParameterVersionNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "ParameterVersionNotFound";
  $fault: "client";
  message?: string;
}

export namespace ParameterVersionNotFound {
  export const filterSensitiveLog = (obj: ParameterVersionNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterVersionNotFound =>
    __isa(o, "ParameterVersionNotFound");
}

/**
 * <p>Represents metadata about a patch.</p>
 */
export interface Patch {
  __type?: "Patch";
  /**
   * <p>The classification of the patch (for example, SecurityUpdates, Updates,
   *    CriticalUpdates).</p>
   */
  Classification?: string;

  /**
   * <p>The URL where more information can be obtained about the patch.</p>
   */
  ContentUrl?: string;

  /**
   * <p>The description of the patch.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the patch (this is different than the Microsoft Knowledge Base ID).</p>
   */
  Id?: string;

  /**
   * <p>The Microsoft Knowledge Base ID of the patch.</p>
   */
  KbNumber?: string;

  /**
   * <p>The language of the patch if it's language-specific.</p>
   */
  Language?: string;

  /**
   * <p>The ID of the MSRC bulletin the patch is related to.</p>
   */
  MsrcNumber?: string;

  /**
   * <p>The severity of the patch (for example Critical, Important, Moderate).</p>
   */
  MsrcSeverity?: string;

  /**
   * <p>The specific product the patch is applicable for (for example, WindowsServer2016).</p>
   */
  Product?: string;

  /**
   * <p>The product family the patch is applicable for (for example, Windows).</p>
   */
  ProductFamily?: string;

  /**
   * <p>The date the patch was released.</p>
   */
  ReleaseDate?: Date;

  /**
   * <p>The title of the patch.</p>
   */
  Title?: string;

  /**
   * <p>The name of the vendor providing the patch.</p>
   */
  Vendor?: string;
}

export namespace Patch {
  export const filterSensitiveLog = (obj: Patch): any => ({
    ...obj
  });
  export const isa = (o: any): o is Patch => __isa(o, "Patch");
}

export enum PatchAction {
  AllowAsDependency = "ALLOW_AS_DEPENDENCY",
  Block = "BLOCK"
}

/**
 * <p>Defines the basic information about a patch baseline.</p>
 */
export interface PatchBaselineIdentity {
  __type?: "PatchBaselineIdentity";
  /**
   * <p>The description of the patch baseline.</p>
   */
  BaselineDescription?: string;

  /**
   * <p>The ID of the patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  BaselineName?: string;

  /**
   * <p>Whether this is the default baseline. Note that Systems Manager supports creating multiple default
   *    patch baselines. For example, you can create a default patch baseline for each operating
   *    system.</p>
   */
  DefaultBaseline?: boolean;

  /**
   * <p>Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
   *   </p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace PatchBaselineIdentity {
  export const filterSensitiveLog = (obj: PatchBaselineIdentity): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchBaselineIdentity =>
    __isa(o, "PatchBaselineIdentity");
}

/**
 * <p>Information about the state of a patch on a particular instance as it relates to the patch
 *    baseline used to patch the instance.</p>
 */
export interface PatchComplianceData {
  __type?: "PatchComplianceData";
  /**
   * <p>The classification of the patch (for example, SecurityUpdates, Updates,
   *    CriticalUpdates).</p>
   */
  Classification: string | undefined;

  /**
   * <p>The date/time the patch was installed on the instance. Note that not all operating systems
   *    provide this level of information.</p>
   */
  InstalledTime: Date | undefined;

  /**
   * <p>The operating system-specific ID of the patch.</p>
   */
  KBId: string | undefined;

  /**
   * <p>The severity of the patch (for example, Critical, Important, Moderate).</p>
   */
  Severity: string | undefined;

  /**
   * <p>The state of the patch on the instance, such as INSTALLED or FAILED.</p>
   *          <p>For descriptions of each patch state, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-compliance-about.html#sysman-compliance-monitor-patch">About Patch
   *     Compliance</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  State: PatchComplianceDataState | string | undefined;

  /**
   * <p>The title of the patch.</p>
   */
  Title: string | undefined;
}

export namespace PatchComplianceData {
  export const filterSensitiveLog = (obj: PatchComplianceData): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchComplianceData =>
    __isa(o, "PatchComplianceData");
}

export enum PatchComplianceDataState {
  Failed = "FAILED",
  Installed = "INSTALLED",
  InstalledOther = "INSTALLED_OTHER",
  InstalledPendingReboot = "INSTALLED_PENDING_REBOOT",
  InstalledRejected = "INSTALLED_REJECTED",
  Missing = "MISSING",
  NotApplicable = "NOT_APPLICABLE"
}

export enum PatchComplianceLevel {
  Critical = "CRITICAL",
  High = "HIGH",
  Informational = "INFORMATIONAL",
  Low = "LOW",
  Medium = "MEDIUM",
  Unspecified = "UNSPECIFIED"
}

export enum PatchDeploymentStatus {
  Approved = "APPROVED",
  ExplicitApproved = "EXPLICIT_APPROVED",
  ExplicitRejected = "EXPLICIT_REJECTED",
  PendingApproval = "PENDING_APPROVAL"
}

/**
 * <p> Defines which patches should be included in a patch baseline.</p>
 *          <p>A patch filter consists of a key and a set of values. The filter key is a patch property.
 *    For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY,
 *    CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch
 *    property indicated by the key. For example, if the filter key is PRODUCT and the filter values
 *    are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is
 *    either "Office 2013" or "Office 2016". The filter values can be exact values for the patch
 *    property given as a key, or a wildcard (*), which matches all values.</p>
 *          <p>You can view lists of valid values for the patch properties by running the
 *     <code>DescribePatchProperties</code> command. For information about which patch properties can
 *    be used with each major operating system, see <a>DescribePatchProperties</a>.</p>
 */
export interface PatchFilter {
  __type?: "PatchFilter";
  /**
   * <p>The key for the filter.</p>
   *          <p>Run the <a>DescribePatchProperties</a> command to view lists of valid keys for
   *    each operating system type.</p>
   */
  Key: PatchFilterKey | string | undefined;

  /**
   * <p>The value for the filter key.</p>
   *          <p>Run the <a>DescribePatchProperties</a> command to view lists of valid values for
   *    each key based on operating system type.</p>
   */
  Values: string[] | undefined;
}

export namespace PatchFilter {
  export const filterSensitiveLog = (obj: PatchFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchFilter => __isa(o, "PatchFilter");
}

/**
 * <p>A set of patch filters, typically used for approval rules.</p>
 */
export interface PatchFilterGroup {
  __type?: "PatchFilterGroup";
  /**
   * <p>The set of patch filters that make up the group.</p>
   */
  PatchFilters: PatchFilter[] | undefined;
}

export namespace PatchFilterGroup {
  export const filterSensitiveLog = (obj: PatchFilterGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchFilterGroup =>
    __isa(o, "PatchFilterGroup");
}

export enum PatchFilterKey {
  Classification = "CLASSIFICATION",
  MsrcSeverity = "MSRC_SEVERITY",
  PatchId = "PATCH_ID",
  PatchSet = "PATCH_SET",
  Priority = "PRIORITY",
  Product = "PRODUCT",
  ProductFamily = "PRODUCT_FAMILY",
  Section = "SECTION",
  Severity = "SEVERITY"
}

/**
 * <p>The mapping between a patch group and the patch baseline the patch group is registered
 *    with.</p>
 */
export interface PatchGroupPatchBaselineMapping {
  __type?: "PatchGroupPatchBaselineMapping";
  /**
   * <p>The patch baseline the patch group is registered with.</p>
   */
  BaselineIdentity?: PatchBaselineIdentity;

  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   */
  PatchGroup?: string;
}

export namespace PatchGroupPatchBaselineMapping {
  export const filterSensitiveLog = (
    obj: PatchGroupPatchBaselineMapping
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchGroupPatchBaselineMapping =>
    __isa(o, "PatchGroupPatchBaselineMapping");
}

export enum PatchOperationType {
  INSTALL = "Install",
  SCAN = "Scan"
}

/**
 * <p>Defines a filter used in Patch Manager APIs.</p>
 */
export interface PatchOrchestratorFilter {
  __type?: "PatchOrchestratorFilter";
  /**
   * <p>The key for the filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for the filter.</p>
   */
  Values?: string[];
}

export namespace PatchOrchestratorFilter {
  export const filterSensitiveLog = (obj: PatchOrchestratorFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchOrchestratorFilter =>
    __isa(o, "PatchOrchestratorFilter");
}

export enum PatchProperty {
  PatchClassification = "CLASSIFICATION",
  PatchMsrcSeverity = "MSRC_SEVERITY",
  PatchPriority = "PRIORITY",
  PatchProductFamily = "PRODUCT_FAMILY",
  PatchSeverity = "SEVERITY",
  Product = "PRODUCT"
}

/**
 * <p>Defines an approval rule for a patch baseline.</p>
 */
export interface PatchRule {
  __type?: "PatchRule";
  /**
   * <p>The number of days after the release date of each patch matched by the rule that the patch
   *    is marked as approved in the patch baseline. For example, a value of <code>7</code> means that
   *    patches are approved seven days after they are released. </p>
   */
  ApproveAfterDays: number | undefined;

  /**
   * <p>A compliance severity level for all approved patches in a patch baseline. Valid compliance
   *    severity levels include the following: Unspecified, Critical, High, Medium, Low, and
   *    Informational.</p>
   */
  ComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>For instances identified by the approval rule filters, enables a patch baseline to apply
   *    non-security updates available in the specified repository. The default value is 'false'. Applies
   *    to Linux instances only.</p>
   */
  EnableNonSecurity?: boolean;

  /**
   * <p>The patch filter group that defines the criteria for the rule.</p>
   */
  PatchFilterGroup: PatchFilterGroup | undefined;
}

export namespace PatchRule {
  export const filterSensitiveLog = (obj: PatchRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchRule => __isa(o, "PatchRule");
}

/**
 * <p>A set of rules defining the approval rules for a patch baseline.</p>
 */
export interface PatchRuleGroup {
  __type?: "PatchRuleGroup";
  /**
   * <p>The rules that make up the rule group.</p>
   */
  PatchRules: PatchRule[] | undefined;
}

export namespace PatchRuleGroup {
  export const filterSensitiveLog = (obj: PatchRuleGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchRuleGroup =>
    __isa(o, "PatchRuleGroup");
}

export enum PatchSet {
  Application = "APPLICATION",
  Os = "OS"
}

/**
 * <p>Information about the patches to use to update the instances, including target operating
 *    systems and source repository. Applies to Linux instances only.</p>
 */
export interface PatchSource {
  __type?: "PatchSource";
  /**
   * <p>The value of the yum repo configuration. For example:</p>
   *          <p>
   *             <code>[main]</code>
   *          </p>
   *          <p>
   *             <code>cachedir=/var/cache/yum/$basesearch$releasever</code>
   *          </p>
   *          <p>
   *             <code>keepcache=0</code>
   *          </p>
   *          <p>
   *             <code>debuglevel=2</code>
   *          </p>
   */
  Configuration: string | undefined;

  /**
   * <p>The name specified to identify the patch source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The specific operating system versions a patch repository applies to, such as "Ubuntu16.04",
   *    "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product
   *    values, see <a>PatchFilter</a>.</p>
   */
  Products: string[] | undefined;
}

export namespace PatchSource {
  export const filterSensitiveLog = (obj: PatchSource): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is PatchSource => __isa(o, "PatchSource");
}

/**
 * <p>Information about the approval status of a patch.</p>
 */
export interface PatchStatus {
  __type?: "PatchStatus";
  /**
   * <p>The date the patch was approved (or will be approved if the status is
   *    PENDING_APPROVAL).</p>
   */
  ApprovalDate?: Date;

  /**
   * <p>The compliance severity level for a patch.</p>
   */
  ComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>The approval status of a patch (APPROVED, PENDING_APPROVAL, EXPLICIT_APPROVED,
   *    EXPLICIT_REJECTED).</p>
   */
  DeploymentStatus?: PatchDeploymentStatus | string;
}

export namespace PatchStatus {
  export const filterSensitiveLog = (obj: PatchStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchStatus => __isa(o, "PatchStatus");
}

export enum PingStatus {
  CONNECTION_LOST = "ConnectionLost",
  INACTIVE = "Inactive",
  ONLINE = "Online"
}

export enum PlatformType {
  LINUX = "Linux",
  WINDOWS = "Windows"
}

/**
 * <p>You specified more than the maximum number of allowed policies for the parameter. The
 *    maximum is 10.</p>
 */
export interface PoliciesLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "PoliciesLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace PoliciesLimitExceededException {
  export const filterSensitiveLog = (
    obj: PoliciesLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PoliciesLimitExceededException =>
    __isa(o, "PoliciesLimitExceededException");
}

/**
 * <p>An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and
 *    multi-account Automation execution.</p>
 */
export interface ProgressCounters {
  __type?: "ProgressCounters";
  /**
   * <p>The total number of steps that the system cancelled in all specified AWS Regions and
   *    accounts for the current Automation execution.</p>
   */
  CancelledSteps?: number;

  /**
   * <p>The total number of steps that failed to run in all specified AWS Regions and accounts for
   *    the current Automation execution.</p>
   */
  FailedSteps?: number;

  /**
   * <p>The total number of steps that successfully completed in all specified AWS Regions and
   *    accounts for the current Automation execution.</p>
   */
  SuccessSteps?: number;

  /**
   * <p>The total number of steps that timed out in all specified AWS Regions and accounts for the
   *    current Automation execution.</p>
   */
  TimedOutSteps?: number;

  /**
   * <p>The total number of steps run in all specified AWS Regions and accounts for the current
   *    Automation execution.</p>
   */
  TotalSteps?: number;
}

export namespace ProgressCounters {
  export const filterSensitiveLog = (obj: ProgressCounters): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProgressCounters =>
    __isa(o, "ProgressCounters");
}

export interface PutComplianceItemsRequest {
  __type?: "PutComplianceItemsRequest";
  /**
   * <p>Specify the compliance type. For example, specify Association (for a State Manager
   *    association), Patch, or Custom:<code>string</code>.</p>
   */
  ComplianceType: string | undefined;

  /**
   * <p>A summary of the call execution that includes an execution ID, the type of execution (for
   *    example, <code>Command</code>), and the date/time of the execution using a datetime object that
   *    is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionSummary: ComplianceExecutionSummary | undefined;

  /**
   * <p>MD5 or SHA-256 content hash. The content hash is used to determine if existing information
   *    should be overwritten or ignored. If the content hashes match, the request to put compliance
   *    information is ignored.</p>
   */
  ItemContentHash?: string;

  /**
   * <p>Information about the compliance as defined by the resource type. For example, for a patch
   *    compliance type, <code>Items</code> includes information about the PatchSeverity, Classification,
   *    etc.</p>
   */
  Items: ComplianceItemEntry[] | undefined;

  /**
   * <p>Specify an ID for this resource. For a managed instance, this is the instance ID.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Specify the type of resource. <code>ManagedInstance</code> is currently the only supported
   *    resource type.</p>
   */
  ResourceType: string | undefined;
}

export namespace PutComplianceItemsRequest {
  export const filterSensitiveLog = (obj: PutComplianceItemsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutComplianceItemsRequest =>
    __isa(o, "PutComplianceItemsRequest");
}

export interface PutComplianceItemsResult {
  __type?: "PutComplianceItemsResult";
}

export namespace PutComplianceItemsResult {
  export const filterSensitiveLog = (obj: PutComplianceItemsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutComplianceItemsResult =>
    __isa(o, "PutComplianceItemsResult");
}

export interface PutInventoryRequest {
  __type?: "PutInventoryRequest";
  /**
   * <p>An instance ID where you want to add or update inventory items.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The inventory items that you want to add or update on instances.</p>
   */
  Items: InventoryItem[] | undefined;
}

export namespace PutInventoryRequest {
  export const filterSensitiveLog = (obj: PutInventoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutInventoryRequest =>
    __isa(o, "PutInventoryRequest");
}

export interface PutInventoryResult {
  __type?: "PutInventoryResult";
  /**
   * <p>Information about the request.</p>
   */
  Message?: string;
}

export namespace PutInventoryResult {
  export const filterSensitiveLog = (obj: PutInventoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutInventoryResult =>
    __isa(o, "PutInventoryResult");
}

export interface PutParameterRequest {
  __type?: "PutParameterRequest";
  /**
   * <p>A regular expression used to validate the parameter value. For example, for String types
   *    with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$ </p>
   */
  AllowedPattern?: string;

  /**
   * <p>Information about the parameter that you want to add to the system. Optional but
   *    recommended.</p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  Description?: string;

  /**
   * <p>The KMS Key ID that you want to use to encrypt a parameter. Either the default AWS Key
   *    Management Service (AWS KMS) key automatically assigned to your AWS account or a custom key.
   *    Required for parameters that use the <code>SecureString</code> data type.</p>
   *          <p>If you don't specify a key ID, the system uses the default key associated with your AWS
   *    account.</p>
   *          <ul>
   *             <li>
   *                <p>To use your default AWS KMS key, choose the <code>SecureString</code> data
   *      type, and do <i>not</i> specify the <code>Key ID</code> when you
   *      create the parameter. The system automatically populates <code>Key ID</code> with
   *      your default KMS key.</p>
   *             </li>
   *             <li>
   *                <p>To use a custom KMS key, choose the <code>SecureString</code> data type with
   *      the <code>Key ID</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  KeyId?: string;

  /**
   * <p>The fully qualified name of the parameter that you want to add to the system. The fully
   *    qualified name includes the complete hierarchy of the parameter path and name. For example:
   *     <code>/Dev/DBServer/MySQL/db-string13</code>
   *          </p>
   *          <p>Naming Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Parameter names are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>A parameter name must be unique within an AWS Region</p>
   *             </li>
   *             <li>
   *                <p>A parameter name can't be prefixed with "aws" or "ssm" (case-insensitive).</p>
   *             </li>
   *             <li>
   *                <p>Parameter names can include only the following symbols and letters:
   *       <code>a-zA-Z0-9_.-/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A parameter name can't include spaces.</p>
   *             </li>
   *             <li>
   *                <p>Parameter hierarchies are limited to a maximum depth of fifteen levels.</p>
   *             </li>
   *          </ul>
   *          <p>For additional information about valid values for parameter names, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for
   *     Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *
   *          <note>
   *             <p>The maximum length constraint listed below includes capacity for additional system
   *     attributes that are not part of the name. The maximum length for the fully qualified parameter
   *     name is 1011 characters, including the full length of the parameter ARN. For example, the
   *     following fully qualified parameter name is 65 characters, not 20 characters:</p>
   *             <p>
   *                <code>arn:aws:ssm:us-east-2:111122223333:parameter/ExampleParameterName</code>
   *             </p>
   *          </note>
   */
  Name: string | undefined;

  /**
   * <p>Overwrite an existing parameter. If not specified, will default to "false".</p>
   */
  Overwrite?: boolean;

  /**
   * <p>One or more policies to apply to a parameter. This action takes a JSON array. Parameter
   *    Store supports the following policy types:</p>
   *
   *          <p>Expiration: This policy deletes the parameter after it expires. When you create the policy,
   *    you specify the expiration date. You can update the expiration date and time by updating the
   *    policy. Updating the <i>parameter</i> does not affect the expiration date and time.
   *    When the expiration time is reached, Parameter Store deletes the parameter.</p>
   *          <p>ExpirationNotification: This policy triggers an event in Amazon CloudWatch Events that
   *    notifies you about the expiration. By using this policy, you can receive notification before or
   *    after the expiration time is reached, in units of days or hours.</p>
   *          <p>NoChangeNotification: This policy triggers a CloudWatch event if a parameter has not been
   *    modified for a specified period of time. This policy type is useful when, for example, a secret
   *    needs to be changed within a period of time, but it has not been changed.</p>
   *
   *          <p>All existing policies are preserved until you send new policies or an empty policy. For more
   *    information about parameter policies, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-policies.html">Working with Parameter Policies</a>.
   *   </p>
   */
  Policies?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    Systems Manager parameter to identify the type of resource to which it applies, the environment, or the
   *    type of configuration data referenced by the parameter. In this case, you could specify the
   *    following key name/value pairs:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=Resource,Value=S3bucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=ParameterType,Value=LicenseKey</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing Systems Manager parameter, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The parameter tier to assign to a parameter.</p>
   *          <p>Parameter Store offers a standard tier and an advanced tier for parameters. Standard
   *    parameters have a content size limit of 4 KB and can't be configured to use parameter policies.
   *    You can create a maximum of 10,000 standard parameters for each Region in an AWS account.
   *    Standard parameters are offered at no additional cost. </p>
   *          <p>Advanced parameters have a content size limit of 8 KB and can be configured to use parameter
   *    policies. You can create a maximum of 100,000 advanced parameters for each Region in an AWS
   *    account. Advanced parameters incur a charge. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html">About Advanced Parameters</a>
   *    in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>You can change a standard parameter to an advanced parameter any time. But you can't revert
   *    an advanced parameter to a standard parameter. Reverting an advanced parameter to a standard
   *    parameter would result in data loss because the system would truncate the size of the parameter
   *    from 8 KB to 4 KB. Reverting would also remove any policies attached to the parameter. Lastly,
   *    advanced parameters use a different form of encryption than standard parameters. </p>
   *          <p>If you no longer need an advanced parameter, or if you no longer want to incur charges for
   *    an advanced parameter, you must delete it and recreate it as a new standard parameter. </p>
   *          <p>
   *             <b>Using the Default Tier Configuration</b>
   *          </p>
   *          <p>In <code>PutParameter</code> requests, you can specify the tier to create the parameter in.
   *    Whenever you specify a tier in the request, Parameter Store creates or updates the parameter
   *    according to that request. However, if you do not specify a tier in a request, Parameter Store
   *    assigns the tier based on the current Parameter Store default tier configuration.</p>
   *          <p>The default tier when you begin using Parameter Store is the standard-parameter tier. If you
   *    use the advanced-parameter tier, you can specify one of the following as the default:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Advanced</b>: With this option, Parameter Store evaluates all
   *      requests as advanced parameters. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Intelligent-Tiering</b>: With this option, Parameter Store
   *      evaluates each request to determine if the parameter is standard or advanced. </p>
   *                <p>If the request doesn't include any options that require an advanced parameter, the
   *      parameter is created in the standard-parameter tier. If one or more options requiring an
   *      advanced parameter are included in the request, Parameter Store create a parameter in the
   *      advanced-parameter tier.</p>
   *                <p>This approach helps control your parameter-related costs by always creating standard
   *      parameters unless an advanced parameter is necessary. </p>
   *             </li>
   *          </ul>
   *          <p>Options that require an advanced parameter include the following:</p>
   *          <ul>
   *             <li>
   *                <p>The content size of the parameter is more than 4 KB.</p>
   *             </li>
   *             <li>
   *                <p>The parameter uses a parameter policy.</p>
   *             </li>
   *             <li>
   *                <p>More than 10,000 parameters already exist in your AWS account in the current
   *      Region.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about configuring the default tier option, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/ps-default-tier.html">Specifying a Default Parameter Tier</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>The type of parameter that you want to add to the system.</p>
   *          <p>Items in a <code>StringList</code> must be separated by a comma (,). You can't
   *    use other punctuation or special character to escape items in the list. If you have a parameter
   *    value that requires a comma, then use the <code>String</code> data type.</p>
   *          <note>
   *             <p>
   *                <code>SecureString</code> is not currently supported for AWS CloudFormation templates or
   *     in the China Regions.</p>
   *          </note>
   */
  Type: ParameterType | string | undefined;

  /**
   * <p>The parameter value that you want to add to the system. Standard parameters have a value
   *    limit of 4 KB. Advanced parameters have a value limit of 8 KB.</p>
   */
  Value: string | undefined;
}

export namespace PutParameterRequest {
  export const filterSensitiveLog = (obj: PutParameterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutParameterRequest =>
    __isa(o, "PutParameterRequest");
}

export interface PutParameterResult {
  __type?: "PutParameterResult";
  /**
   * <p>The tier assigned to the parameter.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>The new version number of a parameter. If you edit a parameter value, Parameter Store
   *    automatically creates a new version and assigns this new version a unique ID. You can reference a
   *    parameter version ID in API actions or in Systems Manager documents (SSM documents). By default, if you
   *    don't specify a specific version, the system returns the latest parameter value when a parameter
   *    is called.</p>
   */
  Version?: number;
}

export namespace PutParameterResult {
  export const filterSensitiveLog = (obj: PutParameterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutParameterResult =>
    __isa(o, "PutParameterResult");
}

export enum RebootOption {
  NO_REBOOT = "NoReboot",
  REBOOT_IF_NEEDED = "RebootIfNeeded"
}

export interface RegisterDefaultPatchBaselineRequest {
  __type?: "RegisterDefaultPatchBaselineRequest";
  /**
   * <p>The ID of the patch baseline that should be the default patch baseline.</p>
   */
  BaselineId: string | undefined;
}

export namespace RegisterDefaultPatchBaselineRequest {
  export const filterSensitiveLog = (
    obj: RegisterDefaultPatchBaselineRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterDefaultPatchBaselineRequest =>
    __isa(o, "RegisterDefaultPatchBaselineRequest");
}

export interface RegisterDefaultPatchBaselineResult {
  __type?: "RegisterDefaultPatchBaselineResult";
  /**
   * <p>The ID of the default patch baseline.</p>
   */
  BaselineId?: string;
}

export namespace RegisterDefaultPatchBaselineResult {
  export const filterSensitiveLog = (
    obj: RegisterDefaultPatchBaselineResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterDefaultPatchBaselineResult =>
    __isa(o, "RegisterDefaultPatchBaselineResult");
}

export interface RegisterPatchBaselineForPatchGroupRequest {
  __type?: "RegisterPatchBaselineForPatchGroupRequest";
  /**
   * <p>The ID of the patch baseline to register the patch group with.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch group that should be registered with the patch baseline.</p>
   */
  PatchGroup: string | undefined;
}

export namespace RegisterPatchBaselineForPatchGroupRequest {
  export const filterSensitiveLog = (
    obj: RegisterPatchBaselineForPatchGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterPatchBaselineForPatchGroupRequest =>
    __isa(o, "RegisterPatchBaselineForPatchGroupRequest");
}

export interface RegisterPatchBaselineForPatchGroupResult {
  __type?: "RegisterPatchBaselineForPatchGroupResult";
  /**
   * <p>The ID of the patch baseline the patch group was registered with.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   */
  PatchGroup?: string;
}

export namespace RegisterPatchBaselineForPatchGroupResult {
  export const filterSensitiveLog = (
    obj: RegisterPatchBaselineForPatchGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterPatchBaselineForPatchGroupResult =>
    __isa(o, "RegisterPatchBaselineForPatchGroupResult");
}

export interface RegisterTargetWithMaintenanceWindowRequest {
  __type?: "RegisterTargetWithMaintenanceWindowRequest";
  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>An optional description for the target.</p>
   */
  Description?: string;

  /**
   * <p>An optional name for the target.</p>
   */
  Name?: string;

  /**
   * <p>User-provided value that will be included in any CloudWatch events raised while running
   *    tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The type of target being registered with the maintenance window.</p>
   */
  ResourceType: MaintenanceWindowResourceType | string | undefined;

  /**
   * <p>The targets to register with the maintenance window. In other words, the instances to run
   *    commands on when the maintenance window runs.</p>
   *
   *          <p>You can specify targets using instance IDs, resource group names, or tags that have been
   *    applied to instances.</p>
   *          <p>
   *             <b>Example 1</b>: Specify instance IDs</p>
   *          <p>
   *             <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i>
   *             </code>
   *          </p>
   *          <p>
   *             <b>Example 2</b>: Use tag key-pairs applied to instances</p>
   *          <p>
   *             <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i>
   *             </code>
   *          </p>
   *          <p>
   *             <b>Example 3</b>: Use tag-keys applied to instances</p>
   *          <p>
   *             <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i>
   *             </code>
   *          </p>
   *
   *          <p>
   *             <b>Example 4</b>: Use resource group names</p>
   *          <p>
   *             <code>Key=resource-groups:Name,Values=<i>resource-group-name</i>
   *             </code>
   *          </p>
   *          <p>
   *             <b>Example 5</b>: Use filters for resource group types</p>
   *          <p>
   *             <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i>
   *             </code>
   *          </p>
   *          <note>
   *             <p>For <code>Key=resource-groups:ResourceTypeFilters</code>, specify resource types in the
   *     following format</p>
   *             <p>
   *                <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i>
   *                </code>
   *             </p>
   *          </note>
   *
   *          <p>For more information about these examples formats, including the best use case for each one,
   *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html">Examples: Register
   *     Targets with a Maintenance Window</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>The ID of the maintenance window the target should be registered with.</p>
   */
  WindowId: string | undefined;
}

export namespace RegisterTargetWithMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: RegisterTargetWithMaintenanceWindowRequest
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })
  });
  export const isa = (
    o: any
  ): o is RegisterTargetWithMaintenanceWindowRequest =>
    __isa(o, "RegisterTargetWithMaintenanceWindowRequest");
}

export interface RegisterTargetWithMaintenanceWindowResult {
  __type?: "RegisterTargetWithMaintenanceWindowResult";
  /**
   * <p>The ID of the target definition in this maintenance window.</p>
   */
  WindowTargetId?: string;
}

export namespace RegisterTargetWithMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: RegisterTargetWithMaintenanceWindowResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterTargetWithMaintenanceWindowResult =>
    __isa(o, "RegisterTargetWithMaintenanceWindowResult");
}

export interface RegisterTaskWithMaintenanceWindowRequest {
  __type?: "RegisterTaskWithMaintenanceWindowRequest";
  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>An optional description for the task.</p>
   */
  Description?: string;

  /**
   * <p>A structure containing information about an Amazon S3 bucket to write instance-level logs to. </p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The maximum number of targets this task can be run for in parallel.</p>
   */
  MaxConcurrency: string | undefined;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   */
  MaxErrors: string | undefined;

  /**
   * <p>An optional name for the task.</p>
   */
  Name?: string;

  /**
   * <p>The priority of the task in the maintenance window, the lower the number the higher the
   *    priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the
   *    same priority scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the IAM service role for Systems Manager to assume when running a
   *   maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's
   *   service-linked role.  If no service-linked role for Systems Manager exists in your account, it is created when you run
   *   <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>For more information, see the following topics in the in the <i>AWS Systems Manager User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html#slr-permissions">Service-Linked Role
   *     Permissions for Systems Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html#maintenance-window-tasks-service-role">Should I Use a Service-Linked Role or a Custom Service Role to Run Maintenance Window Tasks?
   *    </a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The targets (either instances or maintenance window targets).</p>
   *          <p>Specify instances using the following format: </p>
   *          <p>
   *             <code>Key=InstanceIds,Values=<instance-id-1>,<instance-id-2></code>
   *          </p>
   *          <p>Specify maintenance window targets using the following format:</p>
   *          <p>
   *             <code>Key=WindowTargetIds;,Values=<window-target-id-1>,<window-target-id-2></code>
   *          </p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>The ARN of the task to run.</p>
   */
  TaskArn: string | undefined;

  /**
   * <p>The parameters that the task should use during execution. Populate only the fields that
   *    match the task type. All other fields should be empty. </p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  TaskParameters?: {
    [key: string]: MaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The type of task being registered.</p>
   */
  TaskType: MaintenanceWindowTaskType | string | undefined;

  /**
   * <p>The ID of the maintenance window the task should be added to.</p>
   */
  WindowId: string | undefined;
}

export namespace RegisterTaskWithMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: RegisterTaskWithMaintenanceWindowRequest
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      )
    }),
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is RegisterTaskWithMaintenanceWindowRequest =>
    __isa(o, "RegisterTaskWithMaintenanceWindowRequest");
}

export interface RegisterTaskWithMaintenanceWindowResult {
  __type?: "RegisterTaskWithMaintenanceWindowResult";
  /**
   * <p>The ID of the task in the maintenance window.</p>
   */
  WindowTaskId?: string;
}

export namespace RegisterTaskWithMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: RegisterTaskWithMaintenanceWindowResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterTaskWithMaintenanceWindowResult =>
    __isa(o, "RegisterTaskWithMaintenanceWindowResult");
}

/**
 * <p>An OpsItems that shares something in common with the current OpsItem. For example, related
 *    OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for
 *    the impacted resource.</p>
 */
export interface RelatedOpsItem {
  __type?: "RelatedOpsItem";
  /**
   * <p>The ID of an OpsItem related to the current OpsItem.</p>
   */
  OpsItemId: string | undefined;
}

export namespace RelatedOpsItem {
  export const filterSensitiveLog = (obj: RelatedOpsItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is RelatedOpsItem =>
    __isa(o, "RelatedOpsItem");
}

export interface RemoveTagsFromResourceRequest {
  __type?: "RemoveTagsFromResourceRequest";
  /**
   * <p>The ID of the resource from which you want to remove tags. For example:</p>
   *          <p>ManagedInstance: mi-012345abcde</p>
   *          <p>MaintenanceWindow: mw-012345abcde</p>
   *          <p>PatchBaseline: pb-012345abcde</p>
   *          <p>For the Document and Parameter values, use the name of the resource.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API action is only for on-premises managed instances.
   *     Specify the name of the managed instance in the following format: mi-ID_number. For example,
   *     mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of resource from which you want to remove a tag.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API action is only for on-premises managed instances.
   *     Specify the name of the managed instance in the following format: mi-ID_number. For example,
   *     mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;

  /**
   * <p>Tag keys that you want to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceRequest {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceRequest =>
    __isa(o, "RemoveTagsFromResourceRequest");
}

export interface RemoveTagsFromResourceResult {
  __type?: "RemoveTagsFromResourceResult";
}

export namespace RemoveTagsFromResourceResult {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceResult =>
    __isa(o, "RemoveTagsFromResourceResult");
}

/**
 * <p>The request body of the ResetServiceSetting API action.</p>
 */
export interface ResetServiceSettingRequest {
  __type?: "ResetServiceSettingRequest";
  /**
   * <p>The ID of the service setting to reset.</p>
   */
  SettingId: string | undefined;
}

export namespace ResetServiceSettingRequest {
  export const filterSensitiveLog = (obj: ResetServiceSettingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetServiceSettingRequest =>
    __isa(o, "ResetServiceSettingRequest");
}

/**
 * <p>The result body of the ResetServiceSetting API action.</p>
 */
export interface ResetServiceSettingResult {
  __type?: "ResetServiceSettingResult";
  /**
   * <p>The current, effective service setting after calling the ResetServiceSetting API
   *    action.</p>
   */
  ServiceSetting?: ServiceSetting;
}

export namespace ResetServiceSettingResult {
  export const filterSensitiveLog = (obj: ResetServiceSettingResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetServiceSettingResult =>
    __isa(o, "ResetServiceSettingResult");
}

/**
 * <p>Information about targets that resolved during the Automation execution.</p>
 */
export interface ResolvedTargets {
  __type?: "ResolvedTargets";
  /**
   * <p>A list of parameter values sent to targets that resolved during the Automation
   *    execution.</p>
   */
  ParameterValues?: string[];

  /**
   * <p>A boolean value indicating whether the resolved target list is truncated.</p>
   */
  Truncated?: boolean;
}

export namespace ResolvedTargets {
  export const filterSensitiveLog = (obj: ResolvedTargets): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResolvedTargets =>
    __isa(o, "ResolvedTargets");
}

/**
 * <p>Compliance summary information for a specific resource. </p>
 */
export interface ResourceComplianceSummaryItem {
  __type?: "ResourceComplianceSummaryItem";
  /**
   * <p>The compliance type.</p>
   */
  ComplianceType?: string;

  /**
   * <p>A list of items that are compliant for the resource.</p>
   */
  CompliantSummary?: CompliantSummary;

  /**
   * <p>Information about the execution.</p>
   */
  ExecutionSummary?: ComplianceExecutionSummary;

  /**
   * <p>A list of items that aren't compliant for the resource.</p>
   */
  NonCompliantSummary?: NonCompliantSummary;

  /**
   * <p>The highest severity item found for the resource. The resource is compliant for this
   *    item.</p>
   */
  OverallSeverity?: ComplianceSeverity | string;

  /**
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The compliance status for the resource.</p>
   */
  Status?: ComplianceStatus | string;
}

export namespace ResourceComplianceSummaryItem {
  export const filterSensitiveLog = (
    obj: ResourceComplianceSummaryItem
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceComplianceSummaryItem =>
    __isa(o, "ResourceComplianceSummaryItem");
}

/**
 * <p>A sync configuration with the same name already exists.</p>
 */
export interface ResourceDataSyncAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDataSyncAlreadyExistsException";
  $fault: "client";
  SyncName?: string;
}

export namespace ResourceDataSyncAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncAlreadyExistsException =>
    __isa(o, "ResourceDataSyncAlreadyExistsException");
}

/**
 * <p>Information about the AwsOrganizationsSource resource data sync source. A sync source of
 *    this type can synchronize data from AWS Organizations or, if an AWS Organization is not present,
 *    from multiple AWS Regions.</p>
 */
export interface ResourceDataSyncAwsOrganizationsSource {
  __type?: "ResourceDataSyncAwsOrganizationsSource";
  /**
   * <p>If an AWS Organization is present, this is either <code>OrganizationalUnits</code> or
   *     <code>EntireOrganization</code>. For <code>OrganizationalUnits</code>, the data is aggregated
   *    from a set of organization units. For <code>EntireOrganization</code>, the data is aggregated
   *    from the entire AWS Organization. </p>
   */
  OrganizationSourceType: string | undefined;

  /**
   * <p>The AWS Organizations organization units included in the sync.</p>
   */
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[];
}

export namespace ResourceDataSyncAwsOrganizationsSource {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncAwsOrganizationsSource
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncAwsOrganizationsSource =>
    __isa(o, "ResourceDataSyncAwsOrganizationsSource");
}

/**
 * <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
 */
export interface ResourceDataSyncConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDataSyncConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceDataSyncConflictException {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncConflictException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncConflictException =>
    __isa(o, "ResourceDataSyncConflictException");
}

/**
 * <p>You have exceeded the allowed maximum sync configurations.</p>
 */
export interface ResourceDataSyncCountExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDataSyncCountExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceDataSyncCountExceededException {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncCountExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncCountExceededException =>
    __isa(o, "ResourceDataSyncCountExceededException");
}

/**
 * <p>The specified sync configuration is invalid.</p>
 */
export interface ResourceDataSyncInvalidConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDataSyncInvalidConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceDataSyncInvalidConfigurationException {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncInvalidConfigurationException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ResourceDataSyncInvalidConfigurationException =>
    __isa(o, "ResourceDataSyncInvalidConfigurationException");
}

/**
 * <p>Information about a Resource Data Sync configuration, including its current status and last
 *    successful sync.</p>
 */
export interface ResourceDataSyncItem {
  __type?: "ResourceDataSyncItem";
  /**
   * <p>The status reported by the last sync.</p>
   */
  LastStatus?: LastResourceDataSyncStatus | string;

  /**
   * <p>The last time the sync operations returned a status of <code>SUCCESSFUL</code> (UTC).</p>
   */
  LastSuccessfulSyncTime?: Date;

  /**
   * <p>The status message details reported by the last sync.</p>
   */
  LastSyncStatusMessage?: string;

  /**
   * <p>The last time the configuration attempted to sync (UTC).</p>
   */
  LastSyncTime?: Date;

  /**
   * <p>Configuration information for the target Amazon S3 bucket.</p>
   */
  S3Destination?: ResourceDataSyncS3Destination;

  /**
   * <p>The date and time the configuration was created (UTC).</p>
   */
  SyncCreatedTime?: Date;

  /**
   * <p>The date and time the resource data sync was changed. </p>
   */
  SyncLastModifiedTime?: Date;

  /**
   * <p>The name of the Resource Data Sync.</p>
   */
  SyncName?: string;

  /**
   * <p>Information about the source where the data was synchronized. </p>
   */
  SyncSource?: ResourceDataSyncSourceWithState;

  /**
   * <p>The type of resource data sync. If <code>SyncType</code> is <code>SyncToDestination</code>,
   *    then the resource data sync synchronizes data to an Amazon S3 bucket. If the
   *     <code>SyncType</code> is <code>SyncFromSource</code> then the resource data sync synchronizes
   *    data from AWS Organizations or from multiple AWS Regions.</p>
   */
  SyncType?: string;
}

export namespace ResourceDataSyncItem {
  export const filterSensitiveLog = (obj: ResourceDataSyncItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncItem =>
    __isa(o, "ResourceDataSyncItem");
}

/**
 * <p>The specified sync name was not found.</p>
 */
export interface ResourceDataSyncNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDataSyncNotFoundException";
  $fault: "client";
  Message?: string;
  SyncName?: string;
  SyncType?: string;
}

export namespace ResourceDataSyncNotFoundException {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncNotFoundException =>
    __isa(o, "ResourceDataSyncNotFoundException");
}

/**
 * <p>The AWS Organizations organizational unit data source for the sync.</p>
 */
export interface ResourceDataSyncOrganizationalUnit {
  __type?: "ResourceDataSyncOrganizationalUnit";
  /**
   * <p>The AWS Organization unit ID data source for the sync.</p>
   */
  OrganizationalUnitId?: string;
}

export namespace ResourceDataSyncOrganizationalUnit {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncOrganizationalUnit
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncOrganizationalUnit =>
    __isa(o, "ResourceDataSyncOrganizationalUnit");
}

/**
 * <p>Information about the target Amazon S3 bucket for the Resource Data Sync.</p>
 */
export interface ResourceDataSyncS3Destination {
  __type?: "ResourceDataSyncS3Destination";
  /**
   * <p>The ARN of an encryption key for a destination in Amazon S3. Must belong to the same Region as
   *    the destination Amazon S3 bucket.</p>
   */
  AWSKMSKeyARN?: string;

  /**
   * <p>The name of the Amazon S3 bucket where the aggregated data is stored.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>An Amazon S3 prefix for the bucket.</p>
   */
  Prefix?: string;

  /**
   * <p>The AWS Region with the Amazon S3 bucket targeted by the Resource Data Sync.</p>
   */
  Region: string | undefined;

  /**
   * <p>A supported sync format. The following format is currently supported: JsonSerDe</p>
   */
  SyncFormat: ResourceDataSyncS3Format | string | undefined;
}

export namespace ResourceDataSyncS3Destination {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncS3Destination
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncS3Destination =>
    __isa(o, "ResourceDataSyncS3Destination");
}

export enum ResourceDataSyncS3Format {
  JSON_SERDE = "JsonSerDe"
}

/**
 * <p>Information about the source of the data included in the resource data sync.</p>
 */
export interface ResourceDataSyncSource {
  __type?: "ResourceDataSyncSource";
  /**
   * <p>The field name in <code>SyncSource</code> for the
   *     <code>ResourceDataSyncAwsOrganizationsSource</code> type.</p>
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * <p>Whether to automatically synchronize and aggregate data from new AWS Regions when those
   *    Regions come online.</p>
   */
  IncludeFutureRegions?: boolean;

  /**
   * <p>The <code>SyncSource</code> AWS Regions included in the resource data sync.</p>
   */
  SourceRegions: string[] | undefined;

  /**
   * <p>The type of data source for the resource data sync. <code>SourceType</code> is either
   *     <code>AwsOrganizations</code> (if an organization is present in AWS Organizations) or
   *     <code>singleAccountMultiRegions</code>.</p>
   */
  SourceType: string | undefined;
}

export namespace ResourceDataSyncSource {
  export const filterSensitiveLog = (obj: ResourceDataSyncSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncSource =>
    __isa(o, "ResourceDataSyncSource");
}

/**
 * <p>The data type name for including resource data sync state. There are four sync
 *    states:</p>
 *
 *          <p>
 *             <code>OrganizationNotExists</code> (Your organization doesn't exist)</p>
 *          <p>
 *             <code>NoPermissions</code> (The system can't locate the service-linked role. This role is
 *    automatically created when a user creates a resource data sync in Explorer.)</p>
 *          <p>
 *             <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the
 *    resource data sync configuration.)</p>
 *          <p>
 *             <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization
 *    in AWS Organizations.)</p>
 */
export interface ResourceDataSyncSourceWithState {
  __type?: "ResourceDataSyncSourceWithState";
  /**
   * <p>The field name in <code>SyncSource</code> for the
   *     <code>ResourceDataSyncAwsOrganizationsSource</code> type.</p>
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * <p>Whether to automatically synchronize and aggregate data from new AWS Regions when those
   *    Regions come online.</p>
   */
  IncludeFutureRegions?: boolean;

  /**
   * <p>The <code>SyncSource</code> AWS Regions included in the resource data sync.</p>
   */
  SourceRegions?: string[];

  /**
   * <p>The type of data source for the resource data sync. <code>SourceType</code> is either
   *     <code>AwsOrganizations</code> (if an organization is present in AWS Organizations) or
   *     <code>singleAccountMultiRegions</code>.</p>
   */
  SourceType?: string;

  /**
   * <p>The data type name for including resource data sync state. There are four sync
   *    states:</p>
   *
   *          <p>
   *             <code>OrganizationNotExists</code>: Your organization doesn't exist.</p>
   *          <p>
   *             <code>NoPermissions</code>: The system can't locate the service-linked role. This role is
   *    automatically created when a user creates a resource data sync in Explorer.</p>
   *          <p>
   *             <code>InvalidOrganizationalUnit</code>: You specified or selected an invalid unit in the
   *    resource data sync configuration.</p>
   *          <p>
   *             <code>TrustedAccessDisabled</code>: You disabled Systems Manager access in the organization
   *    in AWS Organizations.</p>
   */
  State?: string;
}

export namespace ResourceDataSyncSourceWithState {
  export const filterSensitiveLog = (
    obj: ResourceDataSyncSourceWithState
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDataSyncSourceWithState =>
    __isa(o, "ResourceDataSyncSourceWithState");
}

/**
 * <p>Error returned if an attempt is made to delete a patch baseline that is registered for a
 *    patch group.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager Service Quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
 */
export interface ResourceLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (
    obj: ResourceLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceLimitExceededException =>
    __isa(o, "ResourceLimitExceededException");
}

export enum ResourceType {
  DOCUMENT = "Document",
  EC2_INSTANCE = "EC2Instance",
  MANAGED_INSTANCE = "ManagedInstance"
}

export enum ResourceTypeForTagging {
  DOCUMENT = "Document",
  MAINTENANCE_WINDOW = "MaintenanceWindow",
  MANAGED_INSTANCE = "ManagedInstance",
  OPS_ITEM = "OpsItem",
  PARAMETER = "Parameter",
  PATCH_BASELINE = "PatchBaseline"
}

/**
 * <p>The inventory item result attribute.</p>
 */
export interface ResultAttribute {
  __type?: "ResultAttribute";
  /**
   * <p>Name of the inventory item type. Valid value: AWS:InstanceInformation. Default Value:
   *    AWS:InstanceInformation.</p>
   */
  TypeName: string | undefined;
}

export namespace ResultAttribute {
  export const filterSensitiveLog = (obj: ResultAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResultAttribute =>
    __isa(o, "ResultAttribute");
}

export interface ResumeSessionRequest {
  __type?: "ResumeSessionRequest";
  /**
   * <p>The ID of the disconnected session to resume.</p>
   */
  SessionId: string | undefined;
}

export namespace ResumeSessionRequest {
  export const filterSensitiveLog = (obj: ResumeSessionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResumeSessionRequest =>
    __isa(o, "ResumeSessionRequest");
}

export interface ResumeSessionResponse {
  __type?: "ResumeSessionResponse";
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and
   *    receive output from the instance. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code>.</p>
   *          <p>
   *             <b>region</b> represents the Region identifier for an
   * 						AWS Region supported by AWS Systems Manager, such as <code>us-east-2</code> for the US East (Ohio) Region.
   * 						For a list of supported <b>region</b> values, see the <b>Region</b> column in <a href="http://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region">Systems Manager Service Endpoints</a> in the
   *         <i>AWS General Reference</i>.</p>
   *          <p>
   *             <b>session-id</b> represents the ID of a Session Manager session, such as
   *     <code>1a2b3c4dEXAMPLE</code>.</p>
   */
  StreamUrl?: string;

  /**
   * <p>An encrypted token value containing session and caller information. Used to authenticate the
   *    connection to the instance.</p>
   */
  TokenValue?: string;
}

export namespace ResumeSessionResponse {
  export const filterSensitiveLog = (obj: ResumeSessionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResumeSessionResponse =>
    __isa(o, "ResumeSessionResponse");
}

/**
 * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface S3OutputLocation {
  __type?: "S3OutputLocation";
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The Amazon S3 bucket subfolder.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon S3 bucket region.</p>
   */
  OutputS3Region?: string;
}

export namespace S3OutputLocation {
  export const filterSensitiveLog = (obj: S3OutputLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3OutputLocation =>
    __isa(o, "S3OutputLocation");
}

/**
 * <p>A URL for the Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface S3OutputUrl {
  __type?: "S3OutputUrl";
  /**
   * <p>A URL for an Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: string;
}

export namespace S3OutputUrl {
  export const filterSensitiveLog = (obj: S3OutputUrl): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3OutputUrl => __isa(o, "S3OutputUrl");
}

/**
 * <p>Information about a scheduled execution for a maintenance window.</p>
 */
export interface ScheduledWindowExecution {
  __type?: "ScheduledWindowExecution";
  /**
   * <p>The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be
   *    run.</p>
   */
  ExecutionTime?: string;

  /**
   * <p>The name of the maintenance window to be run.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the maintenance window to be run.</p>
   */
  WindowId?: string;
}

export namespace ScheduledWindowExecution {
  export const filterSensitiveLog = (obj: ScheduledWindowExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledWindowExecution =>
    __isa(o, "ScheduledWindowExecution");
}

export interface SendAutomationSignalRequest {
  __type?: "SendAutomationSignalRequest";
  /**
   * <p>The unique identifier for an existing Automation execution that you want to send the signal
   *    to.</p>
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>The data sent with the signal. The data schema depends on the type of signal used in the
   *    request.</p>
   *          <p>For <code>Approve</code> and <code>Reject</code> signal types, the payload is an optional
   *    comment that you can send with the signal type. For example:</p>
   *          <p>
   *             <code>Comment="Looks good"</code>
   *          </p>
   *          <p>For <code>StartStep</code> and <code>Resume</code> signal types, you must send the name of
   *    the Automation step to start or resume as the payload. For example:</p>
   *          <p>
   *             <code>StepName="step1"</code>
   *          </p>
   *          <p>For the <code>StopStep</code> signal type, you must send the step execution ID as the
   *    payload. For example:</p>
   *          <p>
   *             <code>StepExecutionId="97fff367-fc5a-4299-aed8-0123456789ab"</code>
   *          </p>
   */
  Payload?: { [key: string]: string[] };

  /**
   * <p>The type of signal to send to an Automation execution. </p>
   */
  SignalType: SignalType | string | undefined;
}

export namespace SendAutomationSignalRequest {
  export const filterSensitiveLog = (
    obj: SendAutomationSignalRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendAutomationSignalRequest =>
    __isa(o, "SendAutomationSignalRequest");
}

export interface SendAutomationSignalResult {
  __type?: "SendAutomationSignalResult";
}

export namespace SendAutomationSignalResult {
  export const filterSensitiveLog = (obj: SendAutomationSignalResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendAutomationSignalResult =>
    __isa(o, "SendAutomationSignalResult");
}

export interface SendCommandRequest {
  __type?: "SendCommandRequest";
  /**
   * <p>Enables Systems Manager to send Run Command output to Amazon CloudWatch Logs. </p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   */
  Comment?: string;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  DocumentHash?: string;

  /**
   * <p>Sha256 or Sha1.</p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  DocumentHashType?: DocumentHashType | string;

  /**
   * <p>Required. The name of the Systems Manager document to run. This can be a public document or a custom
   *    document.</p>
   */
  DocumentName: string | undefined;

  /**
   * <p>The SSM document version to use in the request. You can specify $DEFAULT, $LATEST, or a
   *    specific version number. If you run commands by using the AWS CLI, then you must escape the first
   *    two options by using a backslash. If you specify a version number, then you don't need to use the
   *    backslash. For example:</p>
   *          <p>--document-version "\$DEFAULT"</p>
   *          <p>--document-version "\$LATEST"</p>
   *          <p>--document-version "3"</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The instance IDs where the command should run. You can specify a maximum of 50 IDs. If you
   *    prefer not to list individual instance IDs, you can instead send commands to a fleet of instances
   *    using the Targets parameter, which accepts EC2 tags. For more information about how to use
   *    targets, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Sending Commands to a
   *     Fleet</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>(Optional) The maximum number of instances that are allowed to run the command at the same
   *    time. You can specify a number such as 10 or a percentage such as 10%. The default value is 50.
   *    For more information about how to use MaxConcurrency, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-velocity">Using Concurrency
   *     Controls</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed without the command failing. When the command fails one
   *    more time beyond the value of MaxErrors, the systems stops sending the command to additional
   *    targets. You can specify a number like 10 or a percentage like 10%. The default value is 0. For
   *    more information about how to use MaxErrors, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-maxerrors">Using Error
   *     Controls</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  MaxErrors?: string;

  /**
   * <p>Configurations for sending notifications.</p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>The name of the S3 bucket where command execution responses should be stored.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The directory structure within the S3 bucket where the responses should be stored.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon S3 bucket region.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The required and optional parameters specified in the document being run.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for Run
   *    Command commands.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>(Optional) An array of search criteria that targets instances using a Key,Value combination
   *    that you specify. Targets is required if you don't provide one or more instance IDs in the call.
   *    For more information about how to use targets, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Sending Commands to a Fleet</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  Targets?: Target[];

  /**
   * <p>If this time is reached and the command has not already started running, it will not
   *    run.</p>
   */
  TimeoutSeconds?: number;
}

export namespace SendCommandRequest {
  export const filterSensitiveLog = (obj: SendCommandRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendCommandRequest =>
    __isa(o, "SendCommandRequest");
}

export interface SendCommandResult {
  __type?: "SendCommandResult";
  /**
   * <p>The request as it was received by Systems Manager. Also provides the command ID which can be used
   *    future references to this request.</p>
   */
  Command?: Command;
}

export namespace SendCommandResult {
  export const filterSensitiveLog = (obj: SendCommandResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendCommandResult =>
    __isa(o, "SendCommandResult");
}

/**
 * <p>The service setting data structure.</p>
 *
 *          <p>
 *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    AWS service charges money to the account based on feature or service usage, then the AWS service
 *    team might create a default setting of "false". This means the user can't use this feature unless
 *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change
 *    the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back
 *    to the original value defined by the AWS service team.</p>
 */
export interface ServiceSetting {
  __type?: "ServiceSetting";
  /**
   * <p>The ARN of the service setting.</p>
   */
  ARN?: string;

  /**
   * <p>The last time the service setting was modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The ARN of the last modified user. This field is populated only if the setting value was
   *    overwritten.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>The ID of the service setting.</p>
   */
  SettingId?: string;

  /**
   * <p>The value of the service setting.</p>
   */
  SettingValue?: string;

  /**
   * <p>The status of the service setting. The value can be Default, Customized or
   *    PendingUpdate.</p>
   *          <ul>
   *             <li>
   *                <p>Default: The current setting uses a default value provisioned by the AWS service
   *      team.</p>
   *             </li>
   *             <li>
   *                <p>Customized: The current setting use a custom value specified by the customer.</p>
   *             </li>
   *             <li>
   *                <p>PendingUpdate: The current setting uses a default or custom value, but a setting change
   *      request is pending approval.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace ServiceSetting {
  export const filterSensitiveLog = (obj: ServiceSetting): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceSetting =>
    __isa(o, "ServiceSetting");
}

/**
 * <p>The specified service setting was not found. Either the service name or the setting has not
 *    been provisioned by the AWS service team.</p>
 */
export interface ServiceSettingNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceSettingNotFound";
  $fault: "client";
  Message?: string;
}

export namespace ServiceSettingNotFound {
  export const filterSensitiveLog = (obj: ServiceSettingNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceSettingNotFound =>
    __isa(o, "ServiceSettingNotFound");
}

/**
 * <p>Information about a Session Manager connection to an instance.</p>
 */
export interface Session {
  __type?: "Session";
  /**
   * <p>Reserved for future use.</p>
   */
  Details?: string;

  /**
   * <p>The name of the Session Manager SSM document used to define the parameters and plugin settings for the
   *    session. For example, <code>SSM-SessionManagerRunShell</code>.</p>
   */
  DocumentName?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session was terminated.</p>
   */
  EndDate?: Date;

  /**
   * <p>Reserved for future use.</p>
   */
  OutputUrl?: SessionManagerOutputUrl;

  /**
   * <p>The ID of the AWS user account that started the session.</p>
   */
  Owner?: string;

  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session began.</p>
   */
  StartDate?: Date;

  /**
   * <p>The status of the session. For example, "Connected" or "Terminated".</p>
   */
  Status?: SessionStatus | string;

  /**
   * <p>The instance that the Session Manager session connected to.</p>
   */
  Target?: string;
}

export namespace Session {
  export const filterSensitiveLog = (obj: Session): any => ({
    ...obj
  });
  export const isa = (o: any): o is Session => __isa(o, "Session");
}

/**
 * <p>Describes a filter for Session Manager information.</p>
 */
export interface SessionFilter {
  __type?: "SessionFilter";
  /**
   * <p>The name of the filter.</p>
   */
  key: SessionFilterKey | string | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>InvokedAfter: Specify a timestamp to limit your results. For example, specify
   *      2018-08-29T00:00:00Z to see sessions that started August 29, 2018, and later.</p>
   *             </li>
   *             <li>
   *                <p>InvokedBefore: Specify a timestamp to limit your results. For example, specify
   *      2018-08-29T00:00:00Z to see sessions that started before August 29, 2018.</p>
   *             </li>
   *             <li>
   *                <p>Target: Specify an instance to which session connections have been made.</p>
   *             </li>
   *             <li>
   *                <p>Owner: Specify an AWS user account to see a list of sessions started by that user.</p>
   *             </li>
   *             <li>
   *                <p>Status: Specify a valid session status to see a list of all sessions with that status.
   *      Status values you can specify include:</p>
   *                <ul>
   *                   <li>
   *                      <p>Connected</p>
   *                   </li>
   *                   <li>
   *                      <p>Connecting</p>
   *                   </li>
   *                   <li>
   *                      <p>Disconnected</p>
   *                   </li>
   *                   <li>
   *                      <p>Terminated</p>
   *                   </li>
   *                   <li>
   *                      <p>Terminating</p>
   *                   </li>
   *                   <li>
   *                      <p>Failed</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  value: string | undefined;
}

export namespace SessionFilter {
  export const filterSensitiveLog = (obj: SessionFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is SessionFilter => __isa(o, "SessionFilter");
}

export enum SessionFilterKey {
  INVOKED_AFTER = "InvokedAfter",
  INVOKED_BEFORE = "InvokedBefore",
  OWNER = "Owner",
  STATUS = "Status",
  TARGET_ID = "Target"
}

/**
 * <p>Reserved for future use.</p>
 */
export interface SessionManagerOutputUrl {
  __type?: "SessionManagerOutputUrl";
  /**
   * <p>Reserved for future use.</p>
   */
  CloudWatchOutputUrl?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  S3OutputUrl?: string;
}

export namespace SessionManagerOutputUrl {
  export const filterSensitiveLog = (obj: SessionManagerOutputUrl): any => ({
    ...obj
  });
  export const isa = (o: any): o is SessionManagerOutputUrl =>
    __isa(o, "SessionManagerOutputUrl");
}

export enum SessionState {
  ACTIVE = "Active",
  HISTORY = "History"
}

export enum SessionStatus {
  CONNECTED = "Connected",
  CONNECTING = "Connecting",
  DISCONNECTED = "Disconnected",
  FAILED = "Failed",
  TERMINATED = "Terminated",
  TERMINATING = "Terminating"
}

/**
 * <p>The number of managed instances found for each patch severity level defined in the request
 *    filter.</p>
 */
export interface SeveritySummary {
  __type?: "SeveritySummary";
  /**
   * <p>The total number of resources or compliance items that have a severity level of critical.
   *    Critical severity is determined by the organization that published the compliance items.</p>
   */
  CriticalCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of high. High
   *    severity is determined by the organization that published the compliance items.</p>
   */
  HighCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of
   *    informational. Informational severity is determined by the organization that published the
   *    compliance items.</p>
   */
  InformationalCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of low. Low
   *    severity is determined by the organization that published the compliance items.</p>
   */
  LowCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of medium.
   *    Medium severity is determined by the organization that published the compliance items.</p>
   */
  MediumCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of unspecified.
   *    Unspecified severity is determined by the organization that published the compliance
   *    items.</p>
   */
  UnspecifiedCount?: number;
}

export namespace SeveritySummary {
  export const filterSensitiveLog = (obj: SeveritySummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SeveritySummary =>
    __isa(o, "SeveritySummary");
}

export enum SignalType {
  APPROVE = "Approve",
  REJECT = "Reject",
  RESUME = "Resume",
  START_STEP = "StartStep",
  STOP_STEP = "StopStep"
}

export interface StartAssociationsOnceRequest {
  __type?: "StartAssociationsOnceRequest";
  /**
   * <p>The association IDs that you want to run immediately and only one time.</p>
   */
  AssociationIds: string[] | undefined;
}

export namespace StartAssociationsOnceRequest {
  export const filterSensitiveLog = (
    obj: StartAssociationsOnceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAssociationsOnceRequest =>
    __isa(o, "StartAssociationsOnceRequest");
}

export interface StartAssociationsOnceResult {
  __type?: "StartAssociationsOnceResult";
}

export namespace StartAssociationsOnceResult {
  export const filterSensitiveLog = (
    obj: StartAssociationsOnceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAssociationsOnceResult =>
    __isa(o, "StartAssociationsOnceResult");
}

export interface StartAutomationExecutionRequest {
  __type?: "StartAutomationExecutionRequest";
  /**
   * <p>User-provided idempotency token. The token must be unique, is case insensitive, enforces the
   *    UUID format, and can't be reused.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the Automation document to use for this execution.</p>
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the Automation document to use for this execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel. You can specify a
   *    number, such as 10, or a percentage, such as 10%. The default value is 10.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops running the automation on
   *    additional targets. You can specify either an absolute number of errors, for example 10, or a
   *    percentage of the target set, for example 10%. If you specify 3, for example, the system stops
   *    running the automation when the fourth error is received. If you specify 0, then the system stops
   *    running the automation on additional targets after the first error result is returned. If you run
   *    an automation on 50 resources and set max-errors to 10%, then the system stops running the
   *    automation on additional targets when the sixth error is received.</p>
   *          <p>Executions that are already running an automation when max-errors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set max-concurrency to 1 so the executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The execution mode of the automation. Valid modes include the following: Auto and
   *    Interactive. The default mode is Auto.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>A key-value map of execution parameters, which match the declared parameters in the
   *    Automation document.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>Optional metadata that you assign to a resource. You can specify a maximum of five tags for
   *    an automation. Tags enable you to categorize a resource in different ways, such as by purpose,
   *    owner, or environment. For example, you might want to tag an automation to identify an
   *    environment or operating system. In this case, you could specify the following key name/value
   *    pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=environment,Value=test</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing patch baseline, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>A location is a combination of AWS Regions and/or AWS accounts where you want to run the
   *    Automation. Use this action to start an Automation in multiple Regions and multiple accounts. For
   *    more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Executing
   *     Automations in Multiple AWS Regions and Accounts</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  TargetLocations?: TargetLocation[];

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    cannot be specified together.</p>
   */
  TargetMaps?: { [key: string]: string[] }[];

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled execution.
   *    Required if you specify targets.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>A key-value mapping to target resources. Required if you specify TargetParameterName.</p>
   */
  Targets?: Target[];
}

export namespace StartAutomationExecutionRequest {
  export const filterSensitiveLog = (
    obj: StartAutomationExecutionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAutomationExecutionRequest =>
    __isa(o, "StartAutomationExecutionRequest");
}

export interface StartAutomationExecutionResult {
  __type?: "StartAutomationExecutionResult";
  /**
   * <p>The unique ID of a newly scheduled automation execution.</p>
   */
  AutomationExecutionId?: string;
}

export namespace StartAutomationExecutionResult {
  export const filterSensitiveLog = (
    obj: StartAutomationExecutionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAutomationExecutionResult =>
    __isa(o, "StartAutomationExecutionResult");
}

export interface StartSessionRequest {
  __type?: "StartSessionRequest";
  /**
   * <p>The name of the SSM document to define the parameters and plugin settings for the session.
   *    For example, <code>SSM-SessionManagerRunShell</code>. If no document name is provided, a shell to
   *    the instance is launched by default.</p>
   */
  DocumentName?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The instance to connect to for the session.</p>
   */
  Target: string | undefined;
}

export namespace StartSessionRequest {
  export const filterSensitiveLog = (obj: StartSessionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSessionRequest =>
    __isa(o, "StartSessionRequest");
}

export interface StartSessionResponse {
  __type?: "StartSessionResponse";
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and
   *    receive output from the instance. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code>
   *          </p>
   *          <p>
   *             <b>region</b> represents the Region identifier for an
   * 						AWS Region supported by AWS Systems Manager, such as <code>us-east-2</code> for the US East (Ohio) Region.
   * 						For a list of supported <b>region</b> values, see the <b>Region</b> column in <a href="http://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region">Systems Manager Service Endpoints</a> in the
   *         <i>AWS General Reference</i>.</p>
   *          <p>
   *             <b>session-id</b> represents the ID of a Session Manager session, such as
   *     <code>1a2b3c4dEXAMPLE</code>.</p>
   */
  StreamUrl?: string;

  /**
   * <p>An encrypted token value containing session and caller information. Used to authenticate the
   *    connection to the instance.</p>
   */
  TokenValue?: string;
}

export namespace StartSessionResponse {
  export const filterSensitiveLog = (obj: StartSessionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSessionResponse =>
    __isa(o, "StartSessionResponse");
}

/**
 * <p>The updated status is the same as the current status.</p>
 */
export interface StatusUnchanged extends __SmithyException, $MetadataBearer {
  name: "StatusUnchanged";
  $fault: "client";
}

export namespace StatusUnchanged {
  export const filterSensitiveLog = (obj: StatusUnchanged): any => ({
    ...obj
  });
  export const isa = (o: any): o is StatusUnchanged =>
    __isa(o, "StatusUnchanged");
}

/**
 * <p>Detailed information about an the execution state of an Automation step.</p>
 */
export interface StepExecution {
  __type?: "StepExecution";
  /**
   * <p>The action this step performs. The action determines the behavior of the step.</p>
   */
  Action?: string;

  /**
   * <p>If a step has finished execution, this contains the time the execution ended. If the step
   *    has not yet concluded, this field is not populated.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>If a step has begun execution, this contains the time the step started. If the step is in
   *    Pending status, this field is not populated.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>Information about the Automation failure.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>If a step failed, this message explains why the execution failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Fully-resolved values passed into the step before execution.</p>
   */
  Inputs?: { [key: string]: string };

  /**
   * <p>The flag which can be used to help decide whether the failure of current step leads to the
   *    Automation failure.</p>
   */
  IsCritical?: boolean;

  /**
   * <p>The flag which can be used to end automation no matter whether the step succeeds or
   *    fails.</p>
   */
  IsEnd?: boolean;

  /**
   * <p>The maximum number of tries to run the action of the step. The default value is 1.</p>
   */
  MaxAttempts?: number;

  /**
   * <p>The next step after the step succeeds.</p>
   */
  NextStep?: string;

  /**
   * <p>The action to take if the step fails. The default value is Abort.</p>
   */
  OnFailure?: string;

  /**
   * <p>Returned values from the execution of the step.</p>
   */
  Outputs?: { [key: string]: string[] };

  /**
   * <p>A user-specified list of parameters to override when running a step.</p>
   */
  OverriddenParameters?: { [key: string]: string[] };

  /**
   * <p>A message associated with the response code for an execution.</p>
   */
  Response?: string;

  /**
   * <p>The response code returned by the execution of the step.</p>
   */
  ResponseCode?: string;

  /**
   * <p>The unique ID of a step execution.</p>
   */
  StepExecutionId?: string;

  /**
   * <p>The name of this execution step.</p>
   */
  StepName?: string;

  /**
   * <p>The execution status for this step.</p>
   */
  StepStatus?: AutomationExecutionStatus | string;

  /**
   * <p>The combination of AWS Regions and accounts targeted by the current Automation
   *    execution.</p>
   */
  TargetLocation?: TargetLocation;

  /**
   * <p>The targets for the step execution.</p>
   */
  Targets?: Target[];

  /**
   * <p>The timeout seconds of the step.</p>
   */
  TimeoutSeconds?: number;

  /**
   * <p>Strategies used when step fails, we support Continue and Abort. Abort will fail the
   *    automation when the step fails. Continue will ignore the failure of current step and allow
   *    automation to run the next step. With conditional branching, we add step:stepName to support the
   *    automation to go to another specific step.</p>
   */
  ValidNextSteps?: string[];
}

export namespace StepExecution {
  export const filterSensitiveLog = (obj: StepExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is StepExecution => __isa(o, "StepExecution");
}

/**
 * <p>A filter to limit the amount of step execution information returned by the call.</p>
 */
export interface StepExecutionFilter {
  __type?: "StepExecutionFilter";
  /**
   * <p>One or more keys to limit the results. Valid filter keys include the following: StepName,
   *    Action, StepExecutionId, StepExecutionStatus, StartTimeBefore, StartTimeAfter.</p>
   */
  Key: StepExecutionFilterKey | string | undefined;

  /**
   * <p>The values of the filter key.</p>
   */
  Values: string[] | undefined;
}

export namespace StepExecutionFilter {
  export const filterSensitiveLog = (obj: StepExecutionFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is StepExecutionFilter =>
    __isa(o, "StepExecutionFilter");
}

export enum StepExecutionFilterKey {
  ACTION = "Action",
  START_TIME_AFTER = "StartTimeAfter",
  START_TIME_BEFORE = "StartTimeBefore",
  STEP_EXECUTION_ID = "StepExecutionId",
  STEP_EXECUTION_STATUS = "StepExecutionStatus",
  STEP_NAME = "StepName"
}

export interface StopAutomationExecutionRequest {
  __type?: "StopAutomationExecutionRequest";
  /**
   * <p>The execution ID of the Automation to stop.</p>
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>The stop request type. Valid types include the following: Cancel and Complete. The default
   *    type is Cancel.</p>
   */
  Type?: StopType | string;
}

export namespace StopAutomationExecutionRequest {
  export const filterSensitiveLog = (
    obj: StopAutomationExecutionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopAutomationExecutionRequest =>
    __isa(o, "StopAutomationExecutionRequest");
}

export interface StopAutomationExecutionResult {
  __type?: "StopAutomationExecutionResult";
}

export namespace StopAutomationExecutionResult {
  export const filterSensitiveLog = (
    obj: StopAutomationExecutionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopAutomationExecutionResult =>
    __isa(o, "StopAutomationExecutionResult");
}

export enum StopType {
  CANCEL = "Cancel",
  COMPLETE = "Complete"
}

/**
 * <p>The sub-type count exceeded the limit for the inventory type.</p>
 */
export interface SubTypeCountLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "SubTypeCountLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace SubTypeCountLimitExceededException {
  export const filterSensitiveLog = (
    obj: SubTypeCountLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubTypeCountLimitExceededException =>
    __isa(o, "SubTypeCountLimitExceededException");
}

/**
 * <p>Metadata that you assign to your AWS resources. Tags enable you to categorize your resources
 *    in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can
 *    apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and
 *    patch baselines.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The name of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>An array of search criteria that targets instances using a Key,Value combination that you
 *    specify.
 *    </p>
 *          <p>Supported formats include the following.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>(Maintenance window targets only)
 *        <code>Key=resource-groups:Name,Values=<i>resource-group-name</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>(Maintenance window targets only)
 *        <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i>
 *                   </code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>(Maintenance window targets only)
 *       <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code>
 *                </p>
 *                <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p>
 *             </li>
 *             <li>
 *                <p>(Maintenance window targets only)
 *        <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i>
 *                   </code>
 *                </p>
 *                <p>This example demonstrates how to target only Amazon EC2 instances and VPCs in your maintenance
 *      window.</p>
 *             </li>
 *             <li>
 *                <p>(State Manager association targets only)
 *        <code>Key=InstanceIds,Values=<i>*</i>
 *                   </code>
 *                </p>
 *                <p>This example demonstrates how to target all managed instances in the AWS Region where the
 *      association was created.</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to send commands that target instances using
 *     <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Using
 *     Targets and Rate Controls to Send Commands to a Fleet</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface Target {
  __type?: "Target";
  /**
   * <p>User-defined criteria for sending commands that target instances that meet the
   *    criteria.</p>
   */
  Key?: string;

  /**
   * <p>User-defined criteria that maps to <code>Key</code>. For example, if you specified
   *     <code>tag:ServerRole</code>, you could specify <code>value:WebServer</code> to run a command on
   *    instances that include Amazon EC2 tags of <code>ServerRole,WebServer</code>. </p>
   */
  Values?: string[];
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj
  });
  export const isa = (o: any): o is Target => __isa(o, "Target");
}

/**
 * <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow
 *    operation, but the target is still referenced in a task.</p>
 */
export interface TargetInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "TargetInUseException";
  $fault: "client";
  Message?: string;
}

export namespace TargetInUseException {
  export const filterSensitiveLog = (obj: TargetInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetInUseException =>
    __isa(o, "TargetInUseException");
}

/**
 * <p>The combination of AWS Regions and accounts targeted by the current Automation
 *    execution.</p>
 */
export interface TargetLocation {
  __type?: "TargetLocation";
  /**
   * <p>The AWS accounts targeted by the current Automation execution.</p>
   */
  Accounts?: string[];

  /**
   * <p>The Automation execution role used by the currently running Automation.</p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The AWS Regions targeted by the current Automation execution.</p>
   */
  Regions?: string[];

  /**
   * <p>The maximum number of AWS accounts and AWS regions allowed to run the Automation
   *    concurrently </p>
   */
  TargetLocationMaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the system stops queueing additional Automation
   *    executions for the currently running Automation. </p>
   */
  TargetLocationMaxErrors?: string;
}

export namespace TargetLocation {
  export const filterSensitiveLog = (obj: TargetLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetLocation =>
    __isa(o, "TargetLocation");
}

/**
 * <p>The specified target instance for the session is not fully configured for use with Session Manager.
 *    For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Getting
 *     Started with Session Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface TargetNotConnected extends __SmithyException, $MetadataBearer {
  name: "TargetNotConnected";
  $fault: "client";
  Message?: string;
}

export namespace TargetNotConnected {
  export const filterSensitiveLog = (obj: TargetNotConnected): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetNotConnected =>
    __isa(o, "TargetNotConnected");
}

export interface TerminateSessionRequest {
  __type?: "TerminateSessionRequest";
  /**
   * <p>The ID of the session to terminate.</p>
   */
  SessionId: string | undefined;
}

export namespace TerminateSessionRequest {
  export const filterSensitiveLog = (obj: TerminateSessionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateSessionRequest =>
    __isa(o, "TerminateSessionRequest");
}

export interface TerminateSessionResponse {
  __type?: "TerminateSessionResponse";
  /**
   * <p>The ID of the session that has been terminated.</p>
   */
  SessionId?: string;
}

export namespace TerminateSessionResponse {
  export const filterSensitiveLog = (obj: TerminateSessionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateSessionResponse =>
    __isa(o, "TerminateSessionResponse");
}

/**
 * <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try
 *    the command again.</p>
 */
export interface TooManyTagsError extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsError";
  $fault: "client";
}

export namespace TooManyTagsError {
  export const filterSensitiveLog = (obj: TooManyTagsError): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsError =>
    __isa(o, "TooManyTagsError");
}

/**
 * <p>There are concurrent updates for a resource that supports one update at a time.</p>
 */
export interface TooManyUpdates extends __SmithyException, $MetadataBearer {
  name: "TooManyUpdates";
  $fault: "client";
  Message?: string;
}

export namespace TooManyUpdates {
  export const filterSensitiveLog = (obj: TooManyUpdates): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyUpdates =>
    __isa(o, "TooManyUpdates");
}

/**
 * <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 */
export interface TotalSizeLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TotalSizeLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace TotalSizeLimitExceededException {
  export const filterSensitiveLog = (
    obj: TotalSizeLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TotalSizeLimitExceededException =>
    __isa(o, "TotalSizeLimitExceededException");
}

/**
 * <p>The calendar entry contained in the specified Systems Manager document is not supported.</p>
 */
export interface UnsupportedCalendarException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedCalendarException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedCalendarException {
  export const filterSensitiveLog = (
    obj: UnsupportedCalendarException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedCalendarException =>
    __isa(o, "UnsupportedCalendarException");
}

/**
 * <p>Microsoft application patching is only available on EC2 instances and Advanced Instances. To
 *    patch Microsoft applications on on-premises servers and VMs, you must enable Advanced Instances.
 *    For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Using the Advanced-Instances
 *     Tier</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface UnsupportedFeatureRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedFeatureRequiredException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedFeatureRequiredException {
  export const filterSensitiveLog = (
    obj: UnsupportedFeatureRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedFeatureRequiredException =>
    __isa(o, "UnsupportedFeatureRequiredException");
}

/**
 * <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code> is
 *    not allowed for this inventory type. You can only use the <code>Context</code> attribute with
 *    inventory types like <code>AWS:ComplianceItem</code>.</p>
 */
export interface UnsupportedInventoryItemContextException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedInventoryItemContextException";
  $fault: "client";
  Message?: string;
  TypeName?: string;
}

export namespace UnsupportedInventoryItemContextException {
  export const filterSensitiveLog = (
    obj: UnsupportedInventoryItemContextException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedInventoryItemContextException =>
    __isa(o, "UnsupportedInventoryItemContextException");
}

/**
 * <p>Inventory item type schema version has to match supported versions in the service. Check
 *    output of GetInventorySchema to see the available schema version for each type.</p>
 */
export interface UnsupportedInventorySchemaVersionException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedInventorySchemaVersionException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedInventorySchemaVersionException {
  export const filterSensitiveLog = (
    obj: UnsupportedInventorySchemaVersionException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UnsupportedInventorySchemaVersionException =>
    __isa(o, "UnsupportedInventorySchemaVersionException");
}

/**
 * <p>The operating systems you specified is not supported, or the operation is not supported for
 *    the operating system. Valid operating systems include: Windows, AmazonLinux,
 *    RedhatEnterpriseLinux, and Ubuntu.</p>
 */
export interface UnsupportedOperatingSystem
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperatingSystem";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperatingSystem {
  export const filterSensitiveLog = (obj: UnsupportedOperatingSystem): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedOperatingSystem =>
    __isa(o, "UnsupportedOperatingSystem");
}

/**
 * <p>The parameter type is not supported.</p>
 */
export interface UnsupportedParameterType
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedParameterType";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedParameterType {
  export const filterSensitiveLog = (obj: UnsupportedParameterType): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedParameterType =>
    __isa(o, "UnsupportedParameterType");
}

/**
 * <p>The document does not support the platform type of the given instance ID(s). For example,
 *    you sent an document for a Windows instance to a Linux instance.</p>
 */
export interface UnsupportedPlatformType
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedPlatformType";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedPlatformType {
  export const filterSensitiveLog = (obj: UnsupportedPlatformType): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedPlatformType =>
    __isa(o, "UnsupportedPlatformType");
}

export interface UpdateAssociationRequest {
  __type?: "UpdateAssociationRequest";
  /**
   * <p>The ID of the association you want to update. </p>
   */
  AssociationId: string | undefined;

  /**
   * <p>The name of the association that you want to update.</p>
   */
  AssociationName?: string;

  /**
   * <p>This parameter is provided for concurrency control purposes. You must specify the latest
   *    association version in the service. If you want to ensure that this request succeeds, either
   *    specify <code>$LATEST</code>, or omit this parameter.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation document and target resources by using rate controls.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The document version you want update for the association. </p>
   */
  DocumentVersion?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The name of the SSM document that contains the configuration information for the instance.
   *    You can specify Command or Automation documents.</p>
   *          <p>You can specify AWS-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other AWS accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For AWS-predefined documents and SSM documents you created in your account, you only need to
   *    specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   */
  Name?: string;

  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>The parameters you want to update for the association. If you create a parameter using
   *    Parameter Store, you can reference the parameter using {{ssm:parameter-name}}</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The cron expression used to schedule the association that you want to update.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The targets of the association.</p>
   */
  Targets?: Target[];
}

export namespace UpdateAssociationRequest {
  export const filterSensitiveLog = (obj: UpdateAssociationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssociationRequest =>
    __isa(o, "UpdateAssociationRequest");
}

export interface UpdateAssociationResult {
  __type?: "UpdateAssociationResult";
  /**
   * <p>The description of the association that was updated.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace UpdateAssociationResult {
  export const filterSensitiveLog = (obj: UpdateAssociationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssociationResult =>
    __isa(o, "UpdateAssociationResult");
}

export interface UpdateAssociationStatusRequest {
  __type?: "UpdateAssociationStatusRequest";
  /**
   * <p>The association status.</p>
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name: string | undefined;
}

export namespace UpdateAssociationStatusRequest {
  export const filterSensitiveLog = (
    obj: UpdateAssociationStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssociationStatusRequest =>
    __isa(o, "UpdateAssociationStatusRequest");
}

export interface UpdateAssociationStatusResult {
  __type?: "UpdateAssociationStatusResult";
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace UpdateAssociationStatusResult {
  export const filterSensitiveLog = (
    obj: UpdateAssociationStatusResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssociationStatusResult =>
    __isa(o, "UpdateAssociationStatusResult");
}

export interface UpdateDocumentDefaultVersionRequest {
  __type?: "UpdateDocumentDefaultVersionRequest";
  /**
   * <p>The version of a custom document that you want to set as the default version.</p>
   */
  DocumentVersion: string | undefined;

  /**
   * <p>The name of a custom document that you want to set as the default version.</p>
   */
  Name: string | undefined;
}

export namespace UpdateDocumentDefaultVersionRequest {
  export const filterSensitiveLog = (
    obj: UpdateDocumentDefaultVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDocumentDefaultVersionRequest =>
    __isa(o, "UpdateDocumentDefaultVersionRequest");
}

export interface UpdateDocumentDefaultVersionResult {
  __type?: "UpdateDocumentDefaultVersionResult";
  /**
   * <p>The description of a custom document that you want to set as the default version.</p>
   */
  Description?: DocumentDefaultVersionDescription;
}

export namespace UpdateDocumentDefaultVersionResult {
  export const filterSensitiveLog = (
    obj: UpdateDocumentDefaultVersionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDocumentDefaultVersionResult =>
    __isa(o, "UpdateDocumentDefaultVersionResult");
}

export interface UpdateDocumentRequest {
  __type?: "UpdateDocumentRequest";
  /**
   * <p>A list of key and value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: AttachmentsSource[];

  /**
   * <p>A valid JSON or YAML string.</p>
   */
  Content: string | undefined;

  /**
   * <p>Specify the document format for the new document version. Systems Manager supports JSON and YAML
   *    documents. JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>(Required) The version of the document that you want to update. </p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the document that you want to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specify a new target type for the document.</p>
   */
  TargetType?: string;

  /**
   * <p>An optional field specifying the version of the artifact you are updating with the document.
   *    For example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace UpdateDocumentRequest {
  export const filterSensitiveLog = (obj: UpdateDocumentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDocumentRequest =>
    __isa(o, "UpdateDocumentRequest");
}

export interface UpdateDocumentResult {
  __type?: "UpdateDocumentResult";
  /**
   * <p>A description of the document that was updated.</p>
   */
  DocumentDescription?: DocumentDescription;
}

export namespace UpdateDocumentResult {
  export const filterSensitiveLog = (obj: UpdateDocumentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDocumentResult =>
    __isa(o, "UpdateDocumentResult");
}

export interface UpdateMaintenanceWindowRequest {
  __type?: "UpdateMaintenanceWindowRequest";
  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>An optional description for the update request.</p>
   */
  Description?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>Whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. EndDate allows you to set a date and time in the future when the maintenance
   *    window will no longer run.</p>
   */
  EndDate?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>If True, then all fields that are required by the CreateMaintenanceWindow action are also
   *    required for this API request. Optional fields that are not specified are set to null. </p>
   */
  Replace?: boolean;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  StartDate?: string;

  /**
   * <p>The ID of the maintenance window to update.</p>
   */
  WindowId: string | undefined;
}

export namespace UpdateMaintenanceWindowRequest {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceWindowRequest
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateMaintenanceWindowRequest =>
    __isa(o, "UpdateMaintenanceWindowRequest");
}

export interface UpdateMaintenanceWindowResult {
  __type?: "UpdateMaintenanceWindowResult";
  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>An optional description of the update.</p>
   */
  Description?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>Whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window will not run after this specified time.</p>
   */
  EndDate?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window will not run before this specified time.</p>
   */
  StartDate?: string;

  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;
}

export namespace UpdateMaintenanceWindowResult {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceWindowResult
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateMaintenanceWindowResult =>
    __isa(o, "UpdateMaintenanceWindowResult");
}

export interface UpdateMaintenanceWindowTargetRequest {
  __type?: "UpdateMaintenanceWindowTargetRequest";
  /**
   * <p>An optional description for the update.</p>
   */
  Description?: string;

  /**
   * <p>A name for the update.</p>
   */
  Name?: string;

  /**
   * <p>User-provided value that will be included in any CloudWatch events raised while running
   *    tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>If True, then all fields that are required by the RegisterTargetWithMaintenanceWindow action
   *    are also required for this API request. Optional fields that are not specified are set to
   *    null.</p>
   */
  Replace?: boolean;

  /**
   * <p>The targets to add or replace.</p>
   */
  Targets?: Target[];

  /**
   * <p>The maintenance window ID with which to modify the target.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The target ID to modify.</p>
   */
  WindowTargetId: string | undefined;
}

export namespace UpdateMaintenanceWindowTargetRequest {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceWindowTargetRequest
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateMaintenanceWindowTargetRequest =>
    __isa(o, "UpdateMaintenanceWindowTargetRequest");
}

export interface UpdateMaintenanceWindowTargetResult {
  __type?: "UpdateMaintenanceWindowTargetResult";
  /**
   * <p>The updated description.</p>
   */
  Description?: string;

  /**
   * <p>The updated name.</p>
   */
  Name?: string;

  /**
   * <p>The updated owner.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The updated targets.</p>
   */
  Targets?: Target[];

  /**
   * <p>The maintenance window ID specified in the update request.</p>
   */
  WindowId?: string;

  /**
   * <p>The target ID specified in the update request.</p>
   */
  WindowTargetId?: string;
}

export namespace UpdateMaintenanceWindowTargetResult {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceWindowTargetResult
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateMaintenanceWindowTargetResult =>
    __isa(o, "UpdateMaintenanceWindowTargetResult");
}

export interface UpdateMaintenanceWindowTaskRequest {
  __type?: "UpdateMaintenanceWindowTaskRequest";
  /**
   * <p>The new task description to specify.</p>
   */
  Description?: string;

  /**
   * <p>The new logging location in Amazon S3 to specify.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The new <code>MaxConcurrency</code> value you want to specify. <code>MaxConcurrency</code>
   *    is the number of targets that are allowed to run this task in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The new <code>MaxErrors</code> value to specify. <code>MaxErrors</code> is the maximum
   *    number of errors that are allowed before the task stops being scheduled.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The new task name to specify.</p>
   */
  Name?: string;

  /**
   * <p>The new task priority to specify. The lower the number, the higher the priority. Tasks that
   *    have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>If True, then all fields that are required by the RegisterTaskWithMaintenanceWndow action
   *    are also required for this API request. Optional fields that are not specified are set to
   *    null.</p>
   */
  Replace?: boolean;

  /**
   * <p>The ARN of the IAM service role for Systems Manager to assume when running a
   *   maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's
   *   service-linked role.  If no service-linked role for Systems Manager exists in your account, it is created when you run
   *   <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>For more information, see the following topics in the in the <i>AWS Systems Manager User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html#slr-permissions">Service-Linked Role
   *     Permissions for Systems Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html#maintenance-window-tasks-service-role">Should I Use a Service-Linked Role or a Custom Service Role to Run Maintenance Window Tasks?
   *    </a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The targets (either instances or tags) to modify. Instances are specified using
   *    Key=instanceids,Values=instanceID_1,instanceID_2. Tags are specified using
   *    Key=tag_name,Values=tag_value. </p>
   */
  Targets?: Target[];

  /**
   * <p>The task ARN to modify.</p>
   */
  TaskArn?: string;

  /**
   * <p>The parameters that the task should use during execution. Populate only the fields that
   *    match the task type. All other fields should be empty.</p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The parameters to modify.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   *          <p>The map has the following format:</p>
   *          <p>Key: string, between 1 and 255 characters</p>
   *          <p>Value: an array of strings, each string is between 1 and 255 characters</p>
   */
  TaskParameters?: {
    [key: string]: MaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The maintenance window ID that contains the task to modify.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The task ID to modify.</p>
   */
  WindowTaskId: string | undefined;
}

export namespace UpdateMaintenanceWindowTaskRequest {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceWindowTaskRequest
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      )
    }),
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateMaintenanceWindowTaskRequest =>
    __isa(o, "UpdateMaintenanceWindowTaskRequest");
}

export interface UpdateMaintenanceWindowTaskResult {
  __type?: "UpdateMaintenanceWindowTaskResult";
  /**
   * <p>The updated task description.</p>
   */
  Description?: string;

  /**
   * <p>The updated logging information in Amazon S3.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The updated MaxConcurrency value.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The updated MaxErrors value.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The updated task name.</p>
   */
  Name?: string;

  /**
   * <p>The updated priority value.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for
   *    maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The updated target values.</p>
   */
  Targets?: Target[];

  /**
   * <p>The updated task ARN value.</p>
   */
  TaskArn?: string;

  /**
   * <p>The updated parameter values.</p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The updated parameter values.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  TaskParameters?: {
    [key: string]: MaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The ID of the maintenance window that was updated.</p>
   */
  WindowId?: string;

  /**
   * <p>The task ID of the maintenance window that was updated.</p>
   */
  WindowTaskId?: string;
}

export namespace UpdateMaintenanceWindowTaskResult {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceWindowTaskResult
  ): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      )
    }),
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateMaintenanceWindowTaskResult =>
    __isa(o, "UpdateMaintenanceWindowTaskResult");
}

export interface UpdateManagedInstanceRoleRequest {
  __type?: "UpdateManagedInstanceRoleRequest";
  /**
   * <p>The IAM role you want to assign or change.</p>
   */
  IamRole: string | undefined;

  /**
   * <p>The ID of the managed instance where you want to update the role.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateManagedInstanceRoleRequest {
  export const filterSensitiveLog = (
    obj: UpdateManagedInstanceRoleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateManagedInstanceRoleRequest =>
    __isa(o, "UpdateManagedInstanceRoleRequest");
}

export interface UpdateManagedInstanceRoleResult {
  __type?: "UpdateManagedInstanceRoleResult";
}

export namespace UpdateManagedInstanceRoleResult {
  export const filterSensitiveLog = (
    obj: UpdateManagedInstanceRoleResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateManagedInstanceRoleResult =>
    __isa(o, "UpdateManagedInstanceRoleResult");
}

export interface UpdateOpsItemRequest {
  __type?: "UpdateOpsItemRequest";
  /**
   * <p>Specify a new category for an OpsItem.</p>
   */
  Category?: string;

  /**
   * <p>Update the information about the OpsItem. Provide enough information so that users reading
   *    this OpsItem for the first time understand the issue. </p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Notifications?: OpsItemNotification[];

  /**
   * <p>Add new keys or edit existing key-value pairs of the OperationalData map in the OpsItem
   *    object.</p>
   *          <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following: amazon, aws,
   *     amzn, ssm, /amazon, /aws, /amzn, /ssm.</p>
   *          </important>
   *
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API action) can view and search on the
   *    specified data. Operational data that is not searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API action).</p>
   *
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view AWS CLI example commands that use these keys, see
   *     <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems Manually</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  OperationalData?: { [key: string]: OpsItemDataValue };

  /**
   * <p>Keys that you want to remove from the OperationalData map.</p>
   */
  OperationalDataToDelete?: string[];

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId: string | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: RelatedOpsItem[];

  /**
   * <p>Specify a new severity for an OpsItem.</p>
   */
  Severity?: string;

  /**
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html">Editing OpsItem
   *     Details</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Status?: OpsItemStatus | string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;
}

export namespace UpdateOpsItemRequest {
  export const filterSensitiveLog = (obj: UpdateOpsItemRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateOpsItemRequest =>
    __isa(o, "UpdateOpsItemRequest");
}

export interface UpdateOpsItemResponse {
  __type?: "UpdateOpsItemResponse";
}

export namespace UpdateOpsItemResponse {
  export const filterSensitiveLog = (obj: UpdateOpsItemResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateOpsItemResponse =>
    __isa(o, "UpdateOpsItemResponse");
}

export interface UpdatePatchBaselineRequest {
  __type?: "UpdatePatchBaselineRequest";
  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package Name Formats
   *                         for Approved and Rejected Patch Lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>Assigns a new compliance severity level to an existing patch baseline.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the instances. The default value is 'false'. Applies to Linux instances only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>The ID of the patch baseline to update.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>A set of global filters used to include patches in the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package Name Formats
   *                         for Approved and Rejected Patch Lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action for Patch Manager to take on patches included in the RejectedPackages
   *    list.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ALLOW_AS_DEPENDENCY</b>: A package in the Rejected patches
   *      list is installed only if it is a dependency of another package. It is considered compliant
   *      with the patch baseline, and its status is reported as <i>InstalledOther</i>.
   *      This is the default action if no option is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>BLOCK</b>: Packages in the RejectedPatches list, and packages
   *      that include them as dependencies, are not installed under any circumstances. If a package was
   *      installed before it was added to the Rejected patches list, it is considered non-compliant with
   *      the patch baseline, and its status is reported as
   *      <i>InstalledRejected</i>.</p>
   *             </li>
   *          </ul>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>If True, then all fields that are required by the CreatePatchBaseline action are also
   *    required for this API request. Optional fields that are not specified are set to null.</p>
   */
  Replace?: boolean;

  /**
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
   */
  Sources?: PatchSource[];
}

export namespace UpdatePatchBaselineRequest {
  export const filterSensitiveLog = (obj: UpdatePatchBaselineRequest): any => ({
    ...obj,
    ...(obj.Sources && {
      Sources: obj.Sources.map(item => PatchSource.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is UpdatePatchBaselineRequest =>
    __isa(o, "UpdatePatchBaselineRequest");
}

export interface UpdatePatchBaselineResult {
  __type?: "UpdatePatchBaselineResult";
  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>The compliance severity level assigned to the patch baseline after the update
   *    completed.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the instances. The default value is 'false'. Applies to Linux instances only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The date when the patch baseline was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A description of the Patch Baseline.</p>
   */
  Description?: string;

  /**
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>The date when the patch baseline was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>The operating system rule used by the updated patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action specified to take on patches included in the RejectedPatches list. A patch can be
   *    allowed only if it is a dependency of another package, or blocked entirely along with packages
   *    that include it as a dependency.</p>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
   */
  Sources?: PatchSource[];
}

export namespace UpdatePatchBaselineResult {
  export const filterSensitiveLog = (obj: UpdatePatchBaselineResult): any => ({
    ...obj,
    ...(obj.Sources && {
      Sources: obj.Sources.map(item => PatchSource.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is UpdatePatchBaselineResult =>
    __isa(o, "UpdatePatchBaselineResult");
}

export interface UpdateResourceDataSyncRequest {
  __type?: "UpdateResourceDataSyncRequest";
  /**
   * <p>The name of the resource data sync you want to update.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>Specify information about the data sources to synchronize.</p>
   */
  SyncSource: ResourceDataSyncSource | undefined;

  /**
   * <p>The type of resource data sync. If <code>SyncType</code> is <code>SyncToDestination</code>,
   *    then the resource data sync synchronizes data to an Amazon S3 bucket. If the
   *     <code>SyncType</code> is <code>SyncFromSource</code> then the resource data sync synchronizes
   *    data from AWS Organizations or from multiple AWS Regions.</p>
   */
  SyncType: string | undefined;
}

export namespace UpdateResourceDataSyncRequest {
  export const filterSensitiveLog = (
    obj: UpdateResourceDataSyncRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateResourceDataSyncRequest =>
    __isa(o, "UpdateResourceDataSyncRequest");
}

export interface UpdateResourceDataSyncResult {
  __type?: "UpdateResourceDataSyncResult";
}

export namespace UpdateResourceDataSyncResult {
  export const filterSensitiveLog = (
    obj: UpdateResourceDataSyncResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateResourceDataSyncResult =>
    __isa(o, "UpdateResourceDataSyncResult");
}

/**
 * <p>The request body of the UpdateServiceSetting API action.</p>
 */
export interface UpdateServiceSettingRequest {
  __type?: "UpdateServiceSettingRequest";
  /**
   * <p>The ID of the service setting to update.</p>
   */
  SettingId: string | undefined;

  /**
   * <p>The new value to specify for the service setting.</p>
   */
  SettingValue: string | undefined;
}

export namespace UpdateServiceSettingRequest {
  export const filterSensitiveLog = (
    obj: UpdateServiceSettingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateServiceSettingRequest =>
    __isa(o, "UpdateServiceSettingRequest");
}

/**
 * <p>The result body of the UpdateServiceSetting API action.</p>
 */
export interface UpdateServiceSettingResult {
  __type?: "UpdateServiceSettingResult";
}

export namespace UpdateServiceSettingResult {
  export const filterSensitiveLog = (obj: UpdateServiceSettingResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateServiceSettingResult =>
    __isa(o, "UpdateServiceSettingResult");
}
