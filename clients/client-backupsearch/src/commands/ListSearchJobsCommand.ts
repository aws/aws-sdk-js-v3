// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSearchJobsInput, ListSearchJobsOutput } from "../models/models_0";
import { de_ListSearchJobsCommand, se_ListSearchJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSearchJobsCommand}.
 */
export interface ListSearchJobsCommandInput extends ListSearchJobsInput {}
/**
 * @public
 *
 * The output of {@link ListSearchJobsCommand}.
 */
export interface ListSearchJobsCommandOutput extends ListSearchJobsOutput, __MetadataBearer {}

/**
 * <p>This operation returns a list of search jobs belonging
 *       to an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, ListSearchJobsCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, ListSearchJobsCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * const client = new BackupSearchClient(config);
 * const input = { // ListSearchJobsInput
 *   ByStatus: "RUNNING" || "COMPLETED" || "STOPPING" || "STOPPED" || "FAILED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSearchJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSearchJobsOutput
 * //   SearchJobs: [ // SearchJobs // required
 * //     { // SearchJobSummary
 * //       SearchJobIdentifier: "STRING_VALUE",
 * //       SearchJobArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "RUNNING" || "COMPLETED" || "STOPPING" || "STOPPED" || "FAILED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       SearchScopeSummary: { // SearchScopeSummary
 * //         TotalRecoveryPointsToScanCount: Number("int"),
 * //         TotalItemsToScanCount: Number("long"),
 * //       },
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSearchJobsCommandInput - {@link ListSearchJobsCommandInput}
 * @returns {@link ListSearchJobsCommandOutput}
 * @see {@link ListSearchJobsCommandInput} for command's `input` shape.
 * @see {@link ListSearchJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link BackupSearchServiceException}
 * <p>Base exception class for all service exceptions from BackupSearch service.</p>
 *
 * @public
 */
export class ListSearchJobsCommand extends $Command
  .classBuilder<
    ListSearchJobsCommandInput,
    ListSearchJobsCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoBackupSearchService", "ListSearchJobs", {})
  .n("BackupSearchClient", "ListSearchJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListSearchJobsCommand)
  .de(de_ListSearchJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSearchJobsInput;
      output: ListSearchJobsOutput;
    };
    sdk: {
      input: ListSearchJobsCommandInput;
      output: ListSearchJobsCommandOutput;
    };
  };
}
