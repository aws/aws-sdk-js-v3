// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GameLiftStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GameLiftStreamsClient";
import type { ListStreamGroupsInput, ListStreamGroupsOutput } from "../models/models_0";
import { ListStreamGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamGroupsCommand}.
 */
export interface ListStreamGroupsCommandInput extends ListStreamGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListStreamGroupsCommand}.
 */
export interface ListStreamGroupsCommandOutput extends ListStreamGroupsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of all Amazon GameLift Streams stream groups that are associated with the Amazon Web Services account in use. This operation returns stream groups in all statuses, in no particular order. You can paginate the results as needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, ListStreamGroupsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, ListStreamGroupsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // ListStreamGroupsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStreamGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamGroupsOutput
 * //   Items: [ // StreamGroupSummaryList
 * //     { // StreamGroupSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefaultApplication: { // DefaultApplication
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       StreamClass: "gen4n_high" || "gen4n_ultra" || "gen4n_win2022" || "gen5n_high" || "gen5n_ultra" || "gen5n_win2022" || "gen6n_small" || "gen6n_medium" || "gen6n_high" || "gen6n_ultra" || "gen6n_ultra_win2022" || "gen6n_pro" || "gen6n_pro_win2022",
 * //       Status: "ACTIVATING" || "UPDATING_LOCATIONS" || "ACTIVE" || "ACTIVE_WITH_ERRORS" || "ERROR" || "DELETING" || "EXPIRED",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamGroupsCommandInput - {@link ListStreamGroupsCommandInput}
 * @returns {@link ListStreamGroupsCommandOutput}
 * @see {@link ListStreamGroupsCommandInput} for command's `input` shape.
 * @see {@link ListStreamGroupsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 *
 * @public
 */
export class ListStreamGroupsCommand extends $Command
  .classBuilder<
    ListStreamGroupsCommandInput,
    ListStreamGroupsCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "ListStreamGroups", {})
  .n("GameLiftStreamsClient", "ListStreamGroupsCommand")
  .sc(ListStreamGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamGroupsInput;
      output: ListStreamGroupsOutput;
    };
    sdk: {
      input: ListStreamGroupsCommandInput;
      output: ListStreamGroupsCommandOutput;
    };
  };
}
