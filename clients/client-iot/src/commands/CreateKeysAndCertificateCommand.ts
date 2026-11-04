// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKeysAndCertificateRequest, CreateKeysAndCertificateResponse } from "../models/models_0";
import { CreateKeysAndCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call `CreateKeysAndCertificate` over MQTT from a device, for more information, see [Provisioning MQTT API](https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api).
 *
 * **Note** This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.
 *
 * Requires permission to access the [CreateKeysAndCertificate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateKeysAndCertificateCommand extends command<CreateKeysAndCertificateCommandInput, CreateKeysAndCertificateCommandOutput>(
  _ep0,
  _mw0,
  "CreateKeysAndCertificate",
  CreateKeysAndCertificate$
) {
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
