// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SendDestinationNumberVerificationCodeRequest,
  SendDestinationNumberVerificationCodeResult,
} from "../models/models_0";
import { SendDestinationNumberVerificationCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendDestinationNumberVerificationCodeCommand}.
 */
export interface SendDestinationNumberVerificationCodeCommandInput extends SendDestinationNumberVerificationCodeRequest {}
/**
 * @public
 *
 * The output of {@link SendDestinationNumberVerificationCodeCommand}.
 */
export interface SendDestinationNumberVerificationCodeCommandOutput extends SendDestinationNumberVerificationCodeResult, __MetadataBearer {}

/**
 * Before you can send test messages to a verified destination phone number you need to opt-in the verified destination phone number. Creates a new text message with a verification code and send it to a verified destination phone number. Once you have the verification code use VerifyDestinationNumber to opt-in the verified destination phone number to receive messages.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendDestinationNumberVerificationCodeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendDestinationNumberVerificationCodeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendDestinationNumberVerificationCodeRequest
 *   VerifiedDestinationNumberId: "STRING_VALUE", // required
 *   VerificationChannel: "STRING_VALUE", // required
 *   LanguageCode: "STRING_VALUE",
 *   OriginationIdentity: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DestinationCountryParameters: { // DestinationCountryParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SendDestinationNumberVerificationCodeCommand(input);
 * const response = await client.send(command);
 * // { // SendDestinationNumberVerificationCodeResult
 * //   MessageId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendDestinationNumberVerificationCodeCommandInput - {@link SendDestinationNumberVerificationCodeCommandInput}
 * @returns {@link SendDestinationNumberVerificationCodeCommandOutput}
 * @see {@link SendDestinationNumberVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link SendDestinationNumberVerificationCodeCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation exception for a field.
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 *
 * Base exception class for all service exceptions from PinpointSMSVoiceV2 service.
 *
 * @public
 */
export class SendDestinationNumberVerificationCodeCommand extends command<SendDestinationNumberVerificationCodeCommandInput, SendDestinationNumberVerificationCodeCommandOutput>(
  _ep0,
  _mw0,
  "SendDestinationNumberVerificationCode",
  SendDestinationNumberVerificationCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDestinationNumberVerificationCodeRequest;
      output: SendDestinationNumberVerificationCodeResult;
    };
    sdk: {
      input: SendDestinationNumberVerificationCodeCommandInput;
      output: SendDestinationNumberVerificationCodeCommandOutput;
    };
  };
}
