// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTransitGatewayRouteTablePropagationsRequest,
  GetTransitGatewayRouteTablePropagationsResult,
} from "../models/models_7";
import {
  de_GetTransitGatewayRouteTablePropagationsCommand,
  se_GetTransitGatewayRouteTablePropagationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayRouteTablePropagationsCommand}.
 */
export interface GetTransitGatewayRouteTablePropagationsCommandInput
  extends GetTransitGatewayRouteTablePropagationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayRouteTablePropagationsCommand}.
 */
export interface GetTransitGatewayRouteTablePropagationsCommandOutput
  extends GetTransitGatewayRouteTablePropagationsResult,
    __MetadataBearer {}

/**
 * <p>Gets information about the route table propagations for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayRouteTablePropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayRouteTablePropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayRouteTablePropagationsRequest
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
 * const command = new GetTransitGatewayRouteTablePropagationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayRouteTablePropagationsResult
 * //   TransitGatewayRouteTablePropagations: [ // TransitGatewayRouteTablePropagationList
 * //     { // TransitGatewayRouteTablePropagation
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       State: "enabling" || "enabled" || "disabling" || "disabled",
 * //       TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayRouteTablePropagationsCommandInput - {@link GetTransitGatewayRouteTablePropagationsCommandInput}
 * @returns {@link GetTransitGatewayRouteTablePropagationsCommandOutput}
 * @see {@link GetTransitGatewayRouteTablePropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTablePropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayRouteTablePropagationsCommand extends $Command
  .classBuilder<
    GetTransitGatewayRouteTablePropagationsCommandInput,
    GetTransitGatewayRouteTablePropagationsCommandOutput,
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
  .s("AmazonEC2", "GetTransitGatewayRouteTablePropagations", {})
  .n("EC2Client", "GetTransitGatewayRouteTablePropagationsCommand")
  .f(void 0, void 0)
  .ser(se_GetTransitGatewayRouteTablePropagationsCommand)
  .de(de_GetTransitGatewayRouteTablePropagationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayRouteTablePropagationsRequest;
      output: GetTransitGatewayRouteTablePropagationsResult;
    };
    sdk: {
      input: GetTransitGatewayRouteTablePropagationsCommandInput;
      output: GetTransitGatewayRouteTablePropagationsCommandOutput;
    };
  };
}
