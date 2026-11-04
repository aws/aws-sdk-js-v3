// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteMediaMessageSpendLimitOverrideRequest,
  DeleteMediaMessageSpendLimitOverrideResult,
} from "../models/models_0";
import { DeleteMediaMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMediaMessageSpendLimitOverrideCommand}.
 */
export interface DeleteMediaMessageSpendLimitOverrideCommandInput extends DeleteMediaMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMediaMessageSpendLimitOverrideCommand}.
 */
export interface DeleteMediaMessageSpendLimitOverrideCommandOutput extends DeleteMediaMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * Deletes an account-level monthly spending limit override for sending multimedia messages (MMS). Deleting a spend limit override will set the `EnforcedLimit` to equal the `MaxLimit`, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see [Quotas for Server Migration Service](https://docs.aws.amazon.com/sms-voice/latest/userguide/quotas.html) in the *Server Migration Service User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteMediaMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteMediaMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteMediaMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMediaMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteMediaMessageSpendLimitOverrideCommandInput - {@link DeleteMediaMessageSpendLimitOverrideCommandInput}
 * @returns {@link DeleteMediaMessageSpendLimitOverrideCommandOutput}
 * @see {@link DeleteMediaMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteMediaMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class DeleteMediaMessageSpendLimitOverrideCommand extends command<DeleteMediaMessageSpendLimitOverrideCommandInput, DeleteMediaMessageSpendLimitOverrideCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMediaMessageSpendLimitOverride",
  DeleteMediaMessageSpendLimitOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteMediaMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: DeleteMediaMessageSpendLimitOverrideCommandInput;
      output: DeleteMediaMessageSpendLimitOverrideCommandOutput;
    };
  };
}
