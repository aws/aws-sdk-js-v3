// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCACertificateRequest, DeleteCACertificateResponse } from "../models/models_1";
import { de_DeleteCACertificateCommand, se_DeleteCACertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCACertificateCommand}.
 */
export interface DeleteCACertificateCommandInput extends DeleteCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCACertificateCommand}.
 */
export interface DeleteCACertificateCommandOutput extends DeleteCACertificateResponse, __MetadataBearer {}

/**
 * <p>Deletes a registered CA certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteCACertificateRequest
 *   certificateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCACertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCACertificateCommandInput - {@link DeleteCACertificateCommandInput}
 * @returns {@link DeleteCACertificateCommandOutput}
 * @see {@link DeleteCACertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link CertificateStateException} (client fault)
 *  <p>The certificate operation is not allowed.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DeleteCACertificateCommand extends $Command
  .classBuilder<
    DeleteCACertificateCommandInput,
    DeleteCACertificateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteCACertificate", {})
  .n("IoTClient", "DeleteCACertificateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCACertificateCommand)
  .de(de_DeleteCACertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCACertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteCACertificateCommandInput;
      output: DeleteCACertificateCommandOutput;
    };
  };
}
