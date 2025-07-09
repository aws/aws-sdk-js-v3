// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCarrierGatewaysRequest } from "../models/models_3";
import { DescribeCarrierGatewaysResult } from "../models/models_4";
import { de_DescribeCarrierGatewaysCommand, se_DescribeCarrierGatewaysCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCarrierGatewaysCommand}.
 */
export interface DescribeCarrierGatewaysCommandInput extends DescribeCarrierGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCarrierGatewaysCommand}.
 */
export interface DescribeCarrierGatewaysCommandOutput extends DescribeCarrierGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your carrier gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCarrierGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCarrierGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCarrierGatewaysRequest
 *   CarrierGatewayIds: [ // CarrierGatewayIdSet
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
 * const command = new DescribeCarrierGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCarrierGatewaysResult
 * //   CarrierGateways: [ // CarrierGatewaySet
 * //     { // CarrierGateway
 * //       CarrierGatewayId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
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
 * @param DescribeCarrierGatewaysCommandInput - {@link DescribeCarrierGatewaysCommandInput}
 * @returns {@link DescribeCarrierGatewaysCommandOutput}
 * @see {@link DescribeCarrierGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeCarrierGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCarrierGatewaysCommand extends $Command
  .classBuilder<
    DescribeCarrierGatewaysCommandInput,
    DescribeCarrierGatewaysCommandOutput,
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
  .s("AmazonEC2", "DescribeCarrierGateways", {})
  .n("EC2Client", "DescribeCarrierGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCarrierGatewaysCommand)
  .de(de_DescribeCarrierGatewaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCarrierGatewaysRequest;
      output: DescribeCarrierGatewaysResult;
    };
    sdk: {
      input: DescribeCarrierGatewaysCommandInput;
      output: DescribeCarrierGatewaysCommandOutput;
    };
  };
}
