// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCertificateProviderRequest, UpdateCertificateProviderResponse } from "../models/models_2";
import { de_UpdateCertificateProviderCommand, se_UpdateCertificateProviderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCertificateProviderCommand}.
 */
export interface UpdateCertificateProviderCommandInput extends UpdateCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateProviderCommand}.
 */
export interface UpdateCertificateProviderCommandOutput extends UpdateCertificateProviderResponse, __MetadataBearer {}

/**
 * <p>Updates a certificate provider.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificateProvider</a> action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // UpdateCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 *   lambdaFunctionArn: "STRING_VALUE",
 *   accountDefaultForOperations: [ // CertificateProviderAccountDefaultForOperations
 *     "CreateCertificateFromCsr",
 *   ],
 * };
 * const command = new UpdateCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCertificateProviderResponse
 * //   certificateProviderName: "STRING_VALUE",
 * //   certificateProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCertificateProviderCommandInput - {@link UpdateCertificateProviderCommandInput}
 * @returns {@link UpdateCertificateProviderCommandOutput}
 * @see {@link UpdateCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateProviderCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
 * @public
 */
export class UpdateCertificateProviderCommand extends $Command
  .classBuilder<
    UpdateCertificateProviderCommandInput,
    UpdateCertificateProviderCommandOutput,
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
  .s("AWSIotService", "UpdateCertificateProvider", {})
  .n("IoTClient", "UpdateCertificateProviderCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCertificateProviderCommand)
  .de(de_UpdateCertificateProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateProviderRequest;
      output: UpdateCertificateProviderResponse;
    };
    sdk: {
      input: UpdateCertificateProviderCommandInput;
      output: UpdateCertificateProviderCommandOutput;
    };
  };
}
