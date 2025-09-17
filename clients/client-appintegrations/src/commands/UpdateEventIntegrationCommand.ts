// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEventIntegrationRequest, UpdateEventIntegrationResponse } from "../models/models_0";
import { de_UpdateEventIntegrationCommand, se_UpdateEventIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventIntegrationCommand}.
 */
export interface UpdateEventIntegrationCommandInput extends UpdateEventIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventIntegrationCommand}.
 */
export interface UpdateEventIntegrationCommandOutput extends UpdateEventIntegrationResponse, __MetadataBearer {}

/**
 * <p>Updates the description of an event integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, UpdateEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, UpdateEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // UpdateEventIntegrationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateEventIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventIntegrationCommandInput - {@link UpdateEventIntegrationCommandInput}
 * @returns {@link UpdateEventIntegrationCommandOutput}
 * @see {@link UpdateEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class UpdateEventIntegrationCommand extends $Command
  .classBuilder<
    UpdateEventIntegrationCommandInput,
    UpdateEventIntegrationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppIntegrationService", "UpdateEventIntegration", {})
  .n("AppIntegrationsClient", "UpdateEventIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventIntegrationCommand)
  .de(de_UpdateEventIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventIntegrationRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventIntegrationCommandInput;
      output: UpdateEventIntegrationCommandOutput;
    };
  };
}
