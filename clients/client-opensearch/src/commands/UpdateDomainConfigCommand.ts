// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDomainConfigRequest,
  UpdateDomainConfigRequestFilterSensitiveLog,
  UpdateDomainConfigResponse,
} from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_UpdateDomainConfigCommand, se_UpdateDomainConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainConfigCommand}.
 */
export interface UpdateDomainConfigCommandInput extends UpdateDomainConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainConfigCommand}.
 */
export interface UpdateDomainConfigCommandOutput extends UpdateDomainConfigResponse, __MetadataBearer {}

/**
 * <p>Modifies the cluster configuration of the specified Amazon OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdateDomainConfigCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdateDomainConfigCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // UpdateDomainConfigRequest
 *   DomainName: "STRING_VALUE", // required
 *   ClusterConfig: { // ClusterConfig
 *     InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 *     InstanceCount: Number("int"),
 *     DedicatedMasterEnabled: true || false,
 *     ZoneAwarenessEnabled: true || false,
 *     ZoneAwarenessConfig: { // ZoneAwarenessConfig
 *       AvailabilityZoneCount: Number("int"),
 *     },
 *     DedicatedMasterType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 *     DedicatedMasterCount: Number("int"),
 *     WarmEnabled: true || false,
 *     WarmType: "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search",
 *     WarmCount: Number("int"),
 *     ColdStorageOptions: { // ColdStorageOptions
 *       Enabled: true || false, // required
 *     },
 *     MultiAZWithStandbyEnabled: true || false,
 *     NodeOptions: [ // NodeOptionsList
 *       { // NodeOption
 *         NodeType: "coordinator",
 *         NodeConfig: { // NodeConfig
 *           Enabled: true || false,
 *           Type: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 *           Count: Number("int"),
 *         },
 *       },
 *     ],
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
 *   IPAddressType: "ipv4" || "dualstack",
 *   LogPublishingOptions: { // LogPublishingOptions
 *     "<keys>": { // LogPublishingOption
 *       CloudWatchLogsLogGroupArn: "STRING_VALUE",
 *       Enabled: true || false,
 *     },
 *   },
 *   EncryptionAtRestOptions: { // EncryptionAtRestOptions
 *     Enabled: true || false,
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   DomainEndpointOptions: { // DomainEndpointOptions
 *     EnforceHTTPS: true || false,
 *     TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07" || "Policy-Min-TLS-1-2-PFS-2023-10",
 *     CustomEndpointEnabled: true || false,
 *     CustomEndpoint: "STRING_VALUE",
 *     CustomEndpointCertificateArn: "STRING_VALUE",
 *   },
 *   NodeToNodeEncryptionOptions: { // NodeToNodeEncryptionOptions
 *     Enabled: true || false,
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
 *     JWTOptions: { // JWTOptionsInput
 *       Enabled: true || false,
 *       SubjectKey: "STRING_VALUE",
 *       RolesKey: "STRING_VALUE",
 *       PublicKey: "STRING_VALUE",
 *     },
 *     AnonymousAuthEnabled: true || false,
 *   },
 *   IdentityCenterOptions: { // IdentityCenterOptionsInput
 *     EnabledAPIAccess: true || false,
 *     IdentityCenterInstanceARN: "STRING_VALUE",
 *     SubjectKey: "UserName" || "UserId" || "Email",
 *     RolesKey: "GroupName" || "GroupId",
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
 *     UseOffPeakWindow: true || false,
 *   },
 *   DryRun: true || false,
 *   DryRunMode: "Basic" || "Verbose",
 *   OffPeakWindowOptions: { // OffPeakWindowOptions
 *     Enabled: true || false,
 *     OffPeakWindow: { // OffPeakWindow
 *       WindowStartTime: { // WindowStartTime
 *         Hours: Number("long"), // required
 *         Minutes: Number("long"), // required
 *       },
 *     },
 *   },
 *   SoftwareUpdateOptions: { // SoftwareUpdateOptions
 *     AutoSoftwareUpdateEnabled: true || false,
 *   },
 *   AIMLOptions: { // AIMLOptionsInput
 *     NaturalLanguageQueryGenerationOptions: { // NaturalLanguageQueryGenerationOptionsInput
 *       DesiredState: "ENABLED" || "DISABLED",
 *     },
 *     S3VectorsEngine: { // S3VectorsEngine
 *       Enabled: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateDomainConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainConfigResponse
 * //   DomainConfig: { // DomainConfig
 * //     EngineVersion: { // VersionStatus
 * //       Options: "STRING_VALUE", // required
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //     ClusterConfig: { // ClusterConfigStatus
 * //       Options: { // ClusterConfig
 * //         InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //         InstanceCount: Number("int"),
 * //         DedicatedMasterEnabled: true || false,
 * //         ZoneAwarenessEnabled: true || false,
 * //         ZoneAwarenessConfig: { // ZoneAwarenessConfig
 * //           AvailabilityZoneCount: Number("int"),
 * //         },
 * //         DedicatedMasterType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //         DedicatedMasterCount: Number("int"),
 * //         WarmEnabled: true || false,
 * //         WarmType: "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search",
 * //         WarmCount: Number("int"),
 * //         ColdStorageOptions: { // ColdStorageOptions
 * //           Enabled: true || false, // required
 * //         },
 * //         MultiAZWithStandbyEnabled: true || false,
 * //         NodeOptions: [ // NodeOptionsList
 * //           { // NodeOption
 * //             NodeType: "coordinator",
 * //             NodeConfig: { // NodeConfig
 * //               Enabled: true || false,
 * //               Type: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //               Count: Number("int"),
 * //             },
 * //           },
 * //         ],
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
 * //     IPAddressType: { // IPAddressTypeStatus
 * //       Options: "ipv4" || "dualstack", // required
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
 * //       Status: "<OptionStatus>", // required
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
 * //         JWTOptions: { // JWTOptionsOutput
 * //           Enabled: true || false,
 * //           SubjectKey: "STRING_VALUE",
 * //           RolesKey: "STRING_VALUE",
 * //           PublicKey: "STRING_VALUE",
 * //         },
 * //         AnonymousAuthDisableDate: new Date("TIMESTAMP"),
 * //         AnonymousAuthEnabled: true || false,
 * //       },
 * //       Status: "<OptionStatus>", // required
 * //     },
 * //     IdentityCenterOptions: { // IdentityCenterOptionsStatus
 * //       Options: { // IdentityCenterOptions
 * //         EnabledAPIAccess: true || false,
 * //         IdentityCenterInstanceARN: "STRING_VALUE",
 * //         SubjectKey: "UserName" || "UserId" || "Email",
 * //         RolesKey: "GroupName" || "GroupId",
 * //         IdentityCenterApplicationARN: "STRING_VALUE",
 * //         IdentityStoreId: "STRING_VALUE",
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
 * //         UseOffPeakWindow: true || false,
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
 * //       InitiatedBy: "CUSTOMER" || "SERVICE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //     OffPeakWindowOptions: { // OffPeakWindowOptionsStatus
 * //       Options: { // OffPeakWindowOptions
 * //         Enabled: true || false,
 * //         OffPeakWindow: { // OffPeakWindow
 * //           WindowStartTime: { // WindowStartTime
 * //             Hours: Number("long"), // required
 * //             Minutes: Number("long"), // required
 * //           },
 * //         },
 * //       },
 * //       Status: "<OptionStatus>",
 * //     },
 * //     SoftwareUpdateOptions: { // SoftwareUpdateOptionsStatus
 * //       Options: { // SoftwareUpdateOptions
 * //         AutoSoftwareUpdateEnabled: true || false,
 * //       },
 * //       Status: "<OptionStatus>",
 * //     },
 * //     ModifyingProperties: [ // ModifyingPropertiesList
 * //       { // ModifyingProperties
 * //         Name: "STRING_VALUE",
 * //         ActiveValue: "STRING_VALUE",
 * //         PendingValue: "STRING_VALUE",
 * //         ValueType: "PLAIN_TEXT" || "STRINGIFIED_JSON",
 * //       },
 * //     ],
 * //     AIMLOptions: { // AIMLOptionsStatus
 * //       Options: { // AIMLOptionsOutput
 * //         NaturalLanguageQueryGenerationOptions: { // NaturalLanguageQueryGenerationOptionsOutput
 * //           DesiredState: "ENABLED" || "DISABLED",
 * //           CurrentState: "NOT_ENABLED" || "ENABLE_COMPLETE" || "ENABLE_IN_PROGRESS" || "ENABLE_FAILED" || "DISABLE_COMPLETE" || "DISABLE_IN_PROGRESS" || "DISABLE_FAILED",
 * //         },
 * //         S3VectorsEngine: { // S3VectorsEngine
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       Status: "<OptionStatus>",
 * //     },
 * //   },
 * //   DryRunResults: { // DryRunResults
 * //     DeploymentType: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   DryRunProgressStatus: { // DryRunProgressStatus
 * //     DryRunId: "STRING_VALUE", // required
 * //     DryRunStatus: "STRING_VALUE", // required
 * //     CreationDate: "STRING_VALUE", // required
 * //     UpdateDate: "STRING_VALUE", // required
 * //     ValidationFailures: [ // ValidationFailures
 * //       { // ValidationFailure
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainConfigCommandInput - {@link UpdateDomainConfigCommandInput}
 * @returns {@link UpdateDomainConfigCommandOutput}
 * @see {@link UpdateDomainConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>An exception for trying to create or access a sub-resource that's either invalid or not supported.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class UpdateDomainConfigCommand extends $Command
  .classBuilder<
    UpdateDomainConfigCommandInput,
    UpdateDomainConfigCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "UpdateDomainConfig", {})
  .n("OpenSearchClient", "UpdateDomainConfigCommand")
  .f(UpdateDomainConfigRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateDomainConfigCommand)
  .de(de_UpdateDomainConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainConfigRequest;
      output: UpdateDomainConfigResponse;
    };
    sdk: {
      input: UpdateDomainConfigCommandInput;
      output: UpdateDomainConfigCommandOutput;
    };
  };
}
