// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVoiceProfileDomainsRequest, ListVoiceProfileDomainsResponse } from "../models/models_0";
import { ListVoiceProfileDomains } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the specified voice profile domains in the administrator's AWS account.
 *          </p>
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
export class ListVoiceProfileDomainsCommand extends $Command
  .classBuilder<
    ListVoiceProfileDomainsCommandInput,
    ListVoiceProfileDomainsCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "ListVoiceProfileDomains", {})
  .n("ChimeSDKVoiceClient", "ListVoiceProfileDomainsCommand")
  .sc(ListVoiceProfileDomains)
  .build() {
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
