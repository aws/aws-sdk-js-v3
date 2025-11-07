// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLendingAnalysisSummaryRequest, GetLendingAnalysisSummaryResponse } from "../models/models_0";
import { GetLendingAnalysisSummary } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLendingAnalysisSummaryCommand}.
 */
export interface GetLendingAnalysisSummaryCommandInput extends GetLendingAnalysisSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetLendingAnalysisSummaryCommand}.
 */
export interface GetLendingAnalysisSummaryCommandOutput extends GetLendingAnalysisSummaryResponse, __MetadataBearer {}

/**
 * <p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes
 *    text in a lending document. The returned summary consists of information about documents grouped
 *    together by a common document type. Information like detected signatures, page numbers, and split
 *    documents is returned with respect to the type of grouped document. </p>
 *          <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which
 *    returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon
 *    Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 *    topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p>
 *          <p>To get the results of the text analysis operation, first check that the status value
 *    published to the Amazon SNS topic is SUCCEEDED. If so, call
 *     <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from
 *    the initial call to <code>StartLendingAnalysis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetLendingAnalysisSummaryCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetLendingAnalysisSummaryCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // GetLendingAnalysisSummaryRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetLendingAnalysisSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetLendingAnalysisSummaryResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "PARTIAL_SUCCESS",
 * //   Summary: { // LendingSummary
 * //     DocumentGroups: [ // DocumentGroupList
 * //       { // DocumentGroup
 * //         Type: "STRING_VALUE",
 * //         SplitDocuments: [ // SplitDocumentList
 * //           { // SplitDocument
 * //             Index: Number("int"),
 * //             Pages: [ // PageList
 * //               Number("int"),
 * //             ],
 * //           },
 * //         ],
 * //         DetectedSignatures: [ // DetectedSignatureList
 * //           { // DetectedSignature
 * //             Page: Number("int"),
 * //           },
 * //         ],
 * //         UndetectedSignatures: [ // UndetectedSignatureList
 * //           { // UndetectedSignature
 * //             Page: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     UndetectedDocumentTypes: [ // UndetectedDocumentTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Warnings: [ // Warnings
 * //     { // Warning
 * //       ErrorCode: "STRING_VALUE",
 * //       Pages: [ // Pages
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   StatusMessage: "STRING_VALUE",
 * //   AnalyzeLendingModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLendingAnalysisSummaryCommandInput - {@link GetLendingAnalysisSummaryCommandInput}
 * @returns {@link GetLendingAnalysisSummaryCommandOutput}
 * @see {@link GetLendingAnalysisSummaryCommandInput} for command's `input` shape.
 * @see {@link GetLendingAnalysisSummaryCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidJobIdException} (client fault)
 *  <p>An invalid job identifier was passed to an asynchronous analysis operation.</p>
 *
 * @throws {@link InvalidKMSKeyException} (client fault)
 *  <p> Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key
 *         was entered incorrectly. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Textract is unable to access the S3 object that's specified in the request.
 *          for more information, <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Configure Access to Amazon S3</a>
 *          For troubleshooting information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html">Troubleshooting Amazon S3</a>
 *          </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 *
 * @public
 */
export class GetLendingAnalysisSummaryCommand extends $Command
  .classBuilder<
    GetLendingAnalysisSummaryCommandInput,
    GetLendingAnalysisSummaryCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Textract", "GetLendingAnalysisSummary", {})
  .n("TextractClient", "GetLendingAnalysisSummaryCommand")
  .sc(GetLendingAnalysisSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLendingAnalysisSummaryRequest;
      output: GetLendingAnalysisSummaryResponse;
    };
    sdk: {
      input: GetLendingAnalysisSummaryCommandInput;
      output: GetLendingAnalysisSummaryCommandOutput;
    };
  };
}
