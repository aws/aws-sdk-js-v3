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
} from "@smithy/types";

import { StartDocumentAnalysisRequest, StartDocumentAnalysisResponse } from "../models/models_0";
import { de_StartDocumentAnalysisCommand, se_StartDocumentAnalysisCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDocumentAnalysisCommand}.
 */
export interface StartDocumentAnalysisCommandInput extends StartDocumentAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartDocumentAnalysisCommand}.
 */
export interface StartDocumentAnalysisCommandOutput extends StartDocumentAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the asynchronous analysis of an input document for relationships between detected
 *          items such as key-value pairs, tables, and selection elements.</p>
 *          <p>
 *             <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
 *          documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name
 *          of the document.
 *          </p>
 *          <p>
 *             <code>StartDocumentAnalysis</code> returns a job identifier
 *             (<code>JobId</code>) that you use to get the results of the operation. When text
 *          analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 *          topic that you specify in <code>NotificationChannel</code>. To get the results of the text
 *          analysis operation, first check that the status value published to the Amazon SNS topic is
 *             <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass
 *          the job identifier (<code>JobId</code>) from the initial call to
 *             <code>StartDocumentAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartDocumentAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartDocumentAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // StartDocumentAnalysisRequest
 *   DocumentLocation: { // DocumentLocation
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   FeatureTypes: [ // FeatureTypes // required
 *     "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES",
 *   ],
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
 *   QueriesConfig: { // QueriesConfig
 *     Queries: [ // Queries // required
 *       { // Query
 *         Text: "STRING_VALUE", // required
 *         Alias: "STRING_VALUE",
 *         Pages: [ // QueryPages
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new StartDocumentAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartDocumentAnalysisResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDocumentAnalysisCommandInput - {@link StartDocumentAnalysisCommandInput}
 * @returns {@link StartDocumentAnalysisCommandOutput}
 * @see {@link StartDocumentAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartDocumentAnalysisCommandOutput} for command's `response` shape.
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
export class StartDocumentAnalysisCommand extends $Command<
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
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
  constructor(readonly input: StartDocumentAnalysisCommandInput) {
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
  ): Handler<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDocumentAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "StartDocumentAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartDocumentAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDocumentAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDocumentAnalysisCommandOutput> {
    return de_StartDocumentAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
