// smithy-typescript generated code
import {
  AccessRequestStatus,
  AccessType,
  AssociationComplianceSeverity,
  AssociationExecutionFilterKey,
  AssociationExecutionTargetsFilterKey,
  AssociationFilterOperatorType,
  AssociationStatusName,
  AssociationSyncCompliance,
  AttachmentHashType,
  AttachmentsSourceKey,
  AutomationExecutionFilterKey,
  AutomationExecutionStatus,
  AutomationSubtype,
  AutomationType,
  CalendarState,
  CommandInvocationStatus,
  ConnectionStatus,
  DescribeActivationsFilterKeys,
  DocumentFormat,
  DocumentHashType,
  DocumentParameterType,
  DocumentPermissionType,
  DocumentStatus,
  DocumentType,
  ExecutionMode,
  ExecutionPreviewStatus,
  ExternalAlarmState,
  Fault,
  ImpactType,
  InstanceInformationFilterKey,
  InstancePatchStateOperatorType,
  InstancePropertyFilterKey,
  InstancePropertyFilterOperator,
  InventoryAttributeDataType,
  InventoryDeletionStatus,
  InventoryQueryOperatorType,
  InventorySchemaDeleteOption,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskType,
  NotificationEvent,
  NotificationType,
  OperatingSystem,
  OpsFilterOperatorType,
  OpsItemDataType,
  OpsItemFilterKey,
  OpsItemFilterOperator,
  OpsItemStatus,
  ParametersFilterKey,
  ParameterTier,
  ParameterType,
  PatchAction,
  PatchComplianceDataState,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PatchDeploymentStatus,
  PatchFilterKey,
  PatchOperationType,
  PatchProperty,
  PatchSet,
  PingStatus,
  PlatformType,
  RebootOption,
  ResourceDataSyncS3Format,
  ResourceType,
  ResourceTypeForTagging,
  ReviewStatus,
  SessionFilterKey,
  SessionState,
  SessionStatus,
  SourceType,
  StepExecutionFilterKey,
} from "./enums";

/**
 * <p>Information includes the Amazon Web Services account ID where the current document is shared and the
 *    version shared with that account.</p>
 * @public
 */
export interface AccountSharingInfo {
  /**
   * <p>The Amazon Web Services account ID where the current document is shared.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The version of the current document shared with the account.</p>
   * @public
   */
  SharedDocumentVersion?: string | undefined;
}

/**
 * <p>Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your
 *    resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you
 *    can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows,
 *    parameters, patch baselines, OpsItems, and OpsMetadata.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The name of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services
 *    so that you can configure those servers or VMs using Run Command. A server or VM that has been
 *    registered with Amazon Web Services Systems Manager is called a managed node.</p>
 * @public
 */
export interface Activation {
  /**
   * <p>The ID created by Systems Manager when you submitted the activation.</p>
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * <p>A user defined description of the activation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A name for the managed node when it is created.</p>
   * @public
   */
  DefaultInstanceName?: string | undefined;

  /**
   * <p>The Identity and Access Management (IAM) role to assign to the managed node.</p>
   * @public
   */
  IamRole?: string | undefined;

  /**
   * <p>The maximum number of managed nodes that can be registered using this activation.</p>
   * @public
   */
  RegistrationLimit?: number | undefined;

  /**
   * <p>The number of managed nodes already registered with this activation.</p>
   * @public
   */
  RegistrationsCount?: number | undefined;

  /**
   * <p>The date when this activation can no longer be used to register managed nodes.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>Whether or not the activation is expired.</p>
   * @public
   */
  Expired?: boolean | undefined;

  /**
   * <p>The date the activation was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>Tags assigned to the activation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * <p>Specifies the type of resource you are tagging.</p>
   *          <note>
   *             <p>The <code>ManagedInstance</code> type for this API operation is for on-premises managed
   *     nodes. You must specify the name of the managed node in the following format:
   *       <code>mi-<i>ID_number</i>
   *                </code>. For example,
   *     <code>mi-1a2b3c4d5e6f</code>.</p>
   *          </note>
   * @public
   */
  ResourceType: ResourceTypeForTagging | undefined;

  /**
   * <p>The resource ID you want to tag.</p>
   *          <p>Use the ID of the resource. Here are some examples:</p>
   *          <p>
   *             <code>MaintenanceWindow</code>: <code>mw-012345abcde</code>
   *          </p>
   *          <p>
   *             <code>PatchBaseline</code>: <code>pb-012345abcde</code>
   *          </p>
   *          <p>
   *             <code>Automation</code>: <code>example-c160-4567-8519-012345abcde</code>
   *          </p>
   *          <p>
   *             <code>OpsMetadata</code> object: <code>ResourceID</code> for tagging is created from the
   *    Amazon Resource Name (ARN) for the object. Specifically, <code>ResourceID</code> is created from
   *    the strings that come after the word <code>opsmetadata</code> in the ARN. For example, an
   *    OpsMetadata object with an ARN of
   *     <code>arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager</code> has a
   *     <code>ResourceID</code> of either <code>aws/ssm/MyGroup/appmanager</code> or
   *     <code>/aws/ssm/MyGroup/appmanager</code>.</p>
   *          <p>For the <code>Document</code> and <code>Parameter</code> values, use the name of the
   *    resource. If you're tagging a shared document, you must use the full ARN of the document.</p>
   *          <p>
   *             <code>ManagedInstance</code>: <code>mi-012345abcde</code>
   *          </p>
   *          <note>
   *             <p>The <code>ManagedInstance</code> type for this API operation is only for on-premises
   *     managed nodes. You must specify the name of the managed node in the following format:
   *       <code>mi-<i>ID_number</i>
   *                </code>. For example,
   *     <code>mi-1a2b3c4d5e6f</code>.</p>
   *          </note>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>One or more tags. The value parameter is required.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResult {}

/**
 * <p>A CloudWatch alarm you apply to an automation or command.</p>
 * @public
 */
export interface Alarm {
  /**
   * <p>The name of your CloudWatch alarm.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The details for the CloudWatch alarm you want to apply to an automation or
 *    command.</p>
 * @public
 */
export interface AlarmConfiguration {
  /**
   * <p>When this value is <i>true</i>, your automation or command continues to run in
   *    cases where we can’t retrieve alarm status information from CloudWatch. In cases
   *    where we successfully retrieve an alarm status of OK or INSUFFICIENT_DATA, the automation or
   *    command continues to run, regardless of this value. Default is <i>false</i>.</p>
   * @public
   */
  IgnorePollAlarmFailure?: boolean | undefined;

  /**
   * <p>The name of the CloudWatch alarm specified in the configuration.</p>
   * @public
   */
  Alarms: Alarm[] | undefined;
}

/**
 * <p>The details about the state of your CloudWatch alarm.</p>
 * @public
 */
export interface AlarmStateInformation {
  /**
   * <p>The name of your CloudWatch alarm.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The state of your CloudWatch alarm.</p>
   * @public
   */
  State: ExternalAlarmState | undefined;
}

/**
 * @public
 */
export interface AssociateOpsItemRelatedItemRequest {
  /**
   * <p>The ID of the OpsItem to which you want to associate a resource as a related item.</p>
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * <p>The type of association that you want to create between an OpsItem and a resource. OpsCenter
   *    supports <code>IsParentOf</code> and <code>RelatesTo</code> association types.</p>
   * @public
   */
  AssociationType: string | undefined;

