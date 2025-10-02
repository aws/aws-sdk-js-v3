// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLoggingConfigurationRequest, CreateLoggingConfigurationResponse } from "../models/models_0";
import { de_CreateLoggingConfigurationCommand, se_CreateLoggingConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoggingConfigurationCommand}.
 */
export interface CreateLoggingConfigurationCommandInput extends CreateLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateLoggingConfigurationCommand}.
 */
export interface CreateLoggingConfigurationCommandOutput extends CreateLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateLoggingConfiguration</code> operation creates rules and alerting logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to.</p> <note> <p>These logging configurations are only for rules and alerting logs.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // CreateLoggingConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 *   logGroupArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoggingConfigurationResponse
 * //   status: { // LoggingConfigurationStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLoggingConfigurationCommandInput - {@link CreateLoggingConfigurationCommandInput}
 * @returns {@link CreateLoggingConfigurationCommandOutput}
 * @see {@link CreateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class CreateLoggingConfigurationCommand extends $Command
  .classBuilder<
    CreateLoggingConfigurationCommandInput,
    CreateLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "CreateLoggingConfiguration", {})
  .n("AmpClient", "CreateLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateLoggingConfigurationCommand)
  .de(de_CreateLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLoggingConfigurationRequest;
      output: CreateLoggingConfigurationResponse;
    };
    sdk: {
      input: CreateLoggingConfigurationCommandInput;
      output: CreateLoggingConfigurationCommandOutput;
    };
  };
}
