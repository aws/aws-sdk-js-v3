// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCertificateProviderRequest, DeleteCertificateProviderResponse } from "../models/models_1";
import { de_DeleteCertificateProviderCommand, se_DeleteCertificateProviderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCertificateProviderCommand}.
 */
export interface DeleteCertificateProviderCommandInput extends DeleteCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateProviderCommand}.
 */
export interface DeleteCertificateProviderCommandOutput extends DeleteCertificateProviderResponse, __MetadataBearer {}

/**
 * <p>Deletes a certificate provider.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificateProvider</a> action.
 *       </p>
 *          <p>If you delete the certificate provider resource, the behavior of
 *             <code>CreateCertificateFromCsr</code> will resume, and IoT will create
 *          certificates signed by IoT from a certificate signing request (CSR).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // DeleteCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCertificateProviderCommandInput - {@link DeleteCertificateProviderCommandInput}
 * @returns {@link DeleteCertificateProviderCommandOutput}
 * @see {@link DeleteCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateProviderCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
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
export class DeleteCertificateProviderCommand extends $Command
  .classBuilder<
    DeleteCertificateProviderCommandInput,
    DeleteCertificateProviderCommandOutput,
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
  .s("AWSIotService", "DeleteCertificateProvider", {})
  .n("IoTClient", "DeleteCertificateProviderCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCertificateProviderCommand)
  .de(de_DeleteCertificateProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteCertificateProviderCommandInput;
      output: DeleteCertificateProviderCommandOutput;
    };
  };
}
