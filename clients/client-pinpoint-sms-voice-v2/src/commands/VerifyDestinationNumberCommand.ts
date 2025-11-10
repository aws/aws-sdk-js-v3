// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyDestinationNumberRequest, VerifyDestinationNumberResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { VerifyDestinationNumber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyDestinationNumberCommand}.
 */
export interface VerifyDestinationNumberCommandInput extends VerifyDestinationNumberRequest {}
/**
 * @public
 *
 * The output of {@link VerifyDestinationNumberCommand}.
 */
export interface VerifyDestinationNumberCommandOutput extends VerifyDestinationNumberResult, __MetadataBearer {}

/**
 * <p>Use the verification code that was received by the verified destination phone number to opt-in the verified destination phone number to receive more messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, VerifyDestinationNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, VerifyDestinationNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // VerifyDestinationNumberRequest
 *   VerifiedDestinationNumberId: "STRING_VALUE", // required
 *   VerificationCode: "STRING_VALUE", // required
 * };
 * const command = new VerifyDestinationNumberCommand(input);
 * const response = await client.send(command);
 * // { // VerifyDestinationNumberResult
 * //   VerifiedDestinationNumberArn: "STRING_VALUE", // required
 * //   VerifiedDestinationNumberId: "STRING_VALUE", // required
 * //   DestinationPhoneNumber: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param VerifyDestinationNumberCommandInput - {@link VerifyDestinationNumberCommandInput}
 * @returns {@link VerifyDestinationNumberCommandOutput}
 * @see {@link VerifyDestinationNumberCommandInput} for command's `input` shape.
 * @see {@link VerifyDestinationNumberCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class VerifyDestinationNumberCommand extends $Command
  .classBuilder<
    VerifyDestinationNumberCommandInput,
    VerifyDestinationNumberCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "VerifyDestinationNumber", {})
  .n("PinpointSMSVoiceV2Client", "VerifyDestinationNumberCommand")
  .sc(VerifyDestinationNumber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyDestinationNumberRequest;
      output: VerifyDestinationNumberResult;
    };
    sdk: {
      input: VerifyDestinationNumberCommandInput;
      output: VerifyDestinationNumberCommandOutput;
    };
  };
}
