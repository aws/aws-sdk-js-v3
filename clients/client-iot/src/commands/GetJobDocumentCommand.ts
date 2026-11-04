// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetJobDocumentRequest, GetJobDocumentResponse } from "../models/models_1";
import { GetJobDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetJobDocumentCommand}.
 */
export interface GetJobDocumentCommandInput extends GetJobDocumentRequest {}
/**
 * @public
 *
 * The output of {@link GetJobDocumentCommand}.
 */
export interface GetJobDocumentCommandOutput extends GetJobDocumentResponse, __MetadataBearer {}

/**
 * Gets a job document.
 *
 * Requires permission to access the [GetJobDocument](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetJobDocumentCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetJobDocumentCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetJobDocumentRequest
 *   jobId: "STRING_VALUE", // required
 *   beforeSubstitution: true || false,
 * };
 * const command = new GetJobDocumentCommand(input);
 * const response = await client.send(command);
 * // { // GetJobDocumentResponse
 * //   document: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobDocumentCommandInput - {@link GetJobDocumentCommandInput}
 * @returns {@link GetJobDocumentCommandOutput}
 * @see {@link GetJobDocumentCommandInput} for command's `input` shape.
 * @see {@link GetJobDocumentCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class GetJobDocumentCommand extends command<GetJobDocumentCommandInput, GetJobDocumentCommandOutput>(
  _ep0,
  _mw0,
  "GetJobDocument",
  GetJobDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobDocumentRequest;
      output: GetJobDocumentResponse;
    };
    sdk: {
      input: GetJobDocumentCommandInput;
      output: GetJobDocumentCommandOutput;
    };
  };
}
