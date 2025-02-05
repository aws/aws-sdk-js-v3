// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  ReplicationConfiguration,
  ReplicationConfigurationFilterSensitiveLog,
  UpdateReplicationConfigurationRequest,
  UpdateReplicationConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateReplicationConfigurationCommand,
  se_UpdateReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Allows you to update multiple ReplicationConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MgnClient(config);
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
 *   useFipsEndpoint: true || false,
 *   accountID: "STRING_VALUE",
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
 * //   useFipsEndpoint: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateReplicationConfigurationCommandInput - {@link UpdateReplicationConfigurationCommandInput}
 * @returns {@link UpdateReplicationConfigurationCommandOutput}
 * @see {@link UpdateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class UpdateReplicationConfigurationCommand extends $Command
  .classBuilder<
    UpdateReplicationConfigurationCommandInput,
    UpdateReplicationConfigurationCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "UpdateReplicationConfiguration", {})
  .n("MgnClient", "UpdateReplicationConfigurationCommand")
  .f(UpdateReplicationConfigurationRequestFilterSensitiveLog, ReplicationConfigurationFilterSensitiveLog)
  .ser(se_UpdateReplicationConfigurationCommand)
  .de(de_UpdateReplicationConfigurationCommand)
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
