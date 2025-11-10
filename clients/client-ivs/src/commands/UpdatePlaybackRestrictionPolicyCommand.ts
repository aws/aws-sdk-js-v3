// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { UpdatePlaybackRestrictionPolicyRequest, UpdatePlaybackRestrictionPolicyResponse } from "../models/models_0";
import { UpdatePlaybackRestrictionPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlaybackRestrictionPolicyCommand}.
 */
export interface UpdatePlaybackRestrictionPolicyCommandInput extends UpdatePlaybackRestrictionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePlaybackRestrictionPolicyCommand}.
 */
export interface UpdatePlaybackRestrictionPolicyCommandOutput
  extends UpdatePlaybackRestrictionPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Updates a specified playback restriction policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, UpdatePlaybackRestrictionPolicyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, UpdatePlaybackRestrictionPolicyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // UpdatePlaybackRestrictionPolicyRequest
 *   arn: "STRING_VALUE", // required
 *   allowedCountries: [ // PlaybackRestrictionPolicyAllowedCountryList
 *     "STRING_VALUE",
 *   ],
 *   allowedOrigins: [ // PlaybackRestrictionPolicyAllowedOriginList
 *     "STRING_VALUE",
 *   ],
 *   enableStrictOriginEnforcement: true || false,
 *   name: "STRING_VALUE",
 * };
 * const command = new UpdatePlaybackRestrictionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePlaybackRestrictionPolicyResponse
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
 * @param UpdatePlaybackRestrictionPolicyCommandInput - {@link UpdatePlaybackRestrictionPolicyCommandInput}
 * @returns {@link UpdatePlaybackRestrictionPolicyCommandOutput}
 * @see {@link UpdatePlaybackRestrictionPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePlaybackRestrictionPolicyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class UpdatePlaybackRestrictionPolicyCommand extends $Command
  .classBuilder<
    UpdatePlaybackRestrictionPolicyCommandInput,
    UpdatePlaybackRestrictionPolicyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "UpdatePlaybackRestrictionPolicy", {})
  .n("IvsClient", "UpdatePlaybackRestrictionPolicyCommand")
  .sc(UpdatePlaybackRestrictionPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePlaybackRestrictionPolicyRequest;
      output: UpdatePlaybackRestrictionPolicyResponse;
    };
    sdk: {
      input: UpdatePlaybackRestrictionPolicyCommandInput;
      output: UpdatePlaybackRestrictionPolicyCommandOutput;
    };
  };
}
