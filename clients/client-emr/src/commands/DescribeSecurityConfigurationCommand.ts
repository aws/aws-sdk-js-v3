// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/models_0";
import {
  de_DescribeSecurityConfigurationCommand,
  se_DescribeSecurityConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandInput extends DescribeSecurityConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandOutput
  extends DescribeSecurityConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Provides the details of a security configuration by returning the configuration
 *          JSON.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // DescribeSecurityConfigurationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityConfigurationOutput
 * //   Name: "STRING_VALUE",
 * //   SecurityConfiguration: "STRING_VALUE",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeSecurityConfigurationCommandInput - {@link DescribeSecurityConfigurationCommandInput}
 * @returns {@link DescribeSecurityConfigurationCommandOutput}
 * @see {@link DescribeSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeSecurityConfigurationCommand extends $Command
  .classBuilder<
    DescribeSecurityConfigurationCommandInput,
    DescribeSecurityConfigurationCommandOutput,
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
  .s("ElasticMapReduce", "DescribeSecurityConfiguration", {})
  .n("EMRClient", "DescribeSecurityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityConfigurationCommand)
  .de(de_DescribeSecurityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityConfigurationInput;
      output: DescribeSecurityConfigurationOutput;
    };
    sdk: {
      input: DescribeSecurityConfigurationCommandInput;
      output: DescribeSecurityConfigurationCommandOutput;
    };
  };
}
