// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSearchResultExportJobsInput, ListSearchResultExportJobsOutput } from "../models/models_0";
import { ListSearchResultExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSearchResultExportJobsCommand}.
 */
export interface ListSearchResultExportJobsCommandInput extends ListSearchResultExportJobsInput {}
/**
 * @public
 *
 * The output of {@link ListSearchResultExportJobsCommand}.
 */
export interface ListSearchResultExportJobsCommandOutput extends ListSearchResultExportJobsOutput, __MetadataBearer {}

/**
 * <p>This operation exports search results of a search job to a specified destination S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, ListSearchResultExportJobsCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, ListSearchResultExportJobsCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // ListSearchResultExportJobsInput
 *   Status: "RUNNING" || "FAILED" || "COMPLETED",
 *   SearchJobIdentifier: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSearchResultExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSearchResultExportJobsOutput
 * //   ExportJobs: [ // ExportJobSummaries // required
 * //     { // ExportJobSummary
 * //       ExportJobIdentifier: "STRING_VALUE", // required
 * //       ExportJobArn: "STRING_VALUE",
 * //       Status: "RUNNING" || "FAILED" || "COMPLETED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       StatusMessage: "STRING_VALUE",
 * //       SearchJobArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSearchResultExportJobsCommandInput - {@link ListSearchResultExportJobsCommandInput}
 * @returns {@link ListSearchResultExportJobsCommandOutput}
 * @see {@link ListSearchResultExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListSearchResultExportJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found for this request.</p> <p>Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request denied due to exceeding the quota limits permitted.</p>
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
 *
 * @public
 */
export class ListSearchResultExportJobsCommand extends $Command
  .classBuilder<
    ListSearchResultExportJobsCommandInput,
    ListSearchResultExportJobsCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoBackupSearchService", "ListSearchResultExportJobs", {})
  .n("BackupSearchClient", "ListSearchResultExportJobsCommand")
  .sc(ListSearchResultExportJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSearchResultExportJobsInput;
      output: ListSearchResultExportJobsOutput;
    };
    sdk: {
      input: ListSearchResultExportJobsCommandInput;
      output: ListSearchResultExportJobsCommandOutput;
    };
  };
}
