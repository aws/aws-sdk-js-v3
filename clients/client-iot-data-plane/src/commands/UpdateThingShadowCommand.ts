// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/models_0";
import { de_UpdateThingShadowCommand, se_UpdateThingShadowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type UpdateThingShadowCommandInputType = Omit<UpdateThingShadowRequest, "payload"> & {
  payload: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link UpdateThingShadowCommand}.
 */
export interface UpdateThingShadowCommandInput extends UpdateThingShadowCommandInputType {}
/**
 * @public
 */
export type UpdateThingShadowCommandOutputType = Omit<UpdateThingShadowResponse, "payload"> & {
  payload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link UpdateThingShadowCommand}.
 */
export interface UpdateThingShadowCommandOutput extends UpdateThingShadowCommandOutputType, __MetadataBearer {}

/**
 * <p>Updates the shadow for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
 *         IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, UpdateThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, UpdateThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // UpdateThingShadowRequest
 *   thingName: "STRING_VALUE", // required
 *   shadowName: "STRING_VALUE",
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new UpdateThingShadowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThingShadowResponse
 * //   payload: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param UpdateThingShadowCommandInput - {@link UpdateThingShadowCommandInput}
 * @returns {@link UpdateThingShadowCommandOutput}
 * @see {@link UpdateThingShadowCommandInput} for command's `input` shape.
 * @see {@link UpdateThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The specified version does not match the version of the document.</p>
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
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>The payload exceeds the maximum size allowed.</p>
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
 *
 * @public
 */
export class UpdateThingShadowCommand extends $Command
  .classBuilder<
    UpdateThingShadowCommandInput,
    UpdateThingShadowCommandOutput,
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
  .s("IotMoonrakerService", "UpdateThingShadow", {})
  .n("IoTDataPlaneClient", "UpdateThingShadowCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThingShadowCommand)
  .de(de_UpdateThingShadowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThingShadowRequest;
      output: UpdateThingShadowResponse;
    };
    sdk: {
      input: UpdateThingShadowCommandInput;
      output: UpdateThingShadowCommandOutput;
    };
  };
}
