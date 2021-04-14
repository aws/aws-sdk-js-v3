import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetBehaviorModelTrainingSummariesRequest,
  GetBehaviorModelTrainingSummariesResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand,
  serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand,
} from "../protocols/Aws_restJson1";
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

export type GetBehaviorModelTrainingSummariesCommandInput = GetBehaviorModelTrainingSummariesRequest;
export type GetBehaviorModelTrainingSummariesCommandOutput = GetBehaviorModelTrainingSummariesResponse &
  __MetadataBearer;

/**
 * <p>
 *       Returns a Device Defender's ML Detect Security Profile training model's status.
 *     </p>
 */
export class GetBehaviorModelTrainingSummariesCommand extends $Command<
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBehaviorModelTrainingSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetBehaviorModelTrainingSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBehaviorModelTrainingSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBehaviorModelTrainingSummariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetBehaviorModelTrainingSummariesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBehaviorModelTrainingSummariesCommandOutput> {
    return deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
