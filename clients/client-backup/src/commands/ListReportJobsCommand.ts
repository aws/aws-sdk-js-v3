// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReportJobsInput, ListReportJobsOutput } from "../models/models_0";
import { ListReportJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportJobsCommand}.
 */
export interface ListReportJobsCommandInput extends ListReportJobsInput {}
/**
 * @public
 *
 * The output of {@link ListReportJobsCommand}.
 */
export interface ListReportJobsCommandOutput extends ListReportJobsOutput, __MetadataBearer {}

/**
 * <p>Returns details about your report jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListReportJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListReportJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListReportJobsInput
 *   ByReportPlanName: "STRING_VALUE",
 *   ByCreationBefore: new Date("TIMESTAMP"),
 *   ByCreationAfter: new Date("TIMESTAMP"),
 *   ByStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportJobsOutput
 * //   ReportJobs: [ // ReportJobList
 * //     { // ReportJob
 * //       ReportJobId: "STRING_VALUE",
 * //       ReportPlanArn: "STRING_VALUE",
 * //       ReportTemplate: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       ReportDestination: { // ReportDestination
 * //         S3BucketName: "STRING_VALUE",
 * //         S3Keys: [ // stringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportJobsCommandInput - {@link ListReportJobsCommandInput}
 * @returns {@link ListReportJobsCommandOutput}
 * @see {@link ListReportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReportJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class ListReportJobsCommand extends $Command
  .classBuilder<
    ListReportJobsCommandInput,
    ListReportJobsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListReportJobs", {})
  .n("BackupClient", "ListReportJobsCommand")
  .sc(ListReportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportJobsInput;
      output: ListReportJobsOutput;
    };
    sdk: {
      input: ListReportJobsCommandInput;
      output: ListReportJobsCommandOutput;
    };
  };
}
