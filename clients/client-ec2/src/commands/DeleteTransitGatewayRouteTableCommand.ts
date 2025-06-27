// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayRouteTableRequest, DeleteTransitGatewayRouteTableResult } from "../models/models_3";
import {
  de_DeleteTransitGatewayRouteTableCommand,
  se_DeleteTransitGatewayRouteTableCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayRouteTableCommand}.
 */
export interface DeleteTransitGatewayRouteTableCommandInput extends DeleteTransitGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayRouteTableCommand}.
 */
export interface DeleteTransitGatewayRouteTableCommandOutput
  extends DeleteTransitGatewayRouteTableResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified transit gateway route table. If there are any route tables associated with
 *          the transit gateway route table, you must first run <a>DisassociateRouteTable</a> before you can delete the transit gateway route table. This removes any route tables associated with the transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayRouteTableRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayRouteTableResult
 * //   TransitGatewayRouteTable: { // TransitGatewayRouteTable
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     DefaultAssociationRouteTable: true || false,
 * //     DefaultPropagationRouteTable: true || false,
 * //     CreationTime: new Date("TIMESTAMP"),
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
 * @param DeleteTransitGatewayRouteTableCommandInput - {@link DeleteTransitGatewayRouteTableCommandInput}
 * @returns {@link DeleteTransitGatewayRouteTableCommandOutput}
 * @see {@link DeleteTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayRouteTableCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayRouteTableCommandInput,
    DeleteTransitGatewayRouteTableCommandOutput,
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
  .s("AmazonEC2", "DeleteTransitGatewayRouteTable", {})
  .n("EC2Client", "DeleteTransitGatewayRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTransitGatewayRouteTableCommand)
  .de(de_DeleteTransitGatewayRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayRouteTableRequest;
      output: DeleteTransitGatewayRouteTableResult;
    };
    sdk: {
      input: DeleteTransitGatewayRouteTableCommandInput;
      output: DeleteTransitGatewayRouteTableCommandOutput;
    };
  };
}
