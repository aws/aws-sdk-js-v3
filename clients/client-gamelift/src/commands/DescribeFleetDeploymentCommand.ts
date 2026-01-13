// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DescribeFleetDeploymentInput, DescribeFleetDeploymentOutput } from "../models/models_0";
import { DescribeFleetDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetDeploymentCommand}.
 */
export interface DescribeFleetDeploymentCommandInput extends DescribeFleetDeploymentInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetDeploymentCommand}.
 */
export interface DescribeFleetDeploymentCommandOutput extends DescribeFleetDeploymentOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Retrieves information about a managed container fleet deployment. </p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Get information about the latest deployment for a specific fleet. Provide the
 *                     fleet ID or ARN.</p>
 *             </li>
 *             <li>
 *                <p> Get information about a specific deployment. Provide the fleet ID or ARN and
 *                     the deployment ID.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, a <code>FleetDeployment</code> object is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetDeploymentCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetDeploymentCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetDeploymentInput
 *   FleetId: "STRING_VALUE", // required
 *   DeploymentId: "STRING_VALUE",
 * };
 * const command = new DescribeFleetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetDeploymentOutput
 * //   FleetDeployment: { // FleetDeployment
 * //     DeploymentId: "STRING_VALUE",
 * //     FleetId: "STRING_VALUE",
 * //     GameServerBinaryArn: "STRING_VALUE",
 * //     RollbackGameServerBinaryArn: "STRING_VALUE",
 * //     PerInstanceBinaryArn: "STRING_VALUE",
 * //     RollbackPerInstanceBinaryArn: "STRING_VALUE",
 * //     DeploymentStatus: "IN_PROGRESS" || "IMPAIRED" || "COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "CANCELLED" || "PENDING",
 * //     DeploymentConfiguration: { // DeploymentConfiguration
 * //       ProtectionStrategy: "WITH_PROTECTION" || "IGNORE_PROTECTION",
 * //       MinimumHealthyPercentage: Number("int"),
 * //       ImpairmentStrategy: "MAINTAIN" || "ROLLBACK",
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * //   LocationalDeployments: { // LocationalDeployments
 * //     "<keys>": { // LocationalDeployment
 * //       DeploymentStatus: "IN_PROGRESS" || "IMPAIRED" || "COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "CANCELLED" || "PENDING",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFleetDeploymentCommandInput - {@link DescribeFleetDeploymentCommandInput}
 * @returns {@link DescribeFleetDeploymentCommandOutput}
 * @see {@link DescribeFleetDeploymentCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetDeploymentCommandOutput} for command's `response` shape.
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
export class DescribeFleetDeploymentCommand extends $Command
  .classBuilder<
    DescribeFleetDeploymentCommandInput,
    DescribeFleetDeploymentCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeFleetDeployment", {})
  .n("GameLiftClient", "DescribeFleetDeploymentCommand")
  .sc(DescribeFleetDeployment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetDeploymentInput;
      output: DescribeFleetDeploymentOutput;
    };
    sdk: {
      input: DescribeFleetDeploymentCommandInput;
      output: DescribeFleetDeploymentCommandOutput;
    };
  };
}
