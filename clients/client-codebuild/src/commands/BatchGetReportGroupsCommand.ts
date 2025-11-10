// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetReportGroupsInput, BatchGetReportGroupsOutput } from "../models/models_0";
import { BatchGetReportGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetReportGroupsCommand}.
 */
export interface BatchGetReportGroupsCommandInput extends BatchGetReportGroupsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetReportGroupsCommand}.
 */
export interface BatchGetReportGroupsCommandOutput extends BatchGetReportGroupsOutput, __MetadataBearer {}

/**
 * <p>
 *       Returns an array of report groups.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetReportGroupsInput
 *   reportGroupArns: [ // ReportGroupArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetReportGroupsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetReportGroupsOutput
 * //   reportGroups: [ // ReportGroups
 * //     { // ReportGroup
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "TEST" || "CODE_COVERAGE",
 * //       exportConfig: { // ReportExportConfig
 * //         exportConfigType: "S3" || "NO_EXPORT",
 * //         s3Destination: { // S3ReportExportConfig
 * //           bucket: "STRING_VALUE",
 * //           bucketOwner: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           packaging: "ZIP" || "NONE",
 * //           encryptionKey: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //         },
 * //       },
 * //       created: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       status: "ACTIVE" || "DELETING",
 * //     },
 * //   ],
 * //   reportGroupsNotFound: [ // ReportGroupArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetReportGroupsCommandInput - {@link BatchGetReportGroupsCommandInput}
 * @returns {@link BatchGetReportGroupsCommandOutput}
 * @see {@link BatchGetReportGroupsCommandInput} for command's `input` shape.
 * @see {@link BatchGetReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class BatchGetReportGroupsCommand extends $Command
  .classBuilder<
    BatchGetReportGroupsCommandInput,
    BatchGetReportGroupsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "BatchGetReportGroups", {})
  .n("CodeBuildClient", "BatchGetReportGroupsCommand")
  .sc(BatchGetReportGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetReportGroupsInput;
      output: BatchGetReportGroupsOutput;
    };
    sdk: {
      input: BatchGetReportGroupsCommandInput;
      output: BatchGetReportGroupsCommandOutput;
    };
  };
}
