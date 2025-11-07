// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateObservabilityConfigurationRequest, CreateObservabilityConfigurationResponse } from "../models/models_0";
import { CreateObservabilityConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateObservabilityConfigurationCommand}.
 */
export interface CreateObservabilityConfigurationCommandInput extends CreateObservabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateObservabilityConfigurationCommand}.
 */
export interface CreateObservabilityConfigurationCommandOutput
  extends CreateObservabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable
 *       non-default observability features. You can share an observability configuration across multiple services.</p>
 *          <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The
 *       call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration
 *       resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a
 *       specific revision.</p>
 *          <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional
 *       parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature
 *       parameter, App Runner doesn't enable the feature.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateObservabilityConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateObservabilityConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // CreateObservabilityConfigurationRequest
 *   ObservabilityConfigurationName: "STRING_VALUE", // required
 *   TraceConfiguration: { // TraceConfiguration
 *     Vendor: "AWSXRAY", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateObservabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateObservabilityConfigurationResponse
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
 * @param CreateObservabilityConfigurationCommandInput - {@link CreateObservabilityConfigurationCommandInput}
 * @returns {@link CreateObservabilityConfigurationCommandOutput}
 * @see {@link CreateObservabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateObservabilityConfigurationCommandOutput} for command's `response` shape.
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
export class CreateObservabilityConfigurationCommand extends $Command
  .classBuilder<
    CreateObservabilityConfigurationCommandInput,
    CreateObservabilityConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "CreateObservabilityConfiguration", {})
  .n("AppRunnerClient", "CreateObservabilityConfigurationCommand")
  .sc(CreateObservabilityConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateObservabilityConfigurationRequest;
      output: CreateObservabilityConfigurationResponse;
    };
    sdk: {
      input: CreateObservabilityConfigurationCommandInput;
      output: CreateObservabilityConfigurationCommandOutput;
    };
  };
}
