// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFleetAttributesInput, UpdateFleetAttributesOutput } from "../models/models_1";
import { UpdateFleetAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFleetAttributesCommand}.
 */
export interface UpdateFleetAttributesCommandInput extends UpdateFleetAttributesInput {}
/**
 * @public
 *
 * The output of {@link UpdateFleetAttributesCommand}.
 */
export interface UpdateFleetAttributesCommandOutput extends UpdateFleetAttributesOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere
 *
 * Updates a fleet's mutable attributes, such as game session protection and resource creation limits.
 *
 * To update fleet attributes, specify the fleet ID and the property values that you want to change. If successful, Amazon GameLift Servers returns the identifiers for the updated fleet.
 *
 * > **Note:** A managed fleet's runtime environment, which depends on the fleet's Amazon Machine Image (AMI) version, can't be updated. You must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see [Security best practices for Amazon GameLift Servers](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/security-best-practices.html).
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateFleetAttributesInput
 *   FleetId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 *   ResourceCreationLimitPolicy: { // ResourceCreationLimitPolicy
 *     NewGameSessionsPerCreator: Number("int"),
 *     PolicyPeriodInMinutes: Number("int"),
 *   },
 *   MetricGroups: [ // MetricGroupList
 *     "STRING_VALUE",
 *   ],
 *   AnywhereConfiguration: { // AnywhereConfiguration
 *     Cost: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateFleetAttributesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetAttributesOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFleetAttributesCommandInput - {@link UpdateFleetAttributesCommandInput}
 * @returns {@link UpdateFleetAttributesCommandOutput}
 * @see {@link UpdateFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
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
export class UpdateFleetAttributesCommand extends command<UpdateFleetAttributesCommandInput, UpdateFleetAttributesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFleetAttributes",
  UpdateFleetAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFleetAttributesInput;
      output: UpdateFleetAttributesOutput;
    };
    sdk: {
      input: UpdateFleetAttributesCommandInput;
      output: UpdateFleetAttributesCommandOutput;
    };
  };
}
