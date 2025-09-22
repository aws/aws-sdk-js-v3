// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAutoScalingConfigurationRequest, DescribeAutoScalingConfigurationResponse } from "../models/models_0";
import { DescribeAutoScalingConfiguration } from "../schemas/schemas_2_Service";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoScalingConfigurationCommand}.
 */
export interface DescribeAutoScalingConfigurationCommandInput extends DescribeAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingConfigurationCommand}.
 */
export interface DescribeAutoScalingConfigurationCommandOutput
  extends DescribeAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Return a full description of an App Runner automatic scaling configuration resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeAutoScalingConfigurationRequest
 *   AutoScalingConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutoScalingConfigurationResponse
 * //   AutoScalingConfiguration: { // AutoScalingConfiguration
 * //     AutoScalingConfigurationArn: "STRING_VALUE",
 * //     AutoScalingConfigurationName: "STRING_VALUE",
 * //     AutoScalingConfigurationRevision: Number("int"),
 * //     Latest: true || false,
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     MaxConcurrency: Number("int"),
 * //     MinSize: Number("int"),
 * //     MaxSize: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //     HasAssociatedService: true || false,
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAutoScalingConfigurationCommandInput - {@link DescribeAutoScalingConfigurationCommandInput}
 * @returns {@link DescribeAutoScalingConfigurationCommandOutput}
 * @see {@link DescribeAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeAutoScalingConfigurationCommand extends $Command
  .classBuilder<
    DescribeAutoScalingConfigurationCommandInput,
    DescribeAutoScalingConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "DescribeAutoScalingConfiguration", {})
  .n("AppRunnerClient", "DescribeAutoScalingConfigurationCommand")
  .sc(DescribeAutoScalingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAutoScalingConfigurationRequest;
      output: DescribeAutoScalingConfigurationResponse;
    };
    sdk: {
      input: DescribeAutoScalingConfigurationCommandInput;
      output: DescribeAutoScalingConfigurationCommandOutput;
    };
  };
}
