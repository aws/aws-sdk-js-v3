import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteFlowDefinitionRequest, DeleteFlowDefinitionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteFlowDefinitionCommand,
  serializeAws_json1_1DeleteFlowDefinitionCommand,
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

export type DeleteFlowDefinitionCommandInput = DeleteFlowDefinitionRequest;
export type DeleteFlowDefinitionCommandOutput = DeleteFlowDefinitionResponse & __MetadataBearer;

/**
 * <p>Deletes the specified flow definition.</p>
 */
export class DeleteFlowDefinitionCommand extends $Command<
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFlowDefinitionCommandInput) {
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
  ): Handler<DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteFlowDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFlowDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFlowDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFlowDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFlowDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFlowDefinitionCommandOutput> {
    return deserializeAws_json1_1DeleteFlowDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
