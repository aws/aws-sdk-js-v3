// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetLendingAnalysisSummaryRequest, GetLendingAnalysisSummaryResponse } from "../models/models_0";
import { de_GetLendingAnalysisSummaryCommand, se_GetLendingAnalysisSummaryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class GetLendingAnalysisSummaryCommand extends $Command<
  GetLendingAnalysisSummaryCommandInput,
  GetLendingAnalysisSummaryCommandOutput,
  TextractClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetLendingAnalysisSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLendingAnalysisSummaryCommandInput, GetLendingAnalysisSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLendingAnalysisSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetLendingAnalysisSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Textract",
        operation: "GetLendingAnalysisSummary",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetLendingAnalysisSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLendingAnalysisSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLendingAnalysisSummaryCommandOutput> {
    return de_GetLendingAnalysisSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
