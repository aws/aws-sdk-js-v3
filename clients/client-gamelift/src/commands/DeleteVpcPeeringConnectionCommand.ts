// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringConnectionInput, DeleteVpcPeeringConnectionOutput } from "../models/models_0";
import { de_DeleteVpcPeeringConnectionCommand, se_DeleteVpcPeeringConnectionCommand } from "../protocols/Aws_json1_1";

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
export interface DeleteVpcPeeringConnectionCommandInput extends DeleteVpcPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteVpcPeeringConnectionCommand}.
 */
export interface DeleteVpcPeeringConnectionCommandOutput extends DeleteVpcPeeringConnectionOutput, __MetadataBearer {}

/**
 * <p>Removes a VPC peering connection. To delete the connection, you must have a valid
 *             authorization for the VPC peering connection that you want to delete.. </p>
 *          <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is
 *             used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID
 *             and fleet ID. If successful, the connection is removed. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
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
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DeleteVpcPeeringConnectionCommand extends $Command
  .classBuilder<
    DeleteVpcPeeringConnectionCommandInput,
    DeleteVpcPeeringConnectionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DeleteVpcPeeringConnection", {})
  .n("GameLiftClient", "DeleteVpcPeeringConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcPeeringConnectionCommand)
  .de(de_DeleteVpcPeeringConnectionCommand)
  .build() {
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
