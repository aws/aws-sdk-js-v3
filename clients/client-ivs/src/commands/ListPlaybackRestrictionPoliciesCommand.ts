// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ListPlaybackRestrictionPoliciesRequest, ListPlaybackRestrictionPoliciesResponse } from "../models/models_0";
import {
  de_ListPlaybackRestrictionPoliciesCommand,
  se_ListPlaybackRestrictionPoliciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlaybackRestrictionPoliciesCommand}.
 */
export interface ListPlaybackRestrictionPoliciesCommandInput extends ListPlaybackRestrictionPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPlaybackRestrictionPoliciesCommand}.
 */
export interface ListPlaybackRestrictionPoliciesCommandOutput
  extends ListPlaybackRestrictionPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Gets summary information about playback restriction policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListPlaybackRestrictionPoliciesCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListPlaybackRestrictionPoliciesCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IvsClient(config);
 * const input = { // ListPlaybackRestrictionPoliciesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPlaybackRestrictionPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPlaybackRestrictionPoliciesResponse
 * //   playbackRestrictionPolicies: [ // PlaybackRestrictionPolicyList // required
 * //     { // PlaybackRestrictionPolicySummary
 * //       arn: "STRING_VALUE", // required
 * //       allowedCountries: [ // PlaybackRestrictionPolicyAllowedCountryList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       allowedOrigins: [ // PlaybackRestrictionPolicyAllowedOriginList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       enableStrictOriginEnforcement: true || false,
 * //       name: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlaybackRestrictionPoliciesCommandInput - {@link ListPlaybackRestrictionPoliciesCommandInput}
 * @returns {@link ListPlaybackRestrictionPoliciesCommandOutput}
 * @see {@link ListPlaybackRestrictionPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackRestrictionPoliciesCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 * @public
 */
export class ListPlaybackRestrictionPoliciesCommand extends $Command
  .classBuilder<
    ListPlaybackRestrictionPoliciesCommandInput,
    ListPlaybackRestrictionPoliciesCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "ListPlaybackRestrictionPolicies", {})
  .n("IvsClient", "ListPlaybackRestrictionPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListPlaybackRestrictionPoliciesCommand)
  .de(de_ListPlaybackRestrictionPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlaybackRestrictionPoliciesRequest;
      output: ListPlaybackRestrictionPoliciesResponse;
    };
    sdk: {
      input: ListPlaybackRestrictionPoliciesCommandInput;
      output: ListPlaybackRestrictionPoliciesCommandOutput;
    };
  };
}
