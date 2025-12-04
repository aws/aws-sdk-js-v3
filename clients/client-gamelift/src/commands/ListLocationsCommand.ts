// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { ListLocationsInput, ListLocationsOutput } from "../models/models_0";
import { ListLocations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLocationsCommand}.
 */
export interface ListLocationsCommandInput extends ListLocationsInput {}
/**
 * @public
 *
 * The output of {@link ListLocationsCommand}.
 */
export interface ListLocationsCommandOutput extends ListLocationsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Anywhere</p>
 *          <p>Lists all custom and Amazon Web Services locations where Amazon GameLift Servers can host game servers. </p>
 *          <p>Note that if you call this API using a location that doesn't have a service endpoint,
 *             such as one that can only be a remote location in a multi-location fleet, the API
 *             returns an error.</p>
 *          <p>Consult the table of supported locations in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html">Amazon GameLift Servers service
 *                 locations</a> to identify home Regions that support single and multi-location
 *             fleets.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html">Service locations</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ListLocationsInput
 *   Filters: [ // LocationFilterList
 *     "AWS" || "CUSTOM",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLocationsOutput
 * //   Locations: [ // LocationModelList
 * //     { // LocationModel
 * //       LocationName: "STRING_VALUE",
 * //       LocationArn: "STRING_VALUE",
 * //       PingBeacon: { // PingBeacon
 * //         UDPEndpoint: { // UDPEndpoint
 * //           Domain: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLocationsCommandInput - {@link ListLocationsCommandInput}
 * @returns {@link ListLocationsCommandOutput}
 * @see {@link ListLocationsCommandInput} for command's `input` shape.
 * @see {@link ListLocationsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class ListLocationsCommand extends $Command
  .classBuilder<
    ListLocationsCommandInput,
    ListLocationsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "ListLocations", {})
  .n("GameLiftClient", "ListLocationsCommand")
  .sc(ListLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLocationsInput;
      output: ListLocationsOutput;
    };
    sdk: {
      input: ListLocationsCommandInput;
      output: ListLocationsCommandOutput;
    };
  };
}
