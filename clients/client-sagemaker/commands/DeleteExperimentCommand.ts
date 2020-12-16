import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteExperimentRequest, DeleteExperimentResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteExperimentCommand,
  serializeAws_json1_1DeleteExperimentCommand,
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

export type DeleteExperimentCommandInput = DeleteExperimentRequest;
export type DeleteExperimentCommandOutput = DeleteExperimentResponse & __MetadataBearer;

/**
 * <p>Deletes an Amazon SageMaker experiment. All trials associated with the experiment must be deleted
 *       first. Use the <a>ListTrials</a> API to get a list of the trials associated with
 *       the experiment.</p>
 */
export class DeleteExperimentCommand extends $Command<
  DeleteExperimentCommandInput,
  DeleteExperimentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteExperimentCommandInput) {
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
  ): Handler<DeleteExperimentCommandInput, DeleteExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteExperimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteExperimentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteExperimentCommandOutput> {
    return deserializeAws_json1_1DeleteExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
