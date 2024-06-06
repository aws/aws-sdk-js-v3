// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterInstanceEventNotificationAttributesRequest,
  RegisterInstanceEventNotificationAttributesResult,
} from "../models/models_7";
import {
  de_RegisterInstanceEventNotificationAttributesCommand,
  se_RegisterInstanceEventNotificationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterInstanceEventNotificationAttributesCommand}.
 */
export interface RegisterInstanceEventNotificationAttributesCommandInput
  extends RegisterInstanceEventNotificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link RegisterInstanceEventNotificationAttributesCommand}.
 */
export interface RegisterInstanceEventNotificationAttributesCommandOutput
  extends RegisterInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Registers a set of tag keys to include in scheduled event notifications for your resources.
 *    		</p>
 *          <p>To remove tags, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html">DeregisterInstanceEventNotificationAttributes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RegisterInstanceEventNotificationAttributesRequest
 *   DryRun: true || false,
 *   InstanceTagAttribute: { // RegisterInstanceTagAttributeRequest
 *     IncludeAllTagsOfInstance: true || false,
 *     InstanceTagKeys: [ // InstanceTagKeySet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new RegisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // RegisterInstanceEventNotificationAttributesResult
 * //   InstanceTagAttribute: { // InstanceTagNotificationAttribute
 * //     InstanceTagKeys: [ // InstanceTagKeySet
 * //       "STRING_VALUE",
 * //     ],
 * //     IncludeAllTagsOfInstance: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterInstanceEventNotificationAttributesCommandInput - {@link RegisterInstanceEventNotificationAttributesCommandInput}
 * @returns {@link RegisterInstanceEventNotificationAttributesCommandOutput}
 * @see {@link RegisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class RegisterInstanceEventNotificationAttributesCommand extends $Command
  .classBuilder<
    RegisterInstanceEventNotificationAttributesCommandInput,
    RegisterInstanceEventNotificationAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "RegisterInstanceEventNotificationAttributes", {})
  .n("EC2Client", "RegisterInstanceEventNotificationAttributesCommand")
  .f(void 0, void 0)
  .ser(se_RegisterInstanceEventNotificationAttributesCommand)
  .de(de_RegisterInstanceEventNotificationAttributesCommand)
  .build() {}
