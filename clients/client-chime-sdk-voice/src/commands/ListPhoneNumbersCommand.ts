// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPhoneNumbersRequest, ListPhoneNumbersResponse } from "../models/models_0";
import { ListPhoneNumbers } from "../schemas/schemas_4_Phone";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPhoneNumbersCommand}.
 */
export interface ListPhoneNumbersCommandInput extends ListPhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link ListPhoneNumbersCommand}.
 */
export interface ListPhoneNumbersCommandOutput extends ListPhoneNumbersResponse, __MetadataBearer {}

/**
 * <p>Lists the phone numbers for the specified Amazon Chime SDK account,
 *          Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice
 *          Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListPhoneNumbersCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListPhoneNumbersCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListPhoneNumbersRequest
 *   Status: "STRING_VALUE",
 *   ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 *   FilterName: "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 *   FilterValue: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // ListPhoneNumbersResponse
 * //   PhoneNumbers: [ // PhoneNumberList
 * //     { // PhoneNumber
 * //       PhoneNumberId: "STRING_VALUE",
 * //       E164PhoneNumber: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       Type: "Local" || "TollFree",
 * //       ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 * //       Status: "Cancelled" || "PortinCancelRequested" || "PortinInProgress" || "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
 * //       Capabilities: { // PhoneNumberCapabilities
 * //         InboundCall: true || false,
 * //         OutboundCall: true || false,
 * //         InboundSMS: true || false,
 * //         OutboundSMS: true || false,
 * //         InboundMMS: true || false,
 * //         OutboundMMS: true || false,
 * //       },
 * //       Associations: [ // PhoneNumberAssociationList
 * //         { // PhoneNumberAssociation
 * //           Value: "STRING_VALUE",
 * //           Name: "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 * //           AssociatedTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       CallingName: "STRING_VALUE",
 * //       CallingNameStatus: "Unassigned" || "UpdateInProgress" || "UpdateSucceeded" || "UpdateFailed",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       DeletionTimestamp: new Date("TIMESTAMP"),
 * //       OrderId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPhoneNumbersCommandInput - {@link ListPhoneNumbersCommandInput}
 * @returns {@link ListPhoneNumbersCommandOutput}
 * @see {@link ListPhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersCommandOutput} for command's `response` shape.
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
export class ListPhoneNumbersCommand extends $Command
  .classBuilder<
    ListPhoneNumbersCommandInput,
    ListPhoneNumbersCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "ListPhoneNumbers", {})
  .n("ChimeSDKVoiceClient", "ListPhoneNumbersCommand")
  .sc(ListPhoneNumbers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPhoneNumbersRequest;
      output: ListPhoneNumbersResponse;
    };
    sdk: {
      input: ListPhoneNumbersCommandInput;
      output: ListPhoneNumbersCommandOutput;
    };
  };
}
