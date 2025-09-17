// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocalGatewayRouteTablesRequest, DescribeLocalGatewayRouteTablesResult } from "../models/models_5";
import {
  de_DescribeLocalGatewayRouteTablesCommand,
  se_DescribeLocalGatewayRouteTablesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayRouteTablesCommand}.
 */
export interface DescribeLocalGatewayRouteTablesCommandInput extends DescribeLocalGatewayRouteTablesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayRouteTablesCommand}.
 */
export interface DescribeLocalGatewayRouteTablesCommandOutput
  extends DescribeLocalGatewayRouteTablesResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more local gateway route tables. By default, all local gateway route tables are described.
 *          Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayRouteTablesRequest
 *   LocalGatewayRouteTableIds: [ // LocalGatewayRouteTableIdSet
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
 * const command = new DescribeLocalGatewayRouteTablesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayRouteTablesResult
 * //   LocalGatewayRouteTables: [ // LocalGatewayRouteTableSet
 * //     { // LocalGatewayRouteTable
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       LocalGatewayRouteTableArn: "STRING_VALUE",
 * //       LocalGatewayId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Mode: "direct-vpc-routing" || "coip",
 * //       StateReason: { // StateReason
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLocalGatewayRouteTablesCommandInput - {@link DescribeLocalGatewayRouteTablesCommandInput}
 * @returns {@link DescribeLocalGatewayRouteTablesCommandOutput}
 * @see {@link DescribeLocalGatewayRouteTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeLocalGatewayRouteTablesCommand extends $Command
  .classBuilder<
    DescribeLocalGatewayRouteTablesCommandInput,
    DescribeLocalGatewayRouteTablesCommandOutput,
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
  .s("AmazonEC2", "DescribeLocalGatewayRouteTables", {})
  .n("EC2Client", "DescribeLocalGatewayRouteTablesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocalGatewayRouteTablesCommand)
  .de(de_DescribeLocalGatewayRouteTablesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocalGatewayRouteTablesRequest;
      output: DescribeLocalGatewayRouteTablesResult;
    };
    sdk: {
      input: DescribeLocalGatewayRouteTablesCommandInput;
      output: DescribeLocalGatewayRouteTablesCommandOutput;
    };
  };
}
