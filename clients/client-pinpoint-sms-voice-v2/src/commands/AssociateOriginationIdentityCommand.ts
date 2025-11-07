// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateOriginationIdentityRequest, AssociateOriginationIdentityResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { AssociateOriginationIdentity } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateOriginationIdentityCommand}.
 */
export interface AssociateOriginationIdentityCommandInput extends AssociateOriginationIdentityRequest {}
/**
 * @public
 *
 * The output of {@link AssociateOriginationIdentityCommand}.
 */
export interface AssociateOriginationIdentityCommandOutput
  extends AssociateOriginationIdentityResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, AssociateOriginationIdentityCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, AssociateOriginationIdentityCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // AssociateOriginationIdentityRequest
 *   PoolId: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateOriginationIdentityCommand(input);
 * const response = await client.send(command);
 * // { // AssociateOriginationIdentityResult
 * //   PoolArn: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   OriginationIdentityArn: "STRING_VALUE",
 * //   OriginationIdentity: "STRING_VALUE",
 * //   IsoCountryCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateOriginationIdentityCommandInput - {@link AssociateOriginationIdentityCommandInput}
 * @returns {@link AssociateOriginationIdentityCommandOutput}
 * @see {@link AssociateOriginationIdentityCommandInput} for command's `input` shape.
 * @see {@link AssociateOriginationIdentityCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class AssociateOriginationIdentityCommand extends $Command
  .classBuilder<
    AssociateOriginationIdentityCommandInput,
    AssociateOriginationIdentityCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "AssociateOriginationIdentity", {})
  .n("PinpointSMSVoiceV2Client", "AssociateOriginationIdentityCommand")
  .sc(AssociateOriginationIdentity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateOriginationIdentityRequest;
      output: AssociateOriginationIdentityResult;
    };
    sdk: {
      input: AssociateOriginationIdentityCommandInput;
      output: AssociateOriginationIdentityCommandOutput;
    };
  };
}
