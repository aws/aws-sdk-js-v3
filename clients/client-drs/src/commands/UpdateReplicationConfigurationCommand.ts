// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplicationConfiguration, UpdateReplicationConfigurationRequest } from "../models/models_0";
import { UpdateReplicationConfiguration } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReplicationConfigurationCommand}.
 */
export interface UpdateReplicationConfigurationCommandInput extends UpdateReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationConfigurationCommand}.
 */
export interface UpdateReplicationConfigurationCommandOutput extends ReplicationConfiguration, __MetadataBearer {}

/**
 * <p>Allows you to update a ReplicationConfiguration by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateReplicationConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateReplicationConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateReplicationConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   stagingAreaSubnetId: "STRING_VALUE",
 *   associateDefaultSecurityGroup: true || false,
 *   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 *     "STRING_VALUE",
 *   ],
 *   replicationServerInstanceType: "STRING_VALUE",
 *   useDedicatedReplicationServer: true || false,
 *   defaultLargeStagingDiskType: "STRING_VALUE",
 *   replicatedDisks: [ // ReplicationConfigurationReplicatedDisks
 *     { // ReplicationConfigurationReplicatedDisk
 *       deviceName: "STRING_VALUE",
 *       isBootDisk: true || false,
 *       stagingDiskType: "STRING_VALUE",
 *       iops: Number("long"),
 *       throughput: Number("long"),
 *       optimizedStagingDiskType: "STRING_VALUE",
 *     },
 *   ],
 *   ebsEncryption: "STRING_VALUE",
 *   ebsEncryptionKeyArn: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"),
 *   dataPlaneRouting: "STRING_VALUE",
 *   createPublicIP: true || false,
 *   stagingAreaTags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   pitPolicy: [ // PITPolicy
 *     { // PITPolicyRule
 *       ruleID: Number("long"),
 *       units: "STRING_VALUE", // required
 *       interval: Number("int"), // required
 *       retentionDuration: Number("int"), // required
 *       enabled: true || false,
 *     },
 *   ],
 *   autoReplicateNewDisks: true || false,
 * };
 * const command = new UpdateReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationConfiguration
 * //   sourceServerID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   stagingAreaSubnetId: "STRING_VALUE",
 * //   associateDefaultSecurityGroup: true || false,
 * //   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //     "STRING_VALUE",
 * //   ],
 * //   replicationServerInstanceType: "STRING_VALUE",
 * //   useDedicatedReplicationServer: true || false,
 * //   defaultLargeStagingDiskType: "STRING_VALUE",
 * //   replicatedDisks: [ // ReplicationConfigurationReplicatedDisks
 * //     { // ReplicationConfigurationReplicatedDisk
 * //       deviceName: "STRING_VALUE",
 * //       isBootDisk: true || false,
 * //       stagingDiskType: "STRING_VALUE",
 * //       iops: Number("long"),
 * //       throughput: Number("long"),
 * //       optimizedStagingDiskType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ebsEncryption: "STRING_VALUE",
 * //   ebsEncryptionKeyArn: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   dataPlaneRouting: "STRING_VALUE",
 * //   createPublicIP: true || false,
 * //   stagingAreaTags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   pitPolicy: [ // PITPolicy
 * //     { // PITPolicyRule
 * //       ruleID: Number("long"),
 * //       units: "STRING_VALUE", // required
 * //       interval: Number("int"), // required
 * //       retentionDuration: Number("int"), // required
 * //       enabled: true || false,
 * //     },
 * //   ],
 * //   autoReplicateNewDisks: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateReplicationConfigurationCommandInput - {@link UpdateReplicationConfigurationCommandInput}
 * @returns {@link UpdateReplicationConfigurationCommandOutput}
 * @see {@link UpdateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class UpdateReplicationConfigurationCommand extends $Command
  .classBuilder<
    UpdateReplicationConfigurationCommandInput,
    UpdateReplicationConfigurationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "UpdateReplicationConfiguration", {})
  .n("DrsClient", "UpdateReplicationConfigurationCommand")
  .sc(UpdateReplicationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReplicationConfigurationRequest;
      output: ReplicationConfiguration;
    };
    sdk: {
      input: UpdateReplicationConfigurationCommandInput;
      output: UpdateReplicationConfigurationCommandOutput;
    };
  };
}
