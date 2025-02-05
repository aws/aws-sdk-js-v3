// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteContainerFleetInput, DeleteContainerFleetOutput } from "../models/models_0";
import { de_DeleteContainerFleetCommand, se_DeleteContainerFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContainerFleetCommand}.
 */
export interface DeleteContainerFleetCommandInput extends DeleteContainerFleetInput {}
/**
 * @public
 *
 * The output of {@link DeleteContainerFleetCommand}.
 */
export interface DeleteContainerFleetCommandOutput extends DeleteContainerFleetOutput, __MetadataBearer {}

/**
 * <p>Deletes all resources and information related to a container fleet and shuts down
 *             currently running fleet instances, including those in remote locations. The container
 *             fleet must be in <code>ACTIVE</code> status to be deleted.</p>
 *          <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process,
 *             the fleet status is changed to <code>DELETING</code>. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 Fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteContainerFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteContainerFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GameLiftClient(config);
 * const input = { // DeleteContainerFleetInput
 *   FleetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerFleetCommandInput - {@link DeleteContainerFleetCommandInput}
 * @returns {@link DeleteContainerFleetCommandOutput}
 * @see {@link DeleteContainerFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class DeleteContainerFleetCommand extends $Command
  .classBuilder<
    DeleteContainerFleetCommandInput,
    DeleteContainerFleetCommandOutput,
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
  .s("GameLift", "DeleteContainerFleet", {})
  .n("GameLiftClient", "DeleteContainerFleetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContainerFleetCommand)
  .de(de_DeleteContainerFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerFleetInput;
      output: {};
    };
    sdk: {
      input: DeleteContainerFleetCommandInput;
      output: DeleteContainerFleetCommandOutput;
    };
  };
}
