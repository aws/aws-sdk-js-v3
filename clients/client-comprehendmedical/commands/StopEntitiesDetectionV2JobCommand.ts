import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { StopEntitiesDetectionV2JobRequest, StopEntitiesDetectionV2JobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopEntitiesDetectionV2JobCommand,
  serializeAws_json1_1StopEntitiesDetectionV2JobCommand,
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

export type StopEntitiesDetectionV2JobCommandInput = StopEntitiesDetectionV2JobRequest;
export type StopEntitiesDetectionV2JobCommandOutput = StopEntitiesDetectionV2JobResponse & __MetadataBearer;

/**
 * <p>Stops a medical entities detection job in progress.</p>
 */
export class StopEntitiesDetectionV2JobCommand extends $Command<
  StopEntitiesDetectionV2JobCommandInput,
  StopEntitiesDetectionV2JobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopEntitiesDetectionV2JobCommandInput) {
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
  ): Handler<StopEntitiesDetectionV2JobCommandInput, StopEntitiesDetectionV2JobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StopEntitiesDetectionV2JobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopEntitiesDetectionV2JobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopEntitiesDetectionV2JobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopEntitiesDetectionV2JobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopEntitiesDetectionV2JobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopEntitiesDetectionV2JobCommandOutput> {
    return deserializeAws_json1_1StopEntitiesDetectionV2JobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
