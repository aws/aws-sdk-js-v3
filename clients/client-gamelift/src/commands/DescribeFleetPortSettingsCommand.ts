// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeFleetPortSettingsInput,
  DescribeFleetPortSettingsOutput,
  DescribeFleetPortSettingsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeFleetPortSettingsCommand, se_DescribeFleetPortSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify IP
 *             addresses and port settings that incoming traffic can use to access server processes in
 *             the fleet. Game server processes that are running in the fleet must use a port that
 *             falls within this range. </p>
 *          <p>Use this operation in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve the port settings for a fleet, identify the fleet's unique
 *                     identifier. </p>
 *             </li>
 *             <li>
 *                <p>To check the status of recent updates to a fleet remote location, specify the
 *                     fleet ID and a location. Port setting updates can take time to propagate across
 *                     all locations. </p>
 *             </li>
 *          </ul>
 *          <p>If successful, a set of <code>IpPermission</code> objects is returned for the
 *             requested fleet ID. When specifying a location, this operation returns a pending status.
 *             If the requested fleet has been deleted, the result set is empty.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Servers
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
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
export class DescribeFleetPortSettingsCommand extends $Command
  .classBuilder<
    DescribeFleetPortSettingsCommandInput,
    DescribeFleetPortSettingsCommandOutput,
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
  .s("GameLift", "DescribeFleetPortSettings", {})
  .n("GameLiftClient", "DescribeFleetPortSettingsCommand")
  .f(void 0, DescribeFleetPortSettingsOutputFilterSensitiveLog)
  .ser(se_DescribeFleetPortSettingsCommand)
  .de(de_DescribeFleetPortSettingsCommand)
  .build() {
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
