// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchLocalGatewayRoutesRequest, SearchLocalGatewayRoutesResult } from "../models/models_7";
import { de_SearchLocalGatewayRoutesCommand, se_SearchLocalGatewayRoutesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchLocalGatewayRoutesCommand}.
 */
export interface SearchLocalGatewayRoutesCommandInput extends SearchLocalGatewayRoutesRequest {}
/**
 * @public
 *
 * The output of {@link SearchLocalGatewayRoutesCommand}.
 */
export interface SearchLocalGatewayRoutesCommandOutput extends SearchLocalGatewayRoutesResult, __MetadataBearer {}

/**
 * <p>Searches for routes in the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchLocalGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchLocalGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // SearchLocalGatewayRoutesRequest
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
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
 * const command = new SearchLocalGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // SearchLocalGatewayRoutesResult
 * //   Routes: [ // LocalGatewayRouteList
 * //     { // LocalGatewayRoute
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //       Type: "static" || "propagated",
 * //       State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       LocalGatewayRouteTableArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       CoipPoolId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       DestinationPrefixListId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchLocalGatewayRoutesCommandInput - {@link SearchLocalGatewayRoutesCommandInput}
 * @returns {@link SearchLocalGatewayRoutesCommandOutput}
 * @see {@link SearchLocalGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchLocalGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class SearchLocalGatewayRoutesCommand extends $Command
  .classBuilder<
    SearchLocalGatewayRoutesCommandInput,
    SearchLocalGatewayRoutesCommandOutput,
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
  .s("AmazonEC2", "SearchLocalGatewayRoutes", {})
  .n("EC2Client", "SearchLocalGatewayRoutesCommand")
  .f(void 0, void 0)
  .ser(se_SearchLocalGatewayRoutesCommand)
  .de(de_SearchLocalGatewayRoutesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchLocalGatewayRoutesRequest;
      output: SearchLocalGatewayRoutesResult;
    };
    sdk: {
      input: SearchLocalGatewayRoutesCommandInput;
      output: SearchLocalGatewayRoutesCommandOutput;
    };
  };
}
