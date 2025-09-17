// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ReleaseSenderIdRequest, ReleaseSenderIdResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_ReleaseSenderIdCommand, se_ReleaseSenderIdCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReleaseSenderIdCommand}.
 */
export interface ReleaseSenderIdCommandInput extends ReleaseSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseSenderIdCommand}.
 */
export interface ReleaseSenderIdCommandOutput extends ReleaseSenderIdResult, __MetadataBearer {}

/**
 * <p>Releases an existing sender ID in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ReleaseSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ReleaseSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ReleaseSenderIdRequest
 *   SenderId: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 * };
 * const command = new ReleaseSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // ReleaseSenderIdResult
 * //   SenderIdArn: "STRING_VALUE", // required
 * //   SenderId: "STRING_VALUE", // required
 * //   IsoCountryCode: "STRING_VALUE", // required
 * //   MessageTypes: [ // MessageTypeList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   MonthlyLeasingPrice: "STRING_VALUE", // required
 * //   Registered: true || false, // required
 * //   RegistrationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReleaseSenderIdCommandInput - {@link ReleaseSenderIdCommandInput}
 * @returns {@link ReleaseSenderIdCommandOutput}
 * @see {@link ReleaseSenderIdCommandInput} for command's `input` shape.
 * @see {@link ReleaseSenderIdCommandOutput} for command's `response` shape.
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
export class ReleaseSenderIdCommand extends $Command
  .classBuilder<
    ReleaseSenderIdCommandInput,
    ReleaseSenderIdCommandOutput,
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
  .s("PinpointSMSVoiceV2", "ReleaseSenderId", {})
  .n("PinpointSMSVoiceV2Client", "ReleaseSenderIdCommand")
  .f(void 0, void 0)
  .ser(se_ReleaseSenderIdCommand)
  .de(de_ReleaseSenderIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReleaseSenderIdRequest;
      output: ReleaseSenderIdResult;
    };
    sdk: {
      input: ReleaseSenderIdCommandInput;
      output: ReleaseSenderIdCommandOutput;
    };
  };
}
