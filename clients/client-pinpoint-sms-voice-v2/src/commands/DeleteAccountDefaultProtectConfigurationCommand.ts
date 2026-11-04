// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAccountDefaultProtectConfigurationRequest,
  DeleteAccountDefaultProtectConfigurationResult,
} from "../models/models_0";
import { DeleteAccountDefaultProtectConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountDefaultProtectConfigurationCommand}.
 */
export interface DeleteAccountDefaultProtectConfigurationCommandInput extends DeleteAccountDefaultProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountDefaultProtectConfigurationCommand}.
 */
export interface DeleteAccountDefaultProtectConfigurationCommandOutput extends DeleteAccountDefaultProtectConfigurationResult, __MetadataBearer {}

/**
 * Removes the current account default protect configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteAccountDefaultProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteAccountDefaultProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteAccountDefaultProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountDefaultProtectConfigurationResult
 * //   DefaultProtectConfigurationArn: "STRING_VALUE", // required
 * //   DefaultProtectConfigurationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteAccountDefaultProtectConfigurationCommandInput - {@link DeleteAccountDefaultProtectConfigurationCommandInput}
 * @returns {@link DeleteAccountDefaultProtectConfigurationCommandOutput}
 * @see {@link DeleteAccountDefaultProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountDefaultProtectConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteAccountDefaultProtectConfigurationCommand extends command<DeleteAccountDefaultProtectConfigurationCommandInput, DeleteAccountDefaultProtectConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountDefaultProtectConfiguration",
  DeleteAccountDefaultProtectConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteAccountDefaultProtectConfigurationResult;
    };
    sdk: {
      input: DeleteAccountDefaultProtectConfigurationCommandInput;
      output: DeleteAccountDefaultProtectConfigurationCommandOutput;
    };
  };
}
