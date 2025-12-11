// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPhoneNumbersRequest, ListPhoneNumbersResponse } from "../models/models_0";
import { ListPhoneNumbers } from "../schemas/schemas_0";

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
 * <p>Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.</p>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class ListPhoneNumbersCommand extends $Command
  .classBuilder<
    ListPhoneNumbersCommandInput,
    ListPhoneNumbersCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "ListPhoneNumbers", {})
  .n("ChimeClient", "ListPhoneNumbersCommand")
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
