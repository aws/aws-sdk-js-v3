// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeReportJobInput, DescribeReportJobOutput } from "../models/models_0";
import { DescribeReportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReportJobCommand}.
 */
export interface DescribeReportJobCommandInput extends DescribeReportJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeReportJobCommand}.
 */
export interface DescribeReportJobCommandOutput extends DescribeReportJobOutput, __MetadataBearer {}

/**
 * <p>Returns the details associated with creating a report as specified by its
 *             <code>ReportJobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeReportJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeReportJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeReportJobInput
 *   ReportJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeReportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReportJobOutput
 * //   ReportJob: { // ReportJob
 * //     ReportJobId: "STRING_VALUE",
 * //     ReportPlanArn: "STRING_VALUE",
 * //     ReportTemplate: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     ReportDestination: { // ReportDestination
 * //       S3BucketName: "STRING_VALUE",
 * //       S3Keys: [ // stringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReportJobCommandInput - {@link DescribeReportJobCommandInput}
 * @returns {@link DescribeReportJobCommandOutput}
 * @see {@link DescribeReportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeReportJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class DescribeReportJobCommand extends $Command
  .classBuilder<
    DescribeReportJobCommandInput,
    DescribeReportJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DescribeReportJob", {})
  .n("BackupClient", "DescribeReportJobCommand")
  .sc(DescribeReportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReportJobInput;
      output: DescribeReportJobOutput;
    };
    sdk: {
      input: DescribeReportJobCommandInput;
      output: DescribeReportJobCommandOutput;
    };
  };
}
