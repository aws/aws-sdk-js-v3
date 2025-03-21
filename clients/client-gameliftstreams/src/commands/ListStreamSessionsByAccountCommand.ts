// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { ListStreamSessionsByAccountInput, ListStreamSessionsByAccountOutput } from "../models/models_0";
import {
  de_ListStreamSessionsByAccountCommand,
  se_ListStreamSessionsByAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamSessionsByAccountCommand}.
 */
export interface ListStreamSessionsByAccountCommandInput extends ListStreamSessionsByAccountInput {}
/**
 * @public
 *
 * The output of {@link ListStreamSessionsByAccountCommand}.
 */
export interface ListStreamSessionsByAccountCommandOutput extends ListStreamSessionsByAccountOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of Amazon GameLift Streams stream sessions that this user account has access to.</p>
 *          <p>In the returned list of stream sessions, the <code>ExportFilesMetadata</code> property only shows the <code>Status</code> value. To get the <code>OutpurUri</code> and <code>StatusReason</code> values, use <a>GetStreamSession</a>.</p>
 *          <p>We don't recommend using this operation to regularly check stream session statuses because it's costly. Instead, to check status updates
 *             for a specific stream session, use <a>GetStreamSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, ListStreamSessionsByAccountCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, ListStreamSessionsByAccountCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * const client = new GameLiftStreamsClient(config);
 * const input = { // ListStreamSessionsByAccountInput
 *   Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 *   ExportFilesStatus: "SUCCEEDED" || "FAILED" || "PENDING",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStreamSessionsByAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamSessionsByAccountOutput
 * //   Items: [ // StreamSessionSummaryList
 * //     { // StreamSessionSummary
 * //       Arn: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 * //       Protocol: "WebRTC",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ApplicationArn: "STRING_VALUE",
 * //       ExportFilesMetadata: { // ExportFilesMetadata
 * //         Status: "SUCCEEDED" || "FAILED" || "PENDING",
 * //         StatusReason: "STRING_VALUE",
 * //         OutputUri: "STRING_VALUE",
 * //       },
 * //       Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamSessionsByAccountCommandInput - {@link ListStreamSessionsByAccountCommandInput}
 * @returns {@link ListStreamSessionsByAccountCommandOutput}
 * @see {@link ListStreamSessionsByAccountCommandInput} for command's `input` shape.
 * @see {@link ListStreamSessionsByAccountCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the
 *          permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the
 *          suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints.
 *          Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 * @public
 */
export class ListStreamSessionsByAccountCommand extends $Command
  .classBuilder<
    ListStreamSessionsByAccountCommandInput,
    ListStreamSessionsByAccountCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLiftStreams", "ListStreamSessionsByAccount", {})
  .n("GameLiftStreamsClient", "ListStreamSessionsByAccountCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamSessionsByAccountCommand)
  .de(de_ListStreamSessionsByAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamSessionsByAccountInput;
      output: ListStreamSessionsByAccountOutput;
    };
    sdk: {
      input: ListStreamSessionsByAccountCommandInput;
      output: ListStreamSessionsByAccountCommandOutput;
    };
  };
}
