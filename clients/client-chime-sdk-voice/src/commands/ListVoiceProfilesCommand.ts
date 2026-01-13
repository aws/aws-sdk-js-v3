// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVoiceProfilesRequest, ListVoiceProfilesResponse } from "../models/models_0";
import { ListVoiceProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVoiceProfilesCommand}.
 */
export interface ListVoiceProfilesCommandInput extends ListVoiceProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListVoiceProfilesCommand}.
 */
export interface ListVoiceProfilesCommandOutput extends ListVoiceProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the voice profiles in a voice profile domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListVoiceProfilesCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListVoiceProfilesCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListVoiceProfilesRequest
 *   VoiceProfileDomainId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVoiceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListVoiceProfilesResponse
 * //   VoiceProfiles: [ // VoiceProfileSummaryList
 * //     { // VoiceProfileSummary
 * //       VoiceProfileId: "STRING_VALUE",
 * //       VoiceProfileArn: "STRING_VALUE",
 * //       VoiceProfileDomainId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       ExpirationTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVoiceProfilesCommandInput - {@link ListVoiceProfilesCommandInput}
 * @returns {@link ListVoiceProfilesCommandOutput}
 * @see {@link ListVoiceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListVoiceProfilesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class ListVoiceProfilesCommand extends $Command
  .classBuilder<
    ListVoiceProfilesCommandInput,
    ListVoiceProfilesCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "ListVoiceProfiles", {})
  .n("ChimeSDKVoiceClient", "ListVoiceProfilesCommand")
  .sc(ListVoiceProfiles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVoiceProfilesRequest;
      output: ListVoiceProfilesResponse;
    };
    sdk: {
      input: ListVoiceProfilesCommandInput;
      output: ListVoiceProfilesCommandOutput;
    };
  };
}
