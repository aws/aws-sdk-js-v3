// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteRcsMessageSpendLimitOverrideRequest,
  DeleteRcsMessageSpendLimitOverrideResult,
} from "../models/models_0";
import { DeleteRcsMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRcsMessageSpendLimitOverrideCommand}.
 */
export interface DeleteRcsMessageSpendLimitOverrideCommandInput extends DeleteRcsMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRcsMessageSpendLimitOverrideCommand}.
 */
export interface DeleteRcsMessageSpendLimitOverrideCommandOutput extends DeleteRcsMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * Deletes an account-level monthly spending limit override for sending RCS messages. Deleting a spend limit override sets the `EnforcedLimit` to equal the `MaxLimit`, which is set by Amazon Web Services.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteRcsMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteRcsMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteRcsMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRcsMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteRcsMessageSpendLimitOverrideCommandInput - {@link DeleteRcsMessageSpendLimitOverrideCommandInput}
 * @returns {@link DeleteRcsMessageSpendLimitOverrideCommandOutput}
 * @see {@link DeleteRcsMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteRcsMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class DeleteRcsMessageSpendLimitOverrideCommand extends command<DeleteRcsMessageSpendLimitOverrideCommandInput, DeleteRcsMessageSpendLimitOverrideCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRcsMessageSpendLimitOverride",
  DeleteRcsMessageSpendLimitOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteRcsMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: DeleteRcsMessageSpendLimitOverrideCommandInput;
      output: DeleteRcsMessageSpendLimitOverrideCommandOutput;
    };
  };
}
