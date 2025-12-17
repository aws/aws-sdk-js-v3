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
import type { ListStreamSessionsInput, ListStreamSessionsOutput } from "../models/models_0";
import { ListStreamSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamSessionsCommand}.
 */
export interface ListStreamSessionsCommandInput extends ListStreamSessionsInput {}
/**
 * @public
 *
 * The output of {@link ListStreamSessionsCommand}.
 */
export interface ListStreamSessionsCommandOutput extends ListStreamSessionsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of Amazon GameLift Streams stream sessions that a stream group is hosting.</p> <p>To retrieve stream sessions, specify the stream group, and optionally filter by stream session status. You can paginate the results as needed.</p> <p>This operation returns the requested stream sessions in no particular order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, ListStreamSessionsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, ListStreamSessionsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // ListStreamSessionsInput
 *   Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 *   ExportFilesStatus: "SUCCEEDED" || "FAILED" || "PENDING",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new ListStreamSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamSessionsOutput
 * //   Items: [ // StreamSessionSummaryList
 * //     { // StreamSessionSummary
 * //       Arn: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 * //       StatusReason: "internalError" || "invalidSignalRequest" || "placementTimeout" || "applicationLogS3DestinationError" || "applicationExit" || "connectionTimeout" || "reconnectionTimeout" || "maxSessionLengthTimeout" || "idleTimeout" || "apiTerminated",
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
 * @param ListStreamSessionsCommandInput - {@link ListStreamSessionsCommandInput}
 * @returns {@link ListStreamSessionsCommandOutput}
 * @see {@link ListStreamSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
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
export class ListStreamSessionsCommand extends $Command
  .classBuilder<
    ListStreamSessionsCommandInput,
    ListStreamSessionsCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "ListStreamSessions", {})
  .n("GameLiftStreamsClient", "ListStreamSessionsCommand")
  .sc(ListStreamSessions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamSessionsInput;
      output: ListStreamSessionsOutput;
    };
    sdk: {
      input: ListStreamSessionsCommandInput;
      output: ListStreamSessionsCommandOutput;
    };
  };
}
