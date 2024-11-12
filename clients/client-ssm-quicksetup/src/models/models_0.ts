// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SSMQuickSetupServiceException as __BaseException } from "./SSMQuickSetupServiceException";

/**
 * <p>The requester has insufficient permissions to perform the operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The definition of a Quick Setup configuration.</p>
 * @public
 */
export interface ConfigurationDefinition {
  /**
   * <p>The type of the Quick Setup configuration.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>A list of key-value pairs containing the required parameters for the configuration
   *                   type.</p>
   * @public
   */
  Parameters: Record<string, string> | undefined;

  /**
   * <p>The version of the Quick Setup type used.</p>
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * <p>The name of the IAM role used to deploy local
   *                   configurations.</p>
   * @public
   */
  LocalDeploymentExecutionRoleName?: string | undefined;

  /**
   * <p>The ARN of the IAM role used to administrate local configuration
   *                   deployments.</p>
   * @public
   */
  LocalDeploymentAdministrationRoleArn?: string | undefined;

  /**
   * <p>The ID of the configuration definition.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Defines the preferences and options for a configuration definition.</p>
 * @public
 */
export interface ConfigurationDefinitionInput {
  /**
   * <p>The type of the Quick Setup configuration.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The parameters for the configuration definition type. Parameters for configuration
   *                   definitions vary based the configuration type. The following tables outline the
   *                   parameters for each configuration type.</p>
   *          <dl>
   *             <dt>OpsCenter (Type: Amazon Web ServicesQuickSetupType-SSMOpsCenter)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>DelegatedAccountId</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The ID of the
   *                                                   delegated administrator account.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Resource Scheduler (Type: Amazon Web ServicesQuickSetupType-Scheduler)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagKey</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The tag key assigned
   *                                                   to the instances you want to target.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagValue</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The value of the tag
   *                                                   key assigned to the instances you want to
   *                                                   target.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ICalendarString</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) An iCalendar
   *                                                   formatted string containing the schedule you want
   *                                                   Change Manager to use.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Default Host Management Configuration (Type: Amazon Web ServicesQuickSetupType-DHMC)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>UpdateSSMAgent</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the SSM Agent is updated on the
   *                                                   target instances every 2 weeks. The default value
   *                                                   is "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Resource Explorer (Type: Amazon Web ServicesQuickSetupType-ResourceExplorer)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>SelectedAggregatorRegion</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The Amazon Web Services Region where you want to create the
   *                                                   aggregator index.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ReplaceExistingAggregator</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A boolean value that
   *                                                   determines whether to demote an existing
   *                                                   aggregator if it is in a Region that differs from
   *                                                   the value you specify for the
   *                                                   <code>SelectedAggregatorRegion</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Change Manager (Type: Amazon Web ServicesQuickSetupType-SSMChangeMgr)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>DelegatedAccountId</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The ID of the
   *                                                   delegated administrator account.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>JobFunction</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The name for the
   *                                                   Change Manager job function.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>PermissionType</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Specifies whether
   *                                                   you want to use default administrator permissions
   *                                                   for the job function role, or provide a custom
   *                                                   IAM policy. The valid values are
   *                                                   <code>CustomPermissions</code> and
   *                                                   <code>AdminPermissions</code>. The default value
   *                                                   for the parameter is
   *                                                   <code>CustomerPermissions</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CustomPermissions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A JSON string
   *                                                   containing the IAM policy you want
   *                                                   your job function to use. You must provide a value
   *                                                   for this parameter if you specify
   *                                                   <code>CustomPermissions</code> for the
   *                                                   <code>PermissionType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>DevOps Guru (Type: Amazon Web ServicesQuickSetupType-DevOpsGuru)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AnalyseAllResources</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether DevOps Guru analyzes all
   *                                                   CloudFormation stacks in the account. The
   *                                                   default value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EnableSnsNotifications</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether DevOps Guru sends
   *                                                   notifications when an insight is created. The
   *                                                   default value is "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EnableSsmOpsItems</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether DevOps Guru creates an
   *                                                   OpsCenter OpsItem when an insight is created. The
   *                                                   default value is "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EnableDriftRemediation</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether a drift remediation schedule is
   *                                                   used. The default value is
   *                                                   "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RemediationSchedule</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A rate expression
   *                                                   that defines the schedule for drift remediation.
   *                                                   The valid values are <code>rate(30 days)</code>,
   *                                                   <code>rate(14 days)</code>, <code>rate(1
   *                                                   days)</code>, and <code>none</code>. The default
   *                                                   value is "<code>none</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Conformance Packs (Type: Amazon Web ServicesQuickSetupType-CFGCPacks)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>DelegatedAccountId</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   delegated administrator account. This parameter is
   *                                                   required for Organization deployments.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RemediationSchedule</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A rate expression
   *                                                   that defines the schedule for drift remediation.
   *                                                   The valid values are <code>rate(30 days)</code>,
   *                                                   <code>rate(14 days)</code>, <code>rate(2
   *                                                   days)</code>, and <code>none</code>. The default
   *                                                   value is "<code>none</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CPackNames</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Config conformance
   *                                                   packs.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the root
   *                                                   of your Organization. This configuration type
   *                                                   doesn't currently support choosing specific OUs.
   *                                                   The configuration will be deployed to all the OUs
   *                                                   in the Organization.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Config Recording (Type: Amazon Web ServicesQuickSetupType-CFGRecording)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordAllResources</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether all supported resources are
   *                                                   recorded. The default value is
   *                                                   "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ResourceTypesToRecord</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of resource types you want to record.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RecordGlobalResourceTypes</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether global resources are recorded
   *                                                   with all resource configurations. The default
   *                                                   value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>GlobalResourceTypesRegion</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Determines the
   *                                                   Amazon Web Services Region where global resources
   *                                                   are recorded.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>UseCustomBucket</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether a custom Amazon S3
   *                                                   bucket is used for delivery. The default value is
   *                                                   "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DeliveryBucketName</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The name of the
   *                                                   Amazon S3 bucket you want Config to deliver configuration snapshots and
   *                                                   configuration history files to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DeliveryBucketPrefix</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The key prefix you
   *                                                   want to use in the custom Amazon S3
   *                                                   bucket.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NotificationOptions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Determines the
   *                                                   notification configuration for the recorder. The
   *                                                   valid values are <code>NoStreaming</code>,
   *                                                   <code>UseExistingTopic</code>, and
   *                                                   <code>CreateTopic</code>. The default value is
   *                                                   <code>NoStreaming</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CustomDeliveryTopicAccountId</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account where the Amazon SNS topic you want to use for notifications
   *                                                   resides. You must specify a value for this
   *                                                   parameter if you use the
   *                                                   <code>UseExistingTopic</code> notification
   *                                                   option.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CustomDeliveryTopicName</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The name of the
   *                                                   Amazon SNS topic you want to use for
   *                                                   notifications. You must specify a value for this
   *                                                   parameter if you use the
   *                                                   <code>UseExistingTopic</code> notification
   *                                                   option.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RemediationSchedule</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A rate expression
   *                                                   that defines the schedule for drift remediation.
   *                                                   The valid values are <code>rate(30 days)</code>,
   *                                                   <code>rate(7 days)</code>, <code>rate(1
   *                                                   days)</code>, and <code>none</code>. The default
   *                                                   value is "<code>none</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the root
   *                                                   of your Organization. This configuration type
   *                                                   doesn't currently support choosing specific OUs.
   *                                                   The configuration will be deployed to all the OUs
   *                                                   in the Organization.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Host Management (Type: Amazon Web ServicesQuickSetupType-SSMHostMgmt)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>UpdateSSMAgent</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the SSM Agent is updated on the
   *                                                   target instances every 2 weeks. The default value
   *                                                   is "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>UpdateEc2LaunchAgent</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the EC2 Launch agent is updated
   *                                                   on the target instances every month. The default
   *                                                   value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CollectInventory</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the EC2 Launch agent is updated
   *                                                   on the target instances every month. The default
   *                                                   value is "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ScanInstances</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the target instances are
   *                                                   scanned daily for available patches. The default
   *                                                   value is "<code>true</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>InstallCloudWatchAgent</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the Amazon CloudWatch agent
   *                                                   is installed on the target instances. The default
   *                                                   value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>UpdateCloudWatchAgent</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the Amazon CloudWatch agent
   *                                                   is updated on the target instances every month.
   *                                                   The default value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IsPolicyAttachAllowed</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether Quick Setup attaches policies
   *                                                   to instances profiles already associated with the
   *                                                   target instances. The default value is
   *                                                   "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetType</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Determines how
   *                                                   instances are targeted for local account
   *                                                   deployments. Don't specify a value for this
   *                                                   parameter if you're deploying to OUs. The valid
   *                                                   values are <code>*</code>,
   *                                                   <code>InstanceIds</code>,
   *                                                   <code>ResourceGroups</code>, and
   *                                                   <code>Tags</code>. Use <code>*</code> to target
   *                                                   all instances in the account.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetInstances</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of instance IDs. You must provide a value for
   *                                                   this parameter if you specify
   *                                                   <code>InstanceIds</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagKey</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The tag key assigned
   *                                                   to the instances you want to target. You must
   *                                                   provide a value for this parameter if you specify
   *                                                   <code>Tags</code> for the <code>TargetType</code>
   *                                                   parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagValue</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The value of the tag
   *                                                   key assigned to the instances you want to target.
   *                                                   You must provide a value for this parameter if you
   *                                                   specify <code>Tags</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ResourceGroupName</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The name of the
   *                                                   resource group associated with the instances you
   *                                                   want to target. You must provide a value for this
   *                                                   parameter if you specify
   *                                                   <code>ResourceGroups</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Distributor (Type: Amazon Web ServicesQuickSetupType-Distributor)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PackagesToInstall</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of packages you want to install on the target
   *                                                   instances. The valid values are
   *                                                   <code>AWSEFSTools</code>, <code>AWSCWAgent</code>,
   *                                                   and <code>AWSEC2LaunchAgent</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RemediationSchedule</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A rate expression
   *                                                   that defines the schedule for drift remediation.
   *                                                   The valid values are <code>rate(30 days)</code>,
   *                                                   <code>rate(14 days)</code>, <code>rate(2
   *                                                   days)</code>, and <code>none</code>. The default
   *                                                   value is "<code>rate(30 days)</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IsPolicyAttachAllowed</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether Quick Setup attaches policies
   *                                                   to instances profiles already associated with the
   *                                                   target instances. The default value is
   *                                                   "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetType</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Determines how
   *                                                   instances are targeted for local account
   *                                                   deployments. Don't specify a value for this
   *                                                   parameter if you're deploying to OUs. The valid
   *                                                   values are <code>*</code>,
   *                                                   <code>InstanceIds</code>,
   *                                                   <code>ResourceGroups</code>, and
   *                                                   <code>Tags</code>. Use <code>*</code> to target
   *                                                   all instances in the account.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetInstances</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of instance IDs. You must provide a value for
   *                                                   this parameter if you specify
   *                                                   <code>InstanceIds</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagKey</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The tag key assigned
   *                                                   to the instances you want to target. You must
   *                                                   provide a value for this parameter if you specify
   *                                                   <code>Tags</code> for the <code>TargetType</code>
   *                                                   parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagValue</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The value of the tag
   *                                                   key assigned to the instances you want to target.
   *                                                   You must provide a value for this parameter if you
   *                                                   specify <code>Tags</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ResourceGroupName</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The name of the
   *                                                   resource group associated with the instances you
   *                                                   want to target. You must provide a value for this
   *                                                   parameter if you specify
   *                                                   <code>ResourceGroups</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Patch Policy (Type: Amazon Web ServicesQuickSetupType-PatchPolicy)</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PatchPolicyName</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A name for the patch
   *                                                   policy. The value you provide is applied to target
   *                                                   Amazon EC2 instances as a tag.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>SelectedPatchBaselines</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) An array of JSON
   *                                                   objects containing the information for the patch
   *                                                   baselines to include in your patch policy.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>PatchBaselineUseDefault</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether the selected patch baselines
   *                                                   are all Amazon Web Services provided.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ConfigurationOptionsPatchOperation</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Determines whether
   *                                                   target instances scan for available patches, or
   *                                                   scan and install available patches. The valid
   *                                                   values are <code>Scan</code> and
   *                                                   <code>ScanAndInstall</code>. The default value for
   *                                                   the parameter is <code>Scan</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ConfigurationOptionsScanValue</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A cron expression
   *                                                   that is used as the schedule for when instances
   *                                                   scan for available patches.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ConfigurationOptionsInstallValue</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A cron expression
   *                                                   that is used as the schedule for when instances
   *                                                   install available patches.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ConfigurationOptionsScanNextInterval</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether instances should scan for
   *                                                   available patches at the next cron interval. The
   *                                                   default value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ConfigurationOptionsInstallNextInterval</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether instances should scan for
   *                                                   available patches at the next cron interval. The
   *                                                   default value is "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RebootOption</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether instances are rebooted after
   *                                                   patches are installed. The default value is
   *                                                   "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IsPolicyAttachAllowed</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether Quick Setup attaches policies
   *                                                   to instances profiles already associated with the
   *                                                   target instances. The default value is
   *                                                   "<code>false</code>".</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>OutputLogEnableS3</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A boolean value that
   *                                                   determines whether command output logs are sent to
   *                                                   Amazon S3.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>OutputS3Location</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A JSON string
   *                                                   containing information about the Amazon S3
   *                                                   bucket where you want to store the output details
   *                                                   of the request.</p>
   *                            <ul>
   *                               <li>
   *                                  <p>
   *                                     <code>OutputS3BucketRegion</code>
   *                                  </p>
   *                                  <ul>
   *                                     <li>
   *                                        <p>Description: (Optional) The Amazon Web Services Region where the Amazon S3
   *                                                   bucket you want Config to deliver
   *                                                   command output to is located.</p>
   *                                     </li>
   *                                  </ul>
   *                               </li>
   *                               <li>
   *                                  <p>
   *                                     <code>OutputS3BucketName</code>
   *                                  </p>
   *                                  <ul>
   *                                     <li>
   *                                        <p>Description: (Optional) The name of the
   *                                                   Amazon S3 bucket you want Config to deliver command output to.</p>
   *                                     </li>
   *                                  </ul>
   *                               </li>
   *                               <li>
   *                                  <p>
   *                                     <code>OutputS3KeyPrefix</code>
   *                                  </p>
   *                                  <ul>
   *                                     <li>
   *                                        <p>Description: (Optional) The key prefix you
   *                                                   want to use in the custom Amazon S3
   *                                                   bucket.</p>
   *                                     </li>
   *                                  </ul>
   *                               </li>
   *                            </ul>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetType</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) Determines how
   *                                                   instances are targeted for local account
   *                                                   deployments. Don't specify a value for this
   *                                                   parameter if you're deploying to OUs. The valid
   *                                                   values are <code>*</code>,
   *                                                   <code>InstanceIds</code>,
   *                                                   <code>ResourceGroups</code>, and
   *                                                   <code>Tags</code>. Use <code>*</code> to target
   *                                                   all instances in the account.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetInstances</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of instance IDs. You must provide a value for
   *                                                   this parameter if you specify
   *                                                   <code>InstanceIds</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagKey</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The tag key assigned
   *                                                   to the instances you want to target. You must
   *                                                   provide a value for this parameter if you specify
   *                                                   <code>Tags</code> for the <code>TargetType</code>
   *                                                   parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetTagValue</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The value of the tag
   *                                                   key assigned to the instances you want to target.
   *                                                   You must provide a value for this parameter if you
   *                                                   specify <code>Tags</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ResourceGroupName</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) The name of the
   *                                                   resource group associated with the instances you
   *                                                   want to target. You must provide a value for this
   *                                                   parameter if you specify
   *                                                   <code>ResourceGroups</code> for the
   *                                                   <code>TargetType</code> parameter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetAccounts</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) The ID of the
   *                                                   Amazon Web Services account initiating the
   *                                                   configuration deployment. You only need to provide
   *                                                   a value for this parameter if you want to deploy
   *                                                   the configuration locally. A value must be
   *                                                   provided for either <code>TargetAccounts</code> or
   *                                                   <code>TargetOrganizationalUnits</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetOrganizationalUnits</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Optional) A comma separated
   *                                                   list of organizational units (OUs) you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TargetRegions</code>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Description: (Required) A comma separated
   *                                                   list of Amazon Web Services Regions you want to
   *                                                   deploy the configuration to.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   * @public
   */
  Parameters: Record<string, string> | undefined;

