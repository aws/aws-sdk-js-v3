// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishRequest } from "../models/models_0";
import { Publish$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type PublishCommandInputType = Omit<PublishRequest, "payload"> & {
  payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PublishCommand}.
 */
export interface PublishCommandInput extends PublishCommandInputType {}
/**
 * @public
 *
 * The output of {@link PublishCommand}.
 */
export interface PublishCommandOutput extends __MetadataBearer {}

/**
 * Publishes an MQTT message.
 *
 * Requires permission to access the [Publish](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * For more information about MQTT messages, see [MQTT Protocol](http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) in the IoT Developer Guide.
 *
 * For more information about messaging costs, see [Amazon Web Services IoT Core pricing - Messaging](http://aws.amazon.com/iot-core/pricing/#Messaging).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, PublishCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, PublishCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // PublishRequest
 *   topic: "STRING_VALUE", // required
 *   qos: Number("int"),
 *   retain: true || false,
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   userProperties: "STRING_VALUE",
 *   payloadFormatIndicator: "UNSPECIFIED_BYTES" || "UTF8_DATA",
 *   contentType: "STRING_VALUE",
 *   responseTopic: "STRING_VALUE",
 *   correlationData: "STRING_VALUE",
 *   messageExpiry: Number("long"),
 * };
 * const command = new PublishCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PublishCommandInput - {@link PublishCommandInput}
 * @returns {@link PublishCommandOutput}
 * @see {@link PublishCommandInput} for command's `input` shape.
 * @see {@link PublishCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The specified combination of HTTP verb and URI is not supported.
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
export class PublishCommand extends command<PublishCommandInput, PublishCommandOutput>(
  _ep0,
  _mw0,
  "Publish",
  Publish$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishRequest;
      output: {};
    };
    sdk: {
      input: PublishCommandInput;
      output: PublishCommandOutput;
    };
  };
}
