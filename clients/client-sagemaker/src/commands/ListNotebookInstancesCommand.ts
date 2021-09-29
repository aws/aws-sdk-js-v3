import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListNotebookInstancesInput, ListNotebookInstancesOutput } from "../models/models_2";
import {
  deserializeAws_json1_1ListNotebookInstancesCommand,
  serializeAws_json1_1ListNotebookInstancesCommand,
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

export interface ListNotebookInstancesCommandInput extends ListNotebookInstancesInput {}
export interface ListNotebookInstancesCommandOutput extends ListNotebookInstancesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an Amazon Web Services
 *             Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListNotebookInstancesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListNotebookInstancesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListNotebookInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookInstancesCommandInput} for command's `input` shape.
 * @see {@link ListNotebookInstancesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListNotebookInstancesCommand extends $Command<
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNotebookInstancesCommandInput) {
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
  ): Handler<ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListNotebookInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotebookInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNotebookInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotebookInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNotebookInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotebookInstancesCommandOutput> {
    return deserializeAws_json1_1ListNotebookInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
