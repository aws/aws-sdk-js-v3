// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStreamUrlsInput, ListStreamUrlsOutput } from "../models/models_0";
import { ListStreamUrls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStreamUrlsCommand}.
 */
export interface ListStreamUrlsCommandInput extends ListStreamUrlsInput {}
/**
 * @public
 *
 * The output of {@link ListStreamUrlsCommand}.
 */
export interface ListStreamUrlsCommandOutput extends ListStreamUrlsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of the stream URLs in the current Amazon Web Services Region for your Amazon Web Services account. You can filter the results by status or by stream group. Use the pagination parameters to retrieve results as a set of sequential pages. If you delete the stream group or application that backs a stream URL, this operation updates that stream URL's status to <code>REVOKED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, ListStreamUrlsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, ListStreamUrlsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // ListStreamUrlsInput
 *   Status: "ACTIVE" || "EXPIRED" || "REVOKED" || "LIMIT_REACHED",
 *   StreamGroupIdentifier: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStreamUrlsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamUrlsOutput
 * //   Items: [ // StreamUrlSummaryList
 * //     { // StreamUrlSummary
 * //       Arn: "STRING_VALUE", // required
 * //       StreamUrlId: "STRING_VALUE",
 * //       StreamUrl: "STRING_VALUE",
 * //       Status: "ACTIVE" || "EXPIRED" || "REVOKED" || "LIMIT_REACHED",
 * //       StatusReason: "userRevoked" || "revokedAndTerminatingSessions" || "revokedAndSessionsTerminated" || "streamGroupDeleted" || "applicationDeleted",
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UsageLimit: Number("int"),
 * //       RemainingUses: Number("int"),
 * //       StreamGroupArn: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //       SessionLengthSeconds: Number("int"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamUrlsCommandInput - {@link ListStreamUrlsCommandInput}
 * @returns {@link ListStreamUrlsCommandOutput}
 * @see {@link ListStreamUrlsCommandInput} for command's `input` shape.
 * @see {@link ListStreamUrlsCommandOutput} for command's `response` shape.
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
export class ListStreamUrlsCommand extends command<ListStreamUrlsCommandInput, ListStreamUrlsCommandOutput>(
  _ep0,
  _mw0,
  "ListStreamUrls",
  ListStreamUrls$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamUrlsInput;
      output: ListStreamUrlsOutput;
    };
    sdk: {
      input: ListStreamUrlsCommandInput;
      output: ListStreamUrlsCommandOutput;
    };
  };
}
