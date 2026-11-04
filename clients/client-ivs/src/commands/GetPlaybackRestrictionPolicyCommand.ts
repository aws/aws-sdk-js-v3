// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPlaybackRestrictionPolicyRequest, GetPlaybackRestrictionPolicyResponse } from "../models/models_0";
import { GetPlaybackRestrictionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPlaybackRestrictionPolicyCommand}.
 */
export interface GetPlaybackRestrictionPolicyCommandInput extends GetPlaybackRestrictionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPlaybackRestrictionPolicyCommand}.
 */
export interface GetPlaybackRestrictionPolicyCommandOutput extends GetPlaybackRestrictionPolicyResponse, __MetadataBearer {}

/**
 * Gets the specified playback restriction policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetPlaybackRestrictionPolicyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetPlaybackRestrictionPolicyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetPlaybackRestrictionPolicyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetPlaybackRestrictionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPlaybackRestrictionPolicyResponse
 * //   playbackRestrictionPolicy: { // PlaybackRestrictionPolicy
 * //     arn: "STRING_VALUE", // required
 * //     allowedCountries: [ // PlaybackRestrictionPolicyAllowedCountryList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     allowedOrigins: [ // PlaybackRestrictionPolicyAllowedOriginList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     enableStrictOriginEnforcement: true || false,
 * //     name: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlaybackRestrictionPolicyCommandInput - {@link GetPlaybackRestrictionPolicyCommandInput}
 * @returns {@link GetPlaybackRestrictionPolicyCommandOutput}
 * @see {@link GetPlaybackRestrictionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackRestrictionPolicyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class GetPlaybackRestrictionPolicyCommand extends command<GetPlaybackRestrictionPolicyCommandInput, GetPlaybackRestrictionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetPlaybackRestrictionPolicy",
  GetPlaybackRestrictionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlaybackRestrictionPolicyRequest;
      output: GetPlaybackRestrictionPolicyResponse;
    };
    sdk: {
      input: GetPlaybackRestrictionPolicyCommandInput;
      output: GetPlaybackRestrictionPolicyCommandOutput;
    };
  };
}
