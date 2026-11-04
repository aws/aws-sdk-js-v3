// smithy-typescript generated code
import type {
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
  DeletionMode,
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
 * Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account.
 *
 * @public
 */
export interface AccountSharingInfo {
  /**
   * The Amazon Web Services account ID where the current document is shared.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The version of the current document shared with the account.
   *
   * @public
   */
  SharedDocumentVersion?: string | undefined;
}

/**
 * Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.
 *
 * @public
 */
export interface Tag {
  /**
   * The name of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed node.
 *
 * @public
 */
export interface Activation {
  /**
   * The ID created by Systems Manager when you submitted the activation.
   *
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * A user defined description of the activation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A name for the managed node when it is created.
   *
   * @public
   */
  DefaultInstanceName?: string | undefined;

  /**
   * The Identity and Access Management (IAM) role to assign to the managed node.
   *
   * @public
   */
  IamRole?: string | undefined;

  /**
   * The maximum number of managed nodes that can be registered using this activation.
   *
   * @public
   */
  RegistrationLimit?: number | undefined;

  /**
   * The number of managed nodes already registered with this activation.
   *
   * @public
   */
  RegistrationsCount?: number | undefined;

  /**
   * The date when this activation can no longer be used to register managed nodes.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * Whether or not the activation is expired.
   *
   * @public
   */
  Expired?: boolean | undefined;

  /**
   * The date the activation was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * Tags assigned to the activation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * Specifies the type of resource you are tagging.
   *
   * > **Note:** The `ManagedInstance` type for this API operation is for on-premises managed nodes. You must specify the name of the managed node in the following format: `mi-ID_number`. For example, `mi-1a2b3c4d5e6f`.
   *
   * @public
   */
  ResourceType: ResourceTypeForTagging | undefined;

  /**
   * The resource ID you want to tag.
   *
   * Use the ID of the resource. Here are some examples:
   *
   * `MaintenanceWindow`: `mw-012345abcde`
   *
   * `PatchBaseline`: `pb-012345abcde`
   *
   * `Automation`: `example-c160-4567-8519-012345abcde`
   *
   * `OpsMetadata` object: `ResourceID` for tagging is created from the Amazon Resource Name (ARN) for the object. Specifically, `ResourceID` is created from the strings that come after the word `opsmetadata` in the ARN. For example, an OpsMetadata object with an ARN of `arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager` has a `ResourceID` of either `aws/ssm/MyGroup/appmanager` or `/aws/ssm/MyGroup/appmanager`.
   *
   * For the `Document` and `Parameter` values, use the name of the resource. If you're tagging a shared document, you must use the full ARN of the document.
   *
   * `ManagedInstance`: `mi-012345abcde`
   *
   * > **Note:** The `ManagedInstance` type for this API operation is only for on-premises managed nodes. You must specify the name of the managed node in the following format: `mi-ID_number`. For example, `mi-1a2b3c4d5e6f`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * One or more tags. The value parameter is required.
   *
   * > **Important:** Don't enter personally identifiable information in this field.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResult {}

/**
 * A CloudWatch alarm you apply to an automation or command.
 *
 * @public
 */
export interface Alarm {
  /**
   * The name of your CloudWatch alarm.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The details for the CloudWatch alarm you want to apply to an automation or command.
 *
 * @public
 */
export interface AlarmConfiguration {
  /**
   * When this value is *true*, your automation or command continues to run in cases where we can’t retrieve alarm status information from CloudWatch. In cases where we successfully retrieve an alarm status of OK or INSUFFICIENT_DATA, the automation or command continues to run, regardless of this value. Default is *false*.
   *
   * @public
   */
  IgnorePollAlarmFailure?: boolean | undefined;

  /**
   * The name of the CloudWatch alarm specified in the configuration.
   *
   * @public
   */
  Alarms: Alarm[] | undefined;
}

/**
 * The details about the state of your CloudWatch alarm.
 *
 * @public
 */
export interface AlarmStateInformation {
  /**
   * The name of your CloudWatch alarm.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The state of your CloudWatch alarm.
   *
   * @public
   */
  State: ExternalAlarmState | undefined;
}

/**
 * @public
 */
export interface AssociateOpsItemRelatedItemRequest {
  /**
   * The ID of the OpsItem to which you want to associate a resource as a related item.
   *
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * The type of association that you want to create between an OpsItem and a resource. OpsCenter supports `IsParentOf` and `RelatesTo` association types.
   *
   * @public
   */
  AssociationType: string | undefined;

  /**
   * The type of resource that you want to associate with an OpsItem. OpsCenter supports the following types:
   *
   * `AWS::SSMIncidents::IncidentRecord`: an Incident Manager incident.
   *
   * `AWS::SSM::Document`: a Systems Manager (SSM) document.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource that you want to associate with the OpsItem.
   *
   * @public
   */
  ResourceUri: string | undefined;
}

/**
 * @public
 */
export interface AssociateOpsItemRelatedItemResponse {
  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface CancelCommandRequest {
  /**
   * The ID of the command you want to cancel.
   *
   * @public
   */
  CommandId: string | undefined;

  /**
   * (Optional) A list of managed node IDs on which you want to cancel the command. If not provided, the command is canceled on every node on which it was requested.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;
}

/**
 * Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled.
 *
 * @public
 */
export interface CancelCommandResult {}

/**
 * @public
 */
export interface CancelMaintenanceWindowExecutionRequest {
  /**
   * The ID of the maintenance window execution to stop.
   *
   * @public
   */
  WindowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface CancelMaintenanceWindowExecutionResult {
  /**
   * The ID of the maintenance window execution that has been stopped.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;
}

/**
 * Reserved for internal use.
 *
 * @public
 */
export interface RegistrationMetadataItem {
  /**
   * Reserved for internal use.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateActivationRequest {
  /**
   * A user-defined description of the resource that you want to register with Systems Manager.
   *
   * > **Important:** Don't enter personally identifiable information in this field.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the registered, managed node as it will appear in the Amazon Web Services Systems Manager console or when you use the Amazon Web Services command line tools to list Systems Manager resources.
   *
   * > **Important:** Don't enter personally identifiable information in this field.
   *
   * @public
   */
  DefaultInstanceName?: string | undefined;

  /**
   * The name of the Identity and Access Management (IAM) role that you want to assign to the managed node. This IAM role must provide AssumeRole permissions for the Amazon Web Services Systems Manager service principal `ssm.amazonaws.com`. For more information, see [Create the IAM service role required for Systems Manager in a hybrid and multicloud environments](https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-service-role.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * > **Note:** You can't specify an IAM service-linked role for this parameter. You must create a unique role.
   *
   * @public
   */
  IamRole: string | undefined;

  /**
   * Specify the maximum number of managed nodes you want to register. The default value is `1`.
   *
   * @public
   */
  RegistrationLimit?: number | undefined;

  /**
   * The date by which this activation request should expire, in timestamp format, such as "2024-07-07T00:00:00". You can specify a date up to 30 days in advance. If you don't provide an expiration date, the activation code expires in 24 hours.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an activation to identify which servers or virtual machines (VMs) in your on-premises environment you intend to activate. In this case, you could specify the following key-value pairs:
   *
   * - `Key=OS,Value=Windows`
   * - `Key=Environment,Value=Production`
   *
   * > **Important:** When you install SSM Agent on your on-premises servers and VMs, you specify an activation ID and code. When you specify the activation ID and code, tags assigned to the activation are automatically applied to the on-premises servers or VMs.
   *
   * You can't add tags to or delete tags from an existing activation. You can tag your on-premises servers, edge devices, and VMs after they connect to Systems Manager for the first time and are assigned a managed node ID. This means they are listed in the Amazon Web Services Systems Manager console with an ID that is prefixed with "mi-". For information about how to add tags to your managed nodes, see AddTagsToResource. For information about how to remove tags from your managed nodes, see RemoveTagsFromResource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  RegistrationMetadata?: RegistrationMetadataItem[] | undefined;
}

/**
 * @public
 */
export interface CreateActivationResult {
  /**
   * The ID number generated by the system when it processed the activation. The activation ID functions like a user name.
   *
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * The code the system generates when it processes the activation. The activation code functions like a password to validate the activation ID.
   *
   * @public
   */
  ActivationCode?: string | undefined;
}

/**
 * An S3 bucket where you want to store the results of this request.
 *
 * @public
 */
export interface S3OutputLocation {
  /**
   * The Amazon Web Services Region of the S3 bucket.
   *
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * The S3 bucket subfolder.
   *
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;
}

/**
 * An S3 bucket where you want to store the results of this request.
 *
 * For the minimal permissions required to enable Amazon S3 output for an association, see [Create an association (console)](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-associations-creating.html#state-manager-associations-console) in the *Systems Manager User Guide*.
 *
 * @public
 */
export interface InstanceAssociationOutputLocation {
  /**
   * An S3 bucket where you want to store the results of this request.
   *
   * @public
   */
  S3Location?: S3OutputLocation | undefined;
}

/**
 * An array of search criteria that targets managed nodes using a key-value pair that you specify.
 *
 * > **Note:** One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see [Registering maintenance window tasks without targets](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * Supported formats include the following.
 *
 * **For all Systems Manager tools:**
 *
 * - `Key=tag-key,Values=tag-value-1,tag-value-2`
 *
 * **For Automation and Change Manager:**
 *
 * - `Key=tag:tag-key,Values=tag-value`
 * - `Key=ResourceGroup,Values=resource-group-name`
 * - `Key=ParameterValues,Values=value-1,value-2,value-3`
 * - To target all instances in the Amazon Web Services Region:
 *
 *   - `Key=AWS::EC2::Instance,Values=*`
 *   - `Key=InstanceIds,Values=*`
 *
 * **For Run Command and Maintenance Windows:**
 *
 * - `Key=InstanceIds,Values=instance-id-1,instance-id-2,instance-id-3`
 * - `Key=tag:tag-key,Values=tag-value-1,tag-value-2`
 * - `Key=resource-groups:Name,Values=resource-group-name`
 * - Additionally, Maintenance Windows support targeting resource types:
 *
 *   - `Key=resource-groups:ResourceTypeFilters,Values=resource-type-1,resource-type-2`
 *
 * **For State Manager:**
 *
 * - `Key=InstanceIds,Values=instance-id-1,instance-id-2,instance-id-3`
 * - `Key=tag:tag-key,Values=tag-value-1,tag-value-2`
 * - To target all instances in the Amazon Web Services Region:
 *
 *   - `Key=InstanceIds,Values=*`
 *
 * For more information about how to send commands that target managed nodes using `Key,Value` parameters, see [Targeting multiple managed nodes](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @public
 */
export interface Target {
  /**
   * User-defined criteria for sending commands that target managed nodes that meet the criteria.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * User-defined criteria that maps to `Key`. For example, if you specified `tag:ServerRole`, you could specify `value:WebServer` to run a command on instances that include EC2 tags of `ServerRole,WebServer`.
   *
   * Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
 *
 * @public
 */
export interface TargetLocation {
  /**
   * The Amazon Web Services accounts targeted by the current Automation execution.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * The Amazon Web Services Regions targeted by the current Automation execution.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * The maximum number of Amazon Web Services Regions and Amazon Web Services accounts allowed to run the Automation concurrently. `TargetLocationMaxConcurrency` has a default value of 1.
   *
   * @public
   */
  TargetLocationMaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors allowed before the system stops queueing additional Automation executions for the currently running Automation. `TargetLocationMaxErrors` has a default value of 0.
   *
   * @public
   */
  TargetLocationMaxErrors?: string | undefined;

  /**
   * The Automation execution role used by the currently running Automation. If not specified, the default value is `AWS-SystemsManager-AutomationExecutionRole`.
   *
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * The details for the CloudWatch alarm you want to apply to an automation or command.
   *
   * @public
   */
  TargetLocationAlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Indicates whether to include child organizational units (OUs) that are children of the targeted OUs. The default is `false`.
   *
   * @public
   */
  IncludeChildOrganizationUnits?: boolean | undefined;

  /**
   * Amazon Web Services accounts or organizational units to exclude as expanded targets.
   *
   * @public
   */
  ExcludeAccounts?: string[] | undefined;

  /**
   * A list of key-value mappings to target resources. If you specify values for this data type, you must also specify a value for `TargetParameterName`.
   *
   * This `Targets` parameter takes precedence over the `StartAutomationExecution:Targets` parameter if both are supplied.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The maximum number of targets allowed to run this task in parallel. This `TargetsMaxConcurrency` takes precedence over the `StartAutomationExecution:MaxConcurrency` parameter if both are supplied.
   *
   * @public
   */
  TargetsMaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors that are allowed before the system stops running the automation on additional targets. This `TargetsMaxErrors` parameter takes precedence over the `StartAutomationExecution:MaxErrors` parameter if both are supplied.
   *
   * @public
   */
  TargetsMaxErrors?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssociationRequest {
  /**
   * The name of the SSM Command document or Automation runbook that contains the configuration information for the managed node.
   *
   * You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another Amazon Web Services account.
   *
   * For Systems Manager documents (SSM documents) that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format:
   *
   * `arn:partition:ssm:region:account-id:document/document-name`
   *
   * For example:
   *
   * `arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document`
   *
   * For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, `AWS-ApplyPatchBaseline` or `My-Document`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The document version you want to associate with the targets. Can be a specific version or the default version.
   *
   * > **Important:** State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the `default` version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to `default`.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The managed node ID.
   *
   * > **Note:** `InstanceId` has been deprecated. To specify a managed node ID for an association, use the `Targets` parameter. Requests that include the parameter `InstanceID` with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter `InstanceId`, you can't use the parameters `AssociationName`, `DocumentVersion`, `MaxErrors`, `MaxConcurrency`, `OutputLocation`, or `ScheduleExpression`. To use these parameters, you must use the `Targets` parameter.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The parameters for the runtime configuration of the document.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The targets for the association. You can target managed nodes by using tags, Amazon Web Services resource groups, all managed nodes in an Amazon Web Services account, or individual managed node IDs. You can target all managed nodes in an Amazon Web Services account by specifying the `InstanceIds` key with a value of `*`. For more information about choosing targets for an association, see [Understanding targets and rate controls in State Manager associations](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state-manager-targets-and-rate-controls.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A cron expression when the association will be applied to the targets.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output details of the request.
   *
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * Specify a descriptive name for the association.
   *
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
   *
   * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
   *
   * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency`.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The severity level to assign to the association.
   *
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT`. If the association execution doesn't run successfully, the association is `NON-COMPLIANT`.
   *
   * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager. It is managed by your direct call to the PutComplianceItems API operation.
   *
   * By default, all associations use `AUTO` mode.
   *
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified and when target changes are detected. Specify `true` for `ApplyOnlyAtCronInterval`if you want the association to run only according to the schedule you specified.
   *
   * For more information, see [Understanding when associations are applied to resources](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#state-manager-about-scheduling) and [>About target updates with Automation runbooks](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#runbook-target-updates) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * This parameter isn't supported for rate expressions.
   *
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * The names of Amazon Resource Names (ARNs) of the Change Calendar type documents you want to gate your associations under. The associations only run when that change calendar is open. For more information, see [Amazon Web Services Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association. Use this action to create an association in multiple Regions and multiple accounts.
   *
   * > **Note:** The `TargetLocationAlarmConfiguration` parameter is not supported by State Manager.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * Number of days to wait after the scheduled day to run an association. For example, if you specified a cron schedule of `cron(0 0 ? * THU#2 *)`, you could specify an offset of 3 to run the association each Sunday after the second Thursday of the month. For more information about cron schedules for associations, see [Reference: Cron and rate expressions for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * > **Note:** To use offsets, you must specify the `ApplyOnlyAtCronInterval` parameter. This option tells the system not to run an association immediately after you create it.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The number of hours the association can run before it is canceled. Duration applies to associations that are currently running, and any pending and in progress commands on all targets. If a target was taken offline for the association to run, it is made available again immediately, without a reboot.
   *
   * The `Duration` parameter applies only when both these conditions are true:
   *
   * - The association for which you specify a duration is cancelable according to the parameters of the SSM command document or Automation runbook associated with this execution.
   * - The command specifies the `ApplyOnlyAtCronInterval` parameter, which means that the association doesn't run immediately after it is created, but only according to the specified schedule.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * Adds or overwrites one or more tags for a State Manager association. *Tags* are metadata that you can assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The details for the CloudWatch alarm you want to apply to an automation or command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, [service-linked role for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html) will be used by default.
   *
   * > **Note:**
   * >
   * > It is recommended that you define a custom IAM role so that you have full control of the permissions that State Manager has when taking actions on your behalf.
   * >
   * > Service-linked role support in State Manager is being phased out. Associations relying on service-linked role may require updates in the future to continue functioning properly.
   *
   * @public
   */
  AssociationDispatchAssumeRole?: string | undefined;
}

/**
 * Information about the association.
 *
 * @public
 */
export interface AssociationOverview {
  /**
   * The status of the association. Status can be: Pending, Success, or Failed.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A detailed status of the association.
   *
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * Returns the number of targets for the association status. For example, if you created an association with two managed nodes, and one of them was successful, this would return the count of managed nodes by status.
   *
   * @public
   */
  AssociationStatusAggregatedCount?: Record<string, number> | undefined;
}

/**
 * Describes an association status.
 *
 * @public
 */
export interface AssociationStatus {
  /**
   * The date when the status changed.
   *
   * @public
   */
  Date: Date | undefined;

  /**
   * The status.
   *
   * @public
   */
  Name: AssociationStatusName | undefined;

  /**
   * The reason for the status.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * A user-defined string.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;
}

/**
 * Describes the parameters for a document.
 *
 * @public
 */
export interface AssociationDescription {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The association version.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * The date when the association was made.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The date when the association was last updated.
   *
   * @public
   */
  LastUpdateAssociationDate?: Date | undefined;

  /**
   * The association status.
   *
   * @public
   */
  Status?: AssociationStatus | undefined;

  /**
   * Information about the association.
   *
   * @public
   */
  Overview?: AssociationOverview | undefined;

  /**
   * The document version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * A description of the parameters for a document.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The managed nodes targeted by the request.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A cron expression that specifies a schedule when the association runs.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * An S3 bucket where you want to store the output details of the request.
   *
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * The date on which the association was last run.
   *
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * The last date on which the association was successfully run.
   *
   * @public
   */
  LastSuccessfulExecutionDate?: Date | undefined;

  /**
   * The association name.
   *
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
   *
   * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
   *
   * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency`.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The severity level that is assigned to the association.
   *
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT`. If the association execution doesn't run successfully, the association is `NON-COMPLIANT`.
   *
   * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation.
   *
   * By default, all associations use `AUTO` mode.
   *
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * By default, when you create a new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.
   *
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations only run when that change calendar is open. For more information, see [Amazon Web Services Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * The combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * Number of days to wait after the scheduled day to run an association.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The number of hours that an association can run on specified targets. After the resulting cutoff time passes, associations that are currently running are cancelled, and no pending executions are started on remaining targets.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * The details for the CloudWatch alarm you want to apply to an automation or command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarm that was invoked during the association.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, [service-linked role for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html) will be used by default.
   *
   * @public
   */
  AssociationDispatchAssumeRole?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssociationResult {
  /**
   * Information about the association.
   *
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * Describes the association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.
 *
 * @public
 */
export interface CreateAssociationBatchRequestEntry {
  /**
   * The name of the SSM document that contains the configuration information for the managed node. You can specify Command or Automation runbooks.
   *
   * You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another account.
   *
   * For SSM documents that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format:
   *
   * `arn:aws:ssm:region:account-id:document/document-name`
   *
   * For example:
   *
   * `arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document`
   *
   * For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, `AWS-ApplyPatchBaseline` or `My-Document`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The managed node ID.
   *
   * > **Note:** `InstanceId` has been deprecated. To specify a managed node ID for an association, use the `Targets` parameter. Requests that include the parameter `InstanceID` with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter `InstanceId`, you can't use the parameters `AssociationName`, `DocumentVersion`, `MaxErrors`, `MaxConcurrency`, `OutputLocation`, or `ScheduleExpression`. To use these parameters, you must use the `Targets` parameter.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A description of the parameters for a document.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * Specify the target for the association. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * The document version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The managed nodes targeted by the request.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A cron expression that specifies a schedule when the association runs.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * An S3 bucket where you want to store the results of this request.
   *
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * Specify a descriptive name for the association.
   *
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
   *
   * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
   *
   * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency`.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The severity level to assign to the association.
   *
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT`. If the association execution doesn't run successfully, the association is `NON-COMPLIANT`.
   *
   * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation.
   *
   * By default, all associations use `AUTO` mode.
   *
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified and when target changes are detected. Specify `true` for `ApplyOnlyAtCronInterval` if you want the association to run only according to the schedule you specified.
   *
   * For more information, see [Understanding when associations are applied to resources](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#state-manager-about-scheduling) and [>About target updates with Automation runbooks](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#runbook-target-updates) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * This parameter isn't supported for rate expressions.
   *
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations only run when that Change Calendar is open. For more information, see [Amazon Web Services Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * Use this action to create an association in multiple Regions and multiple accounts.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * Number of days to wait after the scheduled day to run an association.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The number of hours the association can run before it is canceled. Duration applies to associations that are currently running, and any pending and in progress commands on all targets. If a target was taken offline for the association to run, it is made available again immediately, without a reboot.
   *
   * The `Duration` parameter applies only when both these conditions are true:
   *
   * - The association for which you specify a duration is cancelable according to the parameters of the SSM command document or Automation runbook associated with this execution.
   * - The command specifies the `ApplyOnlyAtCronInterval` parameter, which means that the association doesn't run immediately after it is created, but only according to the specified schedule.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * The details for the CloudWatch alarm you want to apply to an automation or command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssociationBatchRequest {
  /**
   * One or more associations.
   *
   * @public
   */
  Entries: CreateAssociationBatchRequestEntry[] | undefined;

  /**
   * A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, [service-linked role for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html) will be used by default.
   *
   * > **Note:**
   * >
   * > It is recommended that you define a custom IAM role so that you have full control of the permissions that State Manager has when taking actions on your behalf.
   * >
   * > Service-linked role support in State Manager is being phased out. Associations relying on service-linked role may require updates in the future to continue functioning properly.
   *
   * @public
   */
  AssociationDispatchAssumeRole?: string | undefined;
}

/**
 * Describes a failed association.
 *
 * @public
 */
export interface FailedCreateAssociation {
  /**
   * The association.
   *
   * @public
   */
  Entry?: CreateAssociationBatchRequestEntry | undefined;

  /**
   * A description of the failure.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The source of the failure.
   *
   * @public
   */
  Fault?: Fault | undefined;
}

/**
 * @public
 */
export interface CreateAssociationBatchResult {
  /**
   * Information about the associations that succeeded.
   *
   * @public
   */
  Successful?: AssociationDescription[] | undefined;

  /**
   * Information about the associations that failed.
   *
   * @public
   */
  Failed?: FailedCreateAssociation[] | undefined;
}

/**
 * Information about an Azure subscription targeted by the cloud connector.
 *
 * @public
 */
export interface AzureSubscription {
  /**
   * The ID of the Azure subscription.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The display name of the Azure subscription.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * The target resources in the third-party cloud environment.
 *
 * @public
 */
export type ConfigurationTargets =
  | ConfigurationTargets.SubscriptionsMember
  | ConfigurationTargets.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationTargets {
  /**
   * A list of Azure subscriptions to target.
   *
   * @public
   */
  export interface SubscriptionsMember {
    Subscriptions: AzureSubscription[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Subscriptions?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Subscriptions: (value: AzureSubscription[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The access details and targets for connecting to a Microsoft Azure tenant, including the application registration used for authentication and the subscriptions to target.
 *
 * @public
 */
export interface AzureConfiguration {
  /**
   * The ID of the Azure tenant.
   *
   * @public
   */
  TenantId: string | undefined;

  /**
   * The display name of the Azure tenant.
   *
   * @public
   */
  TenantDisplayName?: string | undefined;

  /**
   * The ID of the Azure application registration used for authentication.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The display name of the Azure application registration.
   *
   * @public
   */
  ApplicationDisplayName?: string | undefined;

  /**
   * The target Azure subscriptions for the cloud connector.
   *
   * @public
   */
  Targets?: ConfigurationTargets | undefined;
}

/**
 * The configuration that provides access details and targets for connecting to a third-party cloud environment.
 *
 * @public
 */
export type CloudConnectorConfiguration =
  | CloudConnectorConfiguration.AzureConfigurationMember
  | CloudConnectorConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CloudConnectorConfiguration {
  /**
   * The access details and targets for connecting to a Microsoft Azure environment.
   *
   * @public
   */
  export interface AzureConfigurationMember {
    AzureConfiguration: AzureConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AzureConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AzureConfiguration: (value: AzureConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateCloudConnectorRequest {
  /**
   * A friendly name for the cloud connector.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the cloud connector uses to communicate with the third-party cloud environment.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A description for the cloud connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration details for connecting to the third-party cloud environment.
   *
   * @public
   */
  Configuration: CloudConnectorConfiguration | undefined;

  /**
   * The ARN of the Amazon Web Services Config connector associated with this cloud connector.
   *
   * @public
   */
  ConfigConnectorArn: string | undefined;

  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCloudConnectorResult {
  /**
   * The ID of the cloud connector that was created.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;
}

/**
 * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
 *
 * @public
 */
export interface AttachmentsSource {
  /**
   * The key of a key-value pair that identifies the location of an attachment to a document.
   *
   * @public
   */
  Key?: AttachmentsSourceKey | undefined;

  /**
   * The value of a key-value pair that identifies the location of an attachment to a document. The format for **Value** depends on the type of key you specify.
   *
   * - For the key *SourceUrl*, the value is an S3 bucket location. For example:
   *
   *   `"Values": [ "s3://amzn-s3-demo-bucket/my-prefix" ]`
   * - For the key *S3FileUrl*, the value is a file in an S3 bucket. For example:
   *
   *   `"Values": [ "s3://amzn-s3-demo-bucket/my-prefix/my-file.py" ]`
   * - For the key *AttachmentReference*, the value is constructed from the name of another SSM document in your account, a version number of that document, and a file attached to that document version that you want to reuse. For example:
   *
   *   `"Values": [ "MyOtherDocument/3/my-other-file.py" ]`
   *
   *   However, if the SSM document is shared with you from another account, the full SSM document ARN must be specified instead of the document name only. For example:
   *
   *   `"Values": [ "arn:aws:ssm:us-east-2:111122223333:document/OtherAccountDocument/3/their-file.py" ]`
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The name of the document attachment file.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * An SSM document required by the current document.
 *
 * @public
 */
export interface DocumentRequires {
  /**
   * The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The document version required by the current document.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The document type of the required SSM document.
   *
   * @public
   */
  RequireType?: string | undefined;

  /**
   * An optional field specifying the version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDocumentRequest {
  /**
   * The content for the new SSM document in JSON or YAML format. The content of the document must not exceed 64KB. This quota also includes the content specified for input parameters at runtime. We recommend storing the contents for your new document in an external JSON or YAML file and referencing the file in a command.
   *
   * For examples, see the following topics in the *Amazon Web Services Systems Manager User Guide*.
   *
   * - [Create an SSM document (console)](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-using.html#create-ssm-console)
   * - [Create an SSM document (command line)](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-using.html#create-ssm-document-cli)
   * - [Create an SSM document (API)](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-using.html#create-ssm-document-api)
   *
   * @public
   */
  Content: string | undefined;

  /**
   * A list of SSM documents required by a document. This parameter is used exclusively by AppConfig. When a user creates an AppConfig configuration in an SSM document, the user must also specify a required document for validation purposes. In this case, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document for validation purposes. For more information, see [What is AppConfig?](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AppConfig User Guide*.
   *
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * A list of key-value pairs that describe attachments to a version of a document.
   *
   * @public
   */
  Attachments?: AttachmentsSource[] | undefined;

  /**
   * A name for the SSM document.
   *
   * > **Important:**
   * >
   * > You can't use the following strings as document name prefixes. These are reserved by Amazon Web Services for use as document name prefixes:
   * >
   * > - `aws`
   * > - `amazon`
   * > - `amzn`
   * > - `AWSEC2`
   * > - `AWSConfigRemediation`
   * > - `AWSSupport`
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional field where you can specify a friendly name for the SSM document. This value can differ for each version of the document. You can update this value at a later time using the UpdateDocument operation.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * An optional field specifying the version of the artifact you are creating with the document. For example, `Release12.1`. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The type of document to create.
   *
   * > **Note:** The `DeploymentStrategy` document type is an internal-use-only document type reserved for AppConfig.
   *
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * Specify the document format for the request. The document format can be JSON, YAML, or TEXT. JSON is the default format.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: `/AWS::EC2::Instance`. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  TargetType?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an SSM document to identify the types of targets or the environment where it will run. In this case, you could specify the following key-value pairs:
   *
   * - `Key=OS,Value=Windows`
   * - `Key=Environment,Value=Production`
   *
   * > **Note:** To add tags to an existing SSM document, use the AddTagsToResource operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An attribute of an attachment, such as the attachment name.
 *
 * @public
 */
export interface AttachmentInformation {
  /**
   * The name of the attachment.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Parameters specified in a Systems Manager document that run on the server when the command is run.
 *
 * @public
 */
export interface DocumentParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of parameter. The type can be either String or StringList.
   *
   * @public
   */
  Type?: DocumentParameterType | undefined;

  /**
   * A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If specified, the default values for the parameters. Parameters without a default value are required. Parameters with a default value are optional.
   *
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * Information about the result of a document review request.
 *
 * @public
 */
export interface ReviewInformation {
  /**
   * The time that the reviewer took action on the document review request.
   *
   * @public
   */
  ReviewedTime?: Date | undefined;

  /**
   * The current status of the document review request.
   *
   * @public
   */
  Status?: ReviewStatus | undefined;

  /**
   * The reviewer assigned to take action on the document review request.
   *
   * @public
   */
  Reviewer?: string | undefined;
}

/**
 * Describes an Amazon Web Services Systems Manager document (SSM document).
 *
 * @public
 */
export interface DocumentDescription {
  /**
   * The SHA1 hash of the document, which you can use for verification.
   *
   * @public
   */
  Sha1?: string | undefined;

  /**
   * The Sha256 or Sha1 hash created by the system when the document was created.
   *
   * > **Note:** Sha1 hashes have been deprecated.
   *
   * @public
   */
  Hash?: string | undefined;

  /**
   * The hash type of the document. Valid values include `Sha256` or `Sha1`.
   *
   * > **Note:** Sha1 hashes have been deprecated.
   *
   * @public
   */
  HashType?: DocumentHashType | undefined;

  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The version of the artifact associated with the document.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The Amazon Web Services user that created the document.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date when the document was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The status of the SSM document.
   *
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * A message returned by Amazon Web Services Systems Manager that explains the `Status` value. For example, a `Failed` status might be explained by the `StatusInformation` message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."
   *
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * The document version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * A description of the document.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A description of the parameters for a document.
   *
   * @public
   */
  Parameters?: DocumentParameter[] | undefined;

  /**
   * The list of operating system (OS) platforms compatible with this SSM document.
   *
   * @public
   */
  PlatformTypes?: PlatformType[] | undefined;

  /**
   * The type of document.
   *
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * The schema version.
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The latest version of the document.
   *
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The default version.
   *
   * @public
   */
  DefaultVersion?: string | undefined;

  /**
   * The document format, either JSON or YAML.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * The target type which defines the kinds of resources the document can run on. For example, `/AWS::EC2::Instance`. For a list of valid resource types, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  TargetType?: string | undefined;

  /**
   * The tags, or metadata, that have been applied to the document.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Details about the document attachments, including names, locations, sizes, and so on.
   *
   * @public
   */
  AttachmentsInformation?: AttachmentInformation[] | undefined;

  /**
   * A list of SSM documents required by a document. For example, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document.
   *
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * The user in your organization who created the document.
   *
   * @public
   */
  Author?: string | undefined;

  /**
   * Details about the review of a document.
   *
   * @public
   */
  ReviewInformation?: ReviewInformation[] | undefined;

  /**
   * The version of the document currently approved for use in the organization.
   *
   * @public
   */
  ApprovedVersion?: string | undefined;

  /**
   * The version of the document that is currently under review.
   *
   * @public
   */
  PendingReviewVersion?: string | undefined;

  /**
   * The current status of the review.
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * The classification of a document to help you identify and categorize its use.
   *
   * @public
   */
  Category?: string[] | undefined;

  /**
   * The value that identifies a document's category.
   *
   * @public
   */
  CategoryEnum?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDocumentResult {
  /**
   * Information about the SSM document.
   *
   * @public
   */
  DocumentDescription?: DocumentDescription | undefined;
}

/**
 * @public
 */
export interface CreateMaintenanceWindowRequest {
  /**
   * The name of the maintenance window.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description for the maintenance window. We recommend specifying a description to help you organize your maintenance windows.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become active. `StartDate` allows you to delay activation of the maintenance window until the specified future date.
   *
   * > **Note:** When using a rate schedule, if you provide a start date that occurs in the past, the current date and time are used as the start date.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become inactive. `EndDate` allows you to set a date and time in the future when the maintenance window will no longer run.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The schedule of the maintenance window in the form of a cron or rate expression.
   *
   * @public
   */
  Schedule: string | undefined;

  /**
   * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
   *
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * The number of days to wait after the date and time specified by a cron expression before running the maintenance window.
   *
   * For example, the following cron expression schedules a maintenance window to run on the third Tuesday of every month at 11:30 PM.
   *
   * `cron(30 23 ? * TUE#3 *)`
   *
   * If the schedule offset is `2`, the maintenance window won't run until two days later.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The duration of the maintenance window in hours.
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
   *
   * @public
   */
  Cutoff: number | undefined;

  /**
   * Enables a maintenance window task to run on managed nodes, even if you haven't registered those nodes as targets. If enabled, then you must specify the unregistered managed nodes (by node ID) when you register a task with the maintenance window.
   *
   * If you don't enable this option, then you must specify previously-registered targets when you register a task with the maintenance window.
   *
   * @public
   */
  AllowUnassociatedTargets: boolean | undefined;

  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in. In this case, you could specify the following key-value pairs:
   *
   * - `Key=TaskType,Value=AgentUpdate`
   * - `Key=OS,Value=Windows`
   * - `Key=Environment,Value=Production`
   *
   * > **Note:** To add tags to an existing maintenance window, use the AddTagsToResource operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMaintenanceWindowResult {
  /**
   * The ID of the created maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;
}

/**
 * A notification about the OpsItem.
 *
 * @public
 */
export interface OpsItemNotification {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where notifications are sent when this OpsItem is edited or changed.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * An object that defines the value of the key and its type in the OperationalData map.
 *
 * @public
 */
export interface OpsItemDataValue {
  /**
   * The value of the OperationalData key.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The type of key-value pair. Valid types include `SearchableString` and `String`.
   *
   * @public
   */
  Type?: OpsItemDataType | undefined;
}

/**
 * An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
 *
 * @public
 */
export interface RelatedOpsItem {
  /**
   * The ID of an OpsItem related to the current OpsItem.
   *
   * @public
   */
  OpsItemId: string | undefined;
}

/**
 * @public
 */
export interface CreateOpsItemRequest {
  /**
   * User-defined text that contains information about the OpsItem, in Markdown format.
   *
   * > **Note:** Provide enough information so that users viewing this OpsItem for the first time understand the issue.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The type of OpsItem to create. Systems Manager supports the following types of OpsItems:
   *
   * - `/aws/issue`
   *
   *   This type of OpsItem is used for default OpsItems created by OpsCenter.
   * - `/aws/insight`
   *
   *   This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.
   * - `/aws/changerequest`
   *
   *   This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests.
   *
   *   > **Important:** Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services Systems Manager Change Manager availability change](https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-availability-change.html).
   *
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.
   *
   * > **Important:** Operational data keys *can't* begin with the following: `amazon`, `aws`, `amzn`, `ssm`, `/amazon`, `/aws`, `/amzn`, `/ssm`.
   *
   * You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation).
   *
   * Use the `/aws/resources` key in OperationalData to specify a related resource in the request. Use the `/aws/automations` key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see [Create OpsItems manually](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this OpsItem is edited or changed.
   *
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * The importance of this OpsItem in relation to other OpsItems in the system.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * One or more OpsItems that share something in common with the current OpsItems. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
   *
   * @public
   */
  RelatedOpsItems?: RelatedOpsItem[] | undefined;

  /**
   * The origin of the OpsItem, such as Amazon EC2 or Systems Manager.
   *
   * > **Note:** The source name can't contain the following strings: `aws`, `amazon`, and `amzn`.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * A short heading that describes the nature of the OpsItem and the impacted resource.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * Optional metadata that you assign to a resource.
   *
   * Tags use a key-value pair. For example:
   *
   * `Key=Department,Value=Finance`
   *
   * > **Important:** To add tags to a new OpsItem, a user must have IAM permissions for both the `ssm:CreateOpsItems` operation and the `ssm:AddTagsToResource` operation. To add tags to an existing OpsItem, use the AddTagsToResource operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specify a category to assign to an OpsItem.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * Specify a severity to assign to an OpsItem.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The time a runbook workflow started. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * The time a runbook workflow ended. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedEndTime?: Date | undefined;

  /**
   * The target Amazon Web Services account where you want to create an OpsItem. To make this call, your account must be configured to work with OpsItems across accounts. For more information, see [Set up OpsCenter](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface CreateOpsItemResponse {
  /**
   * The ID of the OpsItem.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * The OpsItem Amazon Resource Name (ARN).
   *
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * Metadata to assign to an Application Manager application.
 *
 * @public
 */
export interface MetadataValue {
  /**
   * Metadata value to assign to an Application Manager application.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateOpsMetadataRequest {
  /**
   * A resource ID for a new Application Manager application.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Metadata for a new Application Manager application.
   *
   * @public
   */
  Metadata?: Record<string, MetadataValue> | undefined;

  /**
   * Optional metadata that you assign to a resource. You can specify a maximum of five tags for an OpsMetadata object. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an OpsMetadata object to identify an environment or target Amazon Web Services Region. In this case, you could specify the following key-value pairs:
   *
   * - `Key=Environment,Value=Production`
   * - `Key=Region,Value=us-east-2`
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOpsMetadataResult {
  /**
   * The Amazon Resource Name (ARN) of the OpsMetadata Object or blob created by the call.
   *
   * @public
   */
  OpsMetadataArn?: string | undefined;
}

/**
 * Defines which patches should be included in a patch baseline.
 *
 * A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for `WINDOWS` are `PATCH_SET`, `PRODUCT`, `PRODUCT_FAMILY`, `CLASSIFICATION`, and `MSRC_SEVERITY`.
 *
 * The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is `PRODUCT` and the filter values are `["Office 2013", "Office 2016"]`, then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.
 *
 * You can view lists of valid values for the patch properties by running the `DescribePatchProperties` command. For information about which patch properties can be used with each major operating system, see DescribePatchProperties.
 *
 * @public
 */
export interface PatchFilter {
  /**
   * The key for the filter.
   *
   * Run the DescribePatchProperties command to view lists of valid keys for each operating system type.
   *
   * @public
   */
  Key: PatchFilterKey | undefined;

  /**
   * The value for the filter key.
   *
   * Run the DescribePatchProperties command to view lists of valid values for each key based on operating system type.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A set of patch filters, typically used for approval rules.
 *
 * @public
 */
export interface PatchFilterGroup {
  /**
   * The set of patch filters that make up the group.
   *
   * @public
   */
  PatchFilters: PatchFilter[] | undefined;
}

/**
 * Defines an approval rule for a patch baseline.
 *
 * @public
 */
export interface PatchRule {
  /**
   * The patch filter group that defines the criteria for the rule.
   *
   * @public
   */
  PatchFilterGroup: PatchFilterGroup | undefined;

  /**
   * A compliance severity level for all approved patches in a patch baseline.
   *
   * @public
   */
  ComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline. For example, a value of `7` means that patches are approved seven days after they are released.
   *
   * Patch Manager evaluates patch release dates using Coordinated Universal Time (UTC). If a patch is released at `2025-11-09T18:00:00Z` and `ApproveAfterDays` is set to `7`, the patch will be approved after `2025-11-16T18:00:00Z`.
   *
   * This parameter is marked as `Required: No`, but your request must include a value for either `ApproveAfterDays` or `ApproveUntilDate`.
   *
   * Not supported for Debian Server or Ubuntu Server.
   *
   * > **Important:** Use caution when setting this value for Windows Server patch baselines. Because patch updates that are replaced by later updates are removed, setting too broad a value for this parameter can result in crucial patches not being installed. For more information, see the **Windows Server** tab in the topic [How security patches are selected](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-selecting-patches.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ApproveAfterDays?: number | undefined;

  /**
   * The cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically.
   *
   * Enter dates in the format `YYYY-MM-DD`. For example, `2025-11-16`.
   *
   * Patch Manager evaluates patch release dates using Coordinated Universal Time (UTC). If you enter the date `2025-11-16`, patches released between `2025-11-16T00:00:00Z` and `2025-11-16T23:59:59Z` will be included in the approval.
   *
   * This parameter is marked as `Required: No`, but your request must include a value for either `ApproveUntilDate` or `ApproveAfterDays`.
   *
   * Not supported for Debian Server or Ubuntu Server.
   *
   * > **Important:** Use caution when setting this value for Windows Server patch baselines. Because patch updates that are replaced by later updates are removed, setting too broad a value for this parameter can result in crucial patches not being installed. For more information, see the **Windows Server** tab in the topic [How security patches are selected](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-selecting-patches.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ApproveUntilDate?: string | undefined;

  /**
   * For managed nodes identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository. The default value is `false`. Applies to Linux managed nodes only.
   *
   * @public
   */
  EnableNonSecurity?: boolean | undefined;
}

/**
 * A set of rules defining the approval rules for a patch baseline.
 *
 * @public
 */
export interface PatchRuleGroup {
  /**
   * The rules that make up the rule group.
   *
   * @public
   */
  PatchRules: PatchRule[] | undefined;
}

/**
 * Information about the patches to use to update the managed nodes, including target operating systems and source repository. Applies to Linux managed nodes only.
 *
 * @public
 */
export interface PatchSource {
  /**
   * The name specified to identify the patch source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see PatchFilter.
   *
   * @public
   */
  Products: string[] | undefined;

  /**
   * The value of the repo configuration.
   *
   * **Example for yum repositories**
   *
   * `[main]`
   *
   * `name=MyCustomRepository`
   *
   * `baseurl=https://my-custom-repository`
   *
   * `enabled=1`
   *
   * For information about other options available for your yum repository configuration, see [dnf.conf(5)](https://man7.org/linux/man-pages/man5/dnf.conf.5.html) on the *man7.org* website.
   *
   * **Examples for Ubuntu Server and Debian Server**
   *
   * `deb http://security.ubuntu.com/ubuntu jammy main`
   *
   * `deb https://site.example.com/debian distribution component1 component2 component3`
   *
   * Repo information for Ubuntu Server repositories must be specifed in a single line. For more examples and information, see [jammy (5) sources.list.5.gz](https://manpages.ubuntu.com/manpages/jammy/man5/sources.list.5.html) on the *Ubuntu Server Manuals* website and [sources.list format](https://wiki.debian.org/SourcesList#sources.list_format) on the *Debian Wiki*.
   *
   * @public
   */
  Configuration: string | undefined;
}

/**
 * @public
 */
export interface CreatePatchBaselineRequest {
  /**
   * Defines the operating system the patch baseline applies to. The default value is `WINDOWS`.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * The name of the patch baseline.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A set of global filters used to include patches in the baseline.
   *
   * > **Important:** The `GlobalFilters` parameter can be configured only by using the CLI or an Amazon Web Services SDK. It can't be configured from the Patch Manager console, and its value isn't displayed in the console.
   *
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * A set of rules used to include patches in the baseline.
   *
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * A list of explicitly approved patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation. The default value is `UNSPECIFIED`.
   *
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
   *
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * A list of explicitly rejected patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * The action for Patch Manager to take on patches included in the `RejectedPackages` list.
   *
   * - **ALLOW_AS_DEPENDENCY**
   *
   *   **Linux and macOS**: A package in the rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as `INSTALLED_OTHER`. This is the default action if no option is specified.
   *
   *   **Windows Server**: Windows Server doesn't support the concept of package dependencies. If a package in the rejected patches list and already installed on the node, its status is reported as `INSTALLED_OTHER`. Any package not already installed on the node is skipped. This is the default action if no option is specified.
   *
   * - **BLOCK**
   *
   *   **All OSs**: Packages in the rejected patches list, and packages that include them as dependencies, aren't installed by Patch Manager under any circumstances.
   *
   *   State value assignment for patch compliance:
   *
   *   - If a package was installed before it was added to the rejected patches list, or is installed outside of Patch Manager afterward, it's considered noncompliant with the patch baseline and its status is reported as `INSTALLED_REJECTED`.
   *   - If an update attempts to install a dependency package that is now rejected by the baseline, when previous versions of the package were not rejected, the package being updated is reported as `MISSING` for `SCAN` operations and as `FAILED` for `INSTALL` operations.
   *
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * A description of the patch baseline.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
   *
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * Indicates the status you want to assign to security patches that are available but not approved because they don't meet the installation criteria specified in the patch baseline.
   *
   * Example scenario: Security patches that you might want installed can be skipped if you have specified a long period to wait after a patch is released before installation. If an update to the patch is released during your specified waiting period, the waiting period for installing the patch starts over. If the waiting period is too long, multiple versions of the patch could be released but never installed.
   *
   * Supported for Windows Server managed nodes only.
   *
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;

  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to. In this case, you could specify the following key-value pairs:
   *
   * - `Key=PatchSeverity,Value=Critical`
   * - `Key=OS,Value=Windows`
   *
   * > **Note:** To add tags to an existing patch baseline, use the AddTagsToResource operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePatchBaselineResult {
  /**
   * The ID of the created patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;
}

/**
 * Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID.
 *
 * @public
 */
export interface ResourceDataSyncDestinationDataSharing {
  /**
   * The sharing data type. Only `Organization` is supported.
   *
   * @public
   */
  DestinationDataSharingType?: string | undefined;
}

/**
 * Information about the target S3 bucket for the resource data sync.
 *
 * @public
 */
export interface ResourceDataSyncS3Destination {
  /**
   * The name of the S3 bucket where the aggregated data is stored.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * An Amazon S3 prefix for the bucket.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A supported sync format. The following format is currently supported: JsonSerDe
   *
   * @public
   */
  SyncFormat: ResourceDataSyncS3Format | undefined;

  /**
   * The Amazon Web Services Region with the S3 bucket targeted by the resource data sync.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The ARN of an encryption key for a destination in Amazon S3. Must belong to the same Region as the destination S3 bucket.
   *
   * @public
   */
  AWSKMSKeyARN?: string | undefined;

  /**
   * Enables destination data sharing. By default, this field is `null`.
   *
   * @public
   */
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing | undefined;
}

/**
 * The Organizations organizational unit data source for the sync.
 *
 * @public
 */
export interface ResourceDataSyncOrganizationalUnit {
  /**
   * The Organizations unit ID data source for the sync.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * Information about the `AwsOrganizationsSource` resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.
 *
 * @public
 */
export interface ResourceDataSyncAwsOrganizationsSource {
  /**
   * If an Amazon Web Services organization is present, this is either `OrganizationalUnits` or `EntireOrganization`. For `OrganizationalUnits`, the data is aggregated from a set of organization units. For `EntireOrganization`, the data is aggregated from the entire Amazon Web Services organization.
   *
   * @public
   */
  OrganizationSourceType: string | undefined;

  /**
   * The Organizations organization units included in the sync.
   *
   * @public
   */
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[] | undefined;
}

/**
 * Information about the source of the data included in the resource data sync.
 *
 * @public
 */
export interface ResourceDataSyncSource {
  /**
   * The type of data source for the resource data sync. `SourceType` is either `AwsOrganizations` (if an organization is present in Organizations) or `SingleAccountMultiRegions`.
   *
   * @public
   */
  SourceType: string | undefined;

  /**
   * Information about the `AwsOrganizationsSource` resource data sync source. A sync source of this type can synchronize data from Organizations.
   *
   * @public
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;

  /**
   * The `SyncSource` Amazon Web Services Regions included in the resource data sync.
   *
   * @public
   */
  SourceRegions: string[] | undefined;

  /**
   * Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those Regions come online.
   *
   * @public
   */
  IncludeFutureRegions?: boolean | undefined;

  /**
   * When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in your organization (or in the selected organization units). For more information, see [Setting up Systems Manager Explorer to display data from multiple accounts and Regions](https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  EnableAllOpsDataSources?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateResourceDataSyncRequest {
  /**
   * A name for the configuration.
   *
   * @public
   */
  SyncName: string | undefined;

  /**
   * Amazon S3 configuration details for the sync. This parameter is required if the `SyncType` value is SyncToDestination.
   *
   * @public
   */
  S3Destination?: ResourceDataSyncS3Destination | undefined;

  /**
   * Specify `SyncToDestination` to create a resource data sync that synchronizes data to an S3 bucket for Inventory. If you specify `SyncToDestination`, you must provide a value for `S3Destination`. Specify `SyncFromSource` to synchronize data from a single account and multiple Regions, or multiple Amazon Web Services accounts and Amazon Web Services Regions, as listed in Organizations for Explorer. If you specify `SyncFromSource`, you must provide a value for `SyncSource`. The default value is `SyncToDestination`.
   *
   * @public
   */
  SyncType?: string | undefined;

  /**
   * Specify information about the data sources to synchronize. This parameter is required if the `SyncType` value is SyncFromSource.
   *
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
   * The ID of the activation that you want to delete.
   *
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
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The managed node ID.
   *
   * > **Note:** `InstanceId` has been deprecated. To specify a managed node ID for an association, use the `Targets` parameter. Requests that include the parameter `InstanceID` with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter `InstanceId`, you can't use the parameters `AssociationName`, `DocumentVersion`, `MaxErrors`, `MaxConcurrency`, `OutputLocation`, or `ScheduleExpression`. To use these parameters, you must use the `Targets` parameter.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The association ID that you want to delete.
   *
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
export interface DeleteCloudConnectorRequest {
  /**
   * The ID of the cloud connector to delete.
   *
   * @public
   */
  CloudConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCloudConnectorResult {
  /**
   * The ID of the cloud connector that was deleted.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentRequest {
  /**
   * The name of the document.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of the document that you want to delete. If not provided, all versions of the document are deleted.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The version name of the document that you want to delete. If not provided, all versions of the document are deleted.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * Some SSM document types require that you specify a `Force` flag before you can delete the document. For example, you must specify a `Force` flag to delete a document of type `ApplicationConfigurationSchema`. You can restrict access to the `Force` flag in an Identity and Access Management (IAM) policy.
   *
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
   * The name of the custom inventory type for which you want to delete either all previously collected data or the inventory type itself.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * Use the `SchemaDeleteOption` to delete a custom inventory type (schema). If you don't choose this option, the system only deletes existing inventory data associated with the custom inventory type. Choose one of the following options:
   *
   * DisableSchema: If you choose this option, the system ignores all inventory data for the specified version, and any earlier versions. To enable this schema again, you must call the `PutInventory` operation for a version greater than the disabled version.
   *
   * DeleteSchema: This option deletes the specified custom type from the Inventory service. You can recreate the schema later, if you want.
   *
   * @public
   */
  SchemaDeleteOption?: InventorySchemaDeleteOption | undefined;

  /**
   * Use this option to view a summary of the deletion request without deleting any data or the data type. This option is useful when you only want to understand what will be deleted. Once you validate that the data to be deleted is what you intend to delete, you can run the same command without specifying the `DryRun` option.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Either a count, remaining count, or a version number in a delete inventory summary.
 *
 * @public
 */
export interface InventoryDeletionSummaryItem {
  /**
   * The inventory type version.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * A count of the number of deleted items.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The remaining number of items to delete.
   *
   * @public
   */
  RemainingCount?: number | undefined;
}

/**
 * Information about the delete operation.
 *
 * @public
 */
export interface InventoryDeletionSummary {
  /**
   * The total number of items to delete. This count doesn't change during the delete operation.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * Remaining number of items to delete.
   *
   * @public
   */
  RemainingCount?: number | undefined;

  /**
   * A list of counts and versions for deleted items.
   *
   * @public
   */
  SummaryItems?: InventoryDeletionSummaryItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteInventoryResult {
  /**
   * Every `DeleteInventory` operation is assigned a unique ID. This option returns a unique ID. You can use this ID to query the status of a delete operation. This option is useful for ensuring that a delete operation has completed before you begin other operations.
   *
   * @public
   */
  DeletionId?: string | undefined;

  /**
   * The name of the inventory data type specified in the request.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * A summary of the delete operation. For more information about this summary, see [Deleting custom inventory](https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-custom.html#delete-custom-inventory-summary) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  DeletionSummary?: InventoryDeletionSummary | undefined;
}

/**
 * @public
 */
export interface DeleteMaintenanceWindowRequest {
  /**
   * The ID of the maintenance window to delete.
   *
   * @public
   */
  WindowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMaintenanceWindowResult {
  /**
   * The ID of the deleted maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOpsItemRequest {
  /**
   * The ID of the OpsItem that you want to delete.
   *
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
   * The Amazon Resource Name (ARN) of an OpsMetadata Object to delete.
   *
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
   * The name of the parameter to delete.
   *
   * > **Note:** You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name itself.
   *
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
   * The names of the parameters to delete. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
   *
   * > **Note:** You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name itself.
   *
   * @public
   */
  Names: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteParametersResult {
  /**
   * The names of the deleted parameters.
   *
   * @public
   */
  DeletedParameters?: string[] | undefined;

  /**
   * The names of parameters that weren't deleted because the parameters aren't valid.
   *
   * @public
   */
  InvalidParameters?: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePatchBaselineRequest {
  /**
   * The ID of the patch baseline to delete.
   *
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface DeletePatchBaselineResult {
  /**
   * The ID of the deleted patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceDataSyncRequest {
  /**
   * The name of the configuration to delete.
   *
   * @public
   */
  SyncName: string | undefined;

  /**
   * Specify the type of resource data sync to delete.
   *
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
   * Amazon Resource Name (ARN) of the resource to which the policies are attached.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The policy ID.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * ID of the current policy version. The hash helps to prevent multiple calls from attempting to overwrite a policy.
   *
   * @public
   */
  PolicyHash: string | undefined;

  /**
   * Specifies the intended outcome of the operation. Applies only to the `Document` resource type. The operation ignores this parameter for other resource types. Optional. Defaults to `RemoveSharing`.
   *
   * - `RemoveSharing` – Deletes the resource policy and removes sharing of the document.
   * - `RollbackMigration` – Reverts the document to Custom sharing, preserving existing consumer access, instead of removing the policy.
   *
   * @public
   */
  DeletionMode?: DeletionMode | undefined;
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
   * The ID assigned to the managed node when you registered it using the activation process.
   *
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
   * The ID of the patch baseline to deregister the patch group from.
   *
   * @public
   */
  BaselineId: string | undefined;

  /**
   * The name of the patch group that should be deregistered from the patch baseline.
   *
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface DeregisterPatchBaselineForPatchGroupResult {
  /**
   * The ID of the patch baseline the patch group was deregistered from.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The name of the patch group deregistered from the patch baseline.
   *
   * @public
   */
  PatchGroup?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetFromMaintenanceWindowRequest {
  /**
   * The ID of the maintenance window the target should be removed from.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The ID of the target definition to remove.
   *
   * @public
   */
  WindowTargetId: string | undefined;

  /**
   * The system checks if the target is being referenced by a task. If the target is being referenced, the system returns an error and doesn't deregister the target from the maintenance window.
   *
   * @public
   */
  Safe?: boolean | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetFromMaintenanceWindowResult {
  /**
   * The ID of the maintenance window the target was removed from.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The ID of the removed target definition.
   *
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTaskFromMaintenanceWindowRequest {
  /**
   * The ID of the maintenance window the task should be removed from.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The ID of the task to remove from the maintenance window.
   *
   * @public
   */
  WindowTaskId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTaskFromMaintenanceWindowResult {
  /**
   * The ID of the maintenance window the task was removed from.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The ID of the task removed from the maintenance window.
   *
   * @public
   */
  WindowTaskId?: string | undefined;
}

/**
 * Filter for the DescribeActivation API.
 *
 * @public
 */
export interface DescribeActivationsFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  FilterKey?: DescribeActivationsFilterKeys | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  FilterValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeActivationsRequest {
  /**
   * A filter to view information about your activations.
   *
   * @public
   */
  Filters?: DescribeActivationsFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivationsResult {
  /**
   * A list of activations for your Amazon Web Services account.
   *
   * @public
   */
  ActivationList?: Activation[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationRequest {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The association ID for which you want information.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * Specify the association version to retrieve. To view the latest version, either specify `$LATEST` for this parameter, or omit this parameter. To view a list of all associations for a managed node, use ListAssociations. To get a list of versions for a specific association, use ListAssociationVersions.
   *
   * @public
   */
  AssociationVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationResult {
  /**
   * Information about the association.
   *
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * Filters used in the request.
 *
 * @public
 */
export interface AssociationExecutionFilter {
  /**
   * The key value used in the request.
   *
   * @public
   */
  Key: AssociationExecutionFilterKey | undefined;

  /**
   * The value specified for the key.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The filter type specified in the request.
   *
   * @public
   */
  Type: AssociationFilterOperatorType | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionsRequest {
  /**
   * The association ID for which you want to view execution history details.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * Filters for the request. You can specify the following filters and values.
   *
   * ExecutionId (EQUAL)
   *
   * Status (EQUAL)
   *
   * CreatedTime (EQUAL, GREATER_THAN, LESS_THAN)
   *
   * @public
   */
  Filters?: AssociationExecutionFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Includes information about the specified association.
 *
 * @public
 */
export interface AssociationExecution {
  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The association version.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * The execution ID for the association.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * The status of the association execution.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Detailed status information about the execution.
   *
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * The time the execution started.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date of the last execution.
   *
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * An aggregate status of the resources in the execution based on the status type.
   *
   * @public
   */
  ResourceCountByStatus?: string | undefined;

  /**
   * The details for the CloudWatch alarm you want to apply to an automation or command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarms that were invoked by the association.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionsResult {
  /**
   * A list of the executions for the specified association ID.
   *
   * @public
   */
  AssociationExecutions?: AssociationExecution[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filters for the association execution.
 *
 * @public
 */
export interface AssociationExecutionTargetsFilter {
  /**
   * The key value used in the request.
   *
   * @public
   */
  Key: AssociationExecutionTargetsFilterKey | undefined;

  /**
   * The value specified for the key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionTargetsRequest {
  /**
   * The association ID that includes the execution for which you want to view details.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The execution ID for which you want to view details.
   *
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * Filters for the request. You can specify the following filters and values.
   *
   * Status (EQUAL)
   *
   * ResourceId (EQUAL)
   *
   * ResourceType (EQUAL)
   *
   * @public
   */
  Filters?: AssociationExecutionTargetsFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the source where the association execution details are stored.
 *
 * @public
 */
export interface OutputSource {
  /**
   * The ID of the output source, for example the URL of an S3 bucket.
   *
   * @public
   */
  OutputSourceId?: string | undefined;

  /**
   * The type of source where the association execution details are stored, for example, Amazon S3.
   *
   * @public
   */
  OutputSourceType?: string | undefined;
}

/**
 * Includes information about the specified association execution.
 *
 * @public
 */
export interface AssociationExecutionTarget {
  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The association version.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * The execution ID.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * The resource ID, for example, the managed node ID where the association ran.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type, for example, EC2.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The association execution status.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Detailed information about the execution status.
   *
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * The date of the last execution.
   *
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * The location where the association details are saved.
   *
   * @public
   */
  OutputSource?: OutputSource | undefined;
}

/**
 * @public
 */
export interface DescribeAssociationExecutionTargetsResult {
  /**
   * Information about the execution.
   *
   * @public
   */
  AssociationExecutionTargets?: AssociationExecutionTarget[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
 *
 * @public
 */
export interface AutomationExecutionFilter {
  /**
   * One or more keys to limit the results.
   *
   * @public
   */
  Key: AutomationExecutionFilterKey | undefined;

  /**
   * The values used to limit the execution information associated with the filter's key.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationExecutionsRequest {
  /**
   * Filters used to limit the scope of executions that are requested.
   *
   * @public
   */
  Filters?: AutomationExecutionFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about targets that resolved during the Automation execution.
 *
 * @public
 */
export interface ResolvedTargets {
  /**
   * A list of parameter values sent to targets that resolved during the Automation execution.
   *
   * @public
   */
  ParameterValues?: string[] | undefined;

  /**
   * A boolean value indicating whether the resolved target list is truncated.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * Information about an Automation runbook used in a runbook workflow in Change Manager.
 *
 * > **Note:** The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.
 *
 * @public
 */
export interface Runbook {
  /**
   * The name of the Automation runbook used in a runbook workflow.
   *
   * @public
   */
  DocumentName: string | undefined;

  /**
   * The version of the Automation runbook used in a runbook workflow.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The key-value map of execution parameters, which were supplied when calling `StartChangeRequestExecution`.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The name of the parameter used as the target resource for the rate-controlled runbook workflow. Required if you specify `Targets`.
   *
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * A key-value mapping to target resources that the runbook operation performs tasks on. Required if you specify `TargetParameterName`.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A key-value mapping of runbook parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * The `MaxConcurrency` value specified by the user when the operation started, indicating the maximum number of resources that the runbook operation can run on at the same time.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The `MaxErrors` value specified by the user when the execution started, indicating the maximum number of errors that can occur during the operation before the updates are stopped or rolled back.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * Information about the Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Runbook operation.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;
}

/**
 * Details about a specific Automation execution.
 *
 * @public
 */
export interface AutomationExecutionMetadata {
  /**
   * The execution ID.
   *
   * @public
   */
  AutomationExecutionId?: string | undefined;

  /**
   * The name of the Automation runbook used during execution.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The document version used during the execution.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The status of the execution.
   *
   * @public
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;

  /**
   * The time the execution started.
   *
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * The time the execution finished. This isn't populated if the execution is still in progress.
   *
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * The IAM role ARN of the user who ran the automation.
   *
   * @public
   */
  ExecutedBy?: string | undefined;

  /**
   * An S3 bucket where execution information is stored.
   *
   * @public
   */
  LogFile?: string | undefined;

  /**
   * The list of execution outputs as defined in the Automation runbook.
   *
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * The Automation execution mode.
   *
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * The execution ID of the parent automation.
   *
   * @public
   */
  ParentAutomationExecutionId?: string | undefined;

  /**
   * The name of the step that is currently running.
   *
   * @public
   */
  CurrentStepName?: string | undefined;

  /**
   * The action of the step that is currently running.
   *
   * @public
   */
  CurrentAction?: string | undefined;

  /**
   * A message that describes a failure that occurred during the automation execution.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * A message that describes a non-critical issue that occurred during the automation execution.
   *
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * The list of execution outputs as defined in the Automation runbook.
   *
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * The targets defined by the user when starting the automation.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The specified key-value mapping of document parameters to target resources.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * A list of targets that resolved during the execution.
   *
   * @public
   */
  ResolvedTargets?: ResolvedTargets | undefined;

  /**
   * The `MaxConcurrency` value specified by the user when starting the automation.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The `MaxErrors` value specified by the user when starting the automation.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The list of execution outputs as defined in the Automation runbook.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * Use this filter with DescribeAutomationExecutions. Specify either Local or CrossAccount. CrossAccount is an Automation that runs in multiple Amazon Web Services Regions and Amazon Web Services accounts. For more information, see [Running automations in multiple Amazon Web Services Regions and accounts](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  AutomationType?: AutomationType | undefined;

  /**
   * The details for the CloudWatch alarm applied to your automation.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarm that was invoked by the automation.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * A publicly accessible URL for a file that contains the `TargetLocations` body. Currently, only files in presigned Amazon S3 buckets are supported
   *
   * @public
   */
  TargetLocationsURL?: string | undefined;

  /**
   * The subtype of the Automation operation. Currently, the only supported value is `ChangeRequest`.
   *
   * @public
   */
  AutomationSubtype?: AutomationSubtype | undefined;

  /**
   * The date and time the Automation operation is scheduled to start.
   *
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * Information about the Automation runbooks that are run during a runbook workflow in Change Manager.
   *
   * > **Note:** The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.
   *
   * @public
   */
  Runbooks?: Runbook[] | undefined;

  /**
   * The ID of an OpsItem that is created to represent a Change Manager change request.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * The ID of a State Manager association used in the Automation operation.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The name of the Change Manager change request.
   *
   * @public
   */
  ChangeRequestName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationExecutionsResult {
  /**
   * The list of details about each automation execution which has occurred which matches the filter specification, if any.
   *
   * @public
   */
  AutomationExecutionMetadataList?: AutomationExecutionMetadata[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter to limit the amount of step execution information returned by the call.
 *
 * @public
 */
export interface StepExecutionFilter {
  /**
   * One or more keys to limit the results.
   *
   * @public
   */
  Key: StepExecutionFilterKey | undefined;

  /**
   * The values of the filter key.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationStepExecutionsRequest {
  /**
   * The Automation execution ID for which you want step execution descriptions.
   *
   * @public
   */
  AutomationExecutionId: string | undefined;

  /**
   * One or more filters to limit the number of step executions returned by the request.
   *
   * @public
   */
  Filters?: StepExecutionFilter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Indicates whether to list step executions in reverse order by start time. The default value is 'false'.
   *
   * @public
   */
  ReverseOrder?: boolean | undefined;
}

/**
 * Information about an Automation failure.
 *
 * @public
 */
export interface FailureDetails {
  /**
   * The stage of the Automation execution when the failure occurred. The stages include the following: InputValidation, PreVerification, Invocation, PostVerification.
   *
   * @public
   */
  FailureStage?: string | undefined;

  /**
   * The type of Automation failure. Failure types include the following: Action, Permission, Throttling, Verification, Internal.
   *
   * @public
   */
  FailureType?: string | undefined;

  /**
   * Detailed information about the Automation step failure.
   *
   * @public
   */
  Details?: Record<string, string[]> | undefined;
}

/**
 * A detailed status of the parent step.
 *
 * @public
 */
export interface ParentStepDetails {
  /**
   * The unique ID of a step execution.
   *
   * @public
   */
  StepExecutionId?: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  StepName?: string | undefined;

  /**
   * The name of the automation action.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The current repetition of the loop represented by an integer.
   *
   * @public
   */
  Iteration?: number | undefined;

  /**
   * The current value of the specified iterator in the loop.
   *
   * @public
   */
  IteratorValue?: string | undefined;
}

/**
 * Detailed information about an the execution state of an Automation step.
 *
 * @public
 */
export interface StepExecution {
  /**
   * The name of this execution step.
   *
   * @public
   */
  StepName?: string | undefined;

  /**
   * The action this step performs. The action determines the behavior of the step.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The timeout seconds of the step.
   *
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * The action to take if the step fails. The default value is `Abort`.
   *
   * @public
   */
  OnFailure?: string | undefined;

  /**
   * The maximum number of tries to run the action of the step. The default value is `1`.
   *
   * @public
   */
  MaxAttempts?: number | undefined;

  /**
   * If a step has begun execution, this contains the time the step started. If the step is in Pending status, this field isn't populated.
   *
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * If a step has finished execution, this contains the time the execution ended. If the step hasn't yet concluded, this field isn't populated.
   *
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * The execution status for this step.
   *
   * @public
   */
  StepStatus?: AutomationExecutionStatus | undefined;

  /**
   * The response code returned by the execution of the step.
   *
   * @public
   */
  ResponseCode?: string | undefined;

  /**
   * Fully-resolved values passed into the step before execution.
   *
   * @public
   */
  Inputs?: Record<string, string> | undefined;

  /**
   * Returned values from the execution of the step.
   *
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * A message associated with the response code for an execution.
   *
   * @public
   */
  Response?: string | undefined;

  /**
   * If a step failed, this message explains why the execution failed.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * A message that describes a non-critical issue that occurred during the step execution. Present only if the step status includes a warning.
   *
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * Information about the Automation failure.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * The unique ID of a step execution.
   *
   * @public
   */
  StepExecutionId?: string | undefined;

  /**
   * A user-specified list of parameters to override when running a step.
   *
   * @public
   */
  OverriddenParameters?: Record<string, string[]> | undefined;

  /**
   * The flag which can be used to end automation no matter whether the step succeeds or fails.
   *
   * @public
   */
  IsEnd?: boolean | undefined;

  /**
   * The next step after the step succeeds.
   *
   * @public
   */
  NextStep?: string | undefined;

  /**
   * The flag which can be used to help decide whether the failure of current step leads to the Automation failure.
   *
   * @public
   */
  IsCritical?: boolean | undefined;

  /**
   * Strategies used when step fails, we support Continue and Abort. Abort will fail the automation when the step fails. Continue will ignore the failure of current step and allow automation to run the next step. With conditional branching, we add step:stepName to support the automation to go to another specific step.
   *
   * @public
   */
  ValidNextSteps?: string[] | undefined;

  /**
   * The targets for the step execution.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
   *
   * @public
   */
  TargetLocation?: TargetLocation | undefined;

  /**
   * The CloudWatch alarms that were invoked by the automation.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * Information about the parent step.
   *
   * @public
   */
  ParentStepDetails?: ParentStepDetails | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationStepExecutionsResult {
  /**
   * A list of details about the current state of all steps that make up an execution.
   *
   * @public
   */
  StepExecutions?: StepExecution[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API operation that includes the filter. Patch Manager API operations that use `PatchOrchestratorFilter` include the following:
 *
 * - DescribeAvailablePatches
 * - DescribeInstancePatches
 * - DescribePatchBaselines
 * - DescribePatchGroups
 *
 * @public
 */
export interface PatchOrchestratorFilter {
  /**
   * The key for the filter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the filter.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAvailablePatchesRequest {
  /**
   * Each element in the array is a structure containing a key-value pair.
   *
   * **Windows Server**
   *
   * Supported keys for Windows Server managed node patches include the following:
   *
   * - **`PATCH_SET`**
   *
   *   Sample values: `OS` | `APPLICATION`
   * - **`PRODUCT`**
   *
   *   Sample values: `WindowsServer2012` | `Office 2010` | `MicrosoftDefenderAntivirus`
   * - **`PRODUCT_FAMILY`**
   *
   *   Sample values: `Windows` | `Office`
   * - **`MSRC_SEVERITY`**
   *
   *   Sample values: `ServicePacks` | `Important` | `Moderate`
   * - **`CLASSIFICATION`**
   *
   *   Sample values: `ServicePacks` | `SecurityUpdates` | `DefinitionUpdates`
   * - **`PATCH_ID`**
   *
   *   Sample values: `KB123456` | `KB4516046`
   *
   * **Linux**
   *
   * > **Important:**
   * >
   * > When specifying filters for Linux patches, you must specify a key-pair for `PRODUCT`. For example, using the Command Line Interface (CLI), the following command fails:
   * >
   * > `aws ssm describe-available-patches --filters Key=CVE_ID,Values=CVE-2018-3615`
   * >
   * > However, the following command succeeds:
   * >
   * > `aws ssm describe-available-patches --filters Key=PRODUCT,Values=AmazonLinux2018.03 Key=CVE_ID,Values=CVE-2018-3615`
   *
   * Supported keys for Linux managed node patches include the following:
   *
   * - **`PRODUCT`**
   *
   *   Sample values: `AmazonLinux2018.03` | `AmazonLinux2.0`
   * - **`NAME`**
   *
   *   Sample values: `kernel-headers` | `samba-python` | `php`
   * - **`SEVERITY`**
   *
   *   Sample values: `Critical` | `Important` | `Medium` | `Low`
   * - **`EPOCH`**
   *
   *   Sample values: `0` | `1`
   * - **`VERSION`**
   *
   *   Sample values: `78.6.1` | `4.10.16`
   * - **`RELEASE`**
   *
   *   Sample values: `9.56.amzn1` | `1.amzn2`
   * - **`ARCH`**
   *
   *   Sample values: `i686` | `x86_64`
   * - **`REPOSITORY`**
   *
   *   Sample values: `Core` | `Updates`
   * - **`ADVISORY_ID`**
   *
   *   Sample values: `ALAS-2018-1058` | `ALAS2-2021-1594`
   * - **`CVE_ID`**
   *
   *   Sample values: `CVE-2018-3615` | `CVE-2020-1472`
   * - **`BUGZILLA_ID`**
   *
   *   Sample values: `1463241`
   *
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * The maximum number of patches to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents metadata about a patch.
 *
 * @public
 */
export interface Patch {
  /**
   * The ID of the patch. Applies to Windows patches only.
   *
   * > **Note:** This ID isn't the same as the Microsoft Knowledge Base ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The date the patch was released.
   *
   * @public
   */
  ReleaseDate?: Date | undefined;

  /**
   * The title of the patch.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The description of the patch.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URL where more information can be obtained about the patch.
   *
   * @public
   */
  ContentUrl?: string | undefined;

  /**
   * The name of the vendor providing the patch.
   *
   * @public
   */
  Vendor?: string | undefined;

  /**
   * The product family the patch is applicable for. For example, `Windows` or `Amazon Linux 2`.
   *
   * @public
   */
  ProductFamily?: string | undefined;

  /**
   * The specific product the patch is applicable for. For example, `WindowsServer2016` or `AmazonLinux2018.03`.
   *
   * @public
   */
  Product?: string | undefined;

  /**
   * The classification of the patch. For example, `SecurityUpdates`, `Updates`, or `CriticalUpdates`.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * The severity of the patch, such as `Critical`, `Important`, or `Moderate`. Applies to Windows patches only.
   *
   * @public
   */
  MsrcSeverity?: string | undefined;

  /**
   * The Microsoft Knowledge Base ID of the patch. Applies to Windows patches only.
   *
   * @public
   */
  KbNumber?: string | undefined;

  /**
   * The ID of the Microsoft Security Response Center (MSRC) bulletin the patch is related to. For example, `MS14-045`. Applies to Windows patches only.
   *
   * @public
   */
  MsrcNumber?: string | undefined;

  /**
   * The language of the patch if it's language-specific.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The Advisory ID of the patch. For example, `RHSA-2020:3779`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  AdvisoryIds?: string[] | undefined;

  /**
   * The Bugzilla ID of the patch. For example, `1600646`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  BugzillaIds?: string[] | undefined;

  /**
   * The Common Vulnerabilities and Exposures (CVE) ID of the patch. For example, `CVE-2011-3192`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  CVEIds?: string[] | undefined;

  /**
   * The name of the patch. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The epoch of the patch. For example in `pkg-example-EE-20180914-2.2.amzn1.noarch`, the epoch value is `20180914-2`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  Epoch?: number | undefined;

  /**
   * The version number of the patch. For example, in `example-pkg-1.710.10-2.7.abcd.x86_64`, the version number is indicated by `-1`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The particular release of a patch. For example, in `pkg-example-EE-20180914-2.2.amzn1.noarch`, the release is `2.amaz1`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  Release?: string | undefined;

  /**
   * The architecture of the patch. For example, in `example-pkg-0.710.10-2.7.abcd.x86_64`, the architecture is indicated by `x86_64`. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  Arch?: string | undefined;

  /**
   * The severity level of the patch. For example, `CRITICAL` or `MODERATE`.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The source patch repository for the operating system and version, such as `trusty-security` for Ubuntu Server 14.04 LTE and `focal-security` for Ubuntu Server 20.04 LTE. Applies to Linux-based managed nodes only.
   *
   * @public
   */
  Repository?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailablePatchesResult {
  /**
   * An array of patches. Each entry in the array is a patch structure.
   *
   * @public
   */
  Patches?: Patch[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentRequest {
  /**
   * The name of the SSM document.
   *
   * > **Note:** If you're calling a shared SSM document from a different Amazon Web Services account, `Name` is the full Amazon Resource Name (ARN) of the document.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The document version for which you want information. Can be a specific version or the default version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * An optional field specifying the version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentResult {
  /**
   * Information about the SSM document.
   *
   * @public
   */
  Document?: DocumentDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentPermissionRequest {
  /**
   * The name of the document for which you are the owner.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The permission type for the document. The permission type can be *Share*.
   *
   * @public
   */
  PermissionType: DocumentPermissionType | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentPermissionResponse {
  /**
   * The account IDs that have permission to use this document. The ID can be either an Amazon Web Services account number or `all`.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * A list of Amazon Web Services accounts where the current document is shared and the version shared with each account.
   *
   * @public
   */
  AccountSharingInfoList?: AccountSharingInfo[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEffectiveInstanceAssociationsRequest {
  /**
   * The managed node ID for which you want to view all associations.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * One or more association documents on the managed node.
 *
 * @public
 */
export interface InstanceAssociation {
  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The content of the association document for the managed nodes.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Version information for the association on the managed node.
   *
   * @public
   */
  AssociationVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEffectiveInstanceAssociationsResult {
  /**
   * The associations for the requested managed node.
   *
   * @public
   */
  Associations?: InstanceAssociation[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * The ID of the patch baseline to retrieve the effective patches for.
   *
   * @public
   */
  BaselineId: string | undefined;

  /**
   * The maximum number of patches to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the approval status of a patch.
 *
 * @public
 */
export interface PatchStatus {
  /**
   * The approval status of a patch.
   *
   * @public
   */
  DeploymentStatus?: PatchDeploymentStatus | undefined;

  /**
   * The compliance severity level for a patch.
   *
   * @public
   */
  ComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * The date the patch was approved (or will be approved if the status is `PENDING_APPROVAL`).
   *
   * @public
   */
  ApprovalDate?: Date | undefined;
}

/**
 * The `EffectivePatch` structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
 *
 * @public
 */
export interface EffectivePatch {
  /**
   * Provides metadata for a patch, including information such as the KB ID, severity, classification and a URL for where more information can be obtained about the patch.
   *
   * @public
   */
  Patch?: Patch | undefined;

  /**
   * The status of the patch in a patch baseline. This includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
   *
   * @public
   */
  PatchStatus?: PatchStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePatchesForPatchBaselineResult {
  /**
   * An array of patches and patch status.
   *
   * @public
   */
  EffectivePatches?: EffectivePatch[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAssociationsStatusRequest {
  /**
   * The managed node IDs for which you want association status information.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request.
 *
 * @public
 */
export interface S3OutputUrl {
  /**
   * A URL for an S3 bucket where you want to store the results of this request.
   *
   * @public
   */
  OutputUrl?: string | undefined;
}

/**
 * The URL of S3 bucket where you want to store the results of this request.
 *
 * @public
 */
export interface InstanceAssociationOutputUrl {
  /**
   * The URL of S3 bucket where you want to store the results of this request.
   *
   * @public
   */
  S3OutputUrl?: S3OutputUrl | undefined;
}

/**
 * Status information about the association.
 *
 * @public
 */
export interface InstanceAssociationStatusInfo {
  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The name of the association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The association document versions.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The version of the association applied to the managed node.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * The managed node ID where the association was created.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The date the association ran.
   *
   * @public
   */
  ExecutionDate?: Date | undefined;

  /**
   * Status information about the association.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Detailed status information about the association.
   *
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * Summary information about association execution.
   *
   * @public
   */
  ExecutionSummary?: string | undefined;

  /**
   * An error code returned by the request to create the association.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A URL for an S3 bucket where you want to store the results of this request.
   *
   * @public
   */
  OutputUrl?: InstanceAssociationOutputUrl | undefined;

  /**
   * The name of the association applied to the managed node.
   *
   * @public
   */
  AssociationName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAssociationsStatusResult {
  /**
   * Status information about the association.
   *
   * @public
   */
  InstanceAssociationStatusInfos?: InstanceAssociationStatusInfo[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filters to describe or get information about your managed nodes.
 *
 * @public
 */
export interface InstanceInformationStringFilter {
  /**
   * The filter key name to describe your managed nodes.
   *
   * Valid filter key values: ActivationIds | AgentVersion | AssociationStatus | IamRole | InstanceIds | PingStatus | PlatformTypes | ResourceType | SourceIds | SourceTypes | "tag-key" | "tag:`\{keyname\}`
   *
   * - Valid values for the `AssociationStatus` filter key: Success | Pending | Failed
   * - Valid values for the `PingStatus` filter key: Online | ConnectionLost | Inactive (deprecated)
   * - Valid values for the `PlatformTypes` filter key: Windows | Linux | MacOS
   * - Valid values for the `ResourceType` filter key: EC2Instance | ManagedInstance
   * - Valid values for the `SourceType` filter key: AWS::EC2::Instance | AWS::SSM::ManagedInstance | AWS::IoT::Thing | Microsoft.Compute/virtualMachines
   * - Valid tag examples: `Key=tag-key,Values=Purpose` | `Key=tag:Purpose,Values=Test`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Describes a filter for a specific list of managed nodes. You can filter node information by using tags. You specify tags by using a key-value mapping.
 *
 * Use this operation instead of the DescribeInstanceInformationRequest$InstanceInformationFilterList method. The `InstanceInformationFilterList` method is a legacy method and doesn't support tags.
 *
 * @public
 */
export interface InstanceInformationFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  key: InstanceInformationFilterKey | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  valueSet: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceInformationRequest {
  /**
   * This is a legacy method. We recommend that you don't use this method. Instead, use the `Filters` data type. `Filters` enables you to return node information by filtering based on tags applied to managed nodes.
   *
   * > **Note:** Attempting to use `InstanceInformationFilterList` and `Filters` leads to an exception error.
   *
   * @public
   */
  InstanceInformationFilterList?: InstanceInformationFilter[] | undefined;

  /**
   * One or more filters. Use a filter to return a more specific list of managed nodes. You can filter based on tags applied to your managed nodes. Tag filters can't be combined with other filter types. Use this `Filters` data type instead of `InstanceInformationFilterList`, which is deprecated.
   *
   * @public
   */
  Filters?: InstanceInformationStringFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results. The default value is 10 items.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Status information about the aggregated associations.
 *
 * @public
 */
export interface InstanceAggregatedAssociationOverview {
  /**
   * Detailed status information about the aggregated associations.
   *
   * @public
   */
  DetailedStatus?: string | undefined;

  /**
   * The number of associations for the managed nodes.
   *
   * @public
   */
  InstanceAssociationStatusAggregatedCount?: Record<string, number> | undefined;
}

/**
 * Describes a filter for a specific list of managed nodes.
 *
 * @public
 */
export interface InstanceInformation {
  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Connection status of SSM Agent.
   *
   * > **Note:** The status `Inactive` has been deprecated and is no longer in use.
   *
   * @public
   */
  PingStatus?: PingStatus | undefined;

  /**
   * The date and time when the agent last pinged the Systems Manager service.
   *
   * @public
   */
  LastPingDateTime?: Date | undefined;

  /**
   * The version of SSM Agent running on your Linux managed node.
   *
   * @public
   */
  AgentVersion?: string | undefined;

  /**
   * Indicates whether the latest version of SSM Agent is running on your Linux managed node. This field doesn't indicate whether or not the latest version is installed on Windows managed nodes, because some older versions of Windows Server use the EC2Config service to process Systems Manager requests.
   *
   * @public
   */
  IsLatestVersion?: boolean | undefined;

  /**
   * The operating system platform type.
   *
   * @public
   */
  PlatformType?: PlatformType | undefined;

  /**
   * The name of the operating system platform running on your managed node.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * The version of the OS platform running on your managed node.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * The activation ID created by Amazon Web Services Systems Manager when the server or virtual machine (VM) was registered.
   *
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * The role assigned to an Amazon EC2 instance configured with a Systems Manager Quick Setup host management configuration or the role assigned to an on-premises managed node.
   *
   * This call doesn't return the IAM role for *unmanaged* Amazon EC2 instances (instances not configured for Systems Manager). To retrieve the role for an unmanaged instance, use the Amazon EC2 `DescribeInstances` operation. For information, see [DescribeInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html) in the *Amazon EC2 API Reference* or [describe-instances](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html) in the *Amazon Web Services CLI Command Reference*.
   *
   * @public
   */
  IamRole?: string | undefined;

  /**
   * The date the server or VM was registered with Amazon Web Services as a managed node.
   *
   * @public
   */
  RegistrationDate?: Date | undefined;

  /**
   * The type of instance. Instances are either EC2 instances or managed instances.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The name assigned to an on-premises server, edge device, or virtual machine (VM) when it is activated as a Systems Manager managed node. The name is specified as the `DefaultInstanceName` property using the CreateActivation command. It is applied to the managed node by specifying the Activation Code and Activation ID when you install SSM Agent on the node, as explained in [How to install SSM Agent on hybrid Linux nodes](https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-ssm-agent-install-linux.html) and [How to install SSM Agent on hybrid Windows Server nodes](https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-ssm-agent-install-windows.html). To retrieve the `Name` tag of an EC2 instance, use the Amazon EC2 `DescribeInstances` operation. For information, see [DescribeInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html) in the *Amazon EC2 API Reference* or [describe-instances](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html) in the *Amazon Web Services CLI Command Reference*.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The IP address of the managed node.
   *
   * @public
   */
  IPAddress?: string | undefined;

  /**
   * The fully qualified host name of the managed node.
   *
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  AssociationStatus?: string | undefined;

  /**
   * The date the association was last run.
   *
   * @public
   */
  LastAssociationExecutionDate?: Date | undefined;

  /**
   * The last date the association was successfully run.
   *
   * @public
   */
  LastSuccessfulAssociationExecutionDate?: Date | undefined;

  /**
   * Information about the association.
   *
   * @public
   */
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;

  /**
   * The ID of the source resource. For IoT Greengrass devices, `SourceId` is the Thing name.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The type of the source resource. For IoT Greengrass devices, `SourceType` is `AWS::IoT::Thing`. For Azure Virtual Machines, `SourceType` is `Microsoft.Compute/virtualMachines`.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The location of the source resource in the third-party cloud environment.
   *
   * @public
   */
  SourceLocation?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceInformationResult {
  /**
   * The managed node information list.
   *
   * @public
   */
  InstanceInformationList?: InstanceInformation[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchesRequest {
  /**
   * The ID of the managed node whose patch state information should be retrieved.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Each element in the array is a structure containing a key-value pair.
   *
   * Supported keys for `DescribeInstancePatches`include the following:
   *
   * - **`Classification`**
   *
   *   Sample values: `Security` | `SecurityUpdates`
   * - **`KBId`**
   *
   *   Sample values: `KB4480056` | `java-1.7.0-openjdk.x86_64`
   * - **`Severity`**
   *
   *   Sample values: `Important` | `Medium` | `Low`
   * - **`State`**
   *
   *   Sample values: `Installed` | `InstalledOther` | `InstalledPendingReboot`
   *
   *   For lists of all `State` values, see [Patch compliance state values](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-compliance-states.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of patches to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about the state of a patch on a particular managed node as it relates to the patch baseline used to patch the node.
 *
 * @public
 */
export interface PatchComplianceData {
  /**
   * The title of the patch.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The operating system-specific ID of the patch.
   *
   * @public
   */
  KBId: string | undefined;

  /**
   * The classification of the patch, such as `SecurityUpdates`, `Updates`, and `CriticalUpdates`.
   *
   * @public
   */
  Classification: string | undefined;

  /**
   * The severity of the patch such as `Critical`, `Important`, and `Moderate`.
   *
   * @public
   */
  Severity: string | undefined;

  /**
   * The state of the patch on the managed node, such as INSTALLED or FAILED.
   *
   * For descriptions of each patch state, see [About patch compliance](https://docs.aws.amazon.com/systems-manager/latest/userguide/compliance-about.html#compliance-monitor-patch) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  State: PatchComplianceDataState | undefined;

  /**
   * The date/time the patch was installed on the managed node. Not all operating systems provide this level of information.
   *
   * @public
   */
  InstalledTime: Date | undefined;

  /**
   * The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by the patch.
   *
   * > **Note:** Currently, CVE ID values are reported only for patches with a status of `Missing` or `Failed`.
   *
   * @public
   */
  CVEIds?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchesResult {
  /**
   * Each entry in the array is a structure containing:
   *
   * - Title (string)
   * - KBId (string)
   * - Classification (string)
   * - Severity (string)
   * - State (string, such as "INSTALLED" or "FAILED")
   * - InstalledTime (DateTime)
   * - InstalledBy (string)
   *
   * @public
   */
  Patches?: PatchComplianceData[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesRequest {
  /**
   * The ID of the managed node for which patch state information should be retrieved.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of managed nodes to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Defines the high-level patch compliance state for a managed node, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the managed node.
 *
 * @public
 */
export interface InstancePatchState {
  /**
   * The ID of the managed node the high-level patch compliance information was collected for.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the patch group the managed node belongs to.
   *
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * The ID of the patch baseline used to patch the managed node.
   *
   * @public
   */
  BaselineId: string | undefined;

  /**
   * The ID of the patch baseline snapshot used during the patching operation when this compliance data was collected.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * An https URL or an Amazon Simple Storage Service (Amazon S3) path-style URL to a list of patches to be installed. This patch installation list, which you maintain in an S3 bucket in YAML format and specify in the SSM document `AWS-RunPatchBaseline`, overrides the patches specified by the default patch baseline.
   *
   * For more information about the `InstallOverrideList` parameter, see [SSM Command document for patching: `AWS-RunPatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  InstallOverrideList?: string | undefined;

  /**
   * Placeholder information. This field will always be empty in the current release of the service.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * The number of patches from the patch baseline that are installed on the managed node.
   *
   * @public
   */
  InstalledCount?: number | undefined;

  /**
   * The number of patches not specified in the patch baseline that are installed on the managed node.
   *
   * @public
   */
  InstalledOtherCount?: number | undefined;

  /**
   * The number of patches installed by Patch Manager since the last time the managed node was rebooted.
   *
   * @public
   */
  InstalledPendingRebootCount?: number | undefined;

  /**
   * The number of patches installed on a managed node that are specified in a `RejectedPatches` list. Patches with a status of `InstalledRejected` were typically installed before they were added to a `RejectedPatches` list.
   *
   * > **Note:** If `ALLOW_AS_DEPENDENCY` is the specified option for `RejectedPatchesAction`, the value of `InstalledRejectedCount` will always be `0` (zero).
   *
   * @public
   */
  InstalledRejectedCount?: number | undefined;

  /**
   * The number of patches from the patch baseline that are applicable for the managed node but aren't currently installed.
   *
   * @public
   */
  MissingCount?: number | undefined;

  /**
   * The number of patches from the patch baseline that were attempted to be installed during the last patching operation, but failed to install.
   *
   * @public
   */
  FailedCount?: number | undefined;

  /**
   * The number of patches beyond the supported limit of `NotApplicableCount` that aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  UnreportedNotApplicableCount?: number | undefined;

  /**
   * The number of patches from the patch baseline that aren't applicable for the managed node and therefore aren't installed on the node. This number may be truncated if the list of patch names is very large. The number of patches beyond this limit are reported in `UnreportedNotApplicableCount`.
   *
   * @public
   */
  NotApplicableCount?: number | undefined;

  /**
   * The number of security-related patches that are available but not approved because they didn't meet the patch baseline requirements. For example, an updated version of a patch might have been released before the specified auto-approval period was over.
   *
   * Applies to Windows Server managed nodes only.
   *
   * @public
   */
  AvailableSecurityUpdateCount?: number | undefined;

  /**
   * The time the most recent patching operation was started on the managed node.
   *
   * @public
   */
  OperationStartTime: Date | undefined;

  /**
   * The time the most recent patching operation completed on the managed node.
   *
   * @public
   */
  OperationEndTime: Date | undefined;

  /**
   * The type of patching operation that was performed: or
   *
   * - `SCAN` assesses the patch compliance state.
   * - `INSTALL` installs missing patches.
   *
   * @public
   */
  Operation: PatchOperationType | undefined;

  /**
   * The time of the last attempt to patch the managed node with `NoReboot` specified as the reboot option.
   *
   * @public
   */
  LastNoRebootInstallOperationTime?: Date | undefined;

  /**
   * Indicates the reboot option specified in the patch baseline.
   *
   * > **Note:** Reboot options apply to `Install` operations only. Reboots aren't attempted for Patch Manager `Scan` operations.
   *
   * - `RebootIfNeeded`: Patch Manager tries to reboot the managed node if it installed any patches, or if any patches are detected with a status of `InstalledPendingReboot`.
   * - `NoReboot`: Patch Manager attempts to install missing packages without trying to reboot the system. Patches installed with this option are assigned a status of `InstalledPendingReboot`. These patches might not be in effect until a reboot is performed.
   *
   * @public
   */
  RebootOption?: RebootOption | undefined;

  /**
   * The number of patches per node that are specified as `Critical` for compliance reporting in the patch baseline aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  CriticalNonCompliantCount?: number | undefined;

  /**
   * The number of patches per node that are specified as `Security` in a patch advisory aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  SecurityNonCompliantCount?: number | undefined;

  /**
   * The number of patches per node that are specified as other than `Critical` or `Security` but aren't compliant with the patch baseline. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  OtherNonCompliantCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesResult {
  /**
   * The high-level patch state for the requested managed nodes.
   *
   * @public
   */
  InstancePatchStates?: InstancePatchState[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines a filter used in DescribeInstancePatchStatesForPatchGroup to scope down the information returned by the API.
 *
 * **Example**: To filter for all managed nodes in a patch group having more than three patches with a `FailedCount` status, use the following for the filter:
 *
 * - Value for `Key`: `FailedCount`
 * - Value for `Type`: `GreaterThan`
 * - Value for `Values`: `3`
 *
 * @public
 */
export interface InstancePatchStateFilter {
  /**
   * The key for the filter. Supported values include the following:
   *
   * - `InstalledCount`
   * - `InstalledOtherCount`
   * - `InstalledPendingRebootCount`
   * - `InstalledRejectedCount`
   * - `MissingCount`
   * - `FailedCount`
   * - `UnreportedNotApplicableCount`
   * - `NotApplicableCount`
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the filter. Must be an integer greater than or equal to 0.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The type of comparison that should be performed for the value.
   *
   * @public
   */
  Type: InstancePatchStateOperatorType | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * The name of the patch group for which the patch state information should be retrieved.
   *
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * Each entry in the array is a structure containing:
   *
   * - Key (string between 1 and 200 characters)
   * - Values (array containing a single string)
   * - Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")
   *
   * @public
   */
  Filters?: InstancePatchStateFilter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of patches to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePatchStatesForPatchGroupResult {
  /**
   * The high-level patch state for the requested managed nodes.
   *
   * @public
   */
  InstancePatchStates?: InstancePatchState[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filters to describe or get information about your managed nodes.
 *
 * @public
 */
export interface InstancePropertyStringFilter {
  /**
   * The filter key name to describe your managed nodes.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The filter key name to describe your managed nodes.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator used by the filter call.
   *
   * @public
   */
  Operator?: InstancePropertyFilterOperator | undefined;
}

/**
 * Describes a filter for a specific list of managed nodes. You can filter node information by using tags. You specify tags by using a key-value mapping.
 *
 * @public
 */
export interface InstancePropertyFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  key: InstancePropertyFilterKey | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  valueSet: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePropertiesRequest {
  /**
   * An array of instance property filters.
   *
   * @public
   */
  InstancePropertyFilterList?: InstancePropertyFilter[] | undefined;

  /**
   * The request filters to use with the operator.
   *
   * @public
   */
  FiltersWithOperator?: InstancePropertyStringFilter[] | undefined;

  /**
   * The maximum number of items to return for the call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token provided by a previous request to use to return the next set of properties.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object containing various properties of a managed node.
 *
 * @public
 */
export interface InstanceProperty {
  /**
   * The value of the EC2 `Name` tag associated with the node. If a `Name` tag hasn't been applied to the node, this value is blank.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the managed node.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The instance type of the managed node. For example, t3.large.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The instance profile attached to the node. If an instance profile isn't attached to the node, this value is blank.
   *
   * @public
   */
  InstanceRole?: string | undefined;

  /**
   * The name of the key pair associated with the node. If a key pair isnt't associated with the node, this value is blank.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The current state of the node.
   *
   * @public
   */
  InstanceState?: string | undefined;

  /**
   * The CPU architecture of the node. For example, `x86_64`.
   *
   * @public
   */
  Architecture?: string | undefined;

  /**
   * The public IPv4 address assigned to the node. If a public IPv4 address isn't assigned to the node, this value is blank.
   *
   * @public
   */
  IPAddress?: string | undefined;

  /**
   * The timestamp for when the node was launched.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * Connection status of the SSM Agent on the managed node.
   *
   * @public
   */
  PingStatus?: PingStatus | undefined;

  /**
   * The date and time when the SSM Agent last pinged the Systems Manager service.
   *
   * @public
   */
  LastPingDateTime?: Date | undefined;

  /**
   * The version of SSM Agent running on your managed node.
   *
   * @public
   */
  AgentVersion?: string | undefined;

  /**
   * The operating system platform type of the managed node. For example, Windows Server or Amazon Linux 2.
   *
   * @public
   */
  PlatformType?: PlatformType | undefined;

  /**
   * The name of the operating system platform running on your managed node.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * The version of the OS platform running on your managed node.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * The activation ID created by Systems Manager when the server or virtual machine (VM) was registered
   *
   * @public
   */
  ActivationId?: string | undefined;

  /**
   * The IAM role used in the hybrid activation to register the node with Systems Manager.
   *
   * @public
   */
  IamRole?: string | undefined;

  /**
   * The date the node was registered with Systems Manager.
   *
   * @public
   */
  RegistrationDate?: Date | undefined;

  /**
   * The type of managed node.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The fully qualified host name of the managed node.
   *
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * The status of the State Manager association applied to the managed node.
   *
   * @public
   */
  AssociationStatus?: string | undefined;

  /**
   * The date the association was last run.
   *
   * @public
   */
  LastAssociationExecutionDate?: Date | undefined;

  /**
   * The last date the association was successfully run.
   *
   * @public
   */
  LastSuccessfulAssociationExecutionDate?: Date | undefined;

  /**
   * Status information about the aggregated associations.
   *
   * @public
   */
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;

  /**
   * The ID of the source resource.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The type of the source resource. Valid values: `AWS::EC2::Instance` | `AWS::SSM::ManagedInstance` | `AWS::IoT::Thing` | `Microsoft.Compute/virtualMachines`.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The location of the source resource in the third-party cloud environment.
   *
   * @public
   */
  SourceLocation?: string | undefined;

  /**
   * The Availability Zone where the managed node is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancePropertiesResult {
  /**
   * Properties for the managed instances.
   *
   * @public
   */
  InstanceProperties?: InstanceProperty[] | undefined;

  /**
   * The token for the next set of properties to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInventoryDeletionsRequest {
  /**
   * Specify the delete inventory ID for which you want information. This ID was returned by the `DeleteInventory` operation.
   *
   * @public
   */
  DeletionId?: string | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Status information returned by the `DeleteInventory` operation.
 *
 * @public
 */
export interface InventoryDeletionStatusItem {
  /**
   * The deletion ID returned by the `DeleteInventory` operation.
   *
   * @public
   */
  DeletionId?: string | undefined;

  /**
   * The name of the inventory data type.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The UTC timestamp when the delete operation started.
   *
   * @public
   */
  DeletionStartTime?: Date | undefined;

  /**
   * The status of the operation. Possible values are InProgress and Complete.
   *
   * @public
   */
  LastStatus?: InventoryDeletionStatus | undefined;

  /**
   * Information about the status.
   *
   * @public
   */
  LastStatusMessage?: string | undefined;

  /**
   * Information about the delete operation. For more information about this summary, see [Understanding the delete inventory summary](https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-custom.html#delete-custom-inventory) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  DeletionSummary?: InventoryDeletionSummary | undefined;

  /**
   * The UTC timestamp of when the last status report.
   *
   * @public
   */
  LastStatusUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeInventoryDeletionsResult {
  /**
   * A list of status items for deleted inventory.
   *
   * @public
   */
  InventoryDeletions?: InventoryDeletionStatusItem[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filter used in the request. Supported filter keys depend on the API operation that includes the filter. API operations that use `MaintenanceWindowFilter>` include the following:
 *
 * - DescribeMaintenanceWindowExecutions
 * - DescribeMaintenanceWindowExecutionTaskInvocations
 * - DescribeMaintenanceWindowExecutionTasks
 * - DescribeMaintenanceWindows
 * - DescribeMaintenanceWindowTargets
 * - DescribeMaintenanceWindowTasks
 *
 * @public
 */
export interface MaintenanceWindowFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionsRequest {
  /**
   * The ID of the maintenance window whose executions should be retrieved.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * Each entry in the array is a structure containing:
   *
   * - Key. A string between 1 and 128 characters. Supported keys include `ExecutedBefore` and `ExecutedAfter`.
   * - Values. An array of strings, each between 1 and 256 characters. Supported values are date/time strings in a valid ISO 8601 date/time format, such as `2024-11-04T05:00:00Z`.
   *
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the information about an execution of a maintenance window.
 *
 * @public
 */
export interface MaintenanceWindowExecution {
  /**
   * The ID of the maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The ID of the maintenance window execution.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * The status of the execution.
   *
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * The details explaining the status. Not available for all status values.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time the execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the execution finished.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionsResult {
  /**
   * Information about the maintenance window executions.
   *
   * @public
   */
  WindowExecutions?: MaintenanceWindowExecution[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * The ID of the maintenance window execution the task is part of.
   *
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * The ID of the specific task in the maintenance window task that should be retrieved.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * Optional filters used to scope down the returned task invocations. The supported filter key is `STATUS` with the corresponding values `PENDING`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, `TIMED_OUT`, `CANCELLING`, and `CANCELLED`.
   *
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.
 *
 * @public
 */
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * The ID of the maintenance window execution that ran the task.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * The ID of the specific task execution in the maintenance window execution.
   *
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * The ID of the task invocation.
   *
   * @public
   */
  InvocationId?: string | undefined;

  /**
   * The ID of the action performed in the service that actually handled the task invocation. If the task type is `RUN_COMMAND`, this value is the command ID.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * The task type.
   *
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * The parameters that were provided for the invocation when it was run.
   *
   * @public
   */
  Parameters?: string | undefined;

  /**
   * The status of the task invocation.
   *
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * The details explaining the status of the task invocation. Not available for all status values.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time the invocation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the invocation finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * User-provided value that was specified when the target was registered with the maintenance window. This was also included in any Amazon CloudWatch Events events raised during the task invocation.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * The ID of the target definition in this maintenance window the invocation was performed for.
   *
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  /**
   * Information about the task invocation results per invocation.
   *
   * @public
   */
  WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * The ID of the maintenance window execution whose task executions should be retrieved.
   *
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * Optional filters used to scope down the returned tasks. The supported filter key is `STATUS` with the corresponding values `PENDING`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, `TIMED_OUT`, `CANCELLING`, and `CANCELLED`.
   *
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a task execution performed as part of a maintenance window execution.
 *
 * @public
 */
export interface MaintenanceWindowExecutionTaskIdentity {
  /**
   * The ID of the maintenance window execution that ran the task.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * The ID of the specific task execution in the maintenance window execution.
   *
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * The status of the task execution.
   *
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * The details explaining the status of the task execution. Not available for all status values.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time the task execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the task execution finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task that ran.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The type of task that ran.
   *
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * The details for the CloudWatch alarm applied to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarm that was invoked by the maintenance window task.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowExecutionTasksResult {
  /**
   * Information about the task executions.
   *
   * @public
   */
  WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsRequest {
  /**
   * Optional filters used to narrow down the scope of the returned maintenance windows. Supported filter keys are `Name` and `Enabled`. For example, `Name=MyMaintenanceWindow` and `Enabled=True`.
   *
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the maintenance window.
 *
 * @public
 */
export interface MaintenanceWindowIdentity {
  /**
   * The ID of the maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The name of the maintenance window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the maintenance window.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the maintenance window is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The duration of the maintenance window in hours.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
   *
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * The schedule of the maintenance window in the form of a cron or rate expression.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
   *
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.
   *
   * @public
   */
  NextExecutionTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsResult {
  /**
   * Information about the maintenance windows.
   *
   * @public
   */
  WindowIdentities?: MaintenanceWindowIdentity[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowScheduleRequest {
  /**
   * The ID of the maintenance window to retrieve information about.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The managed node ID or key-value pair to retrieve information about.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The type of resource you want to retrieve information about. For example, `INSTANCE`.
   *
   * @public
   */
  ResourceType?: MaintenanceWindowResourceType | undefined;

  /**
   * Filters used to limit the range of results. For example, you can limit maintenance window executions to only those scheduled before or after a certain date and time.
   *
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a scheduled execution for a maintenance window.
 *
 * @public
 */
export interface ScheduledWindowExecution {
  /**
   * The ID of the maintenance window to be run.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The name of the maintenance window to be run.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be run.
   *
   * @public
   */
  ExecutionTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowScheduleResult {
  /**
   * Information about maintenance window executions scheduled for the specified time range.
   *
   * @public
   */
  ScheduledWindowExecutions?: ScheduledWindowExecution[] | undefined;

  /**
   * The token for the next set of items to return. (You use this token in the next call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsForTargetRequest {
  /**
   * The managed node ID or key-value pair to retrieve information about.
   *
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * The type of resource you want to retrieve information about. For example, `INSTANCE`.
   *
   * @public
   */
  ResourceType: MaintenanceWindowResourceType | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The maintenance window to which the specified target belongs.
 *
 * @public
 */
export interface MaintenanceWindowIdentityForTarget {
  /**
   * The ID of the maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The name of the maintenance window.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsForTargetResult {
  /**
   * Information about the maintenance window targets and tasks a managed node is associated with.
   *
   * @public
   */
  WindowIdentities?: MaintenanceWindowIdentityForTarget[] | undefined;

  /**
   * The token for the next set of items to return. (You use this token in the next call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTargetsRequest {
  /**
   * The ID of the maintenance window whose targets should be retrieved.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * Optional filters that can be used to narrow down the scope of the returned window targets. The supported filter keys are `Type`, `WindowTargetId`, and `OwnerInformation`.
   *
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The target registered with the maintenance window.
 *
 * @public
 */
export interface MaintenanceWindowTarget {
  /**
   * The ID of the maintenance window to register the target with.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The ID of the target.
   *
   * @public
   */
  WindowTargetId?: string | undefined;

  /**
   * The type of target that is being registered with the maintenance window.
   *
   * @public
   */
  ResourceType?: MaintenanceWindowResourceType | undefined;

  /**
   * The targets, either managed nodes or tags.
   *
   * Specify managed nodes using the following format:
   *
   * `Key=instanceids,Values=<instanceid1>,<instanceid2>`
   *
   * Tags are specified using the following format:
   *
   * `Key=<tag name>,Values=<tag value>`.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * The name for the maintenance window target.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description for the target.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTargetsResult {
  /**
   * Information about the targets in the maintenance window.
   *
   * @public
   */
  Targets?: MaintenanceWindowTarget[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTasksRequest {
  /**
   * The ID of the maintenance window whose tasks should be retrieved.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * Optional filters used to narrow down the scope of the returned tasks. The supported filter keys are `WindowTaskId`, `TaskArn`, `Priority`, and `TaskType`.
   *
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to.
 *
 * > **Note:** `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 *
 * @public
 */
export interface LoggingInfo {
  /**
   * The name of an S3 bucket where execution logs are stored.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * (Optional) The S3 bucket subfolder.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * The Amazon Web Services Region where the S3 bucket is located.
   *
   * @public
   */
  S3Region: string | undefined;
}

/**
 * Defines the values for a task parameter.
 *
 * @public
 */
export interface MaintenanceWindowTaskParameterValueExpression {
  /**
   * This field contains an array of 0 or more strings, each 1 to 255 characters in length.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Information about a task defined for a maintenance window.
 *
 * @public
 */
export interface MaintenanceWindowTask {
  /**
   * The ID of the maintenance window where the task is registered.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The task ID.
   *
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * The resource that the task uses during execution. For `RUN_COMMAND` and `AUTOMATION` task types, `TaskArn` is the Amazon Web Services Systems Manager (SSM document) name or ARN. For `LAMBDA` tasks, it's the function name or ARN. For `STEP_FUNCTIONS` tasks, it's the state machine ARN.
   *
   * > **Note:** Maintenance Window does not validate the TaskArn when you register a task. A successful registration does not guarantee that the TaskArn is valid.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The type of task.
   *
   * @public
   */
  Type?: MaintenanceWindowTaskType | undefined;

  /**
   * The targets (either managed nodes or tags). Managed nodes are specified using `Key=instanceids,Values=<instanceid1>,<instanceid2>`. Tags are specified using `Key=<tag name>,Values=<tag value>`.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The parameters that should be passed to the task when it is run.
   *
   * > **Note:** `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * Information about an S3 bucket to write task-level logs to.
   *
   * > **Note:** `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow`.
   *
   * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * The maximum number of targets this task can be run for, in parallel.
   *
   * > **Note:**
   * >
   * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   * >
   * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors allowed before this task stops being scheduled.
   *
   * > **Note:**
   * >
   * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   * >
   * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The task name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
   *
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * The details for the CloudWatch alarm applied to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTasksResult {
  /**
   * Information about the tasks in the maintenance window.
   *
   * @public
   */
  Tasks?: MaintenanceWindowTask[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an OpsItem filter.
 *
 * @public
 */
export interface OpsItemFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Key: OpsItemFilterKey | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator used by the filter call.
   *
   * @public
   */
  Operator: OpsItemFilterOperator | undefined;
}

/**
 * @public
 */
export interface DescribeOpsItemsRequest {
  /**
   * One or more filters to limit the response.
   *
   * - Key: CreatedTime
   *
   *   Operations: GreaterThan, LessThan
   * - Key: LastModifiedBy
   *
   *   Operations: Contains, Equals
   * - Key: LastModifiedTime
   *
   *   Operations: GreaterThan, LessThan
   * - Key: Priority
   *
   *   Operations: Equals
   * - Key: Source
   *
   *   Operations: Contains, Equals
   * - Key: Status
   *
   *   Operations: Equals
   * - Key: Title*
   *
   *   Operations: Equals,Contains
   * - Key: OperationalData**
   *
   *   Operations: Equals
   * - Key: OperationalDataKey
   *
   *   Operations: Equals
   * - Key: OperationalDataValue
   *
   *   Operations: Equals, Contains
   * - Key: OpsItemId
   *
   *   Operations: Equals
   * - Key: ResourceId
   *
   *   Operations: Contains
   * - Key: AutomationId
   *
   *   Operations: Equals
   * - Key: AccountId
   *
   *   Operations: Equals
   *
   * *The Equals operator for Title matches the first 100 characters. If you specify more than 100 characters, they system returns an error that the filter value exceeds the length limit.
   *
   * **If you filter the response by using the OperationalData operator, specify a key-value pair by using the following JSON format: \{"key":"key_name","value":"a_value"\}
   *
   * @public
   */
  OpsItemFilters?: OpsItemFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A count of OpsItems.
 *
 * @public
 */
export interface OpsItemSummary {
  /**
   * The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time the OpsItem was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time the OpsItem was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The importance of this OpsItem in relation to other OpsItems in the system.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The impacted Amazon Web Services resource.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The OpsItem status.
   *
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * The ID of the OpsItem.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * A short heading that describes the nature of the OpsItem and the impacted resource.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Operational data is custom data that provides useful reference details about the OpsItem.
   *
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * A list of OpsItems by category.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * A list of OpsItems by severity.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The type of OpsItem. Systems Manager supports the following types of OpsItems:
   *
   * - `/aws/issue`
   *
   *   This type of OpsItem is used for default OpsItems created by OpsCenter.
   * - `/aws/changerequest`
   *
   *   This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests.
   * - `/aws/insight`
   *
   *   This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.
   *
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * The time a runbook workflow started. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * The time a runbook workflow ended. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOpsItemsResponse {
  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of OpsItems.
   *
   * @public
   */
  OpsItemSummaries?: OpsItemSummary[] | undefined;
}

/**
 * This data type is deprecated. Instead, use ParameterStringFilter.
 *
 * @public
 */
export interface ParametersFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Key: ParametersFilterKey | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * One or more filters. Use a filter to return a more specific list of results.
 *
 * @public
 */
export interface ParameterStringFilter {
  /**
   * The name of the filter.
   *
   * The `ParameterStringFilter` object is used by the DescribeParameters and GetParametersByPath API operations. However, not all of the pattern values listed for `Key` can be used with both operations.
   *
   * For `DescribeParameters`, all of the listed patterns are valid except `Label`.
   *
   * For `GetParametersByPath`, the following patterns listed for `Key` aren't valid: `tag`, `DataType`, `Name`, `Path`, and `Tier`.
   *
   * For examples of Amazon Web Services CLI commands demonstrating valid parameter filter constructions, see [Searching for Systems Manager parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * For all filters used with DescribeParameters, valid options include `Equals` and `BeginsWith`. The `Name` filter additionally supports the `Contains` option. (Exception: For filters using the key `Path`, valid options include `Recursive` and `OneLevel`.)
   *
   * For filters used with GetParametersByPath, valid options include `Equals` and `BeginsWith`. (Exception: For filters using `Label` as the Key name, the only valid option is `Equals`.)
   *
   * @public
   */
  Option?: string | undefined;

  /**
   * The value you want to search for.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * This data type is deprecated. Instead, use `ParameterFilters`.
   *
   * @public
   */
  Filters?: ParametersFilter[] | undefined;

  /**
   * Filters to limit the request results.
   *
   * @public
   */
  ParameterFilters?: ParameterStringFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists parameters that are shared with you.
   *
   * > **Note:**
   * >
   * > By default when using this option, the command returns parameters that have been shared using a standard Resource Access Manager Resource Share. In order for a parameter that was shared using the PutResourcePolicy command to be returned, the associated `RAM Resource Share Created From Policy` must have been promoted to a standard Resource Share using the RAM [PromoteResourceShareCreatedFromPolicy](https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) API operation.
   * >
   * > For more information about sharing parameters, see [Working with shared parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Shared?: boolean | undefined;
}

/**
 * One or more policies assigned to a parameter.
 *
 * @public
 */
export interface ParameterInlinePolicy {
  /**
   * The JSON text of the policy.
   *
   * @public
   */
  PolicyText?: string | undefined;

  /**
   * The type of policy. Parameter Store, a tool in Amazon Web Services Systems Manager, supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification.
   *
   * @public
   */
  PolicyType?: string | undefined;

  /**
   * The status of the policy. Policies report the following statuses: Pending (the policy hasn't been enforced or applied yet), Finished (the policy was applied), Failed (the policy wasn't applied), or InProgress (the policy is being applied now).
   *
   * @public
   */
  PolicyStatus?: string | undefined;
}

/**
 * Metadata includes information like the Amazon Resource Name (ARN) of the last user to update the parameter and the date and time the parameter was last used.
 *
 * @public
 */
export interface ParameterMetadata {
  /**
   * The parameter name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parameter.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The type of parameter. Valid parameter types include the following: `String`, `StringList`, and `SecureString`.
   *
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * The alias of the Key Management Service (KMS) key used to encrypt the parameter. Applies to `SecureString` parameters only.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Date the parameter was last changed or updated.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.
   *
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * Description of the parameter actions.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A parameter name can include only the following letters and symbols.
   *
   * a-zA-Z0-9_.-
   *
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * The parameter version.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The parameter tier.
   *
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * A list of policies associated with a parameter.
   *
   * @public
   */
  Policies?: ParameterInlinePolicy[] | undefined;

  /**
   * The data type of the parameter, such as `text` or `aws:ec2:image`. The default is `text`.
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResult {
  /**
   * Parameters returned by the request.
   *
   * @public
   */
  Parameters?: ParameterMetadata[] | undefined;

  /**
   * The token to use when requesting the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchBaselinesRequest {
  /**
   * Each element in the array is a structure containing a key-value pair.
   *
   * Supported keys for `DescribePatchBaselines` include the following:
   *
   * - **`NAME_PREFIX`**
   *
   *   Sample values: `AWS-` | `My-`
   * - **`OWNER`**
   *
   *   Sample values: `AWS` | `Self`
   * - **`OPERATING_SYSTEM`**
   *
   *   Sample values: `AMAZON_LINUX` | `SUSE` | `WINDOWS`
   *
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * The maximum number of patch baselines to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines the basic information about a patch baseline.
 *
 * @public
 */
export interface PatchBaselineIdentity {
  /**
   * The ID of the patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The name of the patch baseline.
   *
   * @public
   */
  BaselineName?: string | undefined;

  /**
   * Defines the operating system the patch baseline applies to. The default value is `WINDOWS`.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * The description of the patch baseline.
   *
   * @public
   */
  BaselineDescription?: string | undefined;

  /**
   * Indicates whether this is the default baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.
   *
   * @public
   */
  DefaultBaseline?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribePatchBaselinesResult {
  /**
   * An array of `PatchBaselineIdentity` elements.
   *
   * @public
   */
  BaselineIdentities?: PatchBaselineIdentity[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupsRequest {
  /**
   * The maximum number of patch groups to return (per page).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Each element in the array is a structure containing a key-value pair.
   *
   * Supported keys for `DescribePatchGroups` include the following:
   *
   * - **`NAME_PREFIX`**
   *
   *   Sample values: `AWS-` | `My-`.
   * - **`OPERATING_SYSTEM`**
   *
   *   Sample values: `AMAZON_LINUX` | `SUSE` | `WINDOWS`
   *
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The mapping between a patch group and the patch baseline the patch group is registered with.
 *
 * @public
 */
export interface PatchGroupPatchBaselineMapping {
  /**
   * The name of the patch group registered with the patch baseline.
   *
   * @public
   */
  PatchGroup?: string | undefined;

  /**
   * The patch baseline the patch group is registered with.
   *
   * @public
   */
  BaselineIdentity?: PatchBaselineIdentity | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupsResult {
  /**
   * Each entry in the array contains:
   *
   * - `PatchGroup`: string (between 1 and 256 characters. Regex: `^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]*)$)`
   * - `PatchBaselineIdentity`: A `PatchBaselineIdentity` element.
   *
   * @public
   */
  Mappings?: PatchGroupPatchBaselineMapping[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupStateRequest {
  /**
   * The name of the patch group whose patch snapshot should be retrieved.
   *
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupStateResult {
  /**
   * The number of managed nodes in the patch group.
   *
   * @public
   */
  Instances?: number | undefined;

  /**
   * The number of managed nodes with installed patches.
   *
   * @public
   */
  InstancesWithInstalledPatches?: number | undefined;

  /**
   * The number of managed nodes with patches installed that aren't defined in the patch baseline.
   *
   * @public
   */
  InstancesWithInstalledOtherPatches?: number | undefined;

  /**
   * The number of managed nodes with patches installed by Patch Manager that haven't been rebooted after the patch installation. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  InstancesWithInstalledPendingRebootPatches?: number | undefined;

  /**
   * The number of managed nodes with patches installed that are specified in a `RejectedPatches` list. Patches with a status of `INSTALLED_REJECTED` were typically installed before they were added to a `RejectedPatches` list.
   *
   * > **Note:** If `ALLOW_AS_DEPENDENCY` is the specified option for `RejectedPatchesAction`, the value of `InstancesWithInstalledRejectedPatches` will always be `0` (zero).
   *
   * @public
   */
  InstancesWithInstalledRejectedPatches?: number | undefined;

  /**
   * The number of managed nodes with missing patches from the patch baseline.
   *
   * @public
   */
  InstancesWithMissingPatches?: number | undefined;

  /**
   * The number of managed nodes with patches from the patch baseline that failed to install.
   *
   * @public
   */
  InstancesWithFailedPatches?: number | undefined;

  /**
   * The number of managed nodes with patches that aren't applicable.
   *
   * @public
   */
  InstancesWithNotApplicablePatches?: number | undefined;

  /**
   * The number of managed nodes with `NotApplicable` patches beyond the supported limit, which aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  InstancesWithUnreportedNotApplicablePatches?: number | undefined;

  /**
   * The number of managed nodes where patches that are specified as `Critical` for compliance reporting in the patch baseline aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  InstancesWithCriticalNonCompliantPatches?: number | undefined;

  /**
   * The number of managed nodes where patches that are specified as `Security` in a patch advisory aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  InstancesWithSecurityNonCompliantPatches?: number | undefined;

  /**
   * The number of managed nodes with patches installed that are specified as other than `Critical` or `Security` but aren't compliant with the patch baseline. The status of these managed nodes is `NON_COMPLIANT`.
   *
   * @public
   */
  InstancesWithOtherNonCompliantPatches?: number | undefined;

  /**
   * The number of managed nodes for which security-related patches are available but not approved because because they didn't meet the patch baseline requirements. For example, an updated version of a patch might have been released before the specified auto-approval period was over.
   *
   * Applies to Windows Server managed nodes only.
   *
   * @public
   */
  InstancesWithAvailableSecurityUpdates?: number | undefined;
}

/**
 * @public
 */
export interface DescribePatchPropertiesRequest {
  /**
   * The operating system type for which to list patches.
   *
   * @public
   */
  OperatingSystem: OperatingSystem | undefined;

  /**
   * The patch property for which you want to view patch details.
   *
   * @public
   */
  Property: PatchProperty | undefined;

  /**
   * Indicates whether to list patches for the Windows operating system or for applications released by Microsoft. Not applicable for the Linux or macOS operating systems.
   *
   * @public
   */
  PatchSet?: PatchSet | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchPropertiesResult {
  /**
   * A list of the properties for patches matching the filter request parameters.
   *
   * @public
   */
  Properties?: Record<string, string>[] | undefined;

  /**
   * The token for the next set of items to return. (You use this token in the next call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a filter for Session Manager information.
 *
 * @public
 */
export interface SessionFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  key: SessionFilterKey | undefined;

  /**
   * The filter value. Valid values for each filter key are as follows:
   *
   * - InvokedAfter: Specify a timestamp to limit your results. For example, specify 2024-08-29T00:00:00Z to see sessions that started August 29, 2024, and later.
   * - InvokedBefore: Specify a timestamp to limit your results. For example, specify 2024-08-29T00:00:00Z to see sessions that started before August 29, 2024.
   * - Target: Specify a managed node to which session connections have been made.
   * - Owner: Specify an Amazon Web Services user to see a list of sessions started by that user.
   * - Status: Specify a valid session status to see a list of all sessions with that status. Status values you can specify include:
   *
   *   - Connected
   *   - Connecting
   *   - Disconnected
   *   - Terminated
   *   - Terminating
   *   - Failed
   * - SessionId: Specify a session ID to return details about the session.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsRequest {
  /**
   * The session status to retrieve a list of sessions for. For example, "Active".
   *
   * @public
   */
  State: SessionState | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters to limit the type of sessions returned by the request.
   *
   * @public
   */
  Filters?: SessionFilter[] | undefined;
}

/**
 * Reserved for future use.
 *
 * @public
 */
export interface SessionManagerOutputUrl {
  /**
   * Reserved for future use.
   *
   * @public
   */
  S3OutputUrl?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  CloudWatchOutputUrl?: string | undefined;
}

/**
 * Information about a Session Manager connection to a managed node.
 *
 * @public
 */
export interface Session {
  /**
   * The ID of the session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The managed node that the Session Manager session connected to.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The status of the session. For example, "Connected" or "Terminated".
   *
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, when the session began.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, when the session was terminated.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The name of the Session Manager SSM document used to define the parameters and plugin settings for the session. For example, `SSM-SessionManagerRunShell`.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The ID of the Amazon Web Services user that started the session.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The reason for connecting to the instance.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Details?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  OutputUrl?: SessionManagerOutputUrl | undefined;

  /**
   * The maximum duration of a session before it terminates.
   *
   * @public
   */
  MaxSessionDuration?: string | undefined;

  /**
   * `Standard` access type is the default for Session Manager sessions. `JustInTime` is the access type for [Just-in-time node access](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-just-in-time-node-access.html).
   *
   * @public
   */
  AccessType?: AccessType | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsResponse {
  /**
   * A list of sessions meeting the request parameters.
   *
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOpsItemRelatedItemRequest {
  /**
   * The ID of the OpsItem for which you want to delete an association between the OpsItem and a related item.
   *
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * The ID of the association for which you want to delete an association between the OpsItem and a related item.
   *
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
   * The ID of a just-in-time node access request.
   *
   * @public
   */
  AccessRequestId: string | undefined;
}

/**
 * The temporary security credentials, which include an access key ID, a secret access key, and a security (or session) token.
 *
 * @public
 */
export interface Credentials {
  /**
   * The access key ID that identifies the temporary security credentials.
   *
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * The secret access key that can be used to sign requests.
   *
   * @public
   */
  SecretAccessKey: string | undefined;

  /**
   * The token that users must pass to the service API to use the temporary credentials.
   *
   * @public
   */
  SessionToken: string | undefined;

  /**
   * The datetime on which the current credentials expire.
   *
   * @public
   */
  ExpirationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenResponse {
  /**
   * The temporary security credentials which can be used to start just-in-time node access sessions.
   *
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * The status of the access request.
   *
   * @public
   */
  AccessRequestStatus?: AccessRequestStatus | undefined;
}

/**
 * @public
 */
export interface GetAutomationExecutionRequest {
  /**
   * The unique identifier for an existing automation execution to examine. The execution ID is returned by StartAutomationExecution when the execution of an Automation runbook is initiated.
   *
   * @public
   */
  AutomationExecutionId: string | undefined;
}

/**
 * An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
 *
 * @public
 */
export interface ProgressCounters {
  /**
   * The total number of steps run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
   *
   * @public
   */
  TotalSteps?: number | undefined;

  /**
   * The total number of steps that successfully completed in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
   *
   * @public
   */
  SuccessSteps?: number | undefined;

  /**
   * The total number of steps that failed to run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
   *
   * @public
   */
  FailedSteps?: number | undefined;

  /**
   * The total number of steps that the system cancelled in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
   *
   * @public
   */
  CancelledSteps?: number | undefined;

  /**
   * The total number of steps that timed out in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
   *
   * @public
   */
  TimedOutSteps?: number | undefined;
}

/**
 * Detailed information about the current state of an individual Automation execution.
 *
 * @public
 */
export interface AutomationExecution {
  /**
   * The execution ID.
   *
   * @public
   */
  AutomationExecutionId?: string | undefined;

  /**
   * The name of the Automation runbook used during the execution.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The version of the document to use during execution.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The time the execution started.
   *
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * The time the execution finished.
   *
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * The execution status of the Automation.
   *
   * @public
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;

  /**
   * A list of details about the current state of all steps that comprise an execution. An Automation runbook contains a list of steps that are run in order.
   *
   * @public
   */
  StepExecutions?: StepExecution[] | undefined;

  /**
   * A boolean value that indicates if the response contains the full list of the Automation step executions. If true, use the DescribeAutomationStepExecutions API operation to get the full list of step executions.
   *
   * @public
   */
  StepExecutionsTruncated?: boolean | undefined;

  /**
   * The key-value map of execution parameters, which were supplied when calling StartAutomationExecution.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The list of execution outputs as defined in the Automation runbook.
   *
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * A message describing why an execution has failed, if the status is set to Failed.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * A message that describes a non-critical issue that occurred during the automation execution.
   *
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * The automation execution mode.
   *
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * The AutomationExecutionId of the parent automation.
   *
   * @public
   */
  ParentAutomationExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who ran the automation.
   *
   * @public
   */
  ExecutedBy?: string | undefined;

  /**
   * The name of the step that is currently running.
   *
   * @public
   */
  CurrentStepName?: string | undefined;

  /**
   * The action of the step that is currently running.
   *
   * @public
   */
  CurrentAction?: string | undefined;

  /**
   * The parameter name.
   *
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * The specified targets.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The specified key-value mapping of document parameters to target resources.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * A list of resolved targets in the rate control execution.
   *
   * @public
   */
  ResolvedTargets?: ResolvedTargets | undefined;

  /**
   * The `MaxConcurrency` value specified by the user when the execution started.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The MaxErrors value specified by the user when the execution started.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The target of the execution.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the Automation.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
   *
   * @public
   */
  ProgressCounters?: ProgressCounters | undefined;

  /**
   * The details for the CloudWatch alarm applied to your automation.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarm that was invoked by the automation.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * A publicly accessible URL for a file that contains the `TargetLocations` body. Currently, only files in presigned Amazon S3 buckets are supported
   *
   * @public
   */
  TargetLocationsURL?: string | undefined;

  /**
   * The subtype of the Automation operation. Currently, the only supported value is `ChangeRequest`.
   *
   * @public
   */
  AutomationSubtype?: AutomationSubtype | undefined;

  /**
   * The date and time the Automation operation is scheduled to start.
   *
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * Information about the Automation runbooks that are run as part of a runbook workflow.
   *
   * > **Note:** The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.
   *
   * @public
   */
  Runbooks?: Runbook[] | undefined;

  /**
   * The ID of an OpsItem that is created to represent a Change Manager change request.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * The ID of a State Manager association used in the Automation operation.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The name of the Change Manager change request.
   *
   * @public
   */
  ChangeRequestName?: string | undefined;

  /**
   * Variables defined for the automation.
   *
   * @public
   */
  Variables?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetAutomationExecutionResult {
  /**
   * Detailed information about the current state of an automation execution.
   *
   * @public
   */
  AutomationExecution?: AutomationExecution | undefined;
}

/**
 * @public
 */
export interface GetCalendarStateRequest {
  /**
   * The names of Amazon Resource Names (ARNs) of the Systems Manager documents (SSM documents) that represent the calendar entries for which you want to get the state.
   *
   * @public
   */
  CalendarNames: string[] | undefined;

  /**
   * (Optional) The specific time for which you want to get calendar state information, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If you don't specify a value or `AtTime`, the current time is used.
   *
   * @public
   */
  AtTime?: string | undefined;
}

/**
 * @public
 */
export interface GetCalendarStateResponse {
  /**
   * The state of the calendar. An `OPEN` calendar indicates that actions are allowed to proceed, and a `CLOSED` calendar indicates that actions aren't allowed to proceed.
   *
   * @public
   */
  State?: CalendarState | undefined;

  /**
   * The time, as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string, that you specified in your command. If you don't specify a time, `GetCalendarState` uses the current time.
   *
   * @public
   */
  AtTime?: string | undefined;

  /**
   * The time, as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string, that the calendar state will change. If the current calendar state is `OPEN`, `NextTransitionTime` indicates when the calendar state changes to `CLOSED`, and vice-versa.
   *
   * @public
   */
  NextTransitionTime?: string | undefined;
}

/**
 * @public
 */
export interface GetCloudConnectorRequest {
  /**
   * The ID of the cloud connector to retrieve information about.
   *
   * @public
   */
  CloudConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetCloudConnectorResult {
  /**
   * The ARN of the cloud connector.
   *
   * @public
   */
  CloudConnectorArn?: string | undefined;

  /**
   * The friendly name of the cloud connector.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the cloud connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM role used by the cloud connector.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration details for the third-party cloud environment connection.
   *
   * @public
   */
  Configuration?: CloudConnectorConfiguration | undefined;

  /**
   * The ARN of the Amazon Web Services Config connector associated with this cloud connector.
   *
   * @public
   */
  ConfigConnectorArn?: string | undefined;

  /**
   * The date and time the cloud connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the cloud connector was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetCommandInvocationRequest {
  /**
   * (Required) The parent command ID of the invocation plugin.
   *
   * @public
   */
  CommandId: string | undefined;

  /**
   * (Required) The ID of the managed node targeted by the command. A *managed node* can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, and on-premises server or VM in your hybrid environment that is configured for Amazon Web Services Systems Manager.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the step for which you want detailed results. If the document contains only one step, you can omit the name and details for that step. If the document contains more than one step, you must specify the name of the step for which you want to view details. Be sure to specify the name of the step, not the name of a plugin like `aws:RunShellScript`.
   *
   * To find the `PluginName`, check the document content and find the name of the step you want details for. Alternatively, use ListCommandInvocations with the `CommandId` and `Details` parameters. The `PluginName` is the `Name` attribute of the `CommandPlugin` object in the `CommandPlugins` list.
   *
   * @public
   */
  PluginName?: string | undefined;
}

/**
 * Configuration options for sending command output to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * The name of the CloudWatch Logs log group where you want to send command output. If you don't specify a group name, Amazon Web Services Systems Manager automatically creates a log group for you. The log group uses the following naming format:
   *
   * `aws/ssm/SystemsManagerDocumentName`
   *
   * @public
   */
  CloudWatchLogGroupName?: string | undefined;

  /**
   * Enables Systems Manager to send command output to CloudWatch Logs.
   *
   * @public
   */
  CloudWatchOutputEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCommandInvocationResult {
  /**
   * The parent command ID of the invocation plugin.
   *
   * @public
   */
  CommandId?: string | undefined;

  /**
   * The ID of the managed node targeted by the command. A *managed node* can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, or on-premises server or VM in your hybrid environment that is configured for Amazon Web Services Systems Manager.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The comment text for the command.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The name of the document that was run. For example, `AWS-RunShellScript`.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The Systems Manager document (SSM document) version used in the request.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The name of the plugin, or *step name*, for which details are reported. For example, `aws:RunShellScript` is a plugin.
   *
   * @public
   */
  PluginName?: string | undefined;

  /**
   * The error level response code for the plugin script. If the response code is `-1`, then the command hasn't started running on the managed node, or it wasn't received by the node.
   *
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * The date and time the plugin started running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses the `InvokedBefore` filter.
   *
   * `aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z`
   *
   * If the plugin hasn't started to run, the string is empty.
   *
   * @public
   */
  ExecutionStartDateTime?: string | undefined;

  /**
   * Duration since `ExecutionStartDateTime`.
   *
   * @public
   */
  ExecutionElapsedTime?: string | undefined;

  /**
   * The date and time the plugin finished running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses the `InvokedAfter` filter.
   *
   * `aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z`
   *
   * If the plugin hasn't started to run, the string is empty.
   *
   * @public
   */
  ExecutionEndDateTime?: string | undefined;

  /**
   * The status of this invocation plugin. This status can be different than `StatusDetails`.
   *
   * @public
   */
  Status?: CommandInvocationStatus | undefined;

  /**
   * A detailed status of the command execution for an invocation. `StatusDetails` includes more information than `Status` because it includes states resulting from error and concurrency control parameters. `StatusDetails` can show different results than `Status`. For more information about these statuses, see [Understanding command statuses](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html) in the *Amazon Web Services Systems Manager User Guide*. `StatusDetails` can be one of the following values:
   *
   * - Pending: The command hasn't been sent to the managed node.
   * - In Progress: The command has been sent to the managed node but hasn't reached a terminal state.
   * - Delayed: The system attempted to send the command to the target, but the target wasn't available. The managed node might not be available because of network issues, because the node was stopped, or for similar reasons. The system will try to send the command again.
   * - Success: The command or plugin ran successfully. This is a terminal state.
   * - Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's `MaxErrors` limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.
   * - Execution Timed Out: The command started to run on the managed node, but the execution wasn't complete before the timeout expired. Execution timeouts count against the `MaxErrors` limit of the parent command. This is a terminal state.
   * - Failed: The command wasn't run successfully on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the `MaxErrors` limit of the parent command. This is a terminal state.
   * - Cancelled: The command was terminated before it was completed. This is a terminal state.
   * - Undeliverable: The command can't be delivered to the managed node. The node might not exist or might not be responding. Undeliverable invocations don't count against the parent command's `MaxErrors` limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.
   * - Terminated: The parent command exceeded its `MaxErrors` limit and subsequent command invocations were canceled by the system. This is a terminal state.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The first 24,000 characters written by the plugin to `stdout`. If the command hasn't finished running, if `ExecutionStatus` is neither Succeeded nor Failed, then this string is empty.
   *
   * @public
   */
  StandardOutputContent?: string | undefined;

  /**
   * The URL for the complete text written by the plugin to `stdout` in Amazon Simple Storage Service (Amazon S3). If an S3 bucket wasn't specified, then this string is empty.
   *
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * The first 8,000 characters written by the plugin to `stderr`. If the command hasn't finished running, then this string is empty.
   *
   * @public
   */
  StandardErrorContent?: string | undefined;

  /**
   * The URL for the complete text written by the plugin to `stderr`. If the command hasn't finished running, then this string is empty.
   *
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * Amazon CloudWatch Logs information where Systems Manager sent the command output.
   *
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}

/**
 * @public
 */
export interface GetConnectionStatusRequest {
  /**
   * The managed node ID.
   *
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionStatusResponse {
  /**
   * The ID of the managed node to check connection status.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The status of the connection to the managed node.
   *
   * @public
   */
  Status?: ConnectionStatus | undefined;
}

/**
 * @public
 */
export interface GetDefaultPatchBaselineRequest {
  /**
   * Returns the default patch baseline for the specified operating system.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetDefaultPatchBaselineResult {
  /**
   * The ID of the default patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The operating system for the returned patch baseline.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * Defines the basic information about a patch baseline override.
 *
 * @public
 */
export interface BaselineOverride {
  /**
   * The operating system rule used by the patch baseline override.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * A set of patch filters, typically used for approval rules.
   *
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * A set of rules defining the approval rules for a patch baseline.
   *
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * A list of explicitly approved patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation.
   *
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * A list of explicitly rejected patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * The action for Patch Manager to take on patches included in the `RejectedPackages` list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
   *
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
   *
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
   *
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * Indicates whether managed nodes for which there are available security-related patches that have not been approved by the baseline are being defined as `COMPLIANT` or `NON_COMPLIANT`. This option is specified when the `CreatePatchBaseline` or `UpdatePatchBaseline` commands are run.
   *
   * Applies to Windows Server managed nodes only.
   *
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * The ID of the managed node for which the appropriate patch snapshot should be retrieved.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The snapshot ID provided by the user when running `AWS-RunPatchBaseline`.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Defines the basic information about a patch baseline override.
   *
   * @public
   */
  BaselineOverride?: BaselineOverride | undefined;

  /**
   * Specifies whether to use S3 dualstack endpoints for the patch snapshot download URL. Set to `true` to receive a presigned URL that supports both IPv4 and IPv6 connectivity. Set to `false` to use standard IPv4-only endpoints. Default is `false`. This parameter is required for managed nodes in IPv6-only environments.
   *
   * @public
   */
  UseS3DualStackEndpoint?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDeployablePatchSnapshotForInstanceResult {
  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The user-defined snapshot ID.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * A pre-signed Amazon Simple Storage Service (Amazon S3) URL that can be used to download the patch snapshot.
   *
   * @public
   */
  SnapshotDownloadUrl?: string | undefined;

  /**
   * Returns the specific operating system (for example Windows Server 2012 or Amazon Linux 2015.09) on the managed node for the specified patch snapshot.
   *
   * @public
   */
  Product?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentRequest {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional field specifying the version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The document version for which you want information.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * Returns the document in the specified format. The document format can be either JSON or YAML. JSON is the default format.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;
}

/**
 * A structure that includes attributes that describe a document attachment.
 *
 * @public
 */
export interface AttachmentContent {
  /**
   * The name of an attachment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The size of an attachment in bytes.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The cryptographic hash value of the document content.
   *
   * @public
   */
  Hash?: string | undefined;

  /**
   * The hash algorithm used to calculate the hash value.
   *
   * @public
   */
  HashType?: AttachmentHashType | undefined;

  /**
   * The URL location of the attachment content.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentResult {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date the SSM document was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The document version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The status of the SSM document, such as `Creating`, `Active`, `Updating`, `Failed`, and `Deleting`.
   *
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * A message returned by Amazon Web Services Systems Manager that explains the `Status` value. For example, a `Failed` status might be explained by the `StatusInformation` message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."
   *
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * The contents of the SSM document.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The document type.
   *
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * The document format, either JSON or YAML.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * A list of SSM documents required by a document. For example, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document.
   *
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * A description of the document attachments, including names, locations, sizes, and so on.
   *
   * @public
   */
  AttachmentsContent?: AttachmentContent[] | undefined;

  /**
   * The current review status of a new custom Systems Manager document (SSM document) created by a member of your organization, or of the latest version of an existing SSM document.
   *
   * Only one version of an SSM document can be in the APPROVED state at a time. When a new version is approved, the status of the previous version changes to REJECTED.
   *
   * Only one version of an SSM document can be in review, or PENDING, at a time.
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;
}

/**
 * @public
 */
export interface GetExecutionPreviewRequest {
  /**
   * The ID of the existing execution preview.
   *
   * @public
   */
  ExecutionPreviewId: string | undefined;
}

/**
 * Information about the resources that would be included in the actual runbook execution, if it were to be run.
 *
 * @public
 */
export interface TargetPreview {
  /**
   * The number of resources of a certain type included in an execution preview.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * A type of resource that was included in the execution preview.
   *
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * Information about the results of the execution preview.
 *
 * @public
 */
export interface AutomationExecutionPreview {
  /**
   * Information about the type of impact a runbook step would have on a resource.
   *
   * - `Mutating`: The runbook step would make changes to the targets through actions that create, modify, or delete resources.
   * - `Non_Mutating`: The runbook step would retrieve data about resources but not make changes to them. This category generally includes `Describe*`, `List*`, `Get*`, and similar read-only API actions.
   * - `Undetermined`: An undetermined step invokes executions performed by another orchestration service like Lambda, Step Functions, or Amazon Web Services Systems Manager Run Command. An undetermined step might also call a third-party API. Systems Manager Automation doesn't know the outcome of the orchestration processes or third-party API executions, so the results of the steps are undetermined.
   *
   * @public
   */
  StepPreviews?: Partial<Record<ImpactType, number>> | undefined;

  /**
   * Information about the Amazon Web Services Regions targeted by the execution preview.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * Information that provides a preview of what the impact of running the specified Automation runbook would be.
   *
   * @public
   */
  TargetPreviews?: TargetPreview[] | undefined;

  /**
   * Information about the Amazon Web Services accounts that were included in the execution preview.
   *
   * @public
   */
  TotalAccounts?: number | undefined;
}

/**
 * Information about the changes that would be made if an execution were run.
 *
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
   * Information about the changes that would be made if an Automation workflow were run.
   *
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
   * The generated ID for the existing execution preview.
   *
   * @public
   */
  ExecutionPreviewId?: string | undefined;

  /**
   * A UTC timestamp indicating when the execution preview operation ended.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The current status of the execution preview operation.
   *
   * @public
   */
  Status?: ExecutionPreviewStatus | undefined;

  /**
   * Supplemental information about the current status of the execution preview.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about the changes that would be made if an execution were run.
   *
   * @public
   */
  ExecutionPreview?: ExecutionPreview | undefined;
}

/**
 * One or more filters. Use a filter to return a more specific list of results.
 *
 * **Example formats for the `aws ssm get-inventory` command:**
 *
 * `--filters Key=AWS:InstanceInformation.AgentType,Values=amazon-ssm-agent,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.AgentVersion,Values=3.3.2299.0,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.ComputerName,Values=ip-192.0.2.0.us-east-2.compute.internal,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.InstanceId,Values=i-0a4cd6ceffEXAMPLE,i-1a2b3c4d5e6EXAMPLE,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.InstanceStatus,Values=Active,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.IpAddress,Values=198.51.100.0,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.PlatformName,Values="Amazon Linux",Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.PlatformType,Values=Linux,Type=Equal`
 *
 * `--filters Key=AWS:InstanceInformation.PlatformVersion,Values=2023,Type=BeginWith`
 *
 * `--filters Key=AWS:InstanceInformation.ResourceType,Values=EC2Instance,Type=Equal`
 *
 * @public
 */
export interface InventoryFilter {
  /**
   * The name of the filter key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Inventory filter values.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The type of filter.
   *
   * > **Note:** The `Exists` filter must be used with aggregators. For more information, see [Aggregating inventory data](https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-aggregate.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Type?: InventoryQueryOperatorType | undefined;
}

/**
 * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
 *
 * @public
 */
export interface InventoryGroup {
  /**
   * The name of the group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Filters define the criteria for the group. The `matchingCount` field displays the number of resources that match the criteria. The `notMatchingCount` field displays the number of resources that don't match the criteria.
   *
   * @public
   */
  Filters: InventoryFilter[] | undefined;
}

/**
 * The inventory item result attribute.
 *
 * @public
 */
export interface ResultAttribute {
  /**
   * Name of the inventory item type. Valid value: `AWS:InstanceInformation`. Default Value: `AWS:InstanceInformation`.
   *
   * @public
   */
  TypeName: string | undefined;
}

/**
 * The inventory result item.
 *
 * @public
 */
export interface InventoryResultItem {
  /**
   * The name of the inventory result item type.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * The schema version for the inventory result item/
   *
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * The time inventory item data was captured.
   *
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API doesn't update the inventory item type contents if the MD5 hash hasn't changed since last update.
   *
   * @public
   */
  ContentHash?: string | undefined;

  /**
   * Contains all the inventory data of the item type. Results include attribute names and values.
   *
   * @public
   */
  Content: Record<string, string>[] | undefined;
}

/**
 * Inventory query results.
 *
 * @public
 */
export interface InventoryResultEntity {
  /**
   * ID of the inventory result entity. For example, for managed node inventory the result will be the managed node ID. For EC2 instance inventory, the result will be the instance ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The data section in the inventory result entity JSON.
   *
   * @public
   */
  Data?: Record<string, InventoryResultItem> | undefined;
}

/**
 * @public
 */
export interface GetInventoryResult {
  /**
   * Collection of inventory entities such as a collection of managed node inventory.
   *
   * @public
   */
  Entities?: InventoryResultEntity[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInventorySchemaRequest {
  /**
   * The type of inventory item to return.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns inventory schemas that support aggregation. For example, this call returns the `AWS:InstanceInformation` type, because it supports aggregation based on the `PlatformName`, `PlatformType`, and `PlatformVersion` attributes.
   *
   * @public
   */
  Aggregator?: boolean | undefined;

  /**
   * Returns the sub-type schema for a specified inventory type.
   *
   * @public
   */
  SubType?: boolean | undefined;
}

/**
 * Attributes are the entries within the inventory item content. It contains name and value.
 *
 * @public
 */
export interface InventoryItemAttribute {
  /**
   * Name of the inventory item attribute.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the inventory item attribute.
   *
   * @public
   */
  DataType: InventoryAttributeDataType | undefined;
}

/**
 * The inventory item schema definition. Users can use this to compose inventory query filters.
 *
 * @public
 */
export interface InventoryItemSchema {
  /**
   * The name of the inventory type. Default inventory item type names start with Amazon Web Services. Custom inventory type names will start with Custom. Default inventory item types include the following: `AWS:AWSComponent`, `AWS:Application`, `AWS:InstanceInformation`, `AWS:Network`, and `AWS:WindowsUpdate`.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * The schema version for the inventory item.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The schema attributes for inventory. This contains data type and attribute name.
   *
   * @public
   */
  Attributes: InventoryItemAttribute[] | undefined;

  /**
   * The alias name of the inventory type. The alias name is used for display purposes.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface GetInventorySchemaResult {
  /**
   * Inventory schemas returned by the request.
   *
   * @public
   */
  Schemas?: InventoryItemSchema[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowRequest {
  /**
   * The ID of the maintenance window for which you want to retrieve information.
   *
   * @public
   */
  WindowId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowResult {
  /**
   * The ID of the created maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The name of the maintenance window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the maintenance window.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. The maintenance window won't run before this specified time.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. The maintenance window won't run after this specified time.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The schedule of the maintenance window in the form of a cron or rate expression.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
   *
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.
   *
   * @public
   */
  NextExecutionTime?: string | undefined;

  /**
   * The duration of the maintenance window in hours.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
   *
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * Whether targets must be registered with the maintenance window before tasks can be defined for those targets.
   *
   * @public
   */
  AllowUnassociatedTargets?: boolean | undefined;

  /**
   * Indicates whether the maintenance window is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The date the maintenance window was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date the maintenance window was last modified.
   *
   * @public
   */
  ModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionRequest {
  /**
   * The ID of the maintenance window execution that includes the task.
   *
   * @public
   */
  WindowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionResult {
  /**
   * The ID of the maintenance window execution.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * The ID of the task executions from the maintenance window execution.
   *
   * @public
   */
  TaskIds?: string[] | undefined;

  /**
   * The status of the maintenance window execution.
   *
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * The details explaining the status. Not available for all status values.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time the maintenance window started running.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the maintenance window finished running.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskRequest {
  /**
   * The ID of the maintenance window execution that includes the task.
   *
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * The ID of the specific task execution in the maintenance window task that should be retrieved.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskResult {
  /**
   * The ID of the maintenance window execution that includes the task.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * The ID of the specific task execution in the maintenance window task that was retrieved.
   *
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task that ran.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The role that was assumed when running the task.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * The type of task that was run.
   *
   * @public
   */
  Type?: MaintenanceWindowTaskType | undefined;

  /**
   * The parameters passed to the task when it was run.
   *
   * > **Note:** `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * The map has the following format:
   *
   * - `Key`: string, between 1 and 255 characters
   * - `Value`: an array of strings, each between 1 and 255 characters
   *
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>[] | undefined;

  /**
   * The priority of the task.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The defined maximum number of task executions that could be run in parallel.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The defined maximum number of task execution errors allowed before scheduling of the task execution would have been stopped.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The status of the task.
   *
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * The details explaining the status. Not available for all status values.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time the task execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the task execution completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The details for the CloudWatch alarm you applied to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarms that were invoked by the maintenance window task.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * The ID of the maintenance window execution for which the task is a part.
   *
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * The ID of the specific task in the maintenance window task that should be retrieved.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The invocation ID to retrieve.
   *
   * @public
   */
  InvocationId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * The maintenance window execution ID.
   *
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * The task execution ID.
   *
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * The invocation ID.
   *
   * @public
   */
  InvocationId?: string | undefined;

  /**
   * The execution ID.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * Retrieves the task type for a maintenance window.
   *
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * The parameters used at the time that the task ran.
   *
   * @public
   */
  Parameters?: string | undefined;

  /**
   * The task status for an invocation.
   *
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * The details explaining the status. Details are only available for certain status values.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time that the task started running on the target.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time that the task finished running on the target.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * User-provided value to be included in any Amazon CloudWatch Events or Amazon EventBridge events raised while running tasks for these targets in this maintenance window.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * The maintenance window target ID.
   *
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowTaskRequest {
  /**
   * The maintenance window ID that includes the task to retrieve.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The maintenance window task ID to retrieve.
   *
   * @public
   */
  WindowTaskId: string | undefined;
}

/**
 * The parameters for an `AUTOMATION` task type.
 *
 * @public
 */
export interface MaintenanceWindowAutomationParameters {
  /**
   * The version of an Automation runbook to use during task execution.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The parameters for the `AUTOMATION` task.
   *
   * For information about specifying and updating task parameters, see RegisterTaskWithMaintenanceWindow and UpdateMaintenanceWindowTask.
   *
   * > **Note:**
   * >
   * > `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   * >
   * > `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   * >
   * > For `AUTOMATION` task types, Amazon Web Services Systems Manager ignores any values specified for these parameters.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
}

/**
 * The parameters for a `LAMBDA` task type.
 *
 * For information about specifying and updating task parameters, see RegisterTaskWithMaintenanceWindow and UpdateMaintenanceWindowTask.
 *
 * > **Note:**
 * >
 * > `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 * >
 * > `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 * >
 * > For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.
 *
 * @public
 */
export interface MaintenanceWindowLambdaParameters {
  /**
   * Pass client-specific information to the Lambda function that you are invoking. You can then process the client information in your Lambda function as you choose through the context variable.
   *
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * (Optional) Specify an Lambda function version or alias name. If you specify a function version, the operation uses the qualified function Amazon Resource Name (ARN) to invoke a specific Lambda function. If you specify an alias name, the operation uses the alias ARN to invoke the Lambda function version to which the alias points.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * JSON to provide to your Lambda function as input.
   *
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * Configurations for sending notifications.
 *
 * @public
 */
export interface NotificationConfig {
  /**
   * An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run Command pushes notifications about command status changes to this topic.
   *
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * The different events for which you can receive notifications. To learn more about these events, see [Monitoring Systems Manager status changes using Amazon SNS notifications](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  NotificationEvents?: NotificationEvent[] | undefined;

  /**
   * The type of notification.
   *
   * - `Command`: Receive notification when the status of a command changes.
   * - `Invocation`: For commands sent to multiple managed nodes, receive notification on a per-node basis when the status of a command changes.
   *
   * @public
   */
  NotificationType?: NotificationType | undefined;
}

/**
 * The parameters for a `RUN_COMMAND` task type.
 *
 * For information about specifying and updating task parameters, see RegisterTaskWithMaintenanceWindow and UpdateMaintenanceWindowTask.
 *
 * > **Note:**
 * >
 * > `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 * >
 * > `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 * >
 * > For `RUN_COMMAND` tasks, Systems Manager uses specified values for `TaskParameters` and `LoggingInfo` only if no values are specified for `TaskInvocationParameters`.
 *
 * @public
 */
export interface MaintenanceWindowRunCommandParameters {
  /**
   * Information about the commands to run.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * Configuration options for sending command output to Amazon CloudWatch Logs.
   *
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.
   *
   * @public
   */
  DocumentHash?: string | undefined;

  /**
   * SHA-256 or SHA-1. SHA-1 hashes have been deprecated.
   *
   * @public
   */
  DocumentHashType?: DocumentHashType | undefined;

  /**
   * The Amazon Web Services Systems Manager document (SSM document) version to use in the request. You can specify `$DEFAULT`, `$LATEST`, or a specific version number. If you run commands by using the Amazon Web Services CLI, then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example:
   *
   * `--document-version "\$DEFAULT"`
   *
   * `--document-version "\$LATEST"`
   *
   * `--document-version "3"`
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * Configurations for sending notifications about command status changes on a per-managed node basis.
   *
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * The name of the Amazon Simple Storage Service (Amazon S3) bucket.
   *
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * The S3 bucket subfolder.
   *
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * The parameters for the `RUN_COMMAND` task execution.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow`.
   *
   * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * If this time is reached and the command hasn't already started running, it doesn't run.
   *
   * @public
   */
  TimeoutSeconds?: number | undefined;
}

/**
 * The parameters for a `STEP_FUNCTIONS` task.
 *
 * For information about specifying and updating task parameters, see RegisterTaskWithMaintenanceWindow and UpdateMaintenanceWindowTask.
 *
 * > **Note:**
 * >
 * > `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 * >
 * > `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
 * >
 * > For Step Functions tasks, Systems Manager ignores any values specified for `TaskParameters` and `LoggingInfo`.
 *
 * @public
 */
export interface MaintenanceWindowStepFunctionsParameters {
  /**
   * The inputs for the `STEP_FUNCTIONS` task.
   *
   * @public
   */
  Input?: string | undefined;

  /**
   * The name of the `STEP_FUNCTIONS` task.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The parameters for task execution.
 *
 * @public
 */
export interface MaintenanceWindowTaskInvocationParameters {
  /**
   * The parameters for a `RUN_COMMAND` task type.
   *
   * @public
   */
  RunCommand?: MaintenanceWindowRunCommandParameters | undefined;

  /**
   * The parameters for an `AUTOMATION` task type.
   *
   * @public
   */
  Automation?: MaintenanceWindowAutomationParameters | undefined;

  /**
   * The parameters for a `STEP_FUNCTIONS` task type.
   *
   * @public
   */
  StepFunctions?: MaintenanceWindowStepFunctionsParameters | undefined;

  /**
   * The parameters for a `LAMBDA` task type.
   *
   * @public
   */
  Lambda?: MaintenanceWindowLambdaParameters | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowTaskResult {
  /**
   * The retrieved maintenance window ID.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The retrieved maintenance window task ID.
   *
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * The targets where the task should run.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The resource that the task used during execution. For `RUN_COMMAND` and `AUTOMATION` task types, the value of `TaskArn` is the SSM document name/ARN. For `LAMBDA` tasks, the value is the function name/ARN. For `STEP_FUNCTIONS` tasks, the value is the state machine ARN.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow`.
   *
   * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * The type of task to run.
   *
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * The parameters to pass to the task when it runs.
   *
   * > **Note:** `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * The parameters to pass to the task when it runs.
   *
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * The priority of the task when it runs. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The maximum number of targets allowed to run this task in parallel.
   *
   * > **Note:** For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`, which may be reported in the response to this command. This value doesn't affect the running of your task and can be ignored.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors allowed before the task stops being scheduled.
   *
   * > **Note:** For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`, which may be reported in the response to this command. This value doesn't affect the running of your task and can be ignored.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The location in Amazon Simple Storage Service (Amazon S3) where the task results are logged.
   *
   * > **Note:** `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * The retrieved task name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The retrieved task description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The action to take on tasks when the maintenance window cutoff time is reached. `CONTINUE_TASK` means that tasks continue to run. For Automation, Lambda, Step Functions tasks, `CANCEL_TASK` means that currently running task invocations continue, but no new task invocations are started. For Run Command tasks, `CANCEL_TASK` means the system attempts to stop the task by sending a `CancelCommand` operation.
   *
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * The details for the CloudWatch alarm you applied to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface GetOpsItemRequest {
  /**
   * The ID of the OpsItem that you want to get.
   *
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * The OpsItem Amazon Resource Name (ARN).
   *
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.
 *
 * To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see [Amazon Web Services Systems Manager OpsCenter](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @public
 */
export interface OpsItem {
  /**
   * The ARN of the Amazon Web Services account that created the OpsItem.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The type of OpsItem. Systems Manager supports the following types of OpsItems:
   *
   * - `/aws/issue`
   *
   *   This type of OpsItem is used for default OpsItems created by OpsCenter.
   * - `/aws/changerequest`
   *
   *   This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests.
   * - `/aws/insight`
   *
   *   This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.
   *
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * The date and time the OpsItem was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The OpsItem description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the Amazon Web Services account that last updated the OpsItem.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time the OpsItem was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where notifications are sent when this OpsItem is edited or changed.
   *
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * The importance of this OpsItem in relation to other OpsItems in the system.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * One or more OpsItems that share something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
   *
   * @public
   */
  RelatedOpsItems?: RelatedOpsItem[] | undefined;

  /**
   * The OpsItem status. For more information, see [Editing OpsItem details](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * The ID of the OpsItem.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * The version of this OpsItem. Each time the OpsItem is edited the version number increments by one.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * A short heading that describes the nature of the OpsItem and the impacted resource.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The impacted resource is a subset of source.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.
   *
   * > **Important:** Operational data keys *can't* begin with the following: `amazon`, `aws`, `amzn`, `ssm`, `/amazon`, `/aws`, `/amzn`, `/ssm`.
   *
   * You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation).
   *
   * Use the `/aws/resources` key in OperationalData to specify a related resource in the request. Use the `/aws/automations` key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see [Creating OpsItems manually](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * An OpsItem category. Category options include: Availability, Cost, Performance, Recovery, Security.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The severity of the OpsItem. Severity options range from 1 to 4.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The time a runbook workflow started. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * The time a runbook workflow ended. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedEndTime?: Date | undefined;

  /**
   * The OpsItem Amazon Resource Name (ARN).
   *
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * @public
 */
export interface GetOpsItemResponse {
  /**
   * The OpsItem.
   *
   * @public
   */
  OpsItem?: OpsItem | undefined;
}

/**
 * @public
 */
export interface GetOpsMetadataRequest {
  /**
   * The Amazon Resource Name (ARN) of an OpsMetadata Object to view.
   *
   * @public
   */
  OpsMetadataArn: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOpsMetadataResult {
  /**
   * The resource ID of the Application Manager application.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * OpsMetadata for an Application Manager application.
   *
   * @public
   */
  Metadata?: Record<string, MetadataValue> | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter for viewing OpsData summaries.
 *
 * @public
 */
export interface OpsFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The type of filter.
   *
   * @public
   */
  Type?: OpsFilterOperatorType | undefined;
}

/**
 * The OpsItem data type to return.
 *
 * @public
 */
export interface OpsResultAttribute {
  /**
   * Name of the data type. Valid value: `AWS:OpsItem`, `AWS:EC2InstanceInformation`, `AWS:OpsItemTrendline`, or `AWS:ComplianceSummary`.
   *
   * @public
   */
  TypeName: string | undefined;
}

/**
 * The OpsData summary.
 *
 * @public
 */
export interface OpsEntityItem {
  /**
   * The time the OpsData was captured.
   *
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * The details of an OpsData summary.
   *
   * @public
   */
  Content?: Record<string, string>[] | undefined;
}

/**
 * The result of the query.
 *
 * @public
 */
export interface OpsEntity {
  /**
   * The query ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The data returned by the query.
   *
   * @public
   */
  Data?: Record<string, OpsEntityItem> | undefined;
}

/**
 * @public
 */
export interface GetOpsSummaryResult {
  /**
   * The list of aggregated details and filtered OpsData.
   *
   * @public
   */
  Entities?: OpsEntity[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the parameter that you want to query. For parameters shared with you from another account, you must use the full ARN.
   *
   * To query by parameter label, use `"Name": "name:label"`. To query by parameter version, use `"Name": "name:version"`.
   *
   * For more information about shared parameters, see [Working with shared parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Return decrypted values for secure string parameters. This flag is ignored for `String` and `StringList` parameter types.
   *
   * @public
   */
  WithDecryption?: boolean | undefined;
}

/**
 * An Amazon Web Services Systems Manager parameter in Parameter Store.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of parameter. Valid values include the following: `String`, `StringList`, and `SecureString`.
   *
   * > **Note:** If type is `StringList`, the system returns a comma-separated string with no spaces between commas in the `Value` field.
   *
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * The parameter value.
   *
   * > **Note:** If type is `StringList`, the system returns a comma-separated string with no spaces between commas in the `Value` field.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The parameter version.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * Either the version number or the label used to retrieve the parameter value. Specify selectors by using one of the following formats:
   *
   * parameter_name:version
   *
   * parameter_name:label
   *
   * @public
   */
  Selector?: string | undefined;

  /**
   * Applies to parameters that reference information in other Amazon Web Services services. `SourceResult` is the raw result or response from the source.
   *
   * @public
   */
  SourceResult?: string | undefined;

  /**
   * Date the parameter was last changed or updated and the parameter version was created.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parameter.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The data type of the parameter, such as `text` or `aws:ec2:image`. The default is `text`.
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterResult {
  /**
   * Information about a parameter.
   *
   * @public
   */
  Parameter?: Parameter | undefined;
}

/**
 * @public
 */
export interface GetParameterHistoryRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the parameter for which you want to review history. For parameters shared with you from another account, you must use the full ARN.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Return decrypted values for secure string parameters. This flag is ignored for `String` and `StringList` parameter types.
   *
   * @public
   */
  WithDecryption?: boolean | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about parameter usage.
 *
 * @public
 */
export interface ParameterHistory {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of parameter used.
   *
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * The alias of the Key Management Service (KMS) key used to encrypt the parameter. Applies to `SecureString` parameters only
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Date the parameter was last changed or updated.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.
   *
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * Information about the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The parameter value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Parameter names can include the following letters and symbols.
   *
   * a-zA-Z0-9_.-
   *
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * The parameter version.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * Labels assigned to the parameter version.
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * The parameter tier.
   *
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * Information about the policies assigned to a parameter.
   *
   * [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Policies?: ParameterInlinePolicy[] | undefined;

  /**
   * The data type of the parameter, such as `text` or `aws:ec2:image`. The default is `text`.
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterHistoryResult {
  /**
   * A list of parameters returned by the request.
   *
   * @public
   */
  Parameters?: ParameterHistory[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParametersRequest {
  /**
   * The names or Amazon Resource Names (ARNs) of the parameters that you want to query. For parameters shared with you from another account, you must use the full ARNs.
   *
   * To query by parameter label, use `"Name": "name:label"`. To query by parameter version, use `"Name": "name:version"`.
   *
   * > **Note:** The results for `GetParameters` requests are listed in alphabetical order in query responses.
   *
   * For information about shared parameters, see [Working with shared parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Names: string[] | undefined;

  /**
   * Return decrypted secure string value. Return decrypted values for secure string parameters. This flag is ignored for `String` and `StringList` parameter types.
   *
   * @public
   */
  WithDecryption?: boolean | undefined;
}

/**
 * @public
 */
export interface GetParametersResult {
  /**
   * A list of details for a parameter.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * A list of parameters that aren't formatted correctly or don't run during an execution.
   *
   * @public
   */
  InvalidParameters?: string[] | undefined;
}
