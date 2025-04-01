// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteTableRequest } from "../models/models_3";
import { de_DeleteRouteTableCommand, se_DeleteRouteTableCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteTableCommand}.
 */
export interface DeleteRouteTableCommandInput extends DeleteRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteTableCommand}.
 */
export interface DeleteRouteTableCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteTableRequest
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteTableCommandInput - {@link DeleteRouteTableCommandInput}
 * @returns {@link DeleteRouteTableCommandOutput}
 * @see {@link DeleteRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a route table
 * ```javascript
 * // This example deletes the specified route table.
 * const input = {
 *   RouteTableId: "rtb-22574640"
 * };
 * const command = new DeleteRouteTableCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRouteTableCommand extends $Command
  .classBuilder<
    DeleteRouteTableCommandInput,
    DeleteRouteTableCommandOutput,
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
  .s("AmazonEC2", "DeleteRouteTable", {})
  .n("EC2Client", "DeleteRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteTableCommand)
  .de(de_DeleteRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteRouteTableCommandInput;
      output: DeleteRouteTableCommandOutput;
    };
  };
}
