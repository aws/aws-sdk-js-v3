// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringAuthorizationInput, DeleteVpcPeeringAuthorizationOutput } from "../models/models_0";
import {
  de_DeleteVpcPeeringAuthorizationCommand,
  se_DeleteVpcPeeringAuthorizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcPeeringAuthorizationCommand}.
 */
export interface DeleteVpcPeeringAuthorizationCommandInput extends DeleteVpcPeeringAuthorizationInput {}
/**
 * @public
 *
 * The output of {@link DeleteVpcPeeringAuthorizationCommand}.
 */
export interface DeleteVpcPeeringAuthorizationCommandOutput
  extends DeleteVpcPeeringAuthorizationOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to
 *             delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteVpcPeeringAuthorizationInput
 *   GameLiftAwsAccountId: "STRING_VALUE", // required
 *   PeerVpcId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcPeeringAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpcPeeringAuthorizationCommandInput - {@link DeleteVpcPeeringAuthorizationCommandInput}
 * @returns {@link DeleteVpcPeeringAuthorizationCommandOutput}
 * @see {@link DeleteVpcPeeringAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringAuthorizationCommandOutput} for command's `response` shape.
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
export class DeleteVpcPeeringAuthorizationCommand extends $Command
  .classBuilder<
    DeleteVpcPeeringAuthorizationCommandInput,
    DeleteVpcPeeringAuthorizationCommandOutput,
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
  .s("GameLift", "DeleteVpcPeeringAuthorization", {})
  .n("GameLiftClient", "DeleteVpcPeeringAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcPeeringAuthorizationCommand)
  .de(de_DeleteVpcPeeringAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcPeeringAuthorizationInput;
      output: {};
    };
    sdk: {
      input: DeleteVpcPeeringAuthorizationCommandInput;
      output: DeleteVpcPeeringAuthorizationCommandOutput;
    };
  };
}
