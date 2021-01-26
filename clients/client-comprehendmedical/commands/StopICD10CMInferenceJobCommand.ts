import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { StopICD10CMInferenceJobRequest, StopICD10CMInferenceJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopICD10CMInferenceJobCommand,
  serializeAws_json1_1StopICD10CMInferenceJobCommand,
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

export type StopICD10CMInferenceJobCommandInput = StopICD10CMInferenceJobRequest;
export type StopICD10CMInferenceJobCommandOutput = StopICD10CMInferenceJobResponse & __MetadataBearer;

/**
 * <p>Stops an InferICD10CM inference job in progress.</p>
 */
export class StopICD10CMInferenceJobCommand extends $Command<
  StopICD10CMInferenceJobCommandInput,
  StopICD10CMInferenceJobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopICD10CMInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopICD10CMInferenceJobCommandInput, StopICD10CMInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StopICD10CMInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopICD10CMInferenceJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopICD10CMInferenceJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopICD10CMInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopICD10CMInferenceJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopICD10CMInferenceJobCommandOutput> {
    return deserializeAws_json1_1StopICD10CMInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
