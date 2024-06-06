// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
} from "../models/models_2";
import {
  de_DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  se_DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}.
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput
  extends DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}.
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput
  extends DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
    __MetadataBearer {}

/**
 * <p>
 *       Deletes a local gateway route table virtual interface group association.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest
 *   LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult
 * //   LocalGatewayRouteTableVirtualInterfaceGroupAssociation: { // LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 * //     LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput - {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput}
 * @returns {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput}
 * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand extends $Command
  .classBuilder<
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
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
  .s("AmazonEC2", "DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation", {})
  .n("EC2Client", "DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand)
  .de(de_DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand)
  .build() {}
