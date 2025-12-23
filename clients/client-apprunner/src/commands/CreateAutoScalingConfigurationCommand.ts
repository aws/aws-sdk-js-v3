// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAutoScalingConfigurationRequest, CreateAutoScalingConfigurationResponse } from "../models/models_0";
import { CreateAutoScalingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutoScalingConfigurationCommand}.
 */
export interface CreateAutoScalingConfigurationCommandInput extends CreateAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutoScalingConfigurationCommand}.
 */
export interface CreateAutoScalingConfigurationCommandOutput extends CreateAutoScalingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require
 *       non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p>
 *          <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call
 *       returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource,
 *       the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific
 *       revision.</p>
 *          <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The
 *       tradeoff is a higher minimal cost.</p>
 *          <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // CreateAutoScalingConfigurationRequest
 *   AutoScalingConfigurationName: "STRING_VALUE", // required
 *   MaxConcurrency: Number("int"),
 *   MinSize: Number("int"),
 *   MaxSize: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutoScalingConfigurationResponse
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
 * @param CreateAutoScalingConfigurationCommandInput - {@link CreateAutoScalingConfigurationCommandInput}
 * @returns {@link CreateAutoScalingConfigurationCommandOutput}
 * @see {@link CreateAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>App Runner can't create this resource. You've reached your account quota for this resource type.</p>
 *          <p>For App Runner per-resource quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the
 *         <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class CreateAutoScalingConfigurationCommand extends $Command
  .classBuilder<
    CreateAutoScalingConfigurationCommandInput,
    CreateAutoScalingConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "CreateAutoScalingConfiguration", {})
  .n("AppRunnerClient", "CreateAutoScalingConfigurationCommand")
  .sc(CreateAutoScalingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutoScalingConfigurationRequest;
      output: CreateAutoScalingConfigurationResponse;
    };
    sdk: {
      input: CreateAutoScalingConfigurationCommandInput;
      output: CreateAutoScalingConfigurationCommandOutput;
    };
  };
}
