// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListFleetsInput, ListFleetsOutput } from "../models/models_0";
import { de_ListFleetsCommand, se_ListFleetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFleetsCommand}.
 */
export interface ListFleetsCommandInput extends ListFleetsInput {}
/**
 * @public
 *
 * The output of {@link ListFleetsCommand}.
 */
export interface ListFleetsCommandOutput extends ListFleetsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this
 *             operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or
 *             specify a Region in your request. You can filter the result set to find only those
 *             fleets that are deployed with a specific build or script. For fleets that have multiple
 *             locations, this operation retrieves fleets based on their home Region only.</p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To get a list of all fleets in a Region, don't provide a build or script
 *                     identifier. </p>
 *             </li>
 *             <li>
 *                <p>To get a list of all fleets where a specific custom game build is deployed,
 *                     provide the build ID.</p>
 *             </li>
 *             <li>
 *                <p>To get a list of all Realtime Servers fleets with a specific configuration script,
 *                     provide the script ID. </p>
 *             </li>
 *          </ul>
 *          <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a list of fleet IDs that match the request parameters is returned. A
 *             NextToken value is also returned if there are more result pages to retrieve.</p>
 *          <note>
 *             <p>Fleet resources are not listed in a particular order.</p>
 *          </note>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListFleetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListFleetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // ListFleetsInput
 *   BuildId: "STRING_VALUE",
 *   ScriptId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetsOutput
 * //   FleetIds: [ // FleetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetsCommandInput - {@link ListFleetsCommandInput}
 * @returns {@link ListFleetsCommandOutput}
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
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
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class ListFleetsCommand extends $Command
  .classBuilder<
    ListFleetsCommandInput,
    ListFleetsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "ListFleets", {})
  .n("GameLiftClient", "ListFleetsCommand")
  .f(void 0, void 0)
  .ser(se_ListFleetsCommand)
  .de(de_ListFleetsCommand)
  .build() {}
