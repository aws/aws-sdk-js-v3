// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type {
  CreatePlaybackRestrictionPolicyRequest,
  CreatePlaybackRestrictionPolicyResponse,
} from "../models/models_0";
import { CreatePlaybackRestrictionPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlaybackRestrictionPolicyCommand}.
 */
export interface CreatePlaybackRestrictionPolicyCommandInput extends CreatePlaybackRestrictionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreatePlaybackRestrictionPolicyCommand}.
 */
export interface CreatePlaybackRestrictionPolicyCommandOutput
  extends CreatePlaybackRestrictionPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new playback restriction policy, for constraining playback by countries and/or
 *       origins.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreatePlaybackRestrictionPolicyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreatePlaybackRestrictionPolicyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // CreatePlaybackRestrictionPolicyRequest
 *   allowedCountries: [ // PlaybackRestrictionPolicyAllowedCountryList
 *     "STRING_VALUE",
 *   ],
 *   allowedOrigins: [ // PlaybackRestrictionPolicyAllowedOriginList
 *     "STRING_VALUE",
 *   ],
 *   enableStrictOriginEnforcement: true || false,
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlaybackRestrictionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlaybackRestrictionPolicyResponse
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
 * @param CreatePlaybackRestrictionPolicyCommandInput - {@link CreatePlaybackRestrictionPolicyCommandInput}
 * @returns {@link CreatePlaybackRestrictionPolicyCommandOutput}
 * @see {@link CreatePlaybackRestrictionPolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePlaybackRestrictionPolicyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
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
export class CreatePlaybackRestrictionPolicyCommand extends $Command
  .classBuilder<
    CreatePlaybackRestrictionPolicyCommandInput,
    CreatePlaybackRestrictionPolicyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "CreatePlaybackRestrictionPolicy", {})
  .n("IvsClient", "CreatePlaybackRestrictionPolicyCommand")
  .sc(CreatePlaybackRestrictionPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlaybackRestrictionPolicyRequest;
      output: CreatePlaybackRestrictionPolicyResponse;
    };
    sdk: {
      input: CreatePlaybackRestrictionPolicyCommandInput;
      output: CreatePlaybackRestrictionPolicyCommandOutput;
    };
  };
}
