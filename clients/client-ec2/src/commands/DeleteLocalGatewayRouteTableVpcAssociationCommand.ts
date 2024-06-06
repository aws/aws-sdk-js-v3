// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteLocalGatewayRouteTableVpcAssociationRequest,
  DeleteLocalGatewayRouteTableVpcAssociationResult,
} from "../models/models_2";
import {
  de_DeleteLocalGatewayRouteTableVpcAssociationCommand,
  se_DeleteLocalGatewayRouteTableVpcAssociationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}.
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationCommandInput
  extends DeleteLocalGatewayRouteTableVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}.
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationCommandOutput
  extends DeleteLocalGatewayRouteTableVpcAssociationResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified association between a VPC and local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayRouteTableVpcAssociationRequest
 *   LocalGatewayRouteTableVpcAssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayRouteTableVpcAssociationResult
 * //   LocalGatewayRouteTableVpcAssociation: { // LocalGatewayRouteTableVpcAssociation
 * //     LocalGatewayRouteTableVpcAssociationId: "STRING_VALUE",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
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
 * @param DeleteLocalGatewayRouteTableVpcAssociationCommandInput - {@link DeleteLocalGatewayRouteTableVpcAssociationCommandInput}
 * @returns {@link DeleteLocalGatewayRouteTableVpcAssociationCommandOutput}
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteLocalGatewayRouteTableVpcAssociationCommand extends $Command
  .classBuilder<
    DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
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
  .s("AmazonEC2", "DeleteLocalGatewayRouteTableVpcAssociation", {})
  .n("EC2Client", "DeleteLocalGatewayRouteTableVpcAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLocalGatewayRouteTableVpcAssociationCommand)
  .de(de_DeleteLocalGatewayRouteTableVpcAssociationCommand)
  .build() {}
