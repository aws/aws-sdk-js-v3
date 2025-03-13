// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstanceEventNotificationAttributesRequest,
  DescribeInstanceEventNotificationAttributesResult,
} from "../models/models_4";
import {
  de_DescribeInstanceEventNotificationAttributesCommand,
  se_DescribeInstanceEventNotificationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceEventNotificationAttributesCommand}.
 */
export interface DescribeInstanceEventNotificationAttributesCommandInput
  extends DescribeInstanceEventNotificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceEventNotificationAttributesCommand}.
 */
export interface DescribeInstanceEventNotificationAttributesCommandOutput
  extends DescribeInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Describes the tag keys that are registered to appear in scheduled event notifications for
 *       	resources in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceEventNotificationAttributesRequest
 *   DryRun: true || false,
 * };
 * const command = new DescribeInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceEventNotificationAttributesResult
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
 * @param DescribeInstanceEventNotificationAttributesCommandInput - {@link DescribeInstanceEventNotificationAttributesCommandInput}
 * @returns {@link DescribeInstanceEventNotificationAttributesCommandOutput}
 * @see {@link DescribeInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeInstanceEventNotificationAttributesCommand extends $Command
  .classBuilder<
    DescribeInstanceEventNotificationAttributesCommandInput,
    DescribeInstanceEventNotificationAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeInstanceEventNotificationAttributes", {})
  .n("EC2Client", "DescribeInstanceEventNotificationAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceEventNotificationAttributesCommand)
  .de(de_DescribeInstanceEventNotificationAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceEventNotificationAttributesRequest;
      output: DescribeInstanceEventNotificationAttributesResult;
    };
    sdk: {
      input: DescribeInstanceEventNotificationAttributesCommandInput;
      output: DescribeInstanceEventNotificationAttributesCommandOutput;
    };
  };
}
