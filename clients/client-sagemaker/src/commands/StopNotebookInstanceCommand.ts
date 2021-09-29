import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopNotebookInstanceInput } from "../models/models_2";
import {
  deserializeAws_json1_1StopNotebookInstanceCommand,
  serializeAws_json1_1StopNotebookInstanceCommand,
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

export interface StopNotebookInstanceCommandInput extends StopNotebookInstanceInput {}
export interface StopNotebookInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker
 *             disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker
 *             stops charging you for the ML compute instance when you call
 *                 <code>StopNotebookInstance</code>.</p>
 *         <p>To access data on the ML storage volume for a notebook instance that has been
 *             terminated, call the <code>StartNotebookInstance</code> API.
 *                 <code>StartNotebookInstance</code> launches another ML compute instance, configures
 *             it, and attaches the preserved ML storage volume so you can continue your work.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link StopNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopNotebookInstanceCommand extends $Command<
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopNotebookInstanceCommandInput) {
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
  ): Handler<StopNotebookInstanceCommandInput, StopNotebookInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopNotebookInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopNotebookInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopNotebookInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopNotebookInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopNotebookInstanceCommandOutput> {
    return deserializeAws_json1_1StopNotebookInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
