// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterCACertificateRequest, RegisterCACertificateResponse } from "../models/models_2";
import { RegisterCACertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterCACertificateCommand}.
 */
export interface RegisterCACertificateCommandInput extends RegisterCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCACertificateCommand}.
 */
export interface RegisterCACertificateCommandOutput extends RegisterCACertificateResponse, __MetadataBearer {}

/**
 * Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same `CA subject field` per Amazon Web Services account.
 *
 * Requires permission to access the [RegisterCACertificate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RegisterCACertificateRequest
 *   caCertificate: "STRING_VALUE", // required
 *   verificationCertificate: "STRING_VALUE",
 *   setAsActive: true || false,
 *   allowAutoRegistration: true || false,
 *   registrationConfig: { // RegistrationConfig
 *     templateBody: "STRING_VALUE",
 *     roleArn: "STRING_VALUE",
 *     templateName: "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   certificateMode: "DEFAULT" || "SNI_ONLY",
 * };
 * const command = new RegisterCACertificateCommand(input);
 * const response = await client.send(command);
 * // { // RegisterCACertificateResponse
 * //   certificateArn: "STRING_VALUE",
 * //   certificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterCACertificateCommandInput - {@link RegisterCACertificateCommandInput}
 * @returns {@link RegisterCACertificateCommandOutput}
 * @see {@link RegisterCACertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *
 * The certificate is invalid.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link RegistrationCodeValidationException} (client fault)
 *
 * The registration code is invalid.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class RegisterCACertificateCommand extends command<RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput>(
  _ep0,
  _mw0,
  "RegisterCACertificate",
  RegisterCACertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCACertificateRequest;
      output: RegisterCACertificateResponse;
    };
    sdk: {
      input: RegisterCACertificateCommandInput;
      output: RegisterCACertificateCommandOutput;
    };
  };
}
