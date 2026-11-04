// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/models_0";
import { DeleteThingShadow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the shadow for the specified thing.
 *
 * Requires permission to access the [DeleteThingShadow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * For more information, see [DeleteThingShadow](http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html) in the IoT Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, DeleteThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, DeleteThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
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
export class DeleteThingShadowCommand extends command<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteThingShadow",
  DeleteThingShadow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThingShadowRequest;
      output: DeleteThingShadowResponse;
    };
    sdk: {
      input: DeleteThingShadowCommandInput;
      output: DeleteThingShadowCommandOutput;
    };
  };
}
