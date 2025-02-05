// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVpcEndpointConnectionNotificationRequest,
  CreateVpcEndpointConnectionNotificationResult,
} from "../models/models_2";
import {
  de_CreateVpcEndpointConnectionNotificationCommand,
  se_CreateVpcEndpointConnectionNotificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointConnectionNotificationCommand}.
 */
export interface CreateVpcEndpointConnectionNotificationCommandInput
  extends CreateVpcEndpointConnectionNotificationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointConnectionNotificationCommand}.
 */
export interface CreateVpcEndpointConnectionNotificationCommandOutput
  extends CreateVpcEndpointConnectionNotificationResult,
    __MetadataBearer {}

/**
 * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint
 *             service. A connection notification notifies you of specific endpoint events. You must
 *             create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Creating an Amazon SNS topic</a> in
 *             the <i>Amazon SNS Developer Guide</i>.</p>
 *          <p>You can create a connection notification for interface endpoints only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // CreateVpcEndpointConnectionNotificationRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   ConnectionNotificationArn: "STRING_VALUE", // required
 *   ConnectionEvents: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointConnectionNotificationResult
 * //   ConnectionNotification: { // ConnectionNotification
 * //     ConnectionNotificationId: "STRING_VALUE",
 * //     ServiceId: "STRING_VALUE",
 * //     VpcEndpointId: "STRING_VALUE",
 * //     ConnectionNotificationType: "Topic",
 * //     ConnectionNotificationArn: "STRING_VALUE",
 * //     ConnectionEvents: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ConnectionNotificationState: "Enabled" || "Disabled",
 * //     ServiceRegion: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVpcEndpointConnectionNotificationCommandInput - {@link CreateVpcEndpointConnectionNotificationCommandInput}
 * @returns {@link CreateVpcEndpointConnectionNotificationCommandOutput}
 * @see {@link CreateVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateVpcEndpointConnectionNotificationCommand extends $Command
  .classBuilder<
    CreateVpcEndpointConnectionNotificationCommandInput,
    CreateVpcEndpointConnectionNotificationCommandOutput,
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
  .s("AmazonEC2", "CreateVpcEndpointConnectionNotification", {})
  .n("EC2Client", "CreateVpcEndpointConnectionNotificationCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcEndpointConnectionNotificationCommand)
  .de(de_CreateVpcEndpointConnectionNotificationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcEndpointConnectionNotificationRequest;
      output: CreateVpcEndpointConnectionNotificationResult;
    };
    sdk: {
      input: CreateVpcEndpointConnectionNotificationCommandInput;
      output: CreateVpcEndpointConnectionNotificationCommandOutput;
    };
  };
}
