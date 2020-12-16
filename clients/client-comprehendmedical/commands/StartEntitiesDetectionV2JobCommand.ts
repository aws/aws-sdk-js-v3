import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { StartEntitiesDetectionV2JobRequest, StartEntitiesDetectionV2JobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartEntitiesDetectionV2JobCommand,
  serializeAws_json1_1StartEntitiesDetectionV2JobCommand,
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

export type StartEntitiesDetectionV2JobCommandInput = StartEntitiesDetectionV2JobRequest;
export type StartEntitiesDetectionV2JobCommandOutput = StartEntitiesDetectionV2JobResponse & __MetadataBearer;

/**
 * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
 *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
 */
export class StartEntitiesDetectionV2JobCommand extends $Command<
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartEntitiesDetectionV2JobCommandInput) {
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
  ): Handler<StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StartEntitiesDetectionV2JobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartEntitiesDetectionV2JobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartEntitiesDetectionV2JobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartEntitiesDetectionV2JobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartEntitiesDetectionV2JobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartEntitiesDetectionV2JobCommandOutput> {
    return deserializeAws_json1_1StartEntitiesDetectionV2JobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
