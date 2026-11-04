// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLendingAnalysisSummaryRequest, GetLendingAnalysisSummaryResponse } from "../models/models_0";
import { GetLendingAnalysisSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets summarized results for the `StartLendingAnalysis` operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document.
 *
 * You start asynchronous text analysis by calling `StartLendingAnalysis`, which returns a job identifier (`JobId`). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to `StartLendingAnalysis`.
 *
 * To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call `GetLendingAnalysisSummary`, and pass the job identifier (`JobId`) from the initial call to `StartLendingAnalysis`.
 *
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
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidJobIdException} (client fault)
 *
 * An invalid job identifier was passed to an asynchronous analysis operation.
 *
 * @throws {@link InvalidKMSKeyException} (client fault)
 *
 * Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key was entered incorrectly.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter violated a constraint. For example, in synchronous operations, an `InvalidParameterException` exception occurs when neither of the `S3Object` or `Bytes` values are supplied in the `Document` request parameter. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *
 * Amazon Textract is unable to access the S3 object that's specified in the request. for more information, [Configure Access to Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html) For troubleshooting information, see [Troubleshooting Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html)
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Textract is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class GetLendingAnalysisSummaryCommand extends command<GetLendingAnalysisSummaryCommandInput, GetLendingAnalysisSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetLendingAnalysisSummary",
  GetLendingAnalysisSummary$
) {
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
