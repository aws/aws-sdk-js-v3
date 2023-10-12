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

import { CreateAdapterVersionRequest, CreateAdapterVersionResponse } from "../models/models_0";
import { de_CreateAdapterVersionCommand, se_CreateAdapterVersionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAdapterVersionCommand}.
 */
export interface CreateAdapterVersionCommandInput extends CreateAdapterVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAdapterVersionCommand}.
 */
export interface CreateAdapterVersionCommandOutput extends CreateAdapterVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates  a new version of an adapter. Operates on a provided AdapterId and a specified
 *          dataset provided via the DatasetConfig argument. Requires that you
 *          specify an Amazon S3 bucket with the OutputConfig argument. You can provide an optional KMSKeyId,
 *          an optional ClientRequestToken, and optional tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, CreateAdapterVersionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, CreateAdapterVersionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // CreateAdapterVersionRequest
 *   AdapterId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   DatasetConfig: { // AdapterVersionDatasetConfig
 *     ManifestS3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   KMSKeyId: "STRING_VALUE",
 *   OutputConfig: { // OutputConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Prefix: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAdapterVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAdapterVersionResponse
 * //   AdapterId: "STRING_VALUE",
 * //   AdapterVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAdapterVersionCommandInput - {@link CreateAdapterVersionCommandInput}
 * @returns {@link CreateAdapterVersionCommandOutput}
 * @see {@link CreateAdapterVersionCommandInput} for command's `input` shape.
 * @see {@link CreateAdapterVersionCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Returned when a request cannot be completed as it would exceed a maximum service quota.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 */
export class CreateAdapterVersionCommand extends $Command<
  CreateAdapterVersionCommandInput,
  CreateAdapterVersionCommandOutput,
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
  constructor(readonly input: CreateAdapterVersionCommandInput) {
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
  ): Handler<CreateAdapterVersionCommandInput, CreateAdapterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAdapterVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "CreateAdapterVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Textract",
        operation: "CreateAdapterVersion",
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
  private serialize(input: CreateAdapterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAdapterVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAdapterVersionCommandOutput> {
    return de_CreateAdapterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
