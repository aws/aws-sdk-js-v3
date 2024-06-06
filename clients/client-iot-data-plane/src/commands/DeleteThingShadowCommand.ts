// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/models_0";
import { de_DeleteThingShadowCommand, se_DeleteThingShadowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteThingShadowCommand}.
 */
export interface DeleteThingShadowCommandInput extends DeleteThingShadowRequest {}
/**
 * @public
 */
export type DeleteThingShadowCommandOutputType = Omit<DeleteThingShadowResponse, "payload"> & {
  payload: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link DeleteThingShadowCommand}.
 */
export interface DeleteThingShadowCommandOutput extends DeleteThingShadowCommandOutputType, __MetadataBearer {}

/**
 * <p>Deletes the shadow for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, DeleteThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, DeleteThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const input = { // DeleteThingShadowRequest
 *   thingName: "STRING_VALUE", // required
 *   shadowName: "STRING_VALUE",
 * };
 * const command = new DeleteThingShadowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteThingShadowResponse
 * //   payload: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param DeleteThingShadowCommandInput - {@link DeleteThingShadowCommandInput}
 * @returns {@link DeleteThingShadowCommandOutput}
 * @see {@link DeleteThingShadowCommandInput} for command's `input` shape.
 * @see {@link DeleteThingShadowCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedDocumentEncodingException} (client fault)
 *  <p>The document encoding is not supported.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 * @public
 */
export class DeleteThingShadowCommand extends $Command
  .classBuilder<
    DeleteThingShadowCommandInput,
    DeleteThingShadowCommandOutput,
    IoTDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTDataPlaneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotMoonrakerService", "DeleteThingShadow", {})
  .n("IoTDataPlaneClient", "DeleteThingShadowCommand")
  .f(void 0, void 0)
  .ser(se_DeleteThingShadowCommand)
  .de(de_DeleteThingShadowCommand)
  .build() {}
