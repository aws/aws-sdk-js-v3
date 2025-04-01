// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesResponse,
  DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeReplicationConfigurationTemplatesCommand,
  se_DescribeReplicationConfigurationTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationConfigurationTemplatesCommand}.
 */
export interface DescribeReplicationConfigurationTemplatesCommandInput
  extends DescribeReplicationConfigurationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationConfigurationTemplatesCommand}.
 */
export interface DescribeReplicationConfigurationTemplatesCommandOutput
  extends DescribeReplicationConfigurationTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeReplicationConfigurationTemplatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeReplicationConfigurationTemplatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeReplicationConfigurationTemplatesRequest
 *   replicationConfigurationTemplateIDs: [ // ReplicationConfigurationTemplateIDs
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationConfigurationTemplatesResponse
 * //   items: [ // ReplicationConfigurationTemplates
 * //     { // ReplicationConfigurationTemplate
 * //       replicationConfigurationTemplateID: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       stagingAreaSubnetId: "STRING_VALUE",
 * //       associateDefaultSecurityGroup: true || false,
 * //       replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //         "STRING_VALUE",
 * //       ],
 * //       replicationServerInstanceType: "STRING_VALUE",
 * //       useDedicatedReplicationServer: true || false,
 * //       defaultLargeStagingDiskType: "STRING_VALUE",
 * //       ebsEncryption: "STRING_VALUE",
 * //       ebsEncryptionKeyArn: "STRING_VALUE",
 * //       bandwidthThrottling: Number("long"),
 * //       dataPlaneRouting: "STRING_VALUE",
 * //       createPublicIP: true || false,
 * //       stagingAreaTags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       useFipsEndpoint: true || false,
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReplicationConfigurationTemplatesCommandInput - {@link DescribeReplicationConfigurationTemplatesCommandInput}
 * @returns {@link DescribeReplicationConfigurationTemplatesCommandOutput}
 * @see {@link DescribeReplicationConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
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
export class DescribeReplicationConfigurationTemplatesCommand extends $Command
  .classBuilder<
    DescribeReplicationConfigurationTemplatesCommandInput,
    DescribeReplicationConfigurationTemplatesCommandOutput,
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
  .s("ApplicationMigrationService", "DescribeReplicationConfigurationTemplates", {})
  .n("MgnClient", "DescribeReplicationConfigurationTemplatesCommand")
  .f(void 0, DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog)
  .ser(se_DescribeReplicationConfigurationTemplatesCommand)
  .de(de_DescribeReplicationConfigurationTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationConfigurationTemplatesRequest;
      output: DescribeReplicationConfigurationTemplatesResponse;
    };
    sdk: {
      input: DescribeReplicationConfigurationTemplatesCommandInput;
      output: DescribeReplicationConfigurationTemplatesCommandOutput;
    };
  };
}
