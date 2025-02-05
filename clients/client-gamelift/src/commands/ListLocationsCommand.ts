// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListLocationsInput, ListLocationsOutput } from "../models/models_1";
import { de_ListLocationsCommand, se_ListLocationsCommand } from "../protocols/Aws_json1_1";

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
 * <p>Lists all custom and Amazon Web Services locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "ListLocations", {})
  .n("GameLiftClient", "ListLocationsCommand")
  .f(void 0, void 0)
  .ser(se_ListLocationsCommand)
  .de(de_ListLocationsCommand)
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
