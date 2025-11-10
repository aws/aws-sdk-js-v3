// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRegistrationRequest, DeleteRegistrationResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DeleteRegistration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRegistrationCommand}.
 */
export interface DeleteRegistrationCommandInput extends DeleteRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistrationCommand}.
 */
export interface DeleteRegistrationCommandOutput extends DeleteRegistrationResult, __MetadataBearer {}

/**
 * <p>Permanently delete an existing registration from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteRegistrationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteRegistrationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteRegistrationRequest
 *   RegistrationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegistrationResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   RegistrationType: "STRING_VALUE", // required
 * //   RegistrationStatus: "STRING_VALUE", // required
 * //   CurrentVersionNumber: Number("long"), // required
 * //   ApprovedVersionNumber: Number("long"),
 * //   LatestDeniedVersionNumber: Number("long"),
 * //   AdditionalAttributes: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteRegistrationCommandInput - {@link DeleteRegistrationCommandInput}
 * @returns {@link DeleteRegistrationCommandOutput}
 * @see {@link DeleteRegistrationCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistrationCommandOutput} for command's `response` shape.
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
export class DeleteRegistrationCommand extends $Command
  .classBuilder<
    DeleteRegistrationCommandInput,
    DeleteRegistrationCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DeleteRegistration", {})
  .n("PinpointSMSVoiceV2Client", "DeleteRegistrationCommand")
  .sc(DeleteRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegistrationRequest;
      output: DeleteRegistrationResult;
    };
    sdk: {
      input: DeleteRegistrationCommandInput;
      output: DeleteRegistrationCommandOutput;
    };
  };
}
