// smithy-typescript generated code
import type { Status, StatusType } from "./enums";

/**
 * The definition of a Quick Setup configuration.
 *
 * @public
 */
export interface ConfigurationDefinition {
  /**
   * The type of the Quick Setup configuration.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * A list of key-value pairs containing the required parameters for the configuration type.
   *
   * @public
   */
  Parameters: Record<string, string> | undefined;

  /**
   * The version of the Quick Setup type used.
   *
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * The name of the IAM role used to deploy local configurations.
   *
   * @public
   */
  LocalDeploymentExecutionRoleName?: string | undefined;

  /**
   * The ARN of the IAM role used to administrate local configuration deployments.
   *
   * @public
   */
  LocalDeploymentAdministrationRoleArn?: string | undefined;

  /**
   * The ID of the configuration definition.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Defines the preferences and options for a configuration definition.
 *
 * @public
 */
export interface ConfigurationDefinitionInput {
  /**
   * The type of the Quick Setup configuration.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The parameters for the configuration definition type. Parameters for configuration definitions vary based the configuration type. The following tables outline the parameters for each configuration type.
   *
   * - **OpsCenter (Type: Amazon Web ServicesQuickSetupType-SSMOpsCenter)**
   *
   *   - `DelegatedAccountId`
   *
   *     - Description: (Required) The ID of the delegated administrator account.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Resource Scheduler (Type: Amazon Web ServicesQuickSetupType-Scheduler)**
   *
   *   - `TargetTagKey`
   *
   *     - Description: (Required) The tag key assigned to the instances you want to target.
   *   - `TargetTagValue`
   *
   *     - Description: (Required) The value of the tag key assigned to the instances you want to target.
   *   - `ICalendarString`
   *
   *     - Description: (Required) An iCalendar formatted string containing the schedule you want Change Manager to use.
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Default Host Management Configuration (Type: Amazon Web ServicesQuickSetupType-DHMC)**
   *
   *   - `UpdateSSMAgent`
   *
   *     - Description: (Optional) A boolean value that determines whether the SSM Agent is updated on the target instances every 2 weeks. The default value is "`true`".
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Resource Explorer (Type: Amazon Web ServicesQuickSetupType-ResourceExplorer)**
   *
   *   - `SelectedAggregatorRegion`
   *
   *     - Description: (Required) The Amazon Web Services Region where you want to create the aggregator index.
   *   - `ReplaceExistingAggregator`
   *
   *     - Description: (Required) A boolean value that determines whether to demote an existing aggregator if it is in a Region that differs from the value you specify for the `SelectedAggregatorRegion`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Change Manager (Type: Amazon Web ServicesQuickSetupType-SSMChangeMgr)**
   *
   *   - `DelegatedAccountId`
   *
   *     - Description: (Required) The ID of the delegated administrator account.
   *   - `JobFunction`
   *
   *     - Description: (Required) The name for the Change Manager job function.
   *   - `PermissionType`
   *
   *     - Description: (Optional) Specifies whether you want to use default administrator permissions for the job function role, or provide a custom IAM policy. The valid values are `CustomPermissions` and `AdminPermissions`. The default value for the parameter is `CustomerPermissions`.
   *   - `CustomPermissions`
   *
   *     - Description: (Optional) A JSON string containing the IAM policy you want your job function to use. You must provide a value for this parameter if you specify `CustomPermissions` for the `PermissionType` parameter.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **DevOps Guru (Type: Amazon Web ServicesQuickSetupType-DevOpsGuru)**
   *
   *   - `AnalyseAllResources`
   *
   *     - Description: (Optional) A boolean value that determines whether DevOps Guru analyzes all CloudFormation stacks in the account. The default value is "`false`".
   *   - `EnableSnsNotifications`
   *
   *     - Description: (Optional) A boolean value that determines whether DevOps Guru sends notifications when an insight is created. The default value is "`true`".
   *   - `EnableSsmOpsItems`
   *
   *     - Description: (Optional) A boolean value that determines whether DevOps Guru creates an OpsCenter OpsItem when an insight is created. The default value is "`true`".
   *   - `EnableDriftRemediation`
   *
   *     - Description: (Optional) A boolean value that determines whether a drift remediation schedule is used. The default value is "`false`".
   *   - `RemediationSchedule`
   *
   *     - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)`, `rate(14 days)`, `rate(1 days)`, and `none`. The default value is "`none`".
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Conformance Packs (Type: Amazon Web ServicesQuickSetupType-CFGCPacks)**
   *
   *   - `DelegatedAccountId`
   *
   *     - Description: (Optional) The ID of the delegated administrator account. This parameter is required for Organization deployments.
   *   - `RemediationSchedule`
   *
   *     - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)`, `rate(14 days)`, `rate(2 days)`, and `none`. The default value is "`none`".
   *   - `CPackNames`
   *
   *     - Description: (Required) A comma separated list of Config conformance packs.
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) The ID of the root of your Organization. This configuration type doesn't currently support choosing specific OUs. The configuration will be deployed to all the OUs in the Organization.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Config Recording (Type: Amazon Web ServicesQuickSetupType-CFGRecording)**
   *
   *   - `RecordAllResources`
   *
   *     - Description: (Optional) A boolean value that determines whether all supported resources are recorded. The default value is "`true`".
   *   - `ResourceTypesToRecord`
   *
   *     - Description: (Optional) A comma separated list of resource types you want to record.
   *   - `RecordGlobalResourceTypes`
   *
   *     - Description: (Optional) A boolean value that determines whether global resources are recorded with all resource configurations. The default value is "`false`".
   *   - `GlobalResourceTypesRegion`
   *
   *     - Description: (Optional) Determines the Amazon Web Services Region where global resources are recorded.
   *   - `UseCustomBucket`
   *
   *     - Description: (Optional) A boolean value that determines whether a custom Amazon S3 bucket is used for delivery. The default value is "`false`".
   *   - `DeliveryBucketName`
   *
   *     - Description: (Optional) The name of the Amazon S3 bucket you want Config to deliver configuration snapshots and configuration history files to.
   *   - `DeliveryBucketPrefix`
   *
   *     - Description: (Optional) The key prefix you want to use in the custom Amazon S3 bucket.
   *   - `NotificationOptions`
   *
   *     - Description: (Optional) Determines the notification configuration for the recorder. The valid values are `NoStreaming`, `UseExistingTopic`, and `CreateTopic`. The default value is `NoStreaming`.
   *   - `CustomDeliveryTopicAccountId`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account where the Amazon SNS topic you want to use for notifications resides. You must specify a value for this parameter if you use the `UseExistingTopic` notification option.
   *   - `CustomDeliveryTopicName`
   *
   *     - Description: (Optional) The name of the Amazon SNS topic you want to use for notifications. You must specify a value for this parameter if you use the `UseExistingTopic` notification option.
   *   - `RemediationSchedule`
   *
   *     - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)`, `rate(7 days)`, `rate(1 days)`, and `none`. The default value is "`none`".
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) The ID of the root of your Organization. This configuration type doesn't currently support choosing specific OUs. The configuration will be deployed to all the OUs in the Organization.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Host Management (Type: Amazon Web ServicesQuickSetupType-SSMHostMgmt)**
   *
   *   - `UpdateSSMAgent`
   *
   *     - Description: (Optional) A boolean value that determines whether the SSM Agent is updated on the target instances every 2 weeks. The default value is "`true`".
   *   - `UpdateEc2LaunchAgent`
   *
   *     - Description: (Optional) A boolean value that determines whether the EC2 Launch agent is updated on the target instances every month. The default value is "`false`".
   *   - `CollectInventory`
   *
   *     - Description: (Optional) A boolean value that determines whether the EC2 Launch agent is updated on the target instances every month. The default value is "`true`".
   *   - `ScanInstances`
   *
   *     - Description: (Optional) A boolean value that determines whether the target instances are scanned daily for available patches. The default value is "`true`".
   *   - `InstallCloudWatchAgent`
   *
   *     - Description: (Optional) A boolean value that determines whether the Amazon CloudWatch agent is installed on the target instances. The default value is "`false`".
   *   - `UpdateCloudWatchAgent`
   *
   *     - Description: (Optional) A boolean value that determines whether the Amazon CloudWatch agent is updated on the target instances every month. The default value is "`false`".
   *   - `IsPolicyAttachAllowed`
   *
   *     - Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is "`false`".
   *   - `TargetType`
   *
   *     - Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are `*`, `InstanceIds`, `ResourceGroups`, and `Tags`. Use `*` to target all instances in the account.
   *   - `TargetInstances`
   *
   *     - Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify `InstanceIds` for the `TargetType` parameter.
   *   - `TargetTagKey`
   *
   *     - Description: (Optional) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
   *   - `TargetTagValue`
   *
   *     - Description: (Optional) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
   *   - `ResourceGroupName`
   *
   *     - Description: (Optional) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify `ResourceGroups` for the `TargetType` parameter.
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Distributor (Type: Amazon Web ServicesQuickSetupType-Distributor)**
   *
   *   - `PackagesToInstall`
   *
   *     - Description: (Required) A comma separated list of packages you want to install on the target instances. The valid values are `AWSEFSTools`, `AWSCWAgent`, and `AWSEC2LaunchAgent`.
   *   - `RemediationSchedule`
   *
   *     - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)`, `rate(14 days)`, `rate(2 days)`, and `none`. The default value is "`rate(30 days)`".
   *   - `IsPolicyAttachAllowed`
   *
   *     - Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is "`false`".
   *   - `TargetType`
   *
   *     - Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are `*`, `InstanceIds`, `ResourceGroups`, and `Tags`. Use `*` to target all instances in the account.
   *   - `TargetInstances`
   *
   *     - Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify `InstanceIds` for the `TargetType` parameter.
   *   - `TargetTagKey`
   *
   *     - Description: (Required) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
   *   - `TargetTagValue`
   *
   *     - Description: (Required) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
   *   - `ResourceGroupName`
   *
   *     - Description: (Required) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify `ResourceGroups` for the `TargetType` parameter.
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * - **Patch Policy (Type: Amazon Web ServicesQuickSetupType-PatchPolicy)**
   *
   *   - `PatchPolicyName`
   *
   *     - Description: (Required) A name for the patch policy. The value you provide is applied to target Amazon EC2 instances as a tag.
   *   - `SelectedPatchBaselines`
   *
   *     - Description: (Required) An array of JSON objects containing the information for the patch baselines to include in your patch policy.
   *   - `PatchBaselineUseDefault`
   *
   *     - Description: (Optional) A boolean value that determines whether the selected patch baselines are all Amazon Web Services provided.
   *   - `ConfigurationOptionsPatchOperation`
   *
   *     - Description: (Optional) Determines whether target instances scan for available patches, or scan and install available patches. The valid values are `Scan` and `ScanAndInstall`. The default value for the parameter is `Scan`.
   *   - `ConfigurationOptionsScanValue`
   *
   *     - Description: (Optional) A cron expression that is used as the schedule for when instances scan for available patches.
   *   - `ConfigurationOptionsInstallValue`
   *
   *     - Description: (Optional) A cron expression that is used as the schedule for when instances install available patches.
   *   - `ConfigurationOptionsScanNextInterval`
   *
   *     - Description: (Optional) A boolean value that determines whether instances should scan for available patches at the next cron interval. The default value is "`false`".
   *   - `ConfigurationOptionsInstallNextInterval`
   *
   *     - Description: (Optional) A boolean value that determines whether instances should scan for available patches at the next cron interval. The default value is "`false`".
   *   - `RebootOption`
   *
   *     - Description: (Optional) Determines whether instances are rebooted after patches are installed. Valid values are `RebootIfNeeded` and `NoReboot`.
   *   - `IsPolicyAttachAllowed`
   *
   *     - Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is "`false`".
   *   - `OutputLogEnableS3`
   *
   *     - Description: (Optional) A boolean value that determines whether command output logs are sent to Amazon S3.
   *   - `OutputS3Location`
   *
   *     - Description: (Optional) A JSON string containing information about the Amazon S3 bucket where you want to store the output details of the request.
   *
   *       - `OutputS3BucketRegion`
   *
   *         - Description: (Optional) The Amazon Web Services Region where the Amazon S3 bucket you want Config to deliver command output to is located.
   *       - `OutputS3BucketName`
   *
   *         - Description: (Optional) The name of the Amazon S3 bucket you want Config to deliver command output to.
   *       - `OutputS3KeyPrefix`
   *
   *         - Description: (Optional) The key prefix you want to use in the custom Amazon S3 bucket.
   *   - `TargetType`
   *
   *     - Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are `*`, `InstanceIds`, `ResourceGroups`, and `Tags`. Use `*` to target all instances in the account.
   *   - `TargetInstances`
   *
   *     - Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify `InstanceIds` for the `TargetType` parameter.
   *   - `TargetTagKey`
   *
   *     - Description: (Required) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
   *   - `TargetTagValue`
   *
   *     - Description: (Required) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
   *   - `ResourceGroupName`
   *
   *     - Description: (Required) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify `ResourceGroups` for the `TargetType` parameter.
   *   - `TargetAccounts`
   *
   *     - Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits`.
   *   - `TargetOrganizationalUnits`
   *
   *     - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
   *   - `TargetRegions`
   *
   *     - Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.
   *
   * @public
   */
  Parameters: Record<string, string> | undefined;

