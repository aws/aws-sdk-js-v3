// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCoipPoolUsageRequest, GetCoipPoolUsageResult } from "../models/models_6";
import { de_GetCoipPoolUsageCommand, se_GetCoipPoolUsageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoipPoolUsageCommand}.
 */
export interface GetCoipPoolUsageCommandInput extends GetCoipPoolUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetCoipPoolUsageCommand}.
 */
export interface GetCoipPoolUsageCommandOutput extends GetCoipPoolUsageResult, __MetadataBearer {}

/**
 * <p>Describes the allocations from the specified customer-owned address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCoipPoolUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCoipPoolUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetCoipPoolUsageRequest
 *   PoolId: "STRING_VALUE", // required
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
 * const command = new GetCoipPoolUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetCoipPoolUsageResult
 * //   CoipPoolId: "STRING_VALUE",
 * //   CoipAddressUsages: [ // CoipAddressUsageSet
 * //     { // CoipAddressUsage
 * //       AllocationId: "STRING_VALUE",
 * //       AwsAccountId: "STRING_VALUE",
 * //       AwsService: "STRING_VALUE",
 * //       CoIp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LocalGatewayRouteTableId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoipPoolUsageCommandInput - {@link GetCoipPoolUsageCommandInput}
 * @returns {@link GetCoipPoolUsageCommandOutput}
 * @see {@link GetCoipPoolUsageCommandInput} for command's `input` shape.
 * @see {@link GetCoipPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetCoipPoolUsageCommand extends $Command
  .classBuilder<
    GetCoipPoolUsageCommandInput,
    GetCoipPoolUsageCommandOutput,
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
  .s("AmazonEC2", "GetCoipPoolUsage", {})
  .n("EC2Client", "GetCoipPoolUsageCommand")
  .f(void 0, void 0)
  .ser(se_GetCoipPoolUsageCommand)
  .de(de_GetCoipPoolUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoipPoolUsageRequest;
      output: GetCoipPoolUsageResult;
    };
    sdk: {
      input: GetCoipPoolUsageCommandInput;
      output: GetCoipPoolUsageCommandOutput;
    };
  };
}
