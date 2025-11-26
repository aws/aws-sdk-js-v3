// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RevokeCertificateRequest, RevokeCertificateResponse } from "../models/models_0";
import { RevokeCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeCertificateCommand}.
 */
export interface RevokeCertificateCommandInput extends RevokeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RevokeCertificateCommand}.
 */
export interface RevokeCertificateCommandOutput extends RevokeCertificateResponse, __MetadataBearer {}

/**
 * <p>Revokes a public ACM certificate. You can only revoke certificates that have been previously exported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RevokeCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RevokeCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // RevokeCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   RevocationReason: "UNSPECIFIED" || "KEY_COMPROMISE" || "CA_COMPROMISE" || "AFFILIATION_CHANGED" || "SUPERCEDED" || "SUPERSEDED" || "CESSATION_OF_OPERATION" || "CERTIFICATE_HOLD" || "REMOVE_FROM_CRL" || "PRIVILEGE_WITHDRAWN" || "A_A_COMPROMISE", // required
 * };
 * const command = new RevokeCertificateCommand(input);
 * const response = await client.send(command);
 * // { // RevokeCertificateResponse
 * //   CertificateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RevokeCertificateCommandInput - {@link RevokeCertificateCommandInput}
 * @returns {@link RevokeCertificateCommandOutput}
 * @see {@link RevokeCertificateCommandInput} for command's `input` shape.
 * @see {@link RevokeCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The certificate is in use by another Amazon Web Services service in the caller's account. Remove the association and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class RevokeCertificateCommand extends $Command
  .classBuilder<
    RevokeCertificateCommandInput,
    RevokeCertificateCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "RevokeCertificate", {})
  .n("ACMClient", "RevokeCertificateCommand")
  .sc(RevokeCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeCertificateRequest;
      output: RevokeCertificateResponse;
    };
    sdk: {
      input: RevokeCertificateCommandInput;
      output: RevokeCertificateCommandOutput;
    };
  };
}
