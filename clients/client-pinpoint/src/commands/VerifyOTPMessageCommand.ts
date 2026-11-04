// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifyOTPMessageRequest, VerifyOTPMessageResponse } from "../models/models_1";
import { VerifyOTPMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Verify an OTP
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, VerifyOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, VerifyOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
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
export class VerifyOTPMessageCommand extends command<VerifyOTPMessageCommandInput, VerifyOTPMessageCommandOutput>(
  _ep0,
  _mw0,
  "VerifyOTPMessage",
  VerifyOTPMessage$
) {
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
