// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExportTransitGatewayRoutesRequest, ExportTransitGatewayRoutesResult } from "../models/models_5";
import { ExportTransitGatewayRoutes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportTransitGatewayRoutesCommand}.
 */
export interface ExportTransitGatewayRoutesCommandInput extends ExportTransitGatewayRoutesRequest {}
/**
 * @public
 *
 * The output of {@link ExportTransitGatewayRoutesCommand}.
 */
export interface ExportTransitGatewayRoutesCommandOutput extends ExportTransitGatewayRoutesResult, __MetadataBearer {}

/**
 * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket.
 *          By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
 *          <p>The routes are saved to the specified bucket in a JSON file. For more information, see
 *                 <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export route tables
 *                    to Amazon S3</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ExportTransitGatewayRoutesRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   S3Bucket: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExportTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ExportTransitGatewayRoutesResult
 * //   S3Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportTransitGatewayRoutesCommandInput - {@link ExportTransitGatewayRoutesCommandInput}
 * @returns {@link ExportTransitGatewayRoutesCommandOutput}
 * @see {@link ExportTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ExportTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ExportTransitGatewayRoutesCommand extends $Command
  .classBuilder<
    ExportTransitGatewayRoutesCommandInput,
    ExportTransitGatewayRoutesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ExportTransitGatewayRoutes", {})
  .n("EC2Client", "ExportTransitGatewayRoutesCommand")
  .sc(ExportTransitGatewayRoutes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportTransitGatewayRoutesRequest;
      output: ExportTransitGatewayRoutesResult;
    };
    sdk: {
      input: ExportTransitGatewayRoutesCommandInput;
      output: ExportTransitGatewayRoutesCommandOutput;
    };
  };
}
