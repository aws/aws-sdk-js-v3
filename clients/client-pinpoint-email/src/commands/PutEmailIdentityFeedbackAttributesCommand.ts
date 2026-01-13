// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesResponse,
} from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutEmailIdentityFeedbackAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEmailIdentityFeedbackAttributesCommand}.
 */
export interface PutEmailIdentityFeedbackAttributesCommandInput extends PutEmailIdentityFeedbackAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityFeedbackAttributesCommand}.
 */
export interface PutEmailIdentityFeedbackAttributesCommandOutput extends PutEmailIdentityFeedbackAttributesResponse, __MetadataBearer {}

/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
 *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
 *             specified in the Return-Path header of the original email.</p>
 *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
 *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
 *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
 *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
 *             occur (even if this setting is disabled).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // PutEmailIdentityFeedbackAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   EmailForwardingEnabled: true || false,
 * };
 * const command = new PutEmailIdentityFeedbackAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEmailIdentityFeedbackAttributesCommandInput - {@link PutEmailIdentityFeedbackAttributesCommandInput}
 * @returns {@link PutEmailIdentityFeedbackAttributesCommandOutput}
 * @see {@link PutEmailIdentityFeedbackAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityFeedbackAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class PutEmailIdentityFeedbackAttributesCommand extends $Command
  .classBuilder<
    PutEmailIdentityFeedbackAttributesCommandInput,
    PutEmailIdentityFeedbackAttributesCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "PutEmailIdentityFeedbackAttributes", {})
  .n("PinpointEmailClient", "PutEmailIdentityFeedbackAttributesCommand")
  .sc(PutEmailIdentityFeedbackAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEmailIdentityFeedbackAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutEmailIdentityFeedbackAttributesCommandInput;
      output: PutEmailIdentityFeedbackAttributesCommandOutput;
    };
  };
}
