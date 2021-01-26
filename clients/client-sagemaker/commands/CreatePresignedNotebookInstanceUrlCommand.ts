import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreatePresignedNotebookInstanceUrlInput, CreatePresignedNotebookInstanceUrlOutput } from "../models/models_1";
import {
  deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand,
  serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreatePresignedNotebookInstanceUrlCommandInput = CreatePresignedNotebookInstanceUrlInput;
export type CreatePresignedNotebookInstanceUrlCommandOutput = CreatePresignedNotebookInstanceUrlOutput &
  __MetadataBearer;

/**
 * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook
 *             instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook
 *             instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook
 *             instance. The console uses this API to get the URL and show the page.</p>
 *         <p> The IAM role or user used to call this API defines the permissions to access the
 *             notebook instance. Once the presigned URL is created, no additional permission is
 *             required to access this URL. IAM authorization policies for this API are also enforced
 *             for every HTTP request and WebSocket frame that attempts to connect to the notebook
 *             instance.</p>
 *         <p>You can restrict access to this API and to the URL that it returns to a list of IP
 *             addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the
 *                 <code>aws:SourceIP</code> condition context key to specify the list of IP addresses
 *             that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p>
 *         <note>
 *             <p>The URL that you get from a call to <a>CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If
 *                 you try to use the URL after the 5-minute limit expires, you are directed to the
 *                 AWS console sign-in page.</p>
 *         </note>
 */
export class CreatePresignedNotebookInstanceUrlCommand extends $Command<
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePresignedNotebookInstanceUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePresignedNotebookInstanceUrlCommandInput, CreatePresignedNotebookInstanceUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreatePresignedNotebookInstanceUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePresignedNotebookInstanceUrlInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePresignedNotebookInstanceUrlOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreatePresignedNotebookInstanceUrlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePresignedNotebookInstanceUrlCommandOutput> {
    return deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
