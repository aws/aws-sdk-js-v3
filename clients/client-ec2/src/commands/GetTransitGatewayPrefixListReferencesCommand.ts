// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayPrefixListReferencesRequest } from "../models/models_6";
import { GetTransitGatewayPrefixListReferencesResult } from "../models/models_7";
import {
  de_GetTransitGatewayPrefixListReferencesCommand,
  se_GetTransitGatewayPrefixListReferencesCommand,
} from "../protocols/Aws_ec2";

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
 * //         ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetTransitGatewayPrefixListReferences", {})
  .n("EC2Client", "GetTransitGatewayPrefixListReferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetTransitGatewayPrefixListReferencesCommand)
  .de(de_GetTransitGatewayPrefixListReferencesCommand)
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
