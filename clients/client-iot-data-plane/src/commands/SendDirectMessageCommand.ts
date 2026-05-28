// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import type { SendDirectMessageRequest, SendDirectMessageResponse } from "../models/models_0";
import { SendDirectMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type SendDirectMessageCommandInputType = Omit<SendDirectMessageRequest, "payload"> & {
  payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link SendDirectMessageCommand}.
 */
export interface SendDirectMessageCommandInput extends SendDirectMessageCommandInputType {}
/**
 * @public
 *
 * The output of {@link SendDirectMessageCommand}.
 */
export interface SendDirectMessageCommandOutput extends SendDirectMessageResponse, __MetadataBearer {}

/**
 * <p>Sends an MQTT message directly to a specific client identified by its client ID.</p>
 *          <p>
 *             <code>SendDirectMessage</code> targets a single client ID. The receiving client does not
 *       need to subscribe to the topic, but the receiver's policy must allow <code>iot:Receive</code> on the specified topic.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SendDirectMessage</a> action.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/">Amazon Web Services IoT Core
 *       pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, SendDirectMessageCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, SendDirectMessageCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // SendDirectMessageRequest
 *   clientId: "STRING_VALUE", // required
 *   topic: "STRING_VALUE", // required
 *   contentType: "STRING_VALUE",
 *   responseTopic: "STRING_VALUE",
 *   confirmation: true || false,
 *   timeout: Number("int"),
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   userProperties: "STRING_VALUE",
 *   payloadFormatIndicator: "UNSPECIFIED_BYTES" || "UTF8_DATA",
 *   correlationData: "STRING_VALUE",
 * };
 * const command = new SendDirectMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendDirectMessageResponse
 * //   message: "STRING_VALUE",
 * //   traceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendDirectMessageCommandInput - {@link SendDirectMessageCommandInput}
 * @returns {@link SendDirectMessageCommandOutput}
 * @see {@link SendDirectMessageCommandInput} for command's `input` shape.
 * @see {@link SendDirectMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>The delivery confirmation was not received from the client within the specified timeout period.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>The payload exceeds the maximum size allowed.</p>
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
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 *
 * @public
 */
export class SendDirectMessageCommand extends $Command
  .classBuilder<
    SendDirectMessageCommandInput,
    SendDirectMessageCommandOutput,
    IoTDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTDataPlaneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotMoonrakerService", "SendDirectMessage", {})
  .n("IoTDataPlaneClient", "SendDirectMessageCommand")
  .sc(SendDirectMessage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDirectMessageRequest;
      output: SendDirectMessageResponse;
    };
    sdk: {
      input: SendDirectMessageCommandInput;
      output: SendDirectMessageCommandOutput;
    };
  };
}
