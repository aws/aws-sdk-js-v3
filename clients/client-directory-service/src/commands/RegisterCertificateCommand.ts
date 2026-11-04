// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterCertificateRequest, RegisterCertificateResult } from "../models/models_0";
import { RegisterCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterCertificateCommand}.
 */
export interface RegisterCertificateCommandInput extends RegisterCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCertificateCommand}.
 */
export interface RegisterCertificateCommandOutput extends RegisterCertificateResult, __MetadataBearer {}

/**
 * Registers a certificate for a secure LDAP or client certificate authentication.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RegisterCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RegisterCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // RegisterCertificateRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   CertificateData: "STRING_VALUE", // required
 *   Type: "ClientCertAuth" || "ClientLDAPS",
 *   ClientCertAuthSettings: { // ClientCertAuthSettings
 *     OCSPUrl: "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterCertificateCommand(input);
 * const response = await client.send(command);
 * // { // RegisterCertificateResult
 * //   CertificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterCertificateCommandInput - {@link RegisterCertificateCommandInput}
 * @returns {@link RegisterCertificateCommandOutput}
 * @see {@link RegisterCertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link CertificateAlreadyExistsException} (client fault)
 *
 * The certificate has already been registered into the system.
 *
 * @throws {@link CertificateLimitExceededException} (client fault)
 *
 * The certificate could not be added because the certificate limit has been reached.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link InvalidCertificateException} (client fault)
 *
 * The certificate PEM that was provided has incorrect encoding.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class RegisterCertificateCommand extends command<RegisterCertificateCommandInput, RegisterCertificateCommandOutput>(
  _ep0,
  _mw0,
  "RegisterCertificate",
  RegisterCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCertificateRequest;
      output: RegisterCertificateResult;
    };
    sdk: {
      input: RegisterCertificateCommandInput;
      output: RegisterCertificateCommandOutput;
    };
  };
}
