// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeSigningProfileRequest } from "../models/models_0";
import { RevokeSigningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Changes the state of a signing profile to `REVOKED`. This indicates that signatures generated using the signing profile after an effective start date are no longer valid. A revoked profile is still viewable with the `ListSigningProfiles` operation, but it cannot perform new signing jobs. See [Data Retention](https://docs.aws.amazon.com/signer/latest/developerguide/retention.html) for more information on scheduled deletion of a revoked signing profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
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
export class RevokeSigningProfileCommand extends command<RevokeSigningProfileCommandInput, RevokeSigningProfileCommandOutput>(
  _ep0,
  _mw0,
  "RevokeSigningProfile",
  RevokeSigningProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeSigningProfileRequest;
      output: {};
    };
    sdk: {
      input: RevokeSigningProfileCommandInput;
      output: RevokeSigningProfileCommandOutput;
    };
  };
}
