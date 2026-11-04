// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPhoneNumbersRequest, ListPhoneNumbersResponse } from "../models/models_0";
import { ListPhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the phone numbers for the specified Amazon Chime SDK account, Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice Connector group.
 *
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
 * //       PhoneNumberArn: "STRING_VALUE",
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
export class ListPhoneNumbersCommand extends command<ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput>(
  _ep0,
  _mw0,
  "ListPhoneNumbers",
  ListPhoneNumbers$
) {
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
