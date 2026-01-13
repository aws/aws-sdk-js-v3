// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLoggingConfigurationRequest } from "../models/models_0";
import { DeleteLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoggingConfigurationCommand}.
 */
export interface DeleteLoggingConfigurationCommandInput extends DeleteLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLoggingConfigurationCommand}.
 */
export interface DeleteLoggingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the rules and alerting logging configuration for a workspace.</p> <note> <p>These logging configurations are only for rules and alerting logs.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteLoggingConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoggingConfigurationCommandInput - {@link DeleteLoggingConfigurationCommandInput}
 * @returns {@link DeleteLoggingConfigurationCommandOutput}
 * @see {@link DeleteLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
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
export class DeleteLoggingConfigurationCommand extends $Command
  .classBuilder<
    DeleteLoggingConfigurationCommandInput,
    DeleteLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DeleteLoggingConfiguration", {})
  .n("AmpClient", "DeleteLoggingConfigurationCommand")
  .sc(DeleteLoggingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoggingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteLoggingConfigurationCommandInput;
      output: DeleteLoggingConfigurationCommandOutput;
    };
  };
}
