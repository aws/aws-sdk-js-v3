// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPhoneNumberOrderRequest, GetPhoneNumberOrderResponse } from "../models/models_0";
import { GetPhoneNumberOrder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPhoneNumberOrderCommand}.
 */
export interface GetPhoneNumberOrderCommandInput extends GetPhoneNumberOrderRequest {}
/**
 * @public
 *
 * The output of {@link GetPhoneNumberOrderCommand}.
 */
export interface GetPhoneNumberOrderCommandOutput extends GetPhoneNumberOrderResponse, __MetadataBearer {}

/**
 * Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetPhoneNumberOrderCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetPhoneNumberOrderCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetPhoneNumberOrderRequest
 *   PhoneNumberOrderId: "STRING_VALUE", // required
 * };
 * const command = new GetPhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * // { // GetPhoneNumberOrderResponse
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
 * //     FocDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPhoneNumberOrderCommandInput - {@link GetPhoneNumberOrderCommandInput}
 * @returns {@link GetPhoneNumberOrderCommandOutput}
 * @see {@link GetPhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberOrderCommandOutput} for command's `response` shape.
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
export class GetPhoneNumberOrderCommand extends command<GetPhoneNumberOrderCommandInput, GetPhoneNumberOrderCommandOutput>(
  _ep0,
  _mw0,
  "GetPhoneNumberOrder",
  GetPhoneNumberOrder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPhoneNumberOrderRequest;
      output: GetPhoneNumberOrderResponse;
    };
    sdk: {
      input: GetPhoneNumberOrderCommandInput;
      output: GetPhoneNumberOrderCommandOutput;
    };
  };
}
