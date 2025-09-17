// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  DescribeLocalGatewayRouteTableVpcAssociationsResult,
} from "../models/models_5";
import {
  de_DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  se_DescribeLocalGatewayRouteTableVpcAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}.
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandInput
  extends DescribeLocalGatewayRouteTableVpcAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}.
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  extends DescribeLocalGatewayRouteTableVpcAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayRouteTableVpcAssociationsRequest
 *   LocalGatewayRouteTableVpcAssociationIds: [ // LocalGatewayRouteTableVpcAssociationIdSet
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
 * const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayRouteTableVpcAssociationsResult
 * //   LocalGatewayRouteTableVpcAssociations: [ // LocalGatewayRouteTableVpcAssociationSet
 * //     { // LocalGatewayRouteTableVpcAssociation
 * //       LocalGatewayRouteTableVpcAssociationId: "STRING_VALUE",
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       LocalGatewayRouteTableArn: "STRING_VALUE",
 * //       LocalGatewayId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
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
 * @param DescribeLocalGatewayRouteTableVpcAssociationsCommandInput - {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput}
 * @returns {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput}
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeLocalGatewayRouteTableVpcAssociationsCommand extends $Command
  .classBuilder<
    DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
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
  .s("AmazonEC2", "DescribeLocalGatewayRouteTableVpcAssociations", {})
  .n("EC2Client", "DescribeLocalGatewayRouteTableVpcAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocalGatewayRouteTableVpcAssociationsCommand)
  .de(de_DescribeLocalGatewayRouteTableVpcAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocalGatewayRouteTableVpcAssociationsRequest;
      output: DescribeLocalGatewayRouteTableVpcAssociationsResult;
    };
    sdk: {
      input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput;
      output: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput;
    };
  };
}
