// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeRemediationConfigurationsRequest,
  DescribeRemediationConfigurationsResponse,
} from "../models/models_0";
import { DescribeRemediationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRemediationConfigurationsCommand}.
 */
export interface DescribeRemediationConfigurationsCommandInput extends DescribeRemediationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRemediationConfigurationsCommand}.
 */
export interface DescribeRemediationConfigurationsCommandOutput extends DescribeRemediationConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns the details of one or more remediation configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeRemediationConfigurationsRequest
 *   ConfigRuleNames: [ // ConfigRuleNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRemediationConfigurationsResponse
 * //   RemediationConfigurations: [ // RemediationConfigurations
 * //     { // RemediationConfiguration
 * //       ConfigRuleName: "STRING_VALUE", // required
 * //       TargetType: "SSM_DOCUMENT", // required
 * //       TargetId: "STRING_VALUE", // required
 * //       TargetVersion: "STRING_VALUE",
 * //       Parameters: { // RemediationParameters
 * //         "<keys>": { // RemediationParameterValue
 * //           ResourceValue: { // ResourceValue
 * //             Value: "RESOURCE_ID", // required
 * //           },
 * //           StaticValue: { // StaticValue
 * //             Values: [ // StaticParameterValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       ResourceType: "STRING_VALUE",
 * //       Automatic: true || false,
 * //       ExecutionControls: { // ExecutionControls
 * //         SsmControls: { // SsmControls
 * //           ConcurrentExecutionRatePercentage: Number("int"),
 * //           ErrorPercentage: Number("int"),
 * //         },
 * //       },
 * //       MaximumAutomaticAttempts: Number("int"),
 * //       RetryAttemptSeconds: Number("long"),
 * //       Arn: "STRING_VALUE",
 * //       CreatedByService: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRemediationConfigurationsCommandInput - {@link DescribeRemediationConfigurationsCommandInput}
 * @returns {@link DescribeRemediationConfigurationsCommandOutput}
 * @see {@link DescribeRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeRemediationConfigurationsCommand extends $Command
  .classBuilder<
    DescribeRemediationConfigurationsCommandInput,
    DescribeRemediationConfigurationsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeRemediationConfigurations", {})
  .n("ConfigServiceClient", "DescribeRemediationConfigurationsCommand")
  .sc(DescribeRemediationConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRemediationConfigurationsRequest;
      output: DescribeRemediationConfigurationsResponse;
    };
    sdk: {
      input: DescribeRemediationConfigurationsCommandInput;
      output: DescribeRemediationConfigurationsCommandOutput;
    };
  };
}
