// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterCertificateRequest, RegisterCertificateResult } from "../models/models_0";
import { de_RegisterCertificateCommand, se_RegisterCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Registers a certificate for a secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RegisterCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RegisterCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
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
 *  <p>The certificate has already been registered into the system.</p>
 *
 * @throws {@link CertificateLimitExceededException} (client fault)
 *  <p>The certificate could not be added because the certificate limit has been reached.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link InvalidCertificateException} (client fault)
 *  <p>The certificate PEM that was provided has incorrect encoding.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class RegisterCertificateCommand extends $Command
  .classBuilder<
    RegisterCertificateCommandInput,
    RegisterCertificateCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "RegisterCertificate", {})
  .n("DirectoryServiceClient", "RegisterCertificateCommand")
  .f(void 0, void 0)
  .ser(se_RegisterCertificateCommand)
  .de(de_RegisterCertificateCommand)
  .build() {
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
