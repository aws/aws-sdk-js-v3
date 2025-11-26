// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutOptedOutNumberRequest, PutOptedOutNumberResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { PutOptedOutNumber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutOptedOutNumberCommand}.
 */
export interface PutOptedOutNumberCommandInput extends PutOptedOutNumberRequest {}
/**
 * @public
 *
 * The output of {@link PutOptedOutNumberCommand}.
 */
export interface PutOptedOutNumberCommandOutput extends PutOptedOutNumberResult, __MetadataBearer {}

/**
 * <p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutOptedOutNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutOptedOutNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // PutOptedOutNumberRequest
 *   OptOutListName: "STRING_VALUE", // required
 *   OptedOutNumber: "STRING_VALUE", // required
 * };
 * const command = new PutOptedOutNumberCommand(input);
 * const response = await client.send(command);
 * // { // PutOptedOutNumberResult
 * //   OptOutListArn: "STRING_VALUE",
 * //   OptOutListName: "STRING_VALUE",
 * //   OptedOutNumber: "STRING_VALUE",
 * //   OptedOutTimestamp: new Date("TIMESTAMP"),
 * //   EndUserOptedOut: true || false,
 * // };
 *
 * ```
 *
 * @param PutOptedOutNumberCommandInput - {@link PutOptedOutNumberCommandInput}
 * @returns {@link PutOptedOutNumberCommandOutput}
 * @see {@link PutOptedOutNumberCommandInput} for command's `input` shape.
 * @see {@link PutOptedOutNumberCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
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
export class PutOptedOutNumberCommand extends $Command
  .classBuilder<
    PutOptedOutNumberCommandInput,
    PutOptedOutNumberCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "PutOptedOutNumber", {})
  .n("PinpointSMSVoiceV2Client", "PutOptedOutNumberCommand")
  .sc(PutOptedOutNumber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOptedOutNumberRequest;
      output: PutOptedOutNumberResult;
    };
    sdk: {
      input: PutOptedOutNumberCommandInput;
      output: PutOptedOutNumberCommandOutput;
    };
  };
}
