// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPhoneNumberOrdersRequest, ListPhoneNumberOrdersResponse } from "../models/models_0";
import { ListPhoneNumberOrders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPhoneNumberOrdersCommand}.
 */
export interface ListPhoneNumberOrdersCommandInput extends ListPhoneNumberOrdersRequest {}
/**
 * @public
 *
 * The output of {@link ListPhoneNumberOrdersCommand}.
 */
export interface ListPhoneNumberOrdersCommandOutput extends ListPhoneNumberOrdersResponse, __MetadataBearer {}

/**
 * Lists the phone numbers for an administrator's Amazon Chime SDK account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListPhoneNumberOrdersCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListPhoneNumberOrdersCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListPhoneNumberOrdersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPhoneNumberOrdersCommand(input);
 * const response = await client.send(command);
 * // { // ListPhoneNumberOrdersResponse
 * //   PhoneNumberOrders: [ // PhoneNumberOrderList
 * //     { // PhoneNumberOrder
 * //       PhoneNumberOrderId: "STRING_VALUE",
 * //       ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 * //       Status: "Processing" || "Successful" || "Failed" || "Partial" || "PendingDocuments" || "Submitted" || "FOC" || "ChangeRequested" || "Exception" || "CancelRequested" || "Cancelled",
 * //       OrderType: "New" || "Porting",
 * //       OrderedPhoneNumbers: [ // OrderedPhoneNumberList
 * //         { // OrderedPhoneNumber
 * //           E164PhoneNumber: "STRING_VALUE",
 * //           Status: "Processing" || "Acquired" || "Failed",
 * //         },
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       FocDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPhoneNumberOrdersCommandInput - {@link ListPhoneNumberOrdersCommandInput}
 * @returns {@link ListPhoneNumberOrdersCommandOutput}
 * @see {@link ListPhoneNumberOrdersCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumberOrdersCommandOutput} for command's `response` shape.
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
export class ListPhoneNumberOrdersCommand extends command<ListPhoneNumberOrdersCommandInput, ListPhoneNumberOrdersCommandOutput>(
  _ep0,
  _mw0,
  "ListPhoneNumberOrders",
  ListPhoneNumberOrders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPhoneNumberOrdersRequest;
      output: ListPhoneNumberOrdersResponse;
    };
    sdk: {
      input: ListPhoneNumberOrdersCommandInput;
      output: ListPhoneNumberOrdersCommandOutput;
    };
  };
}