  /**
   * <p>The type of resource that you want to associate with an OpsItem. OpsCenter supports the
   *    following types:</p>
   *          <p>
   *             <code>AWS::SSMIncidents::IncidentRecord</code>: an Incident Manager incident. </p>
   *          <p>
   *             <code>AWS::SSM::Document</code>: a Systems Manager (SSM) document.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource that you want to associate with the
   *    OpsItem.</p>
   * @public
   */
  ResourceUri: string | undefined;
}

/**
 * @public
 */
export interface AssociateOpsItemRelatedItemResponse {
  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CancelCommandRequest {
  /**
   * <p>The ID of the command you want to cancel.</p>
   * @public
   */
  CommandId: string | undefined;

  /**
   * <p>(Optional) A list of managed node IDs on which you want to cancel the command. If not
   *    provided, the command is canceled on every node on which it was requested.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;
}

/**
 * <p>Whether or not the command was successfully canceled. There is no guarantee that a request
 *    can be canceled.</p>
 * @public
 */
export interface CancelCommandResult {}

/**
 * @public
 */
export interface CancelMaintenanceWindowExecutionRequest {
  /**
   * <p>The ID of the maintenance window execution to stop.</p>
   * @public
   */
  WindowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface CancelMaintenanceWindowExecutionResult {
  /**
   * <p>The ID of the maintenance window execution that has been stopped.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;
}

/**
 * <p>Reserved for internal use.</p>
 * @public
 */
export interface RegistrationMetadataItem {
  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateActivationRequest {
  /**
   * <p>A user-defined description of the resource that you want to register with Systems Manager. </p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the registered, managed node as it will appear in the Amazon Web Services Systems Manager console or when
   *    you use the Amazon Web Services command line tools to list Systems Manager resources.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   * @public
   */
  DefaultInstanceName?: string | undefined;

  /**
   * <p>The name of the Identity and Access Management (IAM) role that you want to assign to
   *    the managed node. This IAM role must provide AssumeRole permissions for the
   *    Amazon Web Services Systems Manager service principal <code>ssm.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-service-role.html">Create the IAM service role required for Systems Manager in a hybrid and multicloud
   *     environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <note>
   *             <p>You can't specify an IAM service-linked role for this parameter. You must
   *     create a unique role.</p>
   *          </note>
   * @public
   */
  IamRole: string | undefined;

  /**
   * <p>Specify the maximum number of managed nodes you want to register. The default value is
   *     <code>1</code>.</p>
   * @public
   */
  RegistrationLimit?: number | undefined;

  /**
   * <p>The date by which this activation request should expire, in timestamp format, such as
   *    "2024-07-07T00:00:00". You can specify a date up to 30 days in advance. If you don't provide an
   *    expiration date, the activation code expires in 24 hours.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    activation to identify which servers or virtual machines (VMs) in your on-premises environment
   *    you intend to activate. In this case, you could specify the following key-value pairs:</p>
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
   *             <p>When you install SSM Agent on your on-premises servers and VMs, you specify an activation ID
   *     and code. When you specify the activation ID and code, tags assigned to the activation are
   *     automatically applied to the on-premises servers or VMs.</p>
   *          </important>
   *          <p>You can't add tags to or delete tags from an existing activation. You can tag your
   *    on-premises servers, edge devices, and VMs after they connect to Systems Manager for the first time and are
   *    assigned a managed node ID. This means they are listed in the Amazon Web Services Systems Manager console with an ID that
   *    is prefixed with "mi-". For information about how to add tags to your managed nodes, see <a>AddTagsToResource</a>. For information about how to remove tags from your managed nodes,
   *    see <a>RemoveTagsFromResource</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  RegistrationMetadata?: RegistrationMetadataItem[] | undefined;
}

/**
 * @public
 */
export interface CreateActivationResult {
  /**
   * <p>The ID number generated by the system when it processed the activation. The activation ID
   *    functions like a user name.</p>
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * <p>The code the system generates when it processes the activation. The activation code
   *    functions like a password to validate the activation ID. </p>
   * @public
   */
  ActivationCode?: string | undefined;
}

/**
 * <p>An S3 bucket where you want to store the results of this request.</p>
 * @public
 */
export interface S3OutputLocation {
  /**
   * <p>The Amazon Web Services Region of the S3 bucket.</p>
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * <p>The S3 bucket subfolder.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;
}

/**
 * <p>An S3 bucket where you want to store the results of this request.</p>
 *          <p>For the minimal permissions required to enable Amazon S3 output for an association,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-associations-creating.html#state-manager-associations-console">Create an association (console)</a> in the <i>Systems Manager User Guide</i>. </p>
 * @public
 */
export interface InstanceAssociationOutputLocation {
  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   * @public
   */
  S3Location?: S3OutputLocation | undefined;
}

/**
 * <p>An array of search criteria that targets managed nodes using a key-value pair that you
 *    specify.</p>
 *          <note>
 *             <p> One or more targets must be specified for maintenance window Run Command-type tasks.
 *     Depending on the task, targets are optional for other maintenance window task types (Automation,
 *      Lambda, and Step Functions). For more information about running tasks
 *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
 *      maintenance window tasks without targets</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          </note>
 *          <p>Supported formats include the following.</p>
 *          <p>
 *             <b>For all Systems Manager tools:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=tag-key,Values=tag-value-1,tag-value-2</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>For Automation and Change Manager:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=tag:tag-key,Values=tag-value</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=ResourceGroup,Values=resource-group-name</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=ParameterValues,Values=value-1,value-2,value-3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>To target all instances in the Amazon Web Services Region:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Key=AWS::EC2::Instance,Values=*</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Key=InstanceIds,Values=*</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>For Run Command and Maintenance Windows:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=InstanceIds,Values=instance-id-1,instance-id-2,instance-id-3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:tag-key,Values=tag-value-1,tag-value-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=resource-groups:Name,Values=resource-group-name</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Additionally, Maintenance Windows support targeting resource types:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Key=resource-groups:ResourceTypeFilters,Values=resource-type-1,resource-type-2</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>For State Manager:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=InstanceIds,Values=instance-id-1,instance-id-2,instance-id-3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:tag-key,Values=tag-value-1,tag-value-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>To target all instances in the Amazon Web Services Region:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Key=InstanceIds,Values=*</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information about how to send commands that target managed nodes using
 *     <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple managed nodes</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @public
 */
export interface Target {
  /**
   * <p>User-defined criteria for sending commands that target managed nodes that meet the
   *    criteria.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>User-defined criteria that maps to <code>Key</code>. For example, if you specified
   *     <code>tag:ServerRole</code>, you could specify <code>value:WebServer</code> to run a command on
   *    instances that include EC2 tags of <code>ServerRole,WebServer</code>. </p>
   *          <p>Depending on the type of target, the maximum number of values for a key might be lower than
   *    the global maximum of 50.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation
 *    execution.</p>
 * @public
 */
export interface TargetLocation {
  /**
   * <p>The Amazon Web Services accounts targeted by the current Automation execution.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Regions targeted by the current Automation execution.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>The maximum number of Amazon Web Services Regions and Amazon Web Services accounts allowed to run the Automation
   *    concurrently. <code>TargetLocationMaxConcurrency</code> has a default value of 1.</p>
   * @public
   */
  TargetLocationMaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors allowed before the system stops queueing additional Automation
   *    executions for the currently running Automation. <code>TargetLocationMaxErrors</code> has a
   *    default value of 0.</p>
   * @public
   */
  TargetLocationMaxErrors?: string | undefined;

  /**
   * <p>The Automation execution role used by the currently running Automation. If not specified,
   *    the default value is <code>AWS-SystemsManager-AutomationExecutionRole</code>.</p>
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   * @public
   */
  TargetLocationAlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>Indicates whether to include child organizational units (OUs) that are children of the
   *    targeted OUs. The default is <code>false</code>.</p>
   *          <note>
   *             <p>This parameter is not supported by State Manager.</p>
   *          </note>
   * @public
   */
  IncludeChildOrganizationUnits?: boolean | undefined;

  /**
   * <p>Amazon Web Services accounts or organizational units to exclude as expanded targets.</p>
   * @public
   */
  ExcludeAccounts?: string[] | undefined;

  /**
   * <p>A list of key-value mappings to target resources. If you specify values for this data type,
   *    you must also specify a value for <code>TargetParameterName</code>.</p>
   *          <p>This <code>Targets</code> parameter takes precedence over the
   *     <code>StartAutomationExecution:Targets</code> parameter if both are supplied.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel. This
   *     <code>TargetsMaxConcurrency</code> takes precedence over the
   *     <code>StartAutomationExecution:MaxConcurrency</code> parameter if both are supplied.</p>
   * @public
   */
  TargetsMaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors that are allowed before the system stops running the automation
   *    on additional targets. This <code>TargetsMaxErrors</code> parameter takes precedence over the
   *     <code>StartAutomationExecution:MaxErrors</code> parameter if both are supplied.</p>
   * @public
   */
  TargetsMaxErrors?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssociationRequest {
  /**
   * <p>The name of the SSM Command document or Automation runbook that contains the configuration
   *    information for the managed node.</p>
   *          <p>You can specify Amazon Web Services-predefined documents, documents you created, or a document that is
   *    shared with you from another Amazon Web Services account.</p>
   *          <p>For Systems Manager documents (SSM documents) that are shared with you from other Amazon Web Services accounts, you
   *    must specify the complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:<i>partition</i>:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need
   *    to specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The document version you want to associate with the targets. Can be a specific version or
   *    the default version.</p>
   *          <important>
   *             <p>State Manager doesn't support running associations that use a new version of a document if
   *     that document is shared from another account. State Manager always runs the <code>default</code>
   *     version of a document if shared from another account, even though the Systems Manager console shows that a
   *     new version was processed. If you want to run an association using a new version of a document
   *     shared form another account, you must set the document version to <code>default</code>.</p>
   *          </important>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The managed node ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify a managed node ID for an
   *     association, use the <code>Targets</code> parameter. Requests that
   *     include the parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use
   *     schema version 2.0 or later will fail. In addition, if you use the
   *     parameter <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
   *          </note>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The parameters for the runtime configuration of the document.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The targets for the association. You can target managed nodes by using tags, Amazon Web Services resource
   *    groups, all managed nodes in an Amazon Web Services account, or individual managed node IDs. You can target all
   *    managed nodes in an Amazon Web Services account by specifying the <code>InstanceIds</code> key with a value of
   *     <code>*</code>. For more information about choosing targets for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state-manager-targets-and-rate-controls.html">Understanding targets and rate controls in State Manager associations</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A cron expression when the association will be applied to the targets.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output
   *    details of the request.</p>
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * <p>Specify a descriptive name for the association.</p>
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * <p>Choose the parameter that will define how your automation will branch out. This target is
   *    required for associations that use an Automation runbook and target resources by using rate
   *    controls. Automation is a tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    managed nodes and set <code>MaxError</code> to 10%, then the system stops sending the request
   *    when the sixth error is received.</p>
   *          <p>Executions that are already running an association when <code>MaxErrors</code> is reached
   *    are allowed to complete, but some of these executions may fail as well. If you need to ensure
   *    that there won't be more than max-errors failed executions, set <code>MaxConcurrency</code> to 1
   *    so that executions proceed one at a time.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The severity level to assign to the association.</p>
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>.</p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * <p>By default, when you create a new association, the system runs it immediately after it is
   *    created and then according to the schedule you specified and when target changes are detected.
   *    Specify <code>true</code> for <code>ApplyOnlyAtCronInterval</code>if you want the association to
   *    run only according to the schedule you specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#state-manager-about-scheduling">Understanding when associations are applied to resources</a> and <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#runbook-target-updates">>About
   *     target updates with Automation runbooks</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <p>This parameter isn't supported for rate expressions.</p>
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * <p>The names of Amazon Resource Names (ARNs) of the Change Calendar type documents you want to
   *    gate your associations under. The associations only run when that change calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * <p>A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the
   *    association. Use this action to create an association in multiple Regions and multiple
   *    accounts.</p>
   *          <note>
   *             <p>The <code>IncludeChildOrganizationUnits</code> parameter is not supported by State
   *     Manager.</p>
   *          </note>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>Number of days to wait after the scheduled day to run an association. For example, if you
   *    specified a cron schedule of <code>cron(0 0 ? * THU#2 *)</code>, you could specify an offset of 3
   *    to run the association each Sunday after the second Thursday of the month. For more information
   *    about cron schedules for associations, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html">Reference: Cron
   *     and rate expressions for Systems Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   *          <note>
   *             <p>To use offsets, you must specify the <code>ApplyOnlyAtCronInterval</code> parameter. This
   *     option tells the system not to run an association immediately after you create it. </p>
   *          </note>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The number of hours the association can run before it is canceled. Duration applies to
   *    associations that are currently running, and any pending and in progress commands on all targets.
   *    If a target was taken offline for the association to run, it is made available again immediately,
   *    without a reboot. </p>
   *          <p>The <code>Duration</code> parameter applies only when both these conditions are true:</p>
   *          <ul>
   *             <li>
   *                <p>The association for which you specify a duration is cancelable according to the parameters
   *      of the SSM command document or Automation runbook associated with this execution. </p>
   *             </li>
   *             <li>
   *                <p>The command specifies the <code>
   *                      <a href="https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html#systemsmanager-CreateAssociation-request-ApplyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a>
   *                   </code> parameter, which means that the association doesn't
   *      run immediately after it is created, but only according to the specified schedule.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>Adds or overwrites one or more tags for a State Manager association.
   *     <i>Tags</i> are metadata that you can assign to your Amazon Web Services resources. Tags enable
   *    you to categorize your resources in different ways, for example, by purpose, owner, or
   *    environment. Each tag consists of a key and an optional value, both of which you define. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * <p>Information about the association.</p>
 * @public
 */
export interface AssociationOverview {
  /**
   * <p>The status of the association. Status can be: Pending, Success, or Failed.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status of the association.</p>
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * <p>Returns the number of targets for the association status. For example, if you created an
   *    association with two managed nodes, and one of them was successful, this would return the count
   *    of managed nodes by status.</p>
   * @public
   */
  AssociationStatusAggregatedCount?: Record<string, number> | undefined;
}

/**
 * <p>Describes an association status.</p>
 * @public
 */
export interface AssociationStatus {
  /**
   * <p>The date when the status changed.</p>
   * @public
   */
  Date: Date | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Name: AssociationStatusName | undefined;

  /**
   * <p>The reason for the status.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>A user-defined string.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;
}

/**
 * <p>Describes the parameters for a document.</p>
 * @public
 */
export interface AssociationDescription {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The association version.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>The date when the association was made.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>The date when the association was last updated.</p>
   * @public
   */
  LastUpdateAssociationDate?: Date | undefined;

  /**
   * <p>The association status.</p>
   * @public
   */
  Status?: AssociationStatus | undefined;

  /**
   * <p>Information about the association.</p>
   * @public
   */
  Overview?: AssociationOverview | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Choose the parameter that will define how your automation will branch out. This target is
   *    required for associations that use an Automation runbook and target resources by using rate
   *    controls. Automation is a tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * <p>A description of the parameters for a document. </p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The managed nodes targeted by the request. </p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>An S3 bucket where you want to store the output details of the request.</p>
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * <p>The date on which the association was last run.</p>
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * <p>The last date on which the association was successfully run.</p>
   * @public
   */
  LastSuccessfulExecutionDate?: Date | undefined;

  /**
   * <p>The association name.</p>
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    managed nodes and set <code>MaxError</code> to 10%, then the system stops sending the request
   *    when the sixth error is received.</p>
   *          <p>Executions that are already running an association when <code>MaxErrors</code> is reached
   *    are allowed to complete, but some of these executions may fail as well. If you need to ensure
   *    that there won't be more than max-errors failed executions, set <code>MaxConcurrency</code> to 1
   *    so that executions proceed one at a time.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The severity level that is assigned to the association.</p>
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>.</p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * <p>By default, when you create a new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter isn't supported for rate
   *    expressions.</p>
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your
   *    associations are gated under. The associations only run when that change calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the
   *    association.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The number of hours that an association can run on specified targets. After the resulting
   *    cutoff time passes, associations that are currently running are cancelled, and no pending
   *    executions are started on remaining targets.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarm that was invoked during the association.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface CreateAssociationResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * <p>Describes the association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.</p>
 * @public
 */
export interface CreateAssociationBatchRequestEntry {
  /**
   * <p>The name of the SSM document that contains the configuration information for the managed
   *    node. You can specify Command or Automation runbooks.</p>
   *          <p>You can specify Amazon Web Services-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other Amazon Web Services accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need
   *    to specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The managed node ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify a managed node ID for an
   *     association, use the <code>Targets</code> parameter. Requests that
   *     include the parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use
   *     schema version 2.0 or later will fail. In addition, if you use the
   *     parameter <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
   *          </note>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>A description of the parameters for a document. </p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation runbook and target resources by using rate controls. Automation is a tool in
   *    Amazon Web Services Systems Manager.</p>
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The managed nodes targeted by the request.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * <p>Specify a descriptive name for the association.</p>
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    managed nodes and set <code>MaxError</code> to 10%, then the system stops sending the request
   *    when the sixth error is received.</p>
   *          <p>Executions that are already running an association when <code>MaxErrors</code> is reached
   *    are allowed to complete, but some of these executions may fail as well. If you need to ensure
   *    that there won't be more than max-errors failed executions, set <code>MaxConcurrency</code> to 1
   *    so that executions proceed one at a time.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The severity level to assign to the association.</p>
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>. </p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * <p>By default, when you create a new association, the system runs it immediately after it is
   *    created and then according to the schedule you specified and when target changes are detected.
   *    Specify <code>true</code> for <code>ApplyOnlyAtCronInterval</code> if you want the association to
   *    run only according to the schedule you specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#state-manager-about-scheduling">Understanding when associations are applied to resources</a> and <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#runbook-target-updates">>About
   *     target updates with Automation runbooks</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <p>This parameter isn't supported for rate expressions.</p>
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your
   *    associations are gated under. The associations only run when that Change Calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * <p>Use this action to create an association in multiple Regions and multiple accounts.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The number of hours the association can run before it is canceled. Duration applies to
   *    associations that are currently running, and any pending and in progress commands on all targets.
   *    If a target was taken offline for the association to run, it is made available again immediately,
   *    without a reboot. </p>
   *          <p>The <code>Duration</code> parameter applies only when both these conditions are true:</p>
   *          <ul>
   *             <li>
   *                <p>The association for which you specify a duration is cancelable according to the parameters
   *      of the SSM command document or Automation runbook associated with this execution. </p>
   *             </li>
   *             <li>
   *                <p>The command specifies the <code>
   *                      <a href="https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatchRequestEntry.html#systemsmanager-Type-CreateAssociationBatchRequestEntry-ApplyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a>
   *                   </code> parameter, which means that the association doesn't
   *      run immediately after it is created, but only according to the specified schedule.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssociationBatchRequest {
  /**
   * <p>One or more associations.</p>
   * @public
   */
  Entries: CreateAssociationBatchRequestEntry[] | undefined;
}

/**
 * <p>Describes a failed association.</p>
 * @public
 */
export interface FailedCreateAssociation {
  /**
   * <p>The association.</p>
   * @public
   */
  Entry?: CreateAssociationBatchRequestEntry | undefined;

  /**
   * <p>A description of the failure.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The source of the failure.</p>
   * @public
   */
  Fault?: Fault | undefined;
}

/**
 * @public
 */
export interface CreateAssociationBatchResult {
  /**
   * <p>Information about the associations that succeeded.</p>
   * @public
   */
  Successful?: AssociationDescription[] | undefined;

  /**
   * <p>Information about the associations that failed.</p>
   * @public
   */
  Failed?: FailedCreateAssociation[] | undefined;
}

/**
 * <p>Identifying information about a document attachment, including the file name and a key-value
 *    pair that identifies the location of an attachment to a document.</p>
 * @public
 */
export interface AttachmentsSource {
  /**
   * <p>The key of a key-value pair that identifies the location of an attachment to a
   *    document.</p>
   * @public
   */
  Key?: AttachmentsSourceKey | undefined;

  /**
   * <p>The value of a key-value pair that identifies the location of an attachment to a document.
   *    The format for <b>Value</b> depends on the type of key you
   *    specify.</p>
   *          <ul>
   *             <li>
   *                <p>For the key <i>SourceUrl</i>, the value is an S3 bucket location. For
   *      example:</p>
   *                <p>
   *                   <code>"Values": [ "s3://amzn-s3-demo-bucket/my-prefix" ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the key <i>S3FileUrl</i>, the value is a file in an S3 bucket. For
   *      example:</p>
   *                <p>
   *                   <code>"Values": [ "s3://amzn-s3-demo-bucket/my-prefix/my-file.py" ]</code>
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
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The name of the document attachment file.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>An SSM document required by the current document.</p>
 * @public
 */
export interface DocumentRequires {
  /**
   * <p>The name of the required SSM document. The name can be an Amazon Resource Name (ARN).</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The document version required by the current document.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The document type of the required SSM document.</p>
   * @public
   */
  RequireType?: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, 12.6. This value is unique across all versions of a document, and can't be
   *    changed.</p>
   * @public
   */
  VersionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDocumentRequest {
  /**
   * <p>The content for the new SSM document in JSON or YAML format. The content of the document
   *    must not exceed 64KB. This quota also includes the content specified for input parameters at
   *    runtime. We recommend storing the contents for your new document in an external JSON or YAML file
   *    and referencing the file in a command.</p>
   *          <p>For examples, see the following topics in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-using.html#create-ssm-console">Create an SSM
   *       document (console)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-using.html#create-ssm-document-cli">Create an
   *       SSM document (command line)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-using.html#create-ssm-document-api">Create an
   *       SSM document (API)</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>A list of SSM documents required by a document. This parameter is used exclusively by
   *    AppConfig. When a user creates an AppConfig configuration in an SSM document, the user must also
   *    specify a required document for validation purposes. In this case, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document for validation purposes. For more
   *    information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">What is AppConfig?</a> in the
   *     <i>AppConfig User Guide</i>.</p>
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * <p>A list of key-value pairs that describe attachments to a version of a document.</p>
   * @public
   */
  Attachments?: AttachmentsSource[] | undefined;

  /**
   * <p>A name for the SSM document.</p>
   *          <important>
   *             <p>You can't use the following strings as document name prefixes. These are reserved by Amazon Web Services
   *     for use as document name prefixes:</p>
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
   *                <li>
   *                   <p>
   *                      <code>AWSEC2</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWSConfigRemediation</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWSSupport</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </important>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional field where you can specify a friendly name for the SSM document. This value can
   *    differ for each version of the document. You can update this value at a later time using the
   *     <a>UpdateDocument</a> operation.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact you are creating with the document.
   *    For example, <code>Release12.1</code>. This value is unique across all versions of a document,
   *    and can't be changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The type of document to create.</p>
   *          <note>
   *             <p>The <code>DeploymentStrategy</code> document type is an internal-use-only document type
   *     reserved for AppConfig.</p>
   *          </note>
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * <p>Specify the document format for the request. The document format can be JSON, YAML, or TEXT.
   *    JSON is the default format.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>Specify a target type to define the kinds of resources the document can run on. For example,
   *    to run a document on EC2 instances, specify the following value:
   *    <code>/AWS::EC2::Instance</code>. If you specify a value of '/' the document can run on all types
   *    of resources. If you don't specify a value, the document can't run on any resources. For a list
   *    of valid resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>. </p>
   * @public
   */
  TargetType?: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    SSM document to identify the types of targets or the environment where it will run. In this case,
   *    you could specify the following key-value pairs:</p>
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
   *     operation.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>An attribute of an attachment, such as the attachment name.</p>
 * @public
 */
export interface AttachmentInformation {
  /**
   * <p>The name of the attachment.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Parameters specified in a Systems Manager document that run on the server when the command is run.
 *   </p>
 * @public
 */
export interface DocumentParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of parameter. The type can be either String or StringList.</p>
   * @public
   */
  Type?: DocumentParameterType | undefined;

  /**
   * <p>A description of what the parameter does, how to use it, the default value, and whether or
   *    not the parameter is optional.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If specified, the default values for the parameters. Parameters without a default value are
   *    required. Parameters with a default value are optional.</p>
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * <p>Information about the result of a document review request.</p>
 * @public
 */
export interface ReviewInformation {
  /**
   * <p>The time that the reviewer took action on the document review request.</p>
   * @public
   */
  ReviewedTime?: Date | undefined;

  /**
   * <p>The current status of the document review request.</p>
   * @public
   */
  Status?: ReviewStatus | undefined;

  /**
   * <p>The reviewer assigned to take action on the document review request.</p>
   * @public
   */
  Reviewer?: string | undefined;
}

/**
 * <p>Describes an Amazon Web Services Systems Manager document (SSM document). </p>
 * @public
 */
export interface DocumentDescription {
  /**
   * <p>The SHA1 hash of the document, which you can use for verification.</p>
   * @public
   */
  Sha1?: string | undefined;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>The hash type of the document. Valid values include <code>Sha256</code> or
   *    <code>Sha1</code>.</p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   * @public
   */
  HashType?: DocumentHashType | undefined;

  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The version of the artifact associated with the document.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The Amazon Web Services user that created the document.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date when the document was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The status of the SSM document.</p>
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>A description of the document. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A description of the parameters for a document.</p>
   * @public
   */
  Parameters?: DocumentParameter[] | undefined;

  /**
   * <p>The list of operating system (OS) platforms compatible with this SSM document. </p>
   * @public
   */
  PlatformTypes?: PlatformType[] | undefined;

  /**
   * <p>The type of document.</p>
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * <p>The schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The latest version of the document.</p>
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * <p>The default version.</p>
   * @public
   */
  DefaultVersion?: string | undefined;

  /**
   * <p>The document format, either JSON or YAML.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>The target type which defines the kinds of resources the document can run on. For example,
   *     <code>/AWS::EC2::Instance</code>. For a list of valid resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>. </p>
   * @public
   */
  TargetType?: string | undefined;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Details about the document attachments, including names, locations, sizes, and so on.</p>
   * @public
   */
  AttachmentsInformation?: AttachmentInformation[] | undefined;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * <p>The user in your organization who created the document.</p>
   * @public
   */
  Author?: string | undefined;

  /**
   * <p>Details about the review of a document.</p>
   * @public
   */
  ReviewInformation?: ReviewInformation[] | undefined;

  /**
   * <p>The version of the document currently approved for use in the organization.</p>
   * @public
   */
  ApprovedVersion?: string | undefined;

  /**
   * <p>The version of the document that is currently under review.</p>
   * @public
   */
  PendingReviewVersion?: string | undefined;

  /**
   * <p>The current status of the review.</p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * <p>The classification of a document to help you identify and categorize its use.</p>
   * @public
   */
  Category?: string[] | undefined;

  /**
   * <p>The value that identifies a document's category.</p>
   * @public
   */
  CategoryEnum?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDocumentResult {
  /**
   * <p>Information about the SSM document.</p>
   * @public
   */
  DocumentDescription?: DocumentDescription | undefined;
}

/**
 * @public
 */
export interface CreateMaintenanceWindowRequest {
  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description for the maintenance window. We recommend specifying a description to
   *    help you organize your maintenance windows. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become active. <code>StartDate</code> allows you to delay activation of the maintenance window
   *    until the specified future date.</p>
   *          <note>
   *             <p>When using a rate schedule, if you provide a start date that occurs in the past, the
   *     current date and time are used as the start date. </p>
   *          </note>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. <code>EndDate</code> allows you to set a date and time in the future when the
   *    maintenance window will no longer run.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   * @public
   */
  Schedule: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * <p>The number of days to wait after the date and time specified by a cron expression before
   *    running the maintenance window.</p>
   *          <p>For example, the following cron expression schedules a maintenance window to run on the
   *    third Tuesday of every month at 11:30 PM.</p>
   *          <p>
   *             <code>cron(30 23 ? * TUE#3 *)</code>
   *          </p>
   *          <p>If the schedule offset is <code>2</code>, the maintenance window won't run until two days
   *    later.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   * @public
   */
  Cutoff: number | undefined;

  /**
   * <p>Enables a maintenance window task to run on managed nodes, even if you haven't registered
   *    those nodes as targets. If enabled, then you must specify the unregistered managed nodes (by node
   *    ID) when you register a task with the maintenance window.</p>
   *          <p>If you don't enable this option, then you must specify previously-registered targets when
   *    you register a task with the maintenance window.</p>
   * @public
   */
  AllowUnassociatedTargets: boolean | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    maintenance window to identify the type of tasks it will run, the types of targets, and the
   *    environment it will run in. In this case, you could specify the following key-value pairs:</p>
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
   *     operation.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;
}

/**
 * <p>A notification about the OpsItem.</p>
 * @public
 */
export interface OpsItemNotification {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where
   *    notifications are sent when this OpsItem is edited or changed.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>An object that defines the value of the key and its type in the OperationalData map.</p>
 * @public
 */
export interface OpsItemDataValue {
  /**
   * <p>The value of the OperationalData key.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of key-value pair. Valid types include <code>SearchableString</code> and
   *     <code>String</code>.</p>
   * @public
   */
  Type?: OpsItemDataType | undefined;
}

/**
 * <p>An OpsItems that shares something in common with the current OpsItem. For example, related
 *    OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for
 *    the impacted resource.</p>
 * @public
 */
export interface RelatedOpsItem {
  /**
   * <p>The ID of an OpsItem related to the current OpsItem.</p>
   * @public
   */
  OpsItemId: string | undefined;
}

/**
 * @public
 */
export interface CreateOpsItemRequest {
  /**
   * <p>User-defined text that contains information about the OpsItem, in Markdown format. </p>
   *          <note>
   *             <p>Provide enough information so that users viewing this OpsItem for the first time understand
   *     the issue. </p>
   *          </note>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The type of OpsItem to create. Systems Manager supports the following types of OpsItems:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/aws/issue</code>
   *                </p>
   *                <p>This type of OpsItem is used for default OpsItems created by OpsCenter. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/insight</code>
   *                </p>
   *                <p>This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate
   *      OpsItems. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/changerequest</code>
   *                </p>
   *                <p>This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change
   *      requests. </p>
   *                <important>
   *                   <p>Amazon Web Services Systems Manager Change Manager will no longer be open to new
   *   customers starting November 7, 2025. If you would like to use Change Manager, sign up prior to that date. Existing customers can
   *   continue to use the service as normal. For more information, see
   * <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-availability-change.html">Amazon Web Services Systems Manager Change Manager availability change</a>.</p>
   *                </important>
   *             </li>
   *          </ul>
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following:
   *      <code>amazon</code>, <code>aws</code>, <code>amzn</code>, <code>ssm</code>,
   *      <code>/amazon</code>, <code>/aws</code>, <code>/amzn</code>, <code>/ssm</code>.</p>
   *          </important>
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API operation) can view and search on the
   *    specified data. Operational data that isn't searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API operation).</p>
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html">Create OpsItems
   *     manually</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   * @public
   */
  RelatedOpsItems?: RelatedOpsItem[] | undefined;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or Systems Manager.</p>
   *          <note>
   *             <p>The source name can't contain the following strings: <code>aws</code>, <code>amazon</code>,
   *     and <code>amzn</code>. </p>
   *          </note>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource.</p>
   *          <p>Tags use a key-value pair. For example:</p>
   *          <p>
   *             <code>Key=Department,Value=Finance</code>
   *          </p>
   *          <important>
   *             <p>To add tags to a new OpsItem, a user must have IAM permissions for both the
   *      <code>ssm:CreateOpsItems</code> operation and the <code>ssm:AddTagsToResource</code> operation.
   *     To add tags to an existing OpsItem, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </important>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specify a category to assign to an OpsItem. </p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>Specify a severity to assign to an OpsItem.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The time a runbook workflow started. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * <p>The time a runbook workflow ended. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to start. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to end. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedEndTime?: Date | undefined;

  /**
   * <p>The target Amazon Web Services account where you want to create an OpsItem. To make this call, your account
   *    must be configured to work with OpsItems across accounts. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up
   *     OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface CreateOpsItemResponse {
  /**
   * <p>The ID of the OpsItem.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * <p>Metadata to assign to an Application Manager application.</p>
 * @public
 */
export interface MetadataValue {
  /**
   * <p>Metadata value to assign to an Application Manager application.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateOpsMetadataRequest {
  /**
   * <p>A resource ID for a new Application Manager application.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Metadata for a new Application Manager application. </p>
   * @public
   */
  Metadata?: Record<string, MetadataValue> | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can specify a maximum of five tags for
   *    an OpsMetadata object. Tags enable you to categorize a resource in different ways, such as by
   *    purpose, owner, or environment. For example, you might want to tag an OpsMetadata object to
   *    identify an environment or target Amazon Web Services Region. In this case, you could specify the following
   *    key-value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Region,Value=us-east-2</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOpsMetadataResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object or blob created by the call.</p>
   * @public
   */
  OpsMetadataArn?: string | undefined;
}

/**
 * <p> Defines which patches should be included in a patch baseline.</p>
 *          <p>A patch filter consists of a key and a set of values. The filter key is a patch property.
 *    For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>,
 *     <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and
 *     <code>MSRC_SEVERITY</code>.</p>
 *          <p>The filter values define a matching criterion for the patch property indicated by the key.
 *    For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office
 *     2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either
 *    "Office 2013" or "Office 2016". The filter values can be exact values for the patch property
 *    given as a key, or a wildcard (*), which matches all values.</p>
 *          <p>You can view lists of valid values for the patch properties by running the
 *     <code>DescribePatchProperties</code> command. For information about which patch properties can
 *    be used with each major operating system, see <a>DescribePatchProperties</a>.</p>
 * @public
 */
export interface PatchFilter {
  /**
   * <p>The key for the filter.</p>
   *          <p>Run the <a>DescribePatchProperties</a> command to view lists of valid keys for
   *    each operating system type.</p>
   * @public
   */
  Key: PatchFilterKey | undefined;

  /**
   * <p>The value for the filter key.</p>
   *          <p>Run the <a>DescribePatchProperties</a> command to view lists of valid values for
   *    each key based on operating system type.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A set of patch filters, typically used for approval rules.</p>
 * @public
 */
export interface PatchFilterGroup {
  /**
   * <p>The set of patch filters that make up the group.</p>
   * @public
   */
  PatchFilters: PatchFilter[] | undefined;
}

/**
 * <p>Defines an approval rule for a patch baseline.</p>
 * @public
 */
export interface PatchRule {
  /**
   * <p>The patch filter group that defines the criteria for the rule.</p>
   * @public
   */
  PatchFilterGroup: PatchFilterGroup | undefined;

  /**
   * <p>A compliance severity level for all approved patches in a patch baseline.</p>
   * @public
   */
  ComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>The number of days after the release date of each patch matched by the rule that the patch
   *    is marked as approved in the patch baseline. For example, a value of <code>7</code> means that
   *    patches are approved seven days after they are released.</p>
   *          <p>Patch Manager evaluates patch release dates using Coordinated Universal Time (UTC). If the
   *    day represented by <code>7</code> is <code>2025-11-16</code>, patches released between
   *     <code>2025-11-16T00:00:00Z</code> and <code>2025-11-16T23:59:59Z</code> will be included in the
   *    approval.</p>
   *          <p>This parameter is marked as <code>Required: No</code>, but your request must include a value
   *    for either <code>ApproveAfterDays</code> or <code>ApproveUntilDate</code>.</p>
   *          <p>Not supported for Debian Server or Ubuntu Server.</p>
   *          <important>
   *             <p>Use caution when setting this value for Windows Server patch baselines. Because patch
   *     updates that are replaced by later updates are removed, setting too broad a value for this
   *     parameter can result in crucial patches not being installed. For more information, see the
   *      <b>Windows Server</b> tab in the topic <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-selecting-patches.html">How security
   *      patches are selected</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </important>
   * @public
   */
  ApproveAfterDays?: number | undefined;

  /**
   * <p>The cutoff date for auto approval of released patches. Any patches released on or before
   *    this date are installed automatically.</p>
   *          <p>Enter dates in the format <code>YYYY-MM-DD</code>. For example,
   *    <code>2025-11-16</code>.</p>
   *          <p>Patch Manager evaluates patch release dates using Coordinated Universal Time (UTC). If you
   *    enter the date <code>2025-11-16</code>, patches released between
   *     <code>2025-11-16T00:00:00Z</code> and <code>2025-11-16T23:59:59Z</code> will be included in the
   *    approval.</p>
   *          <p>This parameter is marked as <code>Required: No</code>, but your request must include a value
   *    for either <code>ApproveUntilDate</code> or <code>ApproveAfterDays</code>.</p>
   *          <p>Not supported for Debian Server or Ubuntu Server.</p>
   *          <important>
   *             <p>Use caution when setting this value for Windows Server patch baselines. Because patch
   *     updates that are replaced by later updates are removed, setting too broad a value for this
   *     parameter can result in crucial patches not being installed. For more information, see the
   *      <b>Windows Server</b> tab in the topic <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-selecting-patches.html">How security
   *      patches are selected</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </important>
   * @public
   */
  ApproveUntilDate?: string | undefined;

  /**
   * <p>For managed nodes identified by the approval rule filters, enables a patch baseline to apply
   *    non-security updates available in the specified repository. The default value is
   *     <code>false</code>. Applies to Linux managed nodes only.</p>
   * @public
   */
  EnableNonSecurity?: boolean | undefined;
}

/**
 * <p>A set of rules defining the approval rules for a patch baseline.</p>
 * @public
 */
export interface PatchRuleGroup {
  /**
   * <p>The rules that make up the rule group.</p>
   * @public
   */
  PatchRules: PatchRule[] | undefined;
}

/**
 * <p>Information about the patches to use to update the managed nodes, including target operating
 *    systems and source repository. Applies to Linux managed nodes only.</p>
 * @public
 */
export interface PatchSource {
  /**
   * <p>The name specified to identify the patch source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific operating system versions a patch repository applies to, such as "Ubuntu16.04",
   *    "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product
   *    values, see <a>PatchFilter</a>.</p>
   * @public
   */
  Products: string[] | undefined;

  /**
   * <p>The value of the repo configuration.</p>
   *          <p>
   *             <b>Example for yum repositories</b>
   *          </p>
   *          <p>
   *             <code>[main]</code>
   *          </p>
   *          <p>
   *             <code>name=MyCustomRepository</code>
   *          </p>
   *          <p>
   *             <code>baseurl=https://my-custom-repository</code>
   *          </p>
   *          <p>
   *             <code>enabled=1</code>
   *          </p>
   *          <p>For information about other options available for your yum repository configuration, see
   *     <a href="https://man7.org/linux/man-pages/man5/dnf.conf.5.html">dnf.conf(5)</a> on the
   *     <i>man7.org</i> website.</p>
   *          <p>
   *             <b>Examples for Ubuntu Server and Debian Server</b>
   *          </p>
   *          <p>
   *             <code>deb http://security.ubuntu.com/ubuntu jammy main</code>
   *          </p>
   *          <p>
   *             <code>deb https://site.example.com/debian distribution component1 component2 component3</code>
   *          </p>
   *          <p>Repo information for Ubuntu Server repositories must be specifed in a single line. For more
   *    examples and information, see <a href="https://manpages.ubuntu.com/manpages/jammy/man5/sources.list.5.html">jammy (5)
   *     sources.list.5.gz</a> on the <i>Ubuntu Server Manuals</i> website and <a href="https://wiki.debian.org/SourcesList#sources.list_format">sources.list format</a> on the
   *     <i>Debian Wiki</i>.</p>
   * @public
   */
  Configuration: string | undefined;
}

/**
 * @public
 */
export interface CreatePatchBaselineRequest {
  /**
   * <p>Defines the operating system the patch baseline applies to. The default value is
   *     <code>WINDOWS</code>.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A set of global filters used to include patches in the baseline.</p>
   *          <important>
   *             <p>The <code>GlobalFilters</code> parameter can be configured only by using the CLI or an Amazon Web Services SDK. It can't be configured from the Patch Manager
   *     console, and its value isn't displayed in the console.</p>
   *          </important>
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package
   *                         name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * <p>Defines the compliance level for approved patches. When an approved patch is reported as
   *    missing, this value describes the severity of the compliance violation. The default value is
   *     <code>UNSPECIFIED</code>.</p>
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package
   *                         name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * <p>The action for Patch Manager to take on patches included in the
   *     <code>RejectedPackages</code> list.</p>
   *          <dl>
   *             <dt>ALLOW_AS_DEPENDENCY</dt>
   *             <dd>
   *                <p>
   *                   <b>Linux and macOS</b>: A package in the rejected patches list
   *       is installed only if it is a dependency of another package. It is considered compliant with
   *       the patch baseline, and its status is reported as <code>INSTALLED_OTHER</code>. This is the
   *       default action if no option is specified.</p>
   *                <p>
   *                   <b>Windows Server</b>: Windows Server doesn't support the
   *       concept of package dependencies. If a package in the rejected patches list and already
   *       installed on the node, its status is reported as <code>INSTALLED_OTHER</code>. Any package not
   *       already installed on the node is skipped. This is the default action if no option is
   *       specified.</p>
   *             </dd>
   *             <dt>BLOCK</dt>
   *             <dd>
   *                <p>
   *                   <b>All OSs</b>: Packages in the rejected patches list, and
   *       packages that include them as dependencies, aren't installed by Patch Manager under any
   *       circumstances. </p>
   *                <p>State value assignment for patch compliance:</p>
   *                <ul>
   *                   <li>
   *                      <p>If a package was installed before it was added to the rejected patches list, or is
   *         installed outside of Patch Manager afterward, it's considered noncompliant with the patch
   *         baseline and its status is reported as <code>INSTALLED_REJECTED</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If an update attempts to install a dependency package that is now rejected by the
   *         baseline, when previous versions of the package were not rejected, the package being updated
   *         is reported as <code>MISSING</code> for <code>SCAN</code> operations and as
   *          <code>FAILED</code> for <code>INSTALL</code> operations.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * <p>A description of the patch baseline.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * <p>Indicates the status you want to assign to security patches that are available but not
   *    approved because they don't meet the installation criteria specified in the patch
   *    baseline.</p>
   *          <p>Example scenario: Security patches that you might want installed can be skipped if you have
   *    specified a long period to wait after a patch is released before installation. If an update to
   *    the patch is released during your specified waiting period, the waiting period for installing the
   *    patch starts over. If the waiting period is too long, multiple versions of the patch could be
   *    released but never installed.</p>
   *          <p>Supported for Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    patch baseline to identify the severity level of patches it specifies and the operating system
   *    family it applies to. In this case, you could specify the following key-value pairs:</p>
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
   *     operation.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePatchBaselineResult {
  /**
   * <p>The ID of the created patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;
}

/**
 * <p>Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a
 *    centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the
 *    central bucket. Each key prefix represents a different Amazon Web Services account ID.</p>
 * @public
 */
export interface ResourceDataSyncDestinationDataSharing {
  /**
   * <p>The sharing data type. Only <code>Organization</code> is supported.</p>
   * @public
   */
  DestinationDataSharingType?: string | undefined;
}

/**
 * <p>Information about the target S3 bucket for the resource data sync.</p>
 * @public
 */
export interface ResourceDataSyncS3Destination {
  /**
   * <p>The name of the S3 bucket where the aggregated data is stored.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>An Amazon S3 prefix for the bucket.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A supported sync format. The following format is currently supported: JsonSerDe</p>
   * @public
   */
  SyncFormat: ResourceDataSyncS3Format | undefined;

  /**
   * <p>The Amazon Web Services Region with the S3 bucket targeted by the resource data sync.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The ARN of an encryption key for a destination in Amazon S3. Must belong to the same
   *    Region as the destination S3 bucket.</p>
   * @public
   */
  AWSKMSKeyARN?: string | undefined;

  /**
   * <p>Enables destination data sharing. By default, this field is <code>null</code>.</p>
   * @public
   */
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing | undefined;
}

/**
 * <p>The Organizations organizational unit data source for the sync.</p>
 * @public
 */
export interface ResourceDataSyncOrganizationalUnit {
  /**
   * <p>The Organizations unit ID data source for the sync.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * <p>Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync
 *    source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't
 *    present, from multiple Amazon Web Services Regions.</p>
 * @public
 */
export interface ResourceDataSyncAwsOrganizationsSource {
  /**
   * <p>If an Amazon Web Services organization is present, this is either <code>OrganizationalUnits</code> or
   *     <code>EntireOrganization</code>. For <code>OrganizationalUnits</code>, the data is aggregated
   *    from a set of organization units. For <code>EntireOrganization</code>, the data is aggregated
   *    from the entire Amazon Web Services organization.</p>
   * @public
   */
  OrganizationSourceType: string | undefined;

  /**
   * <p>The Organizations organization units included in the sync.</p>
   * @public
   */
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[] | undefined;
}

/**
 * <p>Information about the source of the data included in the resource data sync.</p>
 * @public
 */
export interface ResourceDataSyncSource {
  /**
   * <p>The type of data source for the resource data sync. <code>SourceType</code> is either
   *     <code>AwsOrganizations</code> (if an organization is present in Organizations) or
   *     <code>SingleAccountMultiRegions</code>.</p>
   * @public
   */
  SourceType: string | undefined;

  /**
   * <p>Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync
   *    source of this type can synchronize data from Organizations.</p>
   * @public
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;

  /**
   * <p>The <code>SyncSource</code> Amazon Web Services Regions included in the resource data sync.</p>
   * @public
   */
  SourceRegions: string[] | undefined;

  /**
   * <p>Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those
   *    Regions come online.</p>
   * @public
   */
  IncludeFutureRegions?: boolean | undefined;

  /**
   * <p>When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager
   *    automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in
   *    your organization (or in the selected organization units). For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in
   *    the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  EnableAllOpsDataSources?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateResourceDataSyncRequest {
  /**
   * <p>A name for the configuration.</p>
   * @public
   */
  SyncName: string | undefined;

  /**
   * <p>Amazon S3 configuration details for the sync. This parameter is required if the
   *     <code>SyncType</code> value is SyncToDestination.</p>
   * @public
   */
  S3Destination?: ResourceDataSyncS3Destination | undefined;

  /**
   * <p>Specify <code>SyncToDestination</code> to create a resource data sync that synchronizes data
   *    to an S3 bucket for Inventory. If you specify <code>SyncToDestination</code>, you must provide a
   *    value for <code>S3Destination</code>. Specify <code>SyncFromSource</code> to synchronize data
   *    from a single account and multiple Regions, or multiple Amazon Web Services accounts and Amazon Web Services Regions, as
   *    listed in Organizations for Explorer. If you specify <code>SyncFromSource</code>, you must provide a
   *    value for <code>SyncSource</code>. The default value is <code>SyncToDestination</code>.</p>
   * @public
   */
  SyncType?: string | undefined;

  /**
   * <p>Specify information about the data sources to synchronize. This parameter is required if the
   *     <code>SyncType</code> value is SyncFromSource.</p>
   * @public
   */
  SyncSource?: ResourceDataSyncSource | undefined;
}

/**
 * @public
 */
export interface CreateResourceDataSyncResult {}

/**
 * @public
 */
export interface DeleteActivationRequest {
  /**
   * <p>The ID of the activation that you want to delete.</p>
   * @public
   */
  ActivationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteActivationResult {}

/**
 * @public
 */
export interface DeleteAssociationRequest {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The managed node ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify a managed node ID for an
   *     association, use the <code>Targets</code> parameter. Requests that include the parameter
   *      <code>InstanceID</code> with Systems Manager documents (SSM documents) that use schema version 2.0 or
   *     later will fail. In addition, if you use the parameter <code>InstanceId</code>, you can't use
   *     the parameters <code>AssociationName</code>, <code>DocumentVersion</code>,
   *      <code>MaxErrors</code>, <code>MaxConcurrency</code>, <code>OutputLocation</code>, or
   *      <code>ScheduleExpression</code>. To use these parameters, you must use the <code>Targets</code>
   *     parameter.</p>
   *          </note>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The association ID that you want to delete.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationResult {}

/**
 * @public
 */
export interface DeleteDocumentRequest {
  /**
   * <p>The name of the document.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of the document that you want to delete. If not provided, all versions of the
   *    document are deleted.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The version name of the document that you want to delete. If not provided, all versions of
   *    the document are deleted.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>Some SSM document types require that you specify a <code>Force</code> flag before you can
   *    delete the document. For example, you must specify a <code>Force</code> flag to delete a document
   *    of type <code>ApplicationConfigurationSchema</code>. You can restrict access to the
   *     <code>Force</code> flag in an Identity and Access Management (IAM) policy.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentResult {}

/**
 * @public
 */
export interface DeleteInventoryRequest {
  /**
   * <p>The name of the custom inventory type for which you want to delete either all previously
   *    collected data or the inventory type itself. </p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>Use the <code>SchemaDeleteOption</code> to delete a custom inventory type (schema). If you
   *    don't choose this option, the system only deletes existing inventory data associated with the
   *    custom inventory type. Choose one of the following options:</p>
   *          <p>DisableSchema: If you choose this option, the system ignores all inventory data for the
   *    specified version, and any earlier versions. To enable this schema again, you must call the
   *     <code>PutInventory</code> operation for a version greater than the disabled version.</p>
   *          <p>DeleteSchema: This option deletes the specified custom type from the Inventory service. You
   *    can recreate the schema later, if you want.</p>
   * @public
   */
  SchemaDeleteOption?: InventorySchemaDeleteOption | undefined;

  /**
   * <p>Use this option to view a summary of the deletion request without deleting any data or the
   *    data type. This option is useful when you only want to understand what will be deleted. Once you
   *    validate that the data to be deleted is what you intend to delete, you can run the same command
   *    without specifying the <code>DryRun</code> option.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Either a count, remaining count, or a version number in a delete inventory summary.</p>
 * @public
 */
export interface InventoryDeletionSummaryItem {
  /**
   * <p>The inventory type version.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>A count of the number of deleted items.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The remaining number of items to delete.</p>
   * @public
   */
  RemainingCount?: number | undefined;
}

/**
 * <p>Information about the delete operation.</p>
 * @public
 */
export interface InventoryDeletionSummary {
  /**
   * <p>The total number of items to delete. This count doesn't change during the delete
   *    operation.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>Remaining number of items to delete.</p>
   * @public
   */
  RemainingCount?: number | undefined;

  /**
   * <p>A list of counts and versions for deleted items.</p>
   * @public
   */
  SummaryItems?: InventoryDeletionSummaryItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteInventoryResult {
  /**
   * <p>Every <code>DeleteInventory</code> operation is assigned a unique ID. This option returns a
   *    unique ID. You can use this ID to query the status of a delete operation. This option is useful
   *    for ensuring that a delete operation has completed before you begin other operations. </p>
   * @public
   */
  DeletionId?: string | undefined;

  /**
   * <p>The name of the inventory data type specified in the request.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>A summary of the delete operation. For more information about this summary, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-custom.html#delete-custom-inventory-summary">Deleting custom inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  DeletionSummary?: InventoryDeletionSummary | undefined;
}

/**
 * @public
 */
export interface DeleteMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window to delete.</p>
   * @public
   */
  WindowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMaintenanceWindowResult {
  /**
   * <p>The ID of the deleted maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOpsItemRequest {
  /**
   * <p>The ID of the OpsItem that you want to delete.</p>
   * @public
   */
  OpsItemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOpsItemResponse {}

/**
 * @public
 */
export interface DeleteOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an OpsMetadata Object to delete.</p>
   * @public
   */
  OpsMetadataArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteOpsMetadataResult {}

/**
 * @public
 */
export interface DeleteParameterRequest {
  /**
   * <p>The name of the parameter to delete.</p>
   *          <note>
   *             <p>You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name
   *     itself.</p>
   *          </note>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterResult {}

/**
 * @public
 */
export interface DeleteParametersRequest {
  /**
   * <p>The names of the parameters to delete. After deleting a parameter, wait for at least 30
   *    seconds to create a parameter with the same name.</p>
   *          <note>
   *             <p>You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name
   *     itself.</p>
   *          </note>
   * @public
   */
  Names: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteParametersResult {
  /**
   * <p>The names of the deleted parameters.</p>
   * @public
   */
  DeletedParameters?: string[] | undefined;

  /**
   * <p>The names of parameters that weren't deleted because the parameters aren't valid.</p>
   * @public
   */
  InvalidParameters?: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to delete.</p>
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface DeletePatchBaselineResult {
  /**
   * <p>The ID of the deleted patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceDataSyncRequest {
  /**
   * <p>The name of the configuration to delete.</p>
   * @public
   */
  SyncName: string | undefined;

  /**
   * <p>Specify the type of resource data sync to delete.</p>
   * @public
   */
  SyncType?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceDataSyncResult {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which the policies are attached.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The policy ID.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>ID of the current policy version. The hash helps to prevent multiple calls from attempting
   *    to overwrite a policy.</p>
   * @public
   */
  PolicyHash: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeregisterManagedInstanceRequest {
  /**
   * <p>The ID assigned to the managed node when you registered it using the activation process.
   *   </p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterManagedInstanceResult {}

/**
 * @public
 */
export interface DeregisterPatchBaselineForPatchGroupRequest {
  /**
   * <p>The ID of the patch baseline to deregister the patch group from.</p>
   * @public
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch group that should be deregistered from the patch baseline.</p>
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface DeregisterPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline the patch group was deregistered from.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch group deregistered from the patch baseline.</p>
   * @public
   */
  PatchGroup?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetFromMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the target should be removed from.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The ID of the target definition to remove.</p>
   * @public
   */
  WindowTargetId: string | undefined;

  /**
   * <p>The system checks if the target is being referenced by a task. If the target is being
   *    referenced, the system returns an error and doesn't deregister the target from the maintenance
   *    window.</p>
   * @public
   */
  Safe?: boolean | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetFromMaintenanceWindowResult {
  /**
   * <p>The ID of the maintenance window the target was removed from.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The ID of the removed target definition.</p>
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTaskFromMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the task should be removed from.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The ID of the task to remove from the maintenance window.</p>
   * @public
   */
  WindowTaskId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTaskFromMaintenanceWindowResult {
  /**
   * <p>The ID of the maintenance window the task was removed from.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The ID of the task removed from the maintenance window.</p>
   * @public
   */
  WindowTaskId?: string | undefined;
}

/**
 * <p>Filter for the DescribeActivation API.</p>
 * @public
 */
export interface DescribeActivationsFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  FilterKey?: DescribeActivationsFilterKeys | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  FilterValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeActivationsRequest {
  /**
   * <p>A filter to view information about your activations.</p>
   * @public
   */
  Filters?: DescribeActivationsFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivationsResult {
  /**
   * <p>A list of activations for your Amazon Web Services account.</p>
   * @public
   */
  ActivationList?: Activation[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationRequest {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The association ID for which you want information.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>Specify the association version to retrieve. To view the latest version, either specify
   *     <code>$LATEST</code> for this parameter, or omit this parameter. To view a list of all
   *    associations for a managed node, use <a>ListAssociations</a>. To get a list of
   *    versions for a specific association, use <a>ListAssociationVersions</a>. </p>
   * @public
   */
  AssociationVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * <p>Filters used in the request.</p>
 * @public
 */
export interface AssociationExecutionFilter {
  /**
   * <p>The key value used in the request.</p>
   * @public
   */
  Key: AssociationExecutionFilterKey | undefined;

  /**
   * <p>The value specified for the key.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The filter type specified in the request.</p>
   * @public
   */
  Type: AssociationFilterOperatorType | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionsRequest {
  /**
   * <p>The association ID for which you want to view execution history details.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p>
   *          <p>ExecutionId (EQUAL)</p>
   *          <p>Status (EQUAL)</p>
   *          <p>CreatedTime (EQUAL, GREATER_THAN, LESS_THAN)</p>
   * @public
   */
  Filters?: AssociationExecutionFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Includes information about the specified association.</p>
 * @public
 */
export interface AssociationExecution {
  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The association version.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>The execution ID for the association.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The status of the association execution.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Detailed status information about the execution.</p>
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * <p>The time the execution started.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date of the last execution.</p>
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * <p>An aggregate status of the resources in the execution based on the status type.</p>
   * @public
   */
  ResourceCountByStatus?: string | undefined;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarms that were invoked by the association.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionsResult {
  /**
   * <p>A list of the executions for the specified association ID.</p>
   * @public
   */
  AssociationExecutions?: AssociationExecution[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filters for the association execution.</p>
 * @public
 */
export interface AssociationExecutionTargetsFilter {
  /**
   * <p>The key value used in the request.</p>
   * @public
   */
  Key: AssociationExecutionTargetsFilterKey | undefined;

  /**
   * <p>The value specified for the key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionTargetsRequest {
  /**
   * <p>The association ID that includes the execution for which you want to view details.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The execution ID for which you want to view details.</p>
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p>
   *          <p>Status (EQUAL)</p>
   *          <p>ResourceId (EQUAL)</p>
   *          <p>ResourceType (EQUAL)</p>
   * @public
   */
  Filters?: AssociationExecutionTargetsFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the source where the association execution details are stored.</p>
 * @public
 */
export interface OutputSource {
  /**
   * <p>The ID of the output source, for example the URL of an S3 bucket.</p>
   * @public
   */
  OutputSourceId?: string | undefined;

  /**
   * <p>The type of source where the association execution details are stored, for example, Amazon S3.</p>
   * @public
   */
  OutputSourceType?: string | undefined;
}

/**
 * <p>Includes information about the specified association execution.</p>
 * @public
 */
export interface AssociationExecutionTarget {
  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The association version.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>The execution ID.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The resource ID, for example, the managed node ID where the association ran.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type, for example, EC2.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The association execution status.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Detailed information about the execution status.</p>
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * <p>The date of the last execution.</p>
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * <p>The location where the association details are saved.</p>
   * @public
   */
  OutputSource?: OutputSource | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionTargetsResult {
  /**
   * <p>Information about the execution.</p>
   * @public
   */
  AssociationExecutionTargets?: AssociationExecutionTarget[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter used to match specific automation executions. This is used to limit the scope of
 *    Automation execution information returned.</p>
 * @public
 */
export interface AutomationExecutionFilter {
  /**
   * <p>One or more keys to limit the results.</p>
   * @public
   */
  Key: AutomationExecutionFilterKey | undefined;

  /**
   * <p>The values used to limit the execution information associated with the filter's key.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationExecutionsRequest {
  /**
   * <p>Filters used to limit the scope of executions that are requested.</p>
   * @public
   */
  Filters?: AutomationExecutionFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about targets that resolved during the Automation execution.</p>
 * @public
 */
export interface ResolvedTargets {
  /**
   * <p>A list of parameter values sent to targets that resolved during the Automation
   *    execution.</p>
   * @public
   */
  ParameterValues?: string[] | undefined;

  /**
   * <p>A boolean value indicating whether the resolved target list is truncated.</p>
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p>
 *          <note>
 *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
 *     approvals for the change request have been received.</p>
 *          </note>
 * @public
 */
export interface Runbook {
  /**
   * <p>The name of the Automation runbook used in a runbook workflow.</p>
   * @public
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the Automation runbook used in a runbook workflow.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling
   *     <code>StartChangeRequestExecution</code>.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled
   *    runbook workflow. Required if you specify <code>Targets</code>. </p>
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * <p>A key-value mapping to target resources that the runbook operation performs tasks on.
   *    Required if you specify <code>TargetParameterName</code>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A key-value mapping of runbook parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when the operation started,
   *    indicating the maximum number of resources that the runbook operation can run on at the same
   *    time.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The <code>MaxErrors</code> value specified by the user when the execution started,
   *    indicating the maximum number of errors that can occur during the operation before the updates
   *    are stopped or rolled back.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>Information about the Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Runbook
   *    operation.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;
}

/**
 * <p>Details about a specific Automation execution.</p>
 * @public
 */
export interface AutomationExecutionMetadata {
  /**
   * <p>The execution ID.</p>
   * @public
   */
  AutomationExecutionId?: string | undefined;

  /**
   * <p>The name of the Automation runbook used during execution.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The document version used during the execution.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The status of the execution.</p>
   * @public
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;

  /**
   * <p>The time the execution started.</p>
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * <p>The time the execution finished. This isn't populated if the execution is still in
   *    progress.</p>
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * <p>The IAM role ARN of the user who ran the automation.</p>
   * @public
   */
  ExecutedBy?: string | undefined;

  /**
   * <p>An S3 bucket where execution information is stored.</p>
   * @public
   */
  LogFile?: string | undefined;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * <p>The Automation execution mode.</p>
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * <p>The execution ID of the parent automation.</p>
   * @public
   */
  ParentAutomationExecutionId?: string | undefined;

  /**
   * <p>The name of the step that is currently running.</p>
   * @public
   */
  CurrentStepName?: string | undefined;

  /**
   * <p>The action of the step that is currently running.</p>
   * @public
   */
  CurrentAction?: string | undefined;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * <p>The targets defined by the user when starting the automation.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>A list of targets that resolved during the execution.</p>
   * @public
   */
  ResolvedTargets?: ResolvedTargets | undefined;

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when starting the
   *    automation.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The <code>MaxErrors</code> value specified by the user when starting the automation.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>Use this filter with <a>DescribeAutomationExecutions</a>. Specify either Local or
   *    CrossAccount. CrossAccount is an Automation that runs in multiple Amazon Web Services Regions and
   *    Amazon Web Services accounts. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Running automations in multiple Amazon Web Services Regions and accounts</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   * @public
   */
  AutomationType?: AutomationType | undefined;

  /**
   * <p>The details for the CloudWatch alarm applied to your automation.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarm that was invoked by the automation.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * <p>A publicly accessible URL for a file that contains the <code>TargetLocations</code> body.
   *    Currently, only files in presigned Amazon S3 buckets are supported</p>
   * @public
   */
  TargetLocationsURL?: string | undefined;

  /**
   * <p>The subtype of the Automation operation. Currently, the only supported value is
   *     <code>ChangeRequest</code>.</p>
   * @public
   */
  AutomationSubtype?: AutomationSubtype | undefined;

  /**
   * <p>The date and time the Automation operation is scheduled to start.</p>
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * <p>Information about the Automation runbooks that are run during a runbook workflow in
   *    Change Manager.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   * @public
   */
  Runbooks?: Runbook[] | undefined;

  /**
   * <p>The ID of an OpsItem that is created to represent a Change Manager change request.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The ID of a State Manager association used in the Automation operation.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The name of the Change Manager change request.</p>
   * @public
   */
  ChangeRequestName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationExecutionsResult {
  /**
   * <p>The list of details about each automation execution which has occurred which matches the
   *    filter specification, if any.</p>
   * @public
   */
  AutomationExecutionMetadataList?: AutomationExecutionMetadata[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter to limit the amount of step execution information returned by the call.</p>
 * @public
 */
export interface StepExecutionFilter {
  /**
   * <p>One or more keys to limit the results.</p>
   * @public
   */
  Key: StepExecutionFilterKey | undefined;

  /**
   * <p>The values of the filter key.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationStepExecutionsRequest {
  /**
   * <p>The Automation execution ID for which you want step execution descriptions.</p>
   * @public
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>One or more filters to limit the number of step executions returned by the request.</p>
   * @public
   */
  Filters?: StepExecutionFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Indicates whether to list step executions in reverse order by start time. The default value
   *    is 'false'.</p>
   * @public
   */
  ReverseOrder?: boolean | undefined;
}

/**
 * <p>Information about an Automation failure.</p>
 * @public
 */
export interface FailureDetails {
  /**
   * <p>The stage of the Automation execution when the failure occurred. The stages include the
   *    following: InputValidation, PreVerification, Invocation, PostVerification.</p>
   * @public
   */
  FailureStage?: string | undefined;

  /**
   * <p>The type of Automation failure. Failure types include the following: Action, Permission,
   *    Throttling, Verification, Internal.</p>
   * @public
   */
  FailureType?: string | undefined;

  /**
   * <p>Detailed information about the Automation step failure.</p>
   * @public
   */
  Details?: Record<string, string[]> | undefined;
}

/**
 * <p>A detailed status of the parent step.</p>
 * @public
 */
export interface ParentStepDetails {
  /**
   * <p>The unique ID of a step execution.</p>
   * @public
   */
  StepExecutionId?: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  StepName?: string | undefined;

  /**
   * <p>The name of the automation action.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The current repetition of the loop represented by an integer.</p>
   * @public
   */
  Iteration?: number | undefined;

  /**
   * <p>The current value of the specified iterator in the loop.</p>
   * @public
   */
  IteratorValue?: string | undefined;
}

/**
 * <p>Detailed information about an the execution state of an Automation step.</p>
 * @public
 */
export interface StepExecution {
  /**
   * <p>The name of this execution step.</p>
   * @public
   */
  StepName?: string | undefined;

  /**
   * <p>The action this step performs. The action determines the behavior of the step.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The timeout seconds of the step.</p>
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * <p>The action to take if the step fails. The default value is <code>Abort</code>.</p>
   * @public
   */
  OnFailure?: string | undefined;

  /**
   * <p>The maximum number of tries to run the action of the step. The default value is
   *     <code>1</code>.</p>
   * @public
   */
  MaxAttempts?: number | undefined;

  /**
   * <p>If a step has begun execution, this contains the time the step started. If the step is in
   *    Pending status, this field isn't populated.</p>
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * <p>If a step has finished execution, this contains the time the execution ended. If the step
   *    hasn't yet concluded, this field isn't populated.</p>
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * <p>The execution status for this step.</p>
   * @public
   */
  StepStatus?: AutomationExecutionStatus | undefined;

  /**
   * <p>The response code returned by the execution of the step.</p>
   * @public
   */
  ResponseCode?: string | undefined;

  /**
   * <p>Fully-resolved values passed into the step before execution.</p>
   * @public
   */
  Inputs?: Record<string, string> | undefined;

  /**
   * <p>Returned values from the execution of the step.</p>
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * <p>A message associated with the response code for an execution.</p>
   * @public
   */
  Response?: string | undefined;

  /**
   * <p>If a step failed, this message explains why the execution failed.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>Information about the Automation failure.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>The unique ID of a step execution.</p>
   * @public
   */
  StepExecutionId?: string | undefined;

  /**
   * <p>A user-specified list of parameters to override when running a step.</p>
   * @public
   */
  OverriddenParameters?: Record<string, string[]> | undefined;

  /**
   * <p>The flag which can be used to end automation no matter whether the step succeeds or
   *    fails.</p>
   * @public
   */
  IsEnd?: boolean | undefined;

  /**
   * <p>The next step after the step succeeds.</p>
   * @public
   */
  NextStep?: string | undefined;

  /**
   * <p>The flag which can be used to help decide whether the failure of current step leads to the
   *    Automation failure.</p>
   * @public
   */
  IsCritical?: boolean | undefined;

  /**
   * <p>Strategies used when step fails, we support Continue and Abort. Abort will fail the
   *    automation when the step fails. Continue will ignore the failure of current step and allow
   *    automation to run the next step. With conditional branching, we add step:stepName to support the
   *    automation to go to another specific step.</p>
   * @public
   */
  ValidNextSteps?: string[] | undefined;

  /**
   * <p>The targets for the step execution.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation
   *    execution.</p>
   * @public
   */
  TargetLocation?: TargetLocation | undefined;

  /**
   * <p>The CloudWatch alarms that were invoked by the automation.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * <p>Information about the parent step.</p>
   * @public
   */
  ParentStepDetails?: ParentStepDetails | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationStepExecutionsResult {
  /**
   * <p>A list of details about the current state of all steps that make up an execution.</p>
   * @public
   */
  StepExecutions?: StepExecution[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API
 *    operation that includes the filter. Patch Manager API operations that use
 *     <code>PatchOrchestratorFilter</code> include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeAvailablePatches</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeInstancePatches</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePatchBaselines</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePatchGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PatchOrchestratorFilter {
  /**
   * <p>The key for the filter.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the filter.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAvailablePatchesRequest {
  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>
   *             <b>Windows Server</b>
   *          </p>
   *          <p>Supported keys for Windows Server managed node patches include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PATCH_SET</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>OS</code> | <code>APPLICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PRODUCT</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>WindowsServer2012</code> | <code>Office 2010</code> |
   *       <code>MicrosoftDefenderAntivirus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PRODUCT_FAMILY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Windows</code> | <code>Office</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MSRC_SEVERITY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>ServicePacks</code> | <code>Important</code> | <code>Moderate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CLASSIFICATION</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>ServicePacks</code> | <code>SecurityUpdates</code> |
   *       <code>DefinitionUpdates</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PATCH_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>KB123456</code> | <code>KB4516046</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Linux</b>
   *          </p>
   *          <important>
   *             <p>When specifying filters for Linux patches, you must specify a key-pair for
   *      <code>PRODUCT</code>. For example, using the Command Line Interface (CLI), the
   *     following command fails:</p>
   *             <p>
   *                <code>aws ssm describe-available-patches --filters Key=CVE_ID,Values=CVE-2018-3615</code>
   *             </p>
   *             <p>However, the following command succeeds:</p>
   *             <p>
   *                <code>aws ssm describe-available-patches --filters Key=PRODUCT,Values=AmazonLinux2018.03
   *      Key=CVE_ID,Values=CVE-2018-3615</code>
   *             </p>
   *          </important>
   *          <p>Supported keys for Linux managed node patches include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PRODUCT</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AmazonLinux2018.03</code> | <code>AmazonLinux2.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NAME</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>kernel-headers</code> | <code>samba-python</code> | <code>php</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>SEVERITY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Critical</code> | <code>Important</code> | <code>Medium</code> |
   *       <code>Low</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>EPOCH</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>0</code> | <code>1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>VERSION</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>78.6.1</code> | <code>4.10.16</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RELEASE</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>9.56.amzn1</code> | <code>1.amzn2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ARCH</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>i686</code> | <code>x86_64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>REPOSITORY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Core</code> | <code>Updates</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ADVISORY_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>ALAS-2018-1058</code> | <code>ALAS2-2021-1594</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CVE_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>CVE-2018-3615</code> | <code>CVE-2020-1472</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BUGZILLA_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>1463241</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents metadata about a patch.</p>
 * @public
 */
export interface Patch {
  /**
   * <p>The ID of the patch. Applies to Windows patches only.</p>
   *          <note>
   *             <p>This ID isn't the same as the Microsoft Knowledge Base ID.</p>
   *          </note>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The date the patch was released.</p>
   * @public
   */
  ReleaseDate?: Date | undefined;

  /**
   * <p>The title of the patch.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description of the patch.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL where more information can be obtained about the patch.</p>
   * @public
   */
  ContentUrl?: string | undefined;

  /**
   * <p>The name of the vendor providing the patch.</p>
   * @public
   */
  Vendor?: string | undefined;

  /**
   * <p>The product family the patch is applicable for. For example, <code>Windows</code> or
   *     <code>Amazon Linux 2</code>.</p>
   * @public
   */
  ProductFamily?: string | undefined;

  /**
   * <p>The specific product the patch is applicable for. For example,
   *     <code>WindowsServer2016</code> or <code>AmazonLinux2018.03</code>.</p>
   * @public
   */
  Product?: string | undefined;

  /**
   * <p>The classification of the patch. For example, <code>SecurityUpdates</code>,
   *     <code>Updates</code>, or <code>CriticalUpdates</code>.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The severity of the patch, such as <code>Critical</code>, <code>Important</code>, or
   *     <code>Moderate</code>. Applies to Windows patches only.</p>
   * @public
   */
  MsrcSeverity?: string | undefined;

  /**
   * <p>The Microsoft Knowledge Base ID of the patch. Applies to Windows patches only.</p>
   * @public
   */
  KbNumber?: string | undefined;

  /**
   * <p>The ID of the Microsoft Security Response Center (MSRC) bulletin the patch is related to.
   *    For example, <code>MS14-045</code>. Applies to Windows patches only.</p>
   * @public
   */
  MsrcNumber?: string | undefined;

  /**
   * <p>The language of the patch if it's language-specific.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The Advisory ID of the patch. For example, <code>RHSA-2020:3779</code>. Applies to
   *    Linux-based managed nodes only.</p>
   * @public
   */
  AdvisoryIds?: string[] | undefined;

  /**
   * <p>The Bugzilla ID of the patch. For example, <code>1600646</code>. Applies to Linux-based
   *    managed nodes only.</p>
   * @public
   */
  BugzillaIds?: string[] | undefined;

  /**
   * <p>The Common Vulnerabilities and Exposures (CVE) ID of the patch. For example,
   *     <code>CVE-2011-3192</code>. Applies to Linux-based managed nodes only.</p>
   * @public
   */
  CVEIds?: string[] | undefined;

  /**
   * <p>The name of the patch. Applies to Linux-based managed nodes only.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The epoch of the patch. For example in
   *    <code>pkg-example-EE-20180914-2.2.amzn1.noarch</code>, the epoch value is
   *    <code>20180914-2</code>. Applies to Linux-based managed nodes only.</p>
   * @public
   */
  Epoch?: number | undefined;

  /**
   * <p>The version number of the patch. For example, in
   *     <code>example-pkg-1.710.10-2.7.abcd.x86_64</code>, the version number is indicated by
   *     <code>-1</code>. Applies to Linux-based managed nodes only.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The particular release of a patch. For example, in
   *     <code>pkg-example-EE-20180914-2.2.amzn1.noarch</code>, the release is <code>2.amaz1</code>.
   *    Applies to Linux-based managed nodes only.</p>
   * @public
   */
  Release?: string | undefined;

  /**
   * <p>The architecture of the patch. For example, in
   *     <code>example-pkg-0.710.10-2.7.abcd.x86_64</code>, the architecture is indicated by
   *     <code>x86_64</code>. Applies to Linux-based managed nodes only.</p>
   * @public
   */
  Arch?: string | undefined;

  /**
   * <p>The severity level of the patch. For example, <code>CRITICAL</code> or
   *    <code>MODERATE</code>.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The source patch repository for the operating system and version, such as
   *     <code>trusty-security</code> for Ubuntu Server 14.04 LTE and <code>focal-security</code> for
   *    Ubuntu Server 20.04 LTE. Applies to Linux-based managed nodes only.</p>
   * @public
   */
  Repository?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailablePatchesResult {
  /**
   * <p>An array of patches. Each entry in the array is a patch structure.</p>
   * @public
   */
  Patches?: Patch[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentRequest {
  /**
   * <p>The name of the SSM document.</p>
   *          <note>
   *             <p>If you're calling a shared SSM document from a different Amazon Web Services account,
   *      <code>Name</code> is the full Amazon Resource Name (ARN) of the document.</p>
   *          </note>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The document version for which you want information. Can be a specific version or the
   *    default version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, 12.6. This value is unique across all versions of a document, and can't be
   *    changed.</p>
   * @public
   */
  VersionName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentResult {
  /**
   * <p>Information about the SSM document.</p>
   * @public
   */
  Document?: DocumentDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentPermissionRequest {
  /**
   * <p>The name of the document for which you are the owner. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The permission type for the document. The permission type can be
   *    <i>Share</i>.</p>
   * @public
   */
  PermissionType: DocumentPermissionType | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentPermissionResponse {
  /**
   * <p>The account IDs that have permission to use this document. The ID can be either an
   *    Amazon Web Services account number or <code>all</code>.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>A list of Amazon Web Services accounts where the current document is shared and the version shared with
   *    each account.</p>
   * @public
   */
  AccountSharingInfoList?: AccountSharingInfo[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEffectiveInstanceAssociationsRequest {
  /**
   * <p>The managed node ID for which you want to view all associations.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>One or more association documents on the managed node. </p>
 * @public
 */
export interface InstanceAssociation {
  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The content of the association document for the managed nodes.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Version information for the association on the managed node.</p>
   * @public
   */
  AssociationVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEffectiveInstanceAssociationsResult {
  /**
   * <p>The associations for the requested managed node.</p>
   * @public
   */
  Associations?: InstanceAssociation[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to retrieve the effective patches for.</p>
   * @public
   */
  BaselineId: string | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the approval status of a patch.</p>
 * @public
 */
export interface PatchStatus {
  /**
   * <p>The approval status of a patch.</p>
   * @public
   */
  DeploymentStatus?: PatchDeploymentStatus | undefined;

  /**
   * <p>The compliance severity level for a patch.</p>
   * @public
   */
  ComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>The date the patch was approved (or will be approved if the status is
   *     <code>PENDING_APPROVAL</code>).</p>
   * @public
   */
  ApprovalDate?: Date | undefined;
}

/**
 * <p>The <code>EffectivePatch</code> structure defines metadata about a patch along with the
 *    approval state of the patch in a particular patch baseline. The approval state includes
 *    information about whether the patch is currently approved, due to be approved by a rule,
 *    explicitly approved, or explicitly rejected and the date the patch was or will be
 *    approved.</p>
 * @public
 */
export interface EffectivePatch {
  /**
   * <p>Provides metadata for a patch, including information such as the KB ID, severity,
   *    classification and a URL for where more information can be obtained about the patch.</p>
   * @public
   */
  Patch?: Patch | undefined;

  /**
   * <p>The status of the patch in a patch baseline. This includes information about whether the
   *    patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly
   *    rejected and the date the patch was or will be approved.</p>
   * @public
   */
  PatchStatus?: PatchStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePatchesForPatchBaselineResult {
  /**
   * <p>An array of patches and patch status.</p>
   * @public
   */
  EffectivePatches?: EffectivePatch[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAssociationsStatusRequest {
  /**
   * <p>The managed node IDs for which you want association status information.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the
 *    results of this request.</p>
 * @public
 */
export interface S3OutputUrl {
  /**
   * <p>A URL for an S3 bucket where you want to store the results of this request.</p>
   * @public
   */
  OutputUrl?: string | undefined;
}

/**
 * <p>The URL of S3 bucket where you want to store the results of this request.</p>
 * @public
 */
export interface InstanceAssociationOutputUrl {
  /**
   * <p>The URL of S3 bucket where you want to store the results of this request.</p>
   * @public
   */
  S3OutputUrl?: S3OutputUrl | undefined;
}

/**
 * <p>Status information about the association.</p>
 * @public
 */
export interface InstanceAssociationStatusInfo {
  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The name of the association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The association document versions.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The version of the association applied to the managed node.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>The managed node ID where the association was created.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The date the association ran. </p>
   * @public
   */
  ExecutionDate?: Date | undefined;

  /**
   * <p>Status information about the association.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Detailed status information about the association.</p>
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * <p>Summary information about association execution.</p>
   * @public
   */
  ExecutionSummary?: string | undefined;

  /**
   * <p>An error code returned by the request to create the association.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A URL for an S3 bucket where you want to store the results of this request.</p>
   * @public
   */
  OutputUrl?: InstanceAssociationOutputUrl | undefined;

  /**
   * <p>The name of the association applied to the managed node.</p>
   * @public
   */
  AssociationName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAssociationsStatusResult {
  /**
   * <p>Status information about the association.</p>
   * @public
   */
  InstanceAssociationStatusInfos?: InstanceAssociationStatusInfo[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filters to describe or get information about your managed nodes.</p>
 * @public
 */
export interface InstanceInformationStringFilter {
  /**
   * <p>The filter key name to describe your managed nodes.</p>
   *          <p>Valid filter key values: ActivationIds | AgentVersion | AssociationStatus | IamRole |
   *    InstanceIds | PingStatus | PlatformType | ResourceType | SourceIds | SourceTypes | "tag-key" |
   *     "tag:<code>\{keyname\}</code>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Valid values for the <code>AssociationStatus</code> filter key: Success | Pending |
   *      Failed</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>PingStatus</code> filter key: Online | ConnectionLost |
   *      Inactive (deprecated)</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>PlatformType</code> filter key: Windows | Linux | MacOS</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>ResourceType</code> filter key: EC2Instance |
   *      ManagedInstance</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>SourceType</code> filter key: AWS::EC2::Instance |
   *      AWS::SSM::ManagedInstance | AWS::IoT::Thing</p>
   *             </li>
   *             <li>
   *                <p>Valid tag examples: <code>Key=tag-key,Values=Purpose</code> |
   *       <code>Key=tag:Purpose,Values=Test</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Describes a filter for a specific list of managed nodes. You can filter node information by
 *    using tags. You specify tags by using a key-value mapping.</p>
 *          <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The
 *     <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags.
 *   </p>
 * @public
 */
export interface InstanceInformationFilter {
  /**
   * <p>The name of the filter. </p>
   * @public
   */
  key: InstanceInformationFilterKey | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  valueSet: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceInformationRequest {
  /**
   * <p>This is a legacy method. We recommend that you don't use this method. Instead, use the
   *     <code>Filters</code> data type. <code>Filters</code> enables you to return node information by
   *    filtering based on tags applied to managed nodes.</p>
   *          <note>
   *             <p>Attempting to use <code>InstanceInformationFilterList</code> and <code>Filters</code> leads
   *     to an exception error. </p>
   *          </note>
   * @public
   */
  InstanceInformationFilterList?: InstanceInformationFilter[] | undefined;

  /**
   * <p>One or more filters. Use a filter to return a more specific list of managed nodes. You can
   *    filter based on tags applied to your managed nodes. Tag filters can't be combined with other
   *    filter types. Use this <code>Filters</code> data type instead of
   *     <code>InstanceInformationFilterList</code>, which is deprecated.</p>
   * @public
   */
  Filters?: InstanceInformationStringFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results. The default value is 10 items.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Status information about the aggregated associations.</p>
 * @public
 */
export interface InstanceAggregatedAssociationOverview {
  /**
   * <p>Detailed status information about the aggregated associations.</p>
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * <p>The number of associations for the managed nodes.</p>
   * @public
   */
  InstanceAssociationStatusAggregatedCount?: Record<string, number> | undefined;
}

/**
 * <p>Describes a filter for a specific list of managed nodes. </p>
 * @public
 */
export interface InstanceInformation {
  /**
   * <p>The managed node ID. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Connection status of SSM Agent. </p>
   *          <note>
   *             <p>The status <code>Inactive</code> has been deprecated and is no longer in use.</p>
   *          </note>
   * @public
   */
  PingStatus?: PingStatus | undefined;

  /**
   * <p>The date and time when the agent last pinged the Systems Manager service. </p>
   * @public
   */
  LastPingDateTime?: Date | undefined;

  /**
   * <p>The version of SSM Agent running on your Linux managed node. </p>
   * @public
   */
  AgentVersion?: string | undefined;

  /**
   * <p>Indicates whether the latest version of SSM Agent is running on your Linux managed node. This
   *    field doesn't indicate whether or not the latest version is installed on Windows managed nodes,
   *    because some older versions of Windows Server use the EC2Config service to process Systems Manager
   *    requests.</p>
   * @public
   */
  IsLatestVersion?: boolean | undefined;

  /**
   * <p>The operating system platform type.</p>
   * @public
   */
  PlatformType?: PlatformType | undefined;

  /**
   * <p>The name of the operating system platform running on your managed node. </p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>The version of the OS platform running on your managed node. </p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>The activation ID created by Amazon Web Services Systems Manager when the server or virtual machine (VM) was
   *    registered.</p>
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * <p>The role assigned to an Amazon EC2 instance configured with a Systems Manager
   *    Quick Setup host management configuration or the role assigned to an on-premises managed
   *    node.</p>
   *          <p> This call doesn't return the IAM role for <i>unmanaged</i>
   *    Amazon EC2 instances (instances not configured for Systems Manager). To retrieve the
   *    role for an unmanaged instance, use the Amazon EC2 <code>DescribeInstances</code> operation. For
   *    information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the
   *     <i>Amazon EC2 API Reference</i> or <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html">describe-instances</a> in the
   *     <i>Amazon Web Services CLI Command Reference</i>.</p>
   * @public
   */
  IamRole?: string | undefined;

  /**
   * <p>The date the server or VM was registered with Amazon Web Services as a managed node.</p>
   * @public
   */
  RegistrationDate?: Date | undefined;

  /**
   * <p>The type of instance. Instances are either EC2 instances or managed instances. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The name assigned to an on-premises server, edge device, or virtual machine (VM) when it is
   *    activated as a Systems Manager managed node. The name is specified as the <code>DefaultInstanceName</code>
   *    property using the <a>CreateActivation</a> command. It is applied to the managed node
   *    by specifying the Activation Code and Activation ID when you install SSM Agent on the node, as
   *    explained in <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-ssm-agent-install-linux.html">How to
   *     install SSM Agent on hybrid Linux nodes</a> and <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-ssm-agent-install-windows.html">How to
   *     install SSM Agent on hybrid Windows Server nodes</a>. To retrieve the <code>Name</code> tag
   *    of an EC2 instance, use the Amazon EC2 <code>DescribeInstances</code> operation. For information, see
   *     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the <i>Amazon EC2 API Reference</i> or <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html">describe-instances</a> in the <i>Amazon Web Services CLI Command Reference</i>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The IP address of the managed node.</p>
   * @public
   */
  IPAddress?: string | undefined;

  /**
   * <p>The fully qualified host name of the managed node.</p>
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  AssociationStatus?: string | undefined;

  /**
   * <p>The date the association was last run.</p>
   * @public
   */
  LastAssociationExecutionDate?: Date | undefined;

  /**
   * <p>The last date the association was successfully run.</p>
   * @public
   */
  LastSuccessfulAssociationExecutionDate?: Date | undefined;

  /**
   * <p>Information about the association.</p>
   * @public
   */
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;

  /**
   * <p>The ID of the source resource. For IoT Greengrass devices, <code>SourceId</code> is
   *    the Thing name. </p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The type of the source resource. For IoT Greengrass devices, <code>SourceType</code>
   *    is <code>AWS::IoT::Thing</code>. </p>
   * @public
   */
  SourceType?: SourceType | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceInformationResult {
  /**
   * <p>The managed node information list.</p>
   * @public
   */
  InstanceInformationList?: InstanceInformation[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchesRequest {
  /**
   * <p>The ID of the managed node whose patch state information should be retrieved.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>Supported keys for <code>DescribeInstancePatches</code>include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Classification</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Security</code> | <code>SecurityUpdates</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>KBId</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>KB4480056</code> | <code>java-1.7.0-openjdk.x86_64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Severity</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Important</code> | <code>Medium</code> | <code>Low</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>State</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Installed</code> | <code>InstalledOther</code> |
   *       <code>InstalledPendingReboot</code>
   *                </p>
   *                <p>For lists of all <code>State</code> values, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-compliance-states.html">Patch compliance
   *       state values</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about the state of a patch on a particular managed node as it relates to the
 *    patch baseline used to patch the node.</p>
 * @public
 */
export interface PatchComplianceData {
  /**
   * <p>The title of the patch.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The operating system-specific ID of the patch.</p>
   * @public
   */
  KBId: string | undefined;

  /**
   * <p>The classification of the patch, such as <code>SecurityUpdates</code>, <code>Updates</code>,
   *    and <code>CriticalUpdates</code>.</p>
   * @public
   */
  Classification: string | undefined;

  /**
   * <p>The severity of the patch such as <code>Critical</code>, <code>Important</code>, and
   *     <code>Moderate</code>.</p>
   * @public
   */
  Severity: string | undefined;

  /**
   * <p>The state of the patch on the managed node, such as INSTALLED or FAILED.</p>
   *          <p>For descriptions of each patch state, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/compliance-about.html#compliance-monitor-patch">About
   *     patch compliance</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  State: PatchComplianceDataState | undefined;

  /**
   * <p>The date/time the patch was installed on the managed node. Not all operating systems provide
   *    this level of information.</p>
   * @public
   */
  InstalledTime: Date | undefined;

  /**
   * <p>The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by
   *    the patch.</p>
   *          <note>
   *             <p>Currently, CVE ID values are reported only for patches with a status of
   *      <code>Missing</code> or <code>Failed</code>.</p>
   *          </note>
   * @public
   */
  CVEIds?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchesResult {
  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <ul>
   *             <li>
   *                <p>Title (string)</p>
   *             </li>
   *             <li>
   *                <p>KBId (string)</p>
   *             </li>
   *             <li>
   *                <p>Classification (string)</p>
   *             </li>
   *             <li>
   *                <p>Severity (string)</p>
   *             </li>
   *             <li>
   *                <p>State (string, such as "INSTALLED" or "FAILED")</p>
   *             </li>
   *             <li>
   *                <p>InstalledTime (DateTime)</p>
   *             </li>
   *             <li>
   *                <p>InstalledBy (string)</p>
   *             </li>
   *          </ul>
   * @public
   */
  Patches?: PatchComplianceData[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesRequest {
  /**
   * <p>The ID of the managed node for which patch state information should be retrieved.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of managed nodes to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Defines the high-level patch compliance state for a managed node, providing information
 *    about the number of installed, missing, not applicable, and failed patches along with metadata
 *    about the operation when this information was gathered for the managed node.</p>
 * @public
 */
export interface InstancePatchState {
  /**
   * <p>The ID of the managed node the high-level patch compliance information was collected
   *    for.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the patch group the managed node belongs to.</p>
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * <p>The ID of the patch baseline used to patch the managed node.</p>
   * @public
   */
  BaselineId: string | undefined;

  /**
   * <p>The ID of the patch baseline snapshot used during the patching operation when this
   *    compliance data was collected.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>An https URL or an Amazon Simple Storage Service (Amazon S3) path-style URL to a list of
   *    patches to be installed. This patch installation list, which you maintain in an S3 bucket in YAML
   *    format and specify in the SSM document <code>AWS-RunPatchBaseline</code>, overrides the patches
   *    specified by the default patch baseline.</p>
   *          <p>For more information about the <code>InstallOverrideList</code> parameter, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html">SSM Command
   *     document for patching: <code>AWS-RunPatchBaseline</code>
   *             </a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  InstallOverrideList?: string | undefined;

  /**
   * <p>Placeholder information. This field will always be empty in the current release of the
   *    service.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The number of patches from the patch baseline that are installed on the managed node.</p>
   * @public
   */
  InstalledCount?: number | undefined;

  /**
   * <p>The number of patches not specified in the patch baseline that are installed on the managed
   *    node.</p>
   * @public
   */
  InstalledOtherCount?: number | undefined;

  /**
   * <p>The number of patches installed by Patch Manager since the last time the managed node was
   *    rebooted.</p>
   * @public
   */
  InstalledPendingRebootCount?: number | undefined;

  /**
   * <p>The number of patches installed on a managed node that are specified in a
   *     <code>RejectedPatches</code> list. Patches with a status of <code>InstalledRejected</code> were
   *    typically installed before they were added to a <code>RejectedPatches</code> list.</p>
   *          <note>
   *             <p>If <code>ALLOW_AS_DEPENDENCY</code> is the specified option for
   *      <code>RejectedPatchesAction</code>, the value of <code>InstalledRejectedCount</code> will
   *     always be <code>0</code> (zero).</p>
   *          </note>
   * @public
   */
  InstalledRejectedCount?: number | undefined;

  /**
   * <p>The number of patches from the patch baseline that are applicable for the managed node but
   *    aren't currently installed.</p>
   * @public
   */
  MissingCount?: number | undefined;

  /**
   * <p>The number of patches from the patch baseline that were attempted to be installed during the
   *    last patching operation, but failed to install.</p>
   * @public
   */
  FailedCount?: number | undefined;

  /**
   * <p>The number of patches beyond the supported limit of <code>NotApplicableCount</code> that
   *    aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  UnreportedNotApplicableCount?: number | undefined;

  /**
   * <p>The number of patches from the patch baseline that aren't applicable for the managed node
   *    and therefore aren't installed on the node. This number may be truncated if the list of patch
   *    names is very large. The number of patches beyond this limit are reported in
   *     <code>UnreportedNotApplicableCount</code>.</p>
   * @public
   */
  NotApplicableCount?: number | undefined;

  /**
   * <p>The number of security-related patches that are available but not approved because they
   *    didn't meet the patch baseline requirements. For example, an updated version of a patch might
   *    have been released before the specified auto-approval period was over.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdateCount?: number | undefined;

  /**
   * <p>The time the most recent patching operation was started on the managed node.</p>
   * @public
   */
  OperationStartTime: Date | undefined;

  /**
   * <p>The time the most recent patching operation completed on the managed node.</p>
   * @public
   */
  OperationEndTime: Date | undefined;

  /**
   * <p>The type of patching operation that was performed: or </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCAN</code> assesses the patch compliance state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTALL</code> installs missing patches.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Operation: PatchOperationType | undefined;

  /**
   * <p>The time of the last attempt to patch the managed node with <code>NoReboot</code> specified
   *    as the reboot option.</p>
   * @public
   */
  LastNoRebootInstallOperationTime?: Date | undefined;

  /**
   * <p>Indicates the reboot option specified in the patch baseline.</p>
   *          <note>
   *             <p>Reboot options apply to <code>Install</code> operations only. Reboots aren't attempted for
   *     Patch Manager <code>Scan</code> operations.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RebootIfNeeded</code>: Patch Manager tries to reboot the managed node if it
   *      installed any patches, or if any patches are detected with a status of
   *       <code>InstalledPendingReboot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoReboot</code>: Patch Manager attempts to install missing packages without trying
   *      to reboot the system. Patches installed with this option are assigned a status of
   *       <code>InstalledPendingReboot</code>. These patches might not be in effect until a reboot is
   *      performed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RebootOption?: RebootOption | undefined;

  /**
   * <p>The number of patches per node that are specified as <code>Critical</code> for compliance
   *    reporting in the patch baseline aren't installed. These patches might be missing, have failed
   *    installation, were rejected, or were installed but awaiting a required managed node reboot. The
   *    status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  CriticalNonCompliantCount?: number | undefined;

  /**
   * <p>The number of patches per node that are specified as <code>Security</code> in a patch
   *    advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required managed node reboot. The status of these
   *    managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  SecurityNonCompliantCount?: number | undefined;

  /**
   * <p>The number of patches per node that are specified as other than <code>Critical</code> or
   *     <code>Security</code> but aren't compliant with the patch baseline. The status of these managed
   *    nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  OtherNonCompliantCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesResult {
  /**
   * <p>The high-level patch state for the requested managed nodes.</p>
   * @public
   */
  InstancePatchStates?: InstancePatchState[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope
 *    down the information returned by the API.</p>
 *          <p>
 *             <b>Example</b>: To filter for all managed nodes in a patch group
 *    having more than three patches with a <code>FailedCount</code> status, use the following for the
 *    filter:</p>
 *          <ul>
 *             <li>
 *                <p>Value for <code>Key</code>: <code>FailedCount</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Value for <code>Type</code>: <code>GreaterThan</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Value for <code>Values</code>: <code>3</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface InstancePatchStateFilter {
  /**
   * <p>The key for the filter. Supported values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InstalledCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstalledOtherCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstalledPendingRebootCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstalledRejectedCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MissingCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FailedCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnreportedNotApplicableCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotApplicableCount</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the filter. Must be an integer greater than or equal to 0.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The type of comparison that should be performed for the value.</p>
   * @public
   */
  Type: InstancePatchStateOperatorType | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * <p>The name of the patch group for which the patch state information should be
   *    retrieved.</p>
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <ul>
   *             <li>
   *                <p>Key (string between 1 and 200 characters)</p>
   *             </li>
   *             <li>
   *                <p>Values (array containing a single string)</p>
   *             </li>
   *             <li>
   *                <p>Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: InstancePatchStateFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesForPatchGroupResult {
  /**
   * <p>The high-level patch state for the requested managed nodes. </p>
   * @public
   */
  InstancePatchStates?: InstancePatchState[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filters to describe or get information about your managed nodes.</p>
 * @public
 */
export interface InstancePropertyStringFilter {
  /**
   * <p>The filter key name to describe your managed nodes.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The filter key name to describe your managed nodes.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call.</p>
   * @public
   */
  Operator?: InstancePropertyFilterOperator | undefined;
}

/**
 * <p>Describes a filter for a specific list of managed nodes. You can filter node information by
 *    using tags. You specify tags by using a key-value mapping.</p>
 * @public
 */
export interface InstancePropertyFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  key: InstancePropertyFilterKey | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  valueSet: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePropertiesRequest {
  /**
   * <p>An array of instance property filters.</p>
   * @public
   */
  InstancePropertyFilterList?: InstancePropertyFilter[] | undefined;

  /**
   * <p>The request filters to use with the operator.</p>
   * @public
   */
  FiltersWithOperator?: InstancePropertyStringFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for the call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token provided by a previous request to use to return the next set of properties.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object containing various properties of a managed node.</p>
 * @public
 */
export interface InstanceProperty {
  /**
   * <p>The value of the EC2 <code>Name</code> tag associated with the node. If a <code>Name</code>
   *    tag hasn't been applied to the node, this value is blank.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the managed node.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type of the managed node. For example, t3.large.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The instance profile attached to the node. If an instance profile isn't attached to the
   *    node, this value is blank.</p>
   * @public
   */
  InstanceRole?: string | undefined;

  /**
   * <p>The name of the key pair associated with the node. If a key pair isnt't associated with the
   *    node, this value is blank.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The current state of the node.</p>
   * @public
   */
  InstanceState?: string | undefined;

  /**
   * <p>The CPU architecture of the node. For example, <code>x86_64</code>.</p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>The public IPv4 address assigned to the node. If a public IPv4 address isn't assigned to the
   *    node, this value is blank.</p>
   * @public
   */
  IPAddress?: string | undefined;

  /**
   * <p>The timestamp for when the node was launched.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>Connection status of the SSM Agent on the managed node.</p>
   * @public
   */
  PingStatus?: PingStatus | undefined;

  /**
   * <p>The date and time when the SSM Agent last pinged the Systems Manager service.</p>
   * @public
   */
  LastPingDateTime?: Date | undefined;

  /**
   * <p>The version of SSM Agent running on your managed node.</p>
   * @public
   */
  AgentVersion?: string | undefined;

  /**
   * <p>The operating system platform type of the managed node. For example, Windows Server or
   *     Amazon Linux 2.</p>
   * @public
   */
  PlatformType?: PlatformType | undefined;

  /**
   * <p>The name of the operating system platform running on your managed node.</p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>The version of the OS platform running on your managed node.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>The activation ID created by Systems Manager when the server or virtual machine (VM) was
   *    registered</p>
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * <p>The IAM role used in the hybrid activation to register the node with
   *    Systems Manager.</p>
   * @public
   */
  IamRole?: string | undefined;

  /**
   * <p>The date the node was registered with Systems Manager.</p>
   * @public
   */
  RegistrationDate?: Date | undefined;

  /**
   * <p>The type of managed node.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The fully qualified host name of the managed node.</p>
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * <p>The status of the State Manager association applied to the managed node.</p>
   * @public
   */
  AssociationStatus?: string | undefined;

  /**
   * <p>The date the association was last run.</p>
   * @public
   */
  LastAssociationExecutionDate?: Date | undefined;

  /**
   * <p>The last date the association was successfully run.</p>
   * @public
   */
  LastSuccessfulAssociationExecutionDate?: Date | undefined;

  /**
   * <p>Status information about the aggregated associations.</p>
   * @public
   */
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;

  /**
   * <p>The ID of the source resource.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The type of the source resource.</p>
   * @public
   */
  SourceType?: SourceType | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePropertiesResult {
  /**
   * <p>Properties for the managed instances.</p>
   * @public
   */
  InstanceProperties?: InstanceProperty[] | undefined;

  /**
   * <p>The token for the next set of properties to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInventoryDeletionsRequest {
  /**
   * <p>Specify the delete inventory ID for which you want information. This ID was returned by the
   *     <code>DeleteInventory</code> operation.</p>
   * @public
   */
  DeletionId?: string | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Status information returned by the <code>DeleteInventory</code> operation.</p>
 * @public
 */
export interface InventoryDeletionStatusItem {
  /**
   * <p>The deletion ID returned by the <code>DeleteInventory</code> operation.</p>
   * @public
   */
  DeletionId?: string | undefined;

  /**
   * <p>The name of the inventory data type.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The UTC timestamp when the delete operation started.</p>
   * @public
   */
  DeletionStartTime?: Date | undefined;

  /**
   * <p>The status of the operation. Possible values are InProgress and Complete.</p>
   * @public
   */
  LastStatus?: InventoryDeletionStatus | undefined;

  /**
   * <p>Information about the status.</p>
   * @public
   */
  LastStatusMessage?: string | undefined;

  /**
   * <p>Information about the delete operation. For more information about this summary, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-custom.html#delete-custom-inventory">Understanding the delete inventory summary</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  DeletionSummary?: InventoryDeletionSummary | undefined;

  /**
   * <p>The UTC timestamp of when the last status report.</p>
   * @public
   */
  LastStatusUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeInventoryDeletionsResult {
  /**
   * <p>A list of status items for deleted inventory.</p>
   * @public
   */
  InventoryDeletions?: InventoryDeletionStatusItem[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filter used in the request. Supported filter keys depend on the API operation that includes
 *    the filter. API operations that use <code>MaintenanceWindowFilter></code> include the
 *    following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowExecutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowExecutionTaskInvocations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowExecutionTasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindows</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowTargets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowTasks</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface MaintenanceWindowFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionsRequest {
  /**
   * <p>The ID of the maintenance window whose executions should be retrieved.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <ul>
   *             <li>
   *                <p>Key. A string between 1 and 128 characters. Supported keys include
   *       <code>ExecutedBefore</code> and <code>ExecutedAfter</code>.</p>
   *             </li>
   *             <li>
   *                <p>Values. An array of strings, each between 1 and 256 characters. Supported values are
   *      date/time strings in a valid ISO 8601 date/time format, such as
   *       <code>2024-11-04T05:00:00Z</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the information about an execution of a maintenance window. </p>
 * @public
 */
export interface MaintenanceWindowExecution {
  /**
   * <p>The ID of the maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The ID of the maintenance window execution.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The status of the execution.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the execution started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the execution finished.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionsResult {
  /**
   * <p>Information about the maintenance window executions.</p>
   * @public
   */
  WindowExecutions?: MaintenanceWindowExecution[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * <p>The ID of the maintenance window execution the task is part of.</p>
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>Optional filters used to scope down the returned task invocations. The supported filter key
   *    is <code>STATUS</code> with the corresponding values <code>PENDING</code>,
   *     <code>IN_PROGRESS</code>, <code>SUCCESS</code>, <code>FAILED</code>, <code>TIMED_OUT</code>,
   *     <code>CANCELLING</code>, and <code>CANCELLED</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the information about a task invocation for a particular target as part of a task
 *    execution performed as part of a maintenance window execution.</p>
 * @public
 */
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * <p>The ID of the task invocation.</p>
   * @public
   */
  InvocationId?: string | undefined;

  /**
   * <p>The ID of the action performed in the service that actually handled the task invocation. If
   *    the task type is <code>RUN_COMMAND</code>, this value is the command ID.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The task type.</p>
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The parameters that were provided for the invocation when it was run.</p>
   * @public
   */
  Parameters?: string | undefined;

  /**
   * <p>The status of the task invocation.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status of the task invocation. Not available for all status
   *    values. </p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the invocation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the invocation finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>User-provided value that was specified when the target was registered with the maintenance
   *    window. This was also included in any Amazon CloudWatch Events events raised during the task
   *    invocation.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The ID of the target definition in this maintenance window the invocation was performed
   *    for.</p>
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  /**
   * <p>Information about the task invocation results per invocation.</p>
   * @public
   */
  WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * <p>The ID of the maintenance window execution whose task executions should be retrieved.</p>
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>Optional filters used to scope down the returned tasks. The supported filter key is
   *     <code>STATUS</code> with the corresponding values <code>PENDING</code>,
   *    <code>IN_PROGRESS</code>, <code>SUCCESS</code>, <code>FAILED</code>, <code>TIMED_OUT</code>,
   *     <code>CANCELLING</code>, and <code>CANCELLED</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a task execution performed as part of a maintenance window
 *    execution.</p>
 * @public
 */
export interface MaintenanceWindowExecutionTaskIdentity {
  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * <p>The status of the task execution.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status of the task execution. Not available for all status
   *    values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the task execution started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the task execution finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that ran.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The type of task that ran.</p>
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The details for the CloudWatch alarm applied to your maintenance window task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarm that was invoked by the maintenance window task.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTasksResult {
  /**
   * <p>Information about the task executions.</p>
   * @public
   */
  WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsRequest {
  /**
   * <p>Optional filters used to narrow down the scope of the returned maintenance windows.
   *    Supported filter keys are <code>Name</code> and <code>Enabled</code>. For example,
   *     <code>Name=MyMaintenanceWindow</code> and <code>Enabled=True</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the maintenance window.</p>
 * @public
 */
export interface MaintenanceWindowIdentity {
  /**
   * <p>The ID of the maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the maintenance window.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format.</p>
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   * @public
   */
  NextExecutionTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsResult {
  /**
   * <p>Information about the maintenance windows.</p>
   * @public
   */
  WindowIdentities?: MaintenanceWindowIdentity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowScheduleRequest {
  /**
   * <p>The ID of the maintenance window to retrieve information about.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The managed node ID or key-value pair to retrieve information about.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The type of resource you want to retrieve information about. For example,
   *     <code>INSTANCE</code>.</p>
   * @public
   */
  ResourceType?: MaintenanceWindowResourceType | undefined;

  /**
   * <p>Filters used to limit the range of results. For example, you can limit maintenance window
   *    executions to only those scheduled before or after a certain date and time.</p>
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a scheduled execution for a maintenance window.</p>
 * @public
 */
export interface ScheduledWindowExecution {
  /**
   * <p>The ID of the maintenance window to be run.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window to be run.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be
   *    run.</p>
   * @public
   */
  ExecutionTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowScheduleResult {
  /**
   * <p>Information about maintenance window executions scheduled for the specified time
   *    range.</p>
   * @public
   */
  ScheduledWindowExecutions?: ScheduledWindowExecution[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsForTargetRequest {
  /**
   * <p>The managed node ID or key-value pair to retrieve information about.</p>
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * <p>The type of resource you want to retrieve information about. For example,
   *     <code>INSTANCE</code>.</p>
   * @public
   */
  ResourceType: MaintenanceWindowResourceType | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The maintenance window to which the specified target belongs.</p>
 * @public
 */
export interface MaintenanceWindowIdentityForTarget {
  /**
   * <p>The ID of the maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsForTargetResult {
  /**
   * <p>Information about the maintenance window targets and tasks a managed node is associated
   *    with.</p>
   * @public
   */
  WindowIdentities?: MaintenanceWindowIdentityForTarget[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTargetsRequest {
  /**
   * <p>The ID of the maintenance window whose targets should be retrieved.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>Optional filters that can be used to narrow down the scope of the returned window targets.
   *    The supported filter keys are <code>Type</code>, <code>WindowTargetId</code>, and
   *     <code>OwnerInformation</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The target registered with the maintenance window.</p>
 * @public
 */
export interface MaintenanceWindowTarget {
  /**
   * <p>The ID of the maintenance window to register the target with.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The ID of the target.</p>
   * @public
   */
  WindowTargetId?: string | undefined;

  /**
   * <p>The type of target that is being registered with the maintenance window.</p>
   * @public
   */
  ResourceType?: MaintenanceWindowResourceType | undefined;

  /**
   * <p>The targets, either managed nodes or tags.</p>
   *          <p>Specify managed nodes using the following format:</p>
   *          <p>
   *             <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>
   *          </p>
   *          <p>Tags are specified using the following format:</p>
   *          <p>
   *             <code>Key=<tag name>,Values=<tag value></code>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A user-provided value that will be included in any Amazon CloudWatch Events events that are
   *    raised while running tasks for these targets in this maintenance window.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The name for the maintenance window target.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description for the target.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTargetsResult {
  /**
   * <p>Information about the targets in the maintenance window.</p>
   * @public
   */
  Targets?: MaintenanceWindowTarget[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTasksRequest {
  /**
   * <p>The ID of the maintenance window whose tasks should be retrieved.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>Optional filters used to narrow down the scope of the returned tasks. The supported filter
   *    keys are <code>WindowTaskId</code>, <code>TaskArn</code>, <code>Priority</code>, and
   *     <code>TaskType</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed
 *    node-level logs to.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *          </note>
 * @public
 */
export interface LoggingInfo {
  /**
   * <p>The name of an S3 bucket where execution logs are stored.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>(Optional) The S3 bucket subfolder. </p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the S3 bucket is located.</p>
   * @public
   */
  S3Region: string | undefined;
}

/**
 * <p>Defines the values for a task parameter.</p>
 * @public
 */
export interface MaintenanceWindowTaskParameterValueExpression {
  /**
   * <p>This field contains an array of 0 or more strings, each 1 to 255 characters in
   *    length.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Information about a task defined for a maintenance window.</p>
 * @public
 */
export interface MaintenanceWindowTask {
  /**
   * <p>The ID of the maintenance window where the task is registered.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The task ID.</p>
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * <p>The resource that the task uses during execution. For <code>RUN_COMMAND</code> and
   *     <code>AUTOMATION</code> task types, <code>TaskArn</code> is the Amazon Web Services Systems Manager (SSM document) name or
   *    ARN. For <code>LAMBDA</code> tasks, it's the function name or ARN. For
   *     <code>STEP_FUNCTIONS</code> tasks, it's the state machine ARN.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The type of task.</p>
   * @public
   */
  Type?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The targets (either managed nodes or tags). Managed nodes are specified using
   *     <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>. Tags are specified
   *    using <code>Key=<tag name>,Values=<tag value></code>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * <p>The priority of the task in the maintenance window. The lower the number, the higher the
   *    priority. Tasks that have the same priority are scheduled in parallel.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>Information about an S3 bucket to write task-level logs to.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for
   *                 Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a
   *                 service role ARN, Systems Manager uses a service-linked role in your account. If no
   *                 appropriate service-linked role for Systems Manager exists in your account, it is created when
   *                 you run <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>However, for an improved security posture, we strongly recommend creating a custom
   *                 policy and custom service role for running your maintenance window tasks. The policy
   *                 can be crafted to provide only the permissions needed for your particular
   *                 maintenance window tasks. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html">Setting up Maintenance Windows</a> in the in the
   *                     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>The maximum number of targets this task can be run for, in parallel.</p>
   *          <note>
   *             <p>Although this element is listed as "Required: No", a value can be omitted only when you are
   *     registering or updating a <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">targetless
   *      task</a> You must provide a value in all other cases.</p>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   *          <note>
   *             <p>Although this element is listed as "Required: No", a value can be omitted only when you are
   *     registering or updating a <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">targetless
   *      task</a> You must provide a value in all other cases.</p>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The task name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The specification for whether tasks should continue to run after the cutoff time specified
   *    in the maintenance windows is reached. </p>
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * <p>The details for the CloudWatch alarm applied to your maintenance window task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTasksResult {
  /**
   * <p>Information about the tasks in the maintenance window.</p>
   * @public
   */
  Tasks?: MaintenanceWindowTask[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes an OpsItem filter.</p>
 * @public
 */
export interface OpsItemFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: OpsItemFilterKey | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call.</p>
   * @public
   */
  Operator: OpsItemFilterOperator | undefined;
}

/**
 * @public
 */
export interface DescribeOpsItemsRequest {
  /**
   * <p>One or more filters to limit the response.</p>
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
   *                <p>Key: Title*</p>
   *                <p>Operations: Equals,Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalData**</p>
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
   *             <li>
   *                <p>Key: AccountId</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *          </ul>
   *          <p>*The Equals operator for Title matches the first 100 characters. If you specify more than
   *    100 characters, they system returns an error that the filter value exceeds the length
   *    limit.</p>
   *          <p>**If you filter the response by using the OperationalData operator, specify a key-value pair
   *    by using the following JSON format: \{"key":"key_name","value":"a_value"\}</p>
   * @public
   */
  OpsItemFilters?: OpsItemFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A count of OpsItems.</p>
 * @public
 */
export interface OpsItemSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the
   *    OpsItem.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time the OpsItem was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the
   *    OpsItem.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The impacted Amazon Web Services resource.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The OpsItem status.</p>
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * <p>The ID of the OpsItem.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *   </p>
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * <p>A list of OpsItems by category.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>A list of OpsItems by severity.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The type of OpsItem. Systems Manager supports the following types of OpsItems:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/aws/issue</code>
   *                </p>
   *                <p>This type of OpsItem is used for default OpsItems created by OpsCenter. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/changerequest</code>
   *                </p>
   *                <p>This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change
   *      requests. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/insight</code>
   *                </p>
   *                <p>This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate
   *      OpsItems. </p>
   *             </li>
   *          </ul>
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * <p>The time a runbook workflow started. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * <p>The time a runbook workflow ended. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to start. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to end. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOpsItemsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of OpsItems.</p>
   * @public
   */
  OpsItemSummaries?: OpsItemSummary[] | undefined;
}

/**
 * <p>This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.</p>
 * @public
 */
export interface ParametersFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: ParametersFilterKey | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 * @public
 */
export interface ParameterStringFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API operations.
   *    However, not all of the pattern values listed for <code>Key</code> can be used with both
   *    operations.</p>
   *          <p>For <code>DescribeParameters</code>, all of the listed patterns are valid except
   *     <code>Label</code>.</p>
   *          <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code>
   *    aren't valid: <code>tag</code>, <code>DataType</code>, <code>Name</code>, <code>Path</code>, and
   *     <code>Tier</code>.</p>
   *          <p>For examples of Amazon Web Services CLI commands demonstrating valid parameter filter constructions, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>For all filters used with <a>DescribeParameters</a>, valid options include
   *     <code>Equals</code> and <code>BeginsWith</code>. The <code>Name</code> filter additionally
   *    supports the <code>Contains</code> option. (Exception: For filters using the key
   *     <code>Path</code>, valid options include <code>Recursive</code> and
   *    <code>OneLevel</code>.)</p>
   *          <p>For filters used with <a>GetParametersByPath</a>, valid options include
   *     <code>Equals</code> and <code>BeginsWith</code>. (Exception: For filters using
   *     <code>Label</code> as the Key name, the only valid option is <code>Equals</code>.)</p>
   * @public
   */
  Option?: string | undefined;

  /**
   * <p>The value you want to search for.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * <p>This data type is deprecated. Instead, use <code>ParameterFilters</code>.</p>
   * @public
   */
  Filters?: ParametersFilter[] | undefined;

  /**
   * <p>Filters to limit the request results.</p>
   * @public
   */
  ParameterFilters?: ParameterStringFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists parameters that are shared with you.</p>
   *          <note>
   *             <p>By default when using this option, the command returns parameters that have been shared
   *     using a standard Resource Access Manager Resource Share. In order for a parameter that was shared
   *     using the <a>PutResourcePolicy</a> command to be returned, the associated
   *       <code>RAM Resource Share Created From Policy</code> must have been promoted to
   *     a standard Resource Share using the RAM
   *     <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> API operation.</p>
   *             <p>For more information about sharing parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
   *      shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   * @public
   */
  Shared?: boolean | undefined;
}

/**
 * <p>One or more policies assigned to a parameter.</p>
 * @public
 */
export interface ParameterInlinePolicy {
  /**
   * <p>The JSON text of the policy.</p>
   * @public
   */
  PolicyText?: string | undefined;

  /**
   * <p>The type of policy. Parameter Store, a tool in Amazon Web Services Systems Manager, supports the following policy
   *    types: Expiration, ExpirationNotification, and NoChangeNotification. </p>
   * @public
   */
  PolicyType?: string | undefined;

  /**
   * <p>The status of the policy. Policies report the following statuses: Pending (the policy hasn't
   *    been enforced or applied yet), Finished (the policy was applied), Failed (the policy wasn't
   *    applied), or InProgress (the policy is being applied now). </p>
   * @public
   */
  PolicyStatus?: string | undefined;
}

/**
 * <p>Metadata includes information like the Amazon Resource Name (ARN) of the last user to update
 *    the parameter and the date and time the parameter was last used.</p>
 * @public
 */
export interface ParameterMetadata {
  /**
   * <p>The parameter name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The type of parameter. Valid parameter types include the following: <code>String</code>,
   *     <code>StringList</code>, and <code>SecureString</code>.</p>
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The alias of the Key Management Service (KMS) key used to encrypt the
   *    parameter. Applies to <code>SecureString</code> parameters only.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</p>
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * <p>Description of the parameter actions.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A parameter name can include only the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * <p>The parameter version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The parameter tier.</p>
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * <p>A list of policies associated with a parameter.</p>
   * @public
   */
  Policies?: ParameterInlinePolicy[] | undefined;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResult {
  /**
   * <p>Parameters returned by the request.</p>
   * @public
   */
  Parameters?: ParameterMetadata[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchBaselinesRequest {
  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>Supported keys for <code>DescribePatchBaselines</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NAME_PREFIX</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AWS-</code> | <code>My-</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OWNER</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AWS</code> | <code>Self</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OPERATING_SYSTEM</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AMAZON_LINUX</code> | <code>SUSE</code> | <code>WINDOWS</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The maximum number of patch baselines to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines the basic information about a patch baseline.</p>
 * @public
 */
export interface PatchBaselineIdentity {
  /**
   * <p>The ID of the patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  BaselineName?: string | undefined;

  /**
   * <p>Defines the operating system the patch baseline applies to. The default value is
   *     <code>WINDOWS</code>. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>The description of the patch baseline.</p>
   * @public
   */
  BaselineDescription?: string | undefined;

  /**
   * <p>Indicates whether this is the default baseline. Amazon Web Services Systems Manager supports creating multiple default
   *    patch baselines. For example, you can create a default patch baseline for each operating
   *    system.</p>
   * @public
   */
  DefaultBaseline?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribePatchBaselinesResult {
  /**
   * <p>An array of <code>PatchBaselineIdentity</code> elements.</p>
   * @public
   */
  BaselineIdentities?: PatchBaselineIdentity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupsRequest {
  /**
   * <p>The maximum number of patch groups to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>Supported keys for <code>DescribePatchGroups</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NAME_PREFIX</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AWS-</code> | <code>My-</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OPERATING_SYSTEM</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AMAZON_LINUX</code> | <code>SUSE</code> | <code>WINDOWS</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The mapping between a patch group and the patch baseline the patch group is registered
 *    with.</p>
 * @public
 */
export interface PatchGroupPatchBaselineMapping {
  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   * @public
   */
  PatchGroup?: string | undefined;

  /**
   * <p>The patch baseline the patch group is registered with.</p>
   * @public
   */
  BaselineIdentity?: PatchBaselineIdentity | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupsResult {
  /**
   * <p>Each entry in the array contains:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PatchGroup</code>: string (between 1 and 256 characters. Regex:
   *       <code>^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]*)$)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PatchBaselineIdentity</code>: A <code>PatchBaselineIdentity</code> element.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Mappings?: PatchGroupPatchBaselineMapping[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupStateRequest {
  /**
   * <p>The name of the patch group whose patch snapshot should be retrieved.</p>
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupStateResult {
  /**
   * <p>The number of managed nodes in the patch group.</p>
   * @public
   */
  Instances?: number | undefined;

  /**
   * <p>The number of managed nodes with installed patches.</p>
   * @public
   */
  InstancesWithInstalledPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed that aren't defined in the patch
   *    baseline.</p>
   * @public
   */
  InstancesWithInstalledOtherPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed by Patch Manager that haven't been
   *    rebooted after the patch installation. The status of these managed nodes is
   *     <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithInstalledPendingRebootPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed that are specified in a
   *     <code>RejectedPatches</code> list. Patches with a status of <code>INSTALLED_REJECTED</code> were
   *    typically installed before they were added to a <code>RejectedPatches</code> list.</p>
   *          <note>
   *             <p>If <code>ALLOW_AS_DEPENDENCY</code> is the specified option for
   *      <code>RejectedPatchesAction</code>, the value of
   *      <code>InstancesWithInstalledRejectedPatches</code> will always be <code>0</code> (zero).</p>
   *          </note>
   * @public
   */
  InstancesWithInstalledRejectedPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with missing patches from the patch baseline.</p>
   * @public
   */
  InstancesWithMissingPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches from the patch baseline that failed to
   *    install.</p>
   * @public
   */
  InstancesWithFailedPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches that aren't applicable.</p>
   * @public
   */
  InstancesWithNotApplicablePatches?: number | undefined;

  /**
   * <p>The number of managed nodes with <code>NotApplicable</code> patches beyond the supported
   *    limit, which aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  InstancesWithUnreportedNotApplicablePatches?: number | undefined;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Critical</code> for
   *    compliance reporting in the patch baseline aren't installed. These patches might be missing, have
   *    failed installation, were rejected, or were installed but awaiting a required managed node
   *    reboot. The status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithCriticalNonCompliantPatches?: number | undefined;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Security</code> in a
   *    patch advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required managed node reboot. The status of these
   *    managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithSecurityNonCompliantPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed that are specified as other than
   *     <code>Critical</code> or <code>Security</code> but aren't compliant with the patch baseline. The
   *    status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithOtherNonCompliantPatches?: number | undefined;

  /**
   * <p>The number of managed nodes for which security-related patches are available but not
   *    approved because because they didn't meet the patch baseline requirements. For example, an
   *    updated version of a patch might have been released before the specified auto-approval period was
   *    over.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  InstancesWithAvailableSecurityUpdates?: number | undefined;
}

/**
 * @public
 */
export interface DescribePatchPropertiesRequest {
  /**
   * <p>The operating system type for which to list patches.</p>
   * @public
   */
  OperatingSystem: OperatingSystem | undefined;

  /**
   * <p>The patch property for which you want to view patch details. </p>
   * @public
   */
  Property: PatchProperty | undefined;

  /**
   * <p>Indicates whether to list patches for the Windows operating system or for applications
   *    released by Microsoft. Not applicable for the Linux or macOS operating systems.</p>
   * @public
   */
  PatchSet?: PatchSet | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchPropertiesResult {
  /**
   * <p>A list of the properties for patches matching the filter request parameters.</p>
   * @public
   */
  Properties?: Record<string, string>[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a filter for Session Manager information.</p>
 * @public
 */
export interface SessionFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  key: SessionFilterKey | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>InvokedAfter: Specify a timestamp to limit your results. For example, specify
   *      2024-08-29T00:00:00Z to see sessions that started August 29, 2024, and later.</p>
   *             </li>
   *             <li>
   *                <p>InvokedBefore: Specify a timestamp to limit your results. For example, specify
   *      2024-08-29T00:00:00Z to see sessions that started before August 29, 2024.</p>
   *             </li>
   *             <li>
   *                <p>Target: Specify a managed node to which session connections have been made.</p>
   *             </li>
   *             <li>
   *                <p>Owner: Specify an Amazon Web Services user to see a list of sessions started by that user.</p>
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
   *             <li>
   *                <p>SessionId: Specify a session ID to return details about the session.</p>
   *             </li>
   *          </ul>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsRequest {
  /**
   * <p>The session status to retrieve a list of sessions for. For example, "Active".</p>
   * @public
   */
  State: SessionState | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters to limit the type of sessions returned by the request.</p>
   * @public
   */
  Filters?: SessionFilter[] | undefined;
}

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export interface SessionManagerOutputUrl {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  S3OutputUrl?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  CloudWatchOutputUrl?: string | undefined;
}

/**
 * <p>Information about a Session Manager connection to a managed node.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The managed node that the Session Manager session connected to.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The status of the session. For example, "Connected" or "Terminated".</p>
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session began.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session was terminated.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The name of the Session Manager SSM document used to define the parameters and plugin settings for the
   *    session. For example, <code>SSM-SessionManagerRunShell</code>.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services user that started the session.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The reason for connecting to the instance.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Details?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  OutputUrl?: SessionManagerOutputUrl | undefined;

  /**
   * <p>The maximum duration of a session before it terminates.</p>
   * @public
   */
  MaxSessionDuration?: string | undefined;

  /**
   * <p>
   *             <code>Standard</code> access type is the default for Session Manager sessions.
   *     <code>JustInTime</code> is the access type for <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-just-in-time-node-access.html">Just-in-time node access</a>.</p>
   * @public
   */
  AccessType?: AccessType | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsResponse {
  /**
   * <p>A list of sessions meeting the request parameters.</p>
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOpsItemRelatedItemRequest {
  /**
   * <p>The ID of the OpsItem for which you want to delete an association between the OpsItem and a
   *    related item.</p>
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * <p>The ID of the association for which you want to delete an association between the OpsItem
   *    and a related item.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOpsItemRelatedItemResponse {}

/**
 * @public
 */
export interface GetAccessTokenRequest {
  /**
   * <p>The ID of a just-in-time node access request.</p>
   * @public
   */
  AccessRequestId: string | undefined;
}

/**
 * <p>The temporary security credentials, which include an access key ID, a secret access key, and
 *    a security (or session) token.</p>
 * @public
 */
export interface Credentials {
  /**
   * <p>The access key ID that identifies the temporary security credentials.</p>
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * <p>The secret access key that can be used to sign requests.</p>
   * @public
   */
  SecretAccessKey: string | undefined;

  /**
   * <p>The token that users must pass to the service API to use the temporary credentials.</p>
   * @public
   */
  SessionToken: string | undefined;

  /**
   * <p>The datetime on which the current credentials expire.</p>
   * @public
   */
  ExpirationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenResponse {
  /**
   * <p>The temporary security credentials which can be used to start just-in-time node access
   *    sessions.</p>
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * <p>The status of the access request.</p>
   * @public
   */
  AccessRequestStatus?: AccessRequestStatus | undefined;
}

/**
 * @public
 */
export interface GetAutomationExecutionRequest {
  /**
   * <p>The unique identifier for an existing automation execution to examine. The execution ID is
   *    returned by StartAutomationExecution when the execution of an Automation runbook is
   *    initiated.</p>
   * @public
   */
  AutomationExecutionId: string | undefined;
}

/**
 * <p>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a
 *    multi-Region and multi-account Automation execution.</p>
 * @public
 */
export interface ProgressCounters {
  /**
   * <p>The total number of steps run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the
   *    current Automation execution.</p>
   * @public
   */
  TotalSteps?: number | undefined;

  /**
   * <p>The total number of steps that successfully completed in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   * @public
   */
  SuccessSteps?: number | undefined;

  /**
   * <p>The total number of steps that failed to run in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   * @public
   */
  FailedSteps?: number | undefined;

  /**
   * <p>The total number of steps that the system cancelled in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   * @public
   */
  CancelledSteps?: number | undefined;

  /**
   * <p>The total number of steps that timed out in all specified Amazon Web Services Regions and Amazon Web Services accounts
   *    for the current Automation execution.</p>
   * @public
   */
  TimedOutSteps?: number | undefined;
}

/**
 * <p>Detailed information about the current state of an individual Automation execution.</p>
 * @public
 */
export interface AutomationExecution {
  /**
   * <p>The execution ID.</p>
   * @public
   */
  AutomationExecutionId?: string | undefined;

  /**
   * <p>The name of the Automation runbook used during the execution.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The version of the document to use during execution.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The time the execution started.</p>
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * <p>The time the execution finished.</p>
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * <p>The execution status of the Automation.</p>
   * @public
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;

  /**
   * <p>A list of details about the current state of all steps that comprise an execution. An
   *    Automation runbook contains a list of steps that are run in order.</p>
   * @public
   */
  StepExecutions?: StepExecution[] | undefined;

  /**
   * <p>A boolean value that indicates if the response contains the full list of the Automation step
   *    executions. If true, use the DescribeAutomationStepExecutions API operation to get the full list
   *    of step executions.</p>
   * @public
   */
  StepExecutionsTruncated?: boolean | undefined;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling <a>StartAutomationExecution</a>.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * <p>A message describing why an execution has failed, if the status is set to Failed.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The automation execution mode.</p>
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * <p>The AutomationExecutionId of the parent automation.</p>
   * @public
   */
  ParentAutomationExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who ran the automation.</p>
   * @public
   */
  ExecutedBy?: string | undefined;

  /**
   * <p>The name of the step that is currently running.</p>
   * @public
   */
  CurrentStepName?: string | undefined;

  /**
   * <p>The action of the step that is currently running.</p>
   * @public
   */
  CurrentAction?: string | undefined;

  /**
   * <p>The parameter name.</p>
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * <p>The specified targets.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>A list of resolved targets in the rate control execution.</p>
   * @public
   */
  ResolvedTargets?: ResolvedTargets | undefined;

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when the execution
   *    started.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The MaxErrors value specified by the user when the execution started.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The target of the execution.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the
   *    Automation.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a
   *    multi-Region and multi-account Automation execution.</p>
   * @public
   */
  ProgressCounters?: ProgressCounters | undefined;

  /**
   * <p>The details for the CloudWatch alarm applied to your automation.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarm that was invoked by the automation.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * <p>A publicly accessible URL for a file that contains the <code>TargetLocations</code> body.
   *    Currently, only files in presigned Amazon S3 buckets are supported</p>
   * @public
   */
  TargetLocationsURL?: string | undefined;

  /**
   * <p>The subtype of the Automation operation. Currently, the only supported value is
   *     <code>ChangeRequest</code>.</p>
   * @public
   */
  AutomationSubtype?: AutomationSubtype | undefined;

  /**
   * <p>The date and time the Automation operation is scheduled to start.</p>
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * <p>Information about the Automation runbooks that are run as part of a runbook workflow.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   * @public
   */
  Runbooks?: Runbook[] | undefined;

  /**
   * <p>The ID of an OpsItem that is created to represent a Change Manager change request.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The ID of a State Manager association used in the Automation operation.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The name of the Change Manager change request.</p>
   * @public
   */
  ChangeRequestName?: string | undefined;

  /**
   * <p>Variables defined for the automation.</p>
   * @public
   */
  Variables?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetAutomationExecutionResult {
  /**
   * <p>Detailed information about the current state of an automation execution.</p>
   * @public
   */
  AutomationExecution?: AutomationExecution | undefined;
}

/**
 * @public
 */
export interface GetCalendarStateRequest {
  /**
   * <p>The names of Amazon Resource Names (ARNs) of the Systems Manager documents (SSM documents) that
   *    represent the calendar entries for which you want to get the state.</p>
   * @public
   */
  CalendarNames: string[] | undefined;

  /**
   * <p>(Optional) The specific time for which you want to get calendar state information, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> format. If you don't specify a
   *    value or <code>AtTime</code>, the current time is used.</p>
   * @public
   */
  AtTime?: string | undefined;
}

/**
 * @public
 */
export interface GetCalendarStateResponse {
  /**
   * <p>The state of the calendar. An <code>OPEN</code> calendar indicates that actions are allowed
   *    to proceed, and a <code>CLOSED</code> calendar indicates that actions aren't allowed to
   *    proceed.</p>
   * @public
   */
  State?: CalendarState | undefined;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that you specified in your command. If you don't specify a time, <code>GetCalendarState</code>
   *    uses the current time.</p>
   * @public
   */
  AtTime?: string | undefined;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that the calendar state will change. If the current calendar state is <code>OPEN</code>,
   *     <code>NextTransitionTime</code> indicates when the calendar state changes to
   *    <code>CLOSED</code>, and vice-versa.</p>
   * @public
   */
  NextTransitionTime?: string | undefined;
}

/**
 * @public
 */
export interface GetCommandInvocationRequest {
  /**
   * <p>(Required) The parent command ID of the invocation plugin.</p>
   * @public
   */
  CommandId: string | undefined;

  /**
   * <p>(Required) The ID of the managed node targeted by the command. A <i>managed
   *     node</i> can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, and on-premises server or VM
   *    in your hybrid environment that is configured for Amazon Web Services Systems Manager.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the step for which you want detailed results. If the document contains only one
   *    step, you can omit the name and details for that step. If the document contains more than one
   *    step, you must specify the name of the step for which you want to view details. Be sure to
   *    specify the name of the step, not the name of a plugin like
   *    <code>aws:RunShellScript</code>.</p>
   *          <p>To find the <code>PluginName</code>, check the document content and find the name of the
   *    step you want details for. Alternatively, use <a>ListCommandInvocations</a> with the
   *     <code>CommandId</code> and <code>Details</code> parameters. The <code>PluginName</code> is the
   *     <code>Name</code> attribute of the <code>CommandPlugin</code> object in the
   *     <code>CommandPlugins</code> list.</p>
   * @public
   */
  PluginName?: string | undefined;
}

/**
 * <p>Configuration options for sending command output to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * <p>The name of the CloudWatch Logs log group where you want to send command output. If you
   *    don't specify a group name, Amazon Web Services Systems Manager automatically creates a log group for you. The log group
   *    uses the following naming format:</p>
   *          <p>
   *             <code>aws/ssm/<i>SystemsManagerDocumentName</i>
   *             </code>
   *          </p>
   * @public
   */
  CloudWatchLogGroupName?: string | undefined;

  /**
   * <p>Enables Systems Manager to send command output to CloudWatch Logs.</p>
   * @public
   */
  CloudWatchOutputEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCommandInvocationResult {
  /**
   * <p>The parent command ID of the invocation plugin.</p>
   * @public
   */
  CommandId?: string | undefined;

  /**
   * <p>The ID of the managed node targeted by the command. A <i>managed node</i> can
   *    be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, or on-premises server or VM in your hybrid
   *    environment that is configured for Amazon Web Services Systems Manager.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The comment text for the command.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The name of the document that was run. For example, <code>AWS-RunShellScript</code>.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The Systems Manager document (SSM document) version used in the request.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The name of the plugin, or <i>step name</i>, for which details are reported.
   *    For example, <code>aws:RunShellScript</code> is a plugin.</p>
   * @public
   */
  PluginName?: string | undefined;

  /**
   * <p>The error level response code for the plugin script. If the response code is
   *    <code>-1</code>, then the command hasn't started running on the managed node, or it wasn't
   *    received by the node.</p>
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * <p>The date and time the plugin started running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses
   *    the <code>InvokedBefore</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin hasn't started to run, the string is empty.</p>
   * @public
   */
  ExecutionStartDateTime?: string | undefined;

  /**
   * <p>Duration since <code>ExecutionStartDateTime</code>.</p>
   * @public
   */
  ExecutionElapsedTime?: string | undefined;

  /**
   * <p>The date and time the plugin finished running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses
   *    the <code>InvokedAfter</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin hasn't started to run, the string is empty.</p>
   * @public
   */
  ExecutionEndDateTime?: string | undefined;

  /**
   * <p>The status of this invocation plugin. This status can be different than
   *     <code>StatusDetails</code>.</p>
   * @public
   */
  Status?: CommandInvocationStatus | undefined;

  /**
   * <p>A detailed status of the command execution for an invocation. <code>StatusDetails</code>
   *    includes more information than <code>Status</code> because it includes states resulting from
   *    error and concurrency control parameters. <code>StatusDetails</code> can show different results
   *    than <code>Status</code>. For more information about these statuses, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding
   *     command statuses</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.
   *     <code>StatusDetails</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command hasn't been sent to the managed node.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the managed node but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Delayed: The system attempted to send the command to the target, but the target wasn't
   *      available. The managed node might not be available because of network issues, because the node
   *      was stopped, or for similar reasons. The system will try to send the command again.</p>
   *             </li>
   *             <li>
   *                <p>Success: The command or plugin ran successfully. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the managed node before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: The command started to run on the managed node, but the execution
   *      wasn't complete before the timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't run successfully on the managed node. For a plugin, this
   *      indicates that the result code wasn't zero. For a command invocation, this indicates that the
   *      result code for one or more plugins wasn't zero. Invocation failures count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Cancelled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the managed node. The node might not
   *      exist or might not be responding. Undeliverable invocations don't count against the parent
   *      command's <code>MaxErrors</code> limit and don't contribute to whether the parent command
   *      status is Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its <code>MaxErrors</code> limit and subsequent
   *      command invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The first 24,000 characters written by the plugin to <code>stdout</code>. If the command
   *    hasn't finished running, if <code>ExecutionStatus</code> is neither Succeeded nor Failed, then
   *    this string is empty.</p>
   * @public
   */
  StandardOutputContent?: string | undefined;

  /**
   * <p>The URL for the complete text written by the plugin to <code>stdout</code> in Amazon Simple Storage Service (Amazon S3). If an S3 bucket wasn't specified, then this string is
   *    empty.</p>
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * <p>The first 8,000 characters written by the plugin to <code>stderr</code>. If the command
   *    hasn't finished running, then this string is empty.</p>
   * @public
   */
  StandardErrorContent?: string | undefined;

  /**
   * <p>The URL for the complete text written by the plugin to <code>stderr</code>. If the command
   *    hasn't finished running, then this string is empty.</p>
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * <p>Amazon CloudWatch Logs information where Systems Manager sent the command output.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}

/**
 * @public
 */
export interface GetConnectionStatusRequest {
  /**
   * <p>The managed node ID.</p>
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionStatusResponse {
  /**
   * <p>The ID of the managed node to check connection status. </p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The status of the connection to the managed node.</p>
   * @public
   */
  Status?: ConnectionStatus | undefined;
}

/**
 * @public
 */
export interface GetDefaultPatchBaselineRequest {
  /**
   * <p>Returns the default patch baseline for the specified operating system.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetDefaultPatchBaselineResult {
  /**
   * <p>The ID of the default patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The operating system for the returned patch baseline. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * <p>Defines the basic information about a patch baseline override.</p>
 * @public
 */
export interface BaselineOverride {
  /**
   * <p>The operating system rule used by the patch baseline override.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>A set of patch filters, typically used for approval rules.</p>
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * <p>A set of rules defining the approval rules for a patch baseline.</p>
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package
   *                         name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * <p>Defines the compliance level for approved patches. When an approved patch is reported as
   *    missing, this value describes the severity of the compliance violation.</p>
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package
   *                         name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * <p>The action for Patch Manager to take on patches included in the
   *     <code>RejectedPackages</code> list. A patch can be allowed only if it is a dependency of another
   *    package, or blocked entirely along with packages that include it as a dependency.</p>
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * <p>Indicates whether managed nodes for which there are available security-related patches that
   *    have not been approved by the baseline are being defined as <code>COMPLIANT</code> or
   *     <code>NON_COMPLIANT</code>. This option is specified when the <code>CreatePatchBaseline</code>
   *    or <code>UpdatePatchBaseline</code> commands are run.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * <p>The ID of the managed node for which the appropriate patch snapshot should be
   *    retrieved.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The snapshot ID provided by the user when running <code>AWS-RunPatchBaseline</code>.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Defines the basic information about a patch baseline override.</p>
   * @public
   */
  BaselineOverride?: BaselineOverride | undefined;

  /**
   * <p>Specifies whether to use S3 dualstack endpoints for the patch snapshot download URL. Set to
   *     <code>true</code> to receive a presigned URL that supports both IPv4 and IPv6 connectivity. Set
   *    to <code>false</code> to use standard IPv4-only endpoints. Default is <code>false</code>. This
   *    parameter is required for managed nodes in IPv6-only environments. </p>
   * @public
   */
  UseS3DualStackEndpoint?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDeployablePatchSnapshotForInstanceResult {
  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The user-defined snapshot ID.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>A pre-signed Amazon Simple Storage Service (Amazon S3) URL that can be used to download the
   *    patch snapshot.</p>
   * @public
   */
  SnapshotDownloadUrl?: string | undefined;

  /**
   * <p>Returns the specific operating system (for example Windows Server 2012 or Amazon Linux
   *    2015.09) on the managed node for the specified patch snapshot.</p>
   * @public
   */
  Product?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentRequest {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, 12.6. This value is unique across all versions of a document and can't be
   *    changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The document version for which you want information.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Returns the document in the specified format. The document format can be either JSON or
   *    YAML. JSON is the default format.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;
}

/**
 * <p>A structure that includes attributes that describe a document attachment.</p>
 * @public
 */
export interface AttachmentContent {
  /**
   * <p>The name of an attachment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The size of an attachment in bytes.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The cryptographic hash value of the document content.</p>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>The hash algorithm used to calculate the hash value.</p>
   * @public
   */
  HashType?: AttachmentHashType | undefined;

  /**
   * <p>The URL location of the attachment content.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentResult {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The date the SSM document was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The version of the artifact associated with the document. For example, 12.6. This value is
   *    unique across all versions of a document, and can't be changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The status of the SSM document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Updating</code>, <code>Failed</code>, and <code>Deleting</code>.</p>
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * <p>The contents of the SSM document.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The document type.</p>
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * <p>The document format, either JSON or YAML.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * <p>A description of the document attachments, including names, locations, sizes, and so
   *    on.</p>
   * @public
   */
  AttachmentsContent?: AttachmentContent[] | undefined;

  /**
   * <p>The current review status of a new custom Systems Manager document (SSM document) created by a member
   *    of your organization, or of the latest version of an existing SSM document.</p>
   *          <p>Only one version of an SSM document can be in the APPROVED state at a time. When a new
   *    version is approved, the status of the previous version changes to REJECTED.</p>
   *          <p>Only one version of an SSM document can be in review, or PENDING, at a time.</p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;
}

/**
 * @public
 */
export interface GetExecutionPreviewRequest {
  /**
   * <p>The ID of the existing execution preview.</p>
   * @public
   */
  ExecutionPreviewId: string | undefined;
}

/**
 * <p>Information about the resources that would be included in the actual runbook execution, if
 *    it were to be run.</p>
 * @public
 */
export interface TargetPreview {
  /**
   * <p>The number of resources of a certain type included in an execution preview.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>A type of resource that was included in the execution preview.</p>
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * <p>Information about the results of the execution preview.</p>
 * @public
 */
export interface AutomationExecutionPreview {
  /**
   * <p>Information about the type of impact a runbook step would have on a resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Mutating</code>: The runbook step would make changes to the targets through actions
   *      that create, modify, or delete resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Non_Mutating</code>: The runbook step would retrieve data about resources but not
   *      make changes to them. This category generally includes <code>Describe*</code>,
   *       <code>List*</code>, <code>Get*</code>, and similar read-only API actions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Undetermined</code>: An undetermined step invokes executions performed by another
   *      orchestration service like Lambda, Step Functions, or Amazon Web Services Systems Manager Run Command. An undetermined step might also call a third-party API. Systems Manager Automation doesn't know the outcome of the orchestration processes or
   *      third-party API executions, so the results of the steps are undetermined.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StepPreviews?: Partial<Record<ImpactType, number>> | undefined;

  /**
   * <p>Information about the Amazon Web Services Regions targeted by the execution preview.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>Information that provides a preview of what the impact of running the specified Automation
   *    runbook would be.</p>
   * @public
   */
  TargetPreviews?: TargetPreview[] | undefined;

  /**
   * <p>Information about the Amazon Web Services accounts that were included in the execution
   *    preview.</p>
   * @public
   */
  TotalAccounts?: number | undefined;
}

/**
 * <p>Information about the changes that would be made if an execution were run.</p>
 * @public
 */
export type ExecutionPreview =
  | ExecutionPreview.AutomationMember
  | ExecutionPreview.$UnknownMember;

/**
 * @public
 */
export namespace ExecutionPreview {
  /**
   * <p>Information about the changes that would be made if an Automation workflow were run.</p>
   * @public
   */
  export interface AutomationMember {
    Automation: AutomationExecutionPreview;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Automation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Automation: (value: AutomationExecutionPreview) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetExecutionPreviewResponse {
  /**
   * <p>The generated ID for the existing execution preview.</p>
   * @public
   */
  ExecutionPreviewId?: string | undefined;

  /**
   * <p>A UTC timestamp indicating when the execution preview operation ended.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The current status of the execution preview operation.</p>
   * @public
   */
  Status?: ExecutionPreviewStatus | undefined;

  /**
   * <p>Supplemental information about the current status of the execution preview.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about the changes that would be made if an execution were run.</p>
   * @public
   */
  ExecutionPreview?: ExecutionPreview | undefined;
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 *          <p>
 *             <b>Example formats for the <code>aws ssm get-inventory</code>
 *     command:</b>
 *          </p>
 *          <p>
 *             <code>--filters
 *     Key=AWS:InstanceInformation.AgentType,Values=amazon-ssm-agent,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *    Key=AWS:InstanceInformation.AgentVersion,Values=3.3.2299.0,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *     Key=AWS:InstanceInformation.ComputerName,Values=ip-192.0.2.0.us-east-2.compute.internal,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *     Key=AWS:InstanceInformation.InstanceId,Values=i-0a4cd6ceffEXAMPLE,i-1a2b3c4d5e6EXAMPLE,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *    Key=AWS:InstanceInformation.InstanceStatus,Values=Active,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *    Key=AWS:InstanceInformation.IpAddress,Values=198.51.100.0,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters Key=AWS:InstanceInformation.PlatformName,Values="Amazon
 *     Linux",Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *    Key=AWS:InstanceInformation.PlatformType,Values=Linux,Type=Equal</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *     Key=AWS:InstanceInformation.PlatformVersion,Values=2023,Type=BeginWith</code>
 *          </p>
 *          <p>
 *             <code>--filters
 *     Key=AWS:InstanceInformation.ResourceType,Values=EC2Instance,Type=Equal</code>
 *          </p>
 * @public
 */
export interface InventoryFilter {
  /**
   * <p>The name of the filter key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Inventory filter values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter.</p>
   *          <note>
   *             <p>The <code>Exists</code> filter must be used with aggregators. For more information, see
   *      <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-aggregate.html">Aggregating inventory data</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   * @public
   */
  Type?: InventoryQueryOperatorType | undefined;
}

/**
 * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
 *    return a count of resources that match and don't match the specified criteria.</p>
 * @public
 */
export interface InventoryGroup {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Filters define the criteria for the group. The <code>matchingCount</code> field displays the
   *    number of resources that match the criteria. The <code>notMatchingCount</code> field displays the
   *    number of resources that don't match the criteria. </p>
   * @public
   */
  Filters: InventoryFilter[] | undefined;
}

/**
 * <p>The inventory item result attribute.</p>
 * @public
 */
export interface ResultAttribute {
  /**
   * <p>Name of the inventory item type. Valid value: <code>AWS:InstanceInformation</code>. Default
   *    Value: <code>AWS:InstanceInformation</code>.</p>
   * @public
   */
  TypeName: string | undefined;
}

/**
 * <p>The inventory result item.</p>
 * @public
 */
export interface InventoryResultItem {
  /**
   * <p>The name of the inventory result item type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory result item/</p>
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The time inventory item data was captured.</p>
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API doesn't update the inventory item type
   *    contents if the MD5 hash hasn't changed since last update. </p>
   * @public
   */
  ContentHash?: string | undefined;

  /**
   * <p>Contains all the inventory data of the item type. Results include attribute names and
   *    values. </p>
   * @public
   */
  Content: Record<string, string>[] | undefined;
}

/**
 * <p>Inventory query results.</p>
 * @public
 */
export interface InventoryResultEntity {
  /**
   * <p>ID of the inventory result entity. For example, for managed node inventory the result will
   *    be the managed node ID. For EC2 instance inventory, the result will be the instance ID. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The data section in the inventory result entity JSON.</p>
   * @public
   */
  Data?: Record<string, InventoryResultItem> | undefined;
}

/**
 * @public
 */
export interface GetInventoryResult {
  /**
   * <p>Collection of inventory entities such as a collection of managed node inventory. </p>
   * @public
   */
  Entities?: InventoryResultEntity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInventorySchemaRequest {
  /**
   * <p>The type of inventory item to return.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns inventory schemas that support aggregation. For example, this call returns the
   *     <code>AWS:InstanceInformation</code> type, because it supports aggregation based on the
   *     <code>PlatformName</code>, <code>PlatformType</code>, and <code>PlatformVersion</code>
   *    attributes.</p>
   * @public
   */
  Aggregator?: boolean | undefined;

  /**
   * <p>Returns the sub-type schema for a specified inventory type.</p>
   * @public
   */
  SubType?: boolean | undefined;
}

/**
 * <p>Attributes are the entries within the inventory item content. It contains name and
 *    value.</p>
 * @public
 */
export interface InventoryItemAttribute {
  /**
   * <p>Name of the inventory item attribute.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type of the inventory item attribute. </p>
   * @public
   */
  DataType: InventoryAttributeDataType | undefined;
}

/**
 * <p>The inventory item schema definition. Users can use this to compose inventory query
 *    filters.</p>
 * @public
 */
export interface InventoryItemSchema {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with Amazon Web Services. Custom
   *    inventory type names will start with Custom. Default inventory item types include the following:
   *     <code>AWS:AWSComponent</code>, <code>AWS:Application</code>,
   *     <code>AWS:InstanceInformation</code>, <code>AWS:Network</code>, and
   *     <code>AWS:WindowsUpdate</code>.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory item.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The schema attributes for inventory. This contains data type and attribute name.</p>
   * @public
   */
  Attributes: InventoryItemAttribute[] | undefined;

  /**
   * <p>The alias name of the inventory type. The alias name is used for display purposes.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface GetInventorySchemaResult {
  /**
   * <p>Inventory schemas returned by the request.</p>
   * @public
   */
  Schemas?: InventoryItemSchema[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window for which you want to retrieve information.</p>
   * @public
   */
  WindowId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the maintenance window.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window won't run before this specified time.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window won't run after this specified time.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   * @public
   */
  NextExecutionTime?: string | undefined;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   * @public
   */
  AllowUnassociatedTargets?: boolean | undefined;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The date the maintenance window was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date the maintenance window was last modified.</p>
   * @public
   */
  ModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionRequest {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   * @public
   */
  WindowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionResult {
  /**
   * <p>The ID of the maintenance window execution.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The ID of the task executions from the maintenance window execution.</p>
   * @public
   */
  TaskIds?: string[] | undefined;

  /**
   * <p>The status of the maintenance window execution.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the maintenance window started running.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the maintenance window finished running.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskRequest {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that should be
   *    retrieved.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskResult {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that was
   *    retrieved.</p>
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that ran.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The role that was assumed when running the task.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>The type of task that was run.</p>
   * @public
   */
  Type?: MaintenanceWindowTaskType | undefined;

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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key</code>: string, between 1 and 255 characters</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code>: an array of strings, each between 1 and 255 characters</p>
   *             </li>
   *          </ul>
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>[] | undefined;

  /**
   * <p>The priority of the task.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The defined maximum number of task executions that could be run in parallel.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The defined maximum number of task execution errors allowed before scheduling of the task
   *    execution would have been stopped.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The status of the task.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the task execution started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the task execution completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The details for the CloudWatch alarm you applied to your maintenance window
   *    task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarms that were invoked by the maintenance window task.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * <p>The ID of the maintenance window execution for which the task is a part.</p>
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved. </p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The invocation ID to retrieve.</p>
   * @public
   */
  InvocationId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * <p>The maintenance window execution ID.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The task execution ID.</p>
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * <p>The invocation ID.</p>
   * @public
   */
  InvocationId?: string | undefined;

  /**
   * <p>The execution ID.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>Retrieves the task type for a maintenance window.</p>
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The parameters used at the time that the task ran.</p>
   * @public
   */
  Parameters?: string | undefined;

  /**
   * <p>The task status for an invocation.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Details are only available for certain status
   *    values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time that the task started running on the target.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the task finished running on the target.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>User-provided value to be included in any Amazon CloudWatch Events or Amazon EventBridge
   *    events raised while running tasks for these targets in this maintenance window.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The maintenance window target ID.</p>
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowTaskRequest {
  /**
   * <p>The maintenance window ID that includes the task to retrieve.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The maintenance window task ID to retrieve.</p>
   * @public
   */
  WindowTaskId: string | undefined;
}

/**
 * <p>The parameters for an <code>AUTOMATION</code> task type.</p>
 * @public
 */
export interface MaintenanceWindowAutomationParameters {
  /**
   * <p>The version of an Automation runbook to use during task execution.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The parameters for the <code>AUTOMATION</code> task.</p>
   *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>For <code>AUTOMATION</code> task types, Amazon Web Services Systems Manager ignores any values specified for these
   *     parameters.</p>
   *          </note>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
}

/**
 * <p>The parameters for a <code>LAMBDA</code> task type.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and
 *     LoggingInfo.</p>
 *          </note>
 * @public
 */
export interface MaintenanceWindowLambdaParameters {
  /**
   * <p>Pass client-specific information to the Lambda function that you are
   *    invoking. You can then process the client information in your Lambda function as you
   *    choose through the context variable.</p>
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * <p>(Optional) Specify an Lambda function version or alias name. If you specify a
   *    function version, the operation uses the qualified function Amazon Resource Name (ARN) to invoke
   *    a specific Lambda function. If you specify an alias name, the operation uses the
   *    alias ARN to invoke the Lambda function version to which the alias points.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>JSON to provide to your Lambda function as input.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * <p>Configurations for sending notifications.</p>
 * @public
 */
export interface NotificationConfig {
  /**
   * <p>An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run
   *    Command pushes notifications about command status changes to this topic.</p>
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * <p>The different events for which you can receive notifications. To learn more about these
   *    events, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status
   *     changes using Amazon SNS notifications</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  NotificationEvents?: NotificationEvent[] | undefined;

  /**
   * <p>The type of notification.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Command</code>: Receive notification when the status of a command changes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invocation</code>: For commands sent to multiple managed nodes, receive notification
   *      on a per-node basis when the status of a command changes. </p>
   *             </li>
   *          </ul>
   * @public
   */
  NotificationType?: NotificationType | undefined;
}

/**
 * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for
 *      <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for
 *      <code>TaskInvocationParameters</code>. </p>
 *          </note>
 * @public
 */
export interface MaintenanceWindowRunCommandParameters {
  /**
   * <p>Information about the commands to run.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>Configuration options for sending command output to Amazon CloudWatch Logs.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * <p>The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes
   *    have been deprecated.</p>
   * @public
   */
  DocumentHash?: string | undefined;

  /**
   * <p>SHA-256 or SHA-1. SHA-1 hashes have been deprecated.</p>
   * @public
   */
  DocumentHashType?: DocumentHashType | undefined;

  /**
   * <p>The Amazon Web Services Systems Manager document (SSM document) version to use in the request. You can specify
   *     <code>$DEFAULT</code>, <code>$LATEST</code>, or a specific version number. If you run commands
   *    by using the Amazon Web Services CLI, then you must escape the first two options by using a backslash. If you
   *    specify a version number, then you don't need to use the backslash. For example:</p>
   *          <p>
   *             <code>--document-version "\$DEFAULT"</code>
   *          </p>
   *          <p>
   *             <code>--document-version "\$LATEST"</code>
   *          </p>
   *          <p>
   *             <code>--document-version "3"</code>
   *          </p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Configurations for sending notifications about command status changes on a per-managed node
   *    basis.</p>
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * <p>The name of the Amazon Simple Storage Service (Amazon S3) bucket.</p>
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * <p>The S3 bucket subfolder.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * <p>The parameters for the <code>RUN_COMMAND</code> task execution.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for
   *                 Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a
   *                 service role ARN, Systems Manager uses a service-linked role in your account. If no
   *                 appropriate service-linked role for Systems Manager exists in your account, it is created when
   *                 you run <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>However, for an improved security posture, we strongly recommend creating a custom
   *                 policy and custom service role for running your maintenance window tasks. The policy
   *                 can be crafted to provide only the permissions needed for your particular
   *                 maintenance window tasks. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html">Setting up Maintenance Windows</a> in the in the
   *                     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>If this time is reached and the command hasn't already started running, it doesn't
   *    run.</p>
   * @public
   */
  TimeoutSeconds?: number | undefined;
}

/**
 * <p>The parameters for a <code>STEP_FUNCTIONS</code> task.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Step Functions tasks, Systems Manager ignores any values specified for
 *      <code>TaskParameters</code> and <code>LoggingInfo</code>.</p>
 *          </note>
 * @public
 */
export interface MaintenanceWindowStepFunctionsParameters {
  /**
   * <p>The inputs for the <code>STEP_FUNCTIONS</code> task.</p>
   * @public
   */
  Input?: string | undefined;

  /**
   * <p>The name of the <code>STEP_FUNCTIONS</code> task.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The parameters for task execution.</p>
 * @public
 */
export interface MaintenanceWindowTaskInvocationParameters {
  /**
   * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p>
   * @public
   */
  RunCommand?: MaintenanceWindowRunCommandParameters | undefined;

  /**
   * <p>The parameters for an <code>AUTOMATION</code> task type.</p>
   * @public
   */
  Automation?: MaintenanceWindowAutomationParameters | undefined;

  /**
   * <p>The parameters for a <code>STEP_FUNCTIONS</code> task type.</p>
   * @public
   */
  StepFunctions?: MaintenanceWindowStepFunctionsParameters | undefined;

  /**
   * <p>The parameters for a <code>LAMBDA</code> task type.</p>
   * @public
   */
  Lambda?: MaintenanceWindowLambdaParameters | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowTaskResult {
  /**
   * <p>The retrieved maintenance window ID.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The retrieved maintenance window task ID.</p>
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * <p>The targets where the task should run.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The resource that the task used during execution. For <code>RUN_COMMAND</code> and
   *     <code>AUTOMATION</code> task types, the value of <code>TaskArn</code> is the SSM document
   *    name/ARN. For <code>LAMBDA</code> tasks, the value is the function name/ARN. For
   *     <code>STEP_FUNCTIONS</code> tasks, the value is the state machine ARN.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for
   *                 Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a
   *                 service role ARN, Systems Manager uses a service-linked role in your account. If no
   *                 appropriate service-linked role for Systems Manager exists in your account, it is created when
   *                 you run <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>However, for an improved security posture, we strongly recommend creating a custom
   *                 policy and custom service role for running your maintenance window tasks. The policy
   *                 can be crafted to provide only the permissions needed for your particular
   *                 maintenance window tasks. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html">Setting up Maintenance Windows</a> in the in the
   *                     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>The type of task to run.</p>
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The parameters to pass to the task when it runs.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * <p>The parameters to pass to the task when it runs.</p>
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * <p>The priority of the task when it runs. The lower the number, the higher the priority. Tasks
   *    that have the same priority are scheduled in parallel.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors allowed before the task stops being scheduled.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The location in Amazon Simple Storage Service (Amazon S3) where the task results are
   *    logged.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The retrieved task name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The retrieved task description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The action to take on tasks when the maintenance window cutoff time is reached.
   *     <code>CONTINUE_TASK</code> means that tasks continue to run. For Automation, Lambda, Step Functions tasks, <code>CANCEL_TASK</code> means that currently
   *    running task invocations continue, but no new task invocations are started. For Run Command
   *    tasks, <code>CANCEL_TASK</code> means the system attempts to stop the task by sending a
   *     <code>CancelCommand</code> operation.</p>
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * <p>The details for the CloudWatch alarm you applied to your maintenance window
   *    task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface GetOpsItemRequest {
  /**
   * <p>The ID of the OpsItem that you want to get.</p>
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services
 *    resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This
 *    means you can configure these services to automatically create an OpsItem in OpsCenter when a
 *     CloudWatch alarm enters the ALARM state or when EventBridge processes an event from
 *    any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate
 *    issues with Amazon Web Services resources from a single console.</p>
 *          <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as
 *    the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm
 *    history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information
 *    from Config, CloudTrail logs, and EventBridge, so you don't have
 *    to navigate across multiple console pages during your investigation. For more information, see
 *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager
 *     OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @public
 */
export interface OpsItem {
  /**
   * <p>The ARN of the Amazon Web Services account that created the OpsItem.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The type of OpsItem. Systems Manager supports the following types of OpsItems:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/aws/issue</code>
   *                </p>
   *                <p>This type of OpsItem is used for default OpsItems created by OpsCenter. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/changerequest</code>
   *                </p>
   *                <p>This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change
   *      requests. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/insight</code>
   *                </p>
   *                <p>This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate
   *      OpsItems. </p>
   *             </li>
   *          </ul>
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * <p>The date and time the OpsItem was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The OpsItem description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services account that last updated the OpsItem.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where
   *    notifications are sent when this OpsItem is edited or changed.</p>
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItem. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   * @public
   */
  RelatedOpsItems?: RelatedOpsItem[] | undefined;

  /**
   * <p>The OpsItem status. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html">Editing OpsItem details</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * <p>The ID of the OpsItem.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The version of this OpsItem. Each time the OpsItem is edited the version number increments
   *    by one.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The impacted resource is a subset of
   *    source.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following:
   *      <code>amazon</code>, <code>aws</code>, <code>amzn</code>, <code>ssm</code>,
   *      <code>/amazon</code>, <code>/aws</code>, <code>/amzn</code>, <code>/ssm</code>.</p>
   *          </important>
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API operation) can view and search on the
   *    specified data. Operational data that isn't searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API operation).</p>
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html">Creating OpsItems
   *     manually</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * <p>An OpsItem category. Category options include: Availability, Cost, Performance, Recovery,
   *    Security.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The severity of the OpsItem. Severity options range from 1 to 4.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The time a runbook workflow started. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * <p>The time a runbook workflow ended. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to start. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to end. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedEndTime?: Date | undefined;

  /**
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * @public
 */
export interface GetOpsItemResponse {
  /**
   * <p>The OpsItem.</p>
   * @public
   */
  OpsItem?: OpsItem | undefined;
}

/**
 * @public
 */
export interface GetOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an OpsMetadata Object to view.</p>
   * @public
   */
  OpsMetadataArn: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOpsMetadataResult {
  /**
   * <p>The resource ID of the Application Manager application.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>OpsMetadata for an Application Manager application.</p>
   * @public
   */
  Metadata?: Record<string, MetadataValue> | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter for viewing OpsData summaries.</p>
 * @public
 */
export interface OpsFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter.</p>
   * @public
   */
  Type?: OpsFilterOperatorType | undefined;
}

/**
 * <p>The OpsItem data type to return.</p>
 * @public
 */
export interface OpsResultAttribute {
  /**
   * <p>Name of the data type. Valid value: <code>AWS:OpsItem</code>,
   *     <code>AWS:EC2InstanceInformation</code>, <code>AWS:OpsItemTrendline</code>, or
   *     <code>AWS:ComplianceSummary</code>.</p>
   * @public
   */
  TypeName: string | undefined;
}

/**
 * <p>The OpsData summary.</p>
 * @public
 */
export interface OpsEntityItem {
  /**
   * <p>The time the OpsData was captured.</p>
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * <p>The details of an OpsData summary.</p>
   * @public
   */
  Content?: Record<string, string>[] | undefined;
}

/**
 * <p>The result of the query.</p>
 * @public
 */
export interface OpsEntity {
  /**
   * <p>The query ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The data returned by the query.</p>
   * @public
   */
  Data?: Record<string, OpsEntityItem> | undefined;
}

/**
 * @public
 */
export interface GetOpsSummaryResult {
  /**
   * <p>The list of aggregated details and filtered OpsData.</p>
   * @public
   */
  Entities?: OpsEntity[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the parameter that you want to query. For
   *    parameters shared with you from another account, you must use the full ARN.</p>
   *          <p>To query by parameter label, use <code>"Name": "name:label"</code>. To query by parameter
   *    version, use <code>"Name": "name:version"</code>.</p>
   *          <p>For more information about shared parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
   *     shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for
   *     <code>String</code> and <code>StringList</code> parameter types.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;
}

/**
 * <p>An Amazon Web Services Systems Manager parameter in Parameter Store.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of parameter. Valid values include the following: <code>String</code>,
   *     <code>StringList</code>, and <code>SecureString</code>.</p>
   *          <note>
   *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
   *     spaces between commas in the <code>Value</code> field.</p>
   *          </note>
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The parameter value.</p>
   *          <note>
   *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
   *     spaces between commas in the <code>Value</code> field.</p>
   *          </note>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The parameter version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>Either the version number or the label used to retrieve the parameter value. Specify
   *    selectors by using one of the following formats:</p>
   *          <p>parameter_name:version</p>
   *          <p>parameter_name:label</p>
   * @public
   */
  Selector?: string | undefined;

  /**
   * <p>Applies to parameters that reference information in other Amazon Web Services services.
   *     <code>SourceResult</code> is the raw result or response from the source.</p>
   * @public
   */
  SourceResult?: string | undefined;

  /**
   * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterResult {
  /**
   * <p>Information about a parameter.</p>
   * @public
   */
  Parameter?: Parameter | undefined;
}

/**
 * @public
 */
export interface GetParameterHistoryRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the parameter for which you want to review
   *    history. For parameters shared with you from another account, you must use the full ARN.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for
   *     <code>String</code> and <code>StringList</code> parameter types.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about parameter usage.</p>
 * @public
 */
export interface ParameterHistory {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of parameter used.</p>
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The alias of the Key Management Service (KMS) key used to encrypt the
   *    parameter. Applies to <code>SecureString</code> parameters only</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</p>
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * <p>Information about the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The parameter value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Parameter names can include the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * <p>The parameter version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>Labels assigned to the parameter version.</p>
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * <p>The parameter tier.</p>
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * <p>Information about the policies assigned to a parameter.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Assigning parameter
   *     policies</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Policies?: ParameterInlinePolicy[] | undefined;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterHistoryResult {
  /**
   * <p>A list of parameters returned by the request.</p>
   * @public
   */
  Parameters?: ParameterHistory[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParametersRequest {
  /**
   * <p>The names or Amazon Resource Names (ARNs) of the parameters that you want to query. For
   *    parameters shared with you from another account, you must use the full ARNs.</p>
   *          <p>To query by parameter label, use <code>"Name": "name:label"</code>. To query by parameter
   *    version, use <code>"Name": "name:version"</code>.</p>
   *          <note>
   *             <p>The results for <code>GetParameters</code> requests are listed in alphabetical order in
   *     query responses.</p>
   *          </note>
   *          <p>For information about shared parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
   *     shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Names: string[] | undefined;

  /**
   * <p>Return decrypted secure string value. Return decrypted values for secure string parameters.
   *    This flag is ignored for <code>String</code> and <code>StringList</code> parameter types.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;
}

/**
 * @public
 */
export interface GetParametersResult {
  /**
   * <p>A list of details for a parameter.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>A list of parameters that aren't formatted correctly or don't run during an
   *    execution.</p>
   * @public
   */
  InvalidParameters?: string[] | undefined;
}

/**
 * @public
 */
export interface GetParametersByPathRequest {
  /**
   * <p>The hierarchy for the parameter. Hierarchies start with a forward slash (/). The hierarchy
   *    is the parameter name except the last part of the parameter. For the API call to succeed, the
   *    last part of the parameter name can't be in the path. A parameter name hierarchy can have a
   *    maximum of 15 levels. Here is an example of a hierarchy:
   *     <code>/Finance/Prod/IAD/WinServ2016/license33 </code>
   *          </p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Retrieve all parameters within a hierarchy.</p>
   *          <important>
   *             <p>If a user has access to a path, then the user can access all levels of that path. For
   *     example, if a user has permission to access path <code>/a</code>, then the user can also access
   *      <code>/a/b</code>. Even if a user has explicitly been denied access in IAM for
   *     parameter <code>/a/b</code>, they can still call the GetParametersByPath API operation
   *     recursively for <code>/a</code> and view <code>/a/b</code>.</p>
   *          </important>
   * @public
   */
  Recursive?: boolean | undefined;

  /**
   * <p>Filters to limit the request results.</p>
   *          <note>
   *             <p>The following <code>Key</code> values are supported for <code>GetParametersByPath</code>:
   *      <code>Type</code>, <code>KeyId</code>, and <code>Label</code>.</p>
   *             <p>The following <code>Key</code> values aren't supported for
   *     <code>GetParametersByPath</code>: <code>tag</code>, <code>DataType</code>, <code>Name</code>,
   *      <code>Path</code>, and <code>Tier</code>.</p>
   *          </note>
   * @public
   */
  ParameterFilters?: ParameterStringFilter[] | undefined;

  /**
   * <p>Retrieve all parameters in a hierarchy with their value decrypted.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParametersByPathResult {
  /**
   * <p>A list of parameters found in the specified hierarchy.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to retrieve.</p>
   *          <note>
   *             <p>To retrieve information about an Amazon Web Services managed patch baseline, specify the full Amazon
   *     Resource Name (ARN) of the baseline. For example, for the baseline
   *      <code>AWS-AmazonLinuxDefaultPatchBaseline</code>, specify
   *      <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0e392de35e7c563b7</code> instead of
   *      <code>pb-0e392de35e7c563b7</code>.</p>
   *          </note>
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineResult {
  /**
   * <p>The ID of the retrieved patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Returns the operating system specified for the patch baseline.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * <p>Returns the specified compliance severity level for approved patches in the patch
   *    baseline.</p>
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * <p>The action specified to take on patches included in the <code>RejectedPatches</code> list. A
   *    patch can be allowed only if it is a dependency of another package, or blocked entirely along
   *    with packages that include it as a dependency.</p>
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * <p>Patch groups included in the patch baseline.</p>
   * @public
   */
  PatchGroups?: string[] | undefined;

  /**
   * <p>The date the patch baseline was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date the patch baseline was last modified.</p>
   * @public
   */
  ModifiedDate?: Date | undefined;

  /**
   * <p>A description of the patch baseline.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * <p>Indicates the compliance status of managed nodes for which security-related patches are
   *    available but were not approved. This preference is specified when the
   *     <code>CreatePatchBaseline</code> or <code>UpdatePatchBaseline</code> commands are run.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineForPatchGroupRequest {
  /**
   * <p>The name of the patch group whose patch baseline should be retrieved.</p>
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * <p>Returns the operating system rule specified for patch groups using the patch
   *    baseline.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline that should be used for the patch group.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch group.</p>
   * @public
   */
  PatchGroup?: string | undefined;

  /**
   * <p>The operating system rule specified for patch groups using the patch baseline.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which the policies are attached.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A resource policy helps you to define the IAM entity (for example, an
 *    Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the
 *    only resource that supports Systems Manager resource policies. The resource policy for
 *     <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational
 *    work items (OpsItems).</p>
 * @public
 */
export interface GetResourcePoliciesResponseEntry {
  /**
   * <p>A policy ID.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>ID of the current policy version. The hash helps to prevent a situation where multiple users
   *    attempt to overwrite a policy. You must provide this hash when updating or deleting a
   *    policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * <p>A resource policy helps you to define the IAM entity (for example, an
   *    Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the
   *    only resource that supports Systems Manager resource policies. The resource policy for
   *     <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational
   *    work items (OpsItems).</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of the <code>Policy</code> object.</p>
   * @public
   */
  Policies?: GetResourcePoliciesResponseEntry[] | undefined;
}

/**
 * <p>The request body of the GetServiceSetting API operation.</p>
 * @public
 */
export interface GetServiceSettingRequest {
  /**
   * <p>The ID of the service setting to get. The setting ID can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/ssm/appmanager/appmanager-enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-destination</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-group-name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>/ssm/automation/enable-adaptive-concurrency</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/documents/console/public-sharing-permission</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/default-ec2-instance-management-role</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/opsinsights/opscenter</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/default-parameter-tier</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/high-throughput-enabled</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SettingId: string | undefined;
}
