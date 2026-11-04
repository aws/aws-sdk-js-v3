// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/models_0";
import { UpdateThingShadow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the shadow for the specified thing.
 *
 * Requires permission to access the [UpdateThingShadow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * For more information, see [UpdateThingShadow](http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html) in the IoT Developer Guide.
 *
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
 *
 * The specified version does not match the version of the document.
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
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *
 * The payload exceeds the maximum size allowed.
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
 * @throws {@link UnsupportedDocumentEncodingException} (client fault)
 *
 * The document encoding is not supported.
 *
 * @throws {@link IoTDataPlaneServiceException}
 *
 * Base exception class for all service exceptions from IoTDataPlane service.
 *
 * @public
 */
export class UpdateThingShadowCommand extends command<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput>(
  _ep0,
  _mw0,
  "UpdateThingShadow",
  UpdateThingShadow$
) {
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
