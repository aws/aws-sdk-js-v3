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
import { DeleteElasticsearchDomainRequest, DeleteElasticsearchDomainResponse } from "../models/models_0";
import { de_DeleteElasticsearchDomainCommand, se_DeleteElasticsearchDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteElasticsearchDomainCommand}.
 */
export interface DeleteElasticsearchDomainCommandInput extends DeleteElasticsearchDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeleteElasticsearchDomainCommand}.
 */
export interface DeleteElasticsearchDomainCommandOutput extends DeleteElasticsearchDomainResponse, __MetadataBearer {}

/**
 * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DeleteElasticsearchDomainRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * // { // DeleteElasticsearchDomainResponse
 * //   DomainStatus: { // ElasticsearchDomainStatus
 * //     DomainId: "STRING_VALUE", // required
 * //     DomainName: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Created: true || false,
 * //     Deleted: true || false,
 * //     Endpoint: "STRING_VALUE",
 * //     Endpoints: { // EndpointsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Processing: true || false,
 * //     UpgradeProcessing: true || false,
 * //     ElasticsearchVersion: "STRING_VALUE",
 * //     ElasticsearchClusterConfig: { // ElasticsearchClusterConfig
 * //       InstanceType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 * //       InstanceCount: Number("int"),
 * //       DedicatedMasterEnabled: true || false,
 * //       ZoneAwarenessEnabled: true || false,
 * //       ZoneAwarenessConfig: { // ZoneAwarenessConfig
 * //         AvailabilityZoneCount: Number("int"),
 * //       },
 * //       DedicatedMasterType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 * //       DedicatedMasterCount: Number("int"),
 * //       WarmEnabled: true || false,
 * //       WarmType: "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch",
 * //       WarmCount: Number("int"),
 * //       ColdStorageOptions: { // ColdStorageOptions
 * //         Enabled: true || false, // required
 * //       },
 * //     },
 * //     EBSOptions: { // EBSOptions
 * //       EBSEnabled: true || false,
 * //       VolumeType: "standard" || "gp2" || "io1" || "gp3",
 * //       VolumeSize: Number("int"),
 * //       Iops: Number("int"),
 * //       Throughput: Number("int"),
 * //     },
 * //     AccessPolicies: "STRING_VALUE",
 * //     SnapshotOptions: { // SnapshotOptions
 * //       AutomatedSnapshotStartHour: Number("int"),
 * //     },
 * //     VPCOptions: { // VPCDerivedInfo
 * //       VPCId: "STRING_VALUE",
 * //       SubnetIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CognitoOptions: { // CognitoOptions
 * //       Enabled: true || false,
 * //       UserPoolId: "STRING_VALUE",
 * //       IdentityPoolId: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //     EncryptionAtRestOptions: { // EncryptionAtRestOptions
 * //       Enabled: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     NodeToNodeEncryptionOptions: { // NodeToNodeEncryptionOptions
 * //       Enabled: true || false,
 * //     },
 * //     AdvancedOptions: { // AdvancedOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LogPublishingOptions: { // LogPublishingOptions
 * //       "<keys>": { // LogPublishingOption
 * //         CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //         Enabled: true || false,
 * //       },
 * //     },
 * //     ServiceSoftwareOptions: { // ServiceSoftwareOptions
 * //       CurrentVersion: "STRING_VALUE",
 * //       NewVersion: "STRING_VALUE",
 * //       UpdateAvailable: true || false,
 * //       Cancellable: true || false,
 * //       UpdateStatus: "PENDING_UPDATE" || "IN_PROGRESS" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //       Description: "STRING_VALUE",
 * //       AutomatedUpdateDate: new Date("TIMESTAMP"),
 * //       OptionalDeployment: true || false,
 * //     },
 * //     DomainEndpointOptions: { // DomainEndpointOptions
 * //       EnforceHTTPS: true || false,
 * //       TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07" || "Policy-Min-TLS-1-2-PFS-2023-10",
 * //       CustomEndpointEnabled: true || false,
 * //       CustomEndpoint: "STRING_VALUE",
 * //       CustomEndpointCertificateArn: "STRING_VALUE",
 * //     },
 * //     AdvancedSecurityOptions: { // AdvancedSecurityOptions
 * //       Enabled: true || false,
 * //       InternalUserDatabaseEnabled: true || false,
 * //       SAMLOptions: { // SAMLOptionsOutput
 * //         Enabled: true || false,
 * //         Idp: { // SAMLIdp
 * //           MetadataContent: "STRING_VALUE", // required
 * //           EntityId: "STRING_VALUE", // required
 * //         },
 * //         SubjectKey: "STRING_VALUE",
 * //         RolesKey: "STRING_VALUE",
 * //         SessionTimeoutMinutes: Number("int"),
 * //       },
 * //       AnonymousAuthDisableDate: new Date("TIMESTAMP"),
 * //       AnonymousAuthEnabled: true || false,
 * //     },
 * //     AutoTuneOptions: { // AutoTuneOptionsOutput
 * //       State: "ENABLED" || "DISABLED" || "ENABLE_IN_PROGRESS" || "DISABLE_IN_PROGRESS" || "DISABLED_AND_ROLLBACK_SCHEDULED" || "DISABLED_AND_ROLLBACK_IN_PROGRESS" || "DISABLED_AND_ROLLBACK_COMPLETE" || "DISABLED_AND_ROLLBACK_ERROR" || "ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     ChangeProgressDetails: { // ChangeProgressDetails
 * //       ChangeId: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       ConfigChangeStatus: "Pending" || "Initializing" || "Validating" || "ValidationFailed" || "ApplyingChanges" || "Completed" || "PendingUserInput" || "Cancelled",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       InitiatedBy: "CUSTOMER" || "SERVICE",
 * //     },
 * //     DomainProcessingStatus: "Creating" || "Active" || "Modifying" || "UpgradingEngineVersion" || "UpdatingServiceSoftware" || "Isolated" || "Deleting",
 * //     ModifyingProperties: [ // ModifyingPropertiesList
 * //       { // ModifyingProperties
 * //         Name: "STRING_VALUE",
 * //         ActiveValue: "STRING_VALUE",
 * //         PendingValue: "STRING_VALUE",
 * //         ValueType: "PLAIN_TEXT" || "STRINGIFIED_JSON",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteElasticsearchDomainCommandInput - {@link DeleteElasticsearchDomainCommandInput}
 * @returns {@link DeleteElasticsearchDomainCommandOutput}
 * @see {@link DeleteElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
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
export class DeleteElasticsearchDomainCommand extends $Command
  .classBuilder<
    DeleteElasticsearchDomainCommandInput,
    DeleteElasticsearchDomainCommandOutput,
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
  .s("AmazonElasticsearchService2015", "DeleteElasticsearchDomain", {})
  .n("ElasticsearchServiceClient", "DeleteElasticsearchDomainCommand")
  .f(void 0, void 0)
  .ser(se_DeleteElasticsearchDomainCommand)
  .de(de_DeleteElasticsearchDomainCommand)
  .build() {}
