// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/models_7";
import { de_ReplaceRouteTableAssociationCommand, se_ReplaceRouteTableAssociationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplaceRouteTableAssociationCommand}.
 */
export interface ReplaceRouteTableAssociationCommandInput extends ReplaceRouteTableAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceRouteTableAssociationCommand}.
 */
export interface ReplaceRouteTableAssociationCommandOutput
  extends ReplaceRouteTableAssociationResult,
    __MetadataBearer {}

/**
 * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation
 *         completes, the subnet or gateway uses the routes in the new route table. For more
 *         information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 *         tables</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteTableAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteTableAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceRouteTableAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 * };
 * const command = new ReplaceRouteTableAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceRouteTableAssociationResult
 * //   NewAssociationId: "STRING_VALUE",
 * //   AssociationState: { // RouteTableAssociationState
 * //     State: "associating" || "associated" || "disassociating" || "disassociated" || "failed",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ReplaceRouteTableAssociationCommandInput - {@link ReplaceRouteTableAssociationCommandInput}
 * @returns {@link ReplaceRouteTableAssociationCommandOutput}
 * @see {@link ReplaceRouteTableAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To replace the route table associated with a subnet
 * ```javascript
 * // This example associates the specified route table with the subnet for the specified route table association.
 * const input = {
 *   "AssociationId": "rtbassoc-781d0d1a",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new ReplaceRouteTableAssociationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NewAssociationId": "rtbassoc-3a1f0f58"
 * }
 * *\/
 * // example id: ec2-replace-route-table-association-1
 * ```
 *
 */
export class ReplaceRouteTableAssociationCommand extends $Command
  .classBuilder<
    ReplaceRouteTableAssociationCommandInput,
    ReplaceRouteTableAssociationCommandOutput,
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
  .s("AmazonEC2", "ReplaceRouteTableAssociation", {})
  .n("EC2Client", "ReplaceRouteTableAssociationCommand")
  .f(void 0, void 0)
  .ser(se_ReplaceRouteTableAssociationCommand)
  .de(de_ReplaceRouteTableAssociationCommand)
  .build() {}
