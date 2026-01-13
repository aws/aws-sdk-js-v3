// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SetSMSAttributesInput, SetSMSAttributesResponse } from "../models/models_0";
import { SetSMSAttributes$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetSMSAttributesCommand}.
 */
export interface SetSMSAttributesCommandInput extends SetSMSAttributesInput {}
/**
 * @public
 *
 * The output of {@link SetSMSAttributesCommand}.
 */
export interface SetSMSAttributesCommandOutput extends SetSMSAttributesResponse, __MetadataBearer {}

/**
 * <p>Use this request to set the default settings for sending SMS messages and receiving
 *             daily SMS usage reports.</p>
 *          <p>You can override some of these settings for a single message when you use the
 *                 <code>Publish</code> action with the <code>MessageAttributes.entry.N</code>
 *             parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a>
 *             in the <i>Amazon SNS Developer Guide</i>.</p>
 *          <note>
 *             <p>To use this operation, you must grant the Amazon SNS service principal
 *                     (<code>sns.amazonaws.com</code>) permission to perform the
 *                     <code>s3:ListBucket</code> action. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // SetSMSAttributesInput
 *   attributes: { // MapStringToString // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetSMSAttributesCommandInput - {@link SetSMSAttributesCommandInput}
 * @returns {@link SetSMSAttributesCommandOutput}
 * @see {@link SetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSMSAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class SetSMSAttributesCommand extends $Command
  .classBuilder<
    SetSMSAttributesCommandInput,
    SetSMSAttributesCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "SetSMSAttributes", {})
  .n("SNSClient", "SetSMSAttributesCommand")
  .sc(SetSMSAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetSMSAttributesInput;
      output: {};
    };
    sdk: {
      input: SetSMSAttributesCommandInput;
      output: SetSMSAttributesCommandOutput;
    };
  };
}
