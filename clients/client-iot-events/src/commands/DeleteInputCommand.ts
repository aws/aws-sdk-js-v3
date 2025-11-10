// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DeleteInputRequest, DeleteInputResponse } from "../models/models_0";
import { DeleteInput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInputCommand}.
 */
export interface DeleteInputCommandInput extends DeleteInputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInputCommand}.
 */
export interface DeleteInputCommandOutput extends DeleteInputResponse, __MetadataBearer {}

/**
 * <p>Deletes an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // DeleteInputRequest
 *   inputName: "STRING_VALUE", // required
 * };
 * const command = new DeleteInputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInputCommandInput - {@link DeleteInputCommandInput}
 * @returns {@link DeleteInputCommandOutput}
 * @see {@link DeleteInputCommandInput} for command's `input` shape.
 * @see {@link DeleteInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class DeleteInputCommand extends $Command
  .classBuilder<
    DeleteInputCommandInput,
    DeleteInputCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "DeleteInput", {})
  .n("IoTEventsClient", "DeleteInputCommand")
  .sc(DeleteInput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInputRequest;
      output: {};
    };
    sdk: {
      input: DeleteInputCommandInput;
      output: DeleteInputCommandOutput;
    };
  };
}
