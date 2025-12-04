// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { UpdateConnectorDestinationRequest } from "../models/models_0";
import { UpdateConnectorDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorDestinationCommand}.
 */
export interface UpdateConnectorDestinationCommandInput extends UpdateConnectorDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorDestinationCommand}.
 */
export interface UpdateConnectorDestinationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the properties of an existing connector destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateConnectorDestinationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateConnectorDestinationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateConnectorDestinationRequest
 *   Identifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   AuthType: "OAUTH",
 *   AuthConfig: { // AuthConfigUpdate
 *     oAuthUpdate: { // OAuthUpdate
 *       oAuthCompleteRedirectUrl: "STRING_VALUE",
 *       proactiveRefreshTokenRenewal: { // ProactiveRefreshTokenRenewal
 *         enabled: true || false,
 *         DaysBeforeRenewal: Number("int"),
 *       },
 *     },
 *   },
 *   SecretsManager: { // SecretsManager
 *     arn: "STRING_VALUE", // required
 *     versionId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateConnectorDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectorDestinationCommandInput - {@link UpdateConnectorDestinationCommandInput}
 * @returns {@link UpdateConnectorDestinationCommandOutput}
 * @see {@link UpdateConnectorDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class UpdateConnectorDestinationCommand extends $Command
  .classBuilder<
    UpdateConnectorDestinationCommandInput,
    UpdateConnectorDestinationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "UpdateConnectorDestination", {})
  .n("IoTManagedIntegrationsClient", "UpdateConnectorDestinationCommand")
  .sc(UpdateConnectorDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdateConnectorDestinationCommandInput;
      output: UpdateConnectorDestinationCommandOutput;
    };
  };
}
