// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestorePhoneNumberRequest, RestorePhoneNumberResponse } from "../models/models_0";
import { RestorePhoneNumber } from "../schemas/schemas_5_Phone";

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
 * <p>Moves a phone number from the <b>Deletion queue</b> back into the
 *             phone number <b>Inventory</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RestorePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RestorePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
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
 * @param RestorePhoneNumberCommandInput - {@link RestorePhoneNumberCommandInput}
 * @returns {@link RestorePhoneNumberCommandOutput}
 * @see {@link RestorePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link RestorePhoneNumberCommandOutput} for command's `response` shape.
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
export class RestorePhoneNumberCommand extends $Command
  .classBuilder<
    RestorePhoneNumberCommandInput,
    RestorePhoneNumberCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "RestorePhoneNumber", {})
  .n("ChimeClient", "RestorePhoneNumberCommand")
  .sc(RestorePhoneNumber)
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
