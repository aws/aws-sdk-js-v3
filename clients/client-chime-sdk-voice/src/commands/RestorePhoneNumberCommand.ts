// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RestorePhoneNumberRequest, RestorePhoneNumberResponse } from "../models/models_0";
import { RestorePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestorePhoneNumberCommand}.
 */
export interface RestorePhoneNumberCommandInput extends RestorePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link RestorePhoneNumberCommand}.
 */
export interface RestorePhoneNumberCommandOutput extends RestorePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Restores a deleted phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, RestorePhoneNumberCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, RestorePhoneNumberCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // RestorePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new RestorePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // RestorePhoneNumberResponse
 * //   PhoneNumber: { // PhoneNumber
 * //     PhoneNumberId: "STRING_VALUE",
 * //     E164PhoneNumber: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     Type: "Local" || "TollFree",
 * //     ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 * //     Status: "Cancelled" || "PortinCancelRequested" || "PortinInProgress" || "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
 * //     Capabilities: { // PhoneNumberCapabilities
 * //       InboundCall: true || false,
 * //       OutboundCall: true || false,
 * //       InboundSMS: true || false,
 * //       OutboundSMS: true || false,
 * //       InboundMMS: true || false,
 * //       OutboundMMS: true || false,
 * //     },
 * //     Associations: [ // PhoneNumberAssociationList
 * //       { // PhoneNumberAssociation
 * //         Value: "STRING_VALUE",
 * //         Name: "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 * //         AssociatedTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     CallingName: "STRING_VALUE",
 * //     CallingNameStatus: "Unassigned" || "UpdateInProgress" || "UpdateSucceeded" || "UpdateFailed",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     DeletionTimestamp: new Date("TIMESTAMP"),
 * //     OrderId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestorePhoneNumberCommandInput - {@link RestorePhoneNumberCommandInput}
 * @returns {@link RestorePhoneNumberCommandOutput}
 * @see {@link RestorePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link RestorePhoneNumberCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class RestorePhoneNumberCommand extends $Command
  .classBuilder<
    RestorePhoneNumberCommandInput,
    RestorePhoneNumberCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "RestorePhoneNumber", {})
  .n("ChimeSDKVoiceClient", "RestorePhoneNumberCommand")
  .sc(RestorePhoneNumber$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestorePhoneNumberRequest;
      output: RestorePhoneNumberResponse;
    };
    sdk: {
      input: RestorePhoneNumberCommandInput;
      output: RestorePhoneNumberCommandOutput;
    };
  };
}
