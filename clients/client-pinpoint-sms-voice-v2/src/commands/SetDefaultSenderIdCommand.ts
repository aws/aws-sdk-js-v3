// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetDefaultSenderIdRequest, SetDefaultSenderIdResult } from "../models/models_0";
import { SetDefaultSenderId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetDefaultSenderIdCommand}.
 */
export interface SetDefaultSenderIdCommandInput extends SetDefaultSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultSenderIdCommand}.
 */
export interface SetDefaultSenderIdCommandOutput extends SetDefaultSenderIdResult, __MetadataBearer {}

/**
 * Sets default sender ID on a configuration set.
 *
 * When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetDefaultSenderIdRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   SenderId: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultSenderIdResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   SenderId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultSenderIdCommandInput - {@link SetDefaultSenderIdCommandInput}
 * @returns {@link SetDefaultSenderIdCommandOutput}
 * @see {@link SetDefaultSenderIdCommandInput} for command's `input` shape.
 * @see {@link SetDefaultSenderIdCommandOutput} for command's `response` shape.
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
export class SetDefaultSenderIdCommand extends command<SetDefaultSenderIdCommandInput, SetDefaultSenderIdCommandOutput>(
  _ep0,
  _mw0,
  "SetDefaultSenderId",
  SetDefaultSenderId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultSenderIdRequest;
      output: SetDefaultSenderIdResult;
    };
    sdk: {
      input: SetDefaultSenderIdCommandInput;
      output: SetDefaultSenderIdCommandOutput;
    };
  };
}