  /**
   * The version of the Quick Setup type to use.
   *
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * The name of the IAM role used to deploy local configurations.
   *
   * @public
   */
  LocalDeploymentExecutionRoleName?: string | undefined;

  /**
   * The ARN of the IAM role used to administrate local configuration deployments.
   *
   * @public
   */
  LocalDeploymentAdministrationRoleArn?: string | undefined;
}

/**
 * A summarized definition of a Quick Setup configuration definition.
 *
 * @public
 */
export interface ConfigurationDefinitionSummary {
  /**
   * The ID of the configuration definition.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the Quick Setup configuration used by the configuration definition.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The version of the Quick Setup type used by the configuration definition.
   *
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * The common parameters and values for the configuration definition.
   *
   * @public
   */
  FirstClassParameters?: Record<string, string> | undefined;
}

/**
 * A summarized description of the status.
 *
 * @public
 */
export interface StatusSummary {
  /**
   * The type of a status summary.
   *
   * @public
   */
  StatusType: StatusType | undefined;

  /**
   * The current status.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * When applicable, returns an informational message relevant to the current status and status type of the status summary object. We don't recommend implementing parsing logic around this value since the messages returned can vary in format.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The datetime stamp when the status was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * Details about the status.
   *
   * @public
   */
  StatusDetails?: Record<string, string> | undefined;
}

/**
 * A summary of a Quick Setup configuration manager.
 *
 * @public
 */
export interface ConfigurationManagerSummary {
  /**
   * The ARN of the Quick Setup configuration.
   *
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the configuration
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Summaries of the state of the configuration manager. These summaries include an aggregate of the statuses from the configuration definition associated with the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
   *
   * @public
   */
  StatusSummaries?: StatusSummary[] | undefined;

