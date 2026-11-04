// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetThingShadowRequest, GetThingShadowResponse } from "../models/models_0";
import { GetThingShadow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetThingShadowCommand}.
 */
export interface GetThingShadowCommandInput extends GetThingShadowRequest {}
/**
 * @public
 */
export type GetThingShadowCommandOutputType = Omit<GetThingShadowResponse, "payload"> & {
  payload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetThingShadowCommand}.
 */
export interface GetThingShadowCommandOutput extends GetThingShadowCommandOutputType, __MetadataBearer {}

/**
 * Gets the shadow for the specified thing.
 *
 * Requires permission to access the [GetThingShadow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * For more information, see [GetThingShadow](http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html) in the IoT Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // GetThingShadowRequest
 *   thingName: "STRING_VALUE", // required
 *   shadowName: "STRING_VALUE",
 * };
 * const command = new GetThingShadowCommand(input);
 * const response = await client.send(command);
 * // { // GetThingShadowResponse
 * //   payload: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetThingShadowCommandInput - {@link GetThingShadowCommandInput}
 * @returns {@link GetThingShadowCommandOutput}
 * @see {@link GetThingShadowCommandInput} for command's `input` shape.
 * @see {@link GetThingShadowCommandOutput} for command's `response` shape.
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
export class GetThingShadowCommand extends command<GetThingShadowCommandInput, GetThingShadowCommandOutput>(
  _ep0,
  _mw0,
  "GetThingShadow",
  GetThingShadow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetThingShadowRequest;
      output: GetThingShadowResponse;
    };
    sdk: {
      input: GetThingShadowCommandInput;
      output: GetThingShadowCommandOutput;
    };
  };
}
