// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DeleteWirelessGatewayTaskDefinitionRequest,
  DeleteWirelessGatewayTaskDefinitionResponse,
} from "../models/models_0";
import { DeleteWirelessGatewayTaskDefinition } from "../schemas/schemas_16_Wireless";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWirelessGatewayTaskDefinitionCommand}.
 */
export interface DeleteWirelessGatewayTaskDefinitionCommandInput extends DeleteWirelessGatewayTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessGatewayTaskDefinitionCommand}.
 */
export interface DeleteWirelessGatewayTaskDefinitionCommandOutput
  extends DeleteWirelessGatewayTaskDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a wireless gateway task definition. Deleting this task definition does not
 *             affect tasks that are currently in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessGatewayTaskDefinitionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessGatewayTaskDefinitionCommandInput - {@link DeleteWirelessGatewayTaskDefinitionCommandInput}
 * @returns {@link DeleteWirelessGatewayTaskDefinitionCommandOutput}
 * @see {@link DeleteWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class DeleteWirelessGatewayTaskDefinitionCommand extends $Command
  .classBuilder<
    DeleteWirelessGatewayTaskDefinitionCommandInput,
    DeleteWirelessGatewayTaskDefinitionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DeleteWirelessGatewayTaskDefinition", {})
  .n("IoTWirelessClient", "DeleteWirelessGatewayTaskDefinitionCommand")
  .sc(DeleteWirelessGatewayTaskDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWirelessGatewayTaskDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteWirelessGatewayTaskDefinitionCommandInput;
      output: DeleteWirelessGatewayTaskDefinitionCommandOutput;
    };
  };
}
