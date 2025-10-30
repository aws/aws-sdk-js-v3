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
import { DeleteCloudConnectorRequest } from "../models/models_0";
import { de_DeleteCloudConnectorCommand, se_DeleteCloudConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCloudConnectorCommand}.
 */
export interface DeleteCloudConnectorCommandInput extends DeleteCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCloudConnectorCommand}.
 */
export interface DeleteCloudConnectorCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a cloud connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteCloudConnectorCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteCloudConnectorCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteCloudConnectorRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudConnectorCommandInput - {@link DeleteCloudConnectorCommandInput}
 * @returns {@link DeleteCloudConnectorCommandOutput}
 * @see {@link DeleteCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudConnectorCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
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
export class DeleteCloudConnectorCommand extends $Command
  .classBuilder<
    DeleteCloudConnectorCommandInput,
    DeleteCloudConnectorCommandOutput,
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
  .s("IotManagedIntegrations", "DeleteCloudConnector", {})
  .n("IoTManagedIntegrationsClient", "DeleteCloudConnectorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCloudConnectorCommand)
  .de(de_DeleteCloudConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudConnectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteCloudConnectorCommandInput;
      output: DeleteCloudConnectorCommandOutput;
    };
  };
}
