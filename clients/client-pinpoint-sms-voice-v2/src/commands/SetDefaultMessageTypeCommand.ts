// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetDefaultMessageTypeRequest, SetDefaultMessageTypeResult } from "../models/models_0";
import { SetDefaultMessageType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetDefaultMessageTypeCommand}.
 */
export interface SetDefaultMessageTypeCommandInput extends SetDefaultMessageTypeRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultMessageTypeCommand}.
 */
export interface SetDefaultMessageTypeCommandOutput extends SetDefaultMessageTypeResult, __MetadataBearer {}

/**
 * Sets the default message type on a configuration set.
 *
 * Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose **Transactional**. If you plan to send messages that contain marketing material or other promotional content, choose **Promotional**. This setting applies to your entire Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultMessageTypeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultMessageTypeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetDefaultMessageTypeRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   MessageType: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultMessageTypeCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultMessageTypeResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   MessageType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultMessageTypeCommandInput - {@link SetDefaultMessageTypeCommandInput}
 * @returns {@link SetDefaultMessageTypeCommandOutput}
 * @see {@link SetDefaultMessageTypeCommandInput} for command's `input` shape.
 * @see {@link SetDefaultMessageTypeCommandOutput} for command's `response` shape.
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
export class SetDefaultMessageTypeCommand extends command<SetDefaultMessageTypeCommandInput, SetDefaultMessageTypeCommandOutput>(
  _ep0,
  _mw0,
  "SetDefaultMessageType",
  SetDefaultMessageType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultMessageTypeRequest;
      output: SetDefaultMessageTypeResult;
    };
    sdk: {
      input: SetDefaultMessageTypeCommandInput;
      output: SetDefaultMessageTypeCommandOutput;
    };
  };
}
