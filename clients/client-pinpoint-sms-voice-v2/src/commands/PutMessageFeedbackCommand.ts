// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMessageFeedbackRequest, PutMessageFeedbackResult } from "../models/models_0";
import { PutMessageFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMessageFeedbackCommand}.
 */
export interface PutMessageFeedbackCommandInput extends PutMessageFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutMessageFeedbackCommand}.
 */
export interface PutMessageFeedbackCommandOutput extends PutMessageFeedbackResult, __MetadataBearer {}

/**
 * Set the MessageFeedbackStatus as `RECEIVED` or `FAILED` for the passed in MessageId.
 *
 * If you use message feedback then you must update message feedback record. When you receive a signal that a user has received the message you must use `PutMessageFeedback` to set the message feedback record as `RECEIVED`; Otherwise, an hour after the message feedback record is set to `FAILED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutMessageFeedbackCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutMessageFeedbackCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // PutMessageFeedbackRequest
 *   MessageId: "STRING_VALUE", // required
 *   MessageFeedbackStatus: "STRING_VALUE", // required
 * };
 * const command = new PutMessageFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // PutMessageFeedbackResult
 * //   MessageId: "STRING_VALUE", // required
 * //   MessageFeedbackStatus: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutMessageFeedbackCommandInput - {@link PutMessageFeedbackCommandInput}
 * @returns {@link PutMessageFeedbackCommandOutput}
 * @see {@link PutMessageFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutMessageFeedbackCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
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
export class PutMessageFeedbackCommand extends command<PutMessageFeedbackCommandInput, PutMessageFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "PutMessageFeedback",
  PutMessageFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMessageFeedbackRequest;
      output: PutMessageFeedbackResult;
    };
    sdk: {
      input: PutMessageFeedbackCommandInput;
      output: PutMessageFeedbackCommandOutput;
    };
  };
}
