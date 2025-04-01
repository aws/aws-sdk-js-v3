// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSigningProfileRequest } from "../models/models_0";
import { de_CancelSigningProfileCommand, se_CancelSigningProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSigningProfileCommand}.
 */
export interface CancelSigningProfileCommandInput extends CancelSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link CancelSigningProfileCommand}.
 */
export interface CancelSigningProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>.
 * 			A canceled profile is still viewable with the <code>ListSigningProfiles</code>
 * 			operation, but it cannot perform new signing jobs, and is deleted two years after
 * 			cancelation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, CancelSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, CancelSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // CancelSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 * };
 * const command = new CancelSigningProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSigningProfileCommandInput - {@link CancelSigningProfileCommandInput}
 * @returns {@link CancelSigningProfileCommandOutput}
 * @see {@link CancelSigningProfileCommandInput} for command's `input` shape.
 * @see {@link CancelSigningProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class CancelSigningProfileCommand extends $Command
  .classBuilder<
    CancelSigningProfileCommandInput,
    CancelSigningProfileCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WallabyService", "CancelSigningProfile", {})
  .n("SignerClient", "CancelSigningProfileCommand")
  .f(void 0, void 0)
  .ser(se_CancelSigningProfileCommand)
  .de(de_CancelSigningProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSigningProfileRequest;
      output: {};
    };
    sdk: {
      input: CancelSigningProfileCommandInput;
      output: CancelSigningProfileCommandOutput;
    };
  };
}
