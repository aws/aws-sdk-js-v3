// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSipMediaApplicationRequest, GetSipMediaApplicationResponse } from "../models/models_0";
import { GetSipMediaApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSipMediaApplicationCommand}.
 */
export interface GetSipMediaApplicationCommandInput extends GetSipMediaApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetSipMediaApplicationCommand}.
 */
export interface GetSipMediaApplicationCommandOutput extends GetSipMediaApplicationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the information for a SIP media application, including name,
 *          AWS Region, and endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSipMediaApplicationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSipMediaApplicationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSipMediaApplicationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetSipMediaApplicationResponse
 * //   SipMediaApplication: { // SipMediaApplication
 * //     SipMediaApplicationId: "STRING_VALUE",
 * //     AwsRegion: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Endpoints: [ // SipMediaApplicationEndpointList
 * //       { // SipMediaApplicationEndpoint
 * //         LambdaArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     SipMediaApplicationArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSipMediaApplicationCommandInput - {@link GetSipMediaApplicationCommandInput}
 * @returns {@link GetSipMediaApplicationCommandOutput}
 * @see {@link GetSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationCommandOutput} for command's `response` shape.
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
export class GetSipMediaApplicationCommand extends $Command
  .classBuilder<
    GetSipMediaApplicationCommandInput,
    GetSipMediaApplicationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "GetSipMediaApplication", {})
  .n("ChimeSDKVoiceClient", "GetSipMediaApplicationCommand")
  .sc(GetSipMediaApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSipMediaApplicationRequest;
      output: GetSipMediaApplicationResponse;
    };
    sdk: {
      input: GetSipMediaApplicationCommandInput;
      output: GetSipMediaApplicationCommandOutput;
    };
  };
}
