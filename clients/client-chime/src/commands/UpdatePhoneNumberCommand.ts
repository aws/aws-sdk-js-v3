// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePhoneNumberRequest, UpdatePhoneNumberResponse } from "../models/models_0";
import { UpdatePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberCommand}.
 */
export interface UpdatePhoneNumberCommandInput extends UpdatePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberCommand}.
 */
export interface UpdatePhoneNumberCommandOutput extends UpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.
 *
 * For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.
 *
 * Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // UpdatePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 *   CallingName: "STRING_VALUE",
 * };
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePhoneNumberResponse
 * //   PhoneNumber: { // PhoneNumber
 * //     PhoneNumberId: "STRING_VALUE",
 * //     E164PhoneNumber: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     Type: "Local" || "TollFree",
 * //     ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 * //     Status: "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
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
 * //         Name: "AccountId" || "UserId" || "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 * //         AssociatedTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     CallingName: "STRING_VALUE",
 * //     CallingNameStatus: "Unassigned" || "UpdateInProgress" || "UpdateSucceeded" || "UpdateFailed",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     DeletionTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePhoneNumberCommandInput - {@link UpdatePhoneNumberCommandInput}
 * @returns {@link UpdatePhoneNumberCommandOutput}
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
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
export class UpdatePhoneNumberCommand extends command<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePhoneNumber",
  UpdatePhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberRequest;
      output: UpdatePhoneNumberResponse;
    };
    sdk: {
      input: UpdatePhoneNumberCommandInput;
      output: UpdatePhoneNumberCommandOutput;
    };
  };
}
