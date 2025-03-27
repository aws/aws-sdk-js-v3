// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayRequest, DeleteTransitGatewayResult } from "../models/models_3";
import { de_DeleteTransitGatewayCommand, se_DeleteTransitGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayCommand}.
 */
export interface DeleteTransitGatewayCommandInput extends DeleteTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayCommand}.
 */
export interface DeleteTransitGatewayCommandOutput extends DeleteTransitGatewayResult, __MetadataBearer {}

/**
 * <p>Deletes the specified transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayRequest
 *   TransitGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayResult
 * //   TransitGateway: { // TransitGateway
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayOptions
 * //       AmazonSideAsn: Number("long"),
 * //       TransitGatewayCidrBlocks: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AutoAcceptSharedAttachments: "enable" || "disable",
 * //       DefaultRouteTableAssociation: "enable" || "disable",
 * //       AssociationDefaultRouteTableId: "STRING_VALUE",
 * //       DefaultRouteTablePropagation: "enable" || "disable",
 * //       PropagationDefaultRouteTableId: "STRING_VALUE",
 * //       VpnEcmpSupport: "enable" || "disable",
 * //       DnsSupport: "enable" || "disable",
 * //       SecurityGroupReferencingSupport: "enable" || "disable",
 * //       MulticastSupport: "enable" || "disable",
 * //     },
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
 * @param DeleteTransitGatewayCommandInput - {@link DeleteTransitGatewayCommandInput}
 * @returns {@link DeleteTransitGatewayCommandOutput}
 * @see {@link DeleteTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayCommandInput,
    DeleteTransitGatewayCommandOutput,
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
  .s("AmazonEC2", "DeleteTransitGateway", {})
  .n("EC2Client", "DeleteTransitGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTransitGatewayCommand)
  .de(de_DeleteTransitGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayRequest;
      output: DeleteTransitGatewayResult;
    };
    sdk: {
      input: DeleteTransitGatewayCommandInput;
      output: DeleteTransitGatewayCommandOutput;
    };
  };
}
