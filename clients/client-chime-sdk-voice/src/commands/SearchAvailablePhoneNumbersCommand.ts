// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_0";
import { SearchAvailablePhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Searches the provisioned phone numbers in an organization.
 *
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
 *
 * You don't have the permissions needed to run this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class SearchAvailablePhoneNumbersCommand extends command<SearchAvailablePhoneNumbersCommandInput, SearchAvailablePhoneNumbersCommandOutput>(
  _ep0,
  _mw0,
  "SearchAvailablePhoneNumbers",
  SearchAvailablePhoneNumbers$
) {
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
