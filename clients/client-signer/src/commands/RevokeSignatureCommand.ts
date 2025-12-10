// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RevokeSignatureRequest } from "../models/models_0";
import { RevokeSignature } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeSignatureCommand}.
 */
export interface RevokeSignatureCommandInput extends RevokeSignatureRequest {}
/**
 * @public
 *
 * The output of {@link RevokeSignatureCommand}.
 */
export interface RevokeSignatureCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the state of a signing job to <code>REVOKED</code>. This indicates that the signature is no
 * 			longer valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSignatureCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSignatureCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // RevokeSignatureRequest
 *   jobId: "STRING_VALUE", // required
 *   jobOwner: "STRING_VALUE",
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new RevokeSignatureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeSignatureCommandInput - {@link RevokeSignatureCommandInput}
 * @returns {@link RevokeSignatureCommandOutput}
 * @see {@link RevokeSignatureCommandInput} for command's `input` shape.
 * @see {@link RevokeSignatureCommandOutput} for command's `response` shape.
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
 *          <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class RevokeSignatureCommand extends $Command
  .classBuilder<
    RevokeSignatureCommandInput,
    RevokeSignatureCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WallabyService", "RevokeSignature", {})
  .n("SignerClient", "RevokeSignatureCommand")
  .sc(RevokeSignature)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeSignatureRequest;
      output: {};
    };
    sdk: {
      input: RevokeSignatureCommandInput;
      output: RevokeSignatureCommandOutput;
    };
  };
}
