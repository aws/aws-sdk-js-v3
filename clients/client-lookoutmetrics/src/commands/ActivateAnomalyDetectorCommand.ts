import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ActivateAnomalyDetectorRequest, ActivateAnomalyDetectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ActivateAnomalyDetectorCommand,
  serializeAws_restJson1ActivateAnomalyDetectorCommand,
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

export interface ActivateAnomalyDetectorCommandInput extends ActivateAnomalyDetectorRequest {}
export interface ActivateAnomalyDetectorCommandOutput extends ActivateAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Activates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ActivateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ActivateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ActivateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link ActivateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ActivateAnomalyDetectorCommand extends $Command<
  ActivateAnomalyDetectorCommandInput,
  ActivateAnomalyDetectorCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ActivateAnomalyDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateAnomalyDetectorCommandInput, ActivateAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ActivateAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateAnomalyDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ActivateAnomalyDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ActivateAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateAnomalyDetectorCommandOutput> {
    return deserializeAws_restJson1ActivateAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
