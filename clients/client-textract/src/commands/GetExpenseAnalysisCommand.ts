// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetExpenseAnalysisRequest, GetExpenseAnalysisResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetExpenseAnalysisCommand,
  serializeAws_json1_1GetExpenseAnalysisCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 *
 * The input for {@link GetExpenseAnalysisCommand}.
 */
export interface GetExpenseAnalysisCommandInput extends GetExpenseAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link GetExpenseAnalysisCommand}.
 */
export interface GetExpenseAnalysisCommandOutput extends GetExpenseAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and
 *    receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input
 *    invoices and receipts.</p>
 *          <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon
 *    completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the
 *    Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to
 *     <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation,
 *    first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so,
 *    call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the
 *    initial call to <code>StartExpenseAnalysis</code>.</p>
 *          <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are
 *    more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in
 *    the operation response contains a pagination token for getting the next set of results. To get
 *    the next page of results, call <code>GetExpenseAnalysis</code>, and populate the
 *     <code>NextToken</code> request parameter with the token value that's returned from the previous
 *    call to <code>GetExpenseAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetExpenseAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetExpenseAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = {
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetExpenseAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetExpenseAnalysisCommandInput - {@link GetExpenseAnalysisCommandInput}
 * @returns {@link GetExpenseAnalysisCommandOutput}
 * @see {@link GetExpenseAnalysisCommandInput} for command's `input` shape.
 * @see {@link GetExpenseAnalysisCommandOutput} for command's `response` shape.
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
 *
 */
export class GetExpenseAnalysisCommand extends $Command<
  GetExpenseAnalysisCommandInput,
  GetExpenseAnalysisCommandOutput,
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
  constructor(readonly input: GetExpenseAnalysisCommandInput) {
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
  ): Handler<GetExpenseAnalysisCommandInput, GetExpenseAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExpenseAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetExpenseAnalysisCommand";
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
  private serialize(input: GetExpenseAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetExpenseAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExpenseAnalysisCommandOutput> {
    return deserializeAws_json1_1GetExpenseAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
