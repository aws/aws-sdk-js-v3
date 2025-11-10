// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVerifiedDestinationNumberRequest, DeleteVerifiedDestinationNumberResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DeleteVerifiedDestinationNumber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedDestinationNumberCommand}.
 */
export interface DeleteVerifiedDestinationNumberCommandInput extends DeleteVerifiedDestinationNumberRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedDestinationNumberCommand}.
 */
export interface DeleteVerifiedDestinationNumberCommandOutput
  extends DeleteVerifiedDestinationNumberResult,
    __MetadataBearer {}

/**
 * <p>Delete a verified destination phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteVerifiedDestinationNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteVerifiedDestinationNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteVerifiedDestinationNumberRequest
 *   VerifiedDestinationNumberId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVerifiedDestinationNumberCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVerifiedDestinationNumberResult
 * //   VerifiedDestinationNumberArn: "STRING_VALUE", // required
 * //   VerifiedDestinationNumberId: "STRING_VALUE", // required
 * //   DestinationPhoneNumber: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteVerifiedDestinationNumberCommandInput - {@link DeleteVerifiedDestinationNumberCommandInput}
 * @returns {@link DeleteVerifiedDestinationNumberCommandOutput}
 * @see {@link DeleteVerifiedDestinationNumberCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedDestinationNumberCommandOutput} for command's `response` shape.
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
export class DeleteVerifiedDestinationNumberCommand extends $Command
  .classBuilder<
    DeleteVerifiedDestinationNumberCommandInput,
    DeleteVerifiedDestinationNumberCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DeleteVerifiedDestinationNumber", {})
  .n("PinpointSMSVoiceV2Client", "DeleteVerifiedDestinationNumberCommand")
  .sc(DeleteVerifiedDestinationNumber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVerifiedDestinationNumberRequest;
      output: DeleteVerifiedDestinationNumberResult;
    };
    sdk: {
      input: DeleteVerifiedDestinationNumberCommandInput;
      output: DeleteVerifiedDestinationNumberCommandOutput;
    };
  };
}
