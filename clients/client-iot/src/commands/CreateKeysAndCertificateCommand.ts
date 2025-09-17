// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateKeysAndCertificateRequest,
  CreateKeysAndCertificateResponse,
  CreateKeysAndCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateKeysAndCertificateCommand, se_CreateKeysAndCertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeysAndCertificateCommand}.
 */
export interface CreateKeysAndCertificateCommandInput extends CreateKeysAndCertificateRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeysAndCertificateCommand}.
 */
export interface CreateKeysAndCertificateCommandOutput extends CreateKeysAndCertificateResponse, __MetadataBearer {}

/**
 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
 *          public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a
 *          device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p>
 *          <p>
 *             <b>Note</b> This is the only time IoT issues the private key
 *          for this certificate, so it is important to keep it in a secure location.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateKeysAndCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateKeysAndCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateKeysAndCertificateRequest
 *   setAsActive: true || false,
 * };
 * const command = new CreateKeysAndCertificateCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeysAndCertificateResponse
 * //   certificateArn: "STRING_VALUE",
 * //   certificateId: "STRING_VALUE",
 * //   certificatePem: "STRING_VALUE",
 * //   keyPair: { // KeyPair
 * //     PublicKey: "STRING_VALUE",
 * //     PrivateKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateKeysAndCertificateCommandInput - {@link CreateKeysAndCertificateCommandInput}
 * @returns {@link CreateKeysAndCertificateCommandOutput}
 * @see {@link CreateKeysAndCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateKeysAndCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class CreateKeysAndCertificateCommand extends $Command
  .classBuilder<
    CreateKeysAndCertificateCommandInput,
    CreateKeysAndCertificateCommandOutput,
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
  .s("AWSIotService", "CreateKeysAndCertificate", {})
  .n("IoTClient", "CreateKeysAndCertificateCommand")
  .f(void 0, CreateKeysAndCertificateResponseFilterSensitiveLog)
  .ser(se_CreateKeysAndCertificateCommand)
  .de(de_CreateKeysAndCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeysAndCertificateRequest;
      output: CreateKeysAndCertificateResponse;
    };
    sdk: {
      input: CreateKeysAndCertificateCommandInput;
      output: CreateKeysAndCertificateCommandOutput;
    };
  };
}
