// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCertificateProviderRequest, CreateCertificateProviderResponse } from "../models/models_0";
import { de_CreateCertificateProviderCommand, se_CreateCertificateProviderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCertificateProviderCommand}.
 */
export interface CreateCertificateProviderCommandInput extends CreateCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateProviderCommand}.
 */
export interface CreateCertificateProviderCommandOutput extends CreateCertificateProviderResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to
 *          customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For
 *          more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provisioning-cert-provider.html">Customizing certificate
 *             signing using Amazon Web Services IoT Core certificate provider</a> from <i>Amazon Web Services IoT Core Developer
 *             Guide</i>.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateProvider</a> action.</p>
 *          <important>
 *             <p>After you create a certificate provider, the behavior of <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-provision-api.html#create-cert-csr">
 *                   <code>CreateCertificateFromCsr</code> API for fleet provisioning</a> will
 *             change and all API calls to <code>CreateCertificateFromCsr</code> will invoke the
 *             certificate provider to create the certificates. It can take up to a few minutes for
 *             this behavior to change after a certificate provider is created.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 *   lambdaFunctionArn: "STRING_VALUE", // required
 *   accountDefaultForOperations: [ // CertificateProviderAccountDefaultForOperations // required
 *     "CreateCertificateFromCsr",
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateProviderResponse
 * //   certificateProviderName: "STRING_VALUE",
 * //   certificateProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCertificateProviderCommandInput - {@link CreateCertificateProviderCommandInput}
 * @returns {@link CreateCertificateProviderCommandOutput}
 * @see {@link CreateCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateProviderCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateCertificateProviderCommand extends $Command
  .classBuilder<
    CreateCertificateProviderCommandInput,
    CreateCertificateProviderCommandOutput,
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
  .s("AWSIotService", "CreateCertificateProvider", {})
  .n("IoTClient", "CreateCertificateProviderCommand")
  .f(void 0, void 0)
  .ser(se_CreateCertificateProviderCommand)
  .de(de_CreateCertificateProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCertificateProviderRequest;
      output: CreateCertificateProviderResponse;
    };
    sdk: {
      input: CreateCertificateProviderCommandInput;
      output: CreateCertificateProviderCommandOutput;
    };
  };
}
