// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RevokeAcmeExternalAccountBindingRequest } from "../models/models_0";
import { RevokeAcmeExternalAccountBinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeAcmeExternalAccountBindingCommand}.
 */
export interface RevokeAcmeExternalAccountBindingCommandInput extends RevokeAcmeExternalAccountBindingRequest {}
/**
 * @public
 *
 * The output of {@link RevokeAcmeExternalAccountBindingCommand}.
 */
export interface RevokeAcmeExternalAccountBindingCommandOutput extends __MetadataBearer {}

/**
 * <p>Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RevokeAcmeExternalAccountBindingCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RevokeAcmeExternalAccountBindingCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // RevokeAcmeExternalAccountBindingRequest
 *   AcmeExternalAccountBindingArn: "STRING_VALUE", // required
 * };
 * const command = new RevokeAcmeExternalAccountBindingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeAcmeExternalAccountBindingCommandInput - {@link RevokeAcmeExternalAccountBindingCommandInput}
 * @returns {@link RevokeAcmeExternalAccountBindingCommandOutput}
 * @see {@link RevokeAcmeExternalAccountBindingCommandInput} for command's `input` shape.
 * @see {@link RevokeAcmeExternalAccountBindingCommandOutput} for command's `response` shape.
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
export class RevokeAcmeExternalAccountBindingCommand extends $Command
  .classBuilder<
    RevokeAcmeExternalAccountBindingCommandInput,
    RevokeAcmeExternalAccountBindingCommandOutput,
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
  .s("CertificateManager", "RevokeAcmeExternalAccountBinding", {})
  .n("ACMClient", "RevokeAcmeExternalAccountBindingCommand")
  .sc(RevokeAcmeExternalAccountBinding$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeAcmeExternalAccountBindingRequest;
      output: {};
    };
    sdk: {
      input: RevokeAcmeExternalAccountBindingCommandInput;
      output: RevokeAcmeExternalAccountBindingCommandOutput;
    };
  };
}
