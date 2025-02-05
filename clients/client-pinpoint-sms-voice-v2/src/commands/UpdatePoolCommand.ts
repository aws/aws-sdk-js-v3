// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePoolRequest, UpdatePoolResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_UpdatePoolCommand, se_UpdatePoolCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePoolCommand}.
 */
export interface UpdatePoolCommandInput extends UpdatePoolRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePoolCommand}.
 */
export interface UpdatePoolCommandOutput extends UpdatePoolResult, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing pool. You can update the opt-out list, enable
 *             or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or
 *             disable self-managed opt-outs, enable or disable deletion protection, and enable or
 *             disable shared routes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdatePoolCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdatePoolCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdatePoolRequest
 *   PoolId: "STRING_VALUE", // required
 *   TwoWayEnabled: true || false,
 *   TwoWayChannelArn: "STRING_VALUE",
 *   TwoWayChannelRole: "STRING_VALUE",
 *   SelfManagedOptOutsEnabled: true || false,
 *   OptOutListName: "STRING_VALUE",
 *   SharedRoutesEnabled: true || false,
 *   DeletionProtectionEnabled: true || false,
 * };
 * const command = new UpdatePoolCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePoolResult
 * //   PoolArn: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   MessageType: "STRING_VALUE",
 * //   TwoWayEnabled: true || false,
 * //   TwoWayChannelArn: "STRING_VALUE",
 * //   TwoWayChannelRole: "STRING_VALUE",
 * //   SelfManagedOptOutsEnabled: true || false,
 * //   OptOutListName: "STRING_VALUE",
 * //   SharedRoutesEnabled: true || false,
 * //   DeletionProtectionEnabled: true || false,
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdatePoolCommandInput - {@link UpdatePoolCommandInput}
 * @returns {@link UpdatePoolCommandOutput}
 * @see {@link UpdatePoolCommandInput} for command's `input` shape.
 * @see {@link UpdatePoolCommandOutput} for command's `response` shape.
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
export class UpdatePoolCommand extends $Command
  .classBuilder<
    UpdatePoolCommandInput,
    UpdatePoolCommandOutput,
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
  .s("PinpointSMSVoiceV2", "UpdatePool", {})
  .n("PinpointSMSVoiceV2Client", "UpdatePoolCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePoolCommand)
  .de(de_UpdatePoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePoolRequest;
      output: UpdatePoolResult;
    };
    sdk: {
      input: UpdatePoolCommandInput;
      output: UpdatePoolCommandOutput;
    };
  };
}
