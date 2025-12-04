// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeLocalGatewaysRequest, DescribeLocalGatewaysResult } from "../models/models_4";
import { DescribeLocalGateways } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewaysCommand}.
 */
export interface DescribeLocalGatewaysCommandInput extends DescribeLocalGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewaysCommand}.
 */
export interface DescribeLocalGatewaysCommandOutput extends DescribeLocalGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more local gateways. By default, all local gateways are described.
 *         Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewaysRequest
 *   LocalGatewayIds: [ // LocalGatewayIdSet
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
 * const command = new DescribeLocalGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewaysResult
 * //   LocalGateways: [ // LocalGatewaySet
 * //     { // LocalGateway
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLocalGatewaysCommandInput - {@link DescribeLocalGatewaysCommandInput}
 * @returns {@link DescribeLocalGatewaysCommandOutput}
 * @see {@link DescribeLocalGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeLocalGatewaysCommand extends $Command
  .classBuilder<
    DescribeLocalGatewaysCommandInput,
    DescribeLocalGatewaysCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeLocalGateways", {})
  .n("EC2Client", "DescribeLocalGatewaysCommand")
  .sc(DescribeLocalGateways)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocalGatewaysRequest;
      output: DescribeLocalGatewaysResult;
    };
    sdk: {
      input: DescribeLocalGatewaysCommandInput;
      output: DescribeLocalGatewaysCommandOutput;
    };
  };
}
