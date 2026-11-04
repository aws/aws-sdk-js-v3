// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRetainedMessageRequest, GetRetainedMessageResponse } from "../models/models_0";
import { GetRetainedMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRetainedMessageCommand}.
 */
export interface GetRetainedMessageCommandInput extends GetRetainedMessageRequest {}
/**
 * @public
 *
 * The output of {@link GetRetainedMessageCommand}.
 */
export interface GetRetainedMessageCommandOutput extends GetRetainedMessageResponse, __MetadataBearer {}

/**
 * Gets the details of a single retained message for the specified topic.
 *
 * This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call [ListRetainedMessages](https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html).
 *
 * Requires permission to access the [GetRetainedMessage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html) action.
 *
 * For more information about messaging costs, see [Amazon Web Services IoT Core pricing - Messaging](http://aws.amazon.com/iot-core/pricing/#Messaging).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetRetainedMessageCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetRetainedMessageCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // GetRetainedMessageRequest
 *   topic: "STRING_VALUE", // required
 * };
 * const command = new GetRetainedMessageCommand(input);
 * const response = await client.send(command);
 * // { // GetRetainedMessageResponse
 * //   topic: "STRING_VALUE",
 * //   payload: new Uint8Array(),
 * //   qos: Number("int"),
 * //   lastModifiedTime: Number("long"),
 * //   userProperties: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetRetainedMessageCommandInput - {@link GetRetainedMessageCommandInput}
 * @returns {@link GetRetainedMessageCommandOutput}
 * @see {@link GetRetainedMessageCommandInput} for command's `input` shape.
 * @see {@link GetRetainedMessageCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
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
export class GetRetainedMessageCommand extends command<GetRetainedMessageCommandInput, GetRetainedMessageCommandOutput>(
  _ep0,
  _mw0,
  "GetRetainedMessage",
  GetRetainedMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRetainedMessageRequest;
      output: GetRetainedMessageResponse;
    };
    sdk: {
      input: GetRetainedMessageCommandInput;
      output: GetRetainedMessageCommandOutput;
    };
  };
}
