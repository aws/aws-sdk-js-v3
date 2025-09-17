// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeObservabilityConfigurationRequest,
  DescribeObservabilityConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeObservabilityConfigurationCommand,
  se_DescribeObservabilityConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeObservabilityConfigurationCommand}.
 */
export interface DescribeObservabilityConfigurationCommandInput extends DescribeObservabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeObservabilityConfigurationCommand}.
 */
export interface DescribeObservabilityConfigurationCommandOutput
  extends DescribeObservabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Return a full description of an App Runner observability configuration resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeObservabilityConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeObservabilityConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeObservabilityConfigurationRequest
 *   ObservabilityConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeObservabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeObservabilityConfigurationResponse
 * //   ObservabilityConfiguration: { // ObservabilityConfiguration
 * //     ObservabilityConfigurationArn: "STRING_VALUE",
 * //     ObservabilityConfigurationName: "STRING_VALUE",
 * //     TraceConfiguration: { // TraceConfiguration
 * //       Vendor: "AWSXRAY", // required
 * //     },
 * //     ObservabilityConfigurationRevision: Number("int"),
 * //     Latest: true || false,
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeObservabilityConfigurationCommandInput - {@link DescribeObservabilityConfigurationCommandInput}
 * @returns {@link DescribeObservabilityConfigurationCommandOutput}
 * @see {@link DescribeObservabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeObservabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class DescribeObservabilityConfigurationCommand extends $Command
  .classBuilder<
    DescribeObservabilityConfigurationCommandInput,
    DescribeObservabilityConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "DescribeObservabilityConfiguration", {})
  .n("AppRunnerClient", "DescribeObservabilityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeObservabilityConfigurationCommand)
  .de(de_DescribeObservabilityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeObservabilityConfigurationRequest;
      output: DescribeObservabilityConfigurationResponse;
    };
    sdk: {
      input: DescribeObservabilityConfigurationCommandInput;
      output: DescribeObservabilityConfigurationCommandOutput;
    };
  };
}
