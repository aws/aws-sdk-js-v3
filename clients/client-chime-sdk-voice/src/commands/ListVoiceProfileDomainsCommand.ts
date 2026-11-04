// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVoiceProfileDomainsRequest, ListVoiceProfileDomainsResponse } from "../models/models_0";
import { ListVoiceProfileDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVoiceProfileDomainsCommand}.
 */
export interface ListVoiceProfileDomainsCommandInput extends ListVoiceProfileDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListVoiceProfileDomainsCommand}.
 */
export interface ListVoiceProfileDomainsCommandOutput extends ListVoiceProfileDomainsResponse, __MetadataBearer {}

/**
 * Lists the specified voice profile domains in the administrator's AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListVoiceProfileDomainsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListVoiceProfileDomainsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListVoiceProfileDomainsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVoiceProfileDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListVoiceProfileDomainsResponse
 * //   VoiceProfileDomains: [ // VoiceProfileDomainSummaryList
 * //     { // VoiceProfileDomainSummary
 * //       VoiceProfileDomainId: "STRING_VALUE",
 * //       VoiceProfileDomainArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVoiceProfileDomainsCommandInput - {@link ListVoiceProfileDomainsCommandInput}
 * @returns {@link ListVoiceProfileDomainsCommandOutput}
 * @see {@link ListVoiceProfileDomainsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceProfileDomainsCommandOutput} for command's `response` shape.
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
export class ListVoiceProfileDomainsCommand extends command<ListVoiceProfileDomainsCommandInput, ListVoiceProfileDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ListVoiceProfileDomains",
  ListVoiceProfileDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVoiceProfileDomainsRequest;
      output: ListVoiceProfileDomainsResponse;
    };
    sdk: {
      input: ListVoiceProfileDomainsCommandInput;
      output: ListVoiceProfileDomainsCommandOutput;
    };
  };
}
