// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProgressUpdateStreamsRequest, ListProgressUpdateStreamsResult } from "../models/models_0";
import { ListProgressUpdateStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProgressUpdateStreamsCommand}.
 */
export interface ListProgressUpdateStreamsCommandInput extends ListProgressUpdateStreamsRequest {}
/**
 * @public
 *
 * The output of {@link ListProgressUpdateStreamsCommand}.
 */
export interface ListProgressUpdateStreamsCommandOutput extends ListProgressUpdateStreamsResult, __MetadataBearer {}

/**
 * Lists progress update streams associated with the user account making this call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListProgressUpdateStreamsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListProgressUpdateStreamsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // ListProgressUpdateStreamsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProgressUpdateStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListProgressUpdateStreamsResult
 * //   ProgressUpdateStreamSummaryList: [ // ProgressUpdateStreamSummaryList
 * //     { // ProgressUpdateStreamSummary
 * //       ProgressUpdateStreamName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProgressUpdateStreamsCommandInput - {@link ListProgressUpdateStreamsCommandInput}
 * @returns {@link ListProgressUpdateStreamsCommandOutput}
 * @see {@link ListProgressUpdateStreamsCommandInput} for command's `input` shape.
 * @see {@link ListProgressUpdateStreamsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home region is not set. Set the home region to continue.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when there is an internal, configuration, or dependency error encountered.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MigrationHubServiceException}
 *
 * Base exception class for all service exceptions from MigrationHub service.
 *
 * @public
 */
export class ListProgressUpdateStreamsCommand extends command<ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput>(
  _ep0,
  _mw0,
  "ListProgressUpdateStreams",
  ListProgressUpdateStreams$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProgressUpdateStreamsRequest;
      output: ListProgressUpdateStreamsResult;
    };
    sdk: {
      input: ListProgressUpdateStreamsCommandInput;
      output: ListProgressUpdateStreamsCommandOutput;
    };
  };
}
