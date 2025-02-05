// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
} from "../models/models_4";
import {
  de_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  se_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand}.
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput
  extends DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand}.
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput
  extends DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the associations between virtual interface groups and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
 *   LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds: [ // LocalGatewayRouteTableVirtualInterfaceGroupAssociationIdSet
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
 * const command = new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
 * //   LocalGatewayRouteTableVirtualInterfaceGroupAssociations: [ // LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet
 * //     { // LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 * //       LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: "STRING_VALUE",
 * //       LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //       LocalGatewayId: "STRING_VALUE",
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       LocalGatewayRouteTableArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
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
 * @param DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput - {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput}
 * @returns {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput}
 * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand extends $Command
  .classBuilder<
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
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
  .s("AmazonEC2", "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations", {})
  .n("EC2Client", "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand)
  .de(de_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest;
      output: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult;
    };
    sdk: {
      input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput;
      output: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput;
    };
  };
}
