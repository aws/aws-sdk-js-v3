// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeVpcEndpointConnectionNotificationsRequest,
  DescribeVpcEndpointConnectionNotificationsResult,
} from "../models/models_5";
import {
  de_DescribeVpcEndpointConnectionNotificationsCommand,
  se_DescribeVpcEndpointConnectionNotificationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointConnectionNotificationsCommand}.
 */
export interface DescribeVpcEndpointConnectionNotificationsCommandInput
  extends DescribeVpcEndpointConnectionNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointConnectionNotificationsCommand}.
 */
export interface DescribeVpcEndpointConnectionNotificationsCommandOutput
  extends DescribeVpcEndpointConnectionNotificationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the connection notifications for VPC endpoints and VPC endpoint
 *             services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointConnectionNotificationsRequest
 *   DryRun: true || false,
 *   ConnectionNotificationId: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointConnectionNotificationsResult
 * //   ConnectionNotificationSet: [ // ConnectionNotificationSet
 * //     { // ConnectionNotification
 * //       ConnectionNotificationId: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //       ConnectionNotificationType: "Topic",
 * //       ConnectionNotificationArn: "STRING_VALUE",
 * //       ConnectionEvents: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConnectionNotificationState: "Enabled" || "Disabled",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointConnectionNotificationsCommandInput - {@link DescribeVpcEndpointConnectionNotificationsCommandInput}
 * @returns {@link DescribeVpcEndpointConnectionNotificationsCommandOutput}
 * @see {@link DescribeVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeVpcEndpointConnectionNotificationsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointConnectionNotificationsCommandInput,
    DescribeVpcEndpointConnectionNotificationsCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcEndpointConnectionNotifications", {})
  .n("EC2Client", "DescribeVpcEndpointConnectionNotificationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcEndpointConnectionNotificationsCommand)
  .de(de_DescribeVpcEndpointConnectionNotificationsCommand)
  .build() {}
