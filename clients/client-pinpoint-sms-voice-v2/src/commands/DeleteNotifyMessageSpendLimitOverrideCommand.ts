// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteNotifyMessageSpendLimitOverrideRequest,
  DeleteNotifyMessageSpendLimitOverrideResult,
} from "../models/models_0";
import { DeleteNotifyMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotifyMessageSpendLimitOverrideCommand}.
 */
export interface DeleteNotifyMessageSpendLimitOverrideCommandInput extends DeleteNotifyMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotifyMessageSpendLimitOverrideCommand}.
 */
export interface DeleteNotifyMessageSpendLimitOverrideCommandOutput extends DeleteNotifyMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * Deletes an account-level monthly spending limit override for sending notify messages. Deleting a spend limit override will set the `EnforcedLimit` to equal the `MaxLimit`, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see [Quotas](https://docs.aws.amazon.com/sms-voice/latest/userguide/quotas.html) in the *End User Messaging SMS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteNotifyMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteNotifyMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteNotifyMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNotifyMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteNotifyMessageSpendLimitOverrideCommandInput - {@link DeleteNotifyMessageSpendLimitOverrideCommandInput}
 * @returns {@link DeleteNotifyMessageSpendLimitOverrideCommandOutput}
 * @see {@link DeleteNotifyMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteNotifyMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
 * @example DeleteNotifyMessageSpendLimitOverride
 * ```javascript
 * // Delete the monthly spend limit override for notify messages, reverting to the default limit.
 * const input = { /* empty *\/ };
 * const command = new DeleteNotifyMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MonthlyLimit: 1000
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNotifyMessageSpendLimitOverrideCommand extends command<DeleteNotifyMessageSpendLimitOverrideCommandInput, DeleteNotifyMessageSpendLimitOverrideCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotifyMessageSpendLimitOverride",
  DeleteNotifyMessageSpendLimitOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteNotifyMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: DeleteNotifyMessageSpendLimitOverrideCommandInput;
      output: DeleteNotifyMessageSpendLimitOverrideCommandOutput;
    };
  };
}
