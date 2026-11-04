// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartLendingAnalysisRequest, StartLendingAnalysisResponse } from "../models/models_0";
import { StartLendingAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartLendingAnalysisCommand}.
 */
export interface StartLendingAnalysisCommandInput extends StartLendingAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartLendingAnalysisCommand}.
 */
export interface StartLendingAnalysisCommandOutput extends StartLendingAnalysisResponse, __MetadataBearer {}

/**
 * Starts the classification and analysis of an input document. `StartLendingAnalysis` initiates the classification and analysis of a packet of lending documents. `StartLendingAnalysis` operates on a document file located in an Amazon S3 bucket.
 *
 * `StartLendingAnalysis` can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use `DocumentLocation` to specify the bucket name and the file name of the document.
 *
 * `StartLendingAnalysis` returns a job identifier (`JobId`) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in `NotificationChannel`. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either `GetLendingAnalysis` or `GetLendingAnalysisSummary` and provide the `JobId` to obtain the results of the analysis.
 *
 * If using `OutputConfig` to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories:
 *
 * - detailedResponse (contains the GetLendingAnalysis response)
 * - summaryResponse (for the GetLendingAnalysisSummary response)
 * - splitDocuments (documents split across logical boundaries)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartLendingAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartLendingAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // StartLendingAnalysisRequest
 *   DocumentLocation: { // DocumentLocation
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   JobTag: "STRING_VALUE",
 *   NotificationChannel: { // NotificationChannel
 *     SNSTopicArn: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 *   OutputConfig: { // OutputConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Prefix: "STRING_VALUE",
 *   },
 *   KMSKeyId: "STRING_VALUE",
 * };
 * const command = new StartLendingAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartLendingAnalysisResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartLendingAnalysisCommandInput - {@link StartLendingAnalysisCommandInput}
 * @returns {@link StartLendingAnalysisCommandOutput}
 * @see {@link StartLendingAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartLendingAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link BadDocumentException} (client fault)
 *
 * Amazon Textract isn't able to read the document. For more information on the document limits in Amazon Textract, see [Hard limits](https://docs.aws.amazon.com/textract/latest/dg/limits.html).
 *
 * @throws {@link DocumentTooLargeException} (client fault)
 *
 * The document can't be processed because it's too large. The maximum document size for synchronous operations 10 MB. The maximum document size for asynchronous operations is 500 MB for PDF files.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * A `ClientRequestToken` input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Textract service limit was exceeded. For example, if you start too many asynchronous jobs concurrently, calls to start operations (`StartDocumentTextDetection`, for example) raise a LimitExceededException exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Textract service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Textract is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link UnsupportedDocumentException} (client fault)
 *
 * The format of the input document isn't supported. Documents for operations can be in PNG, JPEG, PDF, or TIFF format.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class StartLendingAnalysisCommand extends command<StartLendingAnalysisCommandInput, StartLendingAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "StartLendingAnalysis",
  StartLendingAnalysis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartLendingAnalysisRequest;
      output: StartLendingAnalysisResponse;
    };
    sdk: {
      input: StartLendingAnalysisCommandInput;
      output: StartLendingAnalysisCommandOutput;
    };
  };
}
