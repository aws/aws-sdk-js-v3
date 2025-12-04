// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  SearchTransitGatewayMulticastGroupsRequest,
  SearchTransitGatewayMulticastGroupsResult,
} from "../models/models_7";
import { SearchTransitGatewayMulticastGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTransitGatewayMulticastGroupsCommand}.
 */
export interface SearchTransitGatewayMulticastGroupsCommandInput extends SearchTransitGatewayMulticastGroupsRequest {}
/**
 * @public
 *
 * The output of {@link SearchTransitGatewayMulticastGroupsCommand}.
 */
export interface SearchTransitGatewayMulticastGroupsCommandOutput
  extends SearchTransitGatewayMulticastGroupsResult,
    __MetadataBearer {}

/**
 * <p>Searches one or more  transit gateway multicast groups and returns the group membership information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayMulticastGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayMulticastGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // SearchTransitGatewayMulticastGroupsRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
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
 * const command = new SearchTransitGatewayMulticastGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SearchTransitGatewayMulticastGroupsResult
 * //   MulticastGroups: [ // TransitGatewayMulticastGroupList
 * //     { // TransitGatewayMulticastGroup
 * //       GroupIpAddress: "STRING_VALUE",
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       GroupMember: true || false,
 * //       GroupSource: true || false,
 * //       MemberType: "static" || "igmp",
 * //       SourceType: "static" || "igmp",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchTransitGatewayMulticastGroupsCommandInput - {@link SearchTransitGatewayMulticastGroupsCommandInput}
 * @returns {@link SearchTransitGatewayMulticastGroupsCommandOutput}
 * @see {@link SearchTransitGatewayMulticastGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayMulticastGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class SearchTransitGatewayMulticastGroupsCommand extends $Command
  .classBuilder<
    SearchTransitGatewayMulticastGroupsCommandInput,
    SearchTransitGatewayMulticastGroupsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "SearchTransitGatewayMulticastGroups", {})
  .n("EC2Client", "SearchTransitGatewayMulticastGroupsCommand")
  .sc(SearchTransitGatewayMulticastGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTransitGatewayMulticastGroupsRequest;
      output: SearchTransitGatewayMulticastGroupsResult;
    };
    sdk: {
      input: SearchTransitGatewayMulticastGroupsCommandInput;
      output: SearchTransitGatewayMulticastGroupsCommandOutput;
    };
  };
}
