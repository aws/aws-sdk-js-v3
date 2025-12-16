// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AppIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEventIntegrationRequest, DeleteEventIntegrationResponse } from "../models/models_0";
import { DeleteEventIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventIntegrationCommand}.
 */
export interface DeleteEventIntegrationCommandInput extends DeleteEventIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventIntegrationCommand}.
 */
export interface DeleteEventIntegrationCommandOutput extends DeleteEventIntegrationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified existing event integration. If the event integration is associated
 *       with clients, the request is rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, DeleteEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, DeleteEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // DeleteEventIntegrationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventIntegrationCommandInput - {@link DeleteEventIntegrationCommandInput}
 * @returns {@link DeleteEventIntegrationCommandOutput}
 * @see {@link DeleteEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteEventIntegrationCommandOutput} for command's `response` shape.
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
export class DeleteEventIntegrationCommand extends $Command
  .classBuilder<
    DeleteEventIntegrationCommandInput,
    DeleteEventIntegrationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "DeleteEventIntegration", {})
  .n("AppIntegrationsClient", "DeleteEventIntegrationCommand")
  .sc(DeleteEventIntegration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventIntegrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventIntegrationCommandInput;
      output: DeleteEventIntegrationCommandOutput;
    };
  };
}
