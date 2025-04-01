// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteQueuedMessagesRequest, DeleteQueuedMessagesResponse } from "../models/models_0";
import { de_DeleteQueuedMessagesCommand, se_DeleteQueuedMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueuedMessagesCommand}.
 */
export interface DeleteQueuedMessagesCommandInput extends DeleteQueuedMessagesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueuedMessagesCommand}.
 */
export interface DeleteQueuedMessagesCommandOutput extends DeleteQueuedMessagesResponse, __MetadataBearer {}

/**
 * <p>Remove queued messages from the downlink queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteQueuedMessagesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteQueuedMessagesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteQueuedMessagesRequest
 *   Id: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   WirelessDeviceType: "Sidewalk" || "LoRaWAN",
 * };
 * const command = new DeleteQueuedMessagesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueuedMessagesCommandInput - {@link DeleteQueuedMessagesCommandInput}
 * @returns {@link DeleteQueuedMessagesCommandOutput}
 * @see {@link DeleteQueuedMessagesCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedMessagesCommandOutput} for command's `response` shape.
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
export class DeleteQueuedMessagesCommand extends $Command
  .classBuilder<
    DeleteQueuedMessagesCommandInput,
    DeleteQueuedMessagesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "DeleteQueuedMessages", {})
  .n("IoTWirelessClient", "DeleteQueuedMessagesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueuedMessagesCommand)
  .de(de_DeleteQueuedMessagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueuedMessagesRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueuedMessagesCommandInput;
      output: DeleteQueuedMessagesCommandOutput;
    };
  };
}
