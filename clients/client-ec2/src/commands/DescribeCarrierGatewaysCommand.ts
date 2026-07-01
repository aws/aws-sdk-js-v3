// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCarrierGatewaysRequest, DescribeCarrierGatewaysResult } from "../models/models_3";
import { DescribeCarrierGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
export class DescribeCarrierGatewaysCommand extends command<DescribeCarrierGatewaysCommandInput, DescribeCarrierGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCarrierGateways",
  DescribeCarrierGateways$
) {
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
