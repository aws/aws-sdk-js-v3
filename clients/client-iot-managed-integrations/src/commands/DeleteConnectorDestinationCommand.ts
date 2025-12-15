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
import type { DeleteConnectorDestinationRequest } from "../models/models_0";
import { DeleteConnectorDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectorDestinationCommand}.
 */
export interface DeleteConnectorDestinationCommandInput extends DeleteConnectorDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorDestinationCommand}.
 */
export interface DeleteConnectorDestinationCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a connector destination linked to a cloud-to-cloud (C2C) connector.</p> <note> <p>Deletion can't be done if the account association has used this connector destination.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteConnectorDestinationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteConnectorDestinationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteConnectorDestinationRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectorDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectorDestinationCommandInput - {@link DeleteConnectorDestinationCommandInput}
 * @returns {@link DeleteConnectorDestinationCommandOutput}
 * @see {@link DeleteConnectorDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorDestinationCommandOutput} for command's `response` shape.
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
export class DeleteConnectorDestinationCommand extends $Command
  .classBuilder<
    DeleteConnectorDestinationCommandInput,
    DeleteConnectorDestinationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "DeleteConnectorDestination", {})
  .n("IoTManagedIntegrationsClient", "DeleteConnectorDestinationCommand")
  .sc(DeleteConnectorDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectorDestinationCommandInput;
      output: DeleteConnectorDestinationCommandOutput;
    };
  };
}
