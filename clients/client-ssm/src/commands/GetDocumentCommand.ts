// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import { de_GetDocumentCommand, se_GetDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandInput extends GetDocumentRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandOutput extends GetDocumentResult, __MetadataBearer {}

/**
 * <p>Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetDocumentRequest
 *   Name: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE",
 *   DocumentVersion: "STRING_VALUE",
 *   DocumentFormat: "YAML" || "JSON" || "TEXT",
 * };
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentResult
 * //   Name: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   DisplayName: "STRING_VALUE",
 * //   VersionName: "STRING_VALUE",
 * //   DocumentVersion: "STRING_VALUE",
 * //   Status: "Creating" || "Active" || "Updating" || "Deleting" || "Failed",
 * //   StatusInformation: "STRING_VALUE",
 * //   Content: "STRING_VALUE",
 * //   DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup" || "ManualApprovalPolicy" || "AutoApprovalPolicy",
 * //   DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //   Requires: [ // DocumentRequiresList
 * //     { // DocumentRequires
 * //       Name: "STRING_VALUE", // required
 * //       Version: "STRING_VALUE",
 * //       RequireType: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AttachmentsContent: [ // AttachmentContentList
 * //     { // AttachmentContent
 * //       Name: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       Hash: "STRING_VALUE",
 * //       HashType: "Sha256",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * // };
 *
 * ```
 *
 * @param GetDocumentCommandInput - {@link GetDocumentCommandInput}
 * @returns {@link GetDocumentCommandOutput}
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
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
export class GetDocumentCommand extends $Command
  .classBuilder<
    GetDocumentCommandInput,
    GetDocumentCommandOutput,
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
  .s("AmazonSSM", "GetDocument", {})
  .n("SSMClient", "GetDocumentCommand")
  .f(void 0, void 0)
  .ser(se_GetDocumentCommand)
  .de(de_GetDocumentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentRequest;
      output: GetDocumentResult;
    };
    sdk: {
      input: GetDocumentCommandInput;
      output: GetDocumentCommandOutput;
    };
  };
}
