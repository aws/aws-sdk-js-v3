// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCommandRequest, DeleteCommandResponse } from "../models/models_1";
import { de_DeleteCommandCommand, se_DeleteCommandCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCommandCommand}.
 */
export interface DeleteCommandCommandInput extends DeleteCommandRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCommandCommand}.
 */
export interface DeleteCommandCommandOutput extends DeleteCommandResponse, __MetadataBearer {}

/**
 * <p>Delete a command resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCommandCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCommandCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteCommandRequest
 *   commandId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCommandCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCommandResponse
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteCommandCommandInput - {@link DeleteCommandCommandInput}
 * @returns {@link DeleteCommandCommandOutput}
 * @see {@link DeleteCommandCommandInput} for command's `input` shape.
 * @see {@link DeleteCommandCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class DeleteCommandCommand extends $Command
  .classBuilder<
    DeleteCommandCommandInput,
    DeleteCommandCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteCommand", {})
  .n("IoTClient", "DeleteCommandCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCommandCommand)
  .de(de_DeleteCommandCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCommandRequest;
      output: DeleteCommandResponse;
    };
    sdk: {
      input: DeleteCommandCommandInput;
      output: DeleteCommandCommandOutput;
    };
  };
}
