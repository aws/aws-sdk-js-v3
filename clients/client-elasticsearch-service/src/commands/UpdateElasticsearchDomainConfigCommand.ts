// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateElasticsearchDomainConfigRequest,
  UpdateElasticsearchDomainConfigRequestFilterSensitiveLog,
  UpdateElasticsearchDomainConfigResponse,
} from "../models/models_0";
import {
  de_UpdateElasticsearchDomainConfigCommand,
  se_UpdateElasticsearchDomainConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateElasticsearchDomainConfigCommand}.
 */
export interface UpdateElasticsearchDomainConfigCommandInput extends UpdateElasticsearchDomainConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateElasticsearchDomainConfigCommand}.
 */
export interface UpdateElasticsearchDomainConfigCommandOutput
  extends UpdateElasticsearchDomainConfigResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpdateElasticsearchDomainConfigCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpdateElasticsearchDomainConfigCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // UpdateElasticsearchDomainConfigRequest
 *   DomainName: "STRING_VALUE", // required
 *   ElasticsearchClusterConfig: { // ElasticsearchClusterConfig
 *     InstanceType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 *     InstanceCount: Number("int"),
 *     DedicatedMasterEnabled: true || false,
 *     ZoneAwarenessEnabled: true || false,
 *     ZoneAwarenessConfig: { // ZoneAwarenessConfig
 *       AvailabilityZoneCount: Number("int"),
 *     },
 *     DedicatedMasterType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 *     DedicatedMasterCount: Number("int"),
 *     WarmEnabled: true || false,
 *     WarmType: "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch",
 *     WarmCount: Number("int"),
 *     ColdStorageOptions: { // ColdStorageOptions
 *       Enabled: true || false, // required
 *     },
 *   },
 *   EBSOptions: { // EBSOptions
 *     EBSEnabled: true || false,
 *     VolumeType: "standard" || "gp2" || "io1" || "gp3",
 *     VolumeSize: Number("int"),
 *     Iops: Number("int"),
 *     Throughput: Number("int"),
 *   },
 *   SnapshotOptions: { // SnapshotOptions
 *     AutomatedSnapshotStartHour: Number("int"),
 *   },
 *   VPCOptions: { // VPCOptions
 *     SubnetIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CognitoOptions: { // CognitoOptions
 *     Enabled: true || false,
 *     UserPoolId: "STRING_VALUE",
 *     IdentityPoolId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *   },
 *   AdvancedOptions: { // AdvancedOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AccessPolicies: "STRING_VALUE",
 *   LogPublishingOptions: { // LogPublishingOptions
 *     "<keys>": { // LogPublishingOption
 *       CloudWatchLogsLogGroupArn: "STRING_VALUE",
 *       Enabled: true || false,
 *     },
 *   },
 *   DomainEndpointOptions: { // DomainEndpointOptions
 *     EnforceHTTPS: true || false,
 *     TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07" || "Policy-Min-TLS-1-2-PFS-2023-10",
 *     CustomEndpointEnabled: true || false,
 *     CustomEndpoint: "STRING_VALUE",
 *     CustomEndpointCertificateArn: "STRING_VALUE",
 *   },
 *   AdvancedSecurityOptions: { // AdvancedSecurityOptionsInput
 *     Enabled: true || false,
 *     InternalUserDatabaseEnabled: true || false,
 *     MasterUserOptions: { // MasterUserOptions
 *       MasterUserARN: "STRING_VALUE",
 *       MasterUserName: "STRING_VALUE",
 *       MasterUserPassword: "STRING_VALUE",
 *     },
 *     SAMLOptions: { // SAMLOptionsInput
 *       Enabled: true || false,
 *       Idp: { // SAMLIdp
 *         MetadataContent: "STRING_VALUE", // required
 *         EntityId: "STRING_VALUE", // required
 *       },
 *       MasterUserName: "STRING_VALUE",
 *       MasterBackendRole: "STRING_VALUE",
 *       SubjectKey: "STRING_VALUE",
 *       RolesKey: "STRING_VALUE",
 *       SessionTimeoutMinutes: Number("int"),
 *     },
 *     AnonymousAuthEnabled: true || false,
 *   },
 *   NodeToNodeEncryptionOptions: { // NodeToNodeEncryptionOptions
 *     Enabled: true || false,
 *   },
 *   EncryptionAtRestOptions: { // EncryptionAtRestOptions
 *     Enabled: true || false,
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   AutoTuneOptions: { // AutoTuneOptions
 *     DesiredState: "ENABLED" || "DISABLED",
 *     RollbackOnDisable: "NO_ROLLBACK" || "DEFAULT_ROLLBACK",
 *     MaintenanceSchedules: [ // AutoTuneMaintenanceScheduleList
 *       { // AutoTuneMaintenanceSchedule
 *         StartAt: new Date("TIMESTAMP"),
 *         Duration: { // Duration
 *           Value: Number("long"),
 *           Unit: "HOURS",
 *         },
 *         CronExpressionForRecurrence: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   DryRun: true || false,
 * };
 * const command = new UpdateElasticsearchDomainConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateElasticsearchDomainConfigResponse
 * //   DomainConfig: { // ElasticsearchDomainConfig
 * //     ElasticsearchVersion: { // ElasticsearchVersionStatus
 * //       Options: "STRING_VALUE", // required
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     ElasticsearchClusterConfig: { // ElasticsearchClusterConfigStatus
 * //       Options: { // ElasticsearchClusterConfig
 * //         InstanceType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 * //         InstanceCount: Number("int"),
 * //         DedicatedMasterEnabled: true || false,
 * //         ZoneAwarenessEnabled: true || false,
 * //         ZoneAwarenessConfig: { // ZoneAwarenessConfig
 * //           AvailabilityZoneCount: Number("int"),
 * //         },
 * //         DedicatedMasterType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 * //         DedicatedMasterCount: Number("int"),
 * //         WarmEnabled: true || false,
 * //         WarmType: "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch",
 * //         WarmCount: Number("int"),
 * //         ColdStorageOptions: { // ColdStorageOptions
 * //           Enabled: true || false, // required
 * //         },
 * //       },
 * //       Status: {
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     EBSOptions: { // EBSOptionsStatus
 * //       Options: { // EBSOptions
 * //         EBSEnabled: true || false,
 * //         VolumeType: "standard" || "gp2" || "io1" || "gp3",
 * //         VolumeSize: Number("int"),
 * //         Iops: Number("int"),
 * //         Throughput: Number("int"),
 * //       },
 * //       Status: {
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     AccessPolicies: { // AccessPoliciesStatus
 * //       Options: "STRING_VALUE", // required
 * //       Status: {
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     SnapshotOptions: { // SnapshotOptionsStatus
 * //       Options: { // SnapshotOptions
 * //         AutomatedSnapshotStartHour: Number("int"),
 * //       },
 * //       Status: {
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     VPCOptions: { // VPCDerivedInfoStatus
 * //       Options: { // VPCDerivedInfo
 * //         VPCId: "STRING_VALUE",
 * //         SubnetIds: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         AvailabilityZones: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     CognitoOptions: { // CognitoOptionsStatus
 * //       Options: { // CognitoOptions
 * //         Enabled: true || false,
 * //         UserPoolId: "STRING_VALUE",
 * //         IdentityPoolId: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     EncryptionAtRestOptions: { // EncryptionAtRestOptionsStatus
 * //       Options: { // EncryptionAtRestOptions
 * //         Enabled: true || false,
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     NodeToNodeEncryptionOptions: { // NodeToNodeEncryptionOptionsStatus
 * //       Options: { // NodeToNodeEncryptionOptions
 * //         Enabled: true || false,
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     AdvancedOptions: { // AdvancedOptionsStatus
 * //       Options: { // AdvancedOptions // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     LogPublishingOptions: { // LogPublishingOptionsStatus
 * //       Options: { // LogPublishingOptions
 * //         "<keys>": { // LogPublishingOption
 * //           CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       Status: "<OptionStatus>",
 * //     },
 * //     DomainEndpointOptions: { // DomainEndpointOptionsStatus
 * //       Options: { // DomainEndpointOptions
 * //         EnforceHTTPS: true || false,
 * //         TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07" || "Policy-Min-TLS-1-2-PFS-2023-10",
 * //         CustomEndpointEnabled: true || false,
 * //         CustomEndpoint: "STRING_VALUE",
 * //         CustomEndpointCertificateArn: "STRING_VALUE",
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     AdvancedSecurityOptions: { // AdvancedSecurityOptionsStatus
 * //       Options: { // AdvancedSecurityOptions
 * //         Enabled: true || false,
 * //         InternalUserDatabaseEnabled: true || false,
 * //         SAMLOptions: { // SAMLOptionsOutput
 * //           Enabled: true || false,
 * //           Idp: { // SAMLIdp
 * //             MetadataContent: "STRING_VALUE", // required
 * //             EntityId: "STRING_VALUE", // required
 * //           },
 * //           SubjectKey: "STRING_VALUE",
 * //           RolesKey: "STRING_VALUE",
 * //           SessionTimeoutMinutes: Number("int"),
 * //         },
 * //         AnonymousAuthDisableDate: new Date("TIMESTAMP"),
 * //         AnonymousAuthEnabled: true || false,
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     AutoTuneOptions: { // AutoTuneOptionsStatus
 * //       Options: { // AutoTuneOptions
 * //         DesiredState: "ENABLED" || "DISABLED",
 * //         RollbackOnDisable: "NO_ROLLBACK" || "DEFAULT_ROLLBACK",
 * //         MaintenanceSchedules: [ // AutoTuneMaintenanceScheduleList
 * //           { // AutoTuneMaintenanceSchedule
 * //             StartAt: new Date("TIMESTAMP"),
 * //             Duration: { // Duration
 * //               Value: Number("long"),
 * //               Unit: "HOURS",
 * //             },
 * //             CronExpressionForRecurrence: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Status: { // AutoTuneStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "ENABLED" || "DISABLED" || "ENABLE_IN_PROGRESS" || "DISABLE_IN_PROGRESS" || "DISABLED_AND_ROLLBACK_SCHEDULED" || "DISABLED_AND_ROLLBACK_IN_PROGRESS" || "DISABLED_AND_ROLLBACK_COMPLETE" || "DISABLED_AND_ROLLBACK_ERROR" || "ERROR", // required
 * //         ErrorMessage: "STRING_VALUE",
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     ChangeProgressDetails: { // ChangeProgressDetails
 * //       ChangeId: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       ConfigChangeStatus: "Pending" || "Initializing" || "Validating" || "ValidationFailed" || "ApplyingChanges" || "Completed" || "PendingUserInput" || "Cancelled",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       InitiatedBy: "CUSTOMER" || "SERVICE",
 * //     },
 * //     ModifyingProperties: [ // ModifyingPropertiesList
 * //       { // ModifyingProperties
 * //         Name: "STRING_VALUE",
 * //         ActiveValue: "STRING_VALUE",
 * //         PendingValue: "STRING_VALUE",
 * //         ValueType: "PLAIN_TEXT" || "STRINGIFIED_JSON",
 * //       },
 * //     ],
 * //   },
 * //   DryRunResults: { // DryRunResults
 * //     DeploymentType: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateElasticsearchDomainConfigCommandInput - {@link UpdateElasticsearchDomainConfigCommandInput}
 * @returns {@link UpdateElasticsearchDomainConfigCommandOutput}
 * @see {@link UpdateElasticsearchDomainConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateElasticsearchDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 * @public
 */
export class UpdateElasticsearchDomainConfigCommand extends $Command
  .classBuilder<
    UpdateElasticsearchDomainConfigCommandInput,
    UpdateElasticsearchDomainConfigCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "UpdateElasticsearchDomainConfig", {})
  .n("ElasticsearchServiceClient", "UpdateElasticsearchDomainConfigCommand")
  .f(UpdateElasticsearchDomainConfigRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateElasticsearchDomainConfigCommand)
  .de(de_UpdateElasticsearchDomainConfigCommand)
  .build() {}
