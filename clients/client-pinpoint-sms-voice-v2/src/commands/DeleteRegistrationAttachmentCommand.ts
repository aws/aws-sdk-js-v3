// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistrationAttachmentRequest, DeleteRegistrationAttachmentResult } from "../models/models_0";
import { DeleteRegistrationAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegistrationAttachmentCommand}.
 */
export interface DeleteRegistrationAttachmentCommandInput extends DeleteRegistrationAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistrationAttachmentCommand}.
 */
export interface DeleteRegistrationAttachmentCommandOutput extends DeleteRegistrationAttachmentResult, __MetadataBearer {}

/**
 * Permanently delete the specified registration attachment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteRegistrationAttachmentCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteRegistrationAttachmentCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteRegistrationAttachmentRequest
 *   RegistrationAttachmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegistrationAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegistrationAttachmentResult
 * //   RegistrationAttachmentArn: "STRING_VALUE", // required
 * //   RegistrationAttachmentId: "STRING_VALUE", // required
 * //   AttachmentStatus: "STRING_VALUE", // required
 * //   AttachmentUploadErrorReason: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteRegistrationAttachmentCommandInput - {@link DeleteRegistrationAttachmentCommandInput}
 * @returns {@link DeleteRegistrationAttachmentCommandOutput}
 * @see {@link DeleteRegistrationAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistrationAttachmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.
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
export class DeleteRegistrationAttachmentCommand extends command<DeleteRegistrationAttachmentCommandInput, DeleteRegistrationAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegistrationAttachment",
  DeleteRegistrationAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegistrationAttachmentRequest;
      output: DeleteRegistrationAttachmentResult;
    };
    sdk: {
      input: DeleteRegistrationAttachmentCommandInput;
      output: DeleteRegistrationAttachmentCommandOutput;
    };
  };
}
