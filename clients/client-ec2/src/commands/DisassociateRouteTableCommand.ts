// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateRouteTableRequest } from "../models/models_6";
import { DisassociateRouteTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateRouteTableCommand}.
 */
export interface DisassociateRouteTableCommandInput extends DisassociateRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateRouteTableCommand}.
 */
export interface DisassociateRouteTableCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a subnet or gateway from a route table.</p>
 *          <p>After you perform this action, the subnet no longer uses the routes in the route table.
 * 				Instead, it uses the routes in the VPC's main route table. For more information
 * 				about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 * 				tables</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateRouteTableRequest
 *   DryRun: true || false,
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateRouteTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateRouteTableCommandInput - {@link DisassociateRouteTableCommandInput}
 * @returns {@link DisassociateRouteTableCommandOutput}
 * @see {@link DisassociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To disassociate a route table
 * ```javascript
 * // This example disassociates the specified route table from its associated subnet.
 * const input = {
 *   AssociationId: "rtbassoc-781d0d1a"
 * };
 * const command = new DisassociateRouteTableCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateRouteTableCommand extends $Command
  .classBuilder<
    DisassociateRouteTableCommandInput,
    DisassociateRouteTableCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisassociateRouteTable", {})
  .n("EC2Client", "DisassociateRouteTableCommand")
  .sc(DisassociateRouteTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateRouteTableRequest;
      output: {};
    };
    sdk: {
      input: DisassociateRouteTableCommandInput;
      output: DisassociateRouteTableCommandOutput;
    };
  };
}
