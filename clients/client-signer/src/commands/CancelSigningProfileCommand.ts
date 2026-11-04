// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelSigningProfileRequest } from "../models/models_0";
import { CancelSigningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Changes the state of an `ACTIVE` signing profile to `CANCELED`. A canceled profile is still viewable with the `ListSigningProfiles` operation, but it cannot perform new signing jobs. See [Data Retention](https://docs.aws.amazon.com/signer/latest/developerguide/retention.html) for more information on scheduled deletion of a canceled signing profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, CancelSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, CancelSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
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
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class CancelSigningProfileCommand extends command<CancelSigningProfileCommandInput, CancelSigningProfileCommandOutput>(
  _ep0,
  _mw0,
  "CancelSigningProfile",
  CancelSigningProfile$
) {
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
