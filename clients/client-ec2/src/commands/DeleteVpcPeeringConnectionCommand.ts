// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcPeeringConnectionRequest, DeleteVpcPeeringConnectionResult } from "../models/models_3";
import { DeleteVpcPeeringConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcPeeringConnectionCommand}.
 */
export interface DeleteVpcPeeringConnectionCommandInput extends DeleteVpcPeeringConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcPeeringConnectionCommand}.
 */
export interface DeleteVpcPeeringConnectionCommandOutput extends DeleteVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner
 *             of the accepter VPC can delete the VPC peering connection if it's in the
 *                 <code>active</code> state. The owner of the requester VPC can delete a VPC peering
 *             connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering
 *           connection that's in the <code>failed</code> or <code>rejected</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcPeeringConnectionRequest
 *   DryRun: true || false,
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcPeeringConnectionResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteVpcPeeringConnectionCommandInput - {@link DeleteVpcPeeringConnectionCommandInput}
 * @returns {@link DeleteVpcPeeringConnectionCommandOutput}
 * @see {@link DeleteVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpcPeeringConnectionCommand extends $Command
  .classBuilder<
    DeleteVpcPeeringConnectionCommandInput,
    DeleteVpcPeeringConnectionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpcPeeringConnection", {})
  .n("EC2Client", "DeleteVpcPeeringConnectionCommand")
  .sc(DeleteVpcPeeringConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcPeeringConnectionRequest;
      output: DeleteVpcPeeringConnectionResult;
    };
    sdk: {
      input: DeleteVpcPeeringConnectionCommandInput;
      output: DeleteVpcPeeringConnectionCommandOutput;
    };
  };
}
