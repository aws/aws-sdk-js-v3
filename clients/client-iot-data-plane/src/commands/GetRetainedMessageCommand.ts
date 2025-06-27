// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { GetRetainedMessageRequest, GetRetainedMessageResponse } from "../models/models_0";
import { de_GetRetainedMessageCommand, se_GetRetainedMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the details of a single retained message for the specified topic.</p>
 *          <p>This action returns the message payload of the retained message, which can
 *       incur messaging costs. To list only the topic names of the retained messages, call
 *       <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
 *       pricing - Messaging</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetRetainedMessageCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetRetainedMessageCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The specified combination of HTTP verb and URI is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
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
export class GetRetainedMessageCommand extends $Command
  .classBuilder<
    GetRetainedMessageCommandInput,
    GetRetainedMessageCommandOutput,
    IoTDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTDataPlaneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotMoonrakerService", "GetRetainedMessage", {})
  .n("IoTDataPlaneClient", "GetRetainedMessageCommand")
  .f(void 0, void 0)
  .ser(se_GetRetainedMessageCommand)
  .de(de_GetRetainedMessageCommand)
  .build() {
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
