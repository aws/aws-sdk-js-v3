// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { GetReplicationConfigurationRequest, ReplicationConfiguration } from "../models/models_0";
import { GetReplicationConfiguration } from "../schemas/schemas_0";

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
 * <p>Lists all ReplicationConfigurations, filtered by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // GetReplicationConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
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
 * @param GetReplicationConfigurationCommandInput - {@link GetReplicationConfigurationCommandInput}
 * @returns {@link GetReplicationConfigurationCommandOutput}
 * @see {@link GetReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class GetReplicationConfigurationCommand extends $Command
  .classBuilder<
    GetReplicationConfigurationCommandInput,
    GetReplicationConfigurationCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "GetReplicationConfiguration", {})
  .n("MgnClient", "GetReplicationConfigurationCommand")
  .sc(GetReplicationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReplicationConfigurationRequest;
      output: ReplicationConfiguration;
    };
    sdk: {
      input: GetReplicationConfigurationCommandInput;
      output: GetReplicationConfigurationCommandOutput;
    };
  };
}
