// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBlockPublicAccessConfigurationInput, GetBlockPublicAccessConfigurationOutput } from "../models/models_0";
import {
  de_GetBlockPublicAccessConfigurationCommand,
  se_GetBlockPublicAccessConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlockPublicAccessConfigurationCommand}.
 */
export interface GetBlockPublicAccessConfigurationCommandInput extends GetBlockPublicAccessConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetBlockPublicAccessConfigurationCommand}.
 */
export interface GetBlockPublicAccessConfigurationCommandOutput
  extends GetBlockPublicAccessConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR
 *             Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = {};
 * const command = new GetBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBlockPublicAccessConfigurationOutput
 * //   BlockPublicAccessConfiguration: { // BlockPublicAccessConfiguration
 * //     BlockPublicSecurityGroupRules: true || false, // required
 * //     PermittedPublicSecurityGroupRuleRanges: [ // PortRanges
 * //       { // PortRange
 * //         MinRange: Number("int"), // required
 * //         MaxRange: Number("int"),
 * //       },
 * //     ],
 * //     Classification: "STRING_VALUE",
 * //     Configurations: [ // ConfigurationList
 * //       { // Configuration
 * //         Classification: "STRING_VALUE",
 * //         Configurations: [
 * //           {
 * //             Classification: "STRING_VALUE",
 * //             Configurations: "<ConfigurationList>",
 * //             Properties: { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         Properties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Properties: "<StringMap>",
 * //   },
 * //   BlockPublicAccessConfigurationMetadata: { // BlockPublicAccessConfigurationMetadata
 * //     CreationDateTime: new Date("TIMESTAMP"), // required
 * //     CreatedByArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlockPublicAccessConfigurationCommandInput - {@link GetBlockPublicAccessConfigurationCommandInput}
 * @returns {@link GetBlockPublicAccessConfigurationCommandOutput}
 * @see {@link GetBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetBlockPublicAccessConfigurationCommand extends $Command
  .classBuilder<
    GetBlockPublicAccessConfigurationCommandInput,
    GetBlockPublicAccessConfigurationCommandOutput,
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
  .s("ElasticMapReduce", "GetBlockPublicAccessConfiguration", {})
  .n("EMRClient", "GetBlockPublicAccessConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetBlockPublicAccessConfigurationCommand)
  .de(de_GetBlockPublicAccessConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetBlockPublicAccessConfigurationOutput;
    };
    sdk: {
      input: GetBlockPublicAccessConfigurationCommandInput;
      output: GetBlockPublicAccessConfigurationCommandOutput;
    };
  };
}
