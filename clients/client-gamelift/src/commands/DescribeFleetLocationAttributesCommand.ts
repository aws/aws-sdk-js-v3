// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetLocationAttributesInput, DescribeFleetLocationAttributesOutput } from "../models/models_0";
import {
  de_DescribeFleetLocationAttributesCommand,
  se_DescribeFleetLocationAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetLocationAttributesCommand}.
 */
export interface DescribeFleetLocationAttributesCommandInput extends DescribeFleetLocationAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetLocationAttributesCommand}.
 */
export interface DescribeFleetLocationAttributesCommandOutput
  extends DescribeFleetLocationAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves information on a fleet's remote locations, including life-cycle status and
 *             any suspended fleet activity. </p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To get data for specific locations, provide a fleet identifier and a list of
 *                     locations. Location data is returned in the order that it is requested. </p>
 *             </li>
 *             <li>
 *                <p>To get data for all locations, provide a fleet identifier only. Location data
 *                     is returned in no particular order. </p>
 *             </li>
 *          </ul>
 *          <p>When requesting attributes for multiple locations, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a <code>LocationAttributes</code> object is returned for each requested
 *             location. If the fleet does not have a requested location, no information is returned.
 *             This operation does not return the home Region. To get information on a fleet's home
 *             Region, call <code>DescribeFleetAttributes</code>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting
 *                 up Amazon GameLift Servers fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html">
 *                 Amazon GameLift Servers service locations</a> for managed hosting</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetLocationAttributesInput
 *   FleetId: "STRING_VALUE", // required
 *   Locations: [ // LocationList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetLocationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetLocationAttributesOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   LocationAttributes: [ // LocationAttributesList
 * //     { // LocationAttributes
 * //       LocationState: { // LocationState
 * //         Location: "STRING_VALUE",
 * //         Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND",
 * //       },
 * //       StoppedActions: [ // FleetActionList
 * //         "AUTO_SCALING",
 * //       ],
 * //       UpdateStatus: "PENDING_UPDATE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetLocationAttributesCommandInput - {@link DescribeFleetLocationAttributesCommandInput}
 * @returns {@link DescribeFleetLocationAttributesCommandOutput}
 * @see {@link DescribeFleetLocationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationAttributesCommandOutput} for command's `response` shape.
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
export class DescribeFleetLocationAttributesCommand extends $Command
  .classBuilder<
    DescribeFleetLocationAttributesCommandInput,
    DescribeFleetLocationAttributesCommandOutput,
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
  .s("GameLift", "DescribeFleetLocationAttributes", {})
  .n("GameLiftClient", "DescribeFleetLocationAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetLocationAttributesCommand)
  .de(de_DescribeFleetLocationAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetLocationAttributesInput;
      output: DescribeFleetLocationAttributesOutput;
    };
    sdk: {
      input: DescribeFleetLocationAttributesCommandInput;
      output: DescribeFleetLocationAttributesCommandOutput;
    };
  };
}
