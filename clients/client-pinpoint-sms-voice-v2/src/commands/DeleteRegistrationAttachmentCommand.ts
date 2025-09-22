// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRegistrationAttachmentRequest, DeleteRegistrationAttachmentResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DeleteRegistrationAttachment } from "../schemas/schemas_6_Registration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteRegistrationAttachmentCommandOutput
  extends DeleteRegistrationAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Permanently delete the specified registration attachment.</p>
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
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class DeleteRegistrationAttachmentCommand extends $Command
  .classBuilder<
    DeleteRegistrationAttachmentCommandInput,
    DeleteRegistrationAttachmentCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DeleteRegistrationAttachment", {})
  .n("PinpointSMSVoiceV2Client", "DeleteRegistrationAttachmentCommand")
  .sc(DeleteRegistrationAttachment)
  .build() {
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
