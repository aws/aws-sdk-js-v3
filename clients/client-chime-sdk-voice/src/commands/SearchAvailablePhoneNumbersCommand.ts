// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_0";
import { SearchAvailablePhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchAvailablePhoneNumbersCommand}.
 */
export interface SearchAvailablePhoneNumbersCommandInput extends SearchAvailablePhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link SearchAvailablePhoneNumbersCommand}.
 */
export interface SearchAvailablePhoneNumbersCommandOutput extends SearchAvailablePhoneNumbersResponse, __MetadataBearer {}

/**
 * <p>Searches the provisioned phone numbers in an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, SearchAvailablePhoneNumbersCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, SearchAvailablePhoneNumbersCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // SearchAvailablePhoneNumbersRequest
 *   AreaCode: "STRING_VALUE",
 *   City: "STRING_VALUE",
 *   Country: "STRING_VALUE",
 *   State: "STRING_VALUE",
 *   TollFreePrefix: "STRING_VALUE",
 *   PhoneNumberType: "Local" || "TollFree",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // SearchAvailablePhoneNumbersResponse
 * //   E164PhoneNumbers: [ // E164PhoneNumberList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchAvailablePhoneNumbersCommandInput - {@link SearchAvailablePhoneNumbersCommandInput}
 * @returns {@link SearchAvailablePhoneNumbersCommandOutput}
 * @see {@link SearchAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link SearchAvailablePhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class SearchAvailablePhoneNumbersCommand extends $Command
  .classBuilder<
    SearchAvailablePhoneNumbersCommandInput,
    SearchAvailablePhoneNumbersCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "SearchAvailablePhoneNumbers", {})
  .n("ChimeSDKVoiceClient", "SearchAvailablePhoneNumbersCommand")
  .sc(SearchAvailablePhoneNumbers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAvailablePhoneNumbersRequest;
      output: SearchAvailablePhoneNumbersResponse;
    };
    sdk: {
      input: SearchAvailablePhoneNumbersCommandInput;
      output: SearchAvailablePhoneNumbersCommandOutput;
    };
  };
}
