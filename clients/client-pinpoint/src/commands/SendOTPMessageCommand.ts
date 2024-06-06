// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendOTPMessageRequest, SendOTPMessageResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_SendOTPMessageCommand, se_SendOTPMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Send an OTP message</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
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
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @public
 */
export class SendOTPMessageCommand extends $Command
  .classBuilder<
    SendOTPMessageCommandInput,
    SendOTPMessageCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "SendOTPMessage", {})
  .n("PinpointClient", "SendOTPMessageCommand")
  .f(void 0, void 0)
  .ser(se_SendOTPMessageCommand)
  .de(de_SendOTPMessageCommand)
  .build() {}
