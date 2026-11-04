// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCloudConnectorRequest } from "../models/models_0";
import { UpdateCloudConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCloudConnectorCommand}.
 */
export interface UpdateCloudConnectorCommandInput extends UpdateCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCloudConnectorCommand}.
 */
export interface UpdateCloudConnectorCommandOutput extends __MetadataBearer {}

/**
 * Update an existing cloud connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateCloudConnectorCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateCloudConnectorCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateCloudConnectorRequest
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCloudConnectorCommandInput - {@link UpdateCloudConnectorCommandInput}
 * @returns {@link UpdateCloudConnectorCommandOutput}
 * @see {@link UpdateCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudConnectorCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @example UpdateCloudConnector happy path for TP Link to update display name
 * ```javascript
 * //
 * const input = {
 *   Identifier: "123456789012",
 *   Name: "Connector for TP Link Cloud V2"
 * };
 * const command = new UpdateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example UpdateCloudConnector error Id for Ring connector which does not exist
 * ```javascript
 * //
 * const input = {
 *   Identifier: "123456789012",
 *   Name: "Connector for Ring Cloud"
 * };
 * const command = new UpdateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCloudConnectorCommand extends command<UpdateCloudConnectorCommandInput, UpdateCloudConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCloudConnector",
  UpdateCloudConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudConnectorRequest;
      output: {};
    };
    sdk: {
      input: UpdateCloudConnectorCommandInput;
      output: UpdateCloudConnectorCommandOutput;
    };
  };
}
