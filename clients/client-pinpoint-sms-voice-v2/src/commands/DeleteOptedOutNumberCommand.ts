// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteOptedOutNumberRequest, DeleteOptedOutNumberResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DeleteOptedOutNumber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOptedOutNumberCommand}.
 */
export interface DeleteOptedOutNumberCommandInput extends DeleteOptedOutNumberRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOptedOutNumberCommand}.
 */
export interface DeleteOptedOutNumberCommandOutput extends DeleteOptedOutNumberResult, __MetadataBearer {}

/**
 * <p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteOptedOutNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteOptedOutNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteOptedOutNumberRequest
 *   OptOutListName: "STRING_VALUE", // required
 *   OptedOutNumber: "STRING_VALUE", // required
 * };
 * const command = new DeleteOptedOutNumberCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOptedOutNumberResult
 * //   OptOutListArn: "STRING_VALUE",
 * //   OptOutListName: "STRING_VALUE",
 * //   OptedOutNumber: "STRING_VALUE",
 * //   OptedOutTimestamp: new Date("TIMESTAMP"),
 * //   EndUserOptedOut: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteOptedOutNumberCommandInput - {@link DeleteOptedOutNumberCommandInput}
 * @returns {@link DeleteOptedOutNumberCommandOutput}
 * @see {@link DeleteOptedOutNumberCommandInput} for command's `input` shape.
 * @see {@link DeleteOptedOutNumberCommandOutput} for command's `response` shape.
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
export class DeleteOptedOutNumberCommand extends $Command
  .classBuilder<
    DeleteOptedOutNumberCommandInput,
    DeleteOptedOutNumberCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DeleteOptedOutNumber", {})
  .n("PinpointSMSVoiceV2Client", "DeleteOptedOutNumberCommand")
  .sc(DeleteOptedOutNumber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOptedOutNumberRequest;
      output: DeleteOptedOutNumberResult;
    };
    sdk: {
      input: DeleteOptedOutNumberCommandInput;
      output: DeleteOptedOutNumberCommandOutput;
    };
  };
}
