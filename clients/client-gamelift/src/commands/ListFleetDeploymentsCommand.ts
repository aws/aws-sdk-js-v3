// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { ListFleetDeploymentsInput, ListFleetDeploymentsOutput } from "../models/models_0";
import { ListFleetDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFleetDeploymentsCommand}.
 */
export interface ListFleetDeploymentsCommandInput extends ListFleetDeploymentsInput {}
/**
 * @public
 *
 * The output of {@link ListFleetDeploymentsCommand}.
 */
export interface ListFleetDeploymentsCommandOutput extends ListFleetDeploymentsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Retrieves a collection of container fleet deployments in an Amazon Web Services Region. Use the
 *             pagination parameters to retrieve results as a set of sequential pages.  </p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Get a list of all deployments. Call this operation without specifying a fleet ID. </p>
 *             </li>
 *             <li>
 *                <p>Get a list of all deployments for a fleet. Specify the container fleet ID or ARN value.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, this operation returns a list of deployments that match the request
 *             parameters. A NextToken value is also returned if there are more result pages to
 *             retrieve.</p>
 *          <note>
 *             <p>Deployments are returned starting with the latest.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListFleetDeploymentsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListFleetDeploymentsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ListFleetDeploymentsInput
 *   FleetId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFleetDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetDeploymentsOutput
 * //   FleetDeployments: [ // FleetDeployments
 * //     { // FleetDeployment
 * //       DeploymentId: "STRING_VALUE",
 * //       FleetId: "STRING_VALUE",
 * //       GameServerBinaryArn: "STRING_VALUE",
 * //       RollbackGameServerBinaryArn: "STRING_VALUE",
 * //       PerInstanceBinaryArn: "STRING_VALUE",
 * //       RollbackPerInstanceBinaryArn: "STRING_VALUE",
 * //       DeploymentStatus: "IN_PROGRESS" || "IMPAIRED" || "COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "CANCELLED" || "PENDING",
 * //       DeploymentConfiguration: { // DeploymentConfiguration
 * //         ProtectionStrategy: "WITH_PROTECTION" || "IGNORE_PROTECTION",
 * //         MinimumHealthyPercentage: Number("int"),
 * //         ImpairmentStrategy: "MAINTAIN" || "ROLLBACK",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetDeploymentsCommandInput - {@link ListFleetDeploymentsCommandInput}
 * @returns {@link ListFleetDeploymentsCommandOutput}
 * @see {@link ListFleetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListFleetDeploymentsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class ListFleetDeploymentsCommand extends $Command
  .classBuilder<
    ListFleetDeploymentsCommandInput,
    ListFleetDeploymentsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "ListFleetDeployments", {})
  .n("GameLiftClient", "ListFleetDeploymentsCommand")
  .sc(ListFleetDeployments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFleetDeploymentsInput;
      output: ListFleetDeploymentsOutput;
    };
    sdk: {
      input: ListFleetDeploymentsCommandInput;
      output: ListFleetDeploymentsCommandOutput;
    };
  };
}
