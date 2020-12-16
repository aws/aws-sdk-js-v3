import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StartAssessmentRunRequest, StartAssessmentRunResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartAssessmentRunCommand,
  serializeAws_json1_1StartAssessmentRunCommand,
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

export type StartAssessmentRunCommandInput = StartAssessmentRunRequest;
export type StartAssessmentRunCommandOutput = StartAssessmentRunResponse & __MetadataBearer;

/**
 * <p>Starts the assessment run specified by the ARN of the assessment template. For this
 *          API to function properly, you must not exceed the limit of running up to 500 concurrent
 *          agents per AWS account.</p>
 */
export class StartAssessmentRunCommand extends $Command<
  StartAssessmentRunCommandInput,
  StartAssessmentRunCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAssessmentRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "StartAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAssessmentRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartAssessmentRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAssessmentRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAssessmentRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAssessmentRunCommandOutput> {
    return deserializeAws_json1_1StartAssessmentRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
