// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeRetentionConfigurationsRequest,
  DescribeRetentionConfigurationsResponse,
} from "../models/models_0";
import { DescribeRetentionConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRetentionConfigurationsCommand}.
 */
export interface DescribeRetentionConfigurationsCommandInput extends DescribeRetentionConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRetentionConfigurationsCommand}.
 */
export interface DescribeRetentionConfigurationsCommandOutput extends DescribeRetentionConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns the details of one or more retention configurations. If
 * 			the retention configuration name is not specified, this operation
 * 			returns the details for all the retention configurations for that
 * 			account.</p>
 *          <note>
 *             <p>Currently, Config supports only one retention
 * 				configuration per region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRetentionConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRetentionConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeRetentionConfigurationsRequest
 *   RetentionConfigurationNames: [ // RetentionConfigurationNameList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRetentionConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRetentionConfigurationsResponse
 * //   RetentionConfigurations: [ // RetentionConfigurationList
 * //     { // RetentionConfiguration
 * //       Name: "STRING_VALUE", // required
 * //       RetentionPeriodInDays: Number("int"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRetentionConfigurationsCommandInput - {@link DescribeRetentionConfigurationsCommandInput}
 * @returns {@link DescribeRetentionConfigurationsCommandOutput}
 * @see {@link DescribeRetentionConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRetentionConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchRetentionConfigurationException} (client fault)
 *  <p>You have specified a retention configuration that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeRetentionConfigurationsCommand extends $Command
  .classBuilder<
    DescribeRetentionConfigurationsCommandInput,
    DescribeRetentionConfigurationsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeRetentionConfigurations", {})
  .n("ConfigServiceClient", "DescribeRetentionConfigurationsCommand")
  .sc(DescribeRetentionConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRetentionConfigurationsRequest;
      output: DescribeRetentionConfigurationsResponse;
    };
    sdk: {
      input: DescribeRetentionConfigurationsCommandInput;
      output: DescribeRetentionConfigurationsCommandOutput;
    };
  };
}
