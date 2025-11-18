// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTransitGatewayPrefixListReferencesRequest,
  GetTransitGatewayPrefixListReferencesResult,
} from "../models/models_7";
import { GetTransitGatewayPrefixListReferences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPrefixListReferencesCommand}.
 */
export interface GetTransitGatewayPrefixListReferencesCommandInput
  extends GetTransitGatewayPrefixListReferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPrefixListReferencesCommand}.
 */
export interface GetTransitGatewayPrefixListReferencesCommandOutput
  extends GetTransitGatewayPrefixListReferencesResult,
    __MetadataBearer {}

/**
 * <p>Gets information about the prefix list references in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPrefixListReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPrefixListReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayPrefixListReferencesRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
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
 * const command = new GetTransitGatewayPrefixListReferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPrefixListReferencesResult
 * //   TransitGatewayPrefixListReferences: [ // TransitGatewayPrefixListReferenceSet
 * //     { // TransitGatewayPrefixListReference
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       PrefixListOwnerId: "STRING_VALUE",
 * //       State: "pending" || "available" || "modifying" || "deleting",
 * //       Blackhole: true || false,
 * //       TransitGatewayAttachment: { // TransitGatewayPrefixListAttachment
 * //         TransitGatewayAttachmentId: "STRING_VALUE",
 * //         ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //         ResourceId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPrefixListReferencesCommandInput - {@link GetTransitGatewayPrefixListReferencesCommandInput}
 * @returns {@link GetTransitGatewayPrefixListReferencesCommandOutput}
 * @see {@link GetTransitGatewayPrefixListReferencesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPrefixListReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayPrefixListReferencesCommand extends $Command
  .classBuilder<
    GetTransitGatewayPrefixListReferencesCommandInput,
    GetTransitGatewayPrefixListReferencesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetTransitGatewayPrefixListReferences", {})
  .n("EC2Client", "GetTransitGatewayPrefixListReferencesCommand")
  .sc(GetTransitGatewayPrefixListReferences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayPrefixListReferencesRequest;
      output: GetTransitGatewayPrefixListReferencesResult;
    };
    sdk: {
      input: GetTransitGatewayPrefixListReferencesCommandInput;
      output: GetTransitGatewayPrefixListReferencesCommandOutput;
    };
  };
}
