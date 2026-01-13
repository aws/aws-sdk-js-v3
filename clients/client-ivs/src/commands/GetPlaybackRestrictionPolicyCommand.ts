// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { GetPlaybackRestrictionPolicyRequest, GetPlaybackRestrictionPolicyResponse } from "../models/models_0";
import { GetPlaybackRestrictionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the specified playback restriction policy.</p>
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
export class GetPlaybackRestrictionPolicyCommand extends $Command
  .classBuilder<
    GetPlaybackRestrictionPolicyCommandInput,
    GetPlaybackRestrictionPolicyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "GetPlaybackRestrictionPolicy", {})
  .n("IvsClient", "GetPlaybackRestrictionPolicyCommand")
  .sc(GetPlaybackRestrictionPolicy$)
  .build() {
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
