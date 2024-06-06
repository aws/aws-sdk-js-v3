// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetReplicationConfigurationRequest,
  ReplicationConfiguration,
  ReplicationConfigurationFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetReplicationConfigurationCommand,
  se_GetReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReplicationConfigurationCommand}.
 */
export interface GetReplicationConfigurationCommandInput extends GetReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetReplicationConfigurationCommand}.
 */
export interface GetReplicationConfigurationCommandOutput extends ReplicationConfiguration, __MetadataBearer {}

/**
 * <p>Gets a ReplicationConfiguration, filtered by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetReplicationConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetReplicationConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // GetReplicationConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new GetReplicationConfigurationCommand(input);
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
 * @param GetReplicationConfigurationCommandInput - {@link GetReplicationConfigurationCommandInput}
 * @returns {@link GetReplicationConfigurationCommandOutput}
 * @see {@link GetReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class GetReplicationConfigurationCommand extends $Command
  .classBuilder<
    GetReplicationConfigurationCommandInput,
    GetReplicationConfigurationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "GetReplicationConfiguration", {})
  .n("DrsClient", "GetReplicationConfigurationCommand")
  .f(void 0, ReplicationConfigurationFilterSensitiveLog)
  .ser(se_GetReplicationConfigurationCommand)
  .de(de_GetReplicationConfigurationCommand)
  .build() {}
