// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVpcPeeringConnectionRequest, DeleteVpcPeeringConnectionResult } from "../models/models_3";
import { DeleteVpcPeeringConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a VPC peering connection. Either the owner of the requester VPC or the owner of the accepter VPC can delete the VPC peering connection if it's in the `active` state. The owner of the requester VPC can delete a VPC peering connection in the `pending-acceptance` state. You cannot delete a VPC peering connection that's in the `failed` or `rejected` state.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DeleteVpcPeeringConnectionCommand extends command<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVpcPeeringConnection",
  DeleteVpcPeeringConnection$
) {
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
