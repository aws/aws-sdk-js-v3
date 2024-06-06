// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReportGroupInput, UpdateReportGroupOutput } from "../models/models_0";
import { de_UpdateReportGroupCommand, se_UpdateReportGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReportGroupCommand}.
 */
export interface UpdateReportGroupCommandInput extends UpdateReportGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateReportGroupCommand}.
 */
export interface UpdateReportGroupCommandOutput extends UpdateReportGroupOutput, __MetadataBearer {}

/**
 * <p>
 *       Updates a report group.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // UpdateReportGroupInput
 *   arn: "STRING_VALUE", // required
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
 * const command = new UpdateReportGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReportGroupOutput
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
 * @param UpdateReportGroupCommandInput - {@link UpdateReportGroupCommandInput}
 * @returns {@link UpdateReportGroupCommandOutput}
 * @see {@link UpdateReportGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class UpdateReportGroupCommand extends $Command
  .classBuilder<
    UpdateReportGroupCommandInput,
    UpdateReportGroupCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "UpdateReportGroup", {})
  .n("CodeBuildClient", "UpdateReportGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReportGroupCommand)
  .de(de_UpdateReportGroupCommand)
  .build() {}
