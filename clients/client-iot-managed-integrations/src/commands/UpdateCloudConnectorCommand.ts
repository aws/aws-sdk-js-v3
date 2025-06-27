// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { UpdateCloudConnectorRequest } from "../models/models_0";
import { de_UpdateCloudConnectorCommand, se_UpdateCloudConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Update an existing cloud connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateCloudConnectorCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateCloudConnectorCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
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
export class UpdateCloudConnectorCommand extends $Command
  .classBuilder<
    UpdateCloudConnectorCommandInput,
    UpdateCloudConnectorCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "UpdateCloudConnector", {})
  .n("IoTManagedIntegrationsClient", "UpdateCloudConnectorCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCloudConnectorCommand)
  .de(de_UpdateCloudConnectorCommand)
  .build() {
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
