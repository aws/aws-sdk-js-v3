// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDefaultMessageTypeRequest, DeleteDefaultMessageTypeResult } from "../models/models_0";
import { DeleteDefaultMessageType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDefaultMessageTypeCommand}.
 */
export interface DeleteDefaultMessageTypeCommandInput extends DeleteDefaultMessageTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDefaultMessageTypeCommand}.
 */
export interface DeleteDefaultMessageTypeCommandOutput extends DeleteDefaultMessageTypeResult, __MetadataBearer {}

/**
 * Deletes an existing default message type on a configuration set.
 *
 * A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose **Transactional**. If you plan to send messages that contain marketing material or other promotional content, choose **Promotional**. This setting applies to your entire Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteDefaultMessageTypeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteDefaultMessageTypeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteDefaultMessageTypeRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDefaultMessageTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDefaultMessageTypeResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   MessageType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDefaultMessageTypeCommandInput - {@link DeleteDefaultMessageTypeCommandInput}
 * @returns {@link DeleteDefaultMessageTypeCommandOutput}
 * @see {@link DeleteDefaultMessageTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteDefaultMessageTypeCommandOutput} for command's `response` shape.
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
export class DeleteDefaultMessageTypeCommand extends command<DeleteDefaultMessageTypeCommandInput, DeleteDefaultMessageTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDefaultMessageType",
  DeleteDefaultMessageType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDefaultMessageTypeRequest;
      output: DeleteDefaultMessageTypeResult;
    };
    sdk: {
      input: DeleteDefaultMessageTypeCommandInput;
      output: DeleteDefaultMessageTypeCommandOutput;
    };
  };
}
