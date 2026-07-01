// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/models_2";
import { DeleteNatGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNatGatewayCommand}.
 */
export interface DeleteNatGatewayCommandInput extends DeleteNatGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNatGatewayCommand}.
 */
export interface DeleteNatGatewayCommandOutput extends DeleteNatGatewayResult, __MetadataBearer {}

/**
 * <p>Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address,
 *           but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway
 *           routes in your route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNatGatewayRequest
 *   DryRun: true || false,
 *   NatGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNatGatewayResult
 * //   NatGatewayId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNatGatewayCommandInput - {@link DeleteNatGatewayCommandInput}
 * @returns {@link DeleteNatGatewayCommandOutput}
 * @see {@link DeleteNatGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a NAT gateway
 * ```javascript
 * // This example deletes the specified NAT gateway.
 * const input = {
 *   NatGatewayId: "nat-04ae55e711cec5680"
 * };
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NatGatewayId: "nat-04ae55e711cec5680"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNatGatewayCommand extends command<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNatGateway",
  DeleteNatGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNatGatewayRequest;
      output: DeleteNatGatewayResult;
    };
    sdk: {
      input: DeleteNatGatewayCommandInput;
      output: DeleteNatGatewayCommandOutput;
    };
  };
}
