// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVpcPeeringConnectionInput, DeleteVpcPeeringConnectionOutput } from "../models/models_0";
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
export interface DeleteVpcPeeringConnectionCommandInput extends DeleteVpcPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteVpcPeeringConnectionCommand}.
 */
export interface DeleteVpcPeeringConnectionCommandOutput extends DeleteVpcPeeringConnectionOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.
 *
 * Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteVpcPeeringConnectionInput
 *   FleetId: "STRING_VALUE", // required
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpcPeeringConnectionCommandInput - {@link DeleteVpcPeeringConnectionCommandInput}
 * @returns {@link DeleteVpcPeeringConnectionCommandOutput}
 * @see {@link DeleteVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
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
      input: DeleteVpcPeeringConnectionInput;
      output: {};
    };
    sdk: {
      input: DeleteVpcPeeringConnectionCommandInput;
      output: DeleteVpcPeeringConnectionCommandOutput;
    };
  };
}
