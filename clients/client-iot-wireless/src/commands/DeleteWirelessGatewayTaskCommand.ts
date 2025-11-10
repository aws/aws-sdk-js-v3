// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteWirelessGatewayTaskRequest, DeleteWirelessGatewayTaskResponse } from "../models/models_0";
import { DeleteWirelessGatewayTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWirelessGatewayTaskCommand}.
 */
export interface DeleteWirelessGatewayTaskCommandInput extends DeleteWirelessGatewayTaskRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessGatewayTaskCommand}.
 */
export interface DeleteWirelessGatewayTaskCommandOutput extends DeleteWirelessGatewayTaskResponse, __MetadataBearer {}

/**
 * <p>Deletes a wireless gateway task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessGatewayTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessGatewayTaskCommandInput - {@link DeleteWirelessGatewayTaskCommandInput}
 * @returns {@link DeleteWirelessGatewayTaskCommandOutput}
 * @see {@link DeleteWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayTaskCommandOutput} for command's `response` shape.
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
export class DeleteWirelessGatewayTaskCommand extends $Command
  .classBuilder<
    DeleteWirelessGatewayTaskCommandInput,
    DeleteWirelessGatewayTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DeleteWirelessGatewayTask", {})
  .n("IoTWirelessClient", "DeleteWirelessGatewayTaskCommand")
  .sc(DeleteWirelessGatewayTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWirelessGatewayTaskRequest;
      output: {};
    };
    sdk: {
      input: DeleteWirelessGatewayTaskCommandInput;
      output: DeleteWirelessGatewayTaskCommandOutput;
    };
  };
}
