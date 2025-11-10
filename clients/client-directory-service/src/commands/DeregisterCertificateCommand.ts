// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterCertificateRequest, DeregisterCertificateResult } from "../models/models_0";
import { DeregisterCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes from the system the certificate that was registered for secure LDAP or client
 *       certificate authentication.</p>
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
 *  <p>The certificate is not present in the system for describe or deregister activities.</p>
 *
 * @throws {@link CertificateInUseException} (client fault)
 *  <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
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
export class DeregisterCertificateCommand extends $Command
  .classBuilder<
    DeregisterCertificateCommandInput,
    DeregisterCertificateCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeregisterCertificate", {})
  .n("DirectoryServiceClient", "DeregisterCertificateCommand")
  .sc(DeregisterCertificate)
  .build() {
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
