// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeClientVpnRoutesRequest, DescribeClientVpnRoutesResult } from "../models/models_3";
import { DescribeClientVpnRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnRoutesCommand}.
 */
export interface DescribeClientVpnRoutesCommandInput extends DescribeClientVpnRoutesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnRoutesCommand}.
 */
export interface DescribeClientVpnRoutesCommandOutput extends DescribeClientVpnRoutesResult, __MetadataBearer {}

/**
 * <p>Describes the routes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnRoutesRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
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
 * const command = new DescribeClientVpnRoutesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnRoutesResult
 * //   Routes: [ // ClientVpnRouteSet
 * //     { // ClientVpnRoute
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       DestinationCidr: "STRING_VALUE",
 * //       TargetSubnet: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Origin: "STRING_VALUE",
 * //       Status: { // ClientVpnRouteStatus
 * //         Code: "creating" || "active" || "failed" || "deleting",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnRoutesCommandInput - {@link DescribeClientVpnRoutesCommandInput}
 * @returns {@link DescribeClientVpnRoutesCommandOutput}
 * @see {@link DescribeClientVpnRoutesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeClientVpnRoutesCommand extends command<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeClientVpnRoutes",
  DescribeClientVpnRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientVpnRoutesRequest;
      output: DescribeClientVpnRoutesResult;
    };
    sdk: {
      input: DescribeClientVpnRoutesCommandInput;
      output: DescribeClientVpnRoutesCommandOutput;
    };
  };
}
