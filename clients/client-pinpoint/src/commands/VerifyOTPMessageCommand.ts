// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyOTPMessageRequest, VerifyOTPMessageResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_VerifyOTPMessageCommand, se_VerifyOTPMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyOTPMessageCommand}.
 */
export interface VerifyOTPMessageCommandInput extends VerifyOTPMessageRequest {}
/**
 * @public
 *
 * The output of {@link VerifyOTPMessageCommand}.
 */
export interface VerifyOTPMessageCommandOutput extends VerifyOTPMessageResponse, __MetadataBearer {}

/**
 * <p>Verify an OTP</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, VerifyOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, VerifyOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // VerifyOTPMessageRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   VerifyOTPMessageRequestParameters: { // VerifyOTPMessageRequestParameters
 *     DestinationIdentity: "STRING_VALUE", // required
 *     Otp: "STRING_VALUE", // required
 *     ReferenceId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new VerifyOTPMessageCommand(input);
 * const response = await client.send(command);
 * // { // VerifyOTPMessageResponse
 * //   VerificationResponse: { // VerificationResponse
 * //     Valid: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param VerifyOTPMessageCommandInput - {@link VerifyOTPMessageCommandInput}
 * @returns {@link VerifyOTPMessageCommandOutput}
 * @see {@link VerifyOTPMessageCommandInput} for command's `input` shape.
 * @see {@link VerifyOTPMessageCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class VerifyOTPMessageCommand extends $Command
  .classBuilder<
    VerifyOTPMessageCommandInput,
    VerifyOTPMessageCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "VerifyOTPMessage", {})
  .n("PinpointClient", "VerifyOTPMessageCommand")
  .f(void 0, void 0)
  .ser(se_VerifyOTPMessageCommand)
  .de(de_VerifyOTPMessageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyOTPMessageRequest;
      output: VerifyOTPMessageResponse;
    };
    sdk: {
      input: VerifyOTPMessageCommandInput;
      output: VerifyOTPMessageCommandOutput;
    };
  };
}
