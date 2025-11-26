// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import type {
  PinpointSMSVoiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceClient";
import { ListConfigurationSets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationSetsCommand}.
 */
export interface ListConfigurationSetsCommandInput extends ListConfigurationSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationSetsCommand}.
 */
export interface ListConfigurationSetsCommandOutput extends ListConfigurationSetsResponse, __MetadataBearer {}

/**
 * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, ListConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, ListConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * // import type { PinpointSMSVoiceClientConfig } from "@aws-sdk/client-pinpoint-sms-voice";
 * const config = {}; // type is PinpointSMSVoiceClientConfig
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // ListConfigurationSetsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 * };
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationSetsResponse
 * //   ConfigurationSets: [ // ConfigurationSets
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationSetsCommandInput - {@link ListConfigurationSetsCommandInput}
 * @returns {@link ListConfigurationSetsCommandOutput}
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The input you provided is invalid.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  You've issued too many requests to the resource. Wait a few minutes, and then try again.
 *
 * @throws {@link PinpointSMSVoiceServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoice service.</p>
 *
 *
 * @public
 */
export class ListConfigurationSetsCommand extends $Command
  .classBuilder<
    ListConfigurationSetsCommandInput,
    ListConfigurationSetsCommandOutput,
    PinpointSMSVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoice", "ListConfigurationSets", {})
  .n("PinpointSMSVoiceClient", "ListConfigurationSetsCommand")
  .sc(ListConfigurationSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationSetsRequest;
      output: ListConfigurationSetsResponse;
    };
    sdk: {
      input: ListConfigurationSetsCommandInput;
      output: ListConfigurationSetsCommandOutput;
    };
  };
}
