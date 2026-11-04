// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendOTPMessageRequest, SendOTPMessageResponse } from "../models/models_1";
import { SendOTPMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendOTPMessageCommand}.
 */
export interface SendOTPMessageCommandInput extends SendOTPMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendOTPMessageCommand}.
 */
export interface SendOTPMessageCommandOutput extends SendOTPMessageResponse, __MetadataBearer {}

/**
 * Send an OTP message
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // SendOTPMessageRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SendOTPMessageRequestParameters: { // SendOTPMessageRequestParameters
 *     AllowedAttempts: Number("int"),
 *     BrandName: "STRING_VALUE", // required
 *     Channel: "STRING_VALUE", // required
 *     CodeLength: Number("int"),
 *     DestinationIdentity: "STRING_VALUE", // required
 *     EntityId: "STRING_VALUE",
 *     Language: "STRING_VALUE",
 *     OriginationIdentity: "STRING_VALUE", // required
 *     ReferenceId: "STRING_VALUE", // required
 *     TemplateId: "STRING_VALUE",
 *     ValidityPeriod: Number("int"),
 *   },
 * };
 * const command = new SendOTPMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendOTPMessageResponse
 * //   MessageResponse: { // MessageResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     EndpointResult: { // MapOfEndpointMessageResult
 * //       "<keys>": { // EndpointMessageResult
 * //         Address: "STRING_VALUE",
 * //         DeliveryStatus: "SUCCESSFUL" || "THROTTLED" || "TEMPORARY_FAILURE" || "PERMANENT_FAILURE" || "UNKNOWN_FAILURE" || "OPT_OUT" || "DUPLICATE", // required
 * //         MessageId: "STRING_VALUE",
 * //         StatusCode: Number("int"), // required
 * //         StatusMessage: "STRING_VALUE",
 * //         UpdatedToken: "STRING_VALUE",
 * //       },
 * //     },
 * //     RequestId: "STRING_VALUE",
 * //     Result: { // MapOfMessageResult
 * //       "<keys>": { // MessageResult
 * //         DeliveryStatus: "SUCCESSFUL" || "THROTTLED" || "TEMPORARY_FAILURE" || "PERMANENT_FAILURE" || "UNKNOWN_FAILURE" || "OPT_OUT" || "DUPLICATE", // required
 * //         MessageId: "STRING_VALUE",
 * //         StatusCode: Number("int"), // required
 * //         StatusMessage: "STRING_VALUE",
 * //         UpdatedToken: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SendOTPMessageCommandInput - {@link SendOTPMessageCommandInput}
 * @returns {@link SendOTPMessageCommandOutput}
 * @see {@link SendOTPMessageCommandInput} for command's `input` shape.
 * @see {@link SendOTPMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class SendOTPMessageCommand extends command<SendOTPMessageCommandInput, SendOTPMessageCommandOutput>(
  _ep0,
  _mw0,
  "SendOTPMessage",
  SendOTPMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendOTPMessageRequest;
      output: SendOTPMessageResponse;
    };
    sdk: {
      input: SendOTPMessageCommandInput;
      output: SendOTPMessageCommandOutput;
    };
  };
}
