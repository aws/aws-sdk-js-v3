// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  CreateReplicationConfigurationTemplateRequest,
  CreateReplicationConfigurationTemplateRequestFilterSensitiveLog,
  ReplicationConfigurationTemplate,
  ReplicationConfigurationTemplateFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateReplicationConfigurationTemplateCommand,
  se_CreateReplicationConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationConfigurationTemplateCommand}.
 */
export interface CreateReplicationConfigurationTemplateCommandInput
  extends CreateReplicationConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicationConfigurationTemplateCommand}.
 */
export interface CreateReplicationConfigurationTemplateCommandOutput
  extends ReplicationConfigurationTemplate,
    __MetadataBearer {}

/**
 * <p>Creates a new ReplicationConfigurationTemplate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MgnClient(config);
 * const input = { // CreateReplicationConfigurationTemplateRequest
 *   stagingAreaSubnetId: "STRING_VALUE", // required
 *   associateDefaultSecurityGroup: true || false, // required
 *   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs // required
 *     "STRING_VALUE",
 *   ],
 *   replicationServerInstanceType: "STRING_VALUE", // required
 *   useDedicatedReplicationServer: true || false, // required
 *   defaultLargeStagingDiskType: "STRING_VALUE", // required
 *   ebsEncryption: "STRING_VALUE", // required
 *   ebsEncryptionKeyArn: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"), // required
 *   dataPlaneRouting: "STRING_VALUE", // required
 *   createPublicIP: true || false, // required
 *   stagingAreaTags: { // TagsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   useFipsEndpoint: true || false,
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateReplicationConfigurationTemplateCommand(input);
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
 * @param CreateReplicationConfigurationTemplateCommandInput - {@link CreateReplicationConfigurationTemplateCommandInput}
 * @returns {@link CreateReplicationConfigurationTemplateCommandOutput}
 * @see {@link CreateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
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
export class CreateReplicationConfigurationTemplateCommand extends $Command
  .classBuilder<
    CreateReplicationConfigurationTemplateCommandInput,
    CreateReplicationConfigurationTemplateCommandOutput,
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
  .s("ApplicationMigrationService", "CreateReplicationConfigurationTemplate", {})
  .n("MgnClient", "CreateReplicationConfigurationTemplateCommand")
  .f(
    CreateReplicationConfigurationTemplateRequestFilterSensitiveLog,
    ReplicationConfigurationTemplateFilterSensitiveLog
  )
  .ser(se_CreateReplicationConfigurationTemplateCommand)
  .de(de_CreateReplicationConfigurationTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationConfigurationTemplateRequest;
      output: ReplicationConfigurationTemplate;
    };
    sdk: {
      input: CreateReplicationConfigurationTemplateCommandInput;
      output: CreateReplicationConfigurationTemplateCommandOutput;
    };
  };
}
