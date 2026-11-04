// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterCertificateRequest, DeregisterCertificateResult } from "../models/models_0";
import { DeregisterCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterCertificateCommand}.
 */
export interface DeregisterCertificateCommandInput extends DeregisterCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterCertificateCommand}.
 */
export interface DeregisterCertificateCommandOutput extends DeregisterCertificateResult, __MetadataBearer {}

/**
 * Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeregisterCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeregisterCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeregisterCertificateRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   CertificateId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterCertificateCommandInput - {@link DeregisterCertificateCommandInput}
 * @returns {@link DeregisterCertificateCommandOutput}
 * @see {@link DeregisterCertificateCommandInput} for command's `input` shape.
 * @see {@link DeregisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link CertificateDoesNotExistException} (client fault)
 *
 * The certificate is not present in the system for describe or deregister activities.
 *
 * @throws {@link CertificateInUseException} (client fault)
 *
 * The certificate is being used for the LDAP security connection and cannot be removed without disabling LDAP security.
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
export class DeregisterCertificateCommand extends command<DeregisterCertificateCommandInput, DeregisterCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterCertificate",
  DeregisterCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeregisterCertificateCommandInput;
      output: DeregisterCertificateCommandOutput;
    };
  };
}
