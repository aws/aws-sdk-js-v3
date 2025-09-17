// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCustomerGatewaysRequest, DescribeCustomerGatewaysResult } from "../models/models_4";
import { de_DescribeCustomerGatewaysCommand, se_DescribeCustomerGatewaysCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomerGatewaysCommand}.
 */
export interface DescribeCustomerGatewaysCommandInput extends DescribeCustomerGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomerGatewaysCommand}.
 */
export interface DescribeCustomerGatewaysCommandOutput extends DescribeCustomerGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your VPN customer gateways.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCustomerGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCustomerGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeCustomerGatewaysRequest
 *   CustomerGatewayIds: [ // CustomerGatewayIdStringList
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeCustomerGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomerGatewaysResult
 * //   CustomerGateways: [ // CustomerGatewayList
 * //     { // CustomerGateway
 * //       CertificateArn: "STRING_VALUE",
 * //       DeviceName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       BgpAsnExtended: "STRING_VALUE",
 * //       CustomerGatewayId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       BgpAsn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCustomerGatewaysCommandInput - {@link DescribeCustomerGatewaysCommandInput}
 * @returns {@link DescribeCustomerGatewaysCommandOutput}
 * @see {@link DescribeCustomerGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomerGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe a customer gateway
 * ```javascript
 * // This example describes the specified customer gateway.
 * const input = {
 *   CustomerGatewayIds: [
 *     "cgw-0e11f167"
 *   ]
 * };
 * const command = new DescribeCustomerGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomerGateways: [
 *     {
 *       BgpAsn: "65534",
 *       CustomerGatewayId: "cgw-0e11f167",
 *       IpAddress: "12.1.2.3",
 *       State: "available",
 *       Type: "ipsec.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCustomerGatewaysCommand extends $Command
  .classBuilder<
    DescribeCustomerGatewaysCommandInput,
    DescribeCustomerGatewaysCommandOutput,
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
  .s("AmazonEC2", "DescribeCustomerGateways", {})
  .n("EC2Client", "DescribeCustomerGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCustomerGatewaysCommand)
  .de(de_DescribeCustomerGatewaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomerGatewaysRequest;
      output: DescribeCustomerGatewaysResult;
    };
    sdk: {
      input: DescribeCustomerGatewaysCommandInput;
      output: DescribeCustomerGatewaysCommandOutput;
    };
  };
}
