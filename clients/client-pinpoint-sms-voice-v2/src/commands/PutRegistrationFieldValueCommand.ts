// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutRegistrationFieldValueRequest, PutRegistrationFieldValueResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_PutRegistrationFieldValueCommand, se_PutRegistrationFieldValueCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRegistrationFieldValueCommand}.
 */
export interface PutRegistrationFieldValueCommandInput extends PutRegistrationFieldValueRequest {}
/**
 * @public
 *
 * The output of {@link PutRegistrationFieldValueCommand}.
 */
export interface PutRegistrationFieldValueCommandOutput extends PutRegistrationFieldValueResult, __MetadataBearer {}

/**
 * <p>Creates or updates a field value for a registration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutRegistrationFieldValueCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutRegistrationFieldValueCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // PutRegistrationFieldValueRequest
 *   RegistrationId: "STRING_VALUE", // required
 *   FieldPath: "STRING_VALUE", // required
 *   SelectChoices: [ // SelectChoiceList
 *     "STRING_VALUE",
 *   ],
 *   TextValue: "STRING_VALUE",
 *   RegistrationAttachmentId: "STRING_VALUE",
 * };
 * const command = new PutRegistrationFieldValueCommand(input);
 * const response = await client.send(command);
 * // { // PutRegistrationFieldValueResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   VersionNumber: Number("long"), // required
 * //   FieldPath: "STRING_VALUE", // required
 * //   SelectChoices: [ // SelectChoiceList
 * //     "STRING_VALUE",
 * //   ],
 * //   TextValue: "STRING_VALUE",
 * //   RegistrationAttachmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutRegistrationFieldValueCommandInput - {@link PutRegistrationFieldValueCommandInput}
 * @returns {@link PutRegistrationFieldValueCommandOutput}
 * @see {@link PutRegistrationFieldValueCommandInput} for command's `input` shape.
 * @see {@link PutRegistrationFieldValueCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
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
 * @public
 */
export class PutRegistrationFieldValueCommand extends $Command
  .classBuilder<
    PutRegistrationFieldValueCommandInput,
    PutRegistrationFieldValueCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "PutRegistrationFieldValue", {})
  .n("PinpointSMSVoiceV2Client", "PutRegistrationFieldValueCommand")
  .f(void 0, void 0)
  .ser(se_PutRegistrationFieldValueCommand)
  .de(de_PutRegistrationFieldValueCommand)
  .build() {}
