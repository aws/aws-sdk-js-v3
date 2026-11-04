// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SetMediaMessageSpendLimitOverrideRequest,
  SetMediaMessageSpendLimitOverrideResult,
} from "../models/models_0";
import { SetMediaMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetMediaMessageSpendLimitOverrideCommand}.
 */
export interface SetMediaMessageSpendLimitOverrideCommandInput extends SetMediaMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetMediaMessageSpendLimitOverrideCommand}.
 */
export interface SetMediaMessageSpendLimitOverrideCommandOutput extends SetMediaMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * Sets an account level monthly spend limit override for sending MMS messages. The requested spend limit must be less than or equal to the `MaxLimit`, which is set by Amazon Web Services.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetMediaMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetMediaMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetMediaMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetMediaMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetMediaMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetMediaMessageSpendLimitOverrideCommandInput - {@link SetMediaMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetMediaMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetMediaMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetMediaMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class SetMediaMessageSpendLimitOverrideCommand extends command<SetMediaMessageSpendLimitOverrideCommandInput, SetMediaMessageSpendLimitOverrideCommandOutput>(
  _ep0,
  _mw0,
  "SetMediaMessageSpendLimitOverride",
  SetMediaMessageSpendLimitOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetMediaMessageSpendLimitOverrideRequest;
      output: SetMediaMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: SetMediaMessageSpendLimitOverrideCommandInput;
      output: SetMediaMessageSpendLimitOverrideCommandOutput;
    };
  };
}
