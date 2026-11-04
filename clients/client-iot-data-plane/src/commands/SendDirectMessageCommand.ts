// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendDirectMessageRequest, SendDirectMessageResponse } from "../models/models_0";
import { SendDirectMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sends an MQTT message directly to a specific client identified by its client ID.
 *
 * `SendDirectMessage` targets a single client ID. The receiving client does not need to subscribe to the topic, but the receiver's policy must allow `iot:Receive` on the specified topic.
 *
 * Requires permission to access the [SendDirectMessage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * For more information about messaging costs, see [Amazon Web Services IoT Core pricing](http://aws.amazon.com/iot-core/pricing/).
 *
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
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *
 * The delivery confirmation was not received from the client within the specified timeout period.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *
 * The payload exceeds the maximum size allowed.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTDataPlaneServiceException}
 *
 * Base exception class for all service exceptions from IoTDataPlane service.
 *
 * @public
 */
export class SendDirectMessageCommand extends command<SendDirectMessageCommandInput, SendDirectMessageCommandOutput>(
  _ep0,
  _mw0,
  "SendDirectMessage",
  SendDirectMessage$
) {
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
