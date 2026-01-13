// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeEgressOnlyInternetGatewaysRequest,
  DescribeEgressOnlyInternetGatewaysResult,
} from "../models/models_3";
import { DescribeEgressOnlyInternetGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEgressOnlyInternetGatewaysCommand}.
 */
export interface DescribeEgressOnlyInternetGatewaysCommandInput extends DescribeEgressOnlyInternetGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEgressOnlyInternetGatewaysCommand}.
 */
export interface DescribeEgressOnlyInternetGatewaysCommandOutput extends DescribeEgressOnlyInternetGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes your egress-only internet gateways. The default is to describe all your egress-only internet gateways.
 *             Alternatively, you can specify specific egress-only internet gateway IDs or filter the results to
 *             include only the egress-only internet gateways that match specific criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeEgressOnlyInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeEgressOnlyInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeEgressOnlyInternetGatewaysRequest
 *   DryRun: true || false,
 *   EgressOnlyInternetGatewayIds: [ // EgressOnlyInternetGatewayIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeEgressOnlyInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEgressOnlyInternetGatewaysResult
 * //   EgressOnlyInternetGateways: [ // EgressOnlyInternetGatewayList
 * //     { // EgressOnlyInternetGateway
 * //       Attachments: [ // InternetGatewayAttachmentList
 * //         { // InternetGatewayAttachment
 * //           State: "attaching" || "attached" || "detaching" || "detached",
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EgressOnlyInternetGatewayId: "STRING_VALUE",
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
 * @param DescribeEgressOnlyInternetGatewaysCommandInput - {@link DescribeEgressOnlyInternetGatewaysCommandInput}
 * @returns {@link DescribeEgressOnlyInternetGatewaysCommandOutput}
 * @see {@link DescribeEgressOnlyInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeEgressOnlyInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeEgressOnlyInternetGatewaysCommand extends $Command
  .classBuilder<
    DescribeEgressOnlyInternetGatewaysCommandInput,
    DescribeEgressOnlyInternetGatewaysCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeEgressOnlyInternetGateways", {})
  .n("EC2Client", "DescribeEgressOnlyInternetGatewaysCommand")
  .sc(DescribeEgressOnlyInternetGateways$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEgressOnlyInternetGatewaysRequest;
      output: DescribeEgressOnlyInternetGatewaysResult;
    };
    sdk: {
      input: DescribeEgressOnlyInternetGatewaysCommandInput;
      output: DescribeEgressOnlyInternetGatewaysCommandOutput;
    };
  };
}
