// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteFuotaTaskRequest, DeleteFuotaTaskResponse } from "../models/models_0";
import { de_DeleteFuotaTaskCommand, se_DeleteFuotaTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFuotaTaskCommand}.
 */
export interface DeleteFuotaTaskCommandInput extends DeleteFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFuotaTaskCommand}.
 */
export interface DeleteFuotaTaskCommandOutput extends DeleteFuotaTaskResponse, __MetadataBearer {}

/**
 * <p>Deletes a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFuotaTaskCommandInput - {@link DeleteFuotaTaskCommandInput}
 * @returns {@link DeleteFuotaTaskCommandOutput}
 * @see {@link DeleteFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteFuotaTaskCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteFuotaTaskCommand extends $Command
  .classBuilder<
    DeleteFuotaTaskCommandInput,
    DeleteFuotaTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "DeleteFuotaTask", {})
  .n("IoTWirelessClient", "DeleteFuotaTaskCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFuotaTaskCommand)
  .de(de_DeleteFuotaTaskCommand)
  .build() {}
