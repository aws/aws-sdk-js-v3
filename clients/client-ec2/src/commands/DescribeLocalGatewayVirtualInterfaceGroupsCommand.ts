// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLocalGatewayVirtualInterfaceGroupsRequest,
  DescribeLocalGatewayVirtualInterfaceGroupsResult,
} from "../models/models_4";
import {
  de_DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  se_DescribeLocalGatewayVirtualInterfaceGroupsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsCommandInput
  extends DescribeLocalGatewayVirtualInterfaceGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput
  extends DescribeLocalGatewayVirtualInterfaceGroupsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified local gateway virtual interface groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayVirtualInterfaceGroupsRequest
 *   LocalGatewayVirtualInterfaceGroupIds: [ // LocalGatewayVirtualInterfaceGroupIdSet
 *     "STRING_VALUE",
 *   ],
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayVirtualInterfaceGroupsResult
 * //   LocalGatewayVirtualInterfaceGroups: [ // LocalGatewayVirtualInterfaceGroupSet
 * //     { // LocalGatewayVirtualInterfaceGroup
 * //       LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //       LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       LocalGatewayId: "STRING_VALUE",
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
 * @param DescribeLocalGatewayVirtualInterfaceGroupsCommandInput - {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandInput}
 * @returns {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput}
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeLocalGatewayVirtualInterfaceGroupsCommand extends $Command
  .classBuilder<
    DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
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
  .s("AmazonEC2", "DescribeLocalGatewayVirtualInterfaceGroups", {})
  .n("EC2Client", "DescribeLocalGatewayVirtualInterfaceGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocalGatewayVirtualInterfaceGroupsCommand)
  .de(de_DescribeLocalGatewayVirtualInterfaceGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocalGatewayVirtualInterfaceGroupsRequest;
      output: DescribeLocalGatewayVirtualInterfaceGroupsResult;
    };
    sdk: {
      input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput;
      output: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput;
    };
  };
}
