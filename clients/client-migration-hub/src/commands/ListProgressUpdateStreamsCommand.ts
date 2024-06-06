// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListProgressUpdateStreamsRequest, ListProgressUpdateStreamsResult } from "../models/models_0";
import { de_ListProgressUpdateStreamsCommand, se_ListProgressUpdateStreamsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists progress update streams associated with the user account making this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListProgressUpdateStreamsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListProgressUpdateStreamsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 * @public
 */
export class ListProgressUpdateStreamsCommand extends $Command
  .classBuilder<
    ListProgressUpdateStreamsCommandInput,
    ListProgressUpdateStreamsCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHub", "ListProgressUpdateStreams", {})
  .n("MigrationHubClient", "ListProgressUpdateStreamsCommand")
  .f(void 0, void 0)
  .ser(se_ListProgressUpdateStreamsCommand)
  .de(de_ListProgressUpdateStreamsCommand)
  .build() {}
