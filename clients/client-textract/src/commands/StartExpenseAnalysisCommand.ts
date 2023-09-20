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

import { StartExpenseAnalysisRequest, StartExpenseAnalysisResponse } from "../models/models_0";
import { de_StartExpenseAnalysisCommand, se_StartExpenseAnalysisCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartExpenseAnalysisCommand}.
 */
export interface StartExpenseAnalysisCommandInput extends StartExpenseAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartExpenseAnalysisCommand}.
 */
export interface StartExpenseAnalysisCommandOutput extends StartExpenseAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the asynchronous analysis of invoices or receipts for data like contact information,
 *    items purchased, and vendor names.</p>
 *          <p>
 *             <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and
 *    PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the
 *    document in that bucket. </p>
 *          <p>
 *             <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you
 *    will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When
 *    the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion
 *    status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>.
 *    To obtain the results of the invoice and receipt analysis operation, ensure that the status value
 *    published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was
 *    returned by your call to <code>StartExpenseAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartExpenseAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartExpenseAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // StartExpenseAnalysisRequest
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
 * const command = new StartExpenseAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartExpenseAnalysisResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartExpenseAnalysisCommandInput - {@link StartExpenseAnalysisCommandInput}
 * @returns {@link StartExpenseAnalysisCommandOutput}
 * @see {@link StartExpenseAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartExpenseAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link BadDocumentException} (client fault)
 *  <p>Amazon Textract isn't able to read the document. For more information on the document
 *          limits in Amazon Textract, see <a>limits</a>.</p>
 *
 * @throws {@link DocumentTooLargeException} (client fault)
 *  <p>The document can't be processed because it's too large. The maximum document size for
 *          synchronous operations 10 MB. The maximum document size for asynchronous operations is 500
 *          MB for PDF files.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at
 *          least one of the other input parameters is different from the previous call to the
 *          operation. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link UnsupportedDocumentException} (client fault)
 *  <p>The format of the input document isn't supported. Documents for operations can be in
 *          PNG, JPEG, PDF, or TIFF format.</p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 */
export class StartExpenseAnalysisCommand extends $Command<
  StartExpenseAnalysisCommandInput,
  StartExpenseAnalysisCommandOutput,
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
  constructor(readonly input: StartExpenseAnalysisCommandInput) {
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
  ): Handler<StartExpenseAnalysisCommandInput, StartExpenseAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExpenseAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "StartExpenseAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Textract",
        operation: "StartExpenseAnalysis",
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
  private serialize(input: StartExpenseAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartExpenseAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExpenseAnalysisCommandOutput> {
    return de_StartExpenseAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
