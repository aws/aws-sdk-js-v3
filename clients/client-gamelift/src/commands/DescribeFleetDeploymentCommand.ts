// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFleetDeploymentInput, DescribeFleetDeploymentOutput } from "../models/models_0";
import { DescribeFleetDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** Container
 *
 * Retrieves information about a managed container fleet deployment.
 *
 * **Request options**
 *
 * - Get information about the latest deployment for a specific fleet. Provide the fleet ID or ARN.
 * - Get information about a specific deployment. Provide the fleet ID or ARN and the deployment ID.
 *
 * **Results**
 *
 * If successful, a `FleetDeployment` object is returned.
 *
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DescribeFleetDeploymentCommand extends command<DescribeFleetDeploymentCommandInput, DescribeFleetDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFleetDeployment",
  DescribeFleetDeployment$
) {
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
