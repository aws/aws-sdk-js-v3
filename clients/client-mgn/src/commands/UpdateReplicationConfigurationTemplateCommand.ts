// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ReplicationConfigurationTemplate, UpdateReplicationConfigurationTemplateRequest } from "../models/models_0";
import { UpdateReplicationConfigurationTemplate } from "../schemas/schemas_22_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReplicationConfigurationTemplateCommand}.
 */
export interface UpdateReplicationConfigurationTemplateCommandInput
  extends UpdateReplicationConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationConfigurationTemplateCommand}.
 */
export interface UpdateReplicationConfigurationTemplateCommandOutput
  extends ReplicationConfigurationTemplate,
    __MetadataBearer {}

/**
 * <p>Updates multiple ReplicationConfigurationTemplates by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // UpdateReplicationConfigurationTemplateRequest
 *   replicationConfigurationTemplateID: "STRING_VALUE", // required
 *   arn: "STRING_VALUE",
 *   stagingAreaSubnetId: "STRING_VALUE",
 *   associateDefaultSecurityGroup: true || false,
 *   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 *     "STRING_VALUE",
 *   ],
 *   replicationServerInstanceType: "STRING_VALUE",
 *   useDedicatedReplicationServer: true || false,
 *   defaultLargeStagingDiskType: "STRING_VALUE",
 *   ebsEncryption: "STRING_VALUE",
 *   ebsEncryptionKeyArn: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"),
 *   dataPlaneRouting: "STRING_VALUE",
 *   createPublicIP: true || false,
 *   stagingAreaTags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   useFipsEndpoint: true || false,
 * };
 * const command = new UpdateReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationConfigurationTemplate
 * //   replicationConfigurationTemplateID: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * //   stagingAreaSubnetId: "STRING_VALUE",
 * //   associateDefaultSecurityGroup: true || false,
 * //   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //     "STRING_VALUE",
 * //   ],
 * //   replicationServerInstanceType: "STRING_VALUE",
 * //   useDedicatedReplicationServer: true || false,
 * //   defaultLargeStagingDiskType: "STRING_VALUE",
 * //   ebsEncryption: "STRING_VALUE",
 * //   ebsEncryptionKeyArn: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   dataPlaneRouting: "STRING_VALUE",
 * //   createPublicIP: true || false,
 * //   stagingAreaTags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   useFipsEndpoint: true || false,
 * //   tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateReplicationConfigurationTemplateCommandInput - {@link UpdateReplicationConfigurationTemplateCommandInput}
 * @returns {@link UpdateReplicationConfigurationTemplateCommandOutput}
 * @see {@link UpdateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
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
 *
 * @public
 */
export class UpdateReplicationConfigurationTemplateCommand extends $Command
  .classBuilder<
    UpdateReplicationConfigurationTemplateCommandInput,
    UpdateReplicationConfigurationTemplateCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "UpdateReplicationConfigurationTemplate", {})
  .n("MgnClient", "UpdateReplicationConfigurationTemplateCommand")
  .sc(UpdateReplicationConfigurationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReplicationConfigurationTemplateRequest;
      output: ReplicationConfigurationTemplate;
    };
    sdk: {
      input: UpdateReplicationConfigurationTemplateCommandInput;
      output: UpdateReplicationConfigurationTemplateCommandOutput;
    };
  };
}
