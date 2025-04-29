// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateOriginationIdentityRequest, DisassociateOriginationIdentityResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DisassociateOriginationIdentityCommand,
  se_DisassociateOriginationIdentityCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateOriginationIdentityCommand}.
 */
export interface DisassociateOriginationIdentityCommandInput extends DisassociateOriginationIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateOriginationIdentityCommand}.
 */
export interface DisassociateOriginationIdentityCommandOutput
  extends DisassociateOriginationIdentityResult,
    __MetadataBearer {}

/**
 * <p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DisassociateOriginationIdentityCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DisassociateOriginationIdentityCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DisassociateOriginationIdentityRequest
 *   PoolId: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateOriginationIdentityCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateOriginationIdentityResult
 * //   PoolArn: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   OriginationIdentityArn: "STRING_VALUE",
 * //   OriginationIdentity: "STRING_VALUE",
 * //   IsoCountryCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateOriginationIdentityCommandInput - {@link DisassociateOriginationIdentityCommandInput}
 * @returns {@link DisassociateOriginationIdentityCommandOutput}
 * @see {@link DisassociateOriginationIdentityCommandInput} for command's `input` shape.
 * @see {@link DisassociateOriginationIdentityCommandOutput} for command's `response` shape.
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
export class DisassociateOriginationIdentityCommand extends $Command
  .classBuilder<
    DisassociateOriginationIdentityCommandInput,
    DisassociateOriginationIdentityCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DisassociateOriginationIdentity", {})
  .n("PinpointSMSVoiceV2Client", "DisassociateOriginationIdentityCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateOriginationIdentityCommand)
  .de(de_DisassociateOriginationIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateOriginationIdentityRequest;
      output: DisassociateOriginationIdentityResult;
    };
    sdk: {
      input: DisassociateOriginationIdentityCommandInput;
      output: DisassociateOriginationIdentityCommandOutput;
    };
  };
}
