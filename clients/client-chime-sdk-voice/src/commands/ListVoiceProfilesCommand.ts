// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVoiceProfilesRequest, ListVoiceProfilesResponse } from "../models/models_0";
import { ListVoiceProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the voice profiles in a voice profile domain.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
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
export class ListVoiceProfilesCommand extends command<ListVoiceProfilesCommandInput, ListVoiceProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListVoiceProfiles",
  ListVoiceProfiles$
) {
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
