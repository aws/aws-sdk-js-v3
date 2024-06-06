// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetJobDocumentRequest, GetJobDocumentResponse } from "../models/models_1";
import { de_GetJobDocumentCommand, se_GetJobDocumentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a job document.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetJobDocumentCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetJobDocumentCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetJobDocumentRequest
 *   jobId: "STRING_VALUE", // required
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
 *  <p>The request is not valid.</p>
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class GetJobDocumentCommand extends $Command
  .classBuilder<
    GetJobDocumentCommandInput,
    GetJobDocumentCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetJobDocument", {})
  .n("IoTClient", "GetJobDocumentCommand")
  .f(void 0, void 0)
  .ser(se_GetJobDocumentCommand)
  .de(de_GetJobDocumentCommand)
  .build() {}
