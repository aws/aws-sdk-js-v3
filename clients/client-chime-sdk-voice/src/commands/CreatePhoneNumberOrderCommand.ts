// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePhoneNumberOrderRequest, CreatePhoneNumberOrderResponse } from "../models/models_0";
import { CreatePhoneNumberOrder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePhoneNumberOrderCommand}.
 */
export interface CreatePhoneNumberOrderCommandInput extends CreatePhoneNumberOrderRequest {}
/**
 * @public
 *
 * The output of {@link CreatePhoneNumberOrderCommand}.
 */
export interface CreatePhoneNumberOrderCommandOutput extends CreatePhoneNumberOrderResponse, __MetadataBearer {}

/**
 * <p>Creates an order for phone numbers to be provisioned. For numbers outside the U.S., you must use the Amazon Chime SDK SIP media application dial-in product type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreatePhoneNumberOrderCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreatePhoneNumberOrderCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreatePhoneNumberOrderRequest
 *   ProductType: "VoiceConnector" || "SipMediaApplicationDialIn", // required
 *   E164PhoneNumbers: [ // E164PhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 * };
 * const command = new CreatePhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * // { // CreatePhoneNumberOrderResponse
 * //   PhoneNumberOrder: { // PhoneNumberOrder
 * //     PhoneNumberOrderId: "STRING_VALUE",
 * //     ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 * //     Status: "Processing" || "Successful" || "Failed" || "Partial" || "PendingDocuments" || "Submitted" || "FOC" || "ChangeRequested" || "Exception" || "CancelRequested" || "Cancelled",
 * //     OrderType: "New" || "Porting",
 * //     OrderedPhoneNumbers: [ // OrderedPhoneNumberList
 * //       { // OrderedPhoneNumber
 * //         E164PhoneNumber: "STRING_VALUE",
 * //         Status: "Processing" || "Acquired" || "Failed",
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     FocDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePhoneNumberOrderCommandInput - {@link CreatePhoneNumberOrderCommandInput}
 * @returns {@link CreatePhoneNumberOrderCommandOutput}
 * @see {@link CreatePhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link CreatePhoneNumberOrderCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class CreatePhoneNumberOrderCommand extends $Command
  .classBuilder<
    CreatePhoneNumberOrderCommandInput,
    CreatePhoneNumberOrderCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "CreatePhoneNumberOrder", {})
  .n("ChimeSDKVoiceClient", "CreatePhoneNumberOrderCommand")
  .sc(CreatePhoneNumberOrder$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePhoneNumberOrderRequest;
      output: CreatePhoneNumberOrderResponse;
    };
    sdk: {
      input: CreatePhoneNumberOrderCommandInput;
      output: CreatePhoneNumberOrderCommandOutput;
    };
  };
}
