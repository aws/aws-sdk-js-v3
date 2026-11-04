// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCertificateRequest, DescribeCertificateResult } from "../models/models_0";
import { DescribeCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandInput extends DescribeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandOutput extends DescribeCertificateResult, __MetadataBearer {}

/**
 * Displays information about the certificate registered for secure LDAP or client certificate authentication.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeCertificateRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   CertificateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateResult
 * //   Certificate: { // Certificate
 * //     CertificateId: "STRING_VALUE",
 * //     State: "Registering" || "Registered" || "RegisterFailed" || "Deregistering" || "Deregistered" || "DeregisterFailed",
 * //     StateReason: "STRING_VALUE",
 * //     CommonName: "STRING_VALUE",
 * //     RegisteredDateTime: new Date("TIMESTAMP"),
 * //     ExpiryDateTime: new Date("TIMESTAMP"),
 * //     Type: "ClientCertAuth" || "ClientLDAPS",
 * //     ClientCertAuthSettings: { // ClientCertAuthSettings
 * //       OCSPUrl: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateCommandInput - {@link DescribeCertificateCommandInput}
 * @returns {@link DescribeCertificateCommandOutput}
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link CertificateDoesNotExistException} (client fault)
 *
 * The certificate is not present in the system for describe or deregister activities.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
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
export class DescribeCertificateCommand extends command<DescribeCertificateCommandInput, DescribeCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCertificate",
  DescribeCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateRequest;
      output: DescribeCertificateResult;
    };
    sdk: {
      input: DescribeCertificateCommandInput;
      output: DescribeCertificateCommandOutput;
    };
  };
}
