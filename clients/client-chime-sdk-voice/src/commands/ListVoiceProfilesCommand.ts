// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListVoiceProfilesRequest,
  ListVoiceProfilesResponse,
  ListVoiceProfilesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListVoiceProfilesCommand, se_ListVoiceProfilesCommand } from "../protocols/Aws_restJson1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "ListVoiceProfiles", {})
  .n("ChimeSDKVoiceClient", "ListVoiceProfilesCommand")
  .f(void 0, ListVoiceProfilesResponseFilterSensitiveLog)
  .ser(se_ListVoiceProfilesCommand)
  .de(de_ListVoiceProfilesCommand)
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
