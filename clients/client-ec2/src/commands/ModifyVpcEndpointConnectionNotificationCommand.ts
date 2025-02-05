// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyVpcEndpointConnectionNotificationRequest,
  ModifyVpcEndpointConnectionNotificationResult,
} from "../models/models_7";
import {
  de_ModifyVpcEndpointConnectionNotificationCommand,
  se_ModifyVpcEndpointConnectionNotificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointConnectionNotificationCommand}.
 */
export interface ModifyVpcEndpointConnectionNotificationCommandInput
  extends ModifyVpcEndpointConnectionNotificationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointConnectionNotificationCommand}.
 */
export interface ModifyVpcEndpointConnectionNotificationCommandOutput
  extends ModifyVpcEndpointConnectionNotificationResult,
    __MetadataBearer {}

/**
 * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You
 *             can change the SNS topic for the notification, or the events for which to be notified. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointConnectionNotificationRequest
 *   DryRun: true || false,
 *   ConnectionNotificationId: "STRING_VALUE", // required
 *   ConnectionNotificationArn: "STRING_VALUE",
 *   ConnectionEvents: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointConnectionNotificationResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointConnectionNotificationCommandInput - {@link ModifyVpcEndpointConnectionNotificationCommandInput}
 * @returns {@link ModifyVpcEndpointConnectionNotificationCommandOutput}
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyVpcEndpointConnectionNotificationCommand extends $Command
  .classBuilder<
    ModifyVpcEndpointConnectionNotificationCommandInput,
    ModifyVpcEndpointConnectionNotificationCommandOutput,
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
  .s("AmazonEC2", "ModifyVpcEndpointConnectionNotification", {})
  .n("EC2Client", "ModifyVpcEndpointConnectionNotificationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVpcEndpointConnectionNotificationCommand)
  .de(de_ModifyVpcEndpointConnectionNotificationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcEndpointConnectionNotificationRequest;
      output: ModifyVpcEndpointConnectionNotificationResult;
    };
    sdk: {
      input: ModifyVpcEndpointConnectionNotificationCommandInput;
      output: ModifyVpcEndpointConnectionNotificationCommandOutput;
    };
  };
}
