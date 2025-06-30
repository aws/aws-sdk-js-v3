// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDocumentRequest, CreateDocumentResult } from "../models/models_0";
import { de_CreateDocumentCommand, se_CreateDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDocumentCommand}.
 */
export interface CreateDocumentCommandInput extends CreateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDocumentCommand}.
 */
export interface CreateDocumentCommandOutput extends CreateDocumentResult, __MetadataBearer {}

/**
 * <p>Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs
 *    on your managed nodes. For more information about SSM documents, including information about
 *    supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/documents.html">Amazon Web Services Systems Manager Documents</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateDocumentRequest
 *   Content: "STRING_VALUE", // required
 *   Requires: [ // DocumentRequiresList
 *     { // DocumentRequires
 *       Name: "STRING_VALUE", // required
 *       Version: "STRING_VALUE",
 *       RequireType: "STRING_VALUE",
 *       VersionName: "STRING_VALUE",
 *     },
 *   ],
 *   Attachments: [ // AttachmentsSourceList
 *     { // AttachmentsSource
 *       Key: "SourceUrl" || "S3FileUrl" || "AttachmentReference",
 *       Values: [ // AttachmentsSourceValues
 *         "STRING_VALUE",
 *       ],
 *       Name: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 *   DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup" || "ManualApprovalPolicy" || "AutoApprovalPolicy",
 *   DocumentFormat: "YAML" || "JSON" || "TEXT",
 *   TargetType: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDocumentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDocumentResult
 * //   DocumentDescription: { // DocumentDescription
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
 * @param CreateDocumentCommandInput - {@link CreateDocumentCommandInput}
 * @returns {@link CreateDocumentCommandOutput}
 * @see {@link CreateDocumentCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DocumentAlreadyExists} (client fault)
 *  <p>The specified document already exists.</p>
 *
 * @throws {@link DocumentLimitExceeded} (client fault)
 *  <p>You can have at most 500 active SSM documents.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocumentContent} (client fault)
 *  <p>The content for the document isn't valid.</p>
 *
 * @throws {@link InvalidDocumentSchemaVersion} (client fault)
 *  <p>The version of the document schema isn't supported.</p>
 *
 * @throws {@link MaxDocumentSizeExceeded} (client fault)
 *  <p>The size limit of a document is 64 KB.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class CreateDocumentCommand extends $Command
  .classBuilder<
    CreateDocumentCommandInput,
    CreateDocumentCommandOutput,
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
  .s("AmazonSSM", "CreateDocument", {})
  .n("SSMClient", "CreateDocumentCommand")
  .f(void 0, void 0)
  .ser(se_CreateDocumentCommand)
  .de(de_CreateDocumentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDocumentRequest;
      output: CreateDocumentResult;
    };
    sdk: {
      input: CreateDocumentCommandInput;
      output: CreateDocumentCommandOutput;
    };
  };
}
