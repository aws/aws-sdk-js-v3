// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SetDefaultMessageFeedbackEnabledRequest,
  SetDefaultMessageFeedbackEnabledResult,
} from "../models/models_0";
import { SetDefaultMessageFeedbackEnabled$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetDefaultMessageFeedbackEnabledCommand}.
 */
export interface SetDefaultMessageFeedbackEnabledCommandInput extends SetDefaultMessageFeedbackEnabledRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultMessageFeedbackEnabledCommand}.
 */
export interface SetDefaultMessageFeedbackEnabledCommandOutput extends SetDefaultMessageFeedbackEnabledResult, __MetadataBearer {}

/**
 * Sets a configuration set's default for message feedback.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultMessageFeedbackEnabledCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultMessageFeedbackEnabledCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetDefaultMessageFeedbackEnabledRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   MessageFeedbackEnabled: true || false, // required
 * };
 * const command = new SetDefaultMessageFeedbackEnabledCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultMessageFeedbackEnabledResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   MessageFeedbackEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param SetDefaultMessageFeedbackEnabledCommandInput - {@link SetDefaultMessageFeedbackEnabledCommandInput}
 * @returns {@link SetDefaultMessageFeedbackEnabledCommandOutput}
 * @see {@link SetDefaultMessageFeedbackEnabledCommandInput} for command's `input` shape.
 * @see {@link SetDefaultMessageFeedbackEnabledCommandOutput} for command's `response` shape.
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
export class SetDefaultMessageFeedbackEnabledCommand extends command<SetDefaultMessageFeedbackEnabledCommandInput, SetDefaultMessageFeedbackEnabledCommandOutput>(
  _ep0,
  _mw0,
  "SetDefaultMessageFeedbackEnabled",
  SetDefaultMessageFeedbackEnabled$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultMessageFeedbackEnabledRequest;
      output: SetDefaultMessageFeedbackEnabledResult;
    };
    sdk: {
      input: SetDefaultMessageFeedbackEnabledCommandInput;
      output: SetDefaultMessageFeedbackEnabledCommandOutput;
    };
  };
}
