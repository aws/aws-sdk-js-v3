// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportTransitGatewayRoutesRequest, ExportTransitGatewayRoutesResult } from "../models/models_6";
import { de_ExportTransitGatewayRoutesCommand, se_ExportTransitGatewayRoutesCommand } from "../protocols/Aws_ec2";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ExportTransitGatewayRoutes", {})
  .n("EC2Client", "ExportTransitGatewayRoutesCommand")
  .f(void 0, void 0)
  .ser(se_ExportTransitGatewayRoutesCommand)
  .de(de_ExportTransitGatewayRoutesCommand)
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
