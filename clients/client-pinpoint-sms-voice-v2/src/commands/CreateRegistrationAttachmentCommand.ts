// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRegistrationAttachmentRequest, CreateRegistrationAttachmentResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_CreateRegistrationAttachmentCommand,
  se_CreateRegistrationAttachmentCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRegistrationAttachmentCommand}.
 */
export interface CreateRegistrationAttachmentCommandInput extends CreateRegistrationAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateRegistrationAttachmentCommand}.
 */
export interface CreateRegistrationAttachmentCommandOutput
  extends CreateRegistrationAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Create a new registration attachment to use for uploading a file or a URL to a file.
 *             The maximum file size is 500KB and valid file extensions are PDF, JPEG and PNG. For
 *             example, many sender ID registrations require a signed “letter of authorization” (LOA)
 *             to be submitted.</p>
 *          <p>Use either <code>AttachmentUrl</code> or <code>AttachmentBody</code> to upload your attachment. If both are specified then an exception is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateRegistrationAttachmentCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateRegistrationAttachmentCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateRegistrationAttachmentRequest
 *   AttachmentBody: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   AttachmentUrl: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRegistrationAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegistrationAttachmentResult
 * //   RegistrationAttachmentArn: "STRING_VALUE", // required
 * //   RegistrationAttachmentId: "STRING_VALUE", // required
 * //   AttachmentStatus: "STRING_VALUE", // required
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateRegistrationAttachmentCommandInput - {@link CreateRegistrationAttachmentCommandInput}
 * @returns {@link CreateRegistrationAttachmentCommandOutput}
 * @see {@link CreateRegistrationAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateRegistrationAttachmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
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
export class CreateRegistrationAttachmentCommand extends $Command
  .classBuilder<
    CreateRegistrationAttachmentCommandInput,
    CreateRegistrationAttachmentCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "CreateRegistrationAttachment", {})
  .n("PinpointSMSVoiceV2Client", "CreateRegistrationAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateRegistrationAttachmentCommand)
  .de(de_CreateRegistrationAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegistrationAttachmentRequest;
      output: CreateRegistrationAttachmentResult;
    };
    sdk: {
      input: CreateRegistrationAttachmentCommandInput;
      output: CreateRegistrationAttachmentCommandOutput;
    };
  };
}
