// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRegistrationAttachmentRequest, CreateRegistrationAttachmentResult } from "../models/models_0";
import { CreateRegistrationAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateRegistrationAttachmentCommandOutput extends CreateRegistrationAttachmentResult, __MetadataBearer {}

/**
 * Create a new registration attachment to use for uploading a file or a URL to a file. The maximum file size is 5MB and valid file extensions are PDF, JPEG and PNG. For example, many sender ID registrations require a signed “letter of authorization” (LOA) to be submitted.
 *
 * Use either `AttachmentUrl` or `AttachmentBody` to upload your attachment. If both are specified then an exception is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateRegistrationAttachmentCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateRegistrationAttachmentCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
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
export class CreateRegistrationAttachmentCommand extends command<CreateRegistrationAttachmentCommandInput, CreateRegistrationAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateRegistrationAttachment",
  CreateRegistrationAttachment$
) {
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
