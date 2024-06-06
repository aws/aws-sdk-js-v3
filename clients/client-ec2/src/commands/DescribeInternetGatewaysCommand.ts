// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInternetGatewaysRequest, DescribeInternetGatewaysResult } from "../models/models_4";
import { de_DescribeInternetGatewaysCommand, se_DescribeInternetGatewaysCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInternetGatewaysCommand}.
 */
export interface DescribeInternetGatewaysCommandInput extends DescribeInternetGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInternetGatewaysCommand}.
 */
export interface DescribeInternetGatewaysCommandOutput extends DescribeInternetGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your internet gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInternetGatewaysRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   InternetGatewayIds: [ // InternetGatewayIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInternetGatewaysResult
 * //   InternetGateways: [ // InternetGatewayList
 * //     { // InternetGateway
 * //       Attachments: [ // InternetGatewayAttachmentList
 * //         { // InternetGatewayAttachment
 * //           State: "attaching" || "attached" || "detaching" || "detached",
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InternetGatewayId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInternetGatewaysCommandInput - {@link DescribeInternetGatewaysCommandInput}
 * @returns {@link DescribeInternetGatewaysCommandOutput}
 * @see {@link DescribeInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe the Internet gateway for a VPC
 * ```javascript
 * // This example describes the Internet gateway for the specified VPC.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "attachment.vpc-id",
 *       "Values": [
 *         "vpc-a01106c2"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InternetGateways": [
 *     {
 *       "Attachments": [
 *         {
 *           "State": "attached",
 *           "VpcId": "vpc-a01106c2"
 *         }
 *       ],
 *       "InternetGatewayId": "igw-c0a643a9",
 *       "Tags": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-internet-gateways-1
 * ```
 *
 */
export class DescribeInternetGatewaysCommand extends $Command
  .classBuilder<
    DescribeInternetGatewaysCommandInput,
    DescribeInternetGatewaysCommandOutput,
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
  .s("AmazonEC2", "DescribeInternetGateways", {})
  .n("EC2Client", "DescribeInternetGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInternetGatewaysCommand)
  .de(de_DescribeInternetGatewaysCommand)
  .build() {}
