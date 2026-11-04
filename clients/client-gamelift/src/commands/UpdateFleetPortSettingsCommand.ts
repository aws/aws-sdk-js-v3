// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput } from "../models/models_1";
import { UpdateFleetPortSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFleetPortSettingsCommand}.
 */
export interface UpdateFleetPortSettingsCommandInput extends UpdateFleetPortSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateFleetPortSettingsCommand}.
 */
export interface UpdateFleetPortSettingsCommandOutput extends UpdateFleetPortSettingsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Updates permissions that allow inbound traffic to connect to game sessions in the fleet.
 *
 * To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in `InboundPermissionAuthorizations`, and permissions you want to remove in `InboundPermissionRevocations`. Permissions to be removed must match existing fleet permissions.
 *
 * If successful, the fleet identifiers for the updated fleet are returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling `DescribeFleetPortSettings` with a location name.
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateFleetPortSettingsInput
 *   FleetId: "STRING_VALUE", // required
 *   InboundPermissionAuthorizations: [ // IpPermissionsList
 *     { // IpPermission
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 *   InboundPermissionRevocations: [
 *     {
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 * };
 * const command = new UpdateFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetPortSettingsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFleetPortSettingsCommandInput - {@link UpdateFleetPortSettingsCommandInput}
 * @returns {@link UpdateFleetPortSettingsCommandOutput}
 * @see {@link UpdateFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetPortSettingsCommandOutput} for command's `response` shape.
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
export class UpdateFleetPortSettingsCommand extends command<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFleetPortSettings",
  UpdateFleetPortSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFleetPortSettingsInput;
      output: UpdateFleetPortSettingsOutput;
    };
    sdk: {
      input: UpdateFleetPortSettingsCommandInput;
      output: UpdateFleetPortSettingsCommandOutput;
    };
  };
}
