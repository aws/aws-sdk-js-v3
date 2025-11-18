// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchTransitGatewayRoutesRequest, SearchTransitGatewayRoutesResult } from "../models/models_8";
import { SearchTransitGatewayRoutes } from "../schemas/schemas_0";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 * //           ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "SearchTransitGatewayRoutes", {})
  .n("EC2Client", "SearchTransitGatewayRoutesCommand")
  .sc(SearchTransitGatewayRoutes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTransitGatewayRoutesRequest;
      output: SearchTransitGatewayRoutesResult;
    };
    sdk: {
      input: SearchTransitGatewayRoutesCommandInput;
      output: SearchTransitGatewayRoutesCommandOutput;
    };
  };
}
