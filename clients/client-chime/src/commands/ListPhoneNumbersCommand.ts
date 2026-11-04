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
 * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListPhoneNumbersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListPhoneNumbersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListPhoneNumbersRequest
 *   Status: "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
 *   ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 *   FilterName: "AccountId" || "UserId" || "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
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
 * //       ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 * //       Status: "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
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
 * //           Name: "AccountId" || "UserId" || "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 * //           AssociatedTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       CallingName: "STRING_VALUE",
 * //       CallingNameStatus: "Unassigned" || "UpdateInProgress" || "UpdateSucceeded" || "UpdateFailed",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       DeletionTimestamp: new Date("TIMESTAMP"),
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
 * One or more of the resources in the request does not exist in the system.
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
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
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
