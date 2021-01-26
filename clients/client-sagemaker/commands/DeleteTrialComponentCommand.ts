import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTrialComponentRequest, DeleteTrialComponentResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteTrialComponentCommand,
  serializeAws_json1_1DeleteTrialComponentCommand,
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

export type DeleteTrialComponentCommandInput = DeleteTrialComponentRequest;
export type DeleteTrialComponentCommandOutput = DeleteTrialComponentResponse & __MetadataBearer;

/**
 * <p>Deletes the specified trial component. A trial component must be disassociated from all
 *       trials before the trial component can be deleted. To disassociate a trial component from a
 *       trial, call the <a>DisassociateTrialComponent</a> API.</p>
 */
export class DeleteTrialComponentCommand extends $Command<
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrialComponentCommandInput) {
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
  ): Handler<DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteTrialComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrialComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrialComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTrialComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTrialComponentCommandOutput> {
    return deserializeAws_json1_1DeleteTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
