// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutBlockPublicAccessConfigurationInput, PutBlockPublicAccessConfigurationOutput } from "../models/models_0";
import {
  de_PutBlockPublicAccessConfigurationCommand,
  se_PutBlockPublicAccessConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBlockPublicAccessConfigurationCommand}.
 */
export interface PutBlockPublicAccessConfigurationCommandInput extends PutBlockPublicAccessConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutBlockPublicAccessConfigurationCommand}.
 */
export interface PutBlockPublicAccessConfigurationCommandOutput
  extends PutBlockPublicAccessConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Creates or updates an Amazon EMR block public access configuration for your
 *             Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR
 *             Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // PutBlockPublicAccessConfigurationInput
 *   BlockPublicAccessConfiguration: { // BlockPublicAccessConfiguration
 *     BlockPublicSecurityGroupRules: true || false, // required
 *     PermittedPublicSecurityGroupRuleRanges: [ // PortRanges
 *       { // PortRange
 *         MinRange: Number("int"), // required
 *         MaxRange: Number("int"),
 *       },
 *     ],
 *     Classification: "STRING_VALUE",
 *     Configurations: [ // ConfigurationList
 *       { // Configuration
 *         Classification: "STRING_VALUE",
 *         Configurations: [
 *           {
 *             Classification: "STRING_VALUE",
 *             Configurations: "<ConfigurationList>",
 *             Properties: { // StringMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         Properties: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     Properties: "<StringMap>",
 *   },
 * };
 * const command = new PutBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBlockPublicAccessConfigurationCommandInput - {@link PutBlockPublicAccessConfigurationCommandInput}
 * @returns {@link PutBlockPublicAccessConfigurationCommandOutput}
 * @see {@link PutBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class PutBlockPublicAccessConfigurationCommand extends $Command
  .classBuilder<
    PutBlockPublicAccessConfigurationCommandInput,
    PutBlockPublicAccessConfigurationCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "PutBlockPublicAccessConfiguration", {})
  .n("EMRClient", "PutBlockPublicAccessConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutBlockPublicAccessConfigurationCommand)
  .de(de_PutBlockPublicAccessConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBlockPublicAccessConfigurationInput;
      output: {};
    };
    sdk: {
      input: PutBlockPublicAccessConfigurationCommandInput;
      output: PutBlockPublicAccessConfigurationCommandOutput;
    };
  };
}
