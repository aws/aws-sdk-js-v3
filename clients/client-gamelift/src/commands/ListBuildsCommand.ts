// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { ListBuildsInput, ListBuildsOutput } from "../models/models_0";
import { ListBuilds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBuildsCommand}.
 */
export interface ListBuildsCommandInput extends ListBuildsInput {}
/**
 * @public
 *
 * The output of {@link ListBuildsCommand}.
 */
export interface ListBuildsCommandOutput extends ListBuildsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You
 *             can limit results to builds that are in a specific status by using the
 *                 <code>Status</code> parameter. Use the pagination parameters to retrieve results in
 * </p>
 *          <note>
 *             <p>Build resources are not listed in any particular order.</p>
 *          </note>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom
 *                 Server Build</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListBuildsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListBuildsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ListBuildsInput
 *   Status: "INITIALIZED" || "READY" || "FAILED",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBuildsCommand(input);
 * const response = await client.send(command);
 * // { // ListBuildsOutput
 * //   Builds: [ // BuildList
 * //     { // Build
 * //       BuildId: "STRING_VALUE",
 * //       BuildArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //       Status: "INITIALIZED" || "READY" || "FAILED",
 * //       SizeOnDisk: Number("long"),
 * //       OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023" || "WINDOWS_2022",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ServerSdkVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuildsCommandInput - {@link ListBuildsCommandInput}
 * @returns {@link ListBuildsCommandOutput}
 * @see {@link ListBuildsCommandInput} for command's `input` shape.
 * @see {@link ListBuildsCommandOutput} for command's `response` shape.
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
export class ListBuildsCommand extends $Command
  .classBuilder<
    ListBuildsCommandInput,
    ListBuildsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "ListBuilds", {})
  .n("GameLiftClient", "ListBuildsCommand")
  .sc(ListBuilds$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBuildsInput;
      output: ListBuildsOutput;
    };
    sdk: {
      input: ListBuildsCommandInput;
      output: ListBuildsCommandOutput;
    };
  };
}
