// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeSigningProfileRequest } from "../models/models_0";
import { de_RevokeSigningProfileCommand, se_RevokeSigningProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeSigningProfileCommand}.
 */
export interface RevokeSigningProfileCommandInput extends RevokeSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link RevokeSigningProfileCommand}.
 */
export interface RevokeSigningProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the state of a signing profile to REVOKED. This indicates that signatures
 * 			generated using the signing profile after an effective start date are no longer
 * 			valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // RevokeSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 *   profileVersion: "STRING_VALUE", // required
 *   reason: "STRING_VALUE", // required
 *   effectiveTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new RevokeSigningProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeSigningProfileCommandInput - {@link RevokeSigningProfileCommandInput}
 * @returns {@link RevokeSigningProfileCommandOutput}
 * @see {@link RevokeSigningProfileCommandInput} for command's `input` shape.
 * @see {@link RevokeSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 * @public
 */
export class RevokeSigningProfileCommand extends $Command
  .classBuilder<
    RevokeSigningProfileCommandInput,
    RevokeSigningProfileCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WallabyService", "RevokeSigningProfile", {})
  .n("SignerClient", "RevokeSigningProfileCommand")
  .f(void 0, void 0)
  .ser(se_RevokeSigningProfileCommand)
  .de(de_RevokeSigningProfileCommand)
  .build() {}
