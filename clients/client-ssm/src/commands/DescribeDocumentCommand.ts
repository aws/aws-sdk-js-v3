// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDocumentRequest, DescribeDocumentResult } from "../models/models_0";
import { de_DescribeDocumentCommand, se_DescribeDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDocumentCommand}.
 */
export interface DescribeDocumentCommandInput extends DescribeDocumentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDocumentCommand}.
 */
export interface DescribeDocumentCommandOutput extends DescribeDocumentResult, __MetadataBearer {}

/**
 * <p>Describes the specified Amazon Web Services Systems Manager document (SSM document).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeDocumentRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 * };
 * const command = new DescribeDocumentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDocumentResult
 * //   Document: { // DocumentDescription
 * //     Sha1: "STRING_VALUE",
 * //     Hash: "STRING_VALUE",
 * //     HashType: "Sha256" || "Sha1",
 * //     Name: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     VersionName: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     Status: "Creating" || "Active" || "Updating" || "Deleting" || "Failed",
 * //     StatusInformation: "STRING_VALUE",
 * //     DocumentVersion: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Parameters: [ // DocumentParameterList
 * //       { // DocumentParameter
 * //         Name: "STRING_VALUE",
 * //         Type: "String" || "StringList",
 * //         Description: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PlatformTypes: [ // PlatformTypeList
 * //       "Windows" || "Linux" || "MacOS",
 * //     ],
 * //     DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup" || "ManualApprovalPolicy" || "AutoApprovalPolicy",
 * //     SchemaVersion: "STRING_VALUE",
 * //     LatestVersion: "STRING_VALUE",
 * //     DefaultVersion: "STRING_VALUE",
 * //     DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //     TargetType: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     AttachmentsInformation: [ // AttachmentInformationList
 * //       { // AttachmentInformation
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Requires: [ // DocumentRequiresList
 * //       { // DocumentRequires
 * //         Name: "STRING_VALUE", // required
 * //         Version: "STRING_VALUE",
 * //         RequireType: "STRING_VALUE",
 * //         VersionName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Author: "STRING_VALUE",
 * //     ReviewInformation: [ // ReviewInformationList
 * //       { // ReviewInformation
 * //         ReviewedTime: new Date("TIMESTAMP"),
 * //         Status: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //         Reviewer: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ApprovedVersion: "STRING_VALUE",
 * //     PendingReviewVersion: "STRING_VALUE",
 * //     ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //     Category: [ // CategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //     CategoryEnum: [ // CategoryEnumList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDocumentCommandInput - {@link DescribeDocumentCommandInput}
 * @returns {@link DescribeDocumentCommandOutput}
 * @see {@link DescribeDocumentCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeDocumentCommand extends $Command
  .classBuilder<
    DescribeDocumentCommandInput,
    DescribeDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribeDocument", {})
  .n("SSMClient", "DescribeDocumentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDocumentCommand)
  .de(de_DescribeDocumentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDocumentRequest;
      output: DescribeDocumentResult;
    };
    sdk: {
      input: DescribeDocumentCommandInput;
      output: DescribeDocumentCommandOutput;
    };
  };
}
