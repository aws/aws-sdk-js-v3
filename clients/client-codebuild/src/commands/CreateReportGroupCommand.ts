// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReportGroupInput, CreateReportGroupOutput } from "../models/models_0";
import { de_CreateReportGroupCommand, se_CreateReportGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReportGroupCommand}.
 */
export interface CreateReportGroupCommandInput extends CreateReportGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateReportGroupCommand}.
 */
export interface CreateReportGroupCommandOutput extends CreateReportGroupOutput, __MetadataBearer {}

/**
 * <p>
 *       Creates a report group. A report group contains a collection of reports.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // CreateReportGroupInput
 *   name: "STRING_VALUE", // required
 *   type: "TEST" || "CODE_COVERAGE", // required
 *   exportConfig: { // ReportExportConfig
 *     exportConfigType: "S3" || "NO_EXPORT",
 *     s3Destination: { // S3ReportExportConfig
 *       bucket: "STRING_VALUE",
 *       bucketOwner: "STRING_VALUE",
 *       path: "STRING_VALUE",
 *       packaging: "ZIP" || "NONE",
 *       encryptionKey: "STRING_VALUE",
 *       encryptionDisabled: true || false,
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateReportGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateReportGroupOutput
 * //   reportGroup: { // ReportGroup
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "TEST" || "CODE_COVERAGE",
 * //     exportConfig: { // ReportExportConfig
 * //       exportConfigType: "S3" || "NO_EXPORT",
 * //       s3Destination: { // S3ReportExportConfig
 * //         bucket: "STRING_VALUE",
 * //         bucketOwner: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         packaging: "ZIP" || "NONE",
 * //         encryptionKey: "STRING_VALUE",
 * //         encryptionDisabled: true || false,
 * //       },
 * //     },
 * //     created: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     status: "ACTIVE" || "DELETING",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReportGroupCommandInput - {@link CreateReportGroupCommandInput}
 * @returns {@link CreateReportGroupCommandOutput}
 * @see {@link CreateReportGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class CreateReportGroupCommand extends $Command
  .classBuilder<
    CreateReportGroupCommandInput,
    CreateReportGroupCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "CreateReportGroup", {})
  .n("CodeBuildClient", "CreateReportGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateReportGroupCommand)
  .de(de_CreateReportGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReportGroupInput;
      output: CreateReportGroupOutput;
    };
    sdk: {
      input: CreateReportGroupCommandInput;
      output: CreateReportGroupCommandOutput;
    };
  };
}
