// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { DeleteConnectionRequest } from "../models/models_0";
import { DeleteConnection } from "../schemas/schemas_1_Thing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandInput extends DeleteConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, DeleteConnectionCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, DeleteConnectionCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // DeleteConnectionRequest
 *   clientId: "STRING_VALUE", // required
 *   cleanSession: true || false,
 *   preventWillMessage: true || false,
 * };
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionCommandInput - {@link DeleteConnectionCommandInput}
 * @returns {@link DeleteConnectionCommandOutput}
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionCommand extends $Command
  .classBuilder<
    DeleteConnectionCommandInput,
    DeleteConnectionCommandOutput,
    IoTDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTDataPlaneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotMoonrakerService", "DeleteConnection", {})
  .n("IoTDataPlaneClient", "DeleteConnectionCommand")
  .sc(DeleteConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionCommandInput;
      output: DeleteConnectionCommandOutput;
    };
  };
}
