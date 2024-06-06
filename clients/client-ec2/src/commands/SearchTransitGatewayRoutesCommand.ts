// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchTransitGatewayRoutesRequest, SearchTransitGatewayRoutesResult } from "../models/models_7";
import { de_SearchTransitGatewayRoutesCommand, se_SearchTransitGatewayRoutesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTransitGatewayRoutesCommand}.
 */
export interface SearchTransitGatewayRoutesCommandInput extends SearchTransitGatewayRoutesRequest {}
/**
 * @public
 *
 * The output of {@link SearchTransitGatewayRoutesCommand}.
 */
export interface SearchTransitGatewayRoutesCommandOutput extends SearchTransitGatewayRoutesResult, __MetadataBearer {}

/**
 * <p>Searches for routes in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // SearchTransitGatewayRoutesRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   Filters: [ // FilterList // required
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new SearchTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // SearchTransitGatewayRoutesResult
 * //   Routes: [ // TransitGatewayRouteList
 * //     { // TransitGatewayRoute
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //       TransitGatewayAttachments: [ // TransitGatewayRouteAttachmentList
 * //         { // TransitGatewayRouteAttachment
 * //           ResourceId: "STRING_VALUE",
 * //           TransitGatewayAttachmentId: "STRING_VALUE",
 * //           ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //         },
 * //       ],
 * //       Type: "static" || "propagated",
 * //       State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //     },
 * //   ],
 * //   AdditionalRoutesAvailable: true || false,
 * // };
 *
 * ```
 *
 * @param SearchTransitGatewayRoutesCommandInput - {@link SearchTransitGatewayRoutesCommandInput}
 * @returns {@link SearchTransitGatewayRoutesCommandOutput}
 * @see {@link SearchTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class SearchTransitGatewayRoutesCommand extends $Command
  .classBuilder<
    SearchTransitGatewayRoutesCommandInput,
    SearchTransitGatewayRoutesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "SearchTransitGatewayRoutes", {})
  .n("EC2Client", "SearchTransitGatewayRoutesCommand")
  .f(void 0, void 0)
  .ser(se_SearchTransitGatewayRoutesCommand)
  .de(de_SearchTransitGatewayRoutesCommand)
  .build() {}
