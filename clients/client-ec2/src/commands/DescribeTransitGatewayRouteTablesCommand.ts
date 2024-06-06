// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayRouteTablesRequest, DescribeTransitGatewayRouteTablesResult } from "../models/models_5";
import {
  de_DescribeTransitGatewayRouteTablesCommand,
  se_DescribeTransitGatewayRouteTablesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayRouteTablesCommand}.
 */
export interface DescribeTransitGatewayRouteTablesCommandInput extends DescribeTransitGatewayRouteTablesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayRouteTablesCommand}.
 */
export interface DescribeTransitGatewayRouteTablesCommandOutput
  extends DescribeTransitGatewayRouteTablesResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more transit gateway route tables. By default, all transit gateway route tables are described.
 *          Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayRouteTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayRouteTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayRouteTablesRequest
 *   TransitGatewayRouteTableIds: [ // TransitGatewayRouteTableIdStringList
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
 * const command = new DescribeTransitGatewayRouteTablesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayRouteTablesResult
 * //   TransitGatewayRouteTables: [ // TransitGatewayRouteTableList
 * //     { // TransitGatewayRouteTable
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       DefaultAssociationRouteTable: true || false,
 * //       DefaultPropagationRouteTable: true || false,
 * //       CreationTime: new Date("TIMESTAMP"),
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
 * @param DescribeTransitGatewayRouteTablesCommandInput - {@link DescribeTransitGatewayRouteTablesCommandInput}
 * @returns {@link DescribeTransitGatewayRouteTablesCommandOutput}
 * @see {@link DescribeTransitGatewayRouteTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayRouteTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeTransitGatewayRouteTablesCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayRouteTablesCommandInput,
    DescribeTransitGatewayRouteTablesCommandOutput,
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
  .s("AmazonEC2", "DescribeTransitGatewayRouteTables", {})
  .n("EC2Client", "DescribeTransitGatewayRouteTablesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayRouteTablesCommand)
  .de(de_DescribeTransitGatewayRouteTablesCommand)
  .build() {}
