import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DetectAnomaliesRequest, DetectAnomaliesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DetectAnomaliesCommand,
  serializeAws_restJson1DetectAnomaliesCommand,
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

export type DetectAnomaliesCommandInput = Omit<DetectAnomaliesRequest, "Body"> & {
  Body: DetectAnomaliesRequest["Body"] | string | Uint8Array | Buffer;
};
export type DetectAnomaliesCommandOutput = DetectAnomaliesResponse & __MetadataBearer;

/**
 * <p>Detects anomalies in an image that you supply. </p>
 *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
 *          that the image contains one or more anomalies and a confidence value for the prediction.</p>
 *          <note>
 *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
 *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
 *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
 *          </note>
 */
export class DetectAnomaliesCommand extends $Command<
  DetectAnomaliesCommandInput,
  DetectAnomaliesCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectAnomaliesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DetectAnomaliesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectAnomaliesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectAnomaliesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectAnomaliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DetectAnomaliesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectAnomaliesCommandOutput> {
    return deserializeAws_restJson1DetectAnomaliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
