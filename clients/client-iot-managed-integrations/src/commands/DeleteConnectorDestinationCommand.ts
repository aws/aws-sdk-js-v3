// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectorDestinationRequest } from "../models/models_0";
import { DeleteConnectorDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Delete a connector destination linked to a cloud-to-cloud (C2C) connector.
 *
 * > **Note:** Deletion can't be done if the account association has used this connector destination.
 *
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class DeleteConnectorDestinationCommand extends command<DeleteConnectorDestinationCommandInput, DeleteConnectorDestinationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectorDestination",
  DeleteConnectorDestination$
) {
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
