// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFleetPortSettingsInput, DescribeFleetPortSettingsOutput } from "../models/models_0";
import { DescribeFleetPortSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFleetPortSettingsCommand}.
 */
export interface DescribeFleetPortSettingsCommandInput extends DescribeFleetPortSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetPortSettingsCommand}.
 */
export interface DescribeFleetPortSettingsCommandOutput extends DescribeFleetPortSettingsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Retrieves a fleet's inbound connection permissions. Connection permissions specify IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game server processes that are running in the fleet must use a port that falls within this range.
 *
 * Use this operation in the following ways:
 *
 * - To retrieve the port settings for a fleet, identify the fleet's unique identifier.
 * - To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations.
 *
 * If successful, a set of `IpPermission` objects is returned for the requested fleet ID. When specifying a location, this operation returns a pending status. If the requested fleet has been deleted, the result set is empty.
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetPortSettingsInput
 *   FleetId: "STRING_VALUE", // required
 *   Location: "STRING_VALUE",
 * };
 * const command = new DescribeFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetPortSettingsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   InboundPermissions: [ // IpPermissionsList
 * //     { // IpPermission
 * //       FromPort: Number("int"), // required
 * //       ToPort: Number("int"), // required
 * //       IpRange: "STRING_VALUE", // required
 * //       Protocol: "TCP" || "UDP", // required
 * //     },
 * //   ],
 * //   UpdateStatus: "PENDING_UPDATE",
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetPortSettingsCommandInput - {@link DescribeFleetPortSettingsCommandInput}
 * @returns {@link DescribeFleetPortSettingsCommandOutput}
 * @see {@link DescribeFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetPortSettingsCommandOutput} for command's `response` shape.
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
export class DescribeFleetPortSettingsCommand extends command<DescribeFleetPortSettingsCommandInput, DescribeFleetPortSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFleetPortSettings",
  DescribeFleetPortSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetPortSettingsInput;
      output: DescribeFleetPortSettingsOutput;
    };
    sdk: {
      input: DescribeFleetPortSettingsCommandInput;
      output: DescribeFleetPortSettingsCommandOutput;
    };
  };
}
