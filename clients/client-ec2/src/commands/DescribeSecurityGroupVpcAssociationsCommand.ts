// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeSecurityGroupVpcAssociationsRequest,
  DescribeSecurityGroupVpcAssociationsResult,
} from "../models/models_5";
import {
  de_DescribeSecurityGroupVpcAssociationsCommand,
  se_DescribeSecurityGroupVpcAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityGroupVpcAssociationsCommand}.
 */
export interface DescribeSecurityGroupVpcAssociationsCommandInput extends DescribeSecurityGroupVpcAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityGroupVpcAssociationsCommand}.
 */
export interface DescribeSecurityGroupVpcAssociationsCommandOutput
  extends DescribeSecurityGroupVpcAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes security group VPC associations made with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSecurityGroupVpc.html">AssociateSecurityGroupVpc</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupVpcAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupVpcAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupVpcAssociationsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DescribeSecurityGroupVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupVpcAssociationsResult
 * //   SecurityGroupVpcAssociations: [ // SecurityGroupVpcAssociationList
 * //     { // SecurityGroupVpcAssociation
 * //       GroupId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       VpcOwnerId: "STRING_VALUE",
 * //       State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //       StateReason: "STRING_VALUE",
 * //       GroupOwnerId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSecurityGroupVpcAssociationsCommandInput - {@link DescribeSecurityGroupVpcAssociationsCommandInput}
 * @returns {@link DescribeSecurityGroupVpcAssociationsCommandOutput}
 * @see {@link DescribeSecurityGroupVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeSecurityGroupVpcAssociationsCommand extends $Command
  .classBuilder<
    DescribeSecurityGroupVpcAssociationsCommandInput,
    DescribeSecurityGroupVpcAssociationsCommandOutput,
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
  .s("AmazonEC2", "DescribeSecurityGroupVpcAssociations", {})
  .n("EC2Client", "DescribeSecurityGroupVpcAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityGroupVpcAssociationsCommand)
  .de(de_DescribeSecurityGroupVpcAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityGroupVpcAssociationsRequest;
      output: DescribeSecurityGroupVpcAssociationsResult;
    };
    sdk: {
      input: DescribeSecurityGroupVpcAssociationsCommandInput;
      output: DescribeSecurityGroupVpcAssociationsCommandOutput;
    };
  };
}
