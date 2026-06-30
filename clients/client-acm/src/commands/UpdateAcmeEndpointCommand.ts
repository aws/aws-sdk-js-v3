// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAcmeEndpointRequest } from "../models/models_0";
import { UpdateAcmeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAcmeEndpointCommand}.
 */
export interface UpdateAcmeEndpointCommandInput extends UpdateAcmeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAcmeEndpointCommand}.
 */
export interface UpdateAcmeEndpointCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, UpdateAcmeEndpointCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, UpdateAcmeEndpointCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // UpdateAcmeEndpointRequest
 *   AcmeEndpointArn: "STRING_VALUE", // required
 *   AuthorizationBehavior: "PRE_APPROVED",
 *   Contact: "REQUIRED" || "NOT_REQUIRED",
 *   CertificateAuthority: { // CertificateAuthority Union: only one key present
 *     PublicCertificateAuthority: { // PublicCertificateAuthority
 *       AllowedKeyAlgorithms: [ // PublicKeyAlgorithmList
 *         "RSA_2048" || "EC_prime256v1" || "EC_secp384r1",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateAcmeEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAcmeEndpointCommandInput - {@link UpdateAcmeEndpointCommandInput}
 * @returns {@link UpdateAcmeEndpointCommandOutput}
 * @see {@link UpdateAcmeEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateAcmeEndpointCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class UpdateAcmeEndpointCommand extends $Command
  .classBuilder<
    UpdateAcmeEndpointCommandInput,
    UpdateAcmeEndpointCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ServiceType: { type: "staticContextParams", value: `ACM-ACME` },
  })
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "UpdateAcmeEndpoint", {})
  .n("ACMClient", "UpdateAcmeEndpointCommand")
  .sc(UpdateAcmeEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAcmeEndpointRequest;
      output: {};
    };
    sdk: {
      input: UpdateAcmeEndpointCommandInput;
      output: UpdateAcmeEndpointCommandOutput;
    };
  };
}