  /**
   * <p>The version of the Quick Setup type to use.</p>
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * <p>The name of the IAM role used to deploy local
   *                   configurations.</p>
   * @public
   */
  LocalDeploymentExecutionRoleName?: string | undefined;

  /**
   * <p>The ARN of the IAM role used to administrate local configuration
   *                   deployments.</p>
   * @public
   */
  LocalDeploymentAdministrationRoleArn?: string | undefined;
}

/**
 * <p>A summarized definition of a Quick Setup configuration definition.</p>
 * @public
 */
export interface ConfigurationDefinitionSummary {
  /**
   * <p>The ID of the configuration definition.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the Quick Setup configuration used by the configuration
   *                   definition.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The version of the Quick Setup type used by the configuration definition.</p>
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * <p>The common parameters and values for the configuration definition.</p>
   * @public
   */
  FirstClassParameters?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DEPLOYING: "DEPLOYING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  NONE: "NONE",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const StatusType = {
  ASYNC_EXECUTIONS: "AsyncExecutions",
  DEPLOYMENT: "Deployment",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * <p>A summarized description of the status.</p>
 * @public
 */
export interface StatusSummary {
  /**
   * <p>The type of a status summary.</p>
   * @public
   */
  StatusType: StatusType | undefined;

  /**
   * <p>The current status.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>When applicable, returns an informational message relevant to the current status and status type of the status summary object. We don't recommend implementing parsing logic around this value since the messages returned can vary in format.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The datetime stamp when the status was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>Details about the status.</p>
   * @public
   */
  StatusDetails?: Record<string, string> | undefined;
}

/**
 * <p>A summary of a Quick Setup configuration manager.</p>
 * @public
 */
export interface ConfigurationManagerSummary {
  /**
   * <p>The ARN of the Quick Setup configuration.</p>
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the configuration</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Summaries of the state of the configuration manager. These summaries include an
   *                   aggregate of the statuses from the configuration definition associated with the
   *                   configuration manager. This includes deployment statuses, association statuses,
   *                   drift statuses, health checks, and more.</p>
   * @public
   */
  StatusSummaries?: StatusSummary[] | undefined;