  /**
   * A summary of the Quick Setup configuration definition.
   *
   * @public
   */
  ConfigurationDefinitionSummaries?: ConfigurationDefinitionSummary[] | undefined;
}

/**
 * Details for a Quick Setup configuration.
 *
 * @public
 */
export interface ConfigurationSummary {
  /**
   * A service generated identifier for the configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the configuration manager.
   *
   * @public
   */
  ManagerArn?: string | undefined;

  /**
   * The ID of the configuration definition.
   *
   * @public
   */
  ConfigurationDefinitionId?: string | undefined;

  /**
   * The type of the Quick Setup configuration.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The version of the Quick Setup type used.
   *
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * The Amazon Web Services Region where the configuration was deployed.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The ID of the Amazon Web Services account where the configuration was deployed.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The datetime stamp when the configuration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The common parameters and values for the configuration definition.
   *
   * @public
   */
  FirstClassParameters?: Record<string, string> | undefined;

  /**
   * A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
   *
   * @public
   */
  StatusSummaries?: StatusSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationManagerInput {
  /**
   * A name for the configuration manager.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the configuration manager.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The definition of the Quick Setup configuration that the configuration manager deploys.
   *
   * @public
   */
  ConfigurationDefinitions: ConfigurationDefinitionInput[] | undefined;

  /**
   * Key-value pairs of metadata to assign to the configuration manager.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationManagerOutput {
  /**
   * The ARN for the newly created configuration manager.
   *
   * @public
   */
  ManagerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationManagerInput {
  /**
   * The ID of the configuration manager.
   *
   * @public
   */
  ManagerArn: string | undefined;
}

/**
 * A key-value pair to filter results.
 *
 * @public
 */
export interface Filter {
  /**
   * The key for the filter.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The values for the filter keys.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface GetConfigurationInput {
  /**
   * A service generated identifier for the configuration.
   *
   * @public
   */
  ConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationOutput {
  /**
   * A service generated identifier for the configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the configuration manager.
   *
   * @public
   */
  ManagerArn?: string | undefined;

  /**
   * The ID of the configuration definition.
   *
   * @public
   */
  ConfigurationDefinitionId?: string | undefined;

  /**
   * The type of the Quick Setup configuration.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The version of the Quick Setup type used.
   *
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * The ID of the Amazon Web Services account where the configuration was deployed.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The Amazon Web Services Region where the configuration was deployed.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The datetime stamp when the configuration manager was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The datetime stamp when the configuration manager was last updated.
   *
   * @public
   */
  LastModifiedAt?: Date | undefined;

  /**
   * A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
   *
   * @public
   */
  StatusSummaries?: StatusSummary[] | undefined;

  /**
   * The parameters for the configuration definition type.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConfigurationManagerInput {
  /**
   * The ARN of the configuration manager.
   *
   * @public
   */
  ManagerArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationManagerOutput {
  /**
   * The ARN of the configuration manager.
   *
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * The description of the configuration manager.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the configuration manager.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The datetime stamp when the configuration manager was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The datetime stamp when the configuration manager was last updated.
   *
   * @public
   */
  LastModifiedAt?: Date | undefined;

  /**
   * A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
   *
   * @public
   */
  StatusSummaries?: StatusSummary[] | undefined;

  /**
   * The configuration definitions association with the configuration manager.
   *
   * @public
   */
  ConfigurationDefinitions?: ConfigurationDefinition[] | undefined;

  /**
   * Key-value pairs of metadata to assign to the configuration manager.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Settings configured for Quick Setup.
 *
 * @public
 */
export interface ServiceSettings {
  /**
   * The IAM role used to enable Explorer.
   *
   * @public
   */
  ExplorerEnablingRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsOutput {
  /**
   * Returns details about the settings for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.
   *
   * @public
   */
  ServiceSettings?: ServiceSettings | undefined;
}

/**
 * @public
 */
export interface ListConfigurationManagersInput {
  /**
   * The token to use when requesting a specific set of items from a list.
   *
   * @public
   */
  StartingToken?: string | undefined;

  /**
   * Specifies the maximum number of configuration managers that are returned by the request.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Filters the results returned by the request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationManagersOutput {
  /**
   * The configuration managers returned by the request.
   *
   * @public
   */
  ConfigurationManagersList?: ConfigurationManagerSummary[] | undefined;

  /**
   * The token to use when requesting the next set of configuration managers. If there are no additional operations to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsInput {
  /**
   * The token to use when requesting a specific set of items from a list.
   *
   * @public
   */
  StartingToken?: string | undefined;

  /**
   * Specifies the maximum number of configurations that are returned by the request.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Filters the results returned by the request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The ARN of the configuration manager.
   *
   * @public
   */
  ManagerArn?: string | undefined;

  /**
   * The ID of the configuration definition.
   *
   * @public
   */
  ConfigurationDefinitionId?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsOutput {
  /**
   * An array of configurations.
   *
   * @public
   */
  ConfigurationsList?: ConfigurationSummary[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the Quick Setup type.
 *
 * @public
 */
export interface QuickSetupTypeOutput {
  /**
   * The type of the Quick Setup configuration.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The latest version number of the configuration.
   *
   * @public
   */
  LatestVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickSetupTypesOutput {
  /**
   * An array of Quick Setup types.
   *
   * @public
   */
  QuickSetupTypeList?: QuickSetupTypeOutput[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource the tag is assigned to.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Key-value pairs of metadata.
 *
 * @public
 */
export interface TagEntry {
  /**
   * The key for the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Key-value pairs of metadata assigned to the resource.
   *
   * @public
   */
  Tags?: TagEntry[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Key-value pairs of metadata to assign to the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationDefinitionInput {
  /**
   * The ARN of the configuration manager associated with the definition to update.
   *
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * The ID of the configuration definition you want to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the Quick Setup type to use.
   *
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * The parameters for the configuration definition type.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The name of the IAM role used to deploy local configurations.
   *
   * @public
   */
  LocalDeploymentExecutionRoleName?: string | undefined;

  /**
   * The ARN of the IAM role used to administrate local configuration deployments.
   *
   * @public
   */
  LocalDeploymentAdministrationRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationManagerInput {
  /**
   * The ARN of the configuration manager.
   *
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * A name for the configuration manager.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the configuration manager.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSettingsInput {
  /**
   * The IAM role used to enable Explorer.
   *
   * @public
   */
  ExplorerEnablingRoleArn?: string | undefined;
}
