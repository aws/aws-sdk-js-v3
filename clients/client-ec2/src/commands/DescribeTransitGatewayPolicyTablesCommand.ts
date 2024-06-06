// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTransitGatewayPolicyTablesRequest,
  DescribeTransitGatewayPolicyTablesResult,
} from "../models/models_5";
import {
  de_DescribeTransitGatewayPolicyTablesCommand,
  se_DescribeTransitGatewayPolicyTablesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayPolicyTablesCommand}.
 */
export interface DescribeTransitGatewayPolicyTablesCommandInput extends DescribeTransitGatewayPolicyTablesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayPolicyTablesCommand}.
 */
export interface DescribeTransitGatewayPolicyTablesCommandOutput
  extends DescribeTransitGatewayPolicyTablesResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more transit gateway route policy tables.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPolicyTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPolicyTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayPolicyTablesRequest
 *   TransitGatewayPolicyTableIds: [ // TransitGatewayPolicyTableIdStringList
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
 * const command = new DescribeTransitGatewayPolicyTablesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayPolicyTablesResult
 * //   TransitGatewayPolicyTables: [ // TransitGatewayPolicyTableList
 * //     { // TransitGatewayPolicyTable
 * //       TransitGatewayPolicyTableId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
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
 * @param DescribeTransitGatewayPolicyTablesCommandInput - {@link DescribeTransitGatewayPolicyTablesCommandInput}
 * @returns {@link DescribeTransitGatewayPolicyTablesCommandOutput}
 * @see {@link DescribeTransitGatewayPolicyTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPolicyTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeTransitGatewayPolicyTablesCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayPolicyTablesCommandInput,
    DescribeTransitGatewayPolicyTablesCommandOutput,
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
  .s("AmazonEC2", "DescribeTransitGatewayPolicyTables", {})
  .n("EC2Client", "DescribeTransitGatewayPolicyTablesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayPolicyTablesCommand)
  .de(de_DescribeTransitGatewayPolicyTablesCommand)
  .build() {}