  /**
   * <p>A summary of the Quick Setup configuration definition.</p>
   * @public
   */
  ConfigurationDefinitionSummaries?: ConfigurationDefinitionSummary[] | undefined;
}

/**
 * <p>Another request is being processed. Wait a few minutes and try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
}

/**
 * @public
 */
export interface CreateConfigurationManagerInput {
  /**
   * <p>A name for the configuration manager.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the configuration manager.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The definition of the Quick Setup configuration that the configuration manager
   *                   deploys.</p>
   * @public
   */
  ConfigurationDefinitions: ConfigurationDefinitionInput[] | undefined;

  /**
   * <p>Key-value pairs of metadata to assign to the configuration manager.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationManagerOutput {
  /**
   * <p>The ARN for the newly created configuration manager.</p>
   * @public
   */
  ManagerArn: string | undefined;
}

/**
 * <p>An error occurred on the server side.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request or operation exceeds the maximum allowed request rate per Amazon Web Services account and Amazon Web Services Region.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request is invalid. Verify the values provided for the request parameters are
 *                   accurate.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
export interface DeleteConfigurationManagerInput {
  /**
   * <p>The ID of the configuration manager.</p>
   * @public
   */
  ManagerArn: string | undefined;
}

/**
 * <p>The resource couldn't be found. Check the ID or name and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
}

/**
 * <p>A key-value pair to filter results.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The key for the filter.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The values for the filter keys.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface GetConfigurationManagerInput {
  /**
   * <p>The ARN of the configuration manager.</p>
   * @public
   */
  ManagerArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationManagerOutput {
  /**
   * <p>The ARN of the configuration manager.</p>
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * <p>The description of the configuration manager.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the configuration manager.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The datetime stamp when the configuration manager was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The datetime stamp when the configuration manager was last updated.</p>
   * @public
   */
  LastModifiedAt?: Date | undefined;

  /**
   * <p>A summary of the state of the configuration manager. This includes deployment
   *                   statuses, association statuses, drift statuses, health checks, and more.</p>
   * @public
   */
  StatusSummaries?: StatusSummary[] | undefined;

  /**
   * <p>The configuration definitions association with the configuration manager.</p>
   * @public
   */
  ConfigurationDefinitions?: ConfigurationDefinition[] | undefined;

  /**
   * <p>Key-value pairs of metadata to assign to the configuration manager.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Settings configured for Quick Setup.</p>
 * @public
 */
export interface ServiceSettings {
  /**
   * <p>The IAM role used to enable Explorer.</p>
   * @public
   */
  ExplorerEnablingRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsOutput {
  /**
   * <p>Returns details about the settings for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.</p>
   * @public
   */
  ServiceSettings?: ServiceSettings | undefined;
}

/**
 * @public
 */
export interface ListConfigurationManagersInput {
  /**
   * <p>The token to use when requesting a specific set of items from a list.</p>
   * @public
   */
  StartingToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of configuration managers that are returned by the
   *                   request.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Filters the results returned by the request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationManagersOutput {
  /**
   * <p>The configuration managers returned by the request.</p>
   * @public
   */
  ConfigurationManagersList?: ConfigurationManagerSummary[] | undefined;

  /**
   * <p>The token to use when requesting the next set of configuration managers. If there
   *                   are no additional operations to return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the Quick Setup type.</p>
 * @public
 */
export interface QuickSetupTypeOutput {
  /**
   * <p>The type of the Quick Setup configuration.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The latest version number of the configuration.</p>
   * @public
   */
  LatestVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickSetupTypesOutput {
  /**
   * <p>An array of Quick Setup types.</p>
   * @public
   */
  QuickSetupTypeList?: QuickSetupTypeOutput[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource the tag is assigned to.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>Key-value pairs of metadata.</p>
 * @public
 */
export interface TagEntry {
  /**
   * <p>The key for the tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Key-value pairs of metadata assigned to the resource.</p>
   * @public
   */
  Tags?: TagEntry[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Key-value pairs of metadata to assign to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationDefinitionInput {
  /**
   * <p>The ARN of the configuration manager associated with the definition to
   *                   update.</p>
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * <p>The ID of the configuration definition you want to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the Quick Setup type to use.</p>
   * @public
   */
  TypeVersion?: string | undefined;

  /**
   * <p>The parameters for the configuration definition type.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The name of the IAM role used to deploy local
   *                   configurations.</p>
   * @public
   */
  LocalDeploymentExecutionRoleName?: string | undefined;

  /**
   * <p>The ARN of the IAM role used to administrate local configuration
   *                   deployments.</p>
   * @public
   */
  LocalDeploymentAdministrationRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationManagerInput {
  /**
   * <p>The ARN of the configuration manager.</p>
   * @public
   */
  ManagerArn: string | undefined;

  /**
   * <p>A name for the configuration manager.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the configuration manager.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSettingsInput {
  /**
   * <p>The IAM role used to enable Explorer.</p>
   * @public
   */
  ExplorerEnablingRoleArn?: string | undefined;
}

/**
 * @internal
 */
export const CreateConfigurationManagerInputFilterSensitiveLog = (obj: CreateConfigurationManagerInput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetConfigurationManagerOutputFilterSensitiveLog = (obj: GetConfigurationManagerOutput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagEntryFilterSensitiveLog = (obj: TagEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});
