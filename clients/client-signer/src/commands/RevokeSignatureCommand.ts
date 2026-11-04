// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeSignatureRequest } from "../models/models_0";
import { RevokeSignature$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Changes the state of a signing job to `REVOKED`. This indicates that the signature is no longer valid.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The allowed number of job-signing requests has been exceeded.
 *
 * This error supersedes the error `ThrottlingException`.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You signing certificate could not be validated.
 *
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class RevokeSignatureCommand extends command<RevokeSignatureCommandInput, RevokeSignatureCommandOutput>(
  _ep0,
  _mw0,
  "RevokeSignature",
  RevokeSignature$
) {
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
